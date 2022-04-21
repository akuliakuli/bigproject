let slides = document.querySelectorAll(".header_slider"),
    prev = document.querySelector(".left"),
    next = document.querySelector(".right")
    buttons = document.querySelectorAll(".review_button");

    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.classList.remove("main"));
        slides[slideIndex - 1].classList.add("main")
        buttons.forEach(item => item.classList.remove("active"));
        buttons[slideIndex - 1].classList.add("active");
      
    }
  
    function plusSlides (n) {
        showSlides(slideIndex += n);
    }
    buttons.forEach(item => {
        item.addEventListener("click",() => {
            plusSlides(1)
        })
    })
    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });