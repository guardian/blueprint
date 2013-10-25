// Example of storing data
define(['jquery'], function($) {
	var teams = {
		holland: {teamName: 'Holland',  rank: 8, cont: 'Europe', flagImage: 'NLD.jpg', pot:"2", teamPhoto:"holland.jpg", winning: "" },
    	spain: { teamName: 'Spain', rank: 1, cont: 'Europe', flagImage: 'ESP.jpg', pot:"1", teamPhoto:"spain.jpg", winning: "" },
    	italy: {teamName: 'Italy',  rank: 9, cont: 'Europe', flagImage: 'ITA.jpg', pot:"2", teamPhoto:"italy.jpg", winning: "" },
    	ivorycoast: { teamName: "Cote d'Ivoire", rank: 17, cont: 'Africa', flagImage: 'CIV.jpg', pot:"3", teamPhoto:"ivorycoast.jpg", winning: "" },
    	usa: {teamName: 'USA',  rank: 13, cont: 'North America', flagImage: 'USA.jpg', pot:"4", teamPhoto:"usa.jpg", winning: "" },
    	argentina: { teamName: 'Argentina', rank: 3, cont: 'South America', flagImage: 'ARG.jpg', pot:"1", teamPhoto:"argentina.jpg", winning: "" },
    	brazil: {teamName: 'Brazil',  rank: 11, cont: 'South America', flagImage: 'BRA.jpg', pot:"1", teamPhoto:"brazil.jpg", winning: "" },
    	japan: { teamName: 'Japan', rank: 44, cont: 'Asia', flagImage: 'JPN.jpg', pot:"4", teamPhoto:"japan.jpg", winning: "" },
    	germany: {teamName: 'Germany',  rank: 2, cont: 'Europe', flagImage: 'DEU.jpg', pot:"1", teamPhoto:"germany.jpg", winning: "" },
    	england: { teamName: 'England', rank: 10, cont: 'Europe', flagImage: 'ENG.jpg', pot:"2", teamPhoto:"england.jpg", winning: "" },
    	russia: {teamName: 'Russia',  rank: 19, cont: 'Europe', flagImage: 'RUS.jpg', pot:"2", teamPhoto:"russia.jpg", winning: "" },
    	ecuador: { teamName: 'Ecuador', rank: 22, cont: 'South America', flagImage: 'ECU.jpg', pot:"3", teamPhoto:"ecuador.jpg", winning: "" },
    	australia: {teamName: 'Australia',  rank: 57, cont: 'Oceania', flagImage: 'AUS.jpg', pot:"4", teamPhoto:"australia.jpg", winning: "" },
    	chile: { teamName: 'Chile', rank: 12, cont: 'South America', flagImage: 'CHL.jpg', pot:"3", teamPhoto:"chile.jpg", winning: "" },
    	ghana: {teamName: 'Ghana',  rank: 23, cont: 'Africa', flagImage: 'GHA.jpg', pot:"3", teamPhoto:"ghana.jpg", winning: "" },
    	costarica: { teamName: 'Costa Rica', rank: 31, cont: 'South America', flagImage: 'CRI.jpg', pot:"4", teamPhoto:"costarica.jpg", winning: "" }
	};

	var pots = {
		potA : { potName: "A", teams: [teams.brazil, teams.spain, teams.argentina, teams.germany]},
		potB : { potName: "B", teams: [teams.holland, teams.italy, teams.england, teams.russia]},
		potC : { potName: "C", teams: [teams.ivorycoast, teams.ecuador, teams.chile, teams.ghana]},
		potD : { potName: "D", teams: [teams.usa, teams.japan, teams.australia, teams.costarica]}
	
		};

	var groups = {
		groupA: { groupName: 'Group A', teams: []},
		groupB: { groupName: 'Group B', teams: []},
		groupC: { groupName: 'Group C', teams: []},
		groupD: { groupName: 'Group D', teams: []}
	};

	var groupKeys = ['groupA', 'groupB', 'groupC','groupD'];
	var teamImages;
	function getRandomNumber(){
	 	var randomGroupNumber = Math.floor(Math.random()*4);
	 	return randomGroupNumber;
 	}

 	function assignToGroup(team, randomGroupPot, currentPot){
 		var randomNumber = getRandomNumber();
 		
 		var a = randomGroupPot.indexOf(randomNumber);
 		if(a == -1){

	 			var currentGroup = groups[groupKeys[randomNumber]].teams;
	 			currentGroup.push(team);
	 			randomGroupPot.push(randomNumber);
 	
 			//Push number in array to check which groups are filled
 			
 		} else if(a > -1){
 			assignToGroup(team, randomGroupPot, currentPot);
 		}
 		
 	}

 	function rankGroups(groups){
 		teamImages = [];
 		$.each(teams, function(i, team){
 			team.winner = "";
 		});

 		$.each(groups, function(index, group ) {
 			 if(Math.random() <= 0.1875){
				orderedGroup = group.teams.sort(function(a,b){ return 0.5-Math.random();});
				group.teams = orderedGroup;
				orderedGroup[0].winner = "winner";
				orderedGroup[1].winner = "winner";
				teamImages.push(orderedGroup[1].teamPhoto);
				teamImages.push(orderedGroup[0].teamPhoto);
			}else{
				orderedGroup = group.teams.sort(function(a,b){ return a.rank-b.rank });
				group.teams = orderedGroup;
				orderedGroup[0].winner = "winner";
				orderedGroup[1].winner = "winner";
				teamImages.push(orderedGroup[1].teamPhoto);
				teamImages.push(orderedGroup[0].teamPhoto);
			}
 		});
 		return groups;
 	}

	function generateGroups() {
		// Empty group team array
		$.each(groups, function(i, group) {
			group.teams = [];
		});

		$.each(pots, function(i, pot) {
			var randomGroupPot = []
			$.each(pot.teams, function(j, team) {
				
	 	 		assignToGroup(team, randomGroupPot, i);
		 	});	
			var $currentStatus = $(".currentStatus");
			$currentStatus.html("Seeding pot " + pot.potName);
		});
		return rankGroups(groups);
		// console.log(rankGroup(groups));
	}


	function calculateResults() {
			$.each(teams, function(index, val) {
			val.winSemiFinal = "";
			val.winQuarterFinal = "";
			val.winFinal = "";
			console.log(teams)
		});
		var quarterFinals = {
			q1: [groups.groupA.teams[0], groups.groupB.teams[1]], //winner group A against second group B
			q2: [groups.groupA.teams[1], groups.groupB.teams[0]], //winner group B against second group A
			q3: [groups.groupC.teams[0], groups.groupD.teams[1]], //winner group C against second group D
			q4: [groups.groupC.teams[1], groups.groupD.teams[0]], //winner group D against second group C
		};

		var semiFinals = {
			s1: [], //winner group A against second group B
			s2: [], //winner group B against second group A
		};

		var final = {
			f1: [], //winner group A against second group B
		};
		var winner;

		$.each(quarterFinals, function(index, teams) {
			var differenceRank = teams[0].rank - teams[1].rank;
			var chanceToWin = 50 + differenceRank*1.3; //Kans dat team 2 wint
			var randomNumber = Math.random()*100;
			if(randomNumber >= chanceToWin){
				if(index == "q1" || index == "q2"){
					semiFinals.s1.push(teams[0]);
					teams[0].winQuarterFinal = "winner";
				} else{
					semiFinals.s2.push(teams[0]);
					teams[0].winQuarterFinal = "winner";
				}
			}else{
				if(index == "q1" || index == "q2"){
					semiFinals.s1.push(teams[1]);
					teams[1].winQuarterFinal = "winner";
				} else{
					semiFinals.s2.push(teams[1]);
					teams[1].winQuarterFinal = "winner";
				}
			}
		});

		$.each(semiFinals, function(index, semiFinal) {
			var differenceRank = semiFinal[0].rank - semiFinal[1].rank;
			var chanceToWin = 50 + differenceRank*1.3; //Kans dat team 2 wint

			var randomNumber = Math.random()*100;
			if(randomNumber >= chanceToWin){
				final.f1.push(semiFinal[0]);
				semiFinal[0].winSemiFinal = "winner";
			}else{
				final.f1.push(semiFinal[1]);
				semiFinal[1].winSemiFinal = "winner";
			}
		});

		var differenceRank = final.f1[0].rank - final.f1[1].rank;
		var chanceToWin = 50 + differenceRank*1.3; //Kans dat team 2 wint
		var randomNumber = Math.random()*100;
		if(randomNumber >= chanceToWin){
			winner = final.f1[0];
			final.f1[0].winFinal = "winner";
		}else{
			winner = final.f1[1];
			final.f1[1].winFinal = "winner";
		}
		//console.log(winner.teamName, winner.rank);
		var fullKnockout = {
			"quarter" : quarterFinals,
			"semi" : semiFinals,
			"final" : final,
			"winner": winner
		}
		return fullKnockout;


	}



	function getGroups() {
		return calculateResults();
	}


	return {
		generateGroups: generateGroups,
		getGroups: getGroups
	}

});
