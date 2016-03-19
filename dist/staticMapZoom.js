'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mapProviders = require('./mapProviders.js');

var _mapProviders2 = _interopRequireDefault(_mapProviders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StaticMapZoom = function (_React$Component) {
    _inherits(StaticMapZoom, _React$Component);

    function StaticMapZoom(props) {
        _classCallCheck(this, StaticMapZoom);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StaticMapZoom).call(this, props));

        _this.state = {
            visiblePane: 0
        };
        return _this;
    }

    _createClass(StaticMapZoom, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.installMouseBehavior();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}

        // TODO: move it to providers (?)

    }, {
        key: 'buildImageUrls',
        value: function buildImageUrls() {
            var _this2 = this;

            return this.props.zooms.map(function (zoom) {
                var opts = {
                    w: _this2.props.width,
                    h: _this2.props.height,
                    lat: _this2.props.center[0],
                    lng: _this2.props.center[1],
                    z: zoom,
                    key: '[your_key_here]'
                };
                return _mapProviders2.default[_this2.props.provider](opts);
            });
        }
    }, {
        key: 'installMouseBehavior',
        value: function installMouseBehavior() {
            var _this3 = this;

            var _props = this.props;
            var height = _props.height;
            var width = _props.width;
            var zooms = _props.zooms;

            // computes coordinates of zones reacting to mouse events (i.e. the "pyramid" to the center)

            var nbLevels = zooms.length - 1;
            var hSteps = width / 2 / nbLevels;
            var vSteps = height / 2 / nbLevels;

            // levels disappear one by one as the mouse moves closer to the center
            this.wrapperElement.addEventListener('mousemove', function (e) {
                // find the relative coordinates of the mouse in the widget
                var relX = e.clientX - _this3.wrapperElement.offsetLeft;
                var relY = e.clientY - _this3.wrapperElement.offsetTop;
                // normalize values so that only the first quadrant has to be tested
                if (relX > width / 2) {
                    relX = width - relX;
                }
                if (relY > height / 2) {
                    relY = height - relY;
                }
                // find the zoom, by finding the inner-most zone the cursor is in
                var pane = Math.min(Math.floor(relX / hSteps), Math.floor(relY / vSteps)) + 1;
                _this3.setState({ visiblePane: pane });
            });
            // the first level will disappear as soon as the mouse enters the element,
            // make it reappear when it leaves
            this.wrapperElement.addEventListener('mouseout', function (e) {
                _this3.setState({ visiblePane: 0 });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var imgUrls = this.buildImageUrls();
            imgUrls.reverse();
            var panes = imgUrls.map(function (url, i) {
                return _react2.default.createElement('div', {
                    key: i,
                    className: 'staticMapZoom-zoomPane',
                    style: {
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        transition: 'opacity 0.2s ease',
                        backgroundSize: '100%',
                        backgroundImage: 'url(' + url + ')',
                        // zIndex: `${imgUrls.length - i}`,
                        opacity: i > _this4.state.visiblePane ? 0 : 1
                    }
                });
            });
            var classes = 'staticMapZoom ' + (this.props.reticle ? 'staticMapZoom-reticle' : '');

            if (this.props.href) {
                return _react2.default.createElement(
                    'a',
                    { href: this.props.href,
                        className: classes,
                        ref: function ref(_ref) {
                            _this4.wrapperElement = _ref;
                        },
                        style: {
                            height: this.props.height + 'px',
                            width: this.props.width + 'px'
                        }
                    },
                    panes
                );
            }

            return _react2.default.createElement(
                'div',
                {
                    className: classes,
                    ref: function ref(_ref2) {
                        _this4.wrapperElement = _ref2;
                    },
                    style: {
                        height: this.props.height + 'px',
                        width: this.props.width + 'px'
                    }
                },
                panes
            );
        }
    }]);

    return StaticMapZoom;
}(_react2.default.Component);

StaticMapZoom.propTypes = {
    center: _react.PropTypes.array.isRequired,
    zooms: _react.PropTypes.array.isRequired,
    href: _react.PropTypes.string,
    provider: _react.PropTypes.string,
    reticle: _react.PropTypes.bool,
    height: _react.PropTypes.number,
    width: _react.PropTypes.number
};
StaticMapZoom.defaultProps = {
    href: null,
    provider: 'google',
    reticle: false,
    height: 250,
    width: 500
};
exports.default = StaticMapZoom;
module.exports = exports['default'];
//# sourceMappingURL=staticMapZoom.js.map