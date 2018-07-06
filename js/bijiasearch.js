$(function(){
  //设置一个标记记录ul是否隐藏
  var flag = 1
  //设置li的点击事件
  $(".category").on('click',".first_a",function(){
    var dataId = $(this).data("id");
    if(flag == 1){
      $("a[data-id="+ dataId + "]").next().hide();
      flag = 0;
      return;
    }
    if(flag == 0){
      $("a[data-id=" + dataId + "]").next().show();
      flag = 1;
      return;
    }
    
  });



  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcategorytitle",
    dataType:'json',
    success:function(info){
      console.log(info);
      $(".category-title").html(template('tpl', info))

    }
  });

  $('.category').on('click',".first_a",function(){
    var dataId = $(this).data("id");
    console.log(dataId);
  

  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getcategory",
    dataType:"json",
    data:{
     titleid:dataId
    },
    success:function(info){
      console.log(info);
      $('a[data-id='+ dataId +']').next().html(template('tpl2',info))
    }
  })
})
})

