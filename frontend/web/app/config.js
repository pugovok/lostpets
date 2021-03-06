requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'app',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    shim: {
        'jquery.fancybox':  ['jquery']
    },
    paths: {
        backbone: '../vendor/backbone/backbone',
        underscore: '../vendor/underscore/underscore-min',
        text: '../vendor/requirejs-text/text',
        handlebars: '../vendor/handlebars/handlebars',
        jquery: '../vendor/jQuery/dist/jquery.min',
        async: '../vendor/requirejs-plugins/src/async',
        'jquery.fancybox': '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack'
    }
});
require([

    "app",
    
    ], function(app) {
  

})