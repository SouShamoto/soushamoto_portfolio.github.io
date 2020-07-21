$(function(){
    $(".typing").on("inview",function(){
      $(this).t({
        speed: 100, //デフォルト 75
        speed_vary: true, //デフォルト false
        delay: 1, //デフォルト false msで指定
        mistype: true, //打ち間違い
        blink: false,　//点滅なし
      });
    })
    
    //showMore
    $(".show").on("click",function(){
      if($(this).text() === "show more"){
        $(this).text("close");
        $(".workList").css("overflow","visible");
        $(".work").css({"height":"170vh"});
        $(".workList").css("height","1110px");
      }else{
        $(this).text("show more");
        $(".workList").css("overflow","hidden");
        $(".work").css({"height":"100vh"});
        $(".workList").css("height","530px");
      }
    })
  
    //navBtn
    let num = 0;
    $(".nav_btn").on("click",function(){
      if( num === 0){
        $(this).addClass("active");
        $("nav").addClass("active");
        num++
      }else{
        $(this).removeClass("active");
        $("nav").removeClass("active");
        num = 0;
      }
    })
    $("nav li").on("click",function(){
      $(".nav_btn").removeClass("active");
        $("nav").removeClass("active");
        num = 0;
    })
  
  })