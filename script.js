let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let linesList = document.getElementsByClassName('line');

let data=[
    {
        id:1,
        img: 'images/image-fresh1.jpg',
    },
    {
        id:2,
        img:'images/image-fruits.jpg',
    },
    {
        id:3,
        img:'images/orange-image.jpg',
    },
    
];

let indexElement = 0;

function createDiv(item){
    sliderContent.style.backgroundImage = 'url('+ item.img +')';
    sliderContent.classList.add('imgdiv');
}

function createDots(){
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id-1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            indexElement = id;
            slider();
        }
        dots.appendChild(dot);
    })

    return dots;
}
function slider(){
    sliderContent.innerHTML='';
    createDiv(data[indexElement]);
    let dots = createDots();
    sliderContent.appendChild(dots);
    currentDot();

}
function currentDot(){
    dotsList[indexElement].classList.add('active');
}

arrowLeft.addEventListener('click',clickLeftArrow);
arrowRight.addEventListener('click',clickRightArrow);

function clickLeftArrow(){
    if(indexElement<=0){
        indexElement=data.length-1;
        slider();
        return
    }
    indexElement--;
    slider();
}
function clickRightArrow(){
    if(indexElement>=data.length-1){
        indexElement=0;
        slider();
        return
    }
    indexElement++;
    slider();
}
setInterval(()=>{
    clickRightArrow();
},4000);

slider();