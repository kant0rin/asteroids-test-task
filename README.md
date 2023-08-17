# **asteroid-test-task**

## Ссылка на хостинг - <a href='https://asteroids-test-task-jwh5.vercel.app/'>asteroid-test-task</a>

## Описание приложения

Веб приложение выполненное в качестве тестового задания - <a href='https://docs.google.com/document/d/1bSC3hgaYe69FJFKKNFHKokJ2Rs0bxkYQ9ixnBS8xn-M/edit#heading=h.zhvqi4h9zsj2'>ТЗ</a>.

В прилоложении реализован SSR используя NextJS фреймворк

В приложении доступны 3 страницы:

- Главная страница ```/``` - отображает список астероидов начиная сегодняшней даты и в бесконечность. У пользователя есть возможность прочитать краткую информацию об астероиде, добавить его в корзину, или перейти на страницу астероида - **нажав на дату**
- Страница заказа ```/order``` - отображает список выбранных к заказу астероидов, **Если нет выбраных астероидов - редиректит на главную страницу**
- Страница астероида ```/asteroid/[id]``` - отображает краткую информацию о конкретном астероиде, а также перечисляет список всех его сближений с Землей

## Используемый стек технологий: 

- **Next.js 13**, **Typescript**, **SCSS modules**, **Axios**
- Unit-тесты - **Jest** и **React testing library**
- Скрин-тесты - **Storybook**

<h2>Запуск и сборка приложения </h2>

<p>Для запуска</p>

```bash
npm run dev
```

<p>Для сборки</p>

```bash
npm run build
```

## Запуск тестов приложения

Для запуска Jest тестов

```bash
npm run test
```

Для запуска StoryBook тестов

```bash
npm run storybook
```
