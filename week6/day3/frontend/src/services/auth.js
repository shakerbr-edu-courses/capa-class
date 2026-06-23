function saveToken(token) {
    localStorage.setItem("JWTsecret", token);
}

export { saveToken };