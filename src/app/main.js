define([
  // Libraries
  'require',
  'jquery',
  'handlebars',

  // Local files
  'views/drawPicker',
  'config',

  // Load text files (HTML, Handlebars, CSV, SVG)
  'text!templates/html_layout.hbs',
  'text!templates/handlebars_example.hbs',
  'text!templates/knockoutLayout.hbs',
  'text!templates/topbar.html'
], function(
  require,
  $,
  handlebars,
  drawPicker,
  Config,
  HTMLTemplate,
  HandleBarsExample,
  knockoutLayout,
  topBarTemplate
){
  var Handlebars = handlebars.default;
  var template = Handlebars.compile(HTMLTemplate);
  var $drawPickerElm;
  var $el;
  var $headerElm;
  var $showWinnersBtn;

  function reDraw() {
    $('.group .teams ul li').css("opacity","1");
    $('.images p').remove();
    $('.images img').css("opacity", "1");
    $('.currentStatus').css("display", "none");
    $('.knockout_wrapper').css("display", "block");
    $showWinnersBtn.remove();
    $('li.ranked').css('opacity','1');
    $('li.ranked').css('display','list-item');
    $('li.unranked').css('display','none');
    $('.teamInfo .winner').css('opacity',1);
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
    });
  }


  function scrollToGroupStage(){
    $('body,html').animate({
        scrollTop: $(".groupStageWrapper").offset().top +5
      }, 1000);
  }


  function startDrawAnimation() {
    function fadeInTeam(i, y) {
      setTimeout(function () {
        var x = i +1;
        $('.group:eq(' + y +')').find('.teams ul li.unranked .teamInfo .teamPot:contains("Pot ' + x + '")').closest('li').css('opacity','1');
        y++;
        if (y < 8) {            //  if the counter < 10, call the loop function
          fadeInTeam(i, y);             //  ..  again which will trigger another
        }
        console.log(i)
        if(x==4 && y ==7){

            //$('.currentStatus').fadeOut();
        }
      }, 150)
    }

    for (var i = 0; i < 5; i++) {
      (function(i){
        window.setTimeout(function(){
          fadeInTeam(i, 0);
          var allPots = ["Pot 1:</strong> Host (Brazil) and top 7 ranked teams", "Pot 2:</strong> Europe", "Pot 3:</strong> South-America and Africa", "Pot 4:</strong> Asian, North America and Australia", "finished"]
          $('.currentStatus p').html("<strong>Seeding " + allPots[i]);

        }, 1200*i);

      }(i));

    };
  }


  function init(el) {
    $el = $(el);

    $headerElm = $(template({ img_path: Config.basePath + 'imgs/' }));

    var $drawBtn = $headerElm.find('.newDrawBtn');
      $drawBtn.on('click', doDrawThing);
      $drawBtn.on('click', scrollToGroupStage);
      $drawBtn.on('click', startDrawAnimation);


    $el.append($headerElm);

    var $topBar = $(topBarTemplate);
    var oldScroll = 0;
    var $reDrawBtn = $topBar.find('.reDrawBtn');
    var $body = $('body');

    $reDrawBtn.on('click', doDrawThing);
    $reDrawBtn.on('click', reDraw);
    $el.append($topBar);

     $('.moreInformation').on('click', function(){
      $(this).find('p').toggleClass('invisible')
    });

    $(document).on("scroll",function(){
      var winnersVisible = $('.knockout_wrapper').css('display');






      var newScroll = $body.scrollTop();
      if(newScroll >= 750){
        if(winnersVisible == 'block'){
          console.log('hoi');
          $topBar.css('visibility', 'visible');
        }
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

