(function () {

    var myLoc = window.location.href;

    /*
     Extracting filename code from:
     http://stackoverflow.com/questions/423376/how-to-get-the-file-name-from-a-full-path-using-javascript
     */

    var requestedUrl = myLoc.replace(/^.*[\\\/]/, '');
    requestedUrl = requestedUrl.toLowerCase();
    if (redirectorDB.hasOwnProperty(requestedUrl)) {
        window.location.replace(redirectorDB[requestedUrl]);
    }
})();
