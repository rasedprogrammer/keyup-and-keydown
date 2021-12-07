const input = document.querySelector('input');
// input.addEventListener('keyup', function (e) {
//   console.log(e.key);
//   console.log(e.code);
// });
input.addEventListener('keyup', function (e) {
  switch (e.code) {
    case 'ArrowUp':
      console.log('UP@!');
      break;
    case 'ArrowDown':
      console.log('Down@!');
      break;
    case 'ArrowLeft':
      console.log('Left@!');
      break;
    case 'ArrowRight':
      console.log('Right@!');
      break;
    default:
      console.log('Ignore it!');
  }
});

// input.addEventListener('keydown', function () {
//   console.log('KeyDown');
// });
