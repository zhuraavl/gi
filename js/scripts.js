jQuery(document).ready(function ($) {
  'use strict';
  
  
  
  
  
  $(".invest-item a").hover(function () {
    $(".anim-box").toggleClass("move");
  });
  
  $(".show-one").hover(function () {
    $(".left-side .one").toggleClass("move");
  });
  $(".show-two").hover(function () {
    $(".left-side .two").toggleClass("move");
  });
  $(".show-three").hover(function () {
    $(".left-side .three").toggleClass("move");
  });
  $(".show-four").hover(function () {
    $(".left-side .four").toggleClass("move");
  });
  $(".show-five").hover(function () {
    $(".left-side .five").toggleClass("move");
  });
  
  
   $(".projects-link").click(function () {
    $(".under-header").slideToggle();
  });
  
  
  
  var loader = function () {
    $('body').addClass("load");
  };
  setTimeout(loader, 100);  
  
  
  
  
  var target = $('.part-list')
  target.after('<div class="affix" id="affix"></div>')

  var affix = $('.affix')
  affix.append(target.clone(true))

  // Show affix on scroll.
  var element = document.getElementById('affix')
  if (element !== null) {
    var position = target.position()
    window.addEventListener('scroll', function () {
      var height = $(window).scrollTop()
      if (height > position.top) {
        target.css('visibility', 'hidden')
        affix.css('display', 'block')
      } else {
        affix.css('display', 'none')
        target.css('visibility', 'visible')
      }
    })
  }
  
  
  // move left
  var hero_move = $('#move-pic');
  var hero_move_top = $('.new-hero');

	function scroll_run(){
		var scroll_top = $(window).scrollTop(),
			transformx = scroll_top;
		hero_move.css({
			'-webkit-transform':'translateX(-' + transformx + 'px)',
			'transform':'translateX(-' + transformx + 'px)'
		}),
    hero_move_top.css({
			'-webkit-transform':'translateY(' + transformx + 'px)',
			'transform':'translateY(' + transformx + 'px)'
		})
	}
	scroll_run();
	$(window).scroll(scroll_run);
  
  // opacity scroll
  var hero_opacity = $('.hero-bg');
  var range = 300;

  $(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop(),
        height = hero_opacity.outerHeight(),
        offset = height / 2,
        calc = 1 - (scrollTop - offset + range) / range;

    hero_opacity.css({ 'opacity': calc });

    if (calc > '1') {
      hero_opacity.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      hero_opacity.css({ 'opacity': 0 });
    }

  });


  
  
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			th.addClass("done");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


  
  
});  















