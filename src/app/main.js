define([
  // Libraries
  'jquery',
  'Handlebars',

  // Local files
  'data/sample',
  'views/drawPicker',

  // Load text files (HTML, Handlebars, CSV, SVG)
  'text!templates/html_layout.html',
  'text!templates/handlebars_example.hbs'
], function(
  $,
  Handlebars,
  SampleData,
  drawPicker,
  HTMLTemplate,
  HandleBarsExample
){


  function init(el) {
    // Here's where you add your code

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

    // Modifying the DOM directly example
    var headerElm = $(HTMLTemplate);
    $(el).append(headerElm);
    $(el).css('border', '2px dashed pink');


    // Rendering Handlebars template
    var template = Handlebars.compile(HandleBarsExample);
    $(el).append(template(SampleData));

    // Render view module
    $(el).append(drawPicker.render());
  }



  return {
    init: init
  };

});

