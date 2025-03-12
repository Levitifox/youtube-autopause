# YouTube Auto Pause

YouTube Auto Pause is a lightweight Chrome extension that automatically pauses YouTube videos when a new tab is opened. This ensures that videos don’t start playing unexpectedly in multiple tabs, giving you full control over playback.

## Features

- **Automatic Pause:** Videos are paused immediately on page load if the feature is enabled.
- **Easy Toggle:** Use the simple popup interface to enable or disable the auto-pause functionality.
- **Seamless Integration:** Works across various YouTube URLs including video pages, channels, and user pages.

## Installation

1. **Clone or Download:** Get the source code from this repository.
2. **Open Chrome Extensions Page:** Navigate to `chrome://extensions/` in your Chrome browser.
3. **Enable Developer Mode:** Toggle the "Developer mode" switch in the top right corner.
4. **Load Unpacked:** Click on the "Load unpacked" button and select the folder containing the extension files.

## Usage

- Once installed, click the extension icon in the Chrome toolbar.
- Toggle the checkbox in the popup to enable or disable the auto pause feature.
- When enabled, any newly opened YouTube video will pause automatically, allowing you to play it manually when you're ready.

## Code Structure

- **manifest.json:** Defines the extension’s configuration and permissions.
- **popup.html & popup.js:** Provide the user interface for enabling/disabling the feature.
- **content.js:** Contains the logic to detect and pause YouTube videos on page load and during navigation.
