if(location.href.match("www.google.com(.(hk|sg))?/search")){chrome.runtime.onMessage.addListener(function(e,t,o){"closeTips-bottom-forever"==e.what?(iframebottom.remove(),$("html").css("margin-bottom","0px"),fengSetStorage("closedTips-bottom-forever",!0)):"closeTips-bottom-tmp"==e.what&&(iframebottom.remove(),$("html").css("margin-bottom","0px"))});var ifrUrlbottom=chrome.extension.getURL("footer.html"),iframebottom=$('<iframe src="'+ifrUrlbottom+'" class="eb_tips" style="border: 0px; overflow: visible; padding: 0px; right: auto; z-index: 2147483647; bottom: 0px; left: 0px; box-shadow: rgba(0, 0, 0, 0.498039) 0px 3px 10px; position: fixed; height:100px; width: 100%; display: inline; background: transparent;"></iframe>'),pip_end=(new Date).getTime(),installTime=fengGetStorage("current_update_time");if(installTime||(installTime=0),pip_end-installTime>864e5){var closedTipsForever=fengGetStorage("closedTips-bottom-forever");closedTipsForever||($("body").append(iframebottom),$("html").css("margin-bottom","100px"))}}else if(location.href.match("www.iwikipage.com/public/ppgg/serverreport"))chrome.runtime.onMessage.addListener(function(e,t,o){"setservername"==e.what&&$("#re2").text($("#re2").text()+e.name)}),setTimeout(function(){chrome.runtime.sendMessage({what:"getservername"})},15e3);else if(location.href.match("item.taobao.com|detail.tmall.com|item.jd.com"))chrome.runtime.onMessage.addListener(function(e,t,o){"closedTips-gw"==e.what&&(iframebottom.remove(),$("html").css("margin-bottom","0px"),chrome.storage.local.set({"closedTips-gw":!0},function(){}))});else if(location.href.match("www.baidu.com/\\?tn=59046333_dg")){var ifrUrltop=chrome.extension.getURL("nav.html"),iframetop=$('<iframe src="'+ifrUrltop+'" class="eb_tips" style="border: 0px; overflow: visible; padding: 0px; right: auto; z-index: 2147483647; top: 0px; left: 0px; box-shadow: rgba(0, 0, 0, 0.498039) 0px 3px 10px; position: fixed; height:200px; width: 100%; display: inline; background: transparent;"></iframe>');chrome.storage.local.get("closedTips-top",function(e){e["closedTips-top"]||($("body").append(iframetop),$("html").css("margin-top","200px"))}),chrome.runtime.onMessage.addListener(function(e,t,o){"closeTips-top"==e.what&&(iframetop.remove(),$("html").css("margin-top","0px"),chrome.storage.local.set({"closedTips-top":!0},function(){}))})}