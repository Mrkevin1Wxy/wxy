$(function(){
  
  var productid = getSearch("productid");
  console.log(productid);
  
  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
    data:{
      productid: productid
    },
    dataType:'json',
    success:function( info ){
      console.log(info);
      //渲染商品内容
      $('.money_head').html(template('tpl',info));
      //渲染二维码

      $('.erweima').html(template('tpl2',info));

      //渲染评论
      $('.fanhui').html(template("tpl3",info));
    }
  })

})