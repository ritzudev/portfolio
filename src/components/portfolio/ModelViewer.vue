<template>
  <div class="h-96 w-96" ref="canvasContainer"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Importa OrbitControls

export default {
  data() {
    return {
      modelScale: 50.0, // Ajusta la escala del modelo según tus necesidades
    };
  },
  mounted() {
    this.initScene();
    console.log("Scene initialized");
    this.loadModel();
    console.log("Model loading started");
    this.addControls();
    this.animate();
    console.log("Animation started");
  },
  methods: {
    initScene() {
      console.log("Initializing scene");
      this.scene = new THREE.Scene();
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      this.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(0, 10, 5);
      this.scene.add(directionalLight);
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.set(0, 100, 60); // Ajusta la posición de la cámara
      this.camera.lookAt(0, 0, 20); // Ajusta el punto de enfoque de la cámara
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(
        this.$refs.canvasContainer.clientWidth,
        this.$refs.canvasContainer.clientHeight
      );
      this.$refs.canvasContainer.appendChild(this.renderer.domElement);
      this.$refs.canvasContainer.appendChild(this.renderer.domElement);
    },
    loadModel() {
      console.log("Loading model");
      const loader = new GLTFLoader();
      loader.load("src/assets/images_port/profile.glb", (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(this.modelScale, this.modelScale, this.modelScale); // Ajusta la escala del modelo
        this.scene.add(this.model);
      });
    },
    addControls() {
      console.log("Loading controles");
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // Personaliza los controles según tus necesidades
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.screenSpacePanning = false;
      // ...
    },
    animate() {
      //console.log("Starting animation loop");
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
/* div{
  height: 500px;
  width: 1000px;
} */
canvas {
/*   height: 500px !important;
  width: 1000px !important; */
}
</style>
