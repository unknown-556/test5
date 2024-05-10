(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);

// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoidGhhdG5vYWhib3kiLCJhIjoiY2x1eW8yMzN3MHR3ZjJpcXJnNnJkaWRhdiJ9.3M6uKuIgKbIMY55BDFdr6Q';

// Initialize and add the map
if ("geolocation" in navigator) {
  // Get user's current position
  navigator.geolocation.getCurrentPosition(function(position) {
      var lngLat = [position.coords.longitude, position.coords.latitude];
      
      // Create the map with the user's current location as center
      var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11', // Specify the map style
          center: lngLat, // Center the map on user's current location
          zoom: 15 // Zoom level
      });

      // Add navigation control
      map.addControl(new mapboxgl.NavigationControl());

      // Create a marker at the user's current location
      var marker = new mapboxgl.Marker()
          .setLngLat(lngLat)
          .addTo(map);

      // Add event listener for clicking on the map to drop a pin
      map.on('click', function(e) {
          // Remove existing marker if any
          marker.remove();
          // Add a new marker at the clicked location
          marker.setLngLat(e.lngLat).addTo(map);
      });
  }, function(error) {
      // Handle errors
      console.error('Error getting current position:', error);
      alert('Error getting current position: ' + error.message);
  });
} else {
  alert('Geolocation is not supported by your browser.');
}

// Add event listener to location button
document.getElementById('locate-btn').addEventListener('click', function() {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
        // Get user's current position
        navigator.geolocation.getCurrentPosition(function(position) {
            // Update map center and marker position
            var lngLat = [position.coords.longitude, position.coords.latitude];
            map.setCenter(lngLat);
            marker.setLngLat(lngLat);
            // Optional: You may want to adjust the zoom level here for a closer view
            map.setZoom(15);
        }, function(error) {
            // Handle errors
            console.error('Error getting current position:', error);
            alert('Error getting current position: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});



