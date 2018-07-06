$(function(){
  var titleId = 0;
  
  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
    data:{},
    dataType:"json",
    success:function(info){
      console.log(info);
      
      $('.baicaijianav ul').html(template('tpl',info));
      var anum = info.result.length

      
      // var anum = $('.baicaijianav ul li').length

      navLi = $('.baicaijianav ul li')
     var liWidth = 0;
     $(navLi[0]).addClass("current")

      for(i=0; i<= anum; i++){
        liWidth += navLi.width();
        liWidth = liWidth + 24; 
        console.log(liWidth);
      }
      liWidth += 'px'
      console.log(liWidth)
      
      // $('.baicaijianav ul').width(liWidth)
      $('.baicaijianav ul').css('width', liWidth)

      new IScroll('.baicaijianav',{
        scrollX : true,
        scrollY : false,
      })
      
     
    }
  })

  
   render();
   $('.baicaijianav ul').on('click', 'li', function () {

     $(this).addClass('current').siblings().removeClass('current');
     console.log(navLi);
     console.log($(this).data('id'))
      titleId = $(this).data('id')

    render(titleId);



   })

   function render() {
     $.ajax({
       type: "get",
       url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
       data: {
         titleid: titleId || 0,
       },
       dataType: 'json',
       success: function (title) {
         console.log(title);

         $('.baijiacaiProduct').html(template("tpl2", title))
       }
     })
   }



})