{

  "host": "0.0.0.0",
  "port": 7777,

  "keyLength": 10,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "storage": {
    "type": "redis",
    "host": "127.0.0.1",
    "port": 6379,
    "db": 2,
    "expire": 2592000
  },

  "documents": {
    "about": "./about.md"
  },

  "irc": {
    "channels": ["#starfyre"],  
    "server": "smrsh.net",  
    "userName": "gluebot",  
    "realName": "I eat paste",  
    "botName": "glue",  
    "debug": true,
    "message": "New paste at http://r.smrsh.net:7777/"
  }
}
