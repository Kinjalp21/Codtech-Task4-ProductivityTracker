chrome.runtime.onInstalled.addListener(() => {
    console.log("Productivity Tracker extension installed.");
});

    chrome.tabs.onActivated.addListener(({ activeInfo }) => {
    chrome.tabs.get(tabId, (tab) => {
        console.log(`Tab switched to: ${tab.url}`);
    });
});
