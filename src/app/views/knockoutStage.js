define(['jquery', 'handlebars', 'config', 'text!templates/knockoutLayout.hbs', 'data/sample'],
	function($, handlebars, Config, KnockoutTemplate, TeamModel) {

    var Handlebars = handlebars.default;
	var $html = $('<div>');
	var template = Handlebars.compile(KnockoutTemplate);


	function render() {
		var content = TeamModel.getGroups();

		var templateConfig = {
		  roundOf16: content.roundOf16,
		  quarterFinals: content.quarter,
		  semiFinals: content.semi,
		  final: content.final,
		  winner: content.winner,
		  img_path: Config.basePath + 'imgs/',
          seed: TeamModel.getSeed()
		};

        console.log('re render');


		$html.html(template(templateConfig));
		return $html;
	}

	return {
		render: render
	}
});