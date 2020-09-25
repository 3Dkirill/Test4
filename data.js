var APP_DATA = {
  "scenes": [
    {
      "id": "0-001",
      "name": "001",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.01020391746847693,
        "pitch": 0,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 0.8307891609138878,
          "pitch": 0.0643804793541296,
          "rotation": 0,
          "target": "2-003rgb_color"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-002rgb_color",
      "name": "002.RGB_color",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6916268134714247,
          "pitch": 0.23599877833473037,
          "rotation": 0,
          "target": "2-003rgb_color"
        },
        {
          "yaw": -1.691624191913677,
          "pitch": 0.2359961567769826,
          "rotation": 0,
          "target": "2-003rgb_color"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-003rgb_color",
      "name": "003.RGB_color",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.5877436348996259,
        "pitch": 0.1489136547941179,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -1.1320634152363453,
          "pitch": 0.1964957155434668,
          "rotation": 0,
          "target": "0-001"
        },
        {
          "yaw": 1.1313911181641352,
          "pitch": 0.08699095246808497,
          "rotation": 0,
          "target": "1-002rgb_color"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
