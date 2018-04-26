$(function () {
    
    var titleId;//分类标题的titleId 用作参数发送ajax渲染二级列表
    
    //1. 点击angle-down 列表显示隐藏功能
    $('.content').on('click', '.arrowList', function () {
        
        var parentItem = $(this).closest('.item'),
            items = $('.content').children('.item');
        titleId = parentItem.data('id');
        console.log(titleId);
        //切换上下箭头
        $(this).toggleClass('fa-angle-down').toggleClass('fa-angle-up');
        parentItem.toggleClass('now').siblings('.item').removeClass('now');
        items.each(function (i, ele) {
            if ($(ele).hasClass('now')) {
                $(ele).next('.list').show();
            } else {
                $(ele).next().hide();
            }
        });
        
        //渲染二级分类
        renderCategory();
        
    });
    
    //2. 动态渲染分类列表
    //2.1 分类标题
    $.ajax({
        type: 'get',
        url: obj.url + "getcategorytitle",
        success: function (data) {
            //console.log(data);
            $('.content').html(template('titleTpl', data));
        }
    });
    
    //2.2 二级列表
    function renderCategory() {
        $.ajax({
            type: 'get',
            url: obj.url + "getcategory",
            data: {
                titleid: titleId
            },
            success: function (data) {
                console.log(data);
                $('.content .list ul').html( template('categoryTpl', data) );
            }
        })
    }
    
    
});