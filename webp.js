const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async() => {
  const files = await imagemin(
      ['src/assets/images/*.jpg', 'src/assets/images/*.jpg'],
      {
        destination: 'src/assets/images/webp',
        plugins: [imageminMozjpeg({quality: 65})]
      }
  );
  console.log(files);
})();