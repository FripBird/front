$(function () {
  //ページ内スクロール
  $(".btn_nav").click(function () {
    var i = $(".btn_nav").index(this)
    var p = $(".content").eq(i).offset().top - parseInt($(".header_container").css("height"));
    $('html,body').animate({ scrollTop: p }, 'fast');
    if ($(".btn_menu").css("display") == "flex") {
      $(".navbar").css("display", "none");
    }
    return false;
  });

  //ページ上部へ戻る
  $(".btn_top").click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
    if ($(".btn_menu").css("display") == "flex") {
      $(".navbar").css("display", "none");
    }
    return false;
  });

});

$(function () {
  $(".btn_menu").click(function () {
    if ($(".navbar").is(":hidden")) {
      $(".navbar").slideDown("fast");
    } else {
      $(".navbar").slideUp("fast");
    }
  })
});


