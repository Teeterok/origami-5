jQuery('<div class="quantity-nav"><div class="quantity-button quantity-down"></div><div class="quantity-button quantity-up"></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});


$(document).ready(function(){
  $('.status-bar__slick').slick({
   
      dots: false,
  arrows: true,
  accessibility: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  //asNavFor:'',
  appendDots:$('.dots'),
  
  nextArrow:$('.status-bar__slick-prev'),
  prevArrow:$('.status-bar__slick-next'),
  
  
  responsive: [{
    breakpoint: 768,
    settings: {}
    
  }]
  
  });
});




// Add active class to the current button (highlight it)
var header = document.getElementsById("sidebar-item");
var btns = header.getElementsByClassName("sidebar-item__2");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




var header = document.getElementsById("main-address__form-phone");
var btns = header.getElementsByClassName("main-address__add-phone-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace(" current", "");
    this.className += " current";
  });
}


var header = document.getElementsById("main-brands");
var btns = header.getElementsByClassName("main-brands__item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("focus");
    current[0].className = current[0].className.replace(" focus", "");
    this.className += " focus";
  });
}


