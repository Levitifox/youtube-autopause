document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");

    chrome.storage.sync.get({ autoPauseEnabled: true }, function (data) {
        toggle.checked = data.autoPauseEnabled;
    });

    toggle.addEventListener("change", function () {
        chrome.storage.sync.set({ autoPauseEnabled: toggle.checked });
    });
});
