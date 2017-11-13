  $(document).ready(function() {

       $("#button").on("click", function() {
	      $.getJSON("cat2.json", function(json) {
	        var dates = [];
	        var date = function(){
	        	this.z=1,
	        	this.v=3
	        };
	     
	        $.each(json,function(i,fil){
	        	var mydate = new date();
	        	mydate.z = i;
	        	mydate.v = fil;
	        	dates.push(mydate);
	        });
	       $.each(dates,function(q,j){
	       	console.log("q:"+q+"----j:"+j+"----"+j.v.name);
	       });
	       	var num =Math.floor(Math.random()*dates.length);
	       	var target = dates[num];
			$("#text").html("<i>++</i>"+target.v.content);
			$("#name").text("-"+target.v.name);
			$("#style").removeAttr("class");
			$("#style").addClass(target.v.color);
	      });
    });

  });