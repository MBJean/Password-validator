function password(str) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(str);
}
