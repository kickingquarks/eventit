angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.profile', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.events', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.profile2', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/profile2.html',
        controller: 'profile2Ctrl'
      }
    }
  })

  .state('tabsController.newUser', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/newUser.html',
        controller: 'newUserCtrl'
      }
    }
  })

  .state('tabsController.joinEvent', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/joinEvent.html',
        controller: 'joinEventCtrl'
      }
    }
  })

  .state('tabsController.hostEvent', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/hostEvent.html',
        controller: 'hostEventCtrl'
      }
    }
  })

  .state('tabsController.manageEvent', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/manageEvent.html',
        controller: 'manageEventCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});