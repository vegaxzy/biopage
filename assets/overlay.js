document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const content = document.querySelector('.screen');
    const audio = document.getElementById('audio');
    const video = document.getElementById('video');

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        content.style.opacity = 1;

        video.style.display = 'block';
        video.volume = 0;
        audio.volume = 0.4;

        video.play();
        audio.play();
    });
}
)