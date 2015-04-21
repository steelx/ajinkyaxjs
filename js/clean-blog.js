//Lightbox
$(function() {

  $('.lightbox').on("click", function(e) {
		e.preventDefault();
    console.log('You clicked the image');

    var windowHeight = window.innerHeight || $(window).height(),
      	windowWidth = window.innerWidth || $(window).width();

    // Create the overlay, append it to body and make it visible.
    $('<div id="overlay"></div>')
      .css('opacity', '0')
      .animate({
        'opacity': '0.5'
      }, 'slow')
      .appendTo('body');

    // Create the lightbox container which shall contain the image
    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');

    // Create img-element and add to #lightbox when loaded.
    $('<img>')
      .attr('src', $(this).attr('href'))
      .css({
        'max-height': windowHeight,
        'max-width': windowWidth
      })
      .load(function() {
        $('#lightbox')
          .css({
            'top': (windowHeight - $('#lightbox').height()) / 2,
            'left': (windowWidth - $('#lightbox').width()) / 2
          })
          .fadeIn();
      })
      .appendTo('#lightbox');

    // Remove lightbox on click
    $('#overlay, #lightbox').on("click", function() {
      $('#overlay, #lightbox').remove();
    });

  });


  // Navigation Scripts to Show Header on Scroll-Up
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
      var headerHeight = $('.navbar-custom').height();
      $(window).on('scroll', {
              previousTop: 0
          },
          function() {
              var currentTop = $(window).scrollTop();
              //check if user is scrolling up
              if (currentTop < this.previousTop) {
                  //if scrolling up...
                  if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                      $('.navbar-custom').addClass('is-visible');
                  } else {
                      $('.navbar-custom').removeClass('is-visible is-fixed');
                  }
              } else {
                  //if scrolling down...
                  $('.navbar-custom').removeClass('is-visible');
                  if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
              }
              this.previousTop = currentTop;
          });
  }

});
