// Example of storing data
define(['jquery', 'seedrandom'], function($) {
	var teams = {
		holland: {teamName: 'Holland',  rank: 6, showRank: 8, cont: 'Europe', flagImage: 'NLD.jpg', pot:"4", teamPhoto:"holland.jpg", winning: "" },
    	spain: { teamName: 'Spain', rank: 1, showRank: 1, cont: 'Europe', flagImage: 'ESP.jpg', pot:"1", teamPhoto:"spain.jpg", winning: "" },
    	italy: {teamName: 'Italy',  rank: 5, showRank: 9, cont: 'Europe', flagImage: 'ITA.jpg', pot:"4", teamPhoto:"italy.jpg", winning: "" },
    	ivorycoast: { teamName: "Cote d'Ivoire", rank: 22, showRank: 17, cont: 'Africa', flagImage: 'CIV.jpg', pot:"2", teamPhoto:"ivorycoast.jpg", winning: "" },
    	usa: {teamName: 'USA',  rank: 15, cont: 'N America',showRank: 13, flagImage: 'USA.jpg', pot:"3", teamPhoto:"usa.jpg", winning: "" },
    	argentina: { teamName: 'Argentina', rank: 3, showRank: 3, cont: 'S America', flagImage: 'ARG.jpg', pot:"1", teamPhoto:"argentina.jpg", winning: "" },
    	brazil: {teamName: 'Brazil',  rank: 2, showRank: 11, cont: 'S America', flagImage: 'BRA.jpg', pot:"1", teamPhoto:"brazil.jpg", winning: "" },
    	japan: { teamName: 'Japan', rank: 17,showRank: 44, cont: 'Asia', flagImage: 'JPN.jpg', pot:"3", teamPhoto:"japan.jpg", winning: "" },
    	germany: {teamName: 'Germany',  rank: 4,showRank: 2, cont: 'Europe', flagImage: 'DEU.jpg', pot:"1", teamPhoto:"germany.jpg", winning: "" },
    	england: { teamName: 'England', rank: 13, showRank: 10, cont: 'Europe', flagImage: 'ENG.jpg', pot:"4", teamPhoto:"england.jpg", winning: "" },
    	russia: {teamName: 'Russia',  rank: 16, showRank: 19, cont: 'Europe', flagImage: 'RUS.jpg', pot:"4", teamPhoto:"russia.jpg", winning: "" },
    	ecuador: { teamName: 'Ecuador', rank: 24, showRank: 22, cont: 'S America', flagImage: 'ECU.jpg', pot:"2", teamPhoto:"ecuador.jpg", winning: "" },
    	australia: {teamName: 'Australia',  rank: 27, showRank: 57, cont: 'Oceania', flagImage: 'AUS.jpg', pot:"3", teamPhoto:"australia.jpg", winning: "" },
    	chile: { teamName: 'Chile', rank: 12, showRank: 12, cont: 'S America', flagImage: 'CHL.jpg', pot:"2", teamPhoto:"chile.jpg", winning: "" },
    	ghana: {teamName: 'Ghana',  rank: 21, showRank: 23, cont: 'Africa', flagImage: 'GHA.jpg', pot:"2", teamPhoto:"ghana.jpg", winning: "" },
    	costarica: { teamName: 'Costa Rica', rank: 29, showRank: 31, cont: 'N America', flagImage: 'CRI.jpg', pot:"3", teamPhoto:"costarica.jpg", winning: "" },
    	algeria: {teamName: 'Algeria', rank: 32, showRank: 32, cont: 'Africa', flagImage: 'DZA.jpg', pot:"2", teamPhoto:"algeria.jpg", winning: "" },
    	cameroon: { teamName: 'Cameroon', rank: 25, showRank: 59, cont: 'Africa', flagImage: 'CMR.jpg', pot:"2", teamPhoto:"cameroon.jpg", winning: "" },
    	nigeria: {teamName: 'Nigeria',  rank: 20, showRank: 33, cont: 'Africa', flagImage: 'NGA.jpg', pot:"2", teamPhoto:"nigeria.jpg", winning: "" },
    	colombia: { teamName: "Colombia", rank: 8, showRank: 4, cont: 'S America', flagImage: 'COL.jpg', pot:"1", teamPhoto:"colombia.jpg", winning: "" },
    	belgium: {teamName: 'Belgium',  rank: 11, showRank: 5, cont: 'Europe', flagImage: 'BEL.jpg', pot:"1", teamPhoto:"belgium.jpg", winning: "" },
    	uruguay: { teamName: 'Uruguay', rank: 9, showRank: 6, cont: 'S America', flagImage: 'URY.jpg', pot:"1", teamPhoto:"uruguay.jpg", winning: "" },
    	switzerland: {teamName: 'Switzerland',  rank: 18, showRank: 7, cont: 'Europe', flagImage: 'CHE.jpg', pot:"1", teamPhoto:"switzerland.jpg", winning: "" },
    	portugal: { teamName: 'Portugal', rank: 7, showRank: 14, cont: 'Europe', flagImage: 'PRT.jpg', pot:"4", teamPhoto:"portugal.jpg", winning: "" },
    	greece: {teamName: 'Greece',  rank: 26, showRank: 15, cont: 'Europe', flagImage: 'GRC.jpg', pot:"4", teamPhoto:"greece.jpg", winning: "" },
    	bosniaherzegovina: { teamName: 'Bosnia-Herzegovina', rank: 19, showRank: 16, cont: 'Europe', flagImage: 'BIH.jpg', pot:"4", teamPhoto:"bosnia.jpg", winning: "" },
    	croatia: {teamName: 'Croatia',  rank: 14, showRank: 18, cont: 'Europe', flagImage: 'HRV.jpg', pot:"4", teamPhoto:"croatia.jpg", winning: "" },
    	france: { teamName: 'France', rank: 10, showRank: 21, cont: 'Europe', flagImage: 'FRA.jpg', pot:"4", teamPhoto:"france.jpg", winning: "" },
    	iran: {teamName: 'Iran',  rank: 30, showRank: 49, cont: 'Asia', flagImage: 'IRN.jpg', pot:"3", teamPhoto:"iran.jpg", winning: "" },
    	korearepublic: { teamName: 'Korea Republic', rank: 28, showRank: 56, cont: 'Asia', flagImage: 'KOR.jpg', pot:"3", teamPhoto:"southkorea.jpg", winning: "" },
    	mexico: {teamName: 'Mexico',  rank: 23, showRank: 24, cont: 'N America', flagImage: 'MEX.jpg', pot:"3", teamPhoto:"mexico.jpg", winning: "" },
    	honduras: { teamName: 'Honduras', rank: 31, showRank: 34, cont: 'N America', flagImage: 'HND.jpg', pot:"3", teamPhoto:"honduras.jpg", winning: "" }

	};

    var pots = {
		potA : { potName: "1", teams: [teams.brazil, teams.spain, teams.germany, teams.argentina,  teams.colombia, teams.belgium, teams.uruguay, teams.switzerland]},
		potB : { potName: "2", teams: [teams.chile, teams.ecuador, teams.ivorycoast, teams.ghana, teams.algeria, teams.nigeria, teams.cameroon]},
		potC : { potName: "3", teams: [teams.japan, teams.iran, teams.korearepublic, teams.australia, teams.usa, teams.mexico, teams.costarica, teams.honduras]},
		potD : { potName: "4", teams: [teams.holland, teams.italy, teams.england, teams.portugal, teams.greece, teams.bosniaherzegovina, teams.croatia, teams.russia, teams.france]}
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

	//get random country in pot 2
	//select random country from pot4
	//place country in pot 2
	//delete from pot 4
	//change "pot property" to 2
	//add property "screwedeuropeancountry"

	function assignToPot2(){
		pots = {
			potA : { potName: "1", teams: [teams.brazil, teams.spain, teams.germany, teams.argentina,  teams.colombia, teams.belgium, teams.uruguay, teams.switzerland]},
			potB : { potName: "2", teams: [teams.chile, teams.ecuador, teams.ivorycoast, teams.ghana, teams.algeria, teams.nigeria, teams.cameroon]},
			potC : { potName: "3", teams: [teams.japan, teams.iran, teams.korearepublic, teams.australia, teams.usa, teams.mexico, teams.costarica, teams.honduras]},
			potD : { potName: "4", teams: [teams.holland, teams.italy, teams.england, teams.portugal, teams.greece, teams.bosniaherzegovina, teams.croatia, teams.russia, teams.france]}
    	};
    	//reset potNumbers and screwedStatus
    	$.each(pots.potD.teams, function(i,a){
    		a.pot = 4;
    		a.screwed = "";
    	});
		var potDArr = pots.potD.teams;
		var randomNumberPot4 = Math.floor(Math.random()*9);
		var screwedEuropeanCountry = potDArr[randomNumberPot4];

		screwedEuropeanCountry.pot = 2;
		screwedEuropeanCountry.screwed = "screwedEuropeanCountry";
		//add country to pot 2
		pots.potB.teams.unshift(screwedEuropeanCountry);

		//remove country from pot 4
		potDArr.splice(randomNumberPot4,1);
	}
	

 	function assignToGroup(team, randomGroupPot, currentPot){
 		var randomNumber = Math.floor(Math.random() * 8);
 		var a = randomGroupPot.indexOf(randomNumber);

 		//Make sure Brazil is always in group A
 		if(team.teamName == "Brazil"){
 			var currentGroup = groups[groupKeys[0]].teams;
 			currentGroup.push(team);
 			randomGroupPot.push(0);
            return;
 		}

        // Already used that pot, try again
        if (a > -1){
        	// console.log('Already used that group. Pick another.', randomNumber)
            return assignToGroup(team, randomGroupPot, currentPot);
        }

        var currentGroup = groups[groupKeys[randomNumber]].teams;


        // Only one continent allowed per group (except EU which is allowed two)
        var EUTeams = currentGroup.filter(function(groupTeam) {
            return groupTeam.cont === 'Europe';
        });

        //The clash only occurs when France is in a group that contains a EU country from pot 1. We need to prevent that.
        if (team.screwed === 'screwedEuropeanCountry' && EUTeams.length === 1) {
        	console.log('Already 2 EU teams. Pick again', EUTeams)
            return assignToGroup(team, randomGroupPot, currentPot);
        }

        // Only one continent allowed per group (except EU which is allowed two)
        var hasSameContinent = currentGroup.some(function(groupTeam) {
            if (groupTeam.cont === 'Europe')
                return false;
            return (groupTeam.cont === team.cont);
        });
        if (hasSameContinent) {
            // console.log('same continent. Pick again',team.teamName);
            return assignToGroup(team, randomGroupPot, currentPot);
        }

        if(a == -1){
            currentGroup.push(team);
            randomGroupPot.push(randomNumber);
            //Push number in array to check which groups are filled
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
				orderedGroup[1].groupStatus = "Runner-up " + group.groupName;
				group.teamsOrdered = orderedGroup;
			} else {
				var orderedGroup = group.teams.slice().sort(function(a,b){ return a.rank-b.rank });
				orderedGroup[0].winner = "winner";
				orderedGroup[0].groupStatus = "Winner of " + group.groupName;
				orderedGroup[1].winner = "winner";
				orderedGroup[1].groupStatus = "Runner-up " + group.groupName;
				group.teamsOrdered = orderedGroup;

			}
 		});

 		return groups;
 	}

    // Stackoverflow solution http://stackoverflow.com/a/901144
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // Thanks to Stackoverflow answer http://stackoverflow.com/a/1349426
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 6; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    function getURLSeed() {
        return getParameterByName('seed');
    }

    var seed = getURLSeed();

    function generateNewSeed() {
        seed = makeid();
    }

    function getSeed() {
        return seed;
    }

	function generateGroups() {
        Math.seedrandom(seed);
        assignToPot2();

		// Empty group team array
		$.each(groups, function(i, group) {
			group.teams = [];
		});
		console.log(pots);
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
		if(differenceRank < -20){
			return 14;
		}else if(differenceRank >= -20 && differenceRank < -15){
			return 20;
		}else if(differenceRank >= -15 && differenceRank <= -10){
			return 35;
		}else if(differenceRank >= -10 && differenceRank <= -5){
			return 40;
		}else if(differenceRank >= -5 && differenceRank <= 0){
			return 45;
		}

		else if(differenceRank > 0 && differenceRank <= 5){
			return 55;
		}else if(differenceRank > 5 && differenceRank <= 10){
			return 60;
		}else if(differenceRank > 10 && differenceRank <= 15){
			return 65;
		}else if(differenceRank > 15 && differenceRank <= 20){
			return 80;
		}else if(differenceRank > 20){
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
			q1: {name: "quarter-final 1", teams: []},
			q2: {name: "quarter-final 2", teams: []},
			q3: {name: "quarter-final 3", teams: []},
			q4: {name: "quarter-final 4", teams: []}
		};

		var semiFinals = {
			s1: {name: "semi-final 1", teams: []}, //winner q1 against winner q2
			s2: {name: "semi-final 2", teams: []} //winner q3 against winner q4
		};

		var final = {
			f1: [], //winner s1 against winner s2
		};
		var winner;


		$.each(roundOf16, function(index, round) {
			var differenceRank = round.teams[0].rank - round.teams[1].rank;

			var chanceToWin = calculateChanceToWin(differenceRank)
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
					round.teams[0].roundOf16Status = "Won " + round.name;
				} else if(index == "r5" || index == "r7"){
					quarterFinals.q3.teams.push(round.teams[0]);
					round.teams[0].winRoundOf16 = "winner";
					round.teams[0].roundOf16Status = "Won " + round.name;
				} else if(index == "r6" || index == "r8"){
					quarterFinals.q4.teams.push(round.teams[0]);
					round.teams[0].winRoundOf16 = "winner";
					round.teams[0].roundOf16Status = "Won " + round.name;
				}
			}else{
				if(index == "r1" || index == "r3"){
					quarterFinals.q1.teams.push(round.teams[1]);
					round.teams[1].winRoundOf16 = "winner";
					round.teams[1].roundOf16Status = "Won " + round.name;
				} else if(index == "r2" || index == "r4"){
					quarterFinals.q2.teams.push(round.teams[1]);
					round.teams[1].winRoundOf16 = "winner";
					round.teams[1].roundOf16Status = "Won " + round.name;
				} else if(index == "r5" || index == "r7"){
					quarterFinals.q3.teams.push(round.teams[1]);
					round.teams[1].winRoundOf16 = "winner";
					round.teams[1].roundOf16Status = "Won " + round.name;
				} else if(index == "r6" || index == "r8"){
					quarterFinals.q4.teams.push(round.teams[1]);
					round.teams[1].winRoundOf16 = "winner";
					round.teams[1].roundOf16Status = "Won " + round.name;
				}
			}
		});

		//Deciding who goes to semifinals
		$.each(quarterFinals, function(index, quarterFinal) {
			var differenceRank = quarterFinal.teams[0].rank - quarterFinal.teams[1].rank;

			var chanceToWin = calculateChanceToWin(differenceRank)

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
		getGroups: getGroups,
        getURLSeed: getURLSeed,
        generateNewSeed: generateNewSeed,
        getSeed: getSeed
	}

});
