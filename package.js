Package.describe({
  name: 'superlumen:npm-slug',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Publish npm slug as the global `slug` on the server only',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/superlumen/meteor-npm-slug',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  slug: '0.9.1'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.export('slug');
  api.addFiles('slug.js', 'server');
});
