'use strict';

import * as three from 'three';

import colors from './colors';
import { rand } from '../utils';
import Mesh from './mesh';

export default class Cloud extends Mesh {
    constructor() {
        super();

        this.mesh = new three.Object3D();
        this.geom = new three.BoxGeometry(20, 20, 20);

        this.mat = new three.MeshPhongMaterial({
            color: colors.white,
            transparent: true,
            opacity: rand(.8, .9)
        });

        this.generate();
    }

    generate() {
        let count = rand(3, 10);

        for (let i = 0; i < count; i++) {
            this.mesh.add(this.base(i));
        }
    }

    base(i) {
        let scale = rand(.1, .5);
        let mesh = new three.Mesh(
            this.geom, this.mat
        );

        mesh.position.x = i * 4;
        mesh.position.y = rand(10);
        mesh.position.z = rand(3);

        mesh.rotation.x = rand(Math.PI * .2);
        mesh.rotation.y = rand(Math.PI * .2);

        mesh.scale.set(scale, scale, scale);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        return mesh;
    }
}