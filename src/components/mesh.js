'use strict';

export default class Mesh {
    addTo(scene) {
        scene.add(this.mesh);
    }

    set y(val) {
        this.mesh.position.y = val;
    }

    get y() {
        return this.mesh.position.y;
    }

    set x(val) {
        this.mesh.position.x = val;
    }

    get x() {
        return this.mesh.position.x;
    }

    set z(val) {
        this.mesh.position.z = val;
    }

    get z() {
        return this.mesh.position.z;
    }
}