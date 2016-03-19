var React = require('react');
var ReactDOM = require('react-dom');
var StaticMapZoom = require('../../dist/staticMapZoom');
var createMapZoom = React.createFactory(StaticMapZoom);

window.onload = function () {
    /*ReactDOM.render(createMapZoom({
        zooms: [1, 10, 20],
        center: [48.85, 2.35]
    }), document.getElementById('container'));*/
    ReactDOM.render(createMapZoom({
        zooms: [1, 8, 16],
        center: [48.85, 2.35],
        width: 300,
        height: 150,
        reticle: true
    }), document.getElementById('container'));
};
