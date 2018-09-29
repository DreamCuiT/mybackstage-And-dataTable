$(function(){
    //进入全屏
    //全屏
    function fullScreen(){
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
            if(typeof rfs != "undefined" && rfs) {
                rfs.call(el);
            };
        return;
    }
    //退出全屏
    function exitScreen(){
        if (document.exitFullscreen) {  
            document.exitFullscreen();  
        }  
        else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        }  
        else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }  
        else if (document.msExitFullscreen) {  
            document.msExitFullscreen();  
        } 
        if(typeof cfs != "undefined" && cfs) {
            cfs.call(el);
        }
    }
    $(".quanping").toggle(function(){    
        fullScreen();
    },function(){    
        exitScreen();
    })

//form
    $(".top-tit").find("span").each(function(i){
        $(this).on("click",function(event){
            event.preventDefault();
            $(".top-tit").find("span").css({
                "border":"1px solid transparent",
                "color":"#0e90d2",
                "background-color":"transparent"
            })
            $(this).css({
                color: "#555",
                "background-color": "#fff",
                "border": "1px solid #ddd",
                "border-bottom-color": "transparent",
                "cursor": "pointer",
                "font-size":".16rem",
                "margin-right":".05rem",
                "padding": ".075rem .16rem",
                "box-sizing":"border-box",
                "position": "relative",
                "top":" .02rem"
            })
        })
    })
    $(".base").click(function(){
        // $(".baseic-content").find("ul").addClass("cssmove")
        $(".baseic-content").find("ul").css({
            transform:"translateX(100%)",
            visibility: "hidden",
            opacity: 0,
            "z-index": 1,
            position: "absolute"
        })
        $(".base-ul").css({
            transform:"translateX(0)",
            transition:"transform .3s",
            visibility: "visible",
            opacity:1,
            position:"relative"
        })
    })
    $(".pro").click(function(){
        // $(".baseic-content").find("ul").addClass("cssmove")
        $(".baseic-content").find("ul").css({
            transform:"translateX(100%)",
            visibility: "hidden",
            opacity: 0,
            "z-index": 1,
            position: "absolute"
        })
        $(".pro-ul").css({
            transform:"translateX(0)",
            transition:"transform .3s",
            visibility: "visible",
            opacity:1,
            position:"relative"
        })
    })
    $(".seo").click(function(){
        // $(".baseic-content").find("ul").addClass("cssmove")
        $(".baseic-content").find("ul").css({
            transform:"translateX(100%)",
            visibility: "hidden",
            opacity: 0,
            "z-index": 1,
            position: "absolute"
        })
        $(".seo-ul").css({
            transform:"translateX(0)",
            transition:"transform .3s",
            visibility: "visible",
            opacity:1,
            position:"relative"
        })
    })
    //tab
    $(".table-li").mouseenter(function(){
        $(this).find("ul").slideToggle();
    })
    $(".form-li").mouseenter(function(){
        $(this).find("ul").slideToggle();
    })
    $(".index-li").mouseenter(function(){
        $(this).find("ul").slideToggle();
    })  
    //Admin
    $(".Admin").toggle(function(){
        $(this).find("div>ul").fadeIn();
    },function(){
        $(this).find("div>ul").fadeOut();
    })  
})   
