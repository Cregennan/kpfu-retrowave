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
    $("#audio-suggestion").addClass('fadeout');
    setTimeout(function() {
        $("#audio-suggestion").hide();
        $('html').removeClass('no-scroll');
    }, 800)

}

var audio = new Audio('./audio/music1.mp3');
audio.loop = true;
setTimeout(function() {
    if (localStorage.getItem('play_allowed') != 'false') {
        audio_open();
    }
}, 10000)

$(document).on('click', "#turn_on_music", function() {
    $("#audio-suggestion").addClass('fadeout');
    audio.play();
    audio_close();

})
$(document).on('click', "#turn_off_music", function() {
    audio.pause();
    audio_close();
})
$(document).on('click', "#do_not_ask", function() {
    localStorage.setItem('play_allowed', 'false');
    audio.pause();
    audio_close();
})