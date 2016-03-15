/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // Form
    var container = $('#containerErrorForm');

    $("#contact-form").validator();

    $("#contact-form").validator({
        messages: {
            first_name: "Inserisci il nome",
            last_name: "Inserisci il cognome",
            email: {
                required: "Inserisci un indirizzo email valido",
                email: "Inserisci un indirizzo email valido"
            },
            custom_email_address_hire: {
                required: "Inserisci un indirizzo email valido",
                email: "Inserisci un indirizzo email valido"
            },
            message: "Inserisci il testo del messaggio",
            agree: "Dai il consenso per il trattamento dei dati personali<br />"
        }
    });

    // $("#contact-form").validator({
    //     framework: 'bootstrap',
    //     err: {
    //         container: 'tooltip'
    //     },
    //     icon: {
    //         valid: 'glyphicon glyphicon-ok',
    //         invalid: 'glyphicon glyphicon-remove',
    //         validating: 'glyphicon glyphicon-refresh'
    //     },
    //     errorContainer: container,
    //     errorLabelContainer: $("ul", container),
    //     wrapper: 'li',
    //     meta: "validate",
    //     rules: {
    //         firstName: "required",
    //         lastName: "required",
    //         emailAddress: {
    //             required: true,
    //             email: true
    //         },
    //         emailAddressHire: {
    //             required: true,
    //             email: true
    //         },
    //         message: "required",
    //         agree: "required"
    //     },
    //     highlight: function(element) {
    //         $(element).closest('.form-group').addClass('has-error');
    //     },
    //     unhighlight: function(element) {
    //         $(element).closest('.form-group').removeClass('has-error');
    //     },
    //     errorElement: 'span',
    //     errorClass: 'help-block',
    //     errorPlacement: function(error, element) {
    //         if(element.parent('.input-group').length) {
    //             error.insertAfter(element.parent());
    //         } else {
    //             error.insertAfter(element);
    //         }
    //     },
    //     messages: {
    //         firstName: "Inserisci il nome",
    //         lastName: "Inserisci il cognome",
    //         emailAddress: {
    //             required: "Inserisci un indirizzo email valido",
    //             email: "Inserisci un indirizzo email valido"
    //         },
    //         emailAddressHire: {
    //             required: "Inserisci un indirizzo email valido",
    //             email: "Inserisci un indirizzo email valido"
    //         },
    //         message: "Inserisci il testo del messaggio",
    //         agree: "Dai il consenso per il trattamento dei dati personali<br />"
    //     }
    // });

})(jQuery); // End of use strict
