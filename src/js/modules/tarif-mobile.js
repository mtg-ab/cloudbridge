$(function() {
    if($('.pricing .bloc-offers-mobile') && $('.pricing .bloc-offers-mobile').length > 0){
 
     console.log('[ Pricing page : OK ]');
 
     $('.pricing .bloc-offers-mobile .down').each(function(index, element){
         $(this).on('click', function(){
             
             console.log('[ Pricing page : click on item ]');
 
             if(!$(this).hasClass('toggle')){
                 $('.pricing .bloc-offers-mobile .down').removeClass('toggle');
                 $(this).addClass('toggle');
             }
         })
     })
 
     $('.pricing .bloc-offers-mobile .down').first().click();
 
 
    }
 });
 