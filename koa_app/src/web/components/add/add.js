import "./add.css";
const add = {
    init() {
        console.log("add组建对应的入口文件");
        xtag.create('x-add', class extends XTagElement {
            '::template(true)' (){
                return `<form id="contact-form" action="/save">
                <div class="form-group field-contactform-name required">
                    <label class="control-label" for="contactform-name">书名</label>
                    <input type="text" id="contactform-name" class="form-control" name="Book[name]" autofocus="" aria-required="true" aria-invalid="true">
                    <p class="help-block help-block-error" disabled>书名 cannot be blank.</p>
                </div>
                <div class="form-group field-contactform-desc required ">
                    <label class="control-label" for="contactform-desc">简介</label>
                    <input type="text" id="contactform-desc" class="form-control" name="Book[desc]" aria-required="true" aria-invalid="true">
                </div>
                <div class="form-group field-contactform-price required ">
                    <label class="control-label" for="contactform-price">价格</label>
                    <input type="text" id="contactform-price" class="form-control" name="Book[price]" aria-required="true" aria-invalid="true">
                    <p class="help-block help-block-error" disabled>价格 cannot be blank.</p>
                </div>
                <div class="form-group field-contactform-author required ">
                    <label class="control-label" for="contactform-author">作者</label>
                    <input type="text" id="contactform-author" class="form-control" name="Book[author]" aria-required="true" aria-invalid="true">
                </div>
                <div class="form-group field-contactform-from required ">
                    <label class="control-label" for="contactform-from">出版社</label>
                    <input type="text" id="contactform-from" class="form-control" name="Book[from]" aria-required="true" aria-invalid="true">
                </div>
                <div class="form-group field-contactform-author required ">
                    <label class="control-label" for="contactform-author">出版时间</label>
                    <input type="date" id="contactform-author" class="form-control" name="Book[author]" aria-required="true" aria-invalid="true">
                </div>
                <div class="form-group">
                    <a  class="btn btn-primary"  id="btn_submit">Submit</a>
                    <button  class="btn btn-primary" >Submit2</button>
                </div>
            </form>`
              }
        });
    }
}

export default add;