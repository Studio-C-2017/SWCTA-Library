/*
 * Created by Addison C. Quijano Sorca
 * acqsorca.github.io
 * Licensed under CC BY 4.0
 */

function main() {
    // BEGIN slideshow
    var slideshow = document.getElementById("slideshow"),
        carousel = document.getElementById("carousel"),
        slides = document.getElementsByClassName("slide"),
        leftArrow = document.getElementById("left-arrow"),
        rightArrow = document.getElementById("right-arrow"),
        numberOfSlides = slides.length - 1,
        slideWidth = slideshow.offsetWidth,
        currentSlide = 0,
        slideIcons = document.getElementsByClassName("slide-icon"),
        selectedIconImage = "url(assets/img/slideshow-icons/slide-icon_selected.png)",
        unselectedIconImage = "url(assets/img/slideshow-icons/slide-icon_unselected.png)",
        shift = 0,
        i = 0;
    //slideIcons[currentSlide].style.backgroundImage = selectedIconImage;

    function resizeSlides() {
        var slideshowWidth = slideshow.offsetWidth;

        for (i = 0; i < slides.length; i += 1) {
            slides[i].style.width = slideshowWidth + "px";
        }

        slideWidth = slideshowWidth;
        return slideshowWidth;
    }

    // Puts shift into slideshow style
    // Puts value of shift into the style of the carousel
    function shifter(shiftSize) {
        carousel.style.left = String(shiftSize) + "px";
    }

    // Use to shift to a specific slide
    function shiftToSlide(desiredSlide) {
        currentSlide = desiredSlide;
        shift = -(slideWidth * (desiredSlide));
        slideIcons[desiredSlide].style.backgroundImage = selectedIconImage;
        shifter(shift);
        resetTimer();
    }

    // Changes the icon of a slide to the unselected icon
    function resetIcon(currentSl) {
        console.log(slideIcons[currentSl]);
        slideIcons[currentSl].style.backgroundImage = unselectedIconImage;
    }

    function leftShift() {
        resetIcon(currentSlide);
        currentSlide += 1;
        if (currentSlide > numberOfSlides) {
            shiftToSlide(0);
        } else {
            shiftToSlide(currentSlide);
        }
    }

    function rightShift() {
        resetIcon(currentSlide);
        currentSlide -= 1;
        if (currentSlide < 0) {
            shiftToSlide(numberOfSlides);
        } else {
            shiftToSlide(currentSlide);
        }
    }


    /* END slideshow functions */

    // Creates a timer
    var timerId = window.setInterval(leftShift, 5000);

    // Resets timer when called
    function resetTimer() {
        clearInterval(timerId);
        timerId = window.setInterval(leftShift, 5000);
    }

    // Adds event listeners to the each icon
    // so that the carousel will shift to the icon's respective slide

    while (i <= numberOfSlides) {
        slideIcons[i].addEventListener("click", function () {
            resetIcon(currentSlide);
            shiftToSlide(i);
            slideIcons[i].style.backgroundImage = selectedIconImage;
        });
        i += 1;
    }


    // This is where we call our functions

    // Make sure our slides are the proper width (100%)
    resizeSlides();

    window.addEventListener("resize", resizeSlides);

    slideIcons[0].style.backgroundImage = selectedIconImage;

    rightArrow.addEventListener("click", leftShift);

    leftArrow.addEventListener("click", rightShift);
}

main();
