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

  function doDrawThing() {

    if (!$drawPickerElm) {
      $drawPickerElm = drawPicker.render();
      $el.append($drawPickerElm);

    } else {
      drawPicker.render();
    }
  }


  function init(el) {
    $el = $(el);
    // Here's where you add your code

    // Modifying the DOM directly example
    var $headerElm = $(HTMLTemplate);
    
    // Find and store store btn
    var $drawBtn = $headerElm.find('.newDrawBtn');
    $drawBtn.on('click', doDrawThing);

    $el.append($headerElm);

    
    
    var $topBar = $(topBarTemplate);
    var oldScroll = 0;
    var $reDrawBtn = $topBar.find('.reDrawBtn');
    $reDrawBtn.on('click', doDrawThing);
    
    $(document).on("scroll",function(){
      var newScroll = $('body').scrollTop();
      if(newScroll >= 550 && oldScroll <550){ 
        $el.append($topBar);
      }
      if(newScroll <= 550 && oldScroll > 550){
        $el.find($topBar).remove();
      }
      oldScroll = newScroll; 
    });
    
    
    

/*
    // Inline example
    $.each(SampleData.people, addPerson);
    function addPerson(index, person) {
      var newPerson = $('<div>').addClass('person');
      newPerson.text( person.name + ' is ' + person.age + ' years old.');
      newPerson.on('click', function() {
        $(this).toggleClass('active');
      });

      $(el).append(newPerson);
    }


    // Rendering Handlebars template
    var template = Handlebars.compile(HandleBarsExample);
    var templateConfig = {
      people: SampleData.people,
      img_path: require.toUrl('imgs/')
    };

    $(el).append(template(templateConfig));
    */

    
  }



  return {
    init: init
  };

});

