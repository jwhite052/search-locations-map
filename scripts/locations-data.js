// Model
var hospitalsList = [
  {
    name: "Abington Hospital",
    map: {
      lat: 40.119136,
      lng: -75.119953
    },
    tags: {
      type: 'hospitals',
      region: 'montgomery'
    },
    info: {
      address: '1200 Old York Rd.<br />Abington, PA 19001',
      phone: '215-481-2000',
      hours: '',
      url: 'https://www.abingtonhealth.org/our-locations/abington-hospital/',
      directionsurl: '#'
    }
  },
  {
    name: "Abington - Lansdale Hospital",
    map: {
      lat: 40.25115,
      lng: -75.271454
    },
    tags: {
      type: 'hospitals',
      region: 'montgomery'
    },
    info: {
      name: "Abington - Lansdale Hospital",
      address: '100 Medical Campus Dr.<br />Lansdale, PA 19446',
      phone: '215-368-2100',
      hours: '',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Thomas Jefferson University Hospital",
    map: {
      lat: 39.9498262,
      lng: -75.1584227
    },
    tags: {
      type: 'hospitals',
      region: 'philadelphia'
    },
    info: {
      address: '111 South 11th Street<br />Philadelphia, PA 19107',
      phone: '215-955-6000<br />1-800-JEFF-NOW (215-533-3669)',
      hours: '',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Hospital for Neuroscience",
    map: {
      lat: 39.9480344,
      lng: -75.156207
    },
    tags: {
      type: 'hospitals',
      region: 'philadelphia'
    },
    info: {
      address: '900 Walnut Street<br />Philadelphia, PA 19107',
      phone: '215-955-6000<br />1-800-JEFF-NOW (215-533-3669)',
      hours: '',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Methodist Hospital",
    map: {
      lat: 39.921183,
      lng: -75.169701
    },
    tags: {
      type: 'hospitals',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Aria − Bucks County Hospital",
    map: {
      lat: 40.1830928,
      lng: -74.8725508
    },
    tags: {
      type: 'hospitals',
      region: 'bucks'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Aria – Frankford Hospital",
    map: {
      lat: 40.0196895,
      lng: -75.0838933
    },
    tags: {
      type: 'hospitals',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Aria – Torresdale Hospital",
    map: {
      lat: 40.0716736,
      lng: -74.9854092
    },
    tags: {
      type: 'hospitals',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Rothman Orthopaedic Specialty Hospital – Bensalem",
    map: {
      lat: 40.1129362,
      lng: -74.9627666
    },
    tags: {
      type: 'hospitals',
      region: 'bucks'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Kennedy University Hospital - Cherry Hill",
    map: {
      lat: 39.927982,
      lng: -75.015943
    },
    tags: {
      type: 'hospitals',
      region: 'jersey'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Kennedy University Hospital - Stratford",
    map: {
      lat: 39.828275,
      lng: -75.008195
    },
    tags: {
      type: 'hospitals',
      region: 'jersey'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Kennedy University Hospital - Washington Township",
    map: {
      lat: 39.735239,
      lng: -75.065340
    },
    tags: {
      type: 'hospitals',
      region: 'jersey'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  }
];

var outpatientList = [
  {
    name: "Abington Jefferson Health – Blue Bell",
    map: {
      lat: 40.140623,
      lng: -75.285922
    },
    tags: {
      type: 'outpatient',
      region: 'montgomery'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Abington Jefferson Health – Lower Gwynedd",
    map: {
      lat: 40.17472,
      lng: -75.22517
    },
    tags: {
      type: 'outpatient',
      region: 'montgomery'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Abington Jefferson Health – Montgomeryville",
    map: {
      lat: 40.2391667,
      lng: -75.2315047
    },
    tags: {
      type: 'outpatient',
      region: 'montgomery'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Abington Jefferson Health – Warminster",
    map: {
      lat: 40.185092,
      lng: -75.078765
    },
    tags: {
      type: 'outpatient',
      region: 'bucks'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Abington Jefferson Health – Willow Grove",
    map: {
      lat: 40.164239,
      lng: -75.1310205
    },
    tags: {
      type: 'outpatient',
      region: 'montgomery'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson - Bala Cynwyd",
    map: {
      lat: 40.0050928,
      lng: -75.2192039
    },
    tags: {
      type: 'outpatient',
      region: 'montgomery'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson - Bala Cynwyd",
    map: {
      lat: 39.9998876,
      lng: -75.2303063
    },
    tags: {
      type: 'outpatient',
      region: 'montgomery'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Health - Smylie Times",
    map: {
      lat: 40.0562602,
      lng: -75.0452195
    },
    tags: {
      type: 'outpatient',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Health - Navy Yard",
    map: {
      lat: 39.8959772,
      lng: -75.1740603
    },
    tags: {
      type: 'outpatient',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Health - Turnersville",
    map: {
      lat: 39.7370413,
      lng: -75.0468679
    },
    tags: {
      type: 'outpatient',
      region: 'jersey'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Health - Voorhees",
    map: {
      lat: 39.844291,
      lng: -74.985362
    },
    tags: {
      type: 'outpatient',
      region: 'jersey'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "The Annex",
    map: {
      lat: 40.080427,
      lng: -75.02851
    },
    tags: {
      type: 'outpatient',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "The Professional Court",
    map: {
      lat: 40.1098113,
      lng: -75.0309162
    },
    tags: {
      type: 'outpatient',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Aria Health – Center for Rehabilitation and Wellness",
    map: {
      lat: 40.1834393,
      lng: -74.8680713
    },
    tags: {
      type: 'outpatient',
      region: 'bucks'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Health - Burlington",
    map: {
      lat: 40.0492141,
      lng: -74.8707033
    },
    tags: {
      type: 'outpatient',
      region: 'jersey'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Abington Jefferson Health – Elkins Park",
    map: {
      lat: 40.082393,
      lng: -75.1279097
    },
    tags: {
      type: 'outpatient',
      region: 'montgomery'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Health – Art Museum",
    map: {
      lat: 39.963721,
      lng: -75.173739
    },
    tags: {
      type: 'outpatient',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  }
];

var urgentcareList = [
  {
    name: "Jefferson Urgent Care – Flourtown",
    map: {
      lat: 40.111191,
      lng: -75.210331
    },
    tags: {
      type: 'urgent',
      region: 'montgomery'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Urgent Care - Rittenhouse",
    map: {
      lat: 39.9521761,
      lng: -75.1765097
    },
    tags: {
      type: 'urgent',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Urgent Care – Smylie Times",
    map: {
      lat: 40.0562602,
      lng: -75.0452195
    },
    tags: {
      type: 'urgent',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Urgent Care – Washington Square",
    map: {
      lat: 39.9479655,
      lng: -75.1532154
    },
    tags: {
      type: 'urgent',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Urgent Care – Bensalem",
    map: {
      lat: 40.1132751,
      lng: -74.9587764
    },
    tags: {
      type: 'urgent',
      region: 'bucks'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Urgent Care – Grant Avenue",
    map: {
      lat: 40.080427,
      lng: -75.02851
    },
    tags: {
      type: 'urgent',
      region: 'philadelphia'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  },
  {
    name: "Jefferson Urgent Care – Willow Grove",
    map: {
      lat: 40.1688489,
      lng: -75.1262753
    },
    tags: {
      type: 'urgent',
      region: 'montgomery'
    },
    info: {
      address: '1234 Main St.<br />Philadelphia, PA 19107',
      phone: '215-481-2000',
      hours: 'M-S: 10am - 10pm',
      url: '#',
      directionsurl: '#'
    }
  }
];
