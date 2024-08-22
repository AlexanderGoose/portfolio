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



// Trigger CSS Animations when elements are scrolled into view

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It addes an 'in-view' class to elements when they come into view (and removes the class when not on screen)
// Use to add @keyframe or transition animations to elements so they animate once they are on screen

//TO USE
// Simply add the .animate class to those HTML elements that you wish to animate. For example, <h1 class="animate">
// Once in the viewport, the JS will add the 'in-view' class to those elements. For example, <h1 class="animate in-view">
// Define your CSS to enable animations once that element is in view. For example, h1.in-view { }

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animate');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

