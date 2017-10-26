window.addEventListener("DOMContentLoaded", function(){
    
    //BABYLON Engine creation
    var canvas = document.getElementById('gameCanvas');
    var engine = new BABYLON.Engine(canvas, true);

    //BABYLON Scene creation
    var scene = new BABYLON.Scene(engine);

    //The camera, necessary see the world
    var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(5,5,-5), scene);
    camera.setTarget(BABYLON.Vector3.Zero());

    //the ambient light
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,1,0), scene);

    //The cube
    var cube = BABYLON.Mesh.CreateBox("mybox", 1, scene);

    engine.runRenderLoop(function(){
        scene.render();
        cube.rotation.x +=.01;
    });
}, false);