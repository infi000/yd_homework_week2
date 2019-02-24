function yd(argument) {
    // body...
}
/**
 * [throttle description]
 * @param  {Function} fn   [执行的方法]
 * @param  {[type]}   wait [等待时间 MS]
 * @return {[type]}        [description]
 */
yd.throttle = function(fn, wait) {
    //防抖
    var timer;
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => timer = null, wait);
            return fn.apply(this, args);
        }
    }
}


