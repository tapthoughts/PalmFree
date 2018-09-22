
var options = {
    type: "basic", 
    title: "palm free",
    message: "hey, you are killing an orangutan by buying this product",
    iconUrl: "icon.png"
};
chrome.notifications.create(options, callback);
console.log('popup done#');

function callback() {
    console.log ('Popup done!');
}