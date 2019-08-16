const queryString = {
    load(query) {
        return query.slice(1).split("&").map((e) => e.split("="))
            .reduce((m, [key, val]) => {

                if (/^\d+$/.test(val)) {
                    val = parseInt(val);
                }

                if (key in m) {
                    if (Array.isArray(m[key])) {
                        m[key].push(val);
                    } else {
                        m[key] = [m[key], val];
                    }
                } else {
                    m[key] = val;
                }
                return m;
            }, {});
    },
    dump(query) {
        return "?" + Object.entries(query).map(([key, val]) => {
            if (!Array.isArray(val)) {
                return `${key}=${val}`;
            } else {
                return val.map(v => `${key}=${v}`).join("&");
            }
        }).join("&");
    }
};

module.exports = { queryString }