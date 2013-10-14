define([
  'jquery',
  // Local files
  'data/sample',
  'drawPicker',

  // Load text files (HTML, CSV, SVG)
  'text!html/layout.html',

  // Load external files
  'js!libs/Tween.js',

], function(
  $,
  Data,
  drawPicker,
  LayoutTemplate
){


  function init(el) {
    // You code goes here

    // Example
    function addPerson(index, person) {
      var newPerson = $('<div>').addClass('person');

      newPerson.text( person.name + ' is ' + person.age + ' years old.');

      newPerson.on('click', function() {
        $(this).toggleClass('active');
      });

      $(el).append(newPerson);
    }

    var headerElm = $(LayoutTemplate);
    $(el).append(headerElm);

    $.each(Data.people, addPerson);

    drawPicker.render();

  }



  return {
    init: init
  };

});

