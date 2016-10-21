var Audio = Audio || null;
var chrome = chrome || null;

(function (chrome, Audio) {
  if (!Audio || !chrome) return

  chrome.tabs.onUpdated.addListener(function (tabID, info, tab) {
    if (tab.url.indexOf('https://www.google.com/') === 0 && info.status === 'complete') {
      new Audio('./goeoegle.wav').play()
    }
  })
})(chrome, Audio)
