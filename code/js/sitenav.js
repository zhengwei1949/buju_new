
$(function () {
   $.ajax({
       type:'get',
       url: obj.url + "getsitenav",
       success: function (data) {
           console.log(data);
           $('.sitenav-content ul').html(template('navTpl', data));
       }
   })
   
});