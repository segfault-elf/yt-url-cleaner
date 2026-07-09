chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!changeInfo.url) return;

    const url = changeInfo.url;

    if (url.includes('youtube.com')) {
        const cleanUrl = removeTrackingParams(url);
        if (cleanUrl !== url) chrome.tabs.update(tabId, { url: cleanUrl });
        return;
    }

    if (url.includes('youtu.be')) {
    const ytbe = goToYouTube(url);
    if (ytbe !== url) {
        chrome.tabs.update(tabId, { url: ytbe });
    }
    return;
    }
});

function goToYouTube(input) {
    const url = new URL(input);

    const videoId = url.pathname.slice(1);
    if (!videoId) return input;

    const clean = new URL("https://www.youtube.com/watch");
    clean.searchParams.set("v", videoId);

    for (const key of url.searchParams.keys()) {
        if (key.startsWith("utm_") || ["si", "feature", "is"].includes(key)) {
            continue;
        }
        clean.searchParams.set(key, url.searchParams.get(key));
    }

    return clean.toString();
}

function removeTrackingParams(input) {
    const url = new URL(input);

    const trackers = ["si", "feature", "is"];

    for (const key of [...url.searchParams.keys()]) {
        if (key.startsWith("utm_") || trackers.includes(key)) {
            url.searchParams.delete(key);
        }
    }

    return url.toString();
}