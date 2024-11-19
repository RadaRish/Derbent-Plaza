var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "Вход",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11596321958199596,
          "pitch": 0.11820377547068617,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "Фойе",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1278575995746625,
          "pitch": 0.1485472591699324,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": 2.15701399743258,
          "pitch": 0.0904855643976461,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "Коридор",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.919866436596882,
          "pitch": 0.2292817896208632,
          "rotation": 0,
          "target": "3--101"
        },
        {
          "yaw": -1.448589794252488,
          "pitch": 0.08415119434442353,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3--101",
      "name": "Номер 101",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1649344516492004,
          "pitch": 0.21351312058387606,
          "rotation": 0,
          "target": "5--"
        },
        {
          "yaw": -0.37241979501589384,
          "pitch": 0.1563030889489614,
          "rotation": 0,
          "target": "4-"
        },
        {
          "yaw": 2.3399669506626273,
          "pitch": 0.20242818188371814,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-",
      "name": "Комната",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.095086675138565,
          "pitch": 0.15793350020168262,
          "rotation": 0,
          "target": "3--101"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5--",
      "name": "Ванная комната",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8990647677349637,
          "pitch": 0.30792641597400916,
          "rotation": 0,
          "target": "3--101"
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
