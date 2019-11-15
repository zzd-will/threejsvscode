/**
 * Des:立方体渲染
 * Author:zedon
 * Date:2019-11-15
 */
import * as THREE from "three";
import * as G from "./Gloable";
import AppProcess from "./AppProcess";
export default class CubeTex extends AppProcess {
  constructor() {
    super();
  }
  enterScene() {
    console.log("enterScene");

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

    var loader = new THREE.TextureLoader();
    // var texture = loader.load("res/0.png");
    var that = this;

    var err = loader.load(
      "res/westore.png",
      function(texture) {
        //添加一个立方体
        let cubeGeometry = new THREE.BoxGeometry(20, 20, 20);
        let cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
        that.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        that.cube.position.set(10, 10, 10);
        that.addChild(that.cube);
      },
      // Function called when download progresses
      function(xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // Function called when download errors
      function(xhr) {
        console.log("An error happened" + xhr.error);
      }
    );
  }
  updateFrame() {
    if (this.cube) {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }
  }
}
