app.controller("ownerCtrl", function($scope,$state){
    if(sessionStorage.userName){
        $scope.userName = sessionStorage.userName;
    }else {
        $state.go('mall.login');
        setTimeout(function () {
            window.location.reload()
        },3000)
    }

})
app.controller("loginCtrl", function ($scope,$state) {
    var container1 = document.getElementById("vCode");
    var code1 = new vCode(container1);
    $scope.login = function () {
        if(code1.verify($scope.captcha)){
            sessionStorage.userName = $scope.userID;
            $state.go('mall.owner');
        }else {
            alert()
        }
    }

})