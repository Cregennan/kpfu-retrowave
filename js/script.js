$(document).ready(function() {
    setTimeout(function() {
        $("#preloader").addClass('fadeout');
        setTimeout(function() {
            $("#preloader").hide();
            $('html').removeClass('no-scroll');
        }, 1000)
    }, 3000)
})

const audio_open = () => {
    $('html').addClass('no-scroll');
    $("#audio-suggestion").show();
}
const audio_close = () => {
    $("#audio-suggestion").hide();
    $('html').removeClass('no-scroll');
}

var audio = new Audio('./audio/white_night1.mp3');

setTimeout(function() {
    audio_open();
}, 1000)

$(document).on('click', "#turn_on_music", function() {
    audio.play();
})
$(document).on('click', "#turn_off_music", function() {
    audio.pause();
})