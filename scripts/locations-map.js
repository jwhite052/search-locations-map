function initMap() {

  // cache UI elements
  var menu = document.getElementsByClassName('locations-menu')[0];
  var menuTabs = menu.querySelectorAll('.locations-menu__panel > .locations-menu__tab');

  var setAria = function(el1, el2, expanded) {
    if (expanded) {
      el1.setAttribute('aria-expanded', 'true');
      el2.setAttribute('aria-hidden', 'false');
    } else {
      el1.setAttribute('aria-expanded', 'false');
      el2.setAttribute('aria-hidden', 'true');
    }
  };

  var toggleMenu = function(el) {
    var thisMenuTab = el;
    var thisMenuContent = el.nextElementSibling;
    if (thisMenuTab.classList.contains('is-collapsed')) {
      setAria(thisMenuTab, thisMenuContent, true);
    } else {
      setAria(thisMenuTab, thisMenuContent, false);
    }
    thisMenuContent.classList.toggle('is-collapsed');
    thisMenuContent.classList.toggle('is-expanded');
    thisMenuTab.classList.toggle('is-collapsed');
    thisMenuTab.classList.toggle('is-expanded');
  };

  var expandMenu = function(e) {
    e.preventDefault();
    var thisMenuTab = e.target.parentNode;
    if (!thisMenuTab.classList.contains('is-expanded')) {
      // collapse expanded menu
      toggleMenu(menu.querySelectorAll('.locations-menu__tab.is-expanded')[0]);
      toggleMenu(thisMenuTab);
    }
  };

  // attach listener to each menu tab
  for (var i = 0; i < menuTabs.length; i++) {
    menuTabs[i].addEventListener('click', expandMenu, false);
  }

  var mapdefaults = {
    center: {lat: 40.0556365, lng: -75.1},
    zoom: 10
  }

  // initalize map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: mapdefaults.center,
    zoom: mapdefaults.zoom,
    minZoom: 9,
    maxZoom: 16,
    mapTypeControl: false,
    streetViewControl: false,
    clickableIcons: false,
    styles:  [{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#152456'}]},{'featureType':'administrative.neighborhood','elementType':'labels.text.fill','stylers':[{'color':'#569bca'}]},{'featureType':'landscape','elementType':'all','stylers':[{'color':'#f2f4f8'}]},{'featureType':'landscape','elementType':'geometry.fill','stylers':[{'color':'#ffffff'}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'poi.park','elementType':'geometry.fill','stylers':[{'color':'#e6f3d6'},{'visibility':'on'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':-30},{'lightness':45},{'visibility':'simplified'}]},{'featureType':'road','elementType':'geometry.fill','stylers':[{'color':'#f2f4f8'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#cccccc'},{'visibility':'simplified'}]},{'featureType':'road.highway','elementType':'labels.text','stylers':[{'color':'#333333'}]},{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'color':'#f4f4f4'}]},{'featureType':'road.arterial','elementType':'labels.text.fill','stylers':[{'color':'#787878'}]},{'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#eaf6f8'},{'visibility':'on'}]},{'featureType':'water','elementType':'geometry.fill','stylers':[{'color':'#addbf9'}]}]
  });



  var infowindow = new google.maps.InfoWindow({ });

  var markers = [];

  var initMarkers = function(list) {
    for (var i = 0; i < list.length; i++) {
      // store new marker in list
      var markericon = '/images/blue-marker-icon.png';
      if (list[i].tags.type === 'hospitals') {
        markericon = '/images/blue-marker-icon.png';
      } else if (list[i].tags.type === 'outpatient') {
        markericon = '/images/purple-marker-icon.png';
      } else if (list[i].tags.type === 'urgent') {
        markericon = '/images/orange-marker-icon.png';
      }
      var marker = new google.maps.Marker({
        position: {lat: list[i].map.lat, lng: list[i].map.lng},
        map: map,
        animation: google.maps.Animation.DROP,
        icon: markericon,
        // custom properties
        location: list[i]
      });
      marker.addListener('click', function() {
        var content = '<div class="map-info-window">' +
        '<h3 class="map-info-window__title">' + this.location.name + '</h3>' +
        '<p class="map-info-window__address">' + this.location.info.address + '<br />' +
        '<a class="map-info-window__directionslink" href="' + this.location.info.directionsurl + '" target="_blank">Get Directions</a></p>' +
        '<p class="map-info-window__phone">' + this.location.info.phone + '</p>' +
        '<p class="map-info-window__hours">' + this.location.info.hours + '</p>' +
        '<div><a class="map-info-window__locationlink" href="' + this.location.info.url + '" target="_blank">View Additional Information</a></div>' +
        '</div>';
        infowindow.setContent(content);
        infowindow.open(map, this);
        map.setOptions({
          center: this.position,
          zoom: 15
        });

      });
      markers.push(marker);
    }
  };

  google.maps.event.addListener(infowindow, 'domready', function() {
    var iwContent = document.getElementsByClassName('gm-style-iw')[0];
    var iwBackground = iwContent.parentNode.childNodes[0];
    // gm_infoWindowSiblings[0].remove();
    iwBackground.querySelectorAll(':nth-child(2)')[0].style.background = '#fff';
    iwBackground.querySelectorAll(':nth-child(4)')[0].style.display = 'none';
    // iwContent.parentNode.parentNode.style.left = '115px';
  });

  initMarkers(hospitalsList);
  initMarkers(outpatientList);
  initMarkers(urgentcareList);

  // Controller

  var menuUI = {
    'hospitals': {
      'list': menu.querySelectorAll('.hospitals-menu .locations-menu__list')[0]
    },
    'outpatient': {
      'list': menu.querySelectorAll('.outpatient-menu .locations-menu__list')[0]
    },
    'urgentcare': {
      'list': menu.querySelectorAll('.urgentcare-menu .locations-menu__list')[0]
    }
  };

  var setMenuMarkersUI = function(data, ui) {
    for (var i = 0; i < data.length; i++) {
      var li = document.createElement('LI');
      li.innerHTML = '<a href="#">' + data[i].name + '</a>';
      li.setAttribute('data-map-id', i);
      // li.addEventListener('click', function() {
      //   var lat = data[parseInt(this.getAttribute('data-map-id'))].lat;
      //   var lng = data[parseInt(this.getAttribute('data-map-id'))].lng;
      //   map.setOptions({
      //     center: {lat: lat, lng: lng},
      //     zoom: 15
      //   });
      // });
      ui.appendChild(li);
    }
  };

  setMenuMarkersUI(hospitalsList, menuUI.hospitals.list);
  setMenuMarkersUI(outpatientList, menuUI.outpatient.list);
  setMenuMarkersUI(urgentcareList, menuUI.urgentcare.list);

  var searchFields = {
    'address': document.getElementsByClassName('search-locations__address')[0],
    'distance': document.getElementsByClassName('search-locations__distance')[0],
    'region': document.getElementsByClassName('search-locations__region')[0],
    'type': document.getElementsByClassName('search-locations__type')[0]
  };

  var currentMarkers = markers;

  var updateMap = function() {
    var region = document.getElementsByClassName('search-locations__region')[0].value;
    var type = document.getElementsByClassName('search-locations__type')[0].value;

    for (var i = 0; i < currentMarkers.length; i++) {
      if ((currentMarkers[i].location.tags.region === region || region === "default") &&
          (currentMarkers[i].location.tags.type === type || type === "default")) {
        currentMarkers[i].setMap(map);
      } else {
        currentMarkers[i].setMap(null);
      }
    }
  };

  var updateMapRadius = function() {
    var distance = document.getElementsByClassName('search-locations__distance')[0].value;
    var address = document.getElementsByClassName('search-locations__address')[0].value;

    if (distance !== 'default') {
      console.log('Distance: ' + distance);
      switch (distance) {
        case '1':
          currentSearchCircle.setOptions({radius: getRadiusInMeters(1)});
          map.setOptions({zoom: 16, center: currentSearchMarker.position});
          break;
        case '5':
          currentSearchCircle.setOptions({radius: getRadiusInMeters(5)});
          map.setOptions({zoom: 13, center: currentSearchMarker.position});
          break;
        case '10':
          currentSearchCircle.setOptions({radius: getRadiusInMeters(10)});
          map.setOptions({zoom: 11, center: currentSearchMarker.position});
          break;
        case '25':
          currentSearchCircle.setOptions({radius: getRadiusInMeters(25)});
          map.setOptions({zoom: 10, center: currentSearchMarker.position});
          break;
        default:
          break;
      }
    }

    function getRadiusInMeters(miles) {
      return (1609.34 * miles) / 2;
    }
  };

  // searchFields.address.addEventListener('keyup', function() {
  //   console.log("Test");
  //   console.log(this.value);
  //   if (this.value !== '') {
  //     searchFields.distance.style.display = "none";
  //   } else {
  //     searchFields.distance.style.display = "inline-block";
  //   }
  // });

  // attach listeners to search fields
  searchFields.region.addEventListener('change', updateMap);
  searchFields.type.addEventListener('change', updateMap);
  searchFields.distance.addEventListener('change', updateMapRadius);

  document.getElementsByClassName('locations__search-reset')[0].addEventListener('click', function(e) {
    e.preventDefault();
    if (currentSearchMarker) {
      currentSearchCircle.setMap(null);
      currentSearchMarker.setMap(null);
    }
    map.setOptions({center: mapdefaults.center, zoom: mapdefaults.zoom });
    clearMarkers();
    setMapOnAll(map);

    searchFields.address.value = '';
    searchFields.region.selectedIndex = 0;
    searchFields.type.selectedIndex = 0;
    searchFields.distance.selectedIndex = 0;
    document.getElementsByClassName('search-locations__distance-wrapper')[0].style.display = "none";

    infowindow.close();
  });

  // document.getElementsByClassName('locations__search-clear')[0].addEventListener('click', function(e) {
  //   e.preventDefault();
  //   searchFields.address.value = '';
  //   searchFields.region.selectedIndex = 0;
  //   searchFields.type.selectedIndex = 0;
  //   searchFields.distance.selectedIndex = 0;
  //   document.getElementsByClassName('search-locations__distance-wrapper')[0].style.display = "none";
  // });

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }

  // PLACES

  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  // function geolocate() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var geolocation = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //       var circle = new google.maps.Circle({
  //         center: geolocation,
  //         radius: position.coords.accuracy
  //       });
  //       autocomplete.setBounds(circle.getBounds());
  //     });
  //   }
  // }

  // document.getElementById('autocomplete').addEventListener('onfocus', function() {
  //   console.log("Focus!");
  // });

  function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
  }

  var geocoder = new google.maps.Geocoder();

  var currentSearchMarker;
  var currentSearchCircle;

  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    console.log(place);
    geocoder.geocode({'address': place.name}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          if (currentSearchMarker) {
            currentSearchMarker.setMap(null);
          }
          currentSearchMarker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            //animation: google.maps.Animation.DROP,
            optimized: false,
            zIndex:-99999999,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 5,
              strokeColor: '#569bca'
            }
          });
          // currentSearchMarker.setAnimation(google.maps.Animation.BOUNCE);
          map.setOptions({
            center: results[0].geometry.location,
            zoom: 15
          });
          if (currentSearchCircle) {
            currentSearchCircle.setMap(null);
          }
          currentSearchCircle = new google.maps.Circle({
            strokeColor: '#569bca',
            strokeOpacity: 0.7,
            strokeWeight: 1,
            fillColor: '#569bca',
            fillOpacity: 0.1,
            map: map,
            center: results[0].geometry.location,
            radius: 1609.34
          });
        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
    console.log("Test");
    console.log(searchFields.address.value);
    if (searchFields.address.value === '') {
      console.log("Hide");
      document.getElementsByClassName('search-locations__distance-wrapper')[0].style.display = "none";
      currentSearchMarker.setMap(null);
      currentSearchCircle.setMap(null);
    } else {
      console.log("Show");
      document.getElementsByClassName('search-locations__distance-wrapper')[0].style.display = "inline-block";
    }
  }

  initAutocomplete();

} // end initMap()
