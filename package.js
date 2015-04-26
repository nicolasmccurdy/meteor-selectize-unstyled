Package.describe({
    name: "nicolasmccurdy:selectize-bootstrap-unstyled",
    summary: "Selectize is a hybrid of a textbox and <select> element used for tagging, contact lists, and more.",
    version: '0.0.1',
    git: 'https://github.com/nicolasmccurdy/meteor-selectize-unstyled.git'
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.use('jquery', 'client');

    api.addFiles([
        'selectize/dist/css/selectize.bootstrap3.css',
        'selectize/dist/js/standalone/selectize.js'
    ], ['client']);

});
