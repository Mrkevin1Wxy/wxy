$(function(){

  $.ajax({
    type:'get',
    url: "http://127.0.0.1:9090/api/getmoneyctrl",
    success:function(info ){
      console.log(info);
      $(".product_list ul").html(template("tpl2",info));
      
    }
  })
})