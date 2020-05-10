const keyToken = "MEME_TOKEN";

const storage = {
    setToken(token) {
        localStorage.setItem(keyToken, token);
    },
    getToken() {
        return localStorage.getItem(keyToken);
    }
}

export default storage;