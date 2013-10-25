define(['jquery', 'Handlebars', 'text!templates/knockoutLayout.hbs', 'data/sample'],
	function($, Handlebars, KnockoutTemplate, TeamModel) {

	var $html = $('<div>');
	var template = Handlebars.compile(KnockoutTemplate);

	
	function render() {
		var content = TeamModel.getGroups();
		
		console.log(content);
		var templateConfig = {
		  quarterFinals: content.quarter,
		  semiFinals: content.semi,
		  final: content.final,
		  winner: content.winner,
		  img_path: require.toUrl('imgs/')
		};
		

		$html.html(template(templateConfig));
		return $html;
	}

	return {
		render: render
	}
});