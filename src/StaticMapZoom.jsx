import React, { PropTypes } from 'react';
import providers from './staticMapProviders.js';

export default class StaticMapZoom extends React.Component {
    static propTypes = {
        center: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
        }).isRequired,
        zooms: PropTypes.arrayOf(PropTypes.number),
        provider: PropTypes.oneOf(Object.keys(providers)),
        apiKey: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        href: PropTypes.string,
        reticle: PropTypes.bool
    };

    static defaultProps = {
        zooms: [3, 6, 14],
        provider: 'google',
        width: 500,
        height: 250,
        href: null,
        reticle: false
    };

    constructor(props) {
        super(props);
        this.state = {
            visiblePane: 0
        };
    }

    componentDidMount() {
        this.installMouseBehavior();
    }

    componentWillUnmount() {
    }

    buildImageUrls() {
        return this.props.zooms.map((zoom) => {
            const opts = {
                zoom,
                width: this.props.width,
                height: this.props.height,
                lat: this.props.center.lat,
                lng: this.props.center.lng,
                apiKey: this.props.apiKey
            };
            return providers[this.props.provider](opts);
        });
    }

    installMouseBehavior() {
        const {
            height,
            width,
            zooms
        } = this.props;

        // computes coordinates of zones reacting to mouse events (i.e. the "pyramid" to the center)
        const nbLevels = zooms.length - 1;
        const hSteps = (width / 2) / nbLevels;
        const vSteps = (height / 2) / nbLevels;

        // levels disappear one by one as the mouse moves closer to the center
        this.wrapperElement.addEventListener('mousemove', e => {
            // find the relative coordinates of the mouse in the widget
            var rect = this.wrapperElement.getBoundingClientRect();
            let relX = e.clientX - rect.left - this.wrapperElement.clientLeft;
            let relY = e.clientY - rect.top - this.wrapperElement.clientTop;

            // normalize values so that only the first quadrant has to be tested
            if (relX > width / 2) {
                relX = width - relX;
            }
            if (relY > height / 2) {
                relY = height - relY;
            }
            // find the zoom, by finding the inner-most zone the cursor is in
            const pane = Math.min(Math.floor(relX / hSteps), Math.floor(relY / vSteps)) + 1;
            if (pane !== this.state.visiblePane) {
                this.setState({ visiblePane: pane });
            }
        });
        // the first level will disappear as soon as the mouse enters the element,
        // make it reappear when it leaves
        this.wrapperElement.addEventListener('mouseout', e => {
            this.setState({ visiblePane: 0 });
        });
    }

    render() {
        const imgUrls = this.buildImageUrls();
        const panes = imgUrls.map((url, i) =>
            <div
                key={i}
                className="staticMapZoom-zoomPane"
                style={{
                    backgroundImage: `url(${url})`,
                    opacity: (i < this.state.visiblePane) ? 0 : 1
                }}
            />
        );
        panes.reverse();

        const containerClasses = `staticMapZoom ${this.props.reticle ? 'staticMapZoom-reticle' : ''}`;
        const containerAttributes = {
            className: containerClasses,
            ref: (ref) => {this.wrapperElement = ref;},
            style: {
                height: `${this.props.height}px`,
                width: `${this.props.width}px`
            }
        };

        if (this.props.href) {
            return <a href={this.props.href} {...containerAttributes}>{panes}</a>;
        }

        return <div {...containerAttributes}>{panes}</div>;
    }
}
