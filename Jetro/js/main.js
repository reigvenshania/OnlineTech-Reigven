$(document).ready(function() {
    function toggleAccordion() {
        var accordionContent = $(this).next('.accordion-content');
        accordionContent.slideToggle();
        $('.accordion-content').not(accordionContent).slideUp();
    }

    $('.accordion-header').on('click', toggleAccordion);

    // Function to handle accordion behavior on small screens
    function handleAccordionForSmallScreen() {
        if ($(window).width() <= 767) { // Adjust the breakpoint as needed
            $('.accordion-header').off('click', toggleAccordion);
            $('.accordion-header').on('click', toggleAccordion);
        } else {
            $('.accordion-header').off('click', toggleAccordion);
        }
    }

    // Call the function initially
    handleAccordionForSmallScreen();

    // Call the function whenever the window is resized
    $(window).on('resize', handleAccordionForSmallScreen);
});
