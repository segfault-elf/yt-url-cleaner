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

function goToYouTube(url) {
    const m = url.match(/youtu\.be\/([^?&#/]+)/);
    const videoId = m ? m[1] : null;
    if (!videoId) return null;

    return `https://youtube.com/watch?v=${encodeURIComponent(videoId)}`;
}

function removeTrackingParams(url) {
    return url.replace(/&(si|feature|is|utm_[^=]+)=[^&]*/g, '');
}
