import axios from "axios";
// Версія
// Усі запити отримують версію API v1 . Ми рекомендуємо вам спеціально подати запит на це через Accept-Versionзаголовок:
// Щоб автентифікувати запити таким чином, передайте ключ доступу вашої програми через заголовок авторизації HTTP:

// Authorization: Client-ID YOUR_ACCESS_KEY
// Ви також можете передати це значення за допомогою client_idпараметра запиту:
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// Accept-Version: v1
// Пагінація
// Запити, які повертають кілька елементів (наприклад, список фотографій), за замовчуванням розбиватимуться на сторінки по 10 елементів, максимум до 30. Можна надати додаткові параметри pageта per_pageпараметри запиту, щоб визначити, яка сторінка та кількість елементів на сторінки для повернення відповідно.
// Якщо pageне надано, буде повернено першу сторінку.
// Заголовки сторінки
// Додаткова інформація про розбивку сторінок повертається в заголовках відповіді:

// Посторінкові та загальні
// Заголовки X-Per-Pageта X-Totalдають відповідно кількість елементів, що повертаються на кожній сторінці, і загальну кількість елементів.

// Посилання
// URL-адреси для першої, останньої, наступної та попередньої сторінок надаються, якщо вони є. Вони відокремлюються комами та розрізняються за допомогою relатрибута.

// Наприклад, після запиту сторінки 3 списку фотографій:

// Link: <https://api.unsplash.com/photos?page=1>; rel="first",
// <https://api.unsplash.com/photos?page=2>; rel="prev",
// <https://api.unsplash.com/photos?page=346>; rel="last",
// <https://api.unsplash.com/photos?page=4>; rel="next"
// Приклад використання зображення
// Якщо ви досягнете /photosкінцевої точки, ви отримаєте список фотографій. Для кожного повернутого фотооб’єкта список URL-адрес зображень повертається в розділі urls.*:

// {
//   "urls": {
//      "raw": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9",
//      "full": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80",
//      "regular": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max",
//      "small": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max",
//      "thumb": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
//   },
//   // ... other photo fields
// }
// fullповертає фотографію у форматі jpg із максимальними розмірами. З міркувань продуктивності ми не рекомендуємо використовувати це, оскільки фотографії завантажуватимуться повільно для ваших користувачів.
// regularповертає фотографію у форматі jpg із шириною 1080 пікселів.
// smallповертає фотографію у форматі jpg із шириною 400 пікселів.
// thumbповертає фотографію у форматі jpg із шириною 200 пікселів.
// rawповертає базову URL-адресу зображення лише з шляхом до фотографії та ixidпараметром для вашої програми API. Використовуйте це, щоб легко додати додаткові параметри зображення для створення власної URL-адреси зображення.
// const myApiKey = "";
// axios.defaults.headers.common["Authorization"] = myApiKey;
// axios.defaults.headers.common["Accept"] = "v1";

export const fetchImagesFromAPI = async (query, page) => {
  // const response = await axios.get(
  //   `https://api.unsplash.com/search/photos?query=${query}&page=${page}`
  // );
  const PIXABAY_KEY = "47506069-50a24acca197abc732faaa7f2";
  const response = await axios(`https://pixabay.com/api/`, {
    params: {
      key: PIXABAY_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: false,
      page,
      per_page: 10,
    },
  });
  return response.data;
};
