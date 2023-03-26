//carousel

        $(".carousel").owlCarousel({
            margin: 10,
            loop:true,
            autoplay:true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
              0:{
                items: 1,
                nav: false
              },
              600:{
                items: 2,
                nav: false
              },
              1000:{
                items: 3,
                nav: false
              } 
            }

        });


// scroll 

const headerEl = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
            headerEl.classList.add('header-scrolled')
            } else if (window.scrollY <=50) {
                headerEl.classList.remove('header-scrolled') 
            }
        })