// // Start jQuery
// $(function(){
// 	'use strict'
// 	// Typewriter
//   var theText = $('.typer').data('text'),
//     theTextLength = theText.length,
//     n = 0,
//     theTyper = setInterval(function(){
//       $('.typer').each(function(){
//         $(this).text($(this).text() + theText[n]);
//       });
//       n += 1;
//       if(n >= theTextLength){
//         clearInterval(theTyper);
//       }
//     }, 100);
//   // smoth scroll
//   $('.navbar-nav .nav-item .nav-link').on('click', function(){
//     $('html,body').animate({
//       scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
//   });
// });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });