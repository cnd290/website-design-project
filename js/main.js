
$(document).ready(function(){

    //https://www.w3school.com.cn/tiy/t.asp?f=jquery_css_scrolltop_set
    //scrollTop() 方法設置或返回被選元素的垂直滾動條位置。提示：當滾動條位於最頂部時，位置是 0

    //這裡是設置被選元素的垂直滾動條位置  (動畫 scrollTop -> 簡單來說就是 滑到距離上方 這麼多的那個位置的動畫)
    //offset() 語法是用來取得當前元素的位置偏移值，後面可以接上top：由上面往下算
    //$("#home").offset().top -> home section 距離頂部的距離 

    $('#h').click(function(){
        $("html, body").animate({                
            scrollTop: $("#home").offset().top    
        }, 1000);
    });

    $('#a').click(function(){
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $('#s').click(function(){
        $("html, body").animate({
            scrollTop: $("#service").offset().top
        }, 1000);
    });

    $('#t').click(function(){
        $("html, body").animate({
            scrollTop: $("#team").offset().top
        }, 1000);
    });

    $('#c').click(function(){
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $('#f').click(function(){
        $("html, body").animate({
            scrollTop: $("#faq").offset().top
        }, 1000);
    });

    // =======================================================================================

    $('.fa-bars').click(function(){   //去css找 螢幕縮小時的那個menu按鈕
        console.log("hereeee")
        $(this).toggleClass('fa-times');        //如果元素已經有fa-times這個class，則移除它；如果沒有，則添加它
        $('.navbar').toggleClass('nav-toggle'); //如果元素已經有nav-toggle這個class，則移除它；如果沒有，則添加它
    });
    
    $(window).on('load scroll',function(){     //如果scroll(滑動時) 螢幕縮小時的menulist就會直接關起來   如果是打load resize 拉動視窗大小時 menulist就會直接關起來
        $('.fa-bars').removeClass('fa-times');  //移除掉此class
        $('.navbar').removeClass('nav-toggle'); //移除掉此class

        // console.log($(window).scrollTop());
        if($(window).scrollTop() > 30){         //這裡是返回被選元素的垂直滾動條位置 30是隨便的設的數字 往下滑到超過30的地方的情況 
            $('.header').css({'background':'#d6cbc8','box-shadow':'0 .3rem .8rem #'});  //menu 顏色在滑動後會變顏色
        }
        else{
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    })

    // =======================================================================================

    // faq頁面
    let state = 0;
    $('.accordion-header').click(function(){
        if(state == 0){
            $(this).next('.accordion-body').slideDown();
            $(this).children('span').text('-');
            state = 1;
        }
        else if(state == 1){
            $(this).next('.accordion-body').slideUp();
            $(this).children('span').text('+');
            state = 0;
        }
    });
});