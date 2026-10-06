const enabledEl = document.getElementById('enabled');
const intervalEl = document.getElementById('interval');

chrome.storage.local.get(['enabled', 'interval'], (data) => {
    enabledEl.checked = data.enabled !== false;
    intervalEl.value = String(data.interval || 300000);
});

enabledEl.addEventListener('change', () => {
    chrome.storage.local.set({ enabled: enabledEl.checked });
});

intervalEl.addEventListener('change', () => {
    chrome.storage.local.set({ interval: Number(intervalEl.value) });
});