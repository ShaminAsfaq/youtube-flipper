console.log('Hello World!!!!');

let idx = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    // Function to create a mirrored video player
    function createMirroredVideoPlayer(video) {
        // Create a container for the mirrored video player
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.transform = 'translate(-50%, -50%)';

        // Create a mirrored video element
        const mirroredVideo = document.createElement('video');
        mirroredVideo.src = video.src;
        mirroredVideo.style.transform = 'scaleX(-1)'; // Flip horizontally
        mirroredVideo.style.width = '100%';
        mirroredVideo.style.height = 'auto';
        mirroredVideo.autoplay = true;
        mirroredVideo.controls = true; // Enable controls for the mirrored video

        console.log(`Mirror Image: ${mirroredVideo}`);

        // Append mirrored video element to container
        container.appendChild(mirroredVideo);

        // Add container to the document body
        document.body.appendChild(container);

        // Pause original video when mirrored video player is created
        video.pause();

        // Listen for the end of the mirrored video to remove the container
        mirroredVideo.addEventListener('ended', () => {
            document.body.removeChild(container);
        });

        // Listen for the pause event to remove the container
        mirroredVideo.addEventListener('pause', () => {
            document.body.removeChild(container);
        });
    }

    if (message.type === 'HIT') {
        // console.log('Hello !');
        // Select all video elements on the page
        const container = document.getElementById('player-container-outer');
        console.log(container);

        try {
            const videoList = document.querySelectorAll('video');
            const singleVideo = videoList[0];

            if (idx % 2 === 0) {
                singleVideo.style.transition = 'transform 0.5s ease'; // Smooth transition
                singleVideo.style.transform = 'rotate(180deg)';
                singleVideo.style.webkitTransform = 'rotateY(180deg)';
                singleVideo.style.mozTransform = 'rotateY(180deg)';
            } else {
                singleVideo.style.transition = 'transform 0.5s ease'; // Smooth transition
                singleVideo.style.transform = 'rotate(0deg)';
                singleVideo.style.webkitTransform = 'rotateY(0deg)';
                singleVideo.style.mozTransform = 'rotateY(0deg)';
            }
            ++idx;
            console.log(singleVideo);
        } catch {
            console.log(`Error:`);
        }
    }
});
