blueprint
=========

A simplified interactive template for to simulate Guardian next-gen JS loading and layout.

# Starting
Either point your local web server at the `src` folder or if you have nodeJS and Grunt installed can do the following:

```shell
npm install
grunt
```


# Project structure
Most of the time you'll only need to work within the `src/app` folder. Create new views, templates and load them into
the `main.js`.

```
 - .gitIngore     (Version control ignore list)
 - Gruntfile.js   (NodeJS Grunt control file)
 - package.json   (NodeJS package config)
 - README.md      (this file)
 + src
    - boot.js     (Next-gen JS loader)
    - index.html  (Simulate next-gen layout and structure)
    - require.js  (AMD loader)
    - text.js     (requirejs plugin)
    + app
      - main.js   (The core JS file for the interactive)
      + css
      + data      (Store model data)
      + libs      (JavaScript libraries)
      + templates (HTML and handlebar templates)
      + views     (AMD views)
```

# Adding additional libraries
If you want to include additional libraries you first need to add their paths to `boot.js` file, then you can
reference them as a dependency in your module.

More information at: [http://requirejs.org/docs/api.html#config-paths]



