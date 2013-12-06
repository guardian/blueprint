define([
  // Libraries
  'require',
  'jquery',
  'handlebars',

  // Local files
  'views/drawPicker',
  'views/knockoutStage',
  'config',
  'data/sample',

  // Load text files (HTML, Handlebars, CSV, SVG)
  'templates/html_layout',
  'templates/handlebars_example',
  'templates/knockoutLayout',
  'templates/topbar'
], function(
  require,
  $,
  handlebars,
  drawPicker,
  knockoutStageView,
  Config,
  Data,
  HTMLTemplate,
  HandleBarsExample,
  knockoutLayout,
  topBarTemplate
){
  var Handlebars = handlebars.default;
  var template = Handlebars.compile(HTMLTemplate);
  var topBarTemplateHB = Handlebars.compile(topBarTemplate);
  var $drawPickerElm;
  var $el;
  var $headerElm;
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
    $reDrawBtnEnd.on('click', Data.generateNewSeed);
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

    knockoutStageView.updateSocialLinks()
  }


  function scrollToGroupStage(){
    winnersVisible = false;
    $('body,html').animate({
        scrollTop: $(".groupStageWrapper").offset().top +20
      }, 1000);
  }


  function startDrawAnimation(speed) {
    function fadeInTeam(i, y) {
      setTimeout(function () {
        var x = i +1;
        $('.group:eq(' + y +')').find('.teams ul li.unranked .teamInfo .teamPot:contains("Pot ' + x + '")').closest('li').css('opacity','1');
        y++;
        if (y < 8) {            //  if the counter < 10, call the loop function
          fadeInTeam(i, y);             //  ..  again which will trigger another
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
    $headerElm = $(template({ img_path: Config.basePath + 'imgs/' }));

    var $drawBtn = $headerElm.find('.newDrawBtn');

    $drawBtn.on('click', startDraw);



    function startDraw(event) {
        if (event) {
            Data.generateNewSeed();
        }

        doDrawThing();
        scrollToGroupStage();
        startDrawAnimation(130);
    }

    $el.append($headerElm);

    $topBar = $(topBarTemplateHB({ img_path: Config.basePath + 'imgs/' }));
    var oldScroll = 0;
    var $reDrawBtn = $topBar.find('.reDrawBtn');
    var $body = $('body');
    $reDrawBtn.on('click', Data.generateNewSeed);
    $reDrawBtn.on('click', reDraw);
    $reDrawBtn.on('click', doDrawThing);
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
      var moreInformationOffset = $('.moreInformation').offset().top;

      if(newScroll >= moreInformationOffset && winnersVisible != undefined){
          $topBar.css('visibility', 'visible');
      }
      if(newScroll <= moreInformationOffset && oldScroll >moreInformationOffset){
        $topBar.css('visibility', 'hidden');
      }
      oldScroll = newScroll;
    });

      // Check if URL has seed and show result if it does.
      if (Data.getURLSeed()) {
          startDraw();
      }
  }



  return {
    init: init
  };

});

