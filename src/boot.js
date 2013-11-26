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


        var isProd = /gucode\.gnl|gu\.com|theguardian\.com|guardian\.co\.uk/.test(document.location.host);
        var localPath = 'app/';
        var remotePath = 'http://s3.amazonaws.com/gdn-cdn/next-gen/sport/ng-interactive/2013/nov/20/1/app/';

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