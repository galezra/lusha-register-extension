import { MESSAGE_EVENT } from './../constants/global';

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === MESSAGE_EVENT.fillForm) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0]?.id || 0, message);
    });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, properties) => {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, {
      type: MESSAGE_EVENT.urlChanged,
      url: properties?.url,
    });
  }
});
