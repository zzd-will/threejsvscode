/**
 * Des:
 * 变换矩阵 测试
 * 旋转矩阵
 * 缩放矩阵
 * 平移矩阵
 * Author:zedon
 * Date:2019-11-18
 */
import * as THREE from "three";
import * as G from "./Gloable";
import AppProcess from "./AppProcess";
export default class Matrix extends AppProcess {
  constructor() {
    super();
  }
  enterScene() {
    console.log("enterScene");

    var loader = new THREE.TextureLoader();
    // var texture = loader.load("res/0.png");
    var that = this;

    var texture = loader.load("res/tit.png");
    let cubeGeometry = new THREE.BoxGeometry(20, 20, 20);
    let cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    that.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.matrixTranslation(3);
    that.addChild(that.cube);
  }
  /**
   * 平移矩阵
   * | 1  0  0  Tx |
     | 0  1  0  Ty |
     | 0  0  1  Tz |
    | 0  0  0  1  |
   */
  /**缩放矩阵
   * 
   * | Sx 0  0  0 |
    | 0  Sy 0  0 |
    | 0  0  Sz 0 |
    | 0  0  0  1 |
   */
  /**
   * 
   *| 1  0     0     0 |  
    | 0  cosα  -sinα 0 |
    | 0  sinα  cosα  0 | 
    | 0  0     0     1 |   
   */
  matrixTranslation(type) {
    this.cube.matrixAutoUpdate = false;
    var T;
    if (type === 1) {
      T = new THREE.Matrix4();
      T.set(1, 0, 0, 10, 0, 1, 0, 20, 0, 0, 1, 10, 0, 0, 0, 1);
      // T.makeTranslation(10, 20, 10);
    } else if (type === 2) {
      T = new THREE.Matrix4();
      // set方法设置平移矩阵
      T.set(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1);
    } else if (type === 3) {
      T = new THREE.Matrix4();
      // set方法设置平移矩阵
      T.set(
        1,
        0,
        0,
        0,
        0,
        Math.cos(45),
        -Math.sin(45),
        0,
        0,
        Math.sin(45),
        Math.cos(45),
        0,
        0,
        0,
        0,
        1
      );
    }
    this.cube.applyMatrix(T);
  }
  updateFrame() {
    if (this.cube) {
      //   this.cube.rotation.x += 0.01;
      //   this.cube.rotation.y += 0.01;
    }
  }
}
