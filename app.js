angular.module('myApp', ['ngAnimate'])
.controller('MyController', function($scope, $http, $timeout) {
  
  
  $scope.searchInstagram = function(keyword) {
    

    
    $scope.keyword = keyword;
    
    var url = "https://api.instagram.com/v1/tags/" + keyword + "/media/recent";
    var request = {
      outputMode: 'json',
      callback: 'JSON_CALLBACK',
      client_id: '53541f77dbab454392d271e749fcb828'
    };

    $http({
      method: 'JSONP',
      url: url,
      params: request
    })
    .then(function(result) {
      $scope.results = result.data.data;
      if ($scope.results.length === 0) {
        alert("There are no pictures with this tag! :(")
      }
    },
    function(result) {
      alert('error');
    });
  };
});