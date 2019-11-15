/**
 * Des:立方体渲染
 * Author:zedon
 * Date:2019-11-15
 */
import * as THREE from "three";
import AppProcess from "./AppProcess";
export default class CubeDemo extends AppProcess {
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
    this.scene.add(plane);
    //添加一个立方体
    let cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
    let cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x8fbc8f,
      wireframe: true
    });
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(10, 10, 10);
    this.addChild(cube);
  }
  updateFrame() {}
}
