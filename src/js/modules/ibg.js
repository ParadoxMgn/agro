export function ibg() {
  $.each($('.ibg'), function(index, val){
    if($(this).find('img')){
      $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
  });
}
ibg();

