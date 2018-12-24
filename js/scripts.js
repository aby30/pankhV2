function hideMenu() {
  document.getElementById('triggerMenu').checked = false;
}

function showMsgModal() {
  var modalId = document.getElementById('msgModal');
  modalId.style.display = "block";
};

function closeMsgModal() {
  var modalId = document.getElementById('msgModal');
  modalId.style.display = "none";
  $("#msgModal__colContent2").removeClass("inView");
  $("#msgModal__colContent3").removeClass("inView");
  document.getElementById('msgModal__colContent2').style.display = "none";
  document.getElementById('msgModal__colContent3').style.display = "none";
  document.getElementById('msgModal__colContent1').style.display = "block";
};

function showMsgBox() {
  document.getElementById('msgModal__colContent1').style.display = "none";
  var msgBoxId = document.getElementById('msgModal__colContent2');
  msgBoxId.style.display = "block";
  // slideToRight
  setTimeout(function(){
    $("#msgModal__colContent2").addClass("inView");
  }, 100);

};

function showSuccess() {
  document.getElementById('msgModal__colContent2').style.display = "none";
  var msgBoxId = document.getElementById('msgModal__colContent3');
  msgBoxId.style.display = "block";
  // slideToRight
  setTimeout(function(){
    $("#msgModal__colContent3").addClass("inView");
  }, 100);
};

function showMenu() {
  var header = document.getElementsByClassName('header__inner')[0];
  $(".header__inner").toggleClass("menuInView");
  $("body").toggleClass("noScroll");
};


//script To change background for Header onScroll Home page START
$(document).bind('scroll', function () {
  if ($(document).scrollTop() > 200) {
    $('.header__inner').addClass('bgOnScroll');
  } else {
    $('.header__inner').removeClass('bgOnScroll');
  }
});
