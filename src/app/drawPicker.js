define(['jquery'], function($) {

  function render() {
    $('body').prepend('<p>animation thing</p>');
  }

  return {
    render: render
  }
});