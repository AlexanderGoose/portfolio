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

// https://www.youtube.com/watch?v=GUEB9FogoP8 


$(document).ready(function(){
    $('.slick-carousel').slick({
      arrows: true,  // Display navigation arrows
      dots: true,    // Display navigation dots
      infinite: true, // Enable infinite scrolling
      speed: 500,    // Transition speed
      slidesToShow: 1, // Number of slides to show
      slidesToScroll: 1 // Number of slides to scroll at a time
    });
  });