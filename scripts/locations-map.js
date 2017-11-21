function initMap() {

  // cache UI elements
  var menu = document.getElementsByClassName('locations-menu')[0];
  var menuTabs = menu.querySelectorAll('.locations-menu__panel > .locations-menu__tab');

  // set accessibility
  var setAria = function(el1, el2, expanded) {
    if (expanded) {
      el1.setAttribute('aria-expanded', 'true');
      el2.setAttribute('aria-hidden', 'false');
    } else {
      el1.setAttribute('aria-expanded', 'false');
      el2.setAttribute('aria-hidden', 'true');
    }
  };

  // toggle menu collapse state
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

  // expand menu
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

  // initial map settings
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

  // instantiate map infowindow object
  var infowindow = new google.maps.InfoWindow({ });

  // array to store map markers
  var markers = [];

  // create markers
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
        // infowindow content
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
      // store marker
      markers.push(marker);
    }
  };

  // add
  google.maps.event.addListener(infowindow, 'domready', function() {
    var iwContent = document.getElementsByClassName('gm-style-iw')[0];
    var iwBackground = iwContent.parentNode.childNodes[0];
    iwBackground.querySelectorAll(':nth-child(2)')[0].style.background = '#fff';
    iwBackground.querySelectorAll(':nth-child(4)')[0].style.display = 'none';
  });

  // create markers for each list of locations data
  initMarkers(hospitalsList);
  initMarkers(outpatientList);
  initMarkers(urgentcareList);

  // cache menu list elements
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

  // populate menu lists with locations
  var setMenuMarkersUI = function(data, ui) {
    for (var i = 0; i < data.length; i++) {
      var li = document.createElement('LI');
      li.innerHTML = '<a href="#">' + data[i].name + '</a>';
      li.setAttribute('data-map-id', i);
      ui.appendChild(li);
    }
  };

  setMenuMarkersUI(hospitalsList, menuUI.hospitals.list);
  setMenuMarkersUI(outpatientList, menuUI.outpatient.list);
  setMenuMarkersUI(urgentcareList, menuUI.urgentcare.list);

  // reset map button
  document.getElementsByClassName('locations__search-reset')[0].addEventListener('click', function(e) {
    e.preventDefault();
    map.setOptions({center: mapdefaults.center, zoom: mapdefaults.zoom });
    clearMarkers();
    setMapOnAll(map);
    infowindow.close();
  });

  // sets the map on all markers in the array
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  // removes the markers from the map
  function clearMarkers() {
    setMapOnAll(null);
  }

} // end initMap()
