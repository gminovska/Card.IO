

$(function () {
    
    //initiate the slimmenu plugin that makes the navigation responsive
    $('#navigation').slimmenu(
     {
         resizeWidth: '700',
         collapserTitle: 'CARD.IO WELLNESS',
         animSpeed: 'medium',
         easingEffect: null,
         indentChildren: false,
         childrenIndenter: '&nbsp;'
     });
    
    //animate the heart to look like it is beating
    (function pulse(back) {
    $('#logo a').animate(
        {
            
//            'width': (back) ? '70px' : '120px',
            opacity: (back) ? 1 : 0.5,
        }, 700, function(){pulse(!back)});
})(false);
    
    //creating the navigation dynamically, using the each() function
    var menu = [
        { title: 'About', url: 'about.html', order: 2},
        { title: 'Services', url: 'services.html', order: 3}
        , { title: 'Home', url: 'index.html', order: 1}
        , { title: 'Contact', url: 'contact.html', order: 4}
    ];
    
    //sort the menu items by order
    var sortFunction = function(first, second){
       return first.order - second.order; 
    }
    menu.sort(sortFunction);
    
    var menuElem = $('#navigation');
    $.each(menu, function(index, item){
        menuElem.append('<li><a href="' + item.url + '">' + item.title + '</a></li>');
        
            
            });
        
        
    
   //an event handler that keeps the navigation fixed to top 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 140) {
            
            $('header.clearfix').addClass('sticky');
            $('#container').addClass('padded');
            
        }
        else {
            
            $('header.clearfix').removeClass('sticky');
            $('#container').removeClass('padded');
            
        }
});
   //end of sticky nav 

//rotating backrground that uses the fadeIn effect, and the css() method

		$('#rotateBackground').fadeIn(1500);//fade the background back in once all the images are loaded
		  // run every 6s
		  setInterval('cycleImages()', 6000);

});

function cycleImages(){
      var $active = $('#rotateBackground .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#rotateBackground img:first');
      $next.css('z-index',2);//move the next image up the pile
	  $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
      $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

