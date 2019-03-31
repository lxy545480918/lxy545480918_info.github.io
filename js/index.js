var swiperRender=(function(){
    function change(example){
        var slideAry=example.slides,
        activeIndex=example.activeIndex;
        $.each(slideAry,function(index,item){
            if(index===activeIndex){
                item.id="page"+activeIndex;
            }else{
                item.id=null;
            }
        });
    }
    return{
        init:function(index){
            var mySwiper=new Swiper('.swiper-container',{
                effect:'coverflow',
                onTransitionEnd: change,
                onInit:change
            })
            index=index||0;
            mySwiper.slideTo(index);
        }
    }
})();
swiperRender.init(0);


// music
