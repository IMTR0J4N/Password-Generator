

/**
 * @description generate password
 * @param {number} length length of password
 * @param {object} options options of password(include special chars,ect..)
 */
export function generatePassword(length, options = { lowercase: true, uppercase: true, number: true, symbols: true }) {
    let chars = "";
    let password = "";
    if (options.lowercase) chars += "abcdefghijkmlnopkrstuvwxyz";
    if (options.uppercase) chars += chars.toUpperCase();
    if (options.number) chars += "0123456789";
    if (options.symbols) chars += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    for (let index = 0; index < length; index++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}