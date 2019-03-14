function closeContent() {
  $('.name-block').removeClass('menu-block');
  $('.name-block').removeClass('reverse');
  $('.name-block-container').removeClass('reverse');
  $('.content-blocks').removeClass('showx');
  $('.menu-blocks').removeClass('hidex');
  $('.inline-menu-container').removeClass('showx');
  $('.menu-item').removeClass('active');
  $('#close').hide();
}

$(document).ready(function () {
  $('#close').hide();

  $('.preloader').fadeOut('slow', function () {
    $('.preloader-left').addClass('slide-left');
  });

  $('.portfolio-block, .menu-item').on('click', function () {
    // Portfolio masonry
    const $container = $('#portfolio-container');
    $container.isotope({
      masonry: {
        columnWidth: '.portfolio-item'
      },
      itemSelector: '.portfolio-item'
    });
    $('#close').show();
    $('#filters').on('click', 'li', function () {
      $('#filters li').removeClass('active');
      $(this).addClass('active');
      const filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });

  });

  // Typing Animation (Typed.js)
  $('#element').typed({
    strings: ['Software developer'],
    typeSpeed: -1,
    loop: true,
    startDelay: 500,
    backDelay: 10000,
    contentType: 'html',
  });


  // Experience post Modal
  $('.open-post').on('click', function () {
    const postUrl = $(this).attr('href');
    $('.name-block').addClass('menu-block');
    $('.inline-menu-container').removeClass('showx');
    $('.sidebar-menu').addClass('hidex');
    $('.content-blocks.pop').addClass('showx');
    $('.content-blocks.pop section').load(postUrl);
    return false;
  });

  // On Click Open Menu Items
  $('.menu-block, .menu-item').on('click', function () {
    $('.name-block').addClass('menu-block');
    $('.name-block').addClass('reverse');
    $('.name-block-container').addClass('reverse');
    $('.menu-blocks').addClass('hidex');
    $('.inline-menu-container').addClass('showx');
    $('.inline-menu-container.style2').addClass('dark');
  });
  // On Click Open About/Resume Block
  $('.about-block, .menu-item.about').on('click', function () {
    $('.name-block').addClass('menu-block');
    $('.content-blocks').removeClass('showx');
    $('.content-blocks.about').addClass('showx');
    $('.menu-item').removeClass('active');
    $('.menu-item.about').addClass('active');
  });
  // On Click Open Portfolio Block
  $('.portfolio-block, .menu-item.portfolio').on('click', function () {
    $('.name-block').addClass('menu-block');
    $('.content-blocks').removeClass('showx');
    $('.content-blocks.portfolio').addClass('showx');
    $('.menu-item').removeClass('active');
    $('.menu-item.portfolio').addClass('active');
  });
  // On Click Open Experience Block
  $('.experience-block, .menu-item.experience').on('click', function () {
    $('.name-block').addClass('menu-block');
    $('.content-blocks').removeClass('showx');
    $('.content-blocks.experience').addClass('showx');
    $('.menu-item').removeClass('active');
    $('.menu-item.experience').addClass('active');
  });
  // On Click Open Contact Block
  $('.contact-block, .menu-item.contact').on('click', function () {
    $('.name-block').addClass('menu-block');
    $('.content-blocks').removeClass('showx');
    $('.content-blocks.contact').addClass('showx');
    $('.menu-item').removeClass('active');
    $('.menu-item.contact').addClass('active');
  });

  $(document).keyup((e) => {
    if (e.key === 'Escape') {
      closeContent();
    }
  });

  // On Click Close Blocks
  $('#close, .name-block').on('click', () => {
    closeContent();
  });
  // On Click Close experience Post And Project Details
  $('#close-pop').on('click', function () {
    $('.content-blocks.pop').removeClass('showx');
    $('.sidebar-menu').removeClass('hidex');
    $('.inline-menu-container').addClass('showx');
    $('.content-blocks.pop section').empty();
  });

  $('.menu-block, .menu-item, #close').on('click', function () {
    $('.content-blocks').animate({ scrollTop: 0 }, 800);
  });

  // Function for 'Index-Menu2.html'
  $('#home').on('click', function () {
    $('.content-blocks').removeClass('showx');
    $('.menu-item').removeClass('active');
    $(this).addClass('active');
    $('.inline-menu-container.style2').removeClass('dark');
  });
});
