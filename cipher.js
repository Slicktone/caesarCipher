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
            convertedWord.push(String.fromCharCode(cipher))
        }
        return convertedWord.join('')
    }
