
$(function () {
    var brandtitleid = tools.getParam("brandtitleid");
    // console.log(brandtitleid);
    // 标题渲染
    $.ajax({
        type: 'get',
        url: obj.url + "getbrand",
        data:{
            brandtitleid:brandtitleid
        },
        success: function (data) {
            // console.log(data);
            $('.brand-content>ul').html(template('brandTpl', data));
        }
    });
    
    // 商品列表
    $.ajax({
        type: 'get',
        url: obj.url + "getbrandproductlist",
        data:{
            brandtitleid:brandtitleid,
            pagesize:5
        },
        success: function (data) {
            console.log(data);
            $('.product_info>ul').html(template('productTpl', data));
        }
    });
    
    // 商品评论
    var productid = $('.product_info li:first-of-type').data('id');
    console.log(productid);
    $.ajax({
        type: 'get',
        url: obj.url + "getproductcom",
        data:{
            productid: 0
        },
        success:function (data) {
            console.log(data);
            $('.comment-list>ul').html( template('comTpl', data) );
        }
    });
    
    // 渲染评论区图片
    $.ajax({
        type: 'get',
        url: obj.url + "getbrandproductlist",
        data:{
            brandtitleid:brandtitleid,
            pagesize:1
        },
        success: function (data) {
            console.log(data);
            $('.commImg').html(template('commImgTpl', data));
        }
    });
    
    
    
});