var wms_layers = [];

var lyr_Dark_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ows.terrestris.de/osm-gray/service",
    attributions: ' ',
                              params: {
                                "LAYERS": "Dark",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Dark",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Dark_0, 0]);

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Escape_routesTEST_2 = new ol.format.GeoJSON();
var features_Escape_routesTEST_2 = format_Escape_routesTEST_2.readFeatures(json_Escape_routesTEST_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escape_routesTEST_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escape_routesTEST_2.addFeatures(features_Escape_routesTEST_2);
var lyr_Escape_routesTEST_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escape_routesTEST_2, 
                style: style_Escape_routesTEST_2,
                interactive: true,
    title: 'Escape_routes- TEST!<br />\
    <img src="styles/legend/Escape_routesTEST_2_0.png" /> Adolf Eichmann<br />\
    <img src="styles/legend/Escape_routesTEST_2_1.png" /> Alois Hudal<br />\
    <img src="styles/legend/Escape_routesTEST_2_2.png" /> Ante Pavelic<br />\
    <img src="styles/legend/Escape_routesTEST_2_3.png" /> Eduard Roschmann<br />\
    <img src="styles/legend/Escape_routesTEST_2_4.png" /> Erich Priebke<br />\
    <img src="styles/legend/Escape_routesTEST_2_5.png" /> Franz Stangl<br />\
    <img src="styles/legend/Escape_routesTEST_2_6.png" /> Gerhard Bohne<br />\
    <img src="styles/legend/Escape_routesTEST_2_7.png" /> Hans Ulrich Rudel<br />\
    <img src="styles/legend/Escape_routesTEST_2_8.png" /> Josef Mengele<br />\
    <img src="styles/legend/Escape_routesTEST_2_9.png" /> Josef Schwammberger<br />\
    <img src="styles/legend/Escape_routesTEST_2_10.png" /> Klaus Barbie<br />\
    <img src="styles/legend/Escape_routesTEST_2_11.png" /> Krunoslav Draganović<br />\
    <img src="styles/legend/Escape_routesTEST_2_12.png" /> <br />'
        });
var format_paths_github_3 = new ol.format.GeoJSON();
var features_paths_github_3 = format_paths_github_3.readFeatures(json_paths_github_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paths_github_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paths_github_3.addFeatures(features_paths_github_3);
var lyr_paths_github_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_paths_github_3, 
                style: style_paths_github_3,
                interactive: true,
    title: 'paths_github<br />\
    <img src="styles/legend/paths_github_3_0.png" /> Adolf Eichmann<br />\
    <img src="styles/legend/paths_github_3_1.png" /> Ante Pavelic<br />\
    <img src="styles/legend/paths_github_3_2.png" /> Eduard Roschmann<br />\
    <img src="styles/legend/paths_github_3_3.png" /> Erich Priebke<br />\
    <img src="styles/legend/paths_github_3_4.png" /> Franz Stangl<br />\
    <img src="styles/legend/paths_github_3_5.png" /> Gerhard Bohne<br />\
    <img src="styles/legend/paths_github_3_6.png" /> Hans Ulrich Rudel<br />\
    <img src="styles/legend/paths_github_3_7.png" /> Josef Mengele<br />\
    <img src="styles/legend/paths_github_3_8.png" /> Josef Schwammberger<br />\
    <img src="styles/legend/paths_github_3_9.png" /> Klaus Barbie<br />\
    <img src="styles/legend/paths_github_3_10.png" /> <br />'
        });

lyr_Dark_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Escape_routesTEST_2.setVisible(true);lyr_paths_github_3.setVisible(true);
var layersList = [lyr_Dark_0,lyr_GoogleSatellite_1,lyr_Escape_routesTEST_2,lyr_paths_github_3];
lyr_Escape_routesTEST_2.set('fieldAliases', {'Name': 'Name', 'criminal': 'criminal', 'Copy of numbered': 'Copy of numbered', });
lyr_paths_github_3.set('fieldAliases', {'criminal': 'criminal', 'begin': 'begin', 'end': 'end', });
lyr_Escape_routesTEST_2.set('fieldImages', {'Name': 'TextEdit', 'criminal': 'TextEdit', 'Copy of numbered': 'Range', });
lyr_paths_github_3.set('fieldImages', {'criminal': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Escape_routesTEST_2.set('fieldLabels', {'Name': 'header label', 'criminal': 'header label', 'Copy of numbered': 'no label', });
lyr_paths_github_3.set('fieldLabels', {'criminal': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_paths_github_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});