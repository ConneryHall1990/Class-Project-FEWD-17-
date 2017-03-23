

$(document).ready(function(){
  $("input[type='checkbox']").on('click', function(){
    var checked=$(this).is(':checked');
    var flavor=$(this).val();
    if (checked){
      $('td.flavor').each(function(){
        if($(this).html().toLowerCase().indexOf(flavor)< 0){
        $(this).parent().hide();
        }
      })
    }
    else {
      $('td.flavor').each(function(){
        if($(this).html().toLowerCase().indexOf(flavor)< 0){
        $(this).parent().show();
        }
      })
    }
  });

})
