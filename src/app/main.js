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
  'text!templates/topbar.html'
], function(
  require,
  $,
  Handlebars,
  SampleData,
  drawPicker,
  HTMLTemplate,
  HandleBarsExample,
  topBarTemplate
){

  var $drawPickerElm;
  var $el;
  var status = "full";
  var z = 0;
  var y = 0;

  function doDrawThing() {

    if (!$drawPickerElm) {
      $drawPickerElm = drawPicker.render();
      $el.append($drawPickerElm);

    } else {
      drawPicker.render();
    }
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
        $('.group:eq(' + y +')').find('.teams ul li .teamInfo .teamPot:contains("Pot ' + x + '")').closest('li').css('opacity','1');
        y++;  
        if (y < 4) {            //  if the counter < 10, call the loop function
          fadeInTeam(i, y);             //  ..  again which will trigger another 
        } 
        if(i==3 && y ==3){
            $('.images').css("border", "none");
            $('.images img').css("opacity", "1");
            $('.images p').remove();
            $('.currentStatus').fadeOut();

          }
      }, 600) 
    }

    for (var i = 0; i < 4; i++) {
      (function(i){
        window.setTimeout(function(){
          fadeInTeam(i, 0);
          var allPots = ["Pot 1:</strong> Host (Brazil) and top 7 ranked teams", "Pot 2:</strong> Europe", "Pot 3:</strong> South-America and Africa", "Pot 4:</strong> Asian, North America and Australia"]
          $('.currentStatus p').html("<strong>Seeding " + allPots[i]);
          
        }, 2400*i);
        
      }(i));  

    };
  }


  function init(el) {
  
    $el = $(el);
    // Here's where you add your code

    // Modifying the DOM directly example
    var $headerElm = $(HTMLTemplate);
    
    // Find and store store btn
    var $drawBtn = $headerElm.find('.newDrawBtn');
      
      $drawBtn.on('click', doDrawThing);
      $drawBtn.on('click', scrollToGroupStage);
      $drawBtn.on('click', startDrawAnimation);


    $el.append($headerElm);

    
    var $topBar = $(topBarTemplate);
    var oldScroll = 0;
    var $reDrawBtn = $topBar.find('.reDrawBtn');
    
    $reDrawBtn.on('click', doDrawThing);
    $reDrawBtn.on('click', function(){
      $('.group .teams ul li').css("opacity","1");
      $('.images p').remove();
      $('.images img').css("opacity", "1");
      $('.currentStatus').css("display", "none");
    });
    
    $el.append($topBar);
    
    

    $(document).on("scroll",function(){
      var newScroll = $('body').scrollTop();
      if(newScroll >= 750 && oldScroll <750){ 
        $topBar.css('visibility', 'visible');
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

