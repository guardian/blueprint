// Example of storing data
define(['jquery'], function($) {
	var teams = {
		holland: {teamName: 'Netherlands',  rank: 8, cont: 'Europe', flagImage: 'NLD.jpg', pot:"2", teamPhoto:"holland.jpg", winning: "" },
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
    	costarica: { teamName: 'Costa Rica', rank: 31, cont: 'North America', flagImage: 'CRI.jpg', pot:"4", teamPhoto:"costarica.jpg", winning: "" },
    	
    	algeria: {teamName: 'Algeria', rank: 32, cont: 'Africa', flagImage: 'DZA.jpg', pot:"3", teamPhoto:"holland.jpg", winning: "" },
    	cameroon: { teamName: 'Cameroon', rank: 59, cont: 'Africa', flagImage: 'CMR.jpg', pot:"3", teamPhoto:"spain.jpg", winning: "" },
    	nigeria: {teamName: 'Nigeria',  rank: 33, cont: 'Africa', flagImage: 'NGA.jpg', pot:"3", teamPhoto:"italy.jpg", winning: "" },
    	colombia: { teamName: "Colombia", rank: 4, cont: 'South America', flagImage: 'COL.jpg', pot:"1", teamPhoto:"ivorycoast.jpg", winning: "" },
    	belgium: {teamName: 'Belgium',  rank: 5, cont: 'Europe', flagImage: 'BEL.jpg', pot:"1", teamPhoto:"usa.jpg", winning: "" },
    	uruguay: { teamName: 'Uruguay', rank: 6, cont: 'South America', flagImage: 'URY.jpg', pot:"1", teamPhoto:"argentina.jpg", winning: "" },
    	switzerland: {teamName: 'Switzerland',  rank: 7, cont: 'Europe', flagImage: 'CHE.jpg', pot:"1", teamPhoto:"brazil.jpg", winning: "" },
    	portugal: { teamName: 'Portugal', rank: 14, cont: 'Europe', flagImage: 'PRT.jpg', pot:"2", teamPhoto:"japan.jpg", winning: "" },
    	greece: {teamName: 'Greece',  rank: 15, cont: 'Europe', flagImage: 'GRC.jpg', pot:"2", teamPhoto:"germany.jpg", winning: "" },
    	bosniaherzegovina: { teamName: 'BosniaHerzegovina', rank: 16, cont: 'Europe', flagImage: 'BIH.jpg', pot:"2", teamPhoto:"england.jpg", winning: "" },
    	croatia: {teamName: 'Croatia',  rank: 18, cont: 'Europe', flagImage: 'HRV.jpg', pot:"2", teamPhoto:"russia.jpg", winning: "" },
    	france: { teamName: 'France', rank: 21, cont: 'Europe', flagImage: 'FRA.jpg', pot:"3", teamPhoto:"ecuador.jpg", winning: "" },
    	iran: {teamName: 'Iran',  rank: 49, cont: 'Asia', flagImage: 'IRN.jpg', pot:"4", teamPhoto:"australia.jpg", winning: "" },
    	korearepublic: { teamName: 'Korea Republic', rank: 56, cont: 'Asia', flagImage: 'KOR.jpg', pot:"4", teamPhoto:"chile.jpg", winning: "" },
    	mexico: {teamName: 'Mexico',  rank: 24, cont: 'North America', flagImage: 'MEX.jpg', pot:"4", teamPhoto:"ghana.jpg", winning: "" },
    	honduras: { teamName: 'Honduras', rank: 34, cont: 'North America', flagImage: 'HND.jpg', pot:"4", teamPhoto:"costarica.jpg", winning: "" }

	};

	var pots = {
		potA : { potName: "A", teams: [teams.brazil, teams.spain, teams.germany, teams.argentina,  teams.colombia, teams.belgium, teams.uruguay, teams.switzerland]},
		potB : { potName: "B", teams: [teams.holland, teams.italy, teams.england, teams.portugal, teams.greece, teams.bosniaherzegovina, teams.croatia, teams.russia]},
		potC : { potName: "C", teams: [teams.france, teams.chile, teams.ecuador, teams.ivorycoast, teams.ghana, teams.algeria, teams.nigeria, teams.cameroon]},
		potD : { potName: "D", teams: [teams.japan, teams.iran, teams.korearepublic, teams.australia, teams.usa, teams.mexico, teams.costarica, teams.honduras]}
	
		};

	var groups = {
		groupA: { groupName: 'Group A', teams: []},
		groupB: { groupName: 'Group B', teams: []},
		groupC: { groupName: 'Group C', teams: []},
		groupD: { groupName: 'Group D', teams: []},
		groupE: { groupName: 'Group E', teams: []},
		groupF: { groupName: 'Group F', teams: []},
		groupG: { groupName: 'Group G', teams: []},
		groupH: { groupName: 'Group H', teams: []}
	};
	

	var groupKeys = ['groupA', 'groupB', 'groupC','groupD', 'groupE', 'groupF', 'groupG', 'groupH'];
	var teamImages;
	

	function getRandomNumber(){
	 	var randomGroupNumber = Math.floor(Math.random()*8);
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

 	function rankGroups(newGroups){
 		//Clear winners for new draw
 		$.each(teams, function(i, team){
 			team.winner = "";
 			team.groupStatus = "";
 			team.roundOf16Status = "";
 			team.quarterFinalStatus = "";
 			team.semiFinalStatus = "";
 		});
 
 		$.each(newGroups, function(index, group ) {
 			var randomUpset = Math.random();
 			 if(randomUpset <= 0.1875){
				var orderedGroup = group.teams.slice().sort(function(a,b){ return 0.5-Math.random();});
				orderedGroup[0].winner = "winner";
				orderedGroup[0].groupStatus = "Winner of " + group.groupName;
				orderedGroup[1].winner = "winner";
				orderedGroup[1].groupStatus = "Second of " + group.groupName;
				group.teamsOrdered = orderedGroup;
			}else{
				var orderedGroup = group.teams.slice().sort(function(a,b){ return a.rank-b.rank });
				orderedGroup[0].winner = "winner";
				orderedGroup[0].groupStatus = "Winner of " + group.groupName;
				orderedGroup[1].winner = "winner";
				orderedGroup[1].groupStatus = "Second of " + group.groupName;
				group.teamsOrdered = orderedGroup; 	
				
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
			var randomGroupPot = [];
			$.each(pot.teams, function(j, team) {
	 	 		assignToGroup(team, randomGroupPot, i);
		 	});	
		});

		
		//var orderedGroups = rankGroups(groups);
		var rankedGroups = rankGroups(groups);

		
		return rankedGroups;
	}


	function calculateChanceToWin(differenceRank){
		if(differenceRank < -40){
			return 14;
		}else if(differenceRank >= -40 && differenceRank < -20){
			return 25;
		}else if(differenceRank >= -20 && differenceRank <= 0){
			return 37;
		}else if(differenceRank > 0 && differenceRank <= 20){
			return 63;
		}else if(differenceRank > 20 && differenceRank <= 40){
			return 75;
		}else if(differenceRank > 40){
			return 86;
		}
	}

	function calculateGroupstage() {
		$.each(teams, function(index, val) {
			val.winRoundOf16 = "";
			val.winSemiFinal = "";
			val.winQuarterFinal = "";
			val.winFinal = "";
		});
		var roundOf16 = {
			r1: {name: "round of 16: match 1", teams: [groups.groupA.teamsOrdered[0], groups.groupB.teamsOrdered[1]]}, //winner group A against second group B
			r2: {name: "round of 16: match 2", teams: [groups.groupA.teamsOrdered[1], groups.groupB.teamsOrdered[0]]}, //winner group B against second group A
			r3: {name: "round of 16: match 3", teams: [groups.groupC.teamsOrdered[0], groups.groupD.teamsOrdered[1]]}, //winner group C against second group D
			r4: {name: "round of 16: match 4", teams: [groups.groupC.teamsOrdered[1], groups.groupD.teamsOrdered[0]]}, //winner group D against second group C
			r5: {name: "round of 16: match 5", teams: [groups.groupE.teamsOrdered[0], groups.groupF.teamsOrdered[1]]}, //winner group A against second group B
			r6: {name: "round of 16: match 6", teams: [groups.groupE.teamsOrdered[1], groups.groupF.teamsOrdered[0]]}, //winner group B against second group A
			r7: {name: "round of 16: match 7", teams: [groups.groupG.teamsOrdered[0], groups.groupH.teamsOrdered[1]]}, //winner group C against second group D
			r8: {name: "round of 16: match 8", teams: [groups.groupG.teamsOrdered[1], groups.groupH.teamsOrdered[0]]} //winner group D against second group C
		};

		var quarterFinals = {
			q1: {name: "Quarter Final 1", teams: []},
			q2: {name: "Quarter Final 2", teams: []},
			q3: {name: "Quarter Final 3", teams: []},
			q4: {name: "Quarter Final 4", teams: []}
		};

		var semiFinals = {
			s1: {name: "Semi Final 1", teams: []}, //winner q1 against winner q2
			s2: {name: "Semi Final 2", teams: []} //winner q3 against winner q4
		};

		var final = {
			f1: [], //winner s1 against winner s2
		};
		var winner;


		$.each(roundOf16, function(index, round) {
			var differenceRank = round.teams[0].rank - round.teams[1].rank;

			var chanceToWin = calculateChanceToWin(differenceRank)
			console.log(differenceRank,chanceToWin);
			//var chanceToWin = 50 + differenceRank*1.3; //Chance that team 2 wins
			
			var randomNumber = Math.random()*100;
			//Team 2 loses, team 1 wins and will be pushed in semifinals
			if(randomNumber >= chanceToWin){
				//Winners of q1 and q2 will go to s1
				if(index == "r1" || index == "r3"){
					quarterFinals.q1.teams.push(round.teams[0]);
					round.teams[0].winRoundOf16 = "winner";
					round.teams[0].roundOf16Status = "Won " + round.name;
				} else if(index == "r2" || index == "r4"){
					quarterFinals.q2.teams.push(round.teams[0]);
					round.teams[0].winRoundOf16 = "winner";
					round.teams[0].roundOf16Status = "Winner of " + round.name;
				} else if(index == "r5" || index == "r7"){
					quarterFinals.q3.teams.push(round.teams[0]);
					round.teams[0].winRoundOf16 = "winner";
					round.teams[0].roundOf16Status = "Winner of " + round.name;
				} else if(index == "r6" || index == "r8"){
					quarterFinals.q4.teams.push(round.teams[0]);
					round.teams[0].winRoundOf16 = "winner";
					round.teams[0].roundOf16Status = "Winner of " + round.name;
				}
			}else{
				if(index == "r1" || index == "r3"){
					quarterFinals.q1.teams.push(round.teams[1]);
					round.teams[1].winRoundOf16 = "winner";
					round.teams[1].roundOf16Status = "Winner of " + round.name;
				} else if(index == "r2" || index == "r4"){
					quarterFinals.q2.teams.push(round.teams[1]);
					round.teams[1].winRoundOf16 = "winner";
					round.teams[1].roundOf16Status = "Winner of " + round.name;
				} else if(index == "r5" || index == "r7"){
					quarterFinals.q3.teams.push(round.teams[1]);
					round.teams[1].winRoundOf16 = "winner";
					round.teams[1].roundOf16Status = "Winner of " + round.name;
				} else if(index == "r6" || index == "r8"){
					quarterFinals.q4.teams.push(round.teams[1]);
					round.teams[1].winRoundOf16 = "winner";
					round.teams[1].roundOf16Status = "Winner of " + round.name;
				}
			}
		});

		//Deciding who goes to semifinals
		$.each(quarterFinals, function(index, quarterFinal) {
			var differenceRank = quarterFinal.teams[0].rank - quarterFinal.teams[1].rank;

			var chanceToWin = calculateChanceToWin(differenceRank)
			console.log(differenceRank,chanceToWin);
			//var chanceToWin = 50 + differenceRank*1.3; //Chance that team 2 wins
			
			var randomNumber = Math.random()*100;
			//Team 2 loses, team 1 wins and will be pushed in semifinals
			if(randomNumber >= chanceToWin){
				//Winners of q1 and q2 will go to s1
				if(index == "q1" || index == "q3"){
					semiFinals.s1.teams.push(quarterFinal.teams[0]);
					quarterFinal.teams[0].winQuarterFinal = "winner";
					quarterFinal.teams[0].quarterFinalStatus = "Winner of " + quarterFinal.name;
				} else{
					semiFinals.s2.teams.push(quarterFinal.teams[0]);
					quarterFinal.teams[0].winQuarterFinal = "winner";
					quarterFinal.teams[0].quarterFinalStatus = "Winner of " + quarterFinal.name;
				}
			}else{
				if(index == "q1" || index == "q3"){
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
			var chanceToWin = calculateChanceToWin(differenceRank);
			
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
		var chanceToWin = calculateChanceToWin(differenceRank);
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
			"roundOf16" : roundOf16,
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
