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
    // Map center latitude and longitude, as WGS-84 coordinates.
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }).isRequired,
    // Zoom levels, as integers. Default: [3, 6, 14] (Flickr setting).
    zooms: PropTypes.arrayOf(PropTypes.number),
    // Provider string. Default: 'google'.
    provider: PropTypes.oneOf(['google', 'openMapQuest', 'mapbox', 'yandex']),
    // Provider-specific API key or token, if needed. Consult the provider's doc.
    apiKey: PropTypes.string,
    // Width of the component, in pixels. Default: 250.
    width: PropTypes.number,
    // Height of the component, in pixels. Default: 250.
    height: PropTypes.number,
    // Url of the link when clicking. If omitted, renders as a simple <div>. Default: none.
    href: PropTypes.string,
    // Indicates if a circle should be drawn around the center. Default: false.
    reticle: PropTypes.bool
}
```
