define([
  // Local files
  'data/sample',

  // Load text files (HTML, CSV, SVG)
  'text!html/layout.html',

  // Load external files
  'js!libs/Tween.js',
  'js!http://code.jquery.com/jquery-1.10.2.min.js'
], function(Data, LayoutTemplate)
{


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

  }



  return {
    init: init
  };

});

