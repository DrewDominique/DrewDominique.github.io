$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(900, 630, 250, 5, "green");
    createPlatform(700, 500, 165, 10, "green");
    createPlatform(1250, 510, 150, 7, "yellow");
    createPlatform(400, 400, 100, 15, "red");
    createPlatform(1060, 200, 400, 20, "white");
    createPlatform(600, 270, 200, 14, "green");
    createBadPlatform(325, 500, 75, 8, "purple")
    //Green="Safe"
    //Yellow="Chance of getting hit"
    //Red="Danger Zone"
    //White="Finish Line and Most dangerous spot"
    //Purple="Bad Platform"

    // TODO 3 - Create Collectables
    createCollectable("database", 1300, 400);
    createCollectable("diamond", 550, 475);
    createCollectable("grace", 200, 300, 0, 1, 100, 300, 2)
    createCollectable("steve", 1300, 150);

    // TODO 4 - Create Cannons
    createCannon("right", 775, 750);
    createCannon("right", 425, 900);
    createCannon("left", 100, 700);
    createCannon("top", 1300, 1500);
  
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
