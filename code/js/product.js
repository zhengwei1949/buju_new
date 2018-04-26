$(function () {
    
    var categoryid = tools.getParam("categoryid");
     console.log(categoryid);
    
    //1. 分类名称渲染
    $.ajax({
        type: 'get',
        url: obj.url + "getcategorybyid",
        data: {
            categoryid: categoryid
        },
        success:function (data) {
            // console.log(data);
            $('.product_title').html( template("titleTpl", data) );
            
        }
    });
    
    //2. 商品列表渲染
    $.ajax({
        type: 'get',
        url: obj.url + "getproductlist",
        data:{
            categoryid: categoryid,
            pageid: 1
        },
        success:function (data) {
            console.log(data);
            $('.product_info>ul').html( template('productTpl', data) );
            $('.product_page').html( template('pageTpl', data) );
        }
    });
    
    //3.分页跳转功能 传入id,分类名称,页码  返回对应的分页数据
    
    
    
    
    
    
    
    
    
    
});