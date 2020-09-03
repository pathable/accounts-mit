Package.describe({
  summary: 'Login service for Mit accounts',
  version: '1.0.4',
  name: 'pathable:accounts-mit',
  git: 'https://github.com/pathable/accounts-mit',
});

Package.onUse(api => {
  api.versionsFrom('1.10.3-beta.9');

  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('pathable:mit-oauth@1.0.4');
  api.imply('pathable:mit-oauth');

  api.addFiles('mit.js');
});
