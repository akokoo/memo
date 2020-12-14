export const cropText = (text, length = 25) => {
    if (text.length > length) {
        return ( text.slice(0, length-1) + ' ...')
    } else {
        return text;
    }
}

export const generateId = (idDuration = 15) => {
    let id = "",
    words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
    randomNum;

    while (id.length < idDuration) {
        randomNum = Math.floor(Math.random() * words.length);
        id += words[randomNum];
    }
    return id;
}