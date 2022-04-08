function caesarCipher (s, k) {
    //string s = cleartext
    //int k = alphabet rotation factor (shift)

    let n = k % 26;
    let message = ""

// try a for loop with an empty array
    let resultArray = []
    for (let i = 0; i < String.length; i++) {
        // identify the ASCII code using charCodeAt
        let code = string.charCodeAt(i) + k
    }
}

    /*
    //handling the logic for A-Z (65-90 in ASCII) for capital
    char = char.charCodeAt(0);
    if (char >= 65 && char <= 90) {
        char += message;
        if (char > 90) {
        char -= 26;
    } else if (char < 65) {
        char += 26;
    }
    }
    //logic for lowercase a - z (97-122)
    else if (char >= 97 && char <= 90) {
        char += message;

    if (char > 122) {
        char -= 26;
    }
    else if (char > 122) {
        char += 26;
    }
    }
    message += String.fromCharCode(char - k)
    
    return message
}
*/
