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

 		//Make sure Brazil is always in group A
 		if(team.teamName == "Brazil"){
 			var currentGroup = groups[groupKeys[0]].teams;
 			currentGroup.push(team);
 			randomGroupPot.push(0);
 		}else{
 		if(a == -1){
	 			var currentGroup = groups[groupKeys[randomNumber]].teams;
	 			currentGroup.push(team);
	 			randomGroupPot.push(randomNumber);
 	
 			//Push number in array to check which groups are filled
 			
 		} else if(a > -1){
 			assignToGroup(team, randomGroupPot, currentPot);
 		}
 	}	
 		
 	}

 	function rankGroups(groups){
 		//Clear winners for new draw
 		$.each(teams, function(i, team){
 			team.winner = "";
 			team.groupStatus = "";
 			team.quarterFinalStatus = "";
 			team.semiFinalStatus = "";
 		});

 		$.each(groups, function(index, group ) {
 			 if(Math.random() <= 0.1875){
				orderedGroup = group.teams.sort(function(a,b){ return 0.5-Math.random();});
				group.teams = orderedGroup;
				orderedGroup[0].winner = "winner";
				orderedGroup[0].groupStatus = "Winner of " + group.groupName;
				orderedGroup[1].winner = "winner";
				orderedGroup[1].groupStatus = "Second of " + group.groupName;
			}else{
				orderedGroup = group.teams.sort(function(a,b){ return a.rank-b.rank });
				group.teams = orderedGroup;
				orderedGroup[0].winner = "winner";
				orderedGroup[0].groupStatus = "Winner of " + group.groupName;
				orderedGroup[1].winner = "winner";
				orderedGroup[1].groupStatus = "Second of " + group.groupName;
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
		
	}


	function calculateGroupstage() {
		$.each(teams, function(index, val) {
			val.winSemiFinal = "";
			val.winQuarterFinal = "";
			val.winFinal = "";
		});
		var quarterFinals = {
			q1: {name: "Quarter Final 1", teams: [groups.groupA.teams[0], groups.groupB.teams[1]]}, //winner group A against second group B
			q2: {name: "Quarter Final 2", teams: [groups.groupA.teams[1], groups.groupB.teams[0]]}, //winner group B against second group A
			q3: {name: "Quarter Final 3", teams: [groups.groupC.teams[0], groups.groupD.teams[1]]}, //winner group C against second group D
			q4: {name: "Quarter Final 4", teams: [groups.groupC.teams[1], groups.groupD.teams[0]]} //winner group D against second group C
		};

		var semiFinals = {
			s1: {name: "Semi Final 1", teams: []}, //winner q1 against winner q2
			s2: {name: "Semi Final 2", teams: []} //winner q3 against winner q4
		};

		var final = {
			f1: [], //winner s1 against winner s2
		};
		var winner;

		//Deciding who goes to semifinals
		$.each(quarterFinals, function(index, quarterFinal) {
			var differenceRank = quarterFinal.teams[0].rank - quarterFinal.teams[1].rank;
			var chanceToWin;
			
			if(differenceRank < -40){
				chanceToWin = 14;
			}else if(differenceRank >= -40 && differenceRank < -20){
				chanceToWin = 25;
			}else if(differenceRank >= -20 && differenceRank <= 0){
				chanceToWin = 37;
			}else if(differenceRank > 0 && differenceRank <= 20){
				chanceToWin = 63;
			}else if(differenceRank > 20 && differenceRank <= 40){
				chanceToWin = 75;
			}else if(differenceRank > 40){
				chanceToWin = 86;
			}
	
			//var chanceToWin = 50 + differenceRank*1.3; //Chance that team 2 wins
			
			var randomNumber = Math.random()*100;
			//Team 2 loses, team 1 wins and will be pushed in semifinals
			if(randomNumber >= chanceToWin){
				//Winners of q1 and q2 will go to s1
				if(index == "q1" || index == "q2"){
					semiFinals.s1.teams.push(quarterFinal.teams[0]);
					quarterFinal.teams[0].winQuarterFinal = "winner";
					quarterFinal.teams[0].quarterFinalStatus = "Winner of " + quarterFinal.name;
				} else{
					semiFinals.s2.teams.push(quarterFinal.teams[0]);
					quarterFinal.teams[0].winQuarterFinal = "winner";
					quarterFinal.teams[0].quarterFinalStatus = "Winner of " + quarterFinal.name;
				}
			}else{
				if(index == "q1" || index == "q2"){
					semiFinals.s1.teams.push(quarterFinal.teams[1]);
					quarterFinal.teams[1].winQuarterFinal = "winner";
					quarterFinal.teams[1].quarterFinalStatus = "Winner of " + quarterFinal.name;
				} else{
					semiFinals.s2.teams.push(quarterFinal.teams[1]);
					quarterFinal.teams[1].winQuarterFinal = "winner";
					quarterFinal.teams[1].quarterFinalStatus = "Winner of " + quarterFinal.name;
				}
			}
		});

		//Deciding who goest to final
		$.each(semiFinals, function(index, semiFinal) {
			var differenceRank = semiFinal.teams[0].rank - semiFinal.teams[1].rank;
			var chanceToWin;
			
			if(differenceRank < -40){
				chanceToWin = 14;
			}else if(differenceRank >= -40 && differenceRank < -20){
				chanceToWin = 25;
			}else if(differenceRank >= -20 && differenceRank <= 0){
				chanceToWin = 37;
			}else if(differenceRank > 0 && differenceRank <= 20){
				chanceToWin = 63;
			}else if(differenceRank > 20 && differenceRank <= 40){
				chanceToWin = 75;
			}else if(differenceRank > 40){
				chanceToWin = 86;
			}
			var randomNumber = Math.random()*100;

			if(randomNumber >= chanceToWin){
				final.f1.push(semiFinal.teams[0]);
				semiFinal.teams[0].winSemiFinal = "winner";
				semiFinal.teams[0].semiFinalStatus = "Winner of " + semiFinal.name;
			}else{
				final.f1.push(semiFinal.teams[1]);
				semiFinal.teams[1].winSemiFinal = "winner";
				semiFinal.teams[1].semiFinalStatus = "Winner of " + semiFinal.name;
			}
		});

		//Deciding who wins the final
		var differenceRank = final.f1[0].rank - final.f1[1].rank;
		var chanceToWin;
			
			if(differenceRank < -40){
				chanceToWin = 14;
			}else if(differenceRank >= -40 && differenceRank < -20){
				chanceToWin = 25;
			}else if(differenceRank >= -20 && differenceRank <= 0){
				chanceToWin = 37;
			}else if(differenceRank > 0 && differenceRank <= 20){
				chanceToWin = 63;
			}else if(differenceRank > 20 && differenceRank <= 40){
				chanceToWin = 75;
			}else if(differenceRank > 40){
				chanceToWin = 86;
			}
		var randomNumber = Math.random()*100;
		if(randomNumber >= chanceToWin){
			winner = final.f1[0];
			final.f1[0].winFinal = "winner";
		}else{
			winner = final.f1[1];
			final.f1[1].winFinal = "winner";
		}

		//Put all the data into one object
		var fullKnockout = {
			"quarter" : quarterFinals,
			"semi" : semiFinals,
			"final" : final,
			"winner": winner
		}
		return fullKnockout;


	}



	function getGroups() {
		return calculateGroupstage();
	}


	return {
		generateGroups: generateGroups,
		getGroups: getGroups
	}

});
