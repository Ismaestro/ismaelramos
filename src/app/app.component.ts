import {Component, OnInit} from '@angular/core';

declare const $;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
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
            $('#filters').on('click', 'li', function () {
                $('#filters li').removeClass('active');
                $(this).addClass('active');
                const filterValue = $(this).attr('data-filter');
                $container.isotope({filter: filterValue});
            });

        });

        // Typing Animation (Typed.js)
        $('#element').typed({
            strings: ['UX, UI Designer', 'Web App Developer', 'Social Animal!'],
            typeSpeed: -50,
            loop: true,
            startDelay: 500,
            backDelay: 3000,
            contentType: 'html',
        });

        // Video background
        $('.player').mb_YTPlayer({
            containment: '#video-wrapper',
            mute: true,
            showControls: false,
            quality: 'default',
            startAt: 5
        });

        // Portfolio Modal
        $(document).on('click', '.open-project', function () {
            const projectUrl = $(this).attr('href');
            $('.inline-menu-container').removeClass('showx');
            $('.sidebar-menu').addClass('hidex');
            $('.content-blocks.pop').addClass('showx');
            $('.content-blocks.pop section').load(projectUrl + ' .load-data > *');
            return false;
        });

        // Blog post Modal
        $('.open-post').on('click', function () {
            const postUrl = $(this).attr('href');
            $('.inline-menu-container').removeClass('showx');
            $('.sidebar-menu').addClass('hidex');
            $('.content-blocks.pop').addClass('showx');
            $('.content-blocks.pop section').load(postUrl);
            return false;
        });

        // On Click Open Menu Items
        $('.menu-block, .menu-item').on('click', function () {
            $('.name-block').addClass('reverse');
            $('.name-block-container').addClass('reverse');
            $('.menu-blocks').addClass('hidex');
            $('.inline-menu-container').addClass('showx');
            $('.inline-menu-container.style2').addClass('dark');
        });
        // On Click Open About/Resume Block
        $('.about-block, .menu-item.about').on('click', function () {
            $('.content-blocks').removeClass('showx');
            $('.content-blocks.about').addClass('showx');
            $('.menu-item').removeClass('active');
            $('.menu-item.about').addClass('active');
        });
        // On Click Open Portfolio Block
        $('.portfolio-block, .menu-item.portfolio').on('click', function () {
            $('.content-blocks').removeClass('showx');
            $('.content-blocks.portfolio').addClass('showx');
            $('.menu-item').removeClass('active');
            $('.menu-item.portfolio').addClass('active');
        });
        // On Click Open Blog Block
        $('.blog-block, .menu-item.blog').on('click', function () {
            $('.content-blocks').removeClass('showx');
            $('.content-blocks.blog').addClass('showx');
            $('.menu-item').removeClass('active');
            $('.menu-item.blog').addClass('active');
        });
        // On Click Open Contact Block
        $('.contact-block, .menu-item.contact').on('click', function () {
            $('.content-blocks').removeClass('showx');
            $('.content-blocks.contact').addClass('showx');
            $('.menu-item').removeClass('active');
            $('.menu-item.contact').addClass('active');
        });

        // On Click Close Blocks
        $('#close').on('click', function () {
            $('.name-block').removeClass('reverse');
            $('.name-block-container').removeClass('reverse');
            $('.content-blocks').removeClass('showx');
            $('.menu-blocks').removeClass('hidex');
            $('.inline-menu-container').removeClass('showx');
            $('.menu-item').removeClass('active');
        });
        // On Click Close Blog Post And Project Details
        $('#close-pop').on('click', function () {
            $('.content-blocks.pop').removeClass('showx');
            $('.sidebar-menu').removeClass('hidex');
            $('.inline-menu-container').addClass('showx');
            $('.content-blocks.pop section').empty();
        });

        $('.menu-block, .menu-item, #close').on('click', function () {
            $('.content-blocks').animate({scrollTop: 0}, 800);
        });

        // Function for 'Index-Menu2.html'
        $('#home').on('click', function () {
            $('.content-blocks').removeClass('showx');
            $('.menu-item').removeClass('active');
            $(this).addClass('active');
            $('.inline-menu-container.style2').removeClass('dark');
        });
    }
}
