Static map zoom
===

A React component which mimics the auto zoom mini-map found on geo-tagged photos Flickr pages.

[See examples](http://bbecquet.github.io/react-staticMapZoom/example-es5)

```bash
npm install react-staticmapzoom
```

## PropTypes

```javascript
{
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }).isRequired,
    // Map center latitude and longitude, as WGS-84 coordinates.
    zooms: PropTypes.arrayOf(PropTypes.number),
    // Zoom levels, as integers. Default: [3, 6, 14] (Flickr setting).
    provider: PropTypes.oneOf(['google', 'openMapQuest', 'mapbox']),
    // Provider string. Default: 'google'.
    apiKey: PropTypes.string,
    // Provider-specific API key or token, if needed. Consult the provider's doc.
    width: PropTypes.number,
    // Width of the component, in pixels. Default: 250.
    height: PropTypes.number,
    // Height of the component, in pixels. Default: 250.
    href: PropTypes.string,
    // Url of the link when clicking. If omitted, renders as a simple <div>. Default: none.
    reticle: PropTypes.bool
    // Indicates if a circle should be drawn around the center. Default: false.
}
```
