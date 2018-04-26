$(function () {
    
    var couponid = tools.getParam('couponid');
    var sliderImgWidth;
    var index = 0;
    
    //1. 渲染优惠券商品列表
    function renderList() {
        $.ajax({
            type: 'get',
            url: obj.url + "getcouponproduct",
            data: {
                couponid: couponid
            },
            success: function (data) {
                console.log(data);
                //1. 渲染商品列表
                $('.couponproduct-list ul').html(template('couponProductTpl', data));
                $('.mask .layer ul').html(template('sliderTpl', data));
            }
        });
    }
    
    renderList();
    
    //2. mask功能
    $('.couponproduct-list ul').on('click', 'li', function () {
        //渲染轮播图
        sliderImgWidth = $('.layer')[0].offsetWidth;
        console.log(sliderImgWidth);
        //  让ul过渡 显示点击的a对应的图片
        //  获取点击a的couponid
        index = $(this).find('a').data('id');
        $('.layer>ul li').eq(index).show().siblings().hide();
        $('.mask').show();
    });
    
    //3 点击箭头 图片轮播
    $('.arrowR').on('click', function () {
        // var ul = $('.layer>ul')[0];
        // setTranslate(ul, -couponid1 * sliderImgWidth);
        index++;
        $('.layer>ul li').eq(index).show().siblings().hide();
    });
    
    function addTransition() {
        ul.style.transition = "all .3s";
        ul.style.webkitTransition = "all .3s";
    }
    
    function removeTransition() {
        ul.style.transition = "none";
        ul.style.webkitTransition = "none";
    }
    
    function setTranslate(ul, value) {
        ul.style.transform = "translateX(" + value + "px)";
        ul.style.webkitTransform = "translateX(-" + value + "px)";
    }
});


