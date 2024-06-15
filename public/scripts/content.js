chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    try {
        const videoList = document.querySelectorAll('video');
        const singleVideo = videoList[0];
        if (message.nextState === 'ON') {
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
    } catch {
        console.log(`Error:`);
    }
});
