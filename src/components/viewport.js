'use strict';

import * as three from 'three/build/three';

import './viewport.css';
import colors from './colors';

import Sea from './sea';
import Sky from './sky';
import Plane from './plane';

export default class Viewport {
    constructor(id) {
        this.el = document.createElement('container');
        this.el.id = id;
        this.el.classList.add('viewport');

        document.body.appendChild(this.el);
    }

    init() {
        this.createScene();
        this.createLights();

        this.sea = new Sea();
        this.sea.y = -400;

        this.sky = new Sky();
        this.sky.y = -600;

        this.plane = new Plane();
        this.plane.y = 100;

        this.sky.addTo(this.scene);
        this.sea.addTo(this.scene);
        this.plane.addTo(this.scene);

        this.renderer.render(this.scene, this.camera);
    }

    createScene() {
        let { width, height } = this.size;

        this.scene = new three.Scene();
        this.scene.fog = new three.Fog(colors.white);

        this.fieldOfView = 60;
        this.nearPlane = 1;
        this.farPlane = 10000;

        this.camera = new three.PerspectiveCamera(
            this.fieldOfView,
            this.aspectRatio,
            this.nearPlane,
            this.farPlane
        );

        this.camera.position.x = 0;
        this.camera.position.z = 200;
        this.camera.position.y = 100;

        this.renderer = new three.WebGLRenderer({
            alpha: true, antialias: true
        });

        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = true;

        this.el.appendChild(this.renderer.domElement);

        window.addEventListener('resize', this.onResize.bind(this), false);
    }

    createLights() {
        this.hemisphereLight = new three.HemisphereLight(
            colors.cyan, colors.black, .9
        );

        this.shadowLight = new three.DirectionalLight(
            colors.white, .9
        );

        this.shadowLight.position.set(150, 350, 350);
        this.shadowLight.castShadow = true;

        this.shadowLight.shadow.camera.left = -400;
        this.shadowLight.shadow.camera.right = 400;
        this.shadowLight.shadow.camera.top = 400;
        this.shadowLight.shadow.camera.bottom = -400;
        this.shadowLight.shadow.camera.near = 1;
        this.shadowLight.shadow.camera.far = 1000;

        this.shadowLight.shadow.mapSize.width = 2048;
        this.shadowLight.shadow.mapSize.height = 2048;

        this.scene.add(this.hemisphereLight);
        this.scene.add(this.shadowLight);
    }

    onResize() {
        let { width, height } = this.size;

        this.renderer.setSize(width, height);
        this.camera.aspect = this.aspectRatio;
        this.camera.updateProjectionMatrix();
    }

    get size() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    get aspectRatio() {
        let size = this.size;

        return size.width / size.height;
    }
}