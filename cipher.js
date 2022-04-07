function caesarCipher (s, k) {
    //string s = cleartext
    //int k = alphabet rotation factor

    let k = k % 26;
    let message = ""


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
}
