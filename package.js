Package.describe({
  summary: 'Login service for Mit accounts',
  version: '1.0.2',
  name: 'pathable:accounts-mit',
  git: 'https://github.com/pathable/accounts-mit',
});

Package.onUse(api => {
  api.versionsFrom('1.11')

  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('pathable:accounts-oauth@1.3.3', ['client', 'server']);
  api.use('pathable:mit-oauth@1.0.0');
  api.imply('pathable:mit-oauth');

  api.addFiles('mit.js');
});
