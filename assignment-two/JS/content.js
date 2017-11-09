$(document).ready();
$(".navBox").hide();

$(".glyphicon-menu-hamburger").click(function(){
    $(".navBox").slideToggle();
    $(".page").toggle();
});



 if (matchMedia) {
  const mq = window.matchMedia("(min-width: 767px)");
  mq.addListener(WidthChangeExpand);
  WidthChangeExpand(mq);
};
// media query change
function WidthChangeExpand(mq) {
  if (mq.matches) {
    $(".page").css("display", "inline");
  };
};

/*if (matchMedia) {
  const mq = window.matchMedia("(max-width: 767px)");
  mq.addListener(WidthChangeCollapse);
  WidthChangeCollapse(mq);
};
// media query change
function WidthChangeCollapse(mq) {
  if (mq.matches) {
      if ($(".navBox").css("display") == "block"
    $(".page").css("display", "inline");
  };
};*/

$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});