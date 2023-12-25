let activeNotification;

const COPY_PAGE_URL_BTN = document.getElementById("copyPageUrlBtn");
const COPY_FEED_URL_BTN = document.getElementById("copyFeedUrlBtn");
const PAGE_URL = `${location.protocol}//${location.host}${location.pathname}`;
const FEED_URL = `${location.protocol}//${location.host}/feed.xml`;

function _sendNotification(text, duration = 3) {
    if (text && !activeNotification) {
        //create our element node
        const notifElem = document.createElement("div");
        const elemText = document.createTextNode(text);
        const elemAttrib = document.createAttribute("class");
        elemAttrib.value = "notification";

        //assign class attribute and append
        notifElem.setAttributeNode(elemAttrib);
        notifElem.appendChild(elemText);

        //set the active notification to current
        activeNotification = notifElem;

        //insert our new element node before </body>
        document.body.insertBefore(notifElem, document.body.nextSibling);

        //show closing animation after duration
        setTimeout(() => {
            elemAttrib.value = "notification cleared";
            notifElem.setAttributeNode(elemAttrib);

            //remove element after animation is done
            setTimeout(() => {
                activeNotification = null;
                notifElem.remove();
            }, 500);
        }, duration * 1000);

        return true;
    } else if (activeNotification) {
        console.warn("Cannot show notification, one is currently active.");
        return false;
    } else if (duration <= 0) {
        console.error("Parameter 'duration' cannot be less than 0.");
        return false;
    } else {
        console.error("Parameter 'text' cannot be blank.");
        return false;
    }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write
function _copyText(text) {
    if (text) {
        var type = "text/plain";
        var blob = new Blob([text], {type});
        var data = [new ClipboardItem({ [type]: blob })];
        navigator.clipboard.write(data).then(
            () => {
                _sendNotification("Copied text to clipboard!");
            },
            (err) => {
                _sendNotification(`Could not copy text to clipboard: ${err}`);
            }
        );
    }
}

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey) {
        if (e.altKey) {
            if (e.code === "KeyC") {
                //we don't want any queries in our url, same as page.url in jekyll
                _copyText(PAGE_URL);
            }
        }
    }
});

if (COPY_PAGE_URL_BTN !== null) { COPY_PAGE_URL_BTN.addEventListener("click", ()=>{_copyText(PAGE_URL)}) }
if (COPY_FEED_URL_BTN !== null) { COPY_FEED_URL_BTN.addEventListener("click", ()=>{_copyText(FEED_URL)}) }