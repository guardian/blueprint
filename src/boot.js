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


        var isProd = /gucode\.gnl|gu\.com|guprod\.gnl|theguardian\.com|guardian\.co\.uk|amazonaws\.com/.test(document.location.host);
        var localPath = 'app/';
        var remotePath = 'http://interactive.guim.co.uk/next-gen/football/ng-interactive/2013/dec/world-cup-draw-2014-create-your-own-draw-interactive/app/';

        var Config =  {
            basePath: (isProd) ?  remotePath : localPath
        };

        // FIXME: Hack baseurl into global as we don't know where the config.js is at this point.
        document.GI = document.GI || Config;

      // Information about Require config: http://requirejs.org/docs/api.html#config-paths
      var cfg = {
        context: 'interactive',
        baseUrl: Config.basePath,
        paths: {
          'jquery': 'libs/jquery-1.10.2.min',
          'handlebars': 'libs/handlebars.amd',
          'text': 'libs/curl/text',
          'require': '../require',
          'seedrandom': 'libs/seedrandom'
        },
        shim: {
          Handlebars: {
            exports: 'Handlebars'
          },
          seedrandom: { exports: 'seedrandom'}
        }
      };


        if ( typeof require() === 'function' ) {
            // Change requireJS text plugin path
            cfg.paths.text = 'libs/requirejs/text';

            var req2 = require.config(cfg);

            req2(['main'], function(Main) {
                addCSS();
                Main.init(el);
            });

        } else {
            // curl, i.e. next-gen
            require(cfg, ['main']).then(function(Main) {
              el.classList.add('gu-interactive');
              addCSS();
              Main.init(el);
            });
        }

      function addCSS() {
        var linkElm2 = document.createElement('link');
        linkElm2.setAttribute('rel', 'stylesheet');
        linkElm2.setAttribute('type', 'text/css');
        linkElm2.setAttribute('href', Config.basePath + 'css/offline/fonts.css');
        document.getElementsByTagName('head')[0].appendChild(linkElm2);

        var linkElm = document.createElement('link');
        linkElm.setAttribute('rel', 'stylesheet');
        linkElm.setAttribute('type', 'text/css');
        linkElm.setAttribute('href', Config.basePath + 'css/styles.css');
        document.getElementsByTagName('head')[0].appendChild(linkElm);


      }

    }
  }
});