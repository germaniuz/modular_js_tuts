//  People JS Module

var people = (function(){
	var people = [];
	
	//  Caching DOM
	var $el = $('#peopleModule');
	var $button = $el.find('button');
	var $input = $el.find('input');
	var $ul = $el.find('ul');
	var template = $el.find('#people-template').html();

	//  Bind events
	$button.on('click', this.addPerson.bind(this));
	$ul.delegate('i.del', 'click', this.deletePerson.bind(this));

	//  Render the module
	render();

	//  Define module methods

	function render(){
		$ul.html(Mustache.render(this.template, {people: people}));
	}

	function addPerson(name){
		people.push($input.val());
		render();
		$input.value('');
	}

	function deletePerson(value){
		var $remove = $(e.target).closest('li');
		var i = $ul.find('li').index($remove);

		people.splice(i, 1);
		render();
	}

	return {
		addPerson: addPerson,
		deletePerson: deletePerson
	};


})();