'use strict';

import './main.css';
import Viewport from './components/viewport';

const viewport = new Viewport('aviator');

window.addEventListener('load', viewport.init.bind(viewport));

