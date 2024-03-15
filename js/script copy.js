$(function() {
    //gnb(=nav)에 마우스가 올라가면 bgGnb영역과 .sub(depth2) 메뉴 영역이 나타남.
    //$('selector').method() / $('selector').on('mouseevent')
    $('.gnb').on('mouseover focusin', function() {
        $('.bgGnb').slideDown();
             $('.gnb .sub').slideDown(200);
    });
    $('.bgGnb').on('mouseleave', function() {
        $(this).slideUp(300);
        $('.gnb .sub').slideUp(300);
    })
      });

      $(document).ready(function() {
        $(".gnb").css("fontColor","#000");
       })
