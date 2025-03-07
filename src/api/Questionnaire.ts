import QuestionnaireModel from "~/models/QuestionaryModel";

const generateQuestionnaire: any = (id: number) => {
  return {
    id: id.toString(),
    title: `Опросник ${id}`,
    description: `Это пример опросника с фейковыми данными #${id}`,
    questions: [
      {
        id: 'q1',
        text: 'Как часто вы пользуетесь нашим продуктом?',
        type: 'multiple__choice',
        answers: [
          {
            id: 'a1',
            text: 'Ежедневно',
            next__question__id: 'q2',
          },
          {
            id: 'a2',
            text: 'Несколько раз в неделю',
            next__question__id: 'q3',
          },
          {
            id: 'a3',
            text: 'Редко',
            next__question__id: 'q4',
          },
        ],
      },
      {
        id: 'q2',
        text: 'Что вам нравится в нашем продукте?',
        type: 'text',
        answers: [],
      },
      {
        id: 'q3',
        text: 'Что бы вы хотели улучшить?',
        type: 'text',
        answers: [],
      },
      {
        id: 'q4',
        text: 'Почему вы редко пользуетесь нашим продуктом?',
        type: 'text',
        answers: [],
      },
    ],
  };
};

export const fetchQuestionnaire = (): Promise<any> => {
  const questionnaires: any[] = [];

  for (let i = 1; i <= 15; i++) {
    questionnaires.push(new QuestionnaireModel(generateQuestionnaire(i)));
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(questionnaires);
    }, 1000);
  });
};
