// splits up the name and slowly prints it out to the screen
// used on the home page
// https://www.youtube.com/watch?v=GUEB9FogoP8 
document.addEventListener('DOMContentLoaded', (event) => {
    const text = document.querySelector('.fancy-name');
    const strText = text.textContent;
    const splitText = strText.split("");

    text.textContent = "";

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>"
    }

    let char = 0;
    let timer = setInterval(onTick, 30);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade')
        char++

        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete(){
        clearInterval(timer);
        timer = null;
    }
});



// this function is for the slick scrolling carousel in project.html
$(document).ready(function(){
    $('.slick-carousel').slick({
      arrows: true,      // Display navigation arrows
      dots: true,        // Display navigation dots
      infinite: true,    // Enable infinite scrolling
      speed: 500,        // Transition speed
      slidesToShow: 1,   // Number of slides to show
      slidesToScroll: 1  // Number of slides to scroll at a time
    });
  });



// used only on mobile, makes the logos come in from the left
// used to ensure only one at a time and ON SCROLL
// used in resume.html
document.addEventListener("DOMContentLoaded", function() {
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3 // Trigger when 50% of the element is in view
});

// const el = document.querySelector('.slide-in');
// observer.observe(el);
const slideInElements = document.querySelectorAll('.slide-in');
slideInElements.forEach(el => observer.observe(el));
});

