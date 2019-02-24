class Create {
    constructor() {
        this.btn_submit = $("#btn_submit");
    }
    fn() {
        this.btn_submit.click(yd.throttle(function() {
            //获取参数 
            //GET请求/SAVE
            //获取响应结果 跳转
            var params = $("#contact-form").serialize();
            fetch("/save?" + params).then(res => res.json()).then((json) => {
                console.log(json);
                if (json.code == 0) {
                    location.href="/";
                }
            })
        }, 1000));
    }
}

export default Create;