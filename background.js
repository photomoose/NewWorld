// Update the declarative rules on install or upgrade.
chrome.runtime.onInstalled.addListener(function() {
	  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	    chrome.declarativeContent.onPageChanged.addRules([{
	      conditions: [
	        new chrome.declarativeContent.PageStateMatcher({
	        	pageUrl: { hostContains: "asos." },
	          	css: ["body.served-by-sc"]
	        }),
	        new chrome.declarativeContent.PageStateMatcher({
	        	pageUrl: { hostContains: "test.asosservices.com" },
	          	css: ["body.served-by-sc"]
	        }),	        
	      ],
	      actions: [new chrome.declarativeContent.ShowPageAction() ]
    	}]);
	});
});