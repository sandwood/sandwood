			function scroll_up(){
				if(isMobile == false){
					var current_page = $('.bottom_nav_trigger a.active').attr('id');
					current_page = current_page.replace('bot_nav_trig_','');
					
					current_page = parseInt(current_page);

					if(current_page-1 == 1){
						$('.bottom_nav_trigger a').removeClass('active');
						$('.bottom_nav_trigger a:nth-child(1)').addClass('active');
						parallax_disable_all();
						parallax.enable();
					}
					else if(current_page-1 == 2){
						$('.bottom_nav_trigger a').removeClass('active');
						$('.bottom_nav_trigger a:nth-child(2)').addClass('active');
						parallax_disable_all();
						parallax2.enable();
					}
					else if(current_page-1 == 3){
						$('.bottom_nav_trigger a').removeClass('active');
						$('.bottom_nav_trigger a:nth-child(3)').addClass('active');
						parallax_disable_all();
						parallax3.enable();
					}
	//			else if(current_page-1 == 4){
	//				$('.bottom_nav_trigger a').removeClass('active');
	//				$('.bottom_nav_trigger a:nth-child(4)').addClass('active');
	//				parallax_disable_all();
	//				parallax4.enable();
	//			}
				}
				else{
					var current_page = $('.center_nav_mobile a.active').attr('id');
					current_page = current_page.replace('mobile_trig_','');
					
					current_page = parseInt(current_page);

					if(current_page-1 == 1){
						$('.center_nav_mobile a').removeClass('active');
						$('.center_nav_mobile a:nth-child(1)').addClass('active');
						parallax_disable_all();
						parallax.enable();
					}
					else if(current_page-1 == 2){
						$('.center_nav_mobile a').removeClass('active');
						$('.center_nav_mobile a:nth-child(2)').addClass('active');
						parallax_disable_all();
						parallax2.enable();
					}
					else if(current_page-1 == 3){
						$('.center_nav_mobile a').removeClass('active');
						$('.center_nav_mobile a:nth-child(3)').addClass('active');
						parallax_disable_all();
						parallax3.enable();
					}
	//			else if(current_page-1 == 4){
	//				$('.center_nav_mobile a').removeClass('active');
	//				$('.center_nav_mobile a:nth-child(4)').addClass('active');
	//				parallax_disable_all();
	//				parallax4.enable();
	//			}
				}
				

				if(current_page<4 && current_page >1){
					$('#touchsurface').on('scroll touchmove mousewheel', function(e){
						e.preventDefault();
						e.stopPropagation();
						return false;
					})
					var next_page = '.page' + --current_page;
					var prev_page = '.page' + (current_page+1);
					
					$(prev_page).addClass('pt-page-scaleDown');
					$(prev_page).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
						$(prev_page).removeClass('active pt-page-scaleDown');
					});
					
					$(next_page).addClass('active pt-page-moveFromLeft pt-page-ontop');
					$(next_page).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
						$(next_page).removeClass('pt-page-moveFromLeft pt-page-ontop');
						$('#touchsurface').off('scroll touchmove mousewheel');
					});
					
				}
				else{
					current_page=1;
				}
				
				setTimeout(function(){
					if($('.page1').hasClass('active')){
						if(isMobile == false){
							$('.bottom_nav .left-align').css('opacity', 0);
							$('.bottom_nav .right-align').css('opacity', 1);
						}
						else{
							$('.left_nav_mobile').css('display','none');
							$('.right_nav_mobile').css('display','flex');
						}
					}
					else{
						if(isMobile == false){
							$('.bottom_nav .left-align').css('opacity', 1);
							$('.bottom_nav .right-align').css('opacity', 1);
						}
						else{
							$('.left_nav_mobile').css('display','flex');
							$('.right_nav_mobile').css('display','flex');
						}
					}
				},500);
			}
			function scroll_down(){
				if(isMobile == false){
					var current_page = $('.bottom_nav_trigger a.active').attr('id');
					current_page = current_page.replace('bot_nav_trig_','');
					current_page = parseInt(current_page);

	//			if(current_page+1 == 1){
	//				$('.bottom_nav_trigger a').removeClass('active');
	//				$('.bottom_nav_trigger a:nth-child(1)').addClass('active');
	//				parallax_disable_all();
	//				parallax.enable();
	//			}
					if(current_page+1 == 2){
						$('.bottom_nav_trigger a').removeClass('active');
						$('.bottom_nav_trigger a:nth-child(2)').addClass('active');
						parallax_disable_all();
						parallax2.enable();
					}
					else if(current_page+1 == 3){
						$('.bottom_nav_trigger a').removeClass('active');
						$('.bottom_nav_trigger a:nth-child(3)').addClass('active');
						parallax_disable_all();
						parallax3.enable();
					}
	//			else if(current_page+1 == 4){
	//				$('.bottom_nav_trigger a').removeClass('active');
	//				$('.bottom_nav_trigger a:nth-child(4)').addClass('active');
	//				parallax_disable_all();
	//				parallax4.enable();
	//			}
					
				}
				else{
					var current_page = $('.center_nav_mobile a.active').attr('id');
					current_page = current_page.replace('mobile_trig_','');
					current_page = parseInt(current_page);
	//			if(current_page+1 == 1){
	//				$('.center_nav_mobile a').removeClass('active');
	//				$('.center_nav_mobile a:nth-child(1)').addClass('active');
	//				parallax_disable_all();
	//				parallax.enable();
	//			}
					if(current_page+1 == 2){
						$('.center_nav_mobile a').removeClass('active');
						$('.center_nav_mobile a:nth-child(2)').addClass('active');
						parallax_disable_all();
						parallax2.enable();
					}
					else if(current_page+1 == 3){
						$('.center_nav_mobile a').removeClass('active');
						$('.center_nav_mobile a:nth-child(3)').addClass('active');
						parallax_disable_all();
						parallax3.enable();
					}
	//			else if(current_page+1 == 4){
	//				$('.center_nav_mobile a').removeClass('active');
	//				$('.center_nav_mobile a:nth-child(4)').addClass('active');
	//				parallax_disable_all();
	//				parallax4.enable();
	//			}
					
				}
				
				if(current_page<3 && current_page >0){
					$('#touchsurface').on('scroll touchmove mousewheel', function(e){
						e.preventDefault();
						e.stopPropagation();
						return false;
					})
					var next_page = '.page' + ++current_page;
					var prev_page = '.page' + (current_page-1);
					
					$(next_page).addClass('active pt-page-moveFromRight pt-page-ontop');
					$(next_page).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
						$(next_page).removeClass('pt-page-moveFromRight pt-page-ontop');
					});
					
					$(prev_page).addClass('pt-page-scaleDown');
					$(prev_page).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
						$(prev_page).removeClass('active pt-page-scaleDown');
						$('#touchsurface').off('scroll touchmove mousewheel');
					});
				}
				else{
					current_page=3;
				}
				setTimeout(function(){
					if($('.page3').hasClass('active')){
						if(isMobile == false){
							$('.bottom_nav .right-align').css('opacity', 0);
							$('.bottom_nav .left-align').css('opacity', 1);
						}
						else{
							$('.right_nav_mobile').css('display','none');
							$('.left_nav_mobile').css('display','flex');
						}
					}
					else{
						if(isMobile == false){
							$('.bottom_nav .right-align').css('opacity', 1);
							$('.bottom_nav .left-align').css('opacity', 1);
						}
						else{
							$('.right_nav_mobile').css('display','flex');
							$('.left_nav_mobile').css('display','flex');
						}
					}
				},500);
			}


			function scroll_event(){
				var scrolls = 0;
				setInterval(function(){
					scrolls = 0;
				},300);
				var scrollings = 1;
				var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
				$('.page_title').bind(mousewheelevt, function(e){
					if(!scroll_or_not)
						return;
					
					var evt = window.event || e //equalize event object     
					evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
					var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF
						
					if (document.documentMode || /Edge/.test(navigator.userAgent)) {
						if(delta > 0) {
							scrolls++;
							if(scrolls >8 && scrollings == 1){
								scroll_up();
								scrollings = 0;
								setTimeout(function(){
									scrollings = 1;
								},700);
								scrolls = 0;
							}
							else{}
						}
						else{
							scrolls++;
							if(scrolls >8 && scrollings == 1){
								scroll_down();
								scrollings = 0;
								setTimeout(function(){
									scrollings = 1;
								},700);
								scrolls = 0;
							}
							else{}
						}
					}
					
					else{
						if(delta > 0) {
							scrolls++;
							if(scrolls >3 && scrollings == 1){
								scroll_up();
								scrollings = 0;
								setTimeout(function(){
									scrollings = 1;
								},700);
								scrolls = 0;
							}
							else{}
						}
						else{
							scrolls++;
							if(scrolls >3 && scrollings == 1){
								scroll_down();
								scrollings = 0;
								setTimeout(function(){
									scrollings = 1;
								},700);
								scrolls = 0;
							}
							else{}
						}
					}
				});
			}

			function swipedetect(el, callback){
					var touchsurface = el,
					swipedir,
					startX,
					startY,
					distX,
					distY,
					threshold = 100, //required min distance traveled to be considered swipe
					restraint = 100, // maximum distance allowed at the same time in perpendicular direction
					allowedTime = 500, // maximum time allowed to travel that distance
					elapsedTime,
					startTime,
					handleswipe = callback || function(swipedir){ }

					touchsurface.addEventListener('touchstart', function(e){
							var touchobj = e.changedTouches[0]
							swipedir = 'none'
							dist = 0
							startX = touchobj.pageX
							startY = touchobj.pageY
							startTime = new Date().getTime() // record time when finger first makes contact with surface
							e.preventDefault()
					}, false)

					touchsurface.addEventListener('touchmove', function(e){
							e.preventDefault() // prevent scrolling when inside DIV
					}, false)

					touchsurface.addEventListener('touchend', function(e){
							var touchobj = e.changedTouches[0]
							distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
							distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
							elapsedTime = new Date().getTime() - startTime // get time elapsed
							if (elapsedTime <= allowedTime){ // first condition for awipe met
									if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
											swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
									}
									else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
											swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
									}
							}
							handleswipe(swipedir)
							e.preventDefault()
					}, false)
			}
