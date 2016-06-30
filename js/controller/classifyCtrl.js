app.filter('backFilter',function(){
    return function(index,a,b) {
        console.info('index',index,a,b);
        var className =  'back';
        if(parseInt(a%3)==0) {
            className+=0;
        } else if(parseInt(a%3)==0) {
            className+=1;
        } else if(parseInt(a%3)==0) {
            className+=2;
        } else {
            className+=2;
        }
        return className;
    }
})

app.controller ('classifyCtrl',function ($scope,goodService) {
    goodService.getClassify().then(function (data) {
        $scope.getList = data;
        console.log(data)
    });

    $scope.bg = 'back';

})