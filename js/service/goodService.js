app.service('goodService',function ($q, $http) {
    var goodService = {};
    var baseUrl = 'js/json'
    goodService.getGoods = function () {
        var q = $q.defer();
        $http.get(baseUrl+'/goods.json').then(function (data) {
            q.resolve(data.data);
        },function (error) {
            q.reject(error)
        });
        return q.promise;
    }
    goodService.getHotText = function () {
        var q = $q.defer();
        $http.get(baseUrl+'/hotText.json').then(function (data) {
            q.resolve(data.data.data);
        },function (error) {
            q.reject(error)
        });
        return q.promise;
    }
    goodService.getClassify = function () {
        var q = $q.defer();
        $http.get(baseUrl+'/classify.json').then(function (data) {
            q.resolve(data.data.data);
        },function (error) {
            q.reject(error)
        });
        return q.promise;
    }
    return goodService;
})