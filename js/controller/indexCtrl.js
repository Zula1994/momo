app.controller('indexCtrl', function ($scope,goodService,$state) {
    $scope.goHot = function () {
        $state.go('mall.index.hot');
    }
    $scope.goNews = function () {
        $state.go('mall.index.news');
    }
    $scope.goFocus = function () {
        $state.go('mall.index.focus');
    }
    $scope.goJu = function () {
        $state.go('mall.index.ju');
    }
    



    goodService.getGoods().then(function (data) {
        $scope.goodsList1 = data.data1;
        $scope.goodsList2 = data.data2;
        $scope.goodsList3 = data.data3;
    });
    goodService.getHotText().then(function (data) {
        $scope.getHotText = data;
    });
})