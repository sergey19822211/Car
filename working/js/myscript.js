/*======================================================================
CLICK INVENTORY
======================================================================*/
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

	var $this = $(this);
	if( !$this.hasClass("fa-caret-down-visible") ) {
		$(".fa-caret-down").toggleClass("fa-caret-down-visible");
	}
	$this.next().slideToggle();
});

$(".menu__list_item-close").on ("click", function(e) {
	e.preventDefault();
	$("#inventory").slideUp();
	$(".fa-caret-down").removeClass("fa-caret-down-visible");
});

// $(".menu__list_item-hover").on ("hover", function(e){
// 	e.preventDefault();
// 	$(".fa-caret-down").addClass("fa-caret-down-visible");
// });

// $('.menu__list_item-hover').hover(
//        function(){ 
//        	$(".fa-caret-down").addClass('fa-caret-down-visible') 
// });

/*======================================================================
SEARCH SELECT
======================================================================*/
// ===============================PRICE=================================
$(document).ready(function() {
  $(".drop-price .option-price").click(function() {
   var val = $(this).attr("data-value"),
    $drop = $(".drop-price"),
    prevActive = $(".drop-price .option-price.active-price").attr("data-value"),
    options = $(".drop-price .option-price").length;
   $drop.find(".option-price.active-price").addClass("mini-hack-price");
   $drop.toggleClass("visible-price");
   $drop.removeClass("withBG-price");
   $(this).css("top");
   $drop.toggleClass("opacity-price");
   $(".mini-hack-price").removeClass("mini-hack-price");
   if ($drop.hasClass("visible-price")) {
    setTimeout(function() {
    $drop.addClass("withBG-price");
    }, 400 + options*100); 
   }
   triggerAnimation();
   if (val !== "placeholder-price" || prevActive === "placeholder-price") {
    $(".drop-price .option-price").removeClass("active-price");
    $(this).addClass("active-price");
   };
  });

  function triggerAnimation() {
   var finalWidth = $(".drop").hasClass("visible") ? 236 : 236;
   $(".drop").css("width", "236px");
   setTimeout(function() {
    $(".drop").css("width", finalWidth + "px");
   }, 400);
  }
});
// =============================YEAR======================================
$(document).ready(function() {
  $(".drop-year .option-year").click(function() {
   var val = $(this).attr("data-value"),
    $drop = $(".drop-year"),
    prevActive = $(".drop-year .option-year.active-year").attr("data-value"),
    options = $(".drop-year .option-year").length;
   $drop.find(".option-year.active-year").addClass("mini-hack-year");
   $drop.toggleClass("visible-year");
   $drop.removeClass("withBG-year");
   $(this).css("top");
   $drop.toggleClass("opacity-year");
   $(".mini-hack-year").removeClass("mini-hack-year");
   if ($drop.hasClass("visible-year")) {
    setTimeout(function() {
    $drop.addClass("withBG-year");
    }, 400 + options*100); 
   }
   triggerAnimation();
   if (val !== "placeholder-year" || prevActive === "placeholder-year") {
    $(".drop-year .option-year").removeClass("active-year");
    $(this).addClass("active-year");
   };
  });

  function triggerAnimation() {
   var finalWidth = $(".drop-year").hasClass("visible-year") ? 236 : 236;
   $(".drop-year").css("width", "236px");
   setTimeout(function() {
    $(".drop-year").css("width", finalWidth + "px");
   }, 400);
  }
});
// =============================MAKE======================================
$(document).ready(function() {
  $(".drop-make .option-make").click(function() {
   var val = $(this).attr("data-value"),
    $drop = $(".drop-make"),
    prevActive = $(".drop-make .option-make.active-make").attr("data-value"),
    options = $(".drop-make .option-make").length;
   $drop.find(".option-make.active-make").addClass("mini-hack-make");
   $drop.toggleClass("visible-make");
   $drop.removeClass("withBG-make");
   $(this).css("top");
   $drop.toggleClass("opacity-make");
   $(".mini-hack-make").removeClass("mini-hack-make");
   if ($drop.hasClass("visible-make")) {
    setTimeout(function() {
    $drop.addClass("withBG-make");
    }, 400 + options*100); 
   }
   triggerAnimation();
   if (val !== "placeholder-make" || prevActive === "placeholder-make") {
    $(".drop-make .option-make").removeClass("active-make");
    $(this).addClass("active-make");
   };
  });

  function triggerAnimation() {
   var finalWidth = $(".drop-make").hasClass("visible-make") ? 236 : 236;
   $(".drop-make").css("width", "236px");
   setTimeout(function() {
    $(".drop-make").css("width", finalWidth + "px");
   }, 400);
  }
});
// =============================MODEL======================================
$(document).ready(function() {
  $(".drop-model .option-model").click(function() {
   var val = $(this).attr("data-value"),
    $drop = $(".drop-model"),
    prevActive = $(".drop-model .option-model.active-model").attr("data-value"),
    options = $(".drop-model .option-model").length;
   $drop.find(".option-model.active-model").addClass("mini-hack-model");
   $drop.toggleClass("visible-model");
   $drop.removeClass("withBG-model");
   $(this).css("top");
   $drop.toggleClass("opacity-model");
   $(".mini-hack-model").removeClass("mini-hack-model");
   if ($drop.hasClass("visible-model")) {
    setTimeout(function() {
    $drop.addClass("withBG-model");
    }, 400 + options*100); 
   }
   triggerAnimation();
   if (val !== "placeholder-model" || prevActive === "placeholder-model") {
    $(".drop-model .option-model").removeClass("active-model");
    $(this).addClass("active-model");
   };
  });

  function triggerAnimation() {
   var finalWidth = $(".drop-model").hasClass("visible-model") ? 236 : 236;
   $(".drop-model").css("width", "236px");
   setTimeout(function() {
    $(".drop-model").css("width", finalWidth + "px");
   }, 400);
  }
});


