var  app = angular.module("myContact", []);


app.controller('myContactController', ['$scope','$http', function($scope,$http){

			refresh();

	$scope.createContact = function(){

		$http.post('/createContact', $scope.contact)
					.then(function(response){
						console.log(response.data)
						$scope.contact={};

						refresh();
					})
	}


		function refresh(){

			$http.get('/contacts').then(function(response){
				console.log(response)
				$scope.contactList = response.data
			})
		}


	$scope.editContact = function(id){
		$http.get('/getContactById/'+id)
				  .then(function(response){
				  	//console.log(response.data)

				  	$scope.contact= response.data
				  })
	}


	$scope.updateContact= function(){
		$http.put('/updateContact/'+$scope.contact._id , $scope.contact).then(function(response){
			$scope.contact={};
				refresh();
		})
	}


	$scope.removeContact= function(id){
			$http.delete('/removeContact/'+id)
			.then(function(response){
				refresh();
			})
	}
	
}])