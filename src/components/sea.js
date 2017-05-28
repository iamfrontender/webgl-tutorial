'use strict';

import * as three from 'three';

import colors from './colors';
import Mesh from './mesh';

export default class Sea extends Mesh {
    constructor() {
        super();

        this.geom = new three.CylinderGeometry(100, 600, 800, 14, 10);
        this.mat = new three.MeshPhongMaterial({
            color: colors.blue,
            transparent: true,
            opacity: .3,
            shading: three.FlatShading
        });

        this.mesh = new three.Mesh(
            this.geom, this.mat
        );

        this.mesh.receiveShadow = true;
    }

    addTo(scene) {
        scene.add(this.mesh);
    }

}