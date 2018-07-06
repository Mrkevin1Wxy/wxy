$(function(){

  var productid = getSearch("productId");
  var brandName = getSearch("brandName");
  var productPrice = getSearch("productPrice");
  var productCom = getSearch("productCom");
  console.log(brandName);
  console.log(productid);
  console.log(productPrice);
  console.log(productCom);
  
  $('.tirda').text(productCom);
  $('.priceBox').text(productPrice);
  //请求商品信息
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getproduct',
    data:{
      productid:productid,
    },
    dataType:"json",
    success:function (info) {
      console.log(info);
      
      $('.head').html(template('tpl', info))
    }
  })
  
  //请求评论信息
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getproductcom",
    data:{
      productid:productid,
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      
      $(".pingjia_content").html(template("tpl2",info));
    }
  })






})