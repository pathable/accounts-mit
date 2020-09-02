Accounts.oauth.registerService('mit');

if (Meteor.isClient) {
  const loginWithMit = (options, callback) => {
    // support a callback without options
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(
      callback
    );
    Mit.requestCredential(options, credentialRequestCompleteCallback);
  };
  Accounts.registerClientLoginFunction('mit', loginWithMit);
  Meteor.loginWithMit = (...args) => Accounts.applyLoginFunction('mit', args);
} else {
  Accounts.addAutopublishFields({
    // not sure whether the github api can be used from the browser,
    // thus not sure if we should be sending access tokens; but we do it
    // for all other oauth2 providers, and it may come in handy.
    forLoggedInUser: ['services.mit'],
    forOtherUsers: ['services.mit.username'],
  });
}
