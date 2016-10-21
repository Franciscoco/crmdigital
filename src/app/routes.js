var ng = require('@angular/core');

var MainComponent = require('./main');

exports.STATES = [
  {
    name: 'App',
    url: '/',
    component: MainComponent
  }
];

exports.MyUIRouterConfig = ng.Class({
  constructor: function () {},

  configure: function (uiRouter) {
    uiRouter.urlRouterProvider.otherwise(function () {
      return uiRouter.stateService.go('App');
    });
  }
});
