
$(function () {
   
    $.ajax({
        type: 'get',
        url: obj.url + "getinlanddiscount",
        success:function (data) {
            console.log(data);
            $('.discountList-content ul').html(template('discountListTpl',data));
        }
    
    });
    
    
});