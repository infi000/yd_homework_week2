class Create {
    constructor() {
        this.btn = $("#js-btn");
    }
    fn() {
        this.btn.click(yd.throttle(function() {
            console.log(1)
        }, 1000));
    }
}

export default Create;