/*=======================
CLICK INVENTORY
=======================*/
$(".menu__list_item").on("click", function(e) {
	e.preventDefault();
	var $this = $(this);
	if( !$this.hasClass("menu__list_item-active") ) {
		$(".menu__list_item").removeClass("menu__list_item-active");
	}
	$this.toggleClass("menu__list_item-active");
	$this.next().slideToggle();
});

$("#js-click-inventory").on ("click", function(e) {
	e.preventDefault();
	$("#inventory").slideToggle();
});

$(".menu__list_item-close").on ("click", function(e) {
	e.preventDefault();
	$("#inventory").slideUp();
});


