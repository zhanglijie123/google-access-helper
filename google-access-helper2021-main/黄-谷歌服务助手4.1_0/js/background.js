chrome.runtime.onMessage.addListener(function(e,t,a){"closeTips-top"==e.what?chrome.tabs.query({active:!0,currentWindow:!0},function(e){chrome.tabs.sendMessage(e[0].id,{what:"closeTips-top"},function(e){})}):"closeTips-bottom-forever"==e.what?chrome.tabs.query({active:!0,currentWindow:!0},function(e){chrome.tabs.sendMessage(e[0].id,{what:"closeTips-bottom-forever"},function(e){})}):"closeTips-bottom-tmp"==e.what?chrome.tabs.query({active:!0,currentWindow:!0},function(e){chrome.tabs.sendMessage(e[0].id,{what:"closeTips-bottom-tmp"},function(e){})}):"_trackEvent"==e.what?trackEvent(e.category,e.action,e.label):"getservername"==e.what&&chrome.proxy.settings.get({incognito:!1},function(e){for(var a=JSON.stringify(e).match(/https.+\d;/)[0].split(/\.|:/),n="",o=0;o<a.length;o++){var r=a[o].length-1;a[o].length-2>=0&&(r=a[o].length-2),n+=a[o].charAt(r)}chrome.tabs.query({url:t.url},function(e){for(var t=0;t<e.length;t++)chrome.tabs.sendMessage(e[t].id,{what:"setservername",name:n},function(e){})})})}),chrome.runtime.onInstalled.addListener(function(e){if("install"==e.reason&&(chrome.tabs.create({url:"http://www.google.com"}),setTimeout(function(){window.location.reload()},9e5)),"install"==e.reason||"update"==e.reason){var t=(new Date).getTime();fengSetStorage("current_update_time",t)}var a=chrome.runtime.getManifest().version;if("update"==e.reason&&"3.3"==a&&chrome.tabs.create({url:"http://www.iwikimedia.com/ppgg/updateNotify.html?v=3.3"}),"install"==e.reason){var n=chrome.runtime.getManifest().version;chrome.storage.sync.set({version:n},function(){})}var o={};chrome.storage.local.get("up",function(t){t.up&&(o=t.up),"install"==e.reason?o.it=(new Date).getTime():o.ut=(new Date).getTime(),chrome.storage.local.set({up:o})}),"install"==e.reason&&chrome.storage.local.set({installTime:(new Date).getTime()})}),chrome.runtime.onMessage.addListener(function(e,t,a){if("GET_STORAGE"==e.cmd)chrome.storage.local.get(e.key,function(t){a(parseJSON(t[e.key]))});else if("SET_STORAGE"==e.cmd){var n={};n[e.key]=e.value,chrome.storage.local.set(n)}else"NET"==e.cmd&&$.ajax($.extend({},e.settings,{success:function(e){a({status:"ok",data:e})},error:function(){a({status:"error"})}}));return!0});var _gaq,mp=new mp;function trackEvent(e,t,a){_gaq.push(["_trackEvent",e,t,a])}mp.background(),(_gaq=(_gaq=_gaq||[])||[]).push(["_setAccount","UA-149768454-2"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://ssl.google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),chrome.runtime.setUninstallURL("http://www.iwikimedia.com/ppgg/uninstall.html",function(){}),chrome.storage.local.get(["uuid","installTime"],function(e){if(e.installTime||(e.installTime=Date.now(),chrome.storage.local.set({installTime:e.installTime})),gParams.hy=parseInt((Date.now()-e.installTime)/864e5),e.uuid)gParams.uuid=e.uuid,chrome.storage.local.set({gParams:gParams});else{var t=document.createElement("script");t.src="js/fingerprint2.js",t.onload=function(){setTimeout(function(){(new Fingerprint2).get(function(e){gParams.uuid=e,chrome.storage.local.set({uuid:e}),chrome.storage.local.set({gParams:gParams})})},3e3)},document.body.appendChild(t)}});