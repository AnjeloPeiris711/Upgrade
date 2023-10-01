chrome.webRequest.onBeforeSendHeaders.addListener(function(e){
      if (e.url.endsWith("m3u8")) {
      // Log the request details to the console
      console.log("Request details:", e);
    }
},{
  urls:["<all_urls>"]
},["requestHeaders"]);