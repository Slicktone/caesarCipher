
//handling the logic for A-Z (65-90 in ASCII) for capital
//figure out how to handle n above
char = char.charCodeAt(0);
if (char >= 65 && char <= 90) {
    char += n;
    if (char > 90) {
    char -= 26;
 } else if (char < 65) {
    char += 26;
 }
}
//logic for lowercase a - z (97-122)
else if (char >= 97 && char <= 90) {
    char += n;

if (char > 122) {
    char -= 26;
 }
else if (char > 122) {
    char += 26;
 }
}
