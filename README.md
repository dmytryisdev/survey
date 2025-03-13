# Poll admin panel

## Инструкция по запуску приложения

### Требования
-  Node.js 18+

### Запуск

Для запуска приложения необходимо последовательно запустить команды 
```
npm run instal
```

#### Для запуска в dev режиме

```
npm run dev
```

Далее перейти на страницу http://localhost:5173/

#### Для production сборки

```
npm run build
```

```
npm run preview
```

Далее перейти на страницу http://localhost:4173/

### Настройка 

В `src/config.ts` можно настроить путь к API серверу. По умолчанию стоит `http://localhost:8000/api`