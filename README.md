# markup_contest_v2

### Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Deploy project to firebase hosting
```
npm run deploy
```

### Install package for converting images to webp format
```
sudo apt-get install webp
```

### Convert images into webp format
```
./convert_images.sh
```

### Useful information for working with post-html

  1. Include partial
  ```html
  <include src="./src/html/partial.html" locals="{ paritalLovalVar }"></include>
  ```
  2. Include image
  ```html
  <img src=".../img/some-image.png" />
  ```
  3. Conditional markup
  ```html
  <if condition="true">
    <span class="conditional-tag"></span>
  </if>
  ```
  4. Evaluate variable
  ```html
  <span class="evaluate-variable">{{ variable }}</span>
  ```
  5. Looping in markup
  ```html
    <each loop="item in items">
      <include src="./src/html/item.html" locals="{ item }"></include>
    </each>
  ```
  6. Include image into css
  ```css
  .no-webp .selector {
    background-image: url(../../img/image.png);
  }
  .webp .selector {
    background-image: url(../../img/image.webp);
  }
  ```


### Usefull links

[Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/fonts)

[Parcel](https://parceljs.org/)

[PostHTML](https://github.com/posthtml)

[PostHTML include](https://github.com/posthtml/posthtml-include)

[PostHTML expressions](https://github.com/posthtml/posthtml-expressions)

[Modernizr](https://modernizr.com/)
