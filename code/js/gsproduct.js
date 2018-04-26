$(function () {
    //刷新 渲染shop,area,和商品列表 点击tab li切换shop area对应的list显示隐藏
    
    var shopid,
        areaid;
    
    //1. 凑单商品店铺渲染
    function renderShop() {
        $.ajax({
            type: 'get',
            url: obj.url + "getgsshop",
            success: function (data) {
                //console.log(data);
                $('.couponproduct-content>#list1').html(template("shopTpl", data));
            }
        });
    }
    
    renderShop();
    
    //2. 区域渲染
    function renderArea() {
        $.ajax({
            type: 'get',
            url: obj.url + "getgsshoparea",
            success: function (data) {
                // console.log(data);
                $('.couponproduct-content>#list2').html(template("areaTpl", data));
            }
        });
    }
    
    renderArea();
    
    //3. gsproduct列表渲染
    function renderList(shopid, areaid) {
        shopid = shopid || 0;
        areaid = areaid || 0;
        $.ajax({
            type: 'get',
            url: obj.url + "getgsproduct",
            data: {
                shopid: shopid,
                areaid: areaid
            },
            success: function (data) {
                // console.log(data);
                $('.gsproduct-info>ul').html(template('gsTpl', data));
            }
        });
    }
    
    renderList();
    
    // 点击店铺 列表显示 选择店铺 渲染凑单商品列表
    var _this = null;
    var shopId, areaId;
    $('.tab').on('click', 'li', function () {
        //对应的list显示
        var id = $(this).data('id');
        _this = $(this).children('div')[0].children[0];
        switch (id) {
            case 1:
                $('#list1').toggleClass('hide');
                break;
            case 2:
                $('#list2').toggleClass('hide');
                break;
            case 3:
                $('#list3').toggleClass('hide');
                break;
        }
        
        //切换active类
        $('#list1').on('click', 'a', function () {
            shopId = $(this).data('id');
            //console.log(shopId);
            // $(this).toggleClass("active").siblings().removeClass('active');
            if ($(this).hasClass('active')) {
                $(this).closest('.list').addClass('hide');
            } else {
                $(this).toggleClass("active").siblings().removeClass('active');
                $(this).closest('.list').addClass('hide');
            }
            //tab li内容改变
            _this.innerHTML = $(this).children('b')[0].innerHTML;
            // console.log($(this).children('b')[0].innerHTML);
            renderList(shopId, areaId);
        });
        $('#list2').on('click', 'a', function () {
            areaId = $(this).data('id');
            //console.log(shopId);
            // $(this).toggleClass("active").siblings().removeClass('active');
            if ($(this).hasClass('active')) {
                $(this).closest('.list').addClass('hide');
            } else {
                $(this).toggleClass("active").siblings().removeClass('active');
                $(this).closest('.list').addClass('hide');
            }
            //tab li内容改变
            _this.innerHTML = $(this).children('b')[0].innerHTML;
            // console.log($(this).children('b')[0].innerHTML);
            renderList(shopId,areaId);
        });
        $('#list3').on('click', 'a', function () {
            areaId = $(this).data('id');
            //console.log(shopId);
            // $(this).toggleClass("active").siblings().removeClass('active');
            if ($(this).hasClass('active')) {
                $(this).closest('.list').addClass('hide');
            } else {
                $(this).toggleClass("active").siblings().removeClass('active');
                $(this).closest('.list').addClass('hide');
            }
            //tab li内容改变
            _this.innerHTML = $(this).children('b')[0].innerHTML;
            // console.log($(this).children('b')[0].innerHTML);
            renderList(shopId,areaId);
        });
    });
    
    // function render() {
    //     $.ajax({
    //         type: 'get',
    //         url: obj.url + "getgsshoparea",
    //         success: function (data) {
    //             // console.log(data);
    //             $('.couponproduct-content>.list').html(template("priceTpl", data));
    //         }
    //     });
    // }
    
    
});