function yd(argument) {
    // body...
}

yd.throttle = function(fn, wait) {
    var timer;
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => timer = null, wait);
            return fn.apply(this, args);
        }
    }
}


var foo=function (fn){

    return function (...args){
        return fn(args)
    }
}


function test(n){
    console.log(n)
}