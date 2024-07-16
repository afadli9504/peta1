var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_9504_slsfinal_sls_9504_2023_1_1 = new ol.format.GeoJSON();
var features_9504_slsfinal_sls_9504_2023_1_1 = format_9504_slsfinal_sls_9504_2023_1_1.readFeatures(json_9504_slsfinal_sls_9504_2023_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9504_slsfinal_sls_9504_2023_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9504_slsfinal_sls_9504_2023_1_1.addFeatures(features_9504_slsfinal_sls_9504_2023_1_1);
var lyr_9504_slsfinal_sls_9504_2023_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9504_slsfinal_sls_9504_2023_1_1, 
                style: style_9504_slsfinal_sls_9504_2023_1_1,
                popuplayertitle: "9504_sls — final_sls_9504_2023_1",
                interactive: true,
                title: '<img src="styles/legend/9504_slsfinal_sls_9504_2023_1_1.png" /> 9504_sls — final_sls_9504_2023_1'
            });
var format_9504_bsfinal_bs2020_9504_2023_1_2 = new ol.format.GeoJSON();
var features_9504_bsfinal_bs2020_9504_2023_1_2 = format_9504_bsfinal_bs2020_9504_2023_1_2.readFeatures(json_9504_bsfinal_bs2020_9504_2023_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9504_bsfinal_bs2020_9504_2023_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9504_bsfinal_bs2020_9504_2023_1_2.addFeatures(features_9504_bsfinal_bs2020_9504_2023_1_2);
var lyr_9504_bsfinal_bs2020_9504_2023_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9504_bsfinal_bs2020_9504_2023_1_2, 
                style: style_9504_bsfinal_bs2020_9504_2023_1_2,
                popuplayertitle: "9504_bs — final_bs2020_9504_2023_1",
                interactive: true,
                title: '9504_bs — final_bs2020_9504_2023_1'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_9504_slsfinal_sls_9504_2023_1_1.setVisible(true);lyr_9504_bsfinal_bs2020_9504_2023_1_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_9504_slsfinal_sls_9504_2023_1_1,lyr_9504_bsfinal_bs2020_9504_2023_1_2];
lyr_9504_slsfinal_sls_9504_2023_1_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'kdsls': 'kdsls', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'nmsls': 'nmsls', 'idsls': 'idsls', 'idkec': 'idkec', 'iddesa': 'iddesa', 'kk': 'kk', 'bstt': 'bstt', 'luas': 'luas', 'bsbtt': 'bsbtt', 'bstt_k': 'bstt_k', 'khusus': 'khusus', 'muatan': 'muatan', 'posisi': 'posisi', 'rw_dki': 'rw_dki', 'segmen': 'segmen', 'sumber': 'sumber', 'dom_sls': 'dom_sls', 'periode': 'periode', 'tingkat': 'tingkat', 'nm_gedung': 'nm_gedung', 'wil_campur': 'wil_campur', 'layer': 'layer', 'path': 'path', });
lyr_9504_bsfinal_bs2020_9504_2023_1_2.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'kk': 'kk', 'gid': 'gid', 'sbs': 'sbs', 'base': 'base', 'bstt': 'bstt', 'idbs': 'idbs', 'kdbs': 'kdbs', 'luas': 'luas', 'bsbtt': 'bsbtt', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'bstt_k': 'bstt_k', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'khusus': 'khusus', 'muatan': 'muatan', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'posisi': 'posisi', 'rw_dki': 'rw_dki', 'segmen': 'segmen', 'sumber': 'sumber', 'dom_sls': 'dom_sls', 'dominan': 'dominan', 'periode': 'periode', 'tingkat': 'tingkat', 'nm_gedung': 'nm_gedung', 'iddesa': 'iddesa', 'idkec': 'idkec', });
lyr_9504_slsfinal_sls_9504_2023_1_1.set('fieldImages', {'fid': 'Range', 'cat': 'Range', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'kdsls': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'nmsls': 'TextEdit', 'idsls': 'TextEdit', 'idkec': 'TextEdit', 'iddesa': 'TextEdit', 'kk': 'TextEdit', 'bstt': 'TextEdit', 'luas': 'TextEdit', 'bsbtt': 'TextEdit', 'bstt_k': 'TextEdit', 'khusus': 'TextEdit', 'muatan': 'TextEdit', 'posisi': 'TextEdit', 'rw_dki': 'TextEdit', 'segmen': 'TextEdit', 'sumber': 'TextEdit', 'dom_sls': 'TextEdit', 'periode': 'TextEdit', 'tingkat': 'TextEdit', 'nm_gedung': 'TextEdit', 'wil_campur': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_9504_bsfinal_bs2020_9504_2023_1_2.set('fieldImages', {'fid': 'Range', 'cat': 'Range', 'kk': 'Range', 'gid': 'Range', 'sbs': 'TextEdit', 'base': 'TextEdit', 'bstt': 'Range', 'idbs': 'TextEdit', 'kdbs': 'TextEdit', 'luas': 'TextEdit', 'bsbtt': 'Range', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'bstt_k': 'Range', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'khusus': 'TextEdit', 'muatan': 'Range', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'posisi': 'TextEdit', 'rw_dki': 'TextEdit', 'segmen': 'TextEdit', 'sumber': 'TextEdit', 'dom_sls': 'TextEdit', 'dominan': 'TextEdit', 'periode': 'TextEdit', 'tingkat': 'Range', 'nm_gedung': 'TextEdit', 'iddesa': 'TextEdit', 'idkec': 'TextEdit', });
lyr_9504_slsfinal_sls_9504_2023_1_1.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kddesa': 'no label', 'kdsls': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmdesa': 'no label', 'nmsls': 'no label', 'idsls': 'no label', 'idkec': 'no label', 'iddesa': 'no label', 'kk': 'no label', 'bstt': 'no label', 'luas': 'no label', 'bsbtt': 'no label', 'bstt_k': 'no label', 'khusus': 'no label', 'muatan': 'no label', 'posisi': 'no label', 'rw_dki': 'no label', 'segmen': 'no label', 'sumber': 'no label', 'dom_sls': 'no label', 'periode': 'no label', 'tingkat': 'no label', 'nm_gedung': 'no label', 'wil_campur': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_9504_bsfinal_bs2020_9504_2023_1_2.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'kk': 'no label', 'gid': 'no label', 'sbs': 'no label', 'base': 'no label', 'bstt': 'no label', 'idbs': 'no label', 'kdbs': 'no label', 'luas': 'no label', 'bsbtt': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdsls': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmsls': 'no label', 'bstt_k': 'no label', 'kddesa': 'no label', 'kdprov': 'no label', 'khusus': 'no label', 'muatan': 'no label', 'nmdesa': 'no label', 'nmprov': 'no label', 'posisi': 'no label', 'rw_dki': 'no label', 'segmen': 'no label', 'sumber': 'no label', 'dom_sls': 'no label', 'dominan': 'no label', 'periode': 'no label', 'tingkat': 'no label', 'nm_gedung': 'no label', 'iddesa': 'no label', 'idkec': 'no label', });
lyr_9504_bsfinal_bs2020_9504_2023_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});