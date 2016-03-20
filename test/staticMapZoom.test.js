import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import StaticMapZoom from '../dist/staticMapZoom';

const defaultProps = {
    center: [48.85, 2.35],
    zooms: [1, 5, 10]
};

describe('StaticMapZoom', function () {
    describe('zooms', function () {
        it('creates the correct number of zoom panes', function () {
            const zooms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const wrapper = render(<StaticMapZoom center={defaultProps.center} zooms={zooms} />);
            expect(wrapper.find('.staticMapZoom-zoomPane')).to.have.length(zooms.length);
        });

        // @TODO: test mouse behaviour
    });

    describe('href', function () {
        it('creates a simple div wrapper if the "href" attribute is absent', function () {
            const wrapper = render(<StaticMapZoom {...defaultProps} />);
            expect(wrapper.find('a')).to.have.length(0);
        });

        it('creates a wrapper link to the specified url if the "href" attribute is present', function () {
            const url = 'foobar';
            const wrapper = render(<StaticMapZoom {...defaultProps} href={url}/>);
            const a = wrapper.find('a');
            expect(a).to.have.length(1);
            expect(a.attr('href')).to.equal(url);
        });
    });

    describe('reticle', function () {
        it('does not add a reticle element when the "reticle" prop is absent', function () {
            const wrapper = render(<StaticMapZoom {...defaultProps} />);
            expect(wrapper.find('.staticMapZoom-reticle')).to.have.length(0);
        });

        it('adds a reticle element when the "reticle" prop is present', function () {
            const wrapper = render(<StaticMapZoom {...defaultProps} reticle />);
            expect(wrapper.find('.staticMapZoom-reticle')).to.have.length(1);
        });
    });
});
