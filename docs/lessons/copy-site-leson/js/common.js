jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".site-search form");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.site-search').fadeOut();
		}
	});
});

$(function () {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});

$(function(){
	$('.item-page .right-side button').not('[data-cart_item_type]').click(function() {
		$('.popup.order').fadeIn();
	});
	$('.header .links a:first-child, .header .city a, .footer .search .phone').click(function() {
		$('.popup.callback').fadeIn();
	});
	$('.popup .window .close').click(function() {
		$('.popup').fadeOut();
	});
	$('.catalog-page .filter .name').click(function() {
		$(this).toggleClass('active');
		$(this).next('.select').slideToggle();
	});
	$('#city').change(function(){
		$('.contacts-page .info').hide();
		$('#' + $(this).val()).show();
	});
	$('.menubg').click(function() {
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');
	});
	$('.header .menu-button').click(function() {
		$('.menubg').fadeIn();
		$('.mobile-menu').addClass('opened');
	});
	$('.header .links a:last-child').click(function() {
		$('.site-search').fadeIn();
	});
	$('.totop').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
		 scrollTop: $(anchor.attr('href')).offset().top
	  }, 1000);
	  e.preventDefault();
	});
	$(window).scroll(function() {
		if($(this).scrollTop() > 280) {
			$('.totop').addClass('opened');
		} else {
			$('.totop').removeClass('opened');
		}
	});
	$('.index-page-slider').slick({
		arrows: false,
		dots: true,
		autoplay:true,
  		autoplaySpeed:2500
	});
	$('.partners-block .list').slick({
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1400,
	      settings: {
	        slidesToShow: 5
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	$('.services-page .docs .list').slick({
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	$('.item-page .other-items .list').slick({
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});

$(document).ready(function(){
	$('.slide-1-1,.slide-1-2').hover(function(){
		$('.slide-1').addClass('visible');
	},
	function(){
		$('.slide-1').removeClass('visible');
	})
	$('.slide-2-1,.slide-2-2,.slide-2-3').hover(function(){
		$('.slide-2').addClass('visible');
	},
	function(){
		$('.slide-2').removeClass('visible');
	})
	$('.slide-3-1,.slide-3-2').hover(function(){
		$('.slide-3').addClass('visible');
	},
	function(){
		$('.slide-3').removeClass('visible');
	})
	
	
	
	
	$("#top_form").submit(function(){
		$.ajax({
				url: '/lib/mail_top.php',
				type: "POST",
				dataType: 'html',
				data: $(this).serialize(),
				success: function(){
					$('.window')[0].reset();
					$('.done').show();
					setTimeout(function(){
						$('.done').hide();
						}, 3000);
				}
			});
			return false;
	  });
	
	
	$("#order_form").submit(function(){
		$.ajax({
				url: '/lib/mail_order.php',
				type: "POST",
				dataType: 'html',
				data: $(this).serialize(),
				success: function(){
					$('.window')[0].reset();
					$('.done').show();
					setTimeout(function(){
						$('.done').hide();
						}, 3000);
				}
			}); 
			return false;
	  });

	
	function cart() {

		// каркас корзины
		var cart = get_cart() ?? {};
		var cart_count;
		var cart_empty_msg;

		// извлечение данных корзины
		function get_cart() {
			return JSON.parse(localStorage.getItem('cart'));
		}

		// очистка корзины
		function clear_cart() {
			cart = {};
			$('.cart .list').html(cart_empty_msg)
			update_cart()
		}

		// обновление кол-ва товаров
		function update_counters() {
			cart_count = Object.keys(cart).length;		
			$('.cart_counter').text(cart_count);
			if (cart_count==0) { $('.cart-form .col').text('') }
			for( item_name in cart ) {
				let item_name_split = item_name.split('|');
				let item_type = item_name_split.slice(0)[0];
				let item_post_id = item_name_split.slice(-1)[0];
				$('input[data-post_id="' + item_post_id + '"][data-cart_item_type="'+ item_type +'"]').val(cart[item_name]['quantity'])
			}
		}
		update_counters()

		// обновление корзины
		function update_cart() {
			localStorage.setItem('cart', JSON.stringify(cart));
			update_counters()
		}

		// обновление кол-ва товара в корзине
		function update_item_quantity(item_name, new_quantity = false) {
			new_quantity = parseInt(new_quantity)
			
			if( new_quantity == 0 ) {
				delete_cart_item(item_name);
				return;
			}

			if( new_quantity ) {
				cart[item_name]['quantity'] = new_quantity
			} else {
				cart[item_name]['quantity'] += 1
			}

			update_cart()
		}

		// проверка есть ли уже такой товар к корзине
		function has_in_cart(item_name) {
			return cart[item_name] ? true : false;
		}

		// создание уникального ключа для хранения информации о карточке в корзине
		function create_key(item_type, post_id) {
			return item_type + '|' + post_id;
		}

		// добавление товара в корзину
		function add_to_card(btn_data, quantity = 1) {
			let item_type = btn_data.cart_item_type, post_id = btn_data.post_id;
			let item_name = create_key(item_type, post_id);

			if( ! has_in_cart(item_name) ) {
				cart[item_name] = {};

				if( btn_data.breadcrumbs ) {
					cart[item_name]['breadcrumbs'] = btn_data.breadcrumbs
				}

				if( btn_data.product_from_cat ) {
					cart[item_name]['product_from_cat'] = btn_data.product_from_cat
				}
			}

			update_item_quantity(item_name, quantity)
		}

		// удаление товара из корзины
		function delete_cart_item(item_name) {
			delete cart[item_name]
			update_cart()
		}

		// интерактивные элементы, связанные с изменением данных в корзине
		$('body').on('click', 'button[data-add_to_cart]', function() {
			add_to_card($(this).data())
		})
		$('body').on('change', 'input[data-add_to_cart]', function() {
			add_to_card($(this).data(), $(this).val())
		})
		$('body').on('click', '[data-delete_from_cart]', function() {
			$(this).closest('.item').remove()
			let item_name = create_key($(this).data('cart_item_type'), $(this).data('post_id'))
			delete_cart_item(item_name)
		})

		// вытаскиываю инфу с бд для вывода в корзину
		if( $('.cart').length ) {
			$.ajax({
				url: '/lib/ajaxPositionsForCart.php',
				type: 'POST',
				data: {cart: cart},
			}).done(function (html) {
				if( ! html.length ) return;
				cart_empty_msg = $('.cart .list').html()
				html = JSON.parse(html);
				$('.cart .list').html(html)
				update_counters()
			})
		}

		// отправка заявки на почту
		$('#cart_order').on('submit', function(e) {
			e.preventDefault()
			let this_form = $(this)[0];
			let form_data = new FormData(this_form);
			$.ajax({
				url: '/lib/main_cart_order.php',
				type: 'POST',
				data: form_data,
				processData: false,
				contentType: false
			}).done(function() {
				alert('Ваш заказ успешно оформлен, наши менеджеры свяжутся с вами в ближайшее время')
				clear_cart()
				$(location).attr('href', '/')
			}).fail(function() {
				alert('Произошла ошибка')
			})
		})
        $('body').on('click', 'a.plus', function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
		// кнопки для редактирования кол-ва товара
		$('body').on('click', 'a.minus', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 0 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$('.plus').parent().find('input').on('change', function() {
			if( $(this).val() < 0 ) $(this).val(0)
		})

		// попап окно после успешного добавления товара в корзину
		$('body').on('click', 'button[data-add_to_cart]', function() {
			$('.popup.add_cart_success').fadeIn();
		})

	}

	cart();
	
	
	
	/*	$("#cat_order_form").submit(function(){
		$.ajax({
				url: '/lib/mail_cat_order.php',
				type: "POST",
				dataType: 'html',
				data: $(this).serialize(),
				success: function(){
					$('.window')[0].reset();
					$('.done').show();
					setTimeout(function(){
						$('.done').hide();
						}, 3000);
				}
			}); 
			return false;
	  });
	
	*/
	
$(function(){
 'use strict';
$('#cat_order_form').on('submit', function(e){
 e.preventDefault();
 var fd = new FormData( this );
 $.ajax({
 url: '/lib/mail_cat_order.php',
 type: 'POST',
 contentType: false, 
 processData: false, 
 data: fd,
 success: function(){
	 				$('.cat_order_form')[0].reset();
					$('.done').show();
	 				$('.btn').val('Отправлено');
					setTimeout(function(){
						$('.done').hide();
						}, 3000);

 }
 });
 });
});
	
	
	

	
	$("#phone, .phone_mask").mask("+7(999) 999-9999");
	$("#phone2").mask("+7(999) 999-9999");
	$("#phone3").mask("+7(999) 999-9999");

	$("#mail, .email_mask").inputmask("email");
	
	
	
});