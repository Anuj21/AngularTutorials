'use strict';

angular.module('myapp', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {

    // Set of Photos
    $scope.photos = [
        
		{src:'images/img1.png',title:'Pic 1'},
		{src:'images/img2.jpg',title:'Pic 2'},
		{src:'images/img3.jpg',title:'Pic 3'},
		{src:'images/img4.png',title:'Pic 4'},
		{src:'images/img5.png',title:'Pic 5'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});
