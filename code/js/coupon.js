
$(function () {
   
    $.ajax({
        type:'get',
        url: obj.url + "getcoupon",
        success:function (data) {
            console.log(data);
            $('.coupon-content .title ul').html(template('couponTpl', data));
        }
        
    })
    
});