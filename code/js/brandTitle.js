
$(function () {
   
    $.ajax({
        type: 'get',
        url: obj.url + "getbrandtitle",
        success: function (data) {
            console.log(data);
            $('.brandTitle-content').html(template('brandTitleTpl', data));
        }
    });
});