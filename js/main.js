$(function () {
  $('.result__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="img-svg" src="images/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="img-svg" src="images/arrow-right.png"></button>',
    slidesToShow: 1,
  });

  $('.diploma__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="img-svg" src="images/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="img-svg" src="images/arrow-right.png"></button>',
    slidesToShow: 1,
  });

  $('.reviews__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="img-svg" src="images/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="img-svg" src="images/arrow-right.png"></button>',
    slidesToShow: 1,
  });
});




$(function (){

    const input = $('#input')[0]
    const select = $('#select')[0]

    $('#input').mask(select.value)
    input.placeholder = select.value

    $('#select').change(function(e){
        $('#input').mask(e.target.value)
        input.placeholder = e.target.value
    })

})
