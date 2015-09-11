var app = angular.module('listContact', []);

app.controller('PersonsController', function($scope){

	$scope.search = "";
	$scope.order = "order";
	$scope.selectedIndex = null;
	$scope.selectedPerson = null;

	$scope.selectPerson = function (person, index){
		$scope.selectedIndex = index;
		$scope.selectedPerson = person;
	}

	$scope.sensitiveSearch = function(person){
		if($scope.search){
			return person.nome.indexOf($scope.search) == 0 || 
						 person.email.indexOf($scope.search) == 0;
		}
		return true;
	};


	$scope.persons = [ 
		{
			"nome": "Diego Collares",
			"email": "diego.collares@gmail.com",
			"telefone": "021972608316",
			"dataDeNascimento": "1984-09-30T18:00:37-07:00"
		},

		{
			"nome": "Carlos Cunha",
			"email": "cc.cunha@gmail.com",
			"telefone": "021998870987",
			"dataDeNascimento": "1988-12-01T14:00:37-07:00"
		},

		{
			"nome": "Agnaldo Mathias",
			"email": "agnaldo@uol.com.br",
			"telefone": "0219887674326",
			"dataDeNascimento": "1999-04-30T18:00:37-07:00"
		},

		{
			"nome": "Bruno Fernandes",
			"email": "bruno.fernandes@bol.com.br",
			"telefone": "021912876543",
			"dataDeNascimento": "1995-08-27T18:00:37-07:00"
		},

		{
			"nome": "Freitas de Souza",
			"email": "freitas@rapnacional.com.br",
			"telefone": "021998765423",
			"dataDeNascimento": "1981-07-13T18:00:37-07:00"
		},

		{
			"nome": "Clarissa Leoa",
			"email": "clarissa.leoa@uol.com.br",
			"telefone": "021997654098",
			"dataDeNascimento": "1981-05-05T18:00:37-07:00"
		},

		{
			"nome": "Jeovani Douglas",
			"email": "jj@hotmail.com",
			"telefone": "021997901234",
			"dataDeNascimento": "1990-02-21T18:00:37-07:00"
		},
	]
});