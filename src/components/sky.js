'use strict';

import * as three from 'three';

import { rand } from '../utils';
import Mesh from './mesh';
import Cloud from './cloud';

export default class Sky extends Mesh {
    constructor() {
        super();

        this.mesh = new three.Object3D();
        this.cloudsCount = 400;
        this.step = Math.PI * 2 / this.cloudsCount;

        this.createClouds();
    }

    createClouds() {
        for (let i = 0; i < this.cloudsCount; i++) {
            let cloud = new Cloud();
            let angle = this.step * i;
            let height = rand(750, 950);
            let scale = rand(1, 2);

            cloud.x = Math.cos(angle) * height;
            cloud.y = Math.sin(angle) * height;
            cloud.z = rand(-400, 400);

            cloud.mesh.rotation.z = angle + Math.PI / 2;
            cloud.mesh.scale.set(scale, scale, scale);

            this.mesh.add(cloud.mesh);
        }
    }
}