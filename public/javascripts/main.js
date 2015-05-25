$(document).on('ready', function() {

	$('#load-countries').on('click', function() {
		$('#countries-list').empty();

		$.get('/countries',  function(data) {
			for (var i = 0; i < data.length; i++) {
				$('#countries-list').append('<li>' + data[i].name + '</li>');
			}
		});

	});

	$('#search').on('click', function() {

		// Set up a postData object to send to the server
		// and fill it with the content of our search input field
		var postData = {
			country: $('#country').val()
		};

		$.post('/search', postData, function(data) {
			// First, clear out the list in case it already has content
			$('#countries-list').empty();

			// Loop through all the countries and render a list item for them
			for (var i = 0; i < data.length; i++) {
				$('#countries-list').append('<li>' + data[i].name + '</li>');
			}
		});
	});
});
