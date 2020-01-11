
// console.log("読み込みオーケー");
// alert("test");
// var speed = 3000; // フェードイン・フェードアウトの処理時間（1000で1秒）
// var times = 5000; // 画像切り替えの間隔（1000で1秒）
// var className = '.bgCrossFade';
// var bgArray = [
//   "IMG_5384_copy.jpg",
//   "IMG_6021_copy.jpg",
//   "IMG_7635_copy.jpg",
//   "IMG_8926_copy.jpg"
//   ];


// $.each(bgArray.reverse(), function(i, value) {
//   $(className).prepend('<div class="slides" style="background-image:url(' + value + ');"></div>');
// });
// var bgNo = 1;
// var bgLength = bgArray.length;
// setInterval(function(){
//   $(className + ' .slides:nth-child(' + bgNo + ')').fadeOut(speed);
//   $(className + ' .slides:nth-child(' + ( bgNo === bgLength ? 1 : bgNo + 1) + ')').fadeIn(speed/3);
//   if ( bgNo >= bgLength ) {
//     bgNo = 1;
//   } else {
//     bgNo += 1;
//   }
// }, times);