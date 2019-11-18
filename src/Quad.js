/**
 * Des:四边形形渲染
 * Author:zedon
 * Date:2019-11-18
 */

import * as THREE from "three";
import AppProcess from "./AppProcess";
export default class Quad extends AppProcess {
  constructor() {
    super();
  }
  init() {
    this.tiangelGeometry = new THREE.Geometry();
    var vertices = [
      new THREE.Vector3(0, 0, 0), //v0
      new THREE.Vector3(20, 0, 0), //v1
      new THREE.Vector3(10, 20, 0), //v2
      new THREE.Vector3(30, 20, 0) //v3
    ];
    this.tiangelGeometry.vertices = vertices;

    // var colors = [
    //   new THREE.Color(0xff0000),
    //   new THREE.Color(0x00ff00),
    //   new THREE.Color(0x0000ff)
    // ];
    // this.tiangelGeometry.colors = colors;

    var faces = [new THREE.Face3(0, 1, 2), new THREE.Face3(1, 3, 2)];
    this.tiangelGeometry.faces = faces;
  }
  enterScene() {
    console.log("enterScene");
    //添加三角形
    this.triangel = new THREE.Mesh(this.tiangelGeometry);
    this.addChild(this.triangel);
  }
  updateFrame() {}
}
