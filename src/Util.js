class Util {

    /**
     * Internal Method Used To Parse Key
     * @param {string} key Key to be parse
     */
    static parseKey(key) {
        if (!key || typeof key !== "string") return { id: null, target: null };
        if (key.includes(".")) {
            let spl = key.split(".");
            let parsed = spl.shift();
            let target = spl.join(".");
            return { id: parsed, target: target };
        }
        return { id: key, target: null };
    }

}

module.exports = Util;