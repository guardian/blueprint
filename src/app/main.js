define([
  // Libraries
  'require',
  'jquery',
  'Handlebars',

  // Local files
  'data/sample',
  'views/drawPicker',

  // Load text files (HTML, Handlebars, CSV, SVG)
  'text!templates/html_layout.html',
  'text!templates/handlebars_example.hbs',
  'text!templates/knockoutLayout.hbs',
  'text!templates/topbar.html'
], function(
  require,
  $,
  Handlebars,
  SampleData,
  drawPicker,
  HTMLTemplate,
  HandleBarsExample,
  knockoutLayout,
  topBarTemplate
){

  var $drawPickerElm;
  var $el;
  var $headerElm;
  var $reDrawBtnEnd;
  var status = "full";
  var z = 0;
  var y = 0;
  var $showWinnersBtn;
  var winnersVisible = false;

  function reDraw() {
    
    
    if(winnersVisible == false){
     
      $('.images img').css("opacity", "1");
      $('.currentStatus').css("display", "none");
    }else{
      $('.images img').css("opacity", "1");
      $('.currentStatus').css("display", "none");
      $('.knockout_wrapper').css("display", "block");
      $showWinnersBtn.css("display", "none");
      $('li.ranked').css('opacity','1');
      $('li.ranked').css('display','list-item');
      $('li.unranked').css('display','none');
      $('.teamInfo .winner').css('opacity',1);
      // var knockoutStageOffset = $('.knockout_wrapper').offset().top;
      // var windowHeight = $(window).height();
      // var currentScroll = $(window).scrollTop();

      // if(currentScroll < knockoutStageOffset - windowHeight){
      //   $('.knockout_wrapper').css("display", "none");
      //   $showWinnersBtn.css("display", "block");
      //   winnersVisible = false;
      // }
    }

    

    
   }

  function doDrawThing() {
    if (!$drawPickerElm) {
      $drawPickerElm = drawPicker.render();
      $el.append($drawPickerElm);

    } else {
      drawPicker.render();
    }

    var $reDrawBtnEnd = $el.find('.share .reDrawBtn');
    $reDrawBtnEnd.on('click', doDrawThing);
    $reDrawBtnEnd.on('click', reDraw);

    $showWinnersBtn = $el.find('.showWinners');
    var $knockoutWrapper = $el.find('.knockout_wrapper');
  
    $showWinnersBtn.on('click', function(){
      $knockoutWrapper.css('display','block');
      $('.images').css("border", "none");
      $('.images img').css("opacity", "1");
      $('.images p').remove();
      $('.teamInfo .winner').css('opacity',1);
      $('li.ranked').css('display','list-item');
      $('li.unranked').css('display','none');
      $('li.ranked').css('opacity','1');
      $showWinnersBtn.remove();
      winnersVisible = true;
    });
  }


  function scrollToGroupStage(){
    winnersVisible = false;
    $('body,html').animate({
        scrollTop: $(".groupStageWrapper").offset().top +20
      }, 1000);
  }
  

  function startDrawAnimation(speed2) {
    var speed = speed2;
    function fadeInTeam(i, y) {
      console.log(y);
      setTimeout(function () {
        var x = i +1;
        $('.group:eq(' + y +')').find('.teams ul li.unranked .teamInfo .teamPot:contains("Pot ' + x + '")').closest('li').css('opacity','1');
        y++;  
        if (y < 8) {            //  if the counter < 10, call the loop function
          fadeInTeam(i, y);             //  ..  again which will trigger another 
        }  
        if(x==4 && y ==7){
 
            //$('.currentStatus').fadeOut();
        }
      }, speed) 
    }

    for (var i = 0; i < 5; i++) {
      (function(i){
        window.setTimeout(function(){
          fadeInTeam(i, 0);
          var allPots = ["Pot 1:</strong> Host (Brazil) and top 7 ranked teams", "Pot 2:</strong> Europe", "Pot 3:</strong> South-America and Africa", "Pot 4:</strong> Asian, North America and Australia", "finished"]
          $('.currentStatus p').html("<strong>Seeding " + allPots[i]);
          if(i===4){
          $('.currentStatus').css('display','none');
        }
          
        }, (speed*8)*i);
        
      }(i));  

    };
  }
    

  function init(el) {
    $el = $(el);
    
    $headerElm = $(HTMLTemplate);

    var $drawBtn = $headerElm.find('.newDrawBtn');
    $drawBtn.on('click', doDrawThing);
    $drawBtn.on('click', scrollToGroupStage);
    $drawBtn.on('click', function(){
      startDrawAnimation(150);
    });


    $el.append($headerElm);

    var $topBar = $(topBarTemplate);
    var oldScroll = 0;
    var $reDrawBtn = $topBar.find('.reDrawBtn');
    var $body = $('body');

    $reDrawBtn.on('click', doDrawThing);
    $reDrawBtn.on('click', reDraw);
    $reDrawBtn.on('click', function(){
      startDrawAnimation(10);
    });
    $el.append($topBar);

     $('.moreInformation').on('click', function(){
      $(this).find('p').toggleClass('invisible');
    });

    $(document).on("scroll",function(){
      
      var winnersVisible = $('.knockout_wrapper').css('display');
    
      

      
      
      var newScroll = $body.scrollTop();
      if(newScroll >= 750){ 
        // if(winnersVisible == 'block'){
          $topBar.css('visibility', 'visible');
        // }
      }
      if(newScroll <= 750 && oldScroll >750){
        $topBar.css('visibility', 'hidden');
      }
      oldScroll = newScroll; 
    });

  }



  return {
    init: init
  };

});

