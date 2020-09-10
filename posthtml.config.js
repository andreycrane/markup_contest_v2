module.exports = {
  plugins: {
    'posthtml-include': {},
    'posthtml-expressions': {
      locals: {
        gallery: [
          '../img/gallery-image-1.png',
          '../img/gallery-image-2.png',
          '../img/gallery-image-3.png',
          '../img/gallery-image-4.png',
          '../img/gallery-image-5.png',
          '../img/gallery-image-6.png',
          '../img/gallery-image-7.png',
        ],
        partners: [
          '../img/logos-apple-app-store.svg',
          '../img/logos-apiary.svg',
          '../img/logos-android-icon.svg',
          '../img/logos-basecamp.svg',
          '../img/logos-airbnb.svg',
          '../img/logos-ibm.svg',
        ],
      },
    },
  },
};
