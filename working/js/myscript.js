/*======================================================================
CLICK INVENTORY
======================================================================*/
$(".menu-list__item").on("click", function(e) {
	e.preventDefault();
	var $this = $(this);
	if( !$this.hasClass("menu-list__item_active") ) {
		$(".menu-list__item").removeClass("menu-list__item_active");
	}
	$this.toggleClass("menu-list__item_active");
	$this.next().slideToggle();
});

$("#js-click-inventory").on ("click", function(e) {
	e.preventDefault();
	$("#inventory").slideToggle();

	var $this = $(this);
	if( !$this.hasClass("fa-caret-down-visible") ) {
		$(".fa-caret-down").toggleClass("fa-caret-down-visible");
	}
	$this.next().slideToggle();
});

$(".menu-list__item_close").on ("click", function(e) {
	e.preventDefault();
	$("#inventory").slideUp();
	$(".fa-caret-down").removeClass("fa-caret-down-visible");
});



/*======================================================================
SEARCH SELECT
======================================================================*/

// ===============================PRICE=================================
$(function(){
  $('.selected-price').click(function(){
      $('.option-list-price').slideToggle(200);
      $('.select-price').toggleClass('select-active');
  });
  $('.option-price').click(function(){
    select_val = $(this).attr('data-select-val');
    select_div = $(this).parent().parent();
    $(select_div).children('.selected-price').html($(this).html());
    $(select_div).children('input').val(select_val);
    
    $('.option-list-price').slideToggle(200);
    $('.select-price').toggleClass('select-active');
  });
});
// =============================YEAR======================================
 $(function(){
  $('.selected-year').click(function(){
      $('.option-list-year').slideToggle(200);
      $('.select-year').toggleClass('select-active');
  });
  $('.option-year').click(function(){
    select_val = $(this).attr('data-select-val');
    select_div = $(this).parent().parent();
    $(select_div).children('.selected-year').html($(this).html());
    $(select_div).children('input').val(select_val);
    
    $('.option-list-year').slideToggle(200);
    $('.select-year').toggleClass('select-active');
  });
});
// =============================MAKE======================================
 $(function(){
  $('.selected-makes').click(function(){
      $('.option-list-makes').slideToggle(200);
      $('.select-makes').toggleClass('select-active');
  });
  $('.option-makes').click(function(){
    select_val = $(this).attr('data-select-val');
    select_div = $(this).parent().parent();
    $(select_div).children('.selected-makes').html($(this).html());
    $(select_div).children('input').val(select_val);
    
    $('.option-list-makes').slideToggle(200);
    $('.select-makes').toggleClass('select-active');
  });
});
// =============================MODEL======================================
 $(function(){
  $('.selected-model').click(function(){
      $('.option-list-model').slideToggle(200);
      $('.select-model').toggleClass('select-active');
  });
  $('.option-model').click(function(){
    select_val = $(this).attr('data-select-val');
    select_div = $(this).parent().parent();
    $(select_div).children('.selected-model').html($(this).html());
    $(select_div).children('input').val(select_val);
    
    $('.option-list-model').slideToggle(200);
    $('.select-model').toggleClass('select-active');
  });
});

/*======================================================================
SLICK SLIDER
======================================================================*/

var slick = $('.slide-wrapper').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000
});

$('.pagination__item').click(function() {
  $('.slide-wrapper').slick('slickGoTo', $(this).index());
});

// =============================
$(".pagination__item").on("click", function(e) {
  e.preventDefault();

  var $this = $(this);
  var before = $('.pagination__item:before');

  if( !$this.hasClass("pagination__item_active") ) {
    $(".pagination__item").removeClass("pagination__item_active");
  }
  $this.toggleClass("pagination__item_active");

});

