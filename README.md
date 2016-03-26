Static map zoom
===

A React component which mimics the auto zoom mini-map found on geo-tagged photos Flickr pages.

[See examples](http://bbecquet.github.io/react-staticMapZoom/example-es5)

## PropTypes

```javascript
{
    center: PropTypes.array.isRequired,
    // [latitude, longitude] of the center, as WGS-84 coordinates.
    zooms: PropTypes.array,
    // Zoom levels, as integers. Default: [3, 6, 14] (Flickr setting).
    provider: PropTypes.string,
    // Provider string. For now 'google', 'openMapQuest' or 'mapbox'. Default: 'google'.
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

## TODO

 * Support more providers ([CartoDB](http://docs.cartodb.com/cartodb-platform/maps-api/static-maps-api/), [Here](https://developer.here.com/rest-apis/documentation/map-image/topics/overview.html), [Bing](https://msdn.microsoft.com/en-us/library/ff701724.aspx), etc.)
 * Some support for provider-specific attributes (ex: Google custom styles, Mapbox map styles id, overlays for providers that support it).
 * Dynamic reticle size (like on Flickr)
