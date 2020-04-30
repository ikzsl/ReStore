export default class BookstoreServices {
  data = [
    {
      id: 1,
      title: 'Prod',
      author: 'Kolyan',
      price: 19,
      coverImage: 'https://88.img.avito.st/640x480/4963545988.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Tolyan',
      price: 14,
      coverImage: 'https://www.moscowbooks.ru/image/book/517/orig/i517179.jpg',
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.95) {
          reject(new Error('kakoytopizdec'));
        } else resolve(this.data);
      }, 1000);
    });
  }
}
