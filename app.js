let scene, cam, renderer

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  cam = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000);
  cam.rotation.y = 45 / 180 * Math.PI
  cam.position.x = 450
  cam.position.y = 200
  cam.position.z = 500

  controls = new THREE.OrbitControls(cam)
  controls.addEventListener('change', renderer)


  hlight = new THREE.AmbientLight (0x404040, 7);
  scene.add(hlight);

  dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(0, 1, 0)
  dirLight.castShadow = true
  scene.add(dirLight)

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement)

  let loader = new THREE.GLTFLoader()
  loader.load('mewtwo/scene.gltf', function(gltf) {
    scene.add(gltf.scene)
    animate()
  })
}

function animate() {
  renderer.render(scene, cam);
  requestAnimationFrame(animate)
}

init()