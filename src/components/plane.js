'use strict';

import * as three from 'three';

import colors from './colors';
import Mesh from './mesh';

export default class Plane extends Mesh {
    constructor() {
        super();

        this.mesh = new three.Object3D();
        this.build();
    }

    build() {
        this.height = 20;
        this.length = 100;

        this.fuselage = new three.Mesh(
            new three.CylinderGeometry(
                this.height, this.height * .8, 100, 16
            ),
            new three.MeshPhongMaterial({
                color: colors.cyan
            })
        );
        this.fuselage.rotation.x = Math.PI / 2;
        this.fuselage.rotation.z = -Math.PI / 2;

        this.nose = new three.Mesh(
            new three.SphereGeometry(
                this.height, 16, 16
            ),
            new three.MeshPhongMaterial({
                color: colors.cyan
            })
        );
        this.nose.position.x = 50;
        this.nose.scale.set(2, 1, 1);

        this.tailShape = new three.Shape();

        this.tailShape.moveTo(20, 0);
        this.tailShape.lineTo(20, 10);
        this.tailShape.lineTo(0, 20);
        this.tailShape.lineTo(0, 0);

        this.tail = new three.Mesh(
            new three.ShapeGeometry(this.tailShape),
            new three.MeshPhongMaterial({
                color: colors.cyan
            })
        );
        this.tail.position.y = this.height * .8;
        this.tail.position.x = -50;


        this.mesh.add(this.fuselage);
        this.mesh.add(this.nose);
        this.mesh.add(this.tail);
    }
}