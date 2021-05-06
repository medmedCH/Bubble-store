
function mytest(){
  $(".small_img").hover(function (){
    $(".big_img").attr('src',$(this).attr('src'));
  });
}



 $(function (){
   $(".small_img").hover(function (){
     $(".big_img").attr('src',$(this).attr('src'));
   });
});
