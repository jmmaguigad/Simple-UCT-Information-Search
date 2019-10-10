// Utilizes the https://docs.mapbox.com/mapbox-gl-js/example/marker-from-geocode/ => forward geocoder
$(document).ready(function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam1tYWd1aWdhZCIsImEiOiJjazFpd21pajcwaTA4M2JvZmxrejRhcnRtIn0.wXBLBSmeImh9cXMOj6eH9Q';
    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });

    function getMapData(municipality,province) {
        mapboxClient.geocoding.forwardGeocode({
            query: municipality + "," + province,
            autocomplete: false,
            limit: 1
        })
        .send()
        .then(function (response) {
            if (response && response.body && response.body.features && response.body.features.length) {
                var feature = response.body.features[0];

                var map = new mapboxgl.Map({
                    container: 'map',
                    // Created basemap using mapbox studio
                    style: 'mapbox://styles/jmmaguigad/ck1ixocli601c1cpd7a2why6q',
                    center: feature.center,
                    zoom: 10
                });
                new mapboxgl.Marker()
                    .setLngLat(feature.center)
                    .addTo(map);
            }
        });
    }

    // Load default view
    getMapData('Tuguegarao City','Cagayan');

    // JSON FILE
    $.getJSON( "data/data.json", function( json ) {
        // Get Province and load municipalities in the select box 
        $('#province').on('change', function() {
            var province = $(this).val();
            var municipality = $('#municipality');
            var data = json;
            municipality.html(""); 
            if (data.length == 0)
                alert("No data for that province!");
            else {
                municipality.append($("<option></option>").attr("value","").text("-------Select Barangay--------"));
                for(var i = 0; i < data.length; i++)
                {
                    if(data[i].Province == province){
                        municipality.append($("<option></option>").attr("value", data[i].Municipality).text(data[i].Municipality));
                    }
                }                
            }
        });

        // Select municipality and render map after on change
        $('#municipality').on('change', function() {
            var province = $('#province').val();
            var municipality = $(this).val();
            var location = municipality + "," + province;
            // var contentnow = $('#content');
            // Render Map after on change
            getMapData(municipality,province);
            data = json;
            $('#contents').html("");
            for(var i = 0; i < data.length; i++)
            {
                if(data[i].Province == province && data[i].Municipality == municipality){
                    console.log(data[i].NoofBeneficiaries);
                    $('#contents').append('<h2>Information</h2><p>The target beneficiaries of UCT Listahanan for the municipality of <b>' + municipality + '</b> is ' + '<b>' + data[i].NoofBeneficiaries + '</b></p>');
                }
            }  
        });
    });
});