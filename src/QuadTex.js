/**
 * Des:四边形形渲染
 * Author:zedon
 * Date:2019-11-18
 */

import * as THREE from "three";
import AppProcess from "./AppProcess";
export default class QuadTex extends AppProcess {
  constructor() {
    super();
  }
  init() {
    this.tiangelGeometry = new THREE.Geometry();
    var vertices = [
      new THREE.Vector3(0, 0, 0), //v0
      new THREE.Vector3(20, 0, 0), //v1
      new THREE.Vector3(0, 20, 0), //v2
      new THREE.Vector3(20, 20, 0) //v3
    ];
    this.tiangelGeometry.vertices = vertices;
    var faces = [new THREE.Face3(0, 1, 2), new THREE.Face3(1, 3, 2)];
    this.tiangelGeometry.faces = faces;

    var t0 = new THREE.Vector2(0, 0);
    var t1 = new THREE.Vector2(1, 0);
    var t2 = new THREE.Vector2(1, 1);
    var t3 = new THREE.Vector2(0, 1);
    var uv1 = [t0, t1, t3];
    var uv2 = [t1, t2, t3];
    this.tiangelGeometry.faceVertexUvs[0].push(uv1, uv2);
  }
  enterScene() {
    console.log("enterScene");
    //添加三角形
    var loader = new THREE.TextureLoader();
    var that = this;

    var err = loader.load(
      "res/replay.png",
      function(texture) {
        let material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true
        });
        that.triangel = new THREE.Mesh(that.tiangelGeometry, material);
        that.addChild(that.triangel);
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
  updateFrame() {}
}
