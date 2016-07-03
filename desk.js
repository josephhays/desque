const remote = require('electron').remote;
const main = remote.require('./main.js');


  document.getElementById("close-btn").addEventListener("click", () => {
    main.shutDown();
  }, false);

  document.getElementById("open-keep").addEventListener("click", () => {
    main.openGoogleApp();
  }, false)
