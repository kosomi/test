var app = angular.module('rtfm');

app.controller('threadCtrl', function($scope, Firebase,  threadRef, commentsRef, threadService){

var thread = threadService.getThreads().$asObject();

thread.$bindTo($scope, 'thread');

$scope.comments = commentsRef.$asArray();

$scope.timez = Firebase.ServerValue.TIMESTAMP;

$scope.deleteComment = function(comments){
	$scope.comments.$remove(comments);
}

$scope.createComment = function(username, comment) {
	$scope.comments.$add({
		username: username,
		text: comment,
		time: $scope.timez
	})
}

})