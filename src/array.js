const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const splitlist = (items, col) => {
    try {
        if (items) {
            return Array.from(items).reduce((memo, value) => {
                if (memo.length === 0) {
                    memo.push([value]);
                }
                else if (memo[memo.length - 1].length < col) {
                    memo[memo.length - 1].push(value);
                }
                else {
                    memo.push([value]);
                }
                return memo;
            }, []);
        }
        else {
            return [];
        }
    } catch (err) {
        return [];
    }
};


module.exports = {
    splitlist, shuffle
}