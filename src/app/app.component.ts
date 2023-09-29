import { Component, VERSION } from '@angular/core';

import * as THREE from 'three'; // we need @types/three for this to work (next to three package)

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ionic 6 Angular ' + VERSION.major;
  container: any; // any  = ugly

  stuff() {
    this.container = document.getElementById('canvas'); // should actually be done using ViewChild

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    // var scene = new THREE.Scene();
    console.log('HELLO');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      150,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);
    this.container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    animate();
  }
}
