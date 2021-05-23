$(document).ready(function() {
    setTimeout(function() {
        $("#preloader").addClass('fadeout');
        setTimeout(function() {
            $("#preloader").hide();
            $(html).removeClass('no-scroll');
        }, 1000)

    }, 3000)
})