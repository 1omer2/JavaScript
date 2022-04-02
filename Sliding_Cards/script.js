//Variables

var models = [
    {
        name:  'Bmw 418d',
        image: 'img/bmw.jpg',
        link: 'https://www.sahibinden.com/bmw-4-serisi-418d-gran-coupe'
    },
    {
        name:  'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'https://www.sahibinden.com/arazi-suv-pickup-mazda-cx-3-1.5-sky-d'
    },
    {
        name:  'Volvo S60',
        image: 'img/volvo.jpg',
        link: 'https://www.sahibinden.com/volvo-s60'
    },
    {
        name:  'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'https://www.sahibinden.com/skoda-superb'
    },
    {
        name:  'Honda Civic',
        image: 'img/honda.jpg',
        link: 'https://www.sahibinden.com/honda-civic'
    } 
];
var index = 0;
var slaytCount = models.length;
var settings={
    duration: '1000',
    random: false
};
var interval;
init(settings);
showSlide(index);


//Events

document.querySelector('.fa-circle-chevron-left').addEventListener
('click',function(){
    index--;
    showSlide(index);
});

document.querySelector('.fa-circle-chevron-right').addEventListener
('click',function(){
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

//Functions

function init(settings){
    var prev;
    interval=setInterval(function(){
        if(settings.random){
            do{index = Math.floor(Math.random() * slaytCount)}
            while(index == prev)
            prev = index;
        }
        else{
            if(slaytCount == index + 1){
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}

function showSlide(i){
    index = i;

    if(i<0){
        index = slaytCount - 1;
    }

    if(i>=slaytCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}













