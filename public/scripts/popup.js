console.log('Pop-Up Here!')

document.addEventListener('DOMContentLoaded', function() {
    console.log("This is a popup!")
    document.getElementById('sendMessage').addEventListener('click', () => {
        // Send a message to the content script
        console.log('Clicked')
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {type: 'HIT', payload: 'Hello from Popup!'});
        });
    });
})