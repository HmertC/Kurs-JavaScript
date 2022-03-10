var models = [
    {
        name : 'lambo huracan',
        img  : 'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/01/12204030/Lamborghini-Huracan-Evo-.jpg',
        link : 'https://www.sahibinden.com/lamborghini-huracan'
    },
    {
        name : 'ferrari',
        img  : 'https://www.webtekno.com/images/editor/default/0002/84/9ec5b41b49eee7248c7964382d80a10bbddac3a3.jpeg',
        link : 'https://www.sahibinden.com/vasita?query_text_mf=ferrari&query_text=ferrari'
    },
    {
        name : 'mclaren',
        img  : 'https://cdn.pixabay.com/photo/2019/05/23/02/21/mclaren-4223024__480.jpg',
        link : 'https://www.sahibinden.com/diecast-model-araba?a103632=1138678&query_text_mf=mclaren'
    },
    {
        name : 'koenigsegg',
        img  : 'https://www.log.com.tr/wp-content/uploads/2020/03/koenigsegg-gemera.jpg',
        link : 'https://www.sahibinden.com/diecast-model-araba?query_text_mf=koenigsegg&query_text=koenigsegg'
    },
    {
        name : 'mercedes',
        img  : 'https://upload.wikimedia.org//wikipedia/commons/thumb/2/21/Mercedes-Benz_SLR_McLaren_%288615973055%29_%28cropped%29.jpg/1200px-Mercedes-Benz_SLR_McLaren_%288615973055%29_%28cropped%29.jpg',
        link : 'https://www.sahibinden.com/ikinci-el-ve-sifir-alisveris?query_text_mf=mercedes+mclaren&query_text=mercedes+mclaren'
    }
];

var index = 0;
var slaytCount = models.length;
var interval

var settings ={
    duration : '1000',
    random : false
};

init(settings);


document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
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
})


function init(settings){
    var prev;
    interval = setInterval(function(){
        
        if(settings.random){
            //random index
            do{
                index =Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            //artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)

}


function showSlide(i){

    index = i;

    if(i<0){
        index = slaytCount -1;
    }
    if(i >= slaytCount){
        index = 0;
    }

    document.querySelector('.card-img-top').setAttribute('src',models[index].img);

    document.querySelector('.card-title').textContent = models[index].name;
    
    document.querySelector('.btn').setAttribute('href',models[index].link);
};

