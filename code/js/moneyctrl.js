
$(function () {
    
    var pageid = tools.getParam("pageid") || 0;
    var pageNum,
        currentPage = 0;
    //1. 页面刷新 渲染分页和列表
    $.ajax({
        type: 'get',
        url: obj.url + 'getmoneyctrl',
        data:{
            pageid: pageid
        },
        success: function (data) {
            console.log(data);
            //计算总页数
            pageNum = Math.ceil(data.totalCount / data.pagesize);
            data.pageNum = pageNum;
            $('.product_info>ul').html( template('productTpl', data) );
            $('.product_page').html(template('pageTpl', data));
        }
    });
    
    //2. 只渲染某一页列表(不渲染分页)
    function render(currentPage) {
        $.ajax({
            type: 'get',
            url: obj.url + 'getmoneyctrl',
            data:{
                pageid: currentPage
            },
            success: function (data) {
                //console.log(data);
                pageNum = Math.ceil(data.totalCount / data.pagesize);
                data.pageNum = pageNum;
                $('.product_info>ul').html(template('productTpl', data));
            }
        });
    }
    
    //3. 返回顶部
    $('.footer .fa-arrow-up').on('click', function () {
        $(window).scrollTop(0);
    });
    
    //4. 分页功能
    // 点击上一页下一页 获取pageid 渲染列表
    $('.product_page').on("click", '.next', function () {
        if(pageid>=pageNum - 1){
            pageid = -1;
        }
        pageid++;
        render(pageid);
        $('select option').eq(pageid).prop('selected', true);
    });
    $('.product_page').on("click", '.prev', function () {
        if(pageid<=0){
            pageid = pageNum;
        }
        pageid--;
        render(pageid);
        $('select option').eq(pageid).prop('selected', true);
    });
    
    //5. 点击select 获取pageid 渲染列表
    $('.product_page').on('change', 'select', function(){
        //获取选中的option的value属性值
        // currentPage =  $(this).val();
        // console.log(currentPage);
        // pageid = $(this).val().split('/')[0] - 1;
        pageid = $(this).val() - 1;
        render(pageid);
    });
    
});