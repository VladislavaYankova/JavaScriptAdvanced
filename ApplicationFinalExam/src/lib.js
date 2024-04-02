import {html, render as baseRender} from '../node_modules/lit-html/lit-html.js';
import {styleMap} from '../node_modules/lit-html/directives/style-map.js';
import {classMap} from '../node_modules/lit-html/directives/class-map.js';
import page from '../node_modules/page/page.mjs';

//todo correct root
let root = document.getElementById('main-element');

function render(tamplateResult) {
    baseRender(tamplateResult, root);
}

export {
    html,
    render,
    styleMap,
    classMap,
    page
}

