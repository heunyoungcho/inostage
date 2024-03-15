$(function () {
    //gnb(=nav)에 마우스가 올라가면 bgGnb영역과 .sub(depth2) 메뉴 영역이 나타남.
    //$('selector').method() / $('selector').on('mouseevent')
    $('.gnb').on('mouseover focusin', function () {
        $(".logo_w").css("display", "none");
        $(".logo_b").css("display", "block");
        $(".color").css("color", "black");
        $("header").css("backgroundColor", "white");
        $(".login_w").css("display", "none");
        $(".login_b").css("display", "block");
        $('.bgGnb').slideDown();
        $('.gnb .sub').slideDown(200);
    });
    $('.bgGnb').on('mouseleave', function () {

        $(this).slideUp(300);
        $('.gnb .sub').slideUp(300);
    })
});
