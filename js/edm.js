/* The Chainsmokers */
/* 1 */
$(document).ready(function () {
    audio1.addEventListener('loadedmetadata', function () {

        var duration = audio1.duration; //audio1 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration1").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio1.currentTime; //audio1 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime1").html(min + ":" + sec); //Id where i have to print the total duration of song.

    });
})

function pauseaudio1() {
    var audio1 = document.getElementById("audio1");
    audio1.pause();
}

function playaudio1() {
    $(document).ready(function () {
        audio1.addEventListener('timeupdate', function () {

            var duration = audio1.duration; //audio1 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration1").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio1.currentTime; //audio1 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime1").html(min + ":" + sec); //Id where i have to print the total duration of song.

        });
    })

    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio1 = document.getElementById("audio1");
    audio1.play();
    audio1.loop = true;
}

function stopaudio1() {
    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
}

/* 2 */
$(document).ready(function () {
    audio2.addEventListener('loadedmetadata', function () {

        var duration = audio2.duration; //audio1 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;
        $("#duration2").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio2.currentTime; //audio2 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime2").html(min + ":" + sec); //Id where i have to print the total duration of song.

    });
})

function pauseaudio2() {
    var audio2 = document.getElementById("audio2");
    audio2.pause();
}

function playaudio2() {
    $(document).ready(function () {
        audio2.addEventListener('timeupdate', function () {

            var duration = audio2.duration; //audio1 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;
            $("#duration2").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio2.currentTime; //audio2 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime2").html(min + ":" + sec); //Id where i have to print the total duration of song.

        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio2 = document.getElementById("audio2");
    audio2.play();
    audio2.loop = true;
}

function stopaudio2() {
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
}

/* 3 */
$(document).ready(function () {
    audio3.addEventListener('loadedmetadata', function () {

        var duration = audio3.duration; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration3").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio3.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime3").html(min + ":" + sec); //Id where i have to print the total duration of song.

    });
})

function pauseaudio3() {
    var audio3 = document.getElementById("audio3");
    audio3.pause();
}

function playaudio3() {
    $(document).ready(function () {
        audio3.addEventListener('timeupdate', function () {

            var duration = audio3.duration; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration3").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio3.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime3").html(min + ":" + sec); //Id where i have to print the total duration of song.

        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio3 = document.getElementById("audio3");
    audio3.play();
    audio3.loop = true;
}

function stopaudio3() {
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
}

/* 4 */
$(document).ready(function () {
    audio4.addEventListener('loadedmetadata', function () {

        var duration = audio4.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration4").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio4.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime4").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio4() {
    var audio4 = document.getElementById("audio4");
    audio4.pause();
}

function playaudio4() {
    $(document).ready(function () {
        audio4.addEventListener('timeupdate', function () {

            var duration = audio4.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration4").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio4.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime4").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio4 = document.getElementById("audio4");
    audio4.play();
    audio4.loop = true;
}

function stopaudio4() {
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
}

/* 5 */
$(document).ready(function () {
    audio5.addEventListener('loadedmetadata', function () {

        var duration = audio5.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration5").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio5.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime5").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio5() {
    var audio5 = document.getElementById("audio5");
    audio5.pause();
}

function playaudio5() {
    $(document).ready(function () {
        audio5.addEventListener('timeupdate', function () {

            var duration = audio5.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration5").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio5.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime5").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio5 = document.getElementById("audio5");
    audio5.play();
    audio5.loop = true;
}

function stopaudio5() {
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
}

/* 6 */
$(document).ready(function () {
    audio6.addEventListener('loadedmetadata', function () {

        var duration = audio6.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration6").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio6.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime6").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio6() {
    var audio6 = document.getElementById("audio6");
    audio6.pause();
}

function playaudio6() {
    $(document).ready(function () {
        audio6.addEventListener('timeupdate', function () {

            var duration = audio6.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration6").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio6.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime6").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio6 = document.getElementById("audio6");
    audio6.play();
    audio6.loop = true;
}

function stopaudio6() {
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
}

/* 7 */
$(document).ready(function () {
    audio7.addEventListener('loadedmetadata', function () {

        var duration = audio7.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration7").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio7.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime7").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio7() {
    var audio7 = document.getElementById("audio7");
    audio7.pause();
}

function playaudio7() {
    $(document).ready(function () {
        audio7.addEventListener('timeupdate', function () {

            var duration = audio7.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration7").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio7.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime7").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio7 = document.getElementById("audio7");
    audio7.play();
    audio7.loop = true;
}

function stopaudio7() {
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
}

/* 8 */
$(document).ready(function () {
    audio8.addEventListener('loadedmetadata', function () {

        var duration = audio8.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration8").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio8.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime8").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio8() {
    var audio8 = document.getElementById("audio8");
    audio8.pause();
}

function playaudio8() {
    $(document).ready(function () {
        audio8.addEventListener('timeupdate', function () {

            var duration = audio8.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration8").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio8.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime8").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio8 = document.getElementById("audio8");
    audio8.play();
    audio8.loop = true;
}

function stopaudio8() {
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
}

/* 9 */
$(document).ready(function () {
    audio9.addEventListener('loadedmetadata', function () {

        var duration = audio9.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration9").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio9.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime9").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio9() {
    var audio9 = document.getElementById("audio9");
    audio9.pause();
}

function playaudio9() {
    $(document).ready(function () {
        audio9.addEventListener('timeupdate', function () {

            var duration = audio9.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration9").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio9.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime9").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio9 = document.getElementById("audio9");
    audio9.play();
    audio9.loop = true;
}

function stopaudio9() {
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
}

/* 10 */
$(document).ready(function () {
    audio10.addEventListener('loadedmetadata', function () {

        var duration = audio10.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration10").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio10.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime10").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio10() {
    var audio10 = document.getElementById("audio10");
    audio10.pause();
}

function playaudio10() {
    $(document).ready(function () {
        audio10.addEventListener('timeupdate', function () {

            var duration = audio10.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration10").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio10.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime10").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio10 = document.getElementById("audio10");
    audio10.play();
    audio10.loop = true;
}

function stopaudio10() {
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
}

/* 11 */
$(document).ready(function () {
    audio11.addEventListener('loadedmetadata', function () {

        var duration = audio11.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration11").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio11.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime11").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio11() {
    var audio11 = document.getElementById("audio11");
    audio11.pause();
}

function playaudio11() {
    $(document).ready(function () {
        audio11.addEventListener('timeupdate', function () {

            var duration = audio11.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration11").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio11.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime11").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio11 = document.getElementById("audio11");
    audio11.play();
    audio11.loop = true;
}

function stopaudio11() {
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
}

/* 12 */
$(document).ready(function () {
    audio12.addEventListener('loadedmetadata', function () {

        var duration = audio12.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration12").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio12.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime12").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio12() {
    var audio12 = document.getElementById("audio12");
    audio12.pause();
}

function playaudio12() {
    $(document).ready(function () {
        audio12.addEventListener('timeupdate', function () {

            var duration = audio12.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration12").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio12.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime12").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio12 = document.getElementById("audio12");
    audio12.play();
    audio12.loop = true;
}

function stopaudio12() {
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
}

/* 13 */
$(document).ready(function () {
    audio13.addEventListener('loadedmetadata', function () {

        var duration = audio13.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration13").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio13.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime13").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio13() {
    var audio13 = document.getElementById("audio13");
    audio13.pause();
}

function playaudio13() {
    $(document).ready(function () {
        audio13.addEventListener('timeupdate', function () {

            var duration = audio13.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration13").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio13.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime13").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio13 = document.getElementById("audio13");
    audio13.play();
    audio13.loop = true;
}

function stopaudio13() {
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
}

/* 14 */
$(document).ready(function () {
    audio14.addEventListener('loadedmetadata', function () {

        var duration = audio14.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration14").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio14.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime14").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio14() {
    var audio14 = document.getElementById("audio14");
    audio14.pause();
}

function playaudio14() {
    $(document).ready(function () {
        audio14.addEventListener('timeupdate', function () {

            var duration = audio14.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration14").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio14.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime14").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio14 = document.getElementById("audio14");
    audio14.play();
    audio14.loop = true;
}

function stopaudio14() {
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
}

/* 15 */
$(document).ready(function () {
    audio15.addEventListener('loadedmetadata', function () {

        var duration = audio15.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration15").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio15.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime15").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio15() {
    var audio15 = document.getElementById("audio15");
    audio15.pause();
}

function playaudio15() {
    $(document).ready(function () {
        audio15.addEventListener('timeupdate', function () {

            var duration = audio15.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration15").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio15.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime15").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio15 = document.getElementById("audio15");
    audio15.play();
    audio15.loop = true;
}

function stopaudio15() {
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
}

/* 16 */
$(document).ready(function () {
    audio16.addEventListener('loadedmetadata', function () {

        var duration = audio16.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration16").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio16.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime16").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio16() {
    var audio16 = document.getElementById("audio16");
    audio16.pause();
}

function playaudio16() {
    $(document).ready(function () {
        audio16.addEventListener('timeupdate', function () {

            var duration = audio16.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration16").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio16.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime16").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio16 = document.getElementById("audio16");
    audio16.play();
    audio16.loop = true;
}

function stopaudio16() {
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
}

/* 17 */
$(document).ready(function () {
    audio17.addEventListener('loadedmetadata', function () {

        var duration = audio17.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration17").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio17.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime17").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio17() {
    var audio17 = document.getElementById("audio17");
    audio17.pause();
}

function playaudio17() {
    $(document).ready(function () {
        audio17.addEventListener('timeupdate', function () {

            var duration = audio17.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration17").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio17.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime17").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio17 = document.getElementById("audio17");
    audio17.play();
    audio17.loop = true;
}

function stopaudio17() {
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
}

/* 18 */
$(document).ready(function () {
    audio18.addEventListener('loadedmetadata', function () {

        var duration = audio18.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration18").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio18.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime18").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio18() {
    var audio18 = document.getElementById("audio18");
    audio18.pause();
}

function playaudio18() {
    $(document).ready(function () {
        audio18.addEventListener('timeupdate', function () {

            var duration = audio18.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration18").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio18.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime18").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio18 = document.getElementById("audio18");
    audio18.play();
    audio18.loop = true;
}

function stopaudio18() {
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
}

/* 19 */
$(document).ready(function () {
    audio19.addEventListener('loadedmetadata', function () {

        var duration = audio19.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration19").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio19.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime19").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio19() {
    var audio19 = document.getElementById("audio19");
    audio19.pause();
}

function playaudio19() {
    $(document).ready(function () {
        audio19.addEventListener('timeupdate', function () {

            var duration = audio19.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration19").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio19.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime19").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio19 = document.getElementById("audio19");
    audio19.play();
    audio19.loop = true;
}

function stopaudio19() {
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
}

/* 20 */
$(document).ready(function () {
    audio20.addEventListener('loadedmetadata', function () {

        var duration = audio20.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration20").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio20.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime20").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio20() {
    var audio20 = document.getElementById("audio20");
    audio20.pause();
}

function playaudio20() {
    $(document).ready(function () {
        audio20.addEventListener('timeupdate', function () {

            var duration = audio20.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration20").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio20.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime20").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio20 = document.getElementById("audio20");
    audio20.play();
    audio20.loop = true;
}

function stopaudio20() {
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
}

/* 21 */
$(document).ready(function () {
    audio21.addEventListener('loadedmetadata', function () {

        var duration = audio21.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration21").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio21.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime21").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio21() {
    var audio21 = document.getElementById("audio21");
    audio21.pause();
}

function playaudio21() {
    $(document).ready(function () {
        audio21.addEventListener('timeupdate', function () {

            var duration = audio21.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration21").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio21.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime21").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio21 = document.getElementById("audio21");
    audio21.play();
    audio21.loop = true;
}

function stopaudio21() {
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
}

/* 22 */
$(document).ready(function () {
    audio22.addEventListener('loadedmetadata', function () {

        var duration = audio22.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration22").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio22.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime22").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio22() {
    var audio22 = document.getElementById("audio22");
    audio22.pause();
}

function playaudio22() {
    $(document).ready(function () {
        audio22.addEventListener('timeupdate', function () {

            var duration = audio22.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration22").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio22.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime22").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio22 = document.getElementById("audio22");
    audio22.play();
    audio22.loop = true;
}

function stopaudio22() {
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
}

/* 23 */
$(document).ready(function () {
    audio23.addEventListener('loadedmetadata', function () {

        var duration = audio23.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration23").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio23.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime23").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio23() {
    var audio23 = document.getElementById("audio23");
    audio23.pause();
}

function playaudio23() {
    $(document).ready(function () {
        audio23.addEventListener('timeupdate', function () {

            var duration = audio23.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration23").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio23.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime23").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio23 = document.getElementById("audio23");
    audio23.play();
    audio23.loop = true;
}

function stopaudio23() {
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
}

/* 24 */
$(document).ready(function () {
    audio24.addEventListener('loadedmetadata', function () {

        var duration = audio24.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration24").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio24.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime24").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio24() {
    var audio24 = document.getElementById("audio24");
    audio24.pause();
}

function playaudio24() {
    $(document).ready(function () {
        audio24.addEventListener('timeupdate', function () {

            var duration = audio24.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration24").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio24.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime24").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio24 = document.getElementById("audio24");
    audio24.play();
    audio24.loop = true;
}

function stopaudio24() {
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
}

/* 25 */
$(document).ready(function () {
    audio25.addEventListener('loadedmetadata', function () {

        var duration = audio25.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration25").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio25.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime25").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio25() {
    var audio25 = document.getElementById("audio25");
    audio25.pause();
}

function playaudio25() {
    $(document).ready(function () {
        audio25.addEventListener('timeupdate', function () {

            var duration = audio25.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration25").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio25.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime25").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio25 = document.getElementById("audio25");
    audio25.play();
    audio25.loop = true;
}

function stopaudio25() {
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
}

/* 26 */
$(document).ready(function () {
    audio26.addEventListener('loadedmetadata', function () {

        var duration = audio26.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration26").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio26.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime26").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio26() {
    var audio26 = document.getElementById("audio26");
    audio26.pause();
}

function playaudio26() {
    $(document).ready(function () {
        audio26.addEventListener('timeupdate', function () {

            var duration = audio26.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration26").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio26.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime26").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;

    var audio26 = document.getElementById("audio26");
    audio26.play();
    audio26.loop = true;
}

function stopaudio26() {
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;
}

/* 27 */
$(document).ready(function () {
    audio27.addEventListener('loadedmetadata', function () {

        var duration = audio27.duration; //audio4 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(duration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#duration27").html(min + ":" + sec); //Id where i have to print the total duration of song.

        var currentTime = audio27.currentTime; //audio3 is object of audio.  song= new Audio();

        var sec = new Number();
        var min = new Number();
        sec = Math.floor(currentTime);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        $("#currenttime27").html(min + ":" + sec); //Id where i have to print the total duration of song.
    });
})

function pauseaudio27() {
    var audio27 = document.getElementById("audio27");
    audio27.pause();
}

function playaudio27() {
    $(document).ready(function () {
        audio27.addEventListener('timeupdate', function () {

            var duration = audio27.duration; //audio4 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(duration);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#duration27").html(min + ":" + sec); //Id where i have to print the total duration of song.

            var currentTime = audio27.currentTime; //audio3 is object of audio.  song= new Audio();

            var sec = new Number();
            var min = new Number();
            sec = Math.floor(currentTime);
            min = Math.floor(sec / 60);
            min = min >= 10 ? min : '0' + min;
            sec = Math.floor(sec % 60);
            sec = sec >= 10 ? sec : '0' + sec;

            $("#currenttime27").html(min + ":" + sec); //Id where i have to print the total duration of song.
        });
    })

    var audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    var audio2 = document.getElementById("audio2");
    audio2.pause();
    audio2.currentTime = 0;
    var audio3 = document.getElementById("audio3");
    audio3.pause();
    audio3.currentTime = 0;
    var audio4 = document.getElementById("audio4");
    audio4.pause();
    audio4.currentTime = 0;
    var audio5 = document.getElementById("audio5");
    audio5.pause();
    audio5.currentTime = 0;
    var audio6 = document.getElementById("audio6");
    audio6.pause();
    audio6.currentTime = 0;
    var audio7 = document.getElementById("audio7");
    audio7.pause();
    audio7.currentTime = 0;
    var audio8 = document.getElementById("audio8");
    audio8.pause();
    audio8.currentTime = 0;
    var audio9 = document.getElementById("audio9");
    audio9.pause();
    audio9.currentTime = 0;
    var audio10 = document.getElementById("audio10");
    audio10.pause();
    audio10.currentTime = 0;
    var audio11 = document.getElementById("audio11");
    audio11.pause();
    audio11.currentTime = 0;
    var audio12 = document.getElementById("audio12");
    audio12.pause();
    audio12.currentTime = 0;
    var audio13 = document.getElementById("audio13");
    audio13.pause();
    audio13.currentTime = 0;
    var audio14 = document.getElementById("audio14");
    audio14.pause();
    audio14.currentTime = 0;
    var audio15 = document.getElementById("audio15");
    audio15.pause();
    audio15.currentTime = 0;
    var audio16 = document.getElementById("audio16");
    audio16.pause();
    audio16.currentTime = 0;
    var audio17 = document.getElementById("audio17");
    audio17.pause();
    audio17.currentTime = 0;
    var audio18 = document.getElementById("audio18");
    audio18.pause();
    audio18.currentTime = 0;
    var audio19 = document.getElementById("audio19");
    audio19.pause();
    audio19.currentTime = 0;
    var audio20 = document.getElementById("audio20");
    audio20.pause();
    audio20.currentTime = 0;
    var audio21 = document.getElementById("audio21");
    audio21.pause();
    audio21.currentTime = 0;
    var audio22 = document.getElementById("audio22");
    audio22.pause();
    audio22.currentTime = 0;
    var audio23 = document.getElementById("audio23");
    audio23.pause();
    audio23.currentTime = 0;
    var audio24 = document.getElementById("audio24");
    audio24.pause();
    audio24.currentTime = 0;
    var audio25 = document.getElementById("audio25");
    audio25.pause();
    audio25.currentTime = 0;
    var audio26 = document.getElementById("audio26");
    audio26.pause();
    audio26.currentTime = 0;

    var audio27 = document.getElementById("audio27");
    audio27.play();
    audio27.loop = true;
}

function stopaudio27() {
    var audio27 = document.getElementById("audio27");
    audio27.pause();
    audio27.currentTime = 0;
}
