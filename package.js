Package.describe({
  name: 'gravitum:bootstrap-modal-helper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds  block helper for quick creation of bootstrap modals',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/gravitum/meteor-bootstrap-modal-helper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Package.onUse(function(api) {
  api.use('templating');
  api.versionsFrom('METEOR@1.0');
  api.addFiles(['helper.html','helper.js'],'client');
});



Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('gravitum:bootstrap-modal-helper');
  api.addFiles('helper.js');
});
