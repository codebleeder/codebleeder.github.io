

$.when( $.ready ).then(function() {

});

function makeLinkActive(selectedItem){
  var activeItem = $('.pure-menu-list').find('.pure-menu-active');
  activeItem.removeClass('pure-menu-active');
  selectedItem.parent().addClass('pure-menu-active');
}

 $('.pure-menu-link').click(function(){   
   var selectedItem = $('#' + $(this).attr('id'));   
   makeLinkActive(selectedItem);
 });
