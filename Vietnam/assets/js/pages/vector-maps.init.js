"use strict";
! function(a) {
    function n() {}
    n.prototype.init = function() {
            a("#world-map-markers").vectorMap({
                    map: "world_mill_en",
                    normalizeFunction: "polynomial",
                    hoverOpacity: .7,
                    hoverColor: !1,
                    regionStyle: {
                        initial: { fill: "#d4dadd" }
                    },

                    backgroundColor: "transparent",
                    markers: [
                        { latLng: [16.35, 112.46], name: 'Hoang xa - Vietnam' },
                        { latLng: [9.35, 113.46], name: 'Truong xa - Vietnam' },
                        { latLng: [41.9, 12.45], name: "Vatican City" },
                        { latLng: [43.73, 7.41], name: "Monaco" },
                        { latLng: [-.52, 166.93], name: "Nauru" },
                        { latLng: [-8.51, 179.21], name: "Tuvalu" },
                        { latLng: [43.93, 12.46], name: "San Marino" },
                        { latLng: [47.14, 9.52], name: "Liechtenstein" },
                        { latLng: [7.11, 171.06], name: "Marshall Islands" },
                        { latLng: [17.3, -62.73], name: "Saint Kitts and Nevis" },
                        { latLng: [3.2, 73.22], name: "Maldives" },
                        { latLng: [35.88, 14.5], name: "Malta" },
                        { latLng: [12.05, -61.75], name: "Grenada" },
                        { latLng: [13.16, -61.23], name: "Saint Vincent and the Grenadines" },
                        { latLng: [13.16, -59.55], name: "Barbados" },
                        { latLng: [17.11, -61.85], name: "Antigua and Barbuda" },
                        { latLng: [-4.61, 55.45], name: "Seychelles" },
                        { latLng: [7.35, 134.46], name: "Palau" },
                        { latLng: [42.5, 1.51], name: "Andorra" },
                        { latLng: [14.01, -60.98], name: "Saint Lucia" },
                        { latLng: [6.91, 158.18], name: "Federated States of Micronesia" },
                        { latLng: [1.3, 103.8], name: "Singapore" },
                        { latLng: [.33, 6.73], name: "SÃ£o TomÃ© and PrÃ­ncipe" }
                    ]
                }),
                a("#usa-vectormap").vectorMap({
                    map: "us_merc_en",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: "#4fc6e1"
                        }
                    }
                }),
                a("#india-vectormap").vectorMap({
                    map: "in_mill_en",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: "#f7b84b"
                        }
                    }
                }),
                a("#australia-vectormap").vectorMap({
                    map: "au_mill_en",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: { fill: "#1abc9c" }
                    }
                }),
                a("#chicago-vectormap").vectorMap({
                    map: "us-il-chicago_mill_en",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: "#6658dd"
                        }
                    }
                }),
                a("#uk-vectormap").vectorMap({
                    map: "uk_mill_en",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: "#4a81d4"
                        }
                    }
                }),
                a("#canada-vectormap").vectorMap({
                    map: "ca_lcc_en",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: "#f1556c"
                        }
                    }
                }),
                a("#europe-vectormap").vectorMap({
                    map: "europe_mill_en",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: "#727cf5"
                        }
                    }
                }),
                a("#france-vectormap").vectorMap({
                    map: "fr_merc_en",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: "#0acf97"
                        }
                    }
                }),
                a("#spain-vectormap").vectorMap({
                    map: "es_merc",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: "#39afd1"
                        }
                    }
                }),
                a("#spain2-vectormap").vectorMap({
                    map: "es_mill",
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: "#6c757d"
                        }
                    }
                })

        },
        a.VectorMap = new n, a.VectorMap.Constructor = n
}(window.jQuery), window.jQuery.VectorMap.init();