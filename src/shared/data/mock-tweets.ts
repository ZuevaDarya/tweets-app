import type { ITweet } from "../types/tweet.interface";

const MOCK_TWEETS: ITweet[] = [
  {
    author: "tigrulkins",
    text: "Dashulkins + Tigrulkins = luboff",
  },
  {
    author: "tigrulkins",
    text: "Siskins + Piskins = Zlodeikins",
  },
  {
    author: "frontend_alchemy",
    text: "CSS — это магия, которую мы все согласились не понимать до конца, но делаем вид, что контролируем 🎨✨",
  },
  {
    author: "js_wisdom",
    text: "Каждый раз, когда ты пишешь `any` в TypeScript, где-то плачет ангел. Но давайте честно — иногда выжить важнее святости 😇",
  },
  {
    author: "react_poetry",
    text: "Мой компонент перерендерился 42 раза за секунду. Я не знаю, почему. Я боюсь спросить. Я просто ставлю `memo` и молюсь 🙏",
  },
  {
    author: "css_confessions",
    text: "Flexbox решил 90% моих проблем с версткой. Оставшиеся 10% — это когда я забываю обернуть всё в родительский контейнер 🧘",
  },
  {
    author: "debugging_life",
    text: "Работает на моей машине — самая опасная фраза в истории фронтенда. Сразу после 'давай просто добавим jQuery' 💀",
  },
  {
    author: "nextjs_journey",
    text: "Перешел на App Router в Next.js 15. `use client` теперь как турникет — поставил и пошел. Не поставил — и не суйся 🚪",
  },
  {
    author: "tailwind_wizard",
    text: "Мой `className`: 'flex items-center justify-between p-4 mt-2 hover:bg-gray-100 rounded-lg transition-all'. HTML как поэма, CSS как код 🎭",
  },
  {
    author: "state_manager",
    text: "Zustand vs Redux vs Context. Выбрал то, что не заставляет меня писать 15 строк boilerplate для одного счетчика 🎲",
  },
  {
    author: "vite_lover",
    text: "Попробовал Vite. Webpack больше не звонит. HMR работает быстрее, чем я успеваю моргнуть ⚡",
  },
  {
    author: "a11y_advocate",
    text: "Добавил `alt` к изображению. Где моя Нобелевская премия? А если серьезно — доступность не опция, а обязанность ♿",
  },
  {
    author: "browser_whisperer",
    text: "Объясните клиенту, что 'сделайте кнопку чуть ярче' — это не приоритет номер один, когда у нас 500 ошибок в консоли 🔥",
  },
  {
    author: "git_gud",
    text: "Удалил `node_modules` и переустановил. Это наш фронтенд-эквивалент 'выключи и включи заново' 🔄",
  },
  {
    author: "dark_mode_fan",
    text: "Добавил темную тему за 10 минут. Клиент: 'А можно еще шрифт покрупнее?' — теперь это займет неделю 📅",
  },
  {
    author: "performance_ninja",
    text: "Lighthouse показал 99. Я потерял 1 балл из-за того, что Google Fonts грузится слишком медленно. Извините, что живу не в датацентре 🌍",
  },
  {
    author: "api_wrangler",
    text: "Бэкенд: 'Вот JSON, разбирайтесь'. Я: *достает 15 интерфейсов и 3 утилиты для парсинга* 🧩",
  },
  {
    author: "component_architect",
    text: "Создал компонент Button с 25 пропсами. Теперь он может всё, кроме своей прямой обязанности — быть просто кнопкой 🔘",
  },
  {
    author: "responsive_hero",
    text: "На десктопе — идеально. На планшете — терпимо. На телефоне — пожалуйста, поверните экран и закройте один глаз 🤳",
  },
  {
    author: "bundle_phobic",
    text: "Посмотрел на размер `dist` после сборки. Добавил `lazy loading` для всего, включая свою совесть 📦",
  },
  {
    author: "form_validator",
    text: "Пользователь: 'Почему мой email не проходит валидацию?' Его email: 'test' Это даже кнопку отправить стыдно разблокировать 📧",
  },
  {
    author: "tech_debt_collector",
    text: "Нашел TODO в коде, которому 3 года. Комментарий: 'Нужно починить, когда будет время'. Время так и не наступило ⏰",
  },
];

export default MOCK_TWEETS;
