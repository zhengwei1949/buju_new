
$(function () {
    
    var productid = tools.getParam("productid");
    console.log(productid);
    
    $.ajax({
        type: 'get',
        url: obj.url + "getmoneyctrlproduct",
        data:{
            productid:productid
        },
        success: function (data) {
            console.log(data);
            $('.money-detail').html(template('moneyTpl', data));
        }
    })
    
    
});