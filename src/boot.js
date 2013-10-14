define([], function() {
  return {
    /**
     *
     * @param el        : The Element of the interactive that is being progressively enhanced.
     * @param context   : The DOM context this module must work within.
     * @param config    : The configuration object for this page.
     *
     **/
    boot: function (el, context, config) {
      var cfg = {
        context: 'interactive',
        baseUrl: 'app/',
        paths: {
          'jquery': 'libs/jquery-1.10.2.min'
        }
      };

      curl(cfg, ['main']).then(function(Main) {
        addCSS();
        Main.init(el);
      });

      function addCSS() {
        var linkElm = document.createElement('link');
        linkElm.setAttribute('rel', 'stylesheet');
        linkElm.setAttribute('type', 'text/css');
        linkElm.setAttribute('href', 'app/css/styles.css');
        document.getElementsByTagName('head')[0].appendChild(linkElm);
      }

    }
  }
});