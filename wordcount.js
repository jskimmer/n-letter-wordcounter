var app = angular.module("wordcountApp", []);

app.controller("wordcountController", function($scope) {
	$scope.myText = "";
	$scope.min_letters = 3;
	$scope.word_count = function() {
		var count = 0;
		var res = $scope.myText.split(/[ ,.?!\n]+/);
		for (i = 0; i < res.length; i++){
			if(res[i].length > $scope.min_letters){
				count++;
			}
		}
		return count;
	};

	$scope.total_count = function() {
		var count = 0;
		var res = $scope.myText.split(/[ ,.?!\n]+/);
		for (i = 0; i < res.length; i++){
			if(res[i].length > 0){
				count++;
			}
		}	
		return count;
	};
});