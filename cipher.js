
//handling the logic for A-Z (65-90 in ASCII) for capital
//figure out how to handle n
char = char.charCodeAt(0);
if (char >= 65 && char <= 90) {
    char += n;
}
if (char > 90) {
    char -= 26;
}
else if (char < 65) {
    char += 26;
}