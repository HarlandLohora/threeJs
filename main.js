( function(){
  //Definiendo nueva escena
  let scene  = new THREE.Scene();
  //Definiendo nueva camara
  //PerspectiveCamera recibe dos parametros
  //Primero rango de vista, radio de  la imagen
  const aspectRadio = window.innerWidth / window.innerHeight;
  let camera = new THREE.PerspectiveCamera(75,aspectRadio,0.1,100);
  //Definiendo render
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);

  //Creando el renderer dentro de body
  document.body.appendChild( renderer.domElement );

  renderer.render( scene,camera );
})();
