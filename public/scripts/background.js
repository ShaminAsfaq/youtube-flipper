chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "",
    });

    chrome.storage.local.remove('state');
});

chrome.action.onClicked.addListener(async (tab) => {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({tabId: tab.id});
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? '' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });

    if (nextState === 'ON') {
        await chrome.action.setBadgeBackgroundColor({color: "#FF0000"});
    }

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { nextState });
    });
});