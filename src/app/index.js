var ng = require('@angular/core');
var ngPlatformBrowser = require('@angular/platform-browser');
var uiRouter = require('ui-router-ng2');
var myRoutes = require('./routes');

var TechsModule = require('./techs');

var MainComponent = require('./main');
var HeaderComponent = require('./header');
var TitleComponent = require('./title');
var FooterComponent = require('./footer');

module.exports = uiRouter.UIRouterModule({
  imports: [
    ngPlatformBrowser.BrowserModule,
    TechsModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  providers: [
    uiRouter.provideUIRouter({configClass: myRoutes.MyUIRouterConfig})
  ],
  states: myRoutes.STATES,
  bootstrap: [uiRouter.UIView]
})(
  ng.Class({
    constructor: function () {}
  })
);
