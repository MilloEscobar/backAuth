$( document ).ready(function() {
    $.ajax({url: "http://localhost:3000/api/course", success: function(result){
	    $("#div1").html(result);
	}});
});