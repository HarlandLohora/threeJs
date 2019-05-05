( function(){
  //Definiendo nueva escena
  let scene  = new THREE.Scene();
  //Definiendo nueva camara
  //PerspectiveCamera recibe dos parametros
  //Primero rango de vista, radio de  la imagen
  const aspectRadio = window.innerWidth / window.innerHeight;
  let camera = new THREE.PerspectiveCamera(75,aspectRadio,0.1,100);
  camera.position.z = 5;
  camera.position.y = 2;

  //Definiendo render
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);

  //Creando el renderer dentro de body
  document.body.appendChild( renderer.domElement );

  //Creando mesh - malla, requiere una geometria y un material.
  let geometry       = new THREE.BoxGeometry(1,1,1);
  let groundMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff
  });

  let mesh = new THREE.Mesh( geometry, groundMaterial );

  //Agregando elemento/malla a la escena
  scene.add( mesh );

  //Agregando Luces
  let pointLight = new THREE.PointLight(0xdfebff);
  pointLight.position.y = 30;
  scene.add( new THREE.AmbientLight( 0x404040 ));
  scene.add( pointLight );

  //requestAnimationFrame calcula la cantidad de frames que se requieren
  function loop(){
    requestAnimationFrame( loop );
    renderer.render( scene,camera );
  }

  loop();

})();
