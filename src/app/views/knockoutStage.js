define(['jquery', 'handlebars', 'config', 'templates/knockoutLayout', 'data/sample'],
	function($, handlebars, Config, KnockoutTemplate, TeamModel) {

    var Handlebars = handlebars.default;
	var $html = $('<div>');
	var template = Handlebars.compile(KnockoutTemplate);
    var content;

    function updateSocialLinks() {
        $('.tweet_share', 'body').attr('href', generateTwitterLink());
        $('.facebook_share').attr('href', generateFacebookLink());
    }

    function generateFacebookLink() {
        var directURI = encodeURIComponent('http://www.theguardian.com/p/3kp92');
        var link = encodeURIComponent('http://gu.com/p/3kp92?seed=' + TeamModel.getSeed());
        var fbURL = 'https://www.facebook.com/dialog/feed?app_id=180444840287';
        fbURL += '&redirect_uri=' + directURI;
        fbURL += '&link=' + link;
        return fbURL;
    }

    function generateTwitterLink() {
        var text = encodeURIComponent('I did the @guardian_sport interactive 2014 World Cup Draw and '+content.winner.teamName+' went on to win. Now do yours at');
        var link = encodeURIComponent('http://gu.com/p/3kp92?seed=' + TeamModel.getSeed());
        var twitterLink = 'https://twitter.com/intent/tweet';
        twitterLink += '?text=' + text;
        twitterLink += '&url=' + link;
        return twitterLink
    }


	function render() {
		content = TeamModel.getGroups();

		var templateConfig = {
		  roundOf16: content.roundOf16,
		  quarterFinals: content.quarter,
		  semiFinals: content.semi,
		  final: content.final,
		  winner: content.winner,
		  img_path: Config.basePath + 'imgs/',
          seed: TeamModel.getSeed()
		};

		$html.html(template(templateConfig));
		return $html;
	}

	return {
		render: render,
        updateSocialLinks: updateSocialLinks
	}
});