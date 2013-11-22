define(['jquery', 'Handlebars', 'text!templates/handlebars_example.hbs', 'views/knockoutStage', 'data/sample'],
	function($, Handlebars, HandleBarsExample, knockoutStageView, TeamModel) {

	var $html = $('<div class="groupStageWrapper">');
	var template = Handlebars.compile(HandleBarsExample);
	var currentData;
	
	function render() {
		currentData = TeamModel.generateGroups();
		var templateConfig = {
		  groups: currentData,
		  teams: currentData.teams
		};	

		
		// Render template and wrap in jQuery object
		$html.html(template(templateConfig));
		$html.find('.knockout_wrapper').html(knockoutStageView.render());
		
		if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			
			$.each($html.find('.teamPhoto'), function(i,j){
				j.src = j.dataset.src;
			});
		}
		
		return $html;
	}

	// function updateWinningTeams(){
	// 	var templateConfig = {
	// 	  groups: currentData,
	// 	  teams: currentData.teamsOrdered
	// 	};	

	// 	$html.html(template(templateConfig));
	// 	$html.find('.knockout_wrapper').html(knockoutStageView.render());

	// 	return $html;
	// }
	

	return {
		render: render,
		// updateWinningTeams: updateWinningTeams
	}
});