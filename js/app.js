var app = angular.module("myApp", ['ionic', 'ui.router']);
app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider){
    $stateProvider.state('mall', {
        url : '/mall',
        templateUrl : 'template/home.html',
        controller : 'homeCtrl'
    })
        .state('mall.index',{
            url : '/index',
            views : {
                'mall-index' : {
                    templateUrl : 'template/mall/index.html',
                    controller　: 'indexCtrl'
                }
            }
        })
        .state('mall.index.focus',{
            url : '/focus',
            views : {
                'indexTem' : {
                    templateUrl : 'template/index/focus.html',
                }
            }
        })
        .state('mall.index.news',{
            url : '/news',
            views : {
                'indexTem' : {
                    templateUrl : 'template/index/news.html',
                }
            }
        })
        .state('mall.index.ju',{
            url : '/ju',
            views : {
                'indexTem' : {
                    templateUrl : 'template/index/ju.html',
                }
            }
        })
        .state('mall.index.hot',{
            url : '/hot',
            views : {
                'indexTem' : {
                    templateUrl : 'template/index/hot.html',
                }
            }
        })
        .state('mall.owner',{
            url : '/owner',
            views : {
                'mall-owner' : {
                    templateUrl : 'template/mall/owner.html',
                    controller : 'ownerCtrl'
                }

            }
        })
        .state('mall.login',{
            url : '/login',
            views : {
                'mall-owner' : {
                    templateUrl : 'template/owner/login.html',
                }

            }
        })
        .state('classify',{
            url : '/classify',
            templateUrl : 'template/mall/classify.html',
            controller : 'classifyCtrl'
        })
    $urlRouterProvider.otherwise('/mall/index/focus');
    $ionicConfigProvider.tabs.position("bottom");

})