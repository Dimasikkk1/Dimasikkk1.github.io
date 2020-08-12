(function(){
    const videos = Array.from(document.querySelectorAll('video'));
    let playing = true;

    videos.forEach(video => {
        video.addEventListener('play', function () {
            if (playing) {
                videos.forEach(el => {
                    el.pause();
                });
            }
            if (this.paused) {
                playing = false;
                this.play();
            } else {
                playing = true;
            }
        });
    });
})();