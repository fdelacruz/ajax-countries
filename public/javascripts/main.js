$(document).on('ready', function() {

	$('#load-countries').on('click', function() {
		$('#countries-list').empty();

		$.get('/countries',  function(data) {
			for (var i = 0; i < data.length; i++) {
				$('#countries-list').append('<li>' + data[i].name + '</li>');
			}
		});

	});

});
