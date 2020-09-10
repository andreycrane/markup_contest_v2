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
        testimonials: [
          {
            name: 'Claire Bell',
            prof: 'Designer',
            descr: `I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you. Wonderful experience!`,
            img: '../img/user-pic-Claire-Bell.png',
          },
          {
            name: 'Philip Watson',
            prof: 'Coder',
            descr: 'You’re just awesome! The prices are reasonable, and the service is just great. Thank you so much! Highly recommend!',
            img: '../img/user-pic-Francisco-Lane.png',
          },
          {
            name: 'Ralph Fisher',
            prof: 'Coder',
            descr: 'A friend of mine advised you to me, and I definitely liked working with you. It was a good experience. Thanks a lot!',
            img: '../img/user-pic-Jorge-Murphy.png',
          },
          {
            name: 'Jorge Murphy',
            prof: 'Designer',
            descr: 'You did an amazing job and I wholeheartedly recommend you to everyone I know. You are the best!',
            img: '../img/user-pic-Ralph-Fisher.png',
          },
        ],
      },
    },
  },
};
