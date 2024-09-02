let imgs = Array.from( document.querySelectorAll(".item img"));
let hideBox = document.getElementById("hide-box");
let hideBoxImg = document.querySelector(".hide-img");

let imgIndex = 0;


let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let closeBtn = document.getElementById("close");


for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", (e) => {

        hideBox.style.display = "flex";


        let imgSrc = e.target.getAttribute("src");
        hideBoxImg.style.backgroundImage = `url(${imgSrc})`;



        imgIndex = imgs.indexOf(e.target);
    });
};

 function prev(){

    imgIndex--;
    if(imgIndex < 0 )
    {
        imgIndex = imgs.length -1;
    }

    let imgSrc = imgs[imgIndex].getAttribute("src");
    hideBoxImg.style.backgroundImage = `url(${imgSrc})`;
};

 function next(){
    imgIndex++;
    if(imgIndex == imgs.length )
    {
        imgIndex = 0;
    }

    let imgSrc = imgs[imgIndex].getAttribute("src");
    hideBoxImg.style.backgroundImage = `url(${imgSrc})`;
};

 function close(){
    hideBox.style.display = "none";
};

prevBtn.addEventListener("click" , prev);
nextBtn.addEventListener("click" , next);
closeBtn.addEventListener("click" , close)


document.addEventListener("keydown" , (e) =>{
    

    if(e.code == "ArrowRight")
    {
        next();
    }
    
    else if(e.code == "ArrowLeft")
    {
        prev();
    }
    
    if(e.code == "Escape")
    {
        close();
    }
});

window.addEventListener("scroll", close)

