		$('.slider').slick({
  dots: true,
  infinite: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$(document).ready(function(){
  $(".color_wrap ul li").each(function(item){
    var color = $(this).attr("data-color");
    $(this).css("backgroundColor", color);
  });

  $(".color_wrap ul li").each(function(item){
    $(this).click(function(){
      $(this).parents(".product_promo").find(".color_wrap ul li").removeClass("active");
      $(this).addClass("active");
      var img_src = $(this).attr("data-src");
      $(this).parents(".product_promo").find("img").attr("src", img_src);
    });
  })

  var $select = $('.js-my-select'),
      $images =  $('.hehehrhr');
  $select.on('change', function() {
    var value = '.' + $(this).val();
    $images.show().not(value).hide();
  });
})
