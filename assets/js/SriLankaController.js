app.controller('SriLankaController', function($scope, $http) {

    $http.get('assets/data/sl.json').then(function(response) {
        $scope.places = response.data;
        initMap();
    });

    function initMap() {
        let map = L.map('map').setView([7.8731, 80.7718], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        $scope.places.forEach(function(place) {
            L.marker([place.coordinates.lat, place.coordinates.lng]).addTo(map)
                .bindPopup('<strong>' + place.title + '</strong><br>' + place.description);
        });
    }

});