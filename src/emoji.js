const emojiUnicode = (emoji) => {
    var comp;
    if (emoji.length === 1) {
        comp = emoji.charCodeAt(0);
    }
    comp = (
        (emoji.charCodeAt(0) - 0xD800) * 0x400
        + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
    );
    if (comp < 0) {
        comp = emoji.charCodeAt(0);
    }
    return comp.toString("16");
};

const emojiConvert = (text) => {
    const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    let match;
    while (match = emojiRegex.exec(text)) {
        const emoji = match[0];
        text = text.replace(emoji, '&#x' + emojiUnicode(emoji))
    }
    return text;
}

module.exports = {
    emojiUnicode,
    emojiConvert
}