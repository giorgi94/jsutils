
const striptags = (text) => {
    try {
        const regex = /(<([^>]+)>)/ig;
        return text.replace(regex, '');
    } catch (e) {
        return text;
    }
};

const copytoClipboard = (text) => {
    const el = document.createElement('input');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    el.remove();
};

const donwloadUrl = (url, name) => {
    const el = document.createElement('a');
    name = name === undefined ? 'download' : name;

    el.innerText = 'download';
    el.setAttribute('href', url);
    el.setAttribute('download', name);
    document.body.appendChild(el);
    el.click();
    el.remove();
};

const WebpIsSupported = (callback) => {
    // If the browser doesn't has the method createImageBitmap, you can't display webp format
    if (!window.createImageBitmap) {
        callback(false);
        return;
    }

    // Base64 representation of a white point image
    var webpdata = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';

    // Retrieve the Image in Blob Format
    fetch(webpdata).then(function (response) {
        return response.blob();
    }).then(function (blob) {
        // If the createImageBitmap method succeeds, return true, otherwise false
        createImageBitmap(blob).then(function () {
            callback(true);
        }, function () {
            callback(false);
        });
    });
};

const emit = (signa, detail) => {
    window.dispatchEvent(new CustomEvent(signa, {
        detail: detail
    }));
};


module.exports = {
    emit, WebpIsSupported,
    donwloadUrl, copytoClipboard,
    striptags
}