function tooltip(selector){
	$(selector).hover(function(e){
		var iLeft = e.pageX;
		var iTop = e.pageY;
		this.myTitle = this.title==""?this.innerHTML:this.title;
		this.title = "";
		$tooltip = $('<div id="tooltip" style="left:'+(iLeft+15)+'px;top:'+(iTop+15)+'px;">'+this.myTitle+'</div>');
		$tooltip.appendTo(document.body).show(300);
	}, function(){
		$('#tooltip').remove();
		this.title = this.myTitle;
	});

	$(selector).on('mousemove', function(e){
		$('#tooltip').offset({
			left: e.pageX + 15,
			top: e.pageY + 15
		});
	});
}
