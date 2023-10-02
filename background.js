function onclickRun() {
    chrome.action.onClicked.addListener(function (tab) {
        chrome.tabs.create({
            url: chrome.runtime.getURL("index.html"),
            selected:true,
            active:true
        });
    });
}
onclickRun();

chrome.webRequest.onBeforeSendHeaders.addListener(function(e){
      if (e.url.endsWith("m3u8")) {
      // Log the request details to the console
      console.log("Request details:", e);
    }
},{
  urls:["<all_urls>"]
},["requestHeaders"])
