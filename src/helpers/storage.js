const keyToken = "MEME_TOKEN";

const storage = {
    setToken(token) {
        localStorage.setItem(keyToken, token)
    }
}

export default storage;