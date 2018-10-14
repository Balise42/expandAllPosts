var scriptTag = document.createElement('script');
var url = chrome.runtime.getURL('showall.js');
scriptTag.setAttribute('src', url );
(document.head || document.documentElement).appendChild(scriptTag);
