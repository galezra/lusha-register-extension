import { FILL_FORM_EVENT } from './../constants/global';

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === FILL_FORM_EVENT) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0]?.id || 0, message);
    });
  }
});
