$(function(){

  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getinlanddiscount",
    data:{},
    dataType:'json',
    success:function(info){
      console.log(info);
      
      //渲染模板
      $('.product_list ul').html(template("tpl",info));
    }
  })

})