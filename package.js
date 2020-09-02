Package.describe({
  name: 'pathable:accounts-mit',
  summary: 'Login service for Mit accounts',
  version: '1.0.0',
});

Package.onUse(api => {
  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('mit-oauth');
  api.imply('mit-oauth');

  api.addFiles('mit.js');
});
