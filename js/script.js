 $('.card_body').click(function () {
     $(this).parents('.item_box').find('.circle_box').toggleClass('yellow')
 })
 const smoothLinks = document.querySelectorAll('a[href^="#"]');
 for (let smoothLink of smoothLinks) {
     smoothLink.addEventListener('click', function (e) {
         e.preventDefault();
         const id = smoothLink.getAttribute('href');

         document.querySelector(id).scrollIntoView({
             behavior: 'smooth',
             block: 'start'
         });
     });
 };
