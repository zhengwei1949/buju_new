$(function () {
    
    var titleid,
        liWidth;
    
    //1. tab栏渲染
    function renderTab() {
        $.ajax({
            type: 'get',
            url: obj.url + "getbaicaijiatitle",
            success:function (data) {
                //console.log(data);
                $('.bcj-title>ul').html(template('titleTpl',data));
    
                // 动态设置#wrapper下的ul宽度
                liWidth = $('#wrapper ul').children();
                console.log(liWidth);
                $('#wrapper ul').width(liWidth);
                
                titleid = $('a.active').parent().data('id');
                console.log(titleid);
                renderList();
            }
        });
    }
    renderTab();
    
    //2. tab栏点击 切换active类 获取.active类的titleid 发送ajax渲染该分类商品列表
    $('.bcj-content').on('click', '.bcj-title li a', function () {
        $(this).addClass('active').parent().siblings().children().removeClass('active');
        titleid = $(this).parent().data('id');
        console.log(titleid);
        renderList();
    });
    
    //3. 白菜商品列表渲染
    function renderList() {
        $.ajax({
            type: 'get',
            url: obj.url + "getbaicaijiaproduct",
            data:{
                titleid:titleid
            },
            success: function (data) {
                console.log(data);
                $('.bcjList>ul').html(template('listTpl', data));
            }
        })
    }
    
    //4. tab栏区域滚动(IScroll Plugin)
    new IScroll('#wrapper',{
        scrollX:true,
        scrollY:false
    });
    
    //5. 回到顶部
    var scrollTop;
    $('.backTop').on('click', function () {
        var step = -200;
        var timer = setInterval(function () {
            scrollTop+=step;
            window.scrollTo(0,scrollTop);
        },50);
        if(scrollTop<=0){
            clearInterval(timer);
        }
    });
    window.onscroll = function () {
        //获取当前页面滚动的位置
        scrollTop = window.pageYOffset;
        // console.log(scrollTop);
    }
});