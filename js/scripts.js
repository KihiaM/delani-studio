//Portfolio hover effect

$(document).ready(function() {
  $("#img1").hover(function() {
    $(".hovertext1").toggle();
  });

  $("#img2").hover(function() {
    $(".hovertext2").toggle();
  });

  $("#img3").hover(function() {
    $(".hovertext3").toggle();
  });

  $("#img4").hover(function() {
    $(".hovertext4").toggle();
  });

  $("#img5").hover(function() {
    $(".hovertext5").toggle();
  });

  $("#img6").hover(function() {
    $(".hovertext6").toggle();
  });

  $("#img7").hover(function() {
    $(".hovertext7").toggle();
  });

  $("#img8").hover(function() {
    $(".hovertext8").toggle();
  });
});

//icon toggle effect

$(document).ready(function() {
  $("#icon1").click(function() {
    $(this).hide();
    $(".toggletext1").removeClass("toggletext1");
  });

  $("#tg1").click(function() {
    $("#icon1").show();
    $("#tg1").addClass("toggletext1");
  });

  $("#icon2").click(function() {
    $(this).hide();
    $(".toggletext2").removeClass("toggletext2");
  });

  $("#tg2").click(function() {
    $("#icon2").show();
    $("#tg2").addClass("toggletext2");
  });

  $("#icon3").click(function() {
    $(this).hide();
    $(".toggletext3").removeClass("toggletext3");
  });

  $("#tg3").click(function() {
    $("#icon3").show();
    $("#tg3").addClass("toggletext3");
  });
});

