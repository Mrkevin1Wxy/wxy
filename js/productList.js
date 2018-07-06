$(function(){
  //获取地址栏传过来的id
  var cateId = getSearch("category") 
  console.log(cateId);
  //渲染导航栏
  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getcategorybyid",
    dataType:"json",
    data:{
      categoryid:cateId,
    },
    success:function (info) {
      console.log(info);
      $(".nav").append(template('tpl',info));
      
      
    }

  })





  render();
  var currentPage = 1
  var totalPage;
 function render(currentPage) {
   
   //商品列表模块
   $.ajax({
     type: 'get',
     url: "http://127.0.0.1:9090/api/getproductlist",
     dataType: "json",
     data: {
       categoryid: cateId,
       pageid:currentPage,
     },
     success: function (info) {
       console.log(info);
       $(".product_list ul").html(template("tpl2", info));

      totalPage = Math.ceil(info.totalCount / info.pagesize) ;
       console.log(totalPage);
       info.totalPage = totalPage;

       for (var i = 1; i <= totalPage; i++) {
        (function (i) {
          $('.fenye_box select option').text(i + "/" + totalPage);

        }(i))
      }

       $('.fenye_box select').html(template('tmp-option', info));

       $('select option').each(function (i, v) {
         if (currentPage == $(this).val()) {
           $(this).prop('selected', true);
           $('select option:selected').text(currentPage + '/' + totalPage);
         }
       })
     }
   })
 }

 render(currentPage);

  $('.boxright').click(function () {
    if (currentPage >= totalPage) {
      return false;
    }
    currentPage++;
    render(currentPage);
  })

  $('.boxleft').click(function () {
    if (currentPage <= 0) {
      return false;
    }
    currentPage--;
    render(currentPage);
  })

  $('select').on('change',function(){
    var txt = $(this).children("option:selected").val();
    currentPage = txt;
    render(currentPage);
  })


})