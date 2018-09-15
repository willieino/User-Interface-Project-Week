function about() {

    let showFlg = false;
    let menuOpen = true;
    let timer = "";
    let transitionFlg = false;

    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", clickMenu);
    const navButton = document.querySelector(".nav-button");
    navButton.addEventListener("click", clickMenu);
    //console.log("this is navbutton:" + navButton);
    const formInput2 = document.querySelector(".input2");
    formInput2.addEventListener("click", inputFocus2);
    
    let menu = document.querySelector(".nav");
    
   
      
    function clickMenu() {
      if (menuOpen === true) {
        menuButton.classList.add("menu-button-close");
        menu.classList.remove("nav-close");
        menu.classList.add("nav-open");
        menuOpen = false;
      } else {
        menuButton.classList.remove("menu-button-close");
        menu.classList.remove("nav-open");
        menu.classList.add("nav-close");
        menuOpen = true;
      }
    }
   

    

      function inputFocus2() {
        // clears the input for the user to type their email
        if (formInput2.value === "Enter Email:") {
          formInput2.value = "";
        }
      }
     
      let index2 = 0;

    class Carousel {
        constructor(element) {
            this.element = element;
            this.rightBtn = document.querySelector(".right-button");
            this.leftBtn = document.querySelector(".left-button");
            this.images = document.querySelectorAll(".carousel img");

            this.rightBtn.addEventListener("click", () => { this.selectRight() });
            this.leftBtn.addEventListener("click", () => { this.selectLeft() });
            this.controlButton = document.querySelector(".control-button");
            this.controlButton.addEventListener("click", () => { this.showStart() });
            this.optionsButton = document.querySelector(".options-button");
            this.optionsButton.addEventListener("click", () => { this.showTransition() });
        }
        selectRight() {
            if (index2 < 5) {
                index2 += 1;
            } else {
                index2 = 0;
            };
            this.images.forEach(function (item) {
                item.style.display = "none"
            });
            this.images[index2].style.display = "flex";
            if (transitionFlg) {
                this.images[index2].classList.add("image-fade");
            }

        }
        selectLeft() {
            if (index2 > 0) {
                index2 -= 1;
            } else {
                index2 = 5;
            };
            this.images.forEach(function (item) {
                item.style.display = "none"
            });
            this.images[index2].style.display = "flex"
            if (transitionFlg) {
                this.images[index2].classList.add("image-fade");
            }
        }
        showStart() {
            if (showFlg) {
                clearInterval(timer);
                showFlg = false;
                this.controlButton.innerHTML = "Click Here to Start";
            } else { 
                let delay = document.querySelector("#myRange").value;
                delay = delay * 1000;
                console.log("this is the delay: " + delay);
                this.controlButton.innerHTML = "Click Here to Stop";
                showFlg = true;
                timer = setInterval( () => { this.beginShow() }, delay);
            }
        }
        beginShow() {
                this.selectRight();
        }
        showTransition() {
            if (transitionFlg) {
                this.optionsButton.innerHTML = "Click to Start";
                transitionFlg = false;
            } else {
                transitionFlg = true;

                this.optionsButton.innerHTML = "Click to Stop";
            }
        }

       
}



    let carousel = document.querySelectorAll(".carousel");


    // Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
    carousel = Array.from(carousel).map(item => new Carousel(item))
}

about();