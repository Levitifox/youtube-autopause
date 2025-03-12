function pauseVideoIfNeeded() {
    chrome.storage.sync.get({ autoPauseEnabled: true }, function (data) {
        if (!data.autoPauseEnabled) return;
        const video = document.querySelector("video");
        if (video && !video.paused) {
            video.pause();
            console.log("Video auto-paused by extension.");
        }
    });
}

function setupAutoPause() {
    pauseVideoIfNeeded();

    window.addEventListener("yt-navigate-finish", () => {
        setTimeout(pauseVideoIfNeeded, 500);
    });

    const observer = new MutationObserver((mutations, obs) => {
        const video = document.querySelector("video");
        if (video) {
            pauseVideoIfNeeded();
            obs.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setupAutoPause();
} else {
    document.addEventListener("DOMContentLoaded", setupAutoPause);
}
