
    function addSlide(slides,prev,next,reviewbtn,...classes){
        let sliders = document.querySelectorAll(slides),
            prevbtn = document.querySelector(prev),
            nextbtn = document.querySelector(next),
            reviewbtns = document.querySelectorAll(reviewbtn);

        let slideIndex = 1;
        console.log(classes[0])
        console.log(classes[1])
        showSlide(slideIndex)

        function showSlide(n){
            if(n > sliders.length){
                slideIndex = 1
            }
            if(n < 1){
                slideIndex = sliders.length;
            }
            sliders.forEach(item => item.classList.remove(classes[0]));
            sliders[slideIndex - 1].classList.add(classes[0]);

            reviewbtns.forEach(item => item.classList.remove(classes[1]))
            reviewbtns[slideIndex - 1].classList.add(classes[1])
            
        }
        function plusSlides(n){
            showSlide(slideIndex += n)
        }

        reviewbtns.forEach(item => {
            item.addEventListener("click",() => {
                plusSlides(1)
            })
        })
        prevbtn.addEventListener('click', function(){
            plusSlides(-1);
        });
    
        nextbtn.addEventListener('click', function(){
            plusSlides(1);
        });
        
    }
    addSlide(".header_slider",".left", ".right", ".header_slider_button", "main", "active")


