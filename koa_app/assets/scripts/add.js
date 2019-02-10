class Create{
    constructor(){
        this.btn=$("#js-btn");
    }
    fn(){
        this.btn.click(function (argument) {
            console.log(1)
        })
    }
}

export  default Create;