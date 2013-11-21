define(['jquery', 'handlebars', 'config', 'text!templates/handlebars_example.hbs', 'views/knockoutStage', 'data/sample'],
	function($, handlebars, Config, HandleBarsExample, knockoutStageView, TeamModel) {
    var Handlebars = handlebars.default;
	var $html = $('<div class="groupStageWrapper">');
	var template = Handlebars.compile(HandleBarsExample);
	var currentData;

	function render() {
		currentData = TeamModel.generateGroups();
		var templateConfig = {
		  groups: currentData,
		  teams: currentData.teams,
          img_path: Config.basePath + 'imgs/'
		};

		console.log(currentData)

		// Render template and wrap in jQuery object
		$html.html(template(templateConfig));
		$html.find('.knockout_wrapper').html(knockoutStageView.render());

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
		render: render
		// updateWinningTeams: updateWinningTeams
	}
});