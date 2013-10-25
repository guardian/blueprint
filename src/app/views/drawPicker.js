define(['jquery', 'Handlebars', 'text!templates/handlebars_example.hbs', 'views/knockoutStage', 'data/sample'],
	function($, Handlebars, HandleBarsExample, knockoutStageView, TeamModel) {

	var $html = $('<div class="groupStageWrapper">');
	var template = Handlebars.compile(HandleBarsExample);

	
	function render() {
		var templateConfig = {
		  groups: TeamModel.generateGroups(),
		  img_path: require.toUrl('imgs/')
		};
		console.log(TeamModel.generateGroups());
		// Render template and wrap in jQuery object
		$html.html(template(templateConfig));
		$html.find('.knockout_wrapper').html(knockoutStageView.render());

		// round 2

		//render


		// round 3 render
		

		return $html;
	}

	return {
		render: render
	}
});