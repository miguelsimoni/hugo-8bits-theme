document.addEventListener("DOMContentLoaded", () => {
    var parallax_animation_init = function () {
        document.querySelectorAll(".parallax").forEach(function (element) {
            var speed = element.getAttribute("data-parallax-speed");
            if (speed) {
                var bgPos = window.pageYOffset / speed;
                element.style.backgroundPosition = "center -" + bgPos + "px";
            }
        });
    }

    window.addEventListener("scroll", function () {
        parallax_animation_init();
    });
});
