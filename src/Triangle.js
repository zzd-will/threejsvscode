/**
 * Des:三角形渲染
 * Author:zedon
 * Date:2019-11-15
 */
import * as THREE from "three";
import AppProcess from "./AppProcess";
export default class Triangle extends AppProcess {
  constructor() {
    super();
  }
  init() {
    //立方体
    this.tiangelGeometry = new THREE.Geometry();
    //创建立方体的顶点
    var vertices = [
      new THREE.Vector3(0, 0, 0), //v0
      new THREE.Vector3(20, 0, 0), //v1
      new THREE.Vector3(10, 20, 0) //v2
    ];
    this.tiangelGeometry.vertices = vertices; //设置立方体的各个坐标点

    var colors = [
      new THREE.Color(0xff0000),
      new THREE.Color(0x00ff00),
      new THREE.Color(0x0000ff)
    ];
    this.tiangelGeometry.colors = colors;

    var faces = [new THREE.Face3(0, 1, 2)];
    this.tiangelGeometry.faces = faces;
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
    //添加三角形
    this.triangel = new THREE.Mesh(this.tiangelGeometry);
    // this.triangel.scale = new THREE.Vector3(2, 2, 2);
    this.addChild(this.triangel);
  }
  updateFrame() {}
}
