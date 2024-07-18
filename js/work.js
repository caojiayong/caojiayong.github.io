//点击显示微信二维码
 $(function () {  
            $('#anniu').click(function (event) {  
             //取消事件冒泡  
               event.stopPropagation();  
              //设置弹出层的位置  
               var offset = $(event.target).offset();  
            $('#wechat').css({ top: offset.top + $(event.target).height() + "px", left: offset.left });  
            //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
            $('#wechat').toggle('slow');  
        });  
            //点击空白处或者自身隐藏弹出层，下面分别为滑动和淡出效果。  
            $(document).click(function (event) { $('#wechat').slideUp('slow') });  
            $('#wechat').click(function (event) { $(this).fadeOut(500) });  
         })  


//鼠标经过返回头部变换图片
function gototop()
{
document.b2.src ="http://caotongxue.cn/wp-content/themes/cjy/images/svg/gototop4.svg"
}
function gototop2()
{
document.b2.src ="http://caotongxue.cn/wp-content/themes/cjy/images/svg/gototop3.svg"
}


//返回顶部js
    $(document).ready(function(){
    //首先将#back-to-top隐藏
    $("#back-to-top").hide();
    //当滚动条的位置处于距顶部700像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
        if ($(window).scrollTop()>700){
        $("#back-to-top").fadeIn(1500);
        }
        else
        {
        $("#back-to-top").fadeOut(1500);
        }
        });
        
        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function(){
        $('body,html').animate({scrollTop:0},600);
        return false;
        });
        });
        });


 //点击滚动一个屏幕
 function scrollOneScreen() {
      const screenHeight = window.innerHeight; // 获取屏幕高度
      window.scrollBy({
        top: screenHeight,
        behavior: 'smooth' // 使用平滑滚动效果
      });
    }

/*导航上显下隐*/

jQuery(document).ready(function(i) {
    var a, o;
    1170 < i(window).width() && (a = i(".navbar-custom").height(), o = i(".intro-header .container").height(), i(window).on("scroll", {
        previousTop: 0
    },
    function() {
        var s = i(window).scrollTop(),
        e = i(".side-catalog");
        s < this.previousTop ? 0 < s && i(".navbar-custom").hasClass("is-fixed") ? i(".navbar-custom").addClass("is-visible") : i(".navbar-custom").removeClass("is-visible is-fixed") : (i(".navbar-custom").removeClass("is-visible"), a < s && !i(".navbar-custom").hasClass("is-fixed") && i(".navbar-custom").addClass("is-fixed")),
        this.previousTop = s,
        e.show(),
        o + 41 < s ? e.addClass("fixed") : e.removeClass("fixed")
    }))
});



