//string s = cleartext
//int k = alphabet rotation factor (shift)
function caesarCipher (s, k) {
// try a for loop with an empty array
    let convertedWord = []
    for (let i = 0; i < s.length; i++) {
        // identify the ASCII code using charCodeAt
        let cipher = s.charCodeAt(i) + k
        // handle for ASCII higher than 122
        while (cipher > 122) {
            cipher = (cipher - 122) + 96
        }
        // convert ASCII back to alphabet using fromCharCode
        // after moving through the entire input, convert back to a string with .push
        convertedWord.push(s.fromCharCode(cipher))
    }
    return convertedWord.join('')
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
