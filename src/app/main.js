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
  'text!templates/handlebars_example.hbs'
], function(
  require,
  $,
  Handlebars,
  SampleData,
  drawPicker,
  HTMLTemplate,
  HandleBarsExample
){



  function init(el) {
    // Here's where you add your code

    // Modifying the DOM directly example
    var headerElm = $(HTMLTemplate);
    $(el).append(headerElm);
    $(el).css('border', '2px dashed pink');


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

    // Render view module
    $(el).append(drawPicker.render());
  }



  return {
    init: init
  };

});

