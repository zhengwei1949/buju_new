
$(function () {
    
    var productid = tools.getParam("productid");
    console.log(productid);
    
    //1. 三级列表 商品详情 渲染
    $.ajax({
        type: 'get',
        url: obj.url + "getproduct",
        data: {
            productid: productid
        },
        success:function (data) {
            console.log(data);
            $('.product_title').html( template('titleTpl',data) );
            $('.detail').html ( template('detailTpl', data) );
        }
    });
    
    //2. 商品评论
    $.ajax({
        type: 'get',
        url: obj.url + "getproductcom",
        data:{
            productid: productid,
        },
        success:function (data) {
            // console.log(data);
            $('.comment-list>ul').html( template('comTpl', data) );
        }
    })
});