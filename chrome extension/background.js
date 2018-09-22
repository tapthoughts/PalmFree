
  var rule1 = {
    conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'www.flipkart.com', schemes: ['https'] },
      })
    ],
    actions: [ new chrome.declarativeContent.ShowPageAction() ]  
};