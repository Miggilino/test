const video = document.querySelector('#video');

// Initially, pause the video and set it to not autoplay
video.pause();
video.currentTime = 0; // Start the video at the beginning

// When cursor enters the video area, play the video
video.addEventListener('mouseenter', function() {
    video.play();
});

// When cursor moves within the video area, change the video currentTime based on the horizontal position of the cursor
document.addEventListener('mousemove', function(event) {
    const videoWidth = video.offsetWidth; // Get the video width
    const mouseX = event.clientX; // Horizontal position of the cursor

    // Calculate the percentage of video to play based on mouseX position
    const timeToSet = (mouseX / window.innerWidth) * video.duration;

    // Set the video currentTime to match the cursor position
    video.currentTime = timeToSet;
});

// When cursor leaves the video area, pause it and reset to the beginning
video.addEventListener('mouseleave', function() {
    video.pause();
    video.currentTime = 0; // Reset to the beginning
});

