// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyB0uIpp969xSa0hoglddUASNADJG0GDgqQ',
    authDomain: 'webproteinlab.firebaseapp.com',
    databaseURL: 'https://webproteinlab.firebaseio.com',
    projectId: 'webproteinlab',
    storageBucket: 'webproteinlab.appspot.com',
    messagingSenderId: '636448988935'
  }
};
