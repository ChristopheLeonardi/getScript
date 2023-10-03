/* 
Script Loader pour Syracuse
Christophe Leonardi 02/03/2023

L'objet [plugin]_infos recence les url des scripts javascript et des feuilles css et les charge au traver de la fonction loadScripts. 
La propriété tagId permet de conditionner le chargement des scripts aux pages contenant le plugin en lançant les scripts si l'élément est présent sur la page.

Les pages où sont utilisés les scripts sont énumérés dans le commentaire Références d'utilisation.

*/

const loadScripts = (objInfos) => {
    if ($(`${objInfos.tagId}`).length) {
        $.when(
            objInfos.css_url.map(url => {
                $('<link/>', { rel: 'stylesheet', type: 'text/css', href: url }).appendTo('head')
            }),
            objInfos.lib_url.map(url => {
                $.ajax({
                    async: true,
                    url: url,
                    type: "GET",
                    dataType: "script"
                });
            }),
            $.Deferred(function(deferred) {
                $(deferred.resolve);
            })
        ).done(function() {});
    }
}

/* 15-09-2023 CL Test nouvelle version de getScript */
/* const loadScripts = (objInfos) => {
    if ($(objInfos.tagId).length) {
      const cssPromises = objInfos.css_url.map(url => {
        return new Promise((resolve, reject) => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.type = 'text/css';
          link.href = url;
          link.onload = resolve;
          link.onerror = reject;
          document.head.appendChild(link);
        });
      });
  
      const jsPromises = objInfos.lib_url.map(url => {
        return new Promise((resolve, reject) => {
          $.ajax({
            async: true,
            url: url,
            type: "GET",
            dataType: "script",
            success: resolve,
            error: reject
          });
        });
      });
  
      // Combine CSS and JS promises and wait for all of them to finish
      Promise.all([...cssPromises, ...jsPromises])
        .then(() => {
          // All resources have been loaded successfully
        })
        .catch(error => {
          // Handle errors if any of the resources fail to load
          console.error('Error loading resources:', error);
        });
    }
  }; */

$(document).ready(function() {

    /* 7-07-2023 CL BEGIN slider a propos PAD */
    /* Références d'utilisation : Pages pad */
    const aProposSlider = {
        lib_url: [
            `/ui/plug-in/integration/libraries/accessible-slick/slick.min.js`,
            `/ui/skins/MEDIA/refonte-pad/js/refonte.js`,
        ],
        css_url: [
            `/ui/plug-in/integration/libraries/accessible-slick/accessible-slick-theme.min.css`,
            `/ui/plug-in/integration/libraries/accessible-slick/slick.min.css`,
            `/ui/skins/MEDIA/refonte-pad/css/refonte.css`,
        ],
        tagId: "#a-propos-slider"
    }
    loadScripts(aProposSlider)

    /* END slider a propos PAD */

    /* BEGIN fichiers de refonte PAD */
    /* Références d'utilisation : Pages pad */
    const refonte_2021_infos = {
        lib_url: [
            `/ui/skins/MEDIA/refonte-pad/js/refonte.js`,
        ],
        css_url: [
            `/ui/skins/MEDIA/refonte-pad/css/refonte.css`,
        ],
        tagId: "body.pad"
    }
    loadScripts(refonte_2021_infos)

    /* END fichiers de refonte PAD */




    /* BEGIN Carte Abonné PAD */
    /* Références d'utilisation : comment-ca-marche.aspx */
    const map_abonnes_pad_infos = {
        lib_url: [
            `/ui/plug-in/integration/libraries/d3js/d3.v7.min.js`,
            `/ui/plug-in/integration/libraries/leaflet-1.9.3/leaflet.js`,
            `/ui/plug-in/integration/libraries/Leaflet.markercluster-1.4.1/dist/leaflet.markercluster.js`,
            `/ui/plug-in/integration/carte-abonne-pad/js/functions.js`,
            `/ui/plug-in/integration/carte-abonne-pad/js/map.js`,
        ],
        css_url: [
            `/ui/plug-in/integration/libraries/leaflet-1.9.3/leaflet.css`,
            `/ui/plug-in/integration/libraries/Leaflet.markercluster-1.4.1/dist/MarkerCluster.css`,
            `/ui/plug-in/integration/libraries/Leaflet.markercluster-1.4.1/dist/MarkerCluster.Default.css`,
            `/ui/plug-in/integration/carte-abonne-pad/css/map.css`,
        ],
        tagId: "#map-abo-pad"
    }
    loadScripts(map_abonnes_pad_infos)

    /* END Carte Abonné PAD */


    /* BEGIN Carte Maurice Maréchal PAD */
    /* Références d'utilisation : lhomme-et-son-instrument.aspx */

    const map_marechal_infos = {
        lib_url: [
            `/ui/plug-in/integration/storymap/storymap.js`,
            `/ui/plug-in/integration/storymap/marechal.js`,
        ],
        css_url: [
            `/ui/plug-in/integration/storymap/storymap.css`,
        ],
        tagId: "#mapdiv"
    }
    loadScripts(map_marechal_infos)

    /* END Carte Maurice Maréchal PAD */


    /* BEGIN Carte maréchal violoncelle PAD */
    /* Références d'utilisation : le-violoncelle-instrument-de-fortune.aspx */

    const map_violoncelle_infos = {
        lib_url: [
            `/ui/plug-in/integration/storymap/storymap.js`,
            `/ui/plug-in/integration/storymap/violoncelle.js`,
        ],
        css_url: [
            `/ui/plug-in/integration/storymap/storymap.css`,
        ],
        tagId: "#mapdiv-b"
    }
    loadScripts(map_violoncelle_infos)

    /* END Carte Maurice Maréchal PAD */

    /* BEGIN script des mosaïques PAD */
    /* Références d'utilisation : https://docs.google.com/spreadsheets/d/1DtkxYk8JhH-51X_NQGVPcessJ7HVUb3gycZxKwOZv_w/edit#gid=0 */

    const mosaiques_infos = {
        lib_url: [
            `/ui/plug-in/integration/libraries/d3js/d3.v7.min.js`,
            `/ui/plug-in/integration/mozaicFilter/constructMozaic.js`,
            `/ui/plug-in/integration/mozaicFilter/custom-select.js`,
        ],
        css_url: [
            `/ui/plug-in/integration/mozaicFilter/mozaicFilter.css`,
        ],
        tagId: "#idMozaic"
    }
    loadScripts(mosaiques_infos)

    /* END script des mosaïques PAD  */

    /* BEGIN script carte musique du monde */
    /* Références d'utilisation : genre-musiques-du-monde.aspx */

    const musique_monde_infos = {
        lib_url: [
            `/ui/plug-in/integration/libraries/d3js/d3.v7.min.js`,
            `/ui/plug-in/integration/libraries/leaflet-1.9.3/leaflet.js`,
            `/ui/plug-in/integration/libraries/topojson/topojson.js`,
            `/ui/plug-in/integration/carte-musique/map.js`,

        ],
        css_url: [
            `/ui/plug-in/integration/libraries/leaflet-1.9.3/leaflet.css`,
            `/ui/plug-in/integration/carte-musique/map.css`,
        ],
        tagId: "#map_musique_monde"
    }
    loadScripts(musique_monde_infos)
    /* END script carte musique du monde  */

    /* BEGIN test script des mosaïques catalogue */
    /* Références d'utilisation : A effacer après test */

    const mosaiques_cat_infos = {
        lib_url: [
            `/ui/plug-in/integration/libraries/d3js/d3.v7.min.js`,

            `/ui/skins/MEDIA/refonte-pad/mosaiques-revues/integration/mozaicFilter/constructMozaic.js`,
            `/ui/skins/MEDIA/refonte-pad/mosaiques-revues/integration/mozaicFilter/custom-select.js`,
        ],
        css_url: [
            `/ui/skins/MEDIA/refonte-pad/mosaiques-revues/integration/mozaicFilter/mozaicFilter.css`,
        ],
        tagId: "#idMozaic-revue"
    }
    loadScripts(mosaiques_cat_infos)

    /* END test script des mosaïques catalogue */


    /* BEGIN test script des objets 3D du musee */
    /* Références d'utilisation : A effacer après test */

    const player_objet_3D = {
        lib_url: [
            `/ui/plug-in/integration/3d/js/three.js`,
            `/ui/plug-in/integration/3d/js/loaders/DDSLoader.js`,
            `/ui/plug-in/integration/3d/js/loaders/MTLLoader.js`,
            `/ui/plug-in/integration/3d/js/loaders/OBJLoader.js`,
            `/ui/plug-in/integration/3d/js/controls/TrackballControls.js`,
            `/ui/plug-in/integration/3d/js/Detector.js`,
             `/ui/plug-in/integration/3d/init.js`,
        ],
        tagId: "#container3d"
    }
    loadScripts(player_objet_3D)

    /* END test script des objets 3D du musee */


    /* BEGIN script carte des instruments du musée */
    /* Références d'utilisation : test-carte-musee (ATT MAJ) */

    const carte_instruments_musee = {
        lib_url: [
            `/ui/plug-in/integration/libraries/d3js/d3.v7.min.js`,
            `/ui/plug-in/integration/libraries/topojson/topojson.js`,
            `/ui/plug-in/integration/libraries/accessible-slick/slick.min.js`,
            `/ui/plug-in/integration/libraries/leaflet-1.9.3/leaflet.js`,
            `/ui/plug-in/integration/libraries/Leaflet.markercluster-1.4.1/dist/leaflet.markercluster.js`,
            `/ui/plug-in/integration/libraries/leaflet.fullscreen-master/Control.FullScreen.js`,
            `https://cdnjs.cloudflare.com/ajax/libs/pako/2.0.4/pako.min.js`,
            //`/ui/plug-in/integration/libraries/custom-scrollbar/custom_scrollbar.js`,
            `/ui/plug-in/integration/libraries/selectize/selectize.min.js`,

            `/ui/plug-in/integration/carte-instrument-musee/js/map.js`,
            //`/ui/plug-in/integration/carte-instrument-musee/js/map_config.js`,
            //`/ui/plug-in/integration/carte-instrument-musee/js/cartel.js`,
            //`/ui/plug-in/integration/carte-instrument-musee/js/filters.js`,
        ],
        css_url: [
            `/ui/plug-in/integration/libraries/accessible-slick/accessible-slick-theme.min.css`,
            `/ui/plug-in/integration/libraries/accessible-slick/slick.min.css`,
            `/ui/plug-in/integration/libraries/leaflet-1.9.3/leaflet.css`,
            `/ui/plug-in/integration/libraries/Leaflet.markercluster-1.4.1/dist/MarkerCluster.css`,
            `/ui/plug-in/integration/libraries/Leaflet.markercluster-1.4.1/dist/MarkerCluster.Default.css`,
            `/ui/plug-in/integration/libraries/leaflet.fullscreen-master/Control.FullScreen.css`,
            //`/ui/plug-in/integration/libraries/custom-scrollbar/custom_scrollbar.css`,
            `/ui/plug-in/integration/libraries/selectize/selectize.default.css`,
            `/ui/plug-in/integration/libraries/selectize/selectize.css`,

            `/ui/plug-in/integration/carte-instrument-musee/css/map.css`,
        ],
        tagId: "#mapMuseeContainer"
    }
    loadScripts(carte_instruments_musee)

    /* END script carte des instruments du musée */

    /* BEGIN script simple frise (slider) */
    /* Références d'utilisation : dev-frises-expo.aspx */

    const simple_frise = {
        lib_url: [
            `/ui/plug-in/integration/libraries/d3js/d3.v7.min.js`,
            `/ui/plug-in/integration/libraries/accessible-slick/slick.min.js`,
            //`/ui/plug-in/integration/frise-chronologique/simple-frise/js/functions.js`,
            `/ui/plug-in/integration/frise-chronologique/simple-frise/js/frise.js`,
        ],
        css_url: [
            `/ui/plug-in/integration/libraries/accessible-slick/accessible-slick-theme.min.css`,
            `/ui/plug-in/integration/libraries/accessible-slick/slick.min.css`,
            `/ui/plug-in/integration/frise-chronologique/simple-frise/css/frise.css`,

        ],
        tagId: "#friseSlider"
    }
    loadScripts(simple_frise)

    /* END script carte des instruments du musée */

    /* BEGIN script masonry frise (lenine & punk) */
    /* Références d'utilisation : dev-frises-expo.aspx */

    const masonry_frise = {
        lib_url: [
            `/ui/plug-in/integration/libraries/d3js/d3.v7.min.js`,
            `/ui/plug-in/integration/libraries/accessible-slick/slick.min.js`,
            //`/ui/plug-in/integration/frise-chronologique/simple-frise/js/functions.js`,
            //`/ui/plug-in/integration/frise-chronologique/masonry-frise/js/functions.js`,
            //`/ui/plug-in/integration/frise-chronologique/masonry-frise/js/masonry_timeline.js`,
            //`/ui/plug-in/integration/frise-chronologique/masonry-frise/js/htmlAudioButton.js`,
            `/ui/plug-in/integration/frise-chronologique/masonry-frise/js/frise.js`,
            `/ui/skins/MEDIA/refonte-pad/js/refonte.js`,
        ],
        css_url: [
            `/ui/plug-in/integration/libraries/accessible-slick/accessible-slick-theme.min.css`,
            `/ui/plug-in/integration/libraries/accessible-slick/slick.min.css`,
            `/ui/plug-in/integration/frise-chronologique/masonry-frise/css/frise.css`,
            `/ui/skins/MEDIA/refonte-pad/css/refonte.css`,
        ], 
        tagId: "#friseMasonry"
    }
    loadScripts(masonry_frise)

    /* END script masonry frise (lenine & punk) */

})