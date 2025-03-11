import UserModel from "~/models/User";

const surnames = [
  "Иванов",
  "Петров",
  "Смирнов",
  "Кузнецов",
  "Попов",
  "Соколов",
  "Лебедев",
  "Козлов",
  "Новиков",
  "Морозов",
  "Волков",
  "Соловьёв",
  "Васильев",
  "Зайцев",
  "Павлов"
];

const getRandomInitial = (): string => {
  const letters = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩ";
  return letters.charAt(Math.floor(Math.random() * letters.length));
};

const getRandomString = (length: number): string => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const generateUser: any = (id: number, isBanned: boolean) => {
  const surname = surnames[(id - 1) % surnames.length];
  const firstInitial = getRandomInitial();
  const secondInitial = getRandomInitial();
  const fullName = `${surname} ${firstInitial}. ${secondInitial}.`;
  const email = `${getRandomString(10)}@example.com`;
  return {
    id: id.toString(),
    fullName,
    email,
    isBanned: isBanned,
  };
};

export const fetchUsers = (isBanned = false): Promise<any> => {
  const users: any[] = [];
  for (let i = 1; i <= 15; i++) {
    users.push(new UserModel(generateUser(i, isBanned)));
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};