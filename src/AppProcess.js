/**
 * Des:基础结构
 * Author:zedon
 * Date:2019-11-15
 */
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
export default class AppProcess {
  constructor() {
    this.initThree();
  }
  init() {}
  initThree(params) {
    //获得渲染区域DOM元素
    this.randerArea = document.getElementById("rander-area");

    this.initScene();
    this.initCamera();
    this.initRender();
    this.initControls();
  }
  initScene() {
    //创建场景
    this.scene = new THREE.Scene();
  }
  initCamera() {
    //创建摄像机
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.randerArea.clientWidth / this.randerArea.clientHeight,
      0.1,
      1000
    );
    this.camera.position.x = 0;
    this.camera.position.y = 100;
    this.camera.position.z = 100;
    this.camera.lookAt(this.scene.position);
  }
  initRender() {
    //创建WebGL渲染器
    this.render = new THREE.WebGLRenderer();
    this.render.setClearColor(0xf0f0f0);
    this.render.setSize(
      this.randerArea.clientWidth,
      this.randerArea.clientHeight
    );
    this.render.gammaInput = true;
    this.render.gammaOutput = true;
    this.render.shadowMap.enabled = true;
    this.randerArea.appendChild(this.render.domElement);
    this.render.render(this.scene, this.camera);
    window.addEventListener("resize", this.onWindowResize.bind(this), false);
    this.animate();
    this.init();
    this.preEnterScene();
    this.enterScene();
    this.endEnterScene();
  }
  initControls() {
    //配置轨道控制器
    let controls = new OrbitControls(this.camera, this.render.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.autoRotate = true;
  }
  //响应窗体大小修改的函数
  onWindowResize() {
    let width = this.randerArea.clientWidth;
    let height = this.randerArea.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.render.setSize(width, height);
  }
  //响应更新画面的函数
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.updateFrame();
    this.render.render(this.scene, this.camera);
  }
  preEnterScene() {
    //在底部添加一个平面
    let planeGeometry = new THREE.PlaneGeometry(100, 100, 1, 1);
    let planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x7777ff
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    //设置平面角度
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, -1, 0);
    this.addChild(plane);
  }
  endEnterScene() {}

  enterScene() {}
  updateFrame() {}

  //渲染物体
  addChild(geometry) {
    //添加坐标系
    let axes = new THREE.AxesHelper(50);
    this.scene.add(axes);
    this.scene.add(geometry);
  }
  release() {}
}
