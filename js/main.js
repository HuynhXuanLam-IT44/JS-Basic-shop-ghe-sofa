;(function($) {
	'use strict'

    var sl = function() {
        if ( $().owlCarousel ) {
            $('.slider-area').each(function() {
                var $this = $(this),
                auto = $this.data('auto'),
                loop = $this.data('loop'),
                dots = $this.data('dots');

                $this.find('.slider-active').owlCarousel({
                    loop: loop,
                    nav: false,
                    navigation : false,
                    pagination: false,
                    dots: dots,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive:{
                        0:{
                            items:1
                        },
                        450:{
                            items:1
                        },
                        768:{
                            items:1
                        },
                        1000:{
                            items:1
                        }
                    }
                });

            });
        }
    };

		var searchIcon = function() {
			$('.search-icon').on('click', function() {
            var searchForm = $(this).parent().find('.search-form'),
                searchField = $(this).parent().find('.search-field');

            searchForm.stop().fadeToggle(function () {
                searchField.focus();
            });

            return false;
        });
		};

		var menuOnmobi = function() {
			var desktop = 'desktop';

			$(window).on('load resize', function() {
				var mobile = 'desktop';

				if( matchMedia( 'only screen and (max-width: 991px)' ).matches )
					mobile = 'mobile';

				if( mobile != desktop ) {
					desktop = mobile;

					if ( mobile == 'mobile' ) {
						//alert('laf mobile');
						$('#header-search').attr('id', 'mobile-search-box').appendTo( '.s-mobile-box .inner');

						$('#header-menu').attr('id', 'mobi-menu').addClass('mobile-menu').appendTo( '#header').find('.submennu-wrap').hide().parents('#mobi-menu').find('a').before('<span class="arrow"></span>');

						//add icon to mobile menu
						$('.mobile-menu').find('li:nth-child(1) span').addClass('icon-1');
						$('.mobile-menu').find('li:nth-child(2) span').addClass('icon-2');
						$('.mobile-menu').find('li:nth-child(3) span').addClass('icon-3');
						$('.mobile-menu').find('li:nth-child(4) span').addClass('icon-4');
						$('.mobile-menu').find('li:nth-child(5) span').addClass('icon-5');

						//change border-bottom in the main TITLE
						$('.heading-title').addClass('mb-title_');

						// Remove the fix class in the sidebar
						// $('body').hasClass('single-product')find('#sidebar').removeClass('fixed');

					} else {
						//alert('laf desktop');
						$('#mobile-search-box').attr('id', 'header-search').appendTo( '#header .inner').removeAttr('style');

						$('#mobi-menu').attr('id', 'header-menu').appendTo( '#header .inner').removeAttr('style');
					}

				}

			});

			$('.mobi-btn').on('click', function() {
				$('#mobi-menu').slideToggle();
			});

		};

		var owlBox = function() {
        if ( $().owlCarousel ) {
            $('.carousel-box').each(function() {
                var $this = $(this),
                auto = $this.data('auto'),
                item = $this.data('column'),
                item2 = $this.data('column2'),
                item3 = $this.data('column3'),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    dots: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });

            });
        }
    };

		var galleriesFlex = function() {
        if ( $().flexslider ) {
            $('.lvt-galleries').each(function(){
                var iw = $(this).data("width");
                var im = $(this).data("margin");

                $(this).children('#lvt-carousel').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: iw,
                    itemMargin: im,
                    asNavFor: $(this).children('#lvt-slider')
                });
                $(this).children('#lvt-slider').flexslider({
                    animation: "slide",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    sync: $(this).children('#lvt-carousel')
                });
            });
        }
    };

		var spacer = function() {
	        $(window).on('load resize', function() {
	            var mode = 'desktop';

	            if ( matchMedia( 'only screen and (max-width: 959px)' ).matches )
	                mode = 'mobile';

	            if ( matchMedia( 'only screen and (max-width: 767px)' ).matches )
	                mode = 'smobile';

	            $('.spacer').each(function(){
	                if ( mode == 'desktop' ) {
	                    $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
	                } else if ( mode == 'mobile' ) {
	                    $(this).attr('style', 'height:' + $(this).data('mobi') + 'px')
	                } else {
	                    $(this).attr('style', 'height:' + $(this).data('smobi') + 'px')
	                }
	            })

	        });
	    };

			var backTop = function() {
					$(window).scroll(function() {
						 if ( $(this).scrollTop() > 600 ) {
								 $('.back-top').addClass('show');
						 } else {
								 $('.back-top').removeClass('show');
						 }
				 });

				 $('.back-top').on('click', function() {
						 $('html, body').animate({ scrollTop: 0 }, 1000);
				 	 		return false;
				 });
			};

    // DOM ready
    jQuery(function($) {
      sl();
			searchIcon();
			menuOnmobi();
			owlBox();
			galleriesFlex();
			spacer();
			backTop();

			var $ofsetSidebar = $('#sidebar').offset().top;
			$(window).scroll(function() {
						if ( $(this).scrollTop() > $ofsetSidebar ) {
							$('#sidebar').addClass('fixed');
						} else {
							$('#sidebar').removeClass('fixed');
						}

				});

    });
})(jQuery);
