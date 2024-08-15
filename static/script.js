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


const $images = document.querySelectorAll('.proj-img');

$images.forEach(($image) => {
	$image.animate(
		{
			opacity: [0, 1],
			clipPath: ['inset(45% 20% 45% 20%)', 'inset(0% 0% 0% 0%)'],
		},
		{
			fill: 'both',
			timeline: new ViewTimeline({
				subject: $image,
			}),
			rangeStart: 'entry 25%',
			rangeEnd: 'cover 50%',
		}
	);
});