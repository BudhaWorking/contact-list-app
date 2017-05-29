		app.factory("contactFactory",['$http',function($http){
				//refresh();
				 var factory = {};
			
			factory.getContacts= function() {

				return $http.get('/contacts');/*.then(function(response)*/
				console.log(response)
				//data.success()
				//return data;
				
			
		}
		factory.createContact= function(contact) {

				return $http.post('/createContact', contact);/*.then(function(response)*/
				console.log(response)
				//data.success()
				//return data;			
		}
		factory.updateContact = function(id,contact) {

				return $http.put('/updateContact/' +id,contact);/*.then(function(response)*/
				console.log(response)
				//data.success()
				//return data;
				
			
		}

		factory.editContact = function(id) {

				return $http.get('/getContactById/' +id);/*.then(function(response)*/
				console.log(response)
				//data.success()
				//return data;
				
			
		}
		factory.removeContact = function(id) {

				return $http.delete('/removeContact/' +id);/*.then(function(response)*/
				console.log(response)
				//data.success()
				//return data;
				
			
		}


				return factory;
		}]);

		//refresh();




		
