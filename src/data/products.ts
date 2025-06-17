import type { IProduct } from '../types/product';

export const products: IProduct[] = [
  {
    id: 1,
    title: "Зеленый чай Матча",
    origin: "Япония",
    price: 34900,
    currency: "RUB",
    imageUrl: ""
  },
  {
    id: 2,
    title: "Кофе в зернах",
    origin: "Колумбия",
    price: 42000,
    currency: "RUB",
    imageUrl: "https://top10ali.ru/wp-content/uploads/2022/11/top-10-kofe-v-zyornah-s-aliekspress.jpg"
  },
  {
    id: 3,
    title: "Оливковое масло",
    origin: "Италия",
    price: 890,
    currency: "EUR",
    imageUrl: "https://www.thesun.co.uk/wp-content/uploads/2024/10/pouring-extra-virgin-olive-oil-898342003.jpg?strip=all&quality=100&w=1920&h=1080&crop=1"
  },
  {
    id: 4,
    title: "Кленовый сироп",
    origin: "Канада",
    price: 1299,
    currency: "USD",
    imageUrl: "https://avatars.mds.yandex.net/i?id=37394151638bb97b67460bcd1ad8bbda_l-8567811-images-thumbs&n=13"
  }
];