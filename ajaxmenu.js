jQuery(document).ready(function() {	jQuery(".ajaxmenu  li.deeper").addClass("ajaxcurrent");    jQuery('.ajaxmenu > li').mouseenter(function(e) { 		   if (jQuery(this).hasClass("active")) {   		   jQuery("li").removeClass("ajaxcurrent");		   		   jQuery(this).addClass("ajaxcurrent");		   		   		   return;		   };        //console.log(e);        var  id = jQuery(this).attr("class");		var li = jQuery(this);				var url = "index.php?option=com_ajaxmenu&task=get&format=raw";        jQuery.ajax({						            url: url + "&ajaxid=" + id,            type: "POST",            data: jQuery("#city").serialize(),            dataType: 'json',            success: function(data) {                console.log(data);                var items = [];                jQuery.each( data, function( key, val ) {                 items.push( "<li id='" + key + "'><a href='"+ val['flink'] + "'>" + 				 	val['title'] + "</a></li>" );                });				jQuery( "<ul class='nav-child unstyled small'>" + items.join( "" ) + "</ul").				  appendTo( li );				    jQuery("li").removeClass("ajaxcurrent");		  		  		jQuery(li).addClass("active deeper ajaxcurrent");				              }        });		    });});