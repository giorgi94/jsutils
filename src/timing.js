
const delay = function (fn, t) {
    // private instance variables
    var queue = [], self, timer;

    function schedule(fn, t) {
        timer = setTimeout(function () {
            timer = null;
            fn();
            if (queue.length) {
                var item = queue.shift();
                schedule(item.fn, item.t);
            }
        }, t);
    }
    self = {
        delay: function (fn, t) {
            // if already queuing things or running a timer,
            //   then just add to the queue
            if (queue.length || timer) {
                queue.push({ fn: fn, t: t });
            } else {
                // no queue or timer yet, so schedule the timer
                schedule(fn, t);
            }
            return self;
        },
        cancel: function () {
            clearTimeout(timer);
            queue = [];
            return self;
        }
    };
    return self.delay(fn, t);
};

const debounce = (fn, time) => {
    let timeout;

    return function (arguments) {
        const functionCall = () => fn.apply(this, arguments);
        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    };
};

module.exports = {
    debounce, delay
}
