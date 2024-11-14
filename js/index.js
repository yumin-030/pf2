$(document).ready(function(){
    moving();
    mainText();
    $('.modal').show(function(){
        $(this).css({'display':'flex'});
        $('body').css({'overflow':'hiddne', 'height':'100%'});
        $('.modal').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });
});
$('.close-pop').click(function(){$('.modal').hide(); return false;});
$(window).scroll(function(){
    if($(window).scrollTop() > 215){
        $('header').css({'position':'fixed','top':'0'});
        $('header > .top').css('display','none');
        $('.nav > h2').css('display','block');
        $('.aside').css('opacity','1').css('transition','0.5s');
    } else {
        $('header').css('position','absolute').css('top','40px');
        $('header > .top').css('display','flex');
        $('.nav > h2').css('display','none');
        $('.aside').css('opacity','0').css('transition','0.2s');
    };
    if($(window).scrollTop() > 100){
        $('.best').css('opacity','1').css('transition','1s');
        $('.best > h2').css('top','0').css('transition','1s');
        $('.best > p').css('top','0').css('transition','1s');
    } else if($(window).scrollTop() < 100){
        $('.best').css('opacity','0').css('transition','1s');
        $('.best > h2').css('top','30px').css('transition','1s');
        $('.best > p').css('top','40px').css('transition','1s');
    }
    if($(window).scrollTop() > 933){
        $('.eslide').css('opacity','1').css('transition','1s');
    } else if($(window).scrollTop() < 933){
        $('.eslide').css('opacity','0').css('transition','1s');
    }
    if($(window).scrollTop() > 1400){
        $('.set > h2').css('opacity','1').css('top','0').css('transition','1s');
        $('.set > .set_title').css('opacity','1').css('top','0').css('transition','1s');
        $('.set > .set-con').css('opacity','1').css('transition','1s');
    } else if($(window).scrollTop() < 1400){
        $('.set > h2').css('opacity','0').css('top','30px').css('transition','1s');
        $('.set > .set_title').css('opacity','0').css('top','40px').css('transition','1s');
        $('.set > .set-con').css('opacity','0').css('transition','1s');
    }
    if($(window).scrollTop() > 2200){
        $('.event-wrap > h2').css('opacity','1').css('top','0').css('transition','1s');
        $('.event-wrap > p').css('opacity','1').css('top','0').css('transition','1s');
        $('.eve-con').css('opacity','1').css('transition','1s');
    } else if($(window).scrollTop() < 2200){
        $('.event-wrap > h2').css('opacity','0').css('top','30px').css('transition','1s');
        $('.event-wrap > p').css('opacity','0').css('top','40px').css('transition','1s');
        $('.eve-con').css('opacity','0').css('transition','1s');
    };
    if($(window).scrollTop() > 2900){
        $('.new-wrap > h2').css('opacity','1').css('top','0').css('transition','1s');
        $('.new-wrap > p').css('opacity','1').css('top','0').css('transition','1s');
        $('.new-wrap > ul').css('opacity','1').css('transition','1s');
    } else if($(window).scrollTop() < 2900){
        $('.new-wrap > h2').css('opacity','0').css('top','30px').css('transition','1s');
        $('.new-wrap > p').css('opacity','0').css('top','40px').css('transition','1s');
        $('.new-wrap > ul').css('opacity','0').css('transition','1s');
    };
    if($(window).scrollTop() > 4100){
        $('.brand-bnr').css('opacity','1').css('transition','1s');
    } else if($(window).scrollTop() < 4100){
        $('.brand-bnr').css('opacity','0').css('transition','1s');
    };
    if($(window).scrollTop() > 4500){
        $('.rvw-wrap > h2').css('opacity','1').css('top','0').css('transition','1s');
        $('.rvw-wrap > .rvw-title').css('opacity','1').css('top','0').css('transition','1s');
        $('.rvw-wrap > ul').css('opacity','1').css('transition','1s');
    } else if($(window).scrollTop() < 4500){
        $('.rvw-wrap > h2').css('opacity','0').css('top','30px').css('transition','1s');
        $('.rvw-wrap > .rvw-title').css('opacity','0').css('top','40px').css('transition','1s');
        $('.rvw-wrap > ul').css('opacity','0').css('transition','1s');
    };
});
let topSwiper = new Swiper('.top_banner', {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 0,
    autoplay: { delay: 4000 },
    easing: "cubic-bezier(0.25, 10, 0.25, 1)",
});
function reMainText(){
    $('.slide > .text > h2').css('top','40').css('opacity','0');
    $('.slide > .text > p').css('top','20').css('opacity','0');
    $('.slide > .text > a').css('top','15').css('opacity','0');
};
function mainText(){
    $('.slide > .text > h2').animate({
        top:0,
        opacity:1
    },function(){
        $('.slide > .text > p').animate({
            top:0,
            opacity:1
        },function(){
            $('.slide > .text > a').animate({
                top:0,
                opacity:1
            });
        });
    });
    reMainText();
}
let mainSlide = $('.main_slider').bxSlider({
    mode: 'fade',
    speed:1000,
    auto:true,
    pager:false,
    onSlideNext:function(){
        let cp = mainSlide.getCurrentSlide() + 1;
        $('.cp').text(cp.toString());
    },
    onSlidePrev:function(){
        let cp = mainSlide.getCurrentSlide() + 1;
        $('.cp').text(cp.toString());
    }
},5000);
let ap = mainSlide.getSlideCount();
$('.ap').text(ap.toString());
$('.main-next').click(function(){
    mainSlide.goToNextSlide();
    let cp = mainSlide.getCurrentSlide() + 1;
    $('.cp').text(cp.toString());
});
$('.main-prev').click(function(){
    mainSlide.goToPrevSlide();
    let cp = mainSlide.getCurrentSlide() + 1;
    $('.cp').text(cp.toString());
});

let setSwiper = new Swiper(".set-con", {
    slidesPerView: 4,
    spaceBetween: 18,
    // renderProgressbar: function (progressbarFillClass) {
    //     return '<span class="' + progressbarFillClass + '"></span>';
    // },
    // renderCustom: function (swiper, current, total) {
    //   return current + ' of ' + total;
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
        nextEl: '.set-next',
        prevEl: '.set-prev',
    },
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
});
let eventSwiper = new Swiper('.eve-con', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 0,
    speed: 500,
    spaceBetween: 20,
    // slidesOffsetBefore: 0,
    pagination: {
        el: '.eve-pager',
        clickable: true
    },
    navigation: {
        nextEl: '.eve-next',
        prevEl: '.eve-prev',
    },
    autoplay: { delay: 4000 },
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
});
let brdSwiper = new Swiper('.brd-con', {
    slidesPerView: 2,
    loop: true,
    loopAdditionalSlides: 0,
    speed: 500,
    spaceBetween: 20,
    // slidesOffsetBefore: 0,
    // pagination: {
    //     el: '.brd-pager',
    //     clickable: true
    // },
    navigation: {
        nextEl: '.brd-next',
        prevEl: '.brd-prev',
    },
    autoplay: { delay: 4000 },
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
});
let ntcSwiper = new Swiper('.ntc-con', {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.ntc-next',
        prevEl: '.ntc-prev',
    },
    loop: true,
    loopAdditionalSlides: 0,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    autoplay: { delay: 4000 },
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",

});

function moving(){
    $('.point').animate({top:'-25px'},500,function(){
        $(this).animate({top:'-28px'},500,function(){
            moving();
        });
    });
};

let onOff = true;
$('.nav-menu').click(function(){
    if(onOff == true){
        $('.nav-hide').css('display','block');
        $('.crossX').css('opacity','0').css('transition','0s');
        $('.crossL').css('rotate','45deg').css('top','9px');
        $('.crossR').css('rotate','-45deg').css('width','100%').css('bottom','9px');
        onOff = false;
    } else if(onOff == false){
        $('.nav-hide').css('display','none');
        $('.crossX').css('opacity','1').css('transition','0.3s');
        $('.crossL').css('rotate','0deg').css('top','0');
        $('.crossR').css('rotate','0deg').css('width','50%').css('bottom','0');
        onOff = true;
    }
});
$('.best > .more-btn').click(function(){
    $(this).css('display','none');
    $('.best .hide').css('display','block');
    $(window).scroll(function(){
        if($(window).scrollTop() > 1417){
            $('.eslide').css('opacity','1').css('transition','1s');
        } else if($(window).scrollTop() < 1417){
            $('.eslide').css('opacity','0').css('transition','1s');
        };
        if($(window).scrollTop() > 1917){
            $('.set > h2').css('opacity','1').css('top','0').css('transition','1s');
            $('.set > .set_title').css('opacity','1').css('top','0').css('transition','1s');
            $('.set > .set-con').css('opacity','1').css('transition','1s');
        } else if($(window).scrollTop() < 1917){
            $('.set > h2').css('opacity','0').css('top','30px').css('transition','1s');
            $('.set > .set_title').css('opacity','0').css('top','40px').css('transition','1s');
            $('.set > .set-con').css('opacity','0').css('transition','1s');
        };
        if($(window).scrollTop() > 2700){
            $('.event-wrap > h2').css('opacity','1').css('top','0').css('transition','1s');
            $('.event-wrap > p').css('opacity','1').css('top','0').css('transition','1s');
            $('.eve-con').css('opacity','1').css('transition','1s');
        } else if($(window).scrollTop() < 2700){
            $('.event-wrap > h2').css('opacity','0').css('top','30px').css('transition','1s');
            $('.event-wrap > p').css('opacity','0').css('top','40px').css('transition','1s');
            $('.eve-con').css('opacity','0').css('transition','1s');
        };
        if($(window).scrollTop() > 3417){
            $('.new-wrap > h2').css('opacity','1').css('top','0').css('transition','1s');
            $('.new-wrap > p').css('opacity','1').css('top','0').css('transition','1s');
            $('.new-wrap > ul').css('opacity','1').css('transition','1s');
        } else if($(window).scrollTop() < 3417){
            $('.new-wrap > h2').css('opacity','0').css('top','30px').css('transition','1s');
            $('.new-wrap > p').css('opacity','0').css('top','40px').css('transition','1s');
            $('.new-wrap > ul').css('opacity','0').css('transition','1s');
        };
        if($(window).scrollTop() > 4617){
            $('.brand-bnr').css('opacity','1').css('transition','1s');
        } else if($(window).scrollTop() < 4617){
            $('.brand-bnr').css('opacity','0').css('transition','1s');
        };
        if($(window).scrollTop() > 5017){
            $('.rvw-wrap > h2').css('opacity','1').css('top','0').css('transition','1s');
            $('.rvw-wrap > .rvw-title').css('opacity','1').css('top','0').css('transition','1s');
            $('.rvw-wrap > ul').css('opacity','1').css('transition','1s');
        } else if($(window).scrollTop() < 5017){
            $('.rvw-wrap > h2').css('opacity','0').css('top','30px').css('transition','1s');
            $('.rvw-wrap > .rvw-title').css('opacity','0').css('top','40px').css('transition','1s');
            $('.rvw-wrap > ul').css('opacity','0').css('transition','1s');
        };    
    });
    return false;
});
$('.event-pg').hover(function(){
    $('.eve-prev').animate({
        opacity:1,
    },300);
    $('.eve-next').animate({
        opacity:1,
    },300);
},function(){
    $('.eve-prev').animate({
        opacity:0,
    },300);
    $('.eve-next').animate({
        opacity:0,
    },300);
});
$('.scr-top').click(function(){
    $('html,body').animate({scrollTop:0},500);  //천천히 올라감
    return false;
});