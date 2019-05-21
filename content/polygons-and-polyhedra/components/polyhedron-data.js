// =============================================================================
// Polyhedron Component Data
// (c) Mathigon
// =============================================================================


// Data from http://www.georgehart.com/virtual-polyhedra/vp.html
// and https://github.com/SirFizX/SirFizX.github.io/blob/master/js/polyhedra.js

export const PolyhedronData = {

  // ---------------------------------------------------------------------------
  // Platonic Solids

  Tetrahedron : {
    "vertex":[[0,0,1.732051],[1.632993,0,-0.5773503],[-0.8164966,1.414214,-0.5773503],[-0.8164966,-1.414214,-0.5773503]],
    "edge":[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],
    "face":[[0,1,2],[0,2,3],[0,3,1],[1,3,2]]
  },

  Cube: {
    "vertex":[[0,0,1.224745],[1.154701,0,0.4082483],[-0.5773503,1,0.4082483],[-0.5773503,-1,0.4082483],[0.5773503,1,-0.4082483],[0.5773503,-1,-0.4082483],[-1.154701,0,-0.4082483],[0,0,-1.224745]],
    "edge":[[0,1],[0,2],[0,3],[1,4],[1,5],[2,4],[2,6],[3,5],[3,6],[4,7],[5,7],[6,7]],
    "face":[[0,1,4,2],[0,2,6,3],[0,3,5,1],[1,5,7,4],[2,4,7,6],[3,6,7,5]]
  },

  Octahedron: {
    "vertex":[[0,0,1.414214],[1.414214,0,0],[0,1.414214,0],[-1.414214,0,0],[0,-1.414214,0],[0,0,-1.414214]],
    "edge":[[0,1],[0,2],[0,3],[0,4],[1,2],[1,4],[1,5],[2,3],[2,5],[3,4],[3,5],[4,5]],
    "face":[[0,1,2],[0,2,3],[0,3,4],[0,4,1],[1,4,5],[1,5,2],[2,5,3],[3,5,4]]
  },

  Dodecahedron: {
    "vertex":[[0,0,1.070466],[0.7136442,0,0.7978784],[-0.3568221,0.618034,0.7978784],[-0.3568221,-0.618034,0.7978784],[0.7978784,0.618034,0.3568221],[0.7978784,-0.618034,0.3568221],[-0.9341724,0.381966,0.3568221],[0.1362939,1,0.3568221],[0.1362939,-1,0.3568221],[-0.9341724,-0.381966,0.3568221],[0.9341724,0.381966,-0.3568221],[0.9341724,-0.381966,-0.3568221],[-0.7978784,0.618034,-0.3568221],[-0.1362939,1,-0.3568221],[-0.1362939,-1,-0.3568221],[-0.7978784,-0.618034,-0.3568221],[0.3568221,0.618034,-0.7978784],[0.3568221,-0.618034,-0.7978784],[-0.7136442,0,-0.7978784],[0,0,-1.070466]],
    "edge":[[0,1],[0,2],[0,3],[1,4],[1,5],[2,6],[2,7],[3,8],[3,9],[4,7],[4,10],[5,8],[5,11],[6,9],[6,12],[7,13],[8,14],[9,15],[10,11],[10,16],[11,17],[12,13],[12,18],[13,16],[14,15],[14,17],[15,18],[16,19],[17,19],[18,19]],
    "face":[[0,1,4,7,2],[0,2,6,9,3],[0,3,8,5,1],[1,5,11,10,4],[2,7,13,12,6],[3,9,15,14,8],[4,10,16,13,7],[5,8,14,17,11],[6,12,18,15,9],[10,11,17,19,16],[12,13,16,19,18],[14,15,18,19,17]]
  },

  Icosahedron : {
    "vertex":[[0,0,1.175571],[1.051462,0,0.5257311],[0.3249197,1,0.5257311],[-0.8506508,0.618034,0.5257311],[-0.8506508,-0.618034,0.5257311],[0.3249197,-1,0.5257311],[0.8506508,0.618034,-0.5257311],[0.8506508,-0.618034,-0.5257311],[-0.3249197,1,-0.5257311],[-1.051462,0,-0.5257311],[-0.3249197,-1,-0.5257311],[0,0,-1.175571]],
    "edge":[[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[1,5],[1,6],[1,7],[2,3],[2,6],[2,8],[3,4],[3,8],[3,9],[4,5],[4,9],[4,10],[5,7],[5,10],[6,7],[6,8],[6,11],[7,10],[7,11],[8,9],[8,11],[9,10],[9,11],[10,11]],
    "face":[[0,1,2],[0,2,3],[0,3,4],[0,4,5],[0,5,1],[1,5,7],[1,7,6],[1,6,2],[2,6,8],[2,8,3],[3,8,9],[3,9,4],[4,9,10],[4,10,5],[5,10,7],[6,7,11],[6,11,8],[7,10,11],[8,11,9],[9,11,10]]
  },


  // ---------------------------------------------------------------------------
  // Archimedean Solids

  TruncatedTetrahedron : {
    "vertex":[[0,0,1.105542],[0.8528029,0,0.7035265],[-0.7106691,0.4714045,0.7035265],[0.3316456,-0.7856742,0.7035265],[0.9949367,0.4714045,-0.1005038],[-1.089693,0.1571348,-0.1005038],[-0.5685352,0.942809,-0.1005038],[-0.04737794,-1.099944,-0.1005038],[0.6159132,0.1571348,-0.904534],[0.2842676,0.942809,-0.5025189],[-0.758047,-0.6285394,-0.5025189],[0.09475587,-0.6285394,-0.904534]],
    "edge":[[0,3],[3,1],[1,0],[2,6],[6,5],[5,2],[4,8],[8,9],[9,4],[7,10],[10,11],[11,7],[1,4],[9,6],[2,0],[5,10],[7,3],[11,8]],
    "face":[[0,3,1],[2,6,5],[4,8,9],[7,10,11],[0,1,4,9,6,2],[0,2,5,10,7,3],[1,3,7,11,8,4],[5,6,9,8,11,10]]},

  TruncatedCube : {
    "vertex":[[0,0,1.042011],[0.5621693,0,0.8773552],[-0.4798415,0.2928932,0.8773552],[0.2569714,-0.5,0.8773552],[0.8773552,0.2928932,0.4798415],[-0.9014684,0.2071068,0.4798415],[-0.5962706,0.7071068,0.4798415],[0.1405423,-0.9142136,0.4798415],[1.017898,0.2071068,-0.08232778],[0.7609261,0.7071068,0.08232778],[-1.017898,-0.2071068,0.08232778],[-0.2810846,1,0.08232778],[-0.2810846,-1,0.08232778],[0.2810846,-1,-0.08232778],[0.9014684,-0.2071068,-0.4798415],[0.2810846,1,-0.08232778],[-0.7609261,-0.7071068,-0.08232778],[-0.8773552,-0.2928932,-0.4798415],[-0.1405423,0.9142136,-0.4798415],[0.5962706,-0.7071068,-0.4798415],[0.4798415,-0.2928932,-0.8773552],[-0.5621693,0,-0.8773552],[-0.2569714,0.5,-0.8773552],[0,0,-1.042011]],
    "edge":[[0,3],[3,1],[1,0],[2,6],[6,5],[5,2],[4,8],[8,9],[9,4],[7,12],[12,13],[13,7],[10,17],[17,16],[16,10],[11,15],[15,18],[18,11],[14,19],[19,20],[20,14],[21,22],[22,23],[23,21],[1,4],[9,15],[11,6],[2,0],[5,10],[16,12],[7,3],[13,19],[14,8],[18,22],[21,17],[20,23]],
    "face":[[0,3,1],[2,6,5],[4,8,9],[7,12,13],[10,17,16],[11,15,18],[14,19,20],[21,22,23],[0,1,4,9,15,11,6,2],[0,2,5,10,16,12,7,3],[1,3,7,13,19,14,8,4],[5,6,11,18,22,21,17,10],[8,14,20,23,22,18,15,9],[12,16,17,21,23,20,19,13]]},

  TruncatedOctahedron : {
    "vertex":[[0,0,1.054093],[0.6324555,0,0.843274],[-0.421637,0.4714045,0.843274],[-0.07027284,-0.6285394,0.843274],[0.843274,0.4714045,0.421637],[0.5621827,-0.6285394,0.6324555],[-0.9135469,0.3142697,0.421637],[-0.2108185,0.942809,0.421637],[-0.5621827,-0.7856742,0.421637],[0.9838197,0.3142697,-0.2108185],[0.421637,0.942809,0.2108185],[0.7027284,-0.7856742,0],[-0.7027284,0.7856742,0],[-0.9838197,-0.3142697,0.2108185],[-0.421637,-0.942809,-0.2108185],[0.5621827,0.7856742,-0.421637],[0.9135469,-0.3142697,-0.421637],[0.2108185,-0.942809,-0.421637],[-0.5621827,0.6285394,-0.6324555],[-0.843274,-0.4714045,-0.421637],[0.07027284,0.6285394,-0.843274],[0.421637,-0.4714045,-0.843274],[-0.6324555,0,-0.843274],[0,0,-1.054093]],
    "edge":[[0,3],[3,5],[5,1],[1,0],[2,7],[7,12],[12,6],[6,2],[4,9],[9,15],[15,10],[10,4],[8,13],[13,19],[19,14],[14,8],[11,17],[17,21],[21,16],[16,11],[18,20],[20,23],[23,22],[22,18],[1,4],[10,7],[2,0],[6,13],[8,3],[5,11],[16,9],[14,17],[12,18],[22,19],[15,20],[21,23]],
    "face":[[0,3,5,1],[2,7,12,6],[4,9,15,10],[8,13,19,14],[11,17,21,16],[18,20,23,22],[0,1,4,10,7,2],[0,2,6,13,8,3],[1,5,11,16,9,4],[3,8,14,17,11,5],[6,12,18,22,19,13],[7,10,15,20,18,12],[9,16,21,23,20,15],[14,19,22,23,21,17]]},

  TruncatedDodecahedron : {
    "vertex":[[0,0,1.014485],[0.3367628,0,0.9569589],[-0.2902233,0.1708204,0.9569589],[0.1634681,-0.2944272,0.9569589],[0.5914332,0.1708204,0.806354],[-0.5963465,0.1527864,0.806354],[-0.4230517,0.4472136,0.806354],[0.1377417,-0.6,0.806354],[0.8302037,0.1527864,0.5626702],[0.6667356,0.4472136,0.6201961],[-0.8014407,-0.0472136,0.6201961],[-0.3477493,0.7236068,0.6201961],[-0.06735256,-0.8,0.6201961],[0.2694102,-0.8,0.5626702],[0.9618722,-0.0472136,0.3189863],[0.5339072,0.7236068,0.4695912],[-0.8271671,-0.3527864,0.4695912],[-0.9599955,-0.0763932,0.3189863],[-0.3992021,0.8763932,0.3189863],[-0.09307895,0.8944272,0.4695912],[-0.3734757,-0.818034,0.4695912],[0.5081808,-0.818034,0.3189863],[0.9361459,-0.3527864,0.1683814],[1.011448,-0.0763932,-0.0177765],[0.4824544,0.8763932,0.1683814],[0.2436839,0.8944272,0.4120653],[-0.663699,-0.6472136,0.4120653],[-1.011448,0.0763932,0.0177765],[-0.5577569,0.8472136,0.0177765],[-0.5320305,-0.8472136,0.1683814],[0.5577569,-0.8472136,-0.0177765],[0.7628511,-0.6472136,0.1683814],[0.9599955,0.0763932,-0.3189863],[0.5320305,0.8472136,-0.1683814],[-0.9618722,0.0472136,-0.3189863],[-0.9361459,0.3527864,-0.1683814],[-0.7628511,0.6472136,-0.1683814],[-0.5081808,0.818034,-0.3189863],[-0.4824544,-0.8763932,-0.1683814],[0.3992021,-0.8763932,-0.3189863],[0.8014407,0.0472136,-0.6201961],[0.8271671,0.3527864,-0.4695912],[0.663699,0.6472136,-0.4120653],[0.3734757,0.818034,-0.4695912],[-0.8302037,-0.1527864,-0.5626702],[-0.2694102,0.8,-0.5626702],[-0.5339072,-0.7236068,-0.4695912],[-0.2436839,-0.8944272,-0.4120653],[0.09307895,-0.8944272,-0.4695912],[0.3477493,-0.7236068,-0.6201961],[0.5963465,-0.1527864,-0.806354],[0.06735256,0.8,-0.6201961],[-0.6667356,-0.4472136,-0.6201961],[-0.5914332,-0.1708204,-0.806354],[-0.1377417,0.6,-0.806354],[0.4230517,-0.4472136,-0.806354],[0.2902233,-0.1708204,-0.9569589],[-0.3367628,0,-0.9569589],[-0.1634681,0.2944272,-0.9569589],[0,0,-1.014485]],
    "edge":[[0,3],[3,1],[1,0],[2,6],[6,5],[5,2],[4,8],[8,9],[9,4],[7,12],[12,13],[13,7],[10,17],[17,16],[16,10],[11,19],[19,18],[18,11],[14,22],[22,23],[23,14],[15,24],[24,25],[25,15],[20,26],[26,29],[29,20],[21,30],[30,31],[31,21],[27,35],[35,34],[34,27],[28,37],[37,36],[36,28],[32,40],[40,41],[41,32],[33,42],[42,43],[43,33],[38,46],[46,47],[47,38],[39,48],[48,49],[49,39],[44,53],[53,52],[52,44],[45,51],[51,54],[54,45],[50,55],[55,56],[56,50],[57,58],[58,59],[59,57],[1,4],[9,15],[25,19],[11,6],[2,0],[5,10],[16,26],[20,12],[7,3],[13,21],[31,22],[14,8],[18,28],[36,35],[27,17],[23,32],[41,42],[33,24],[29,38],[47,48],[39,30],[34,44],[52,46],[43,51],[45,37],[49,55],[50,40],[54,58],[57,53],[56,59]],
    "face":[[0,3,1],[2,6,5],[4,8,9],[7,12,13],[10,17,16],[11,19,18],[14,22,23],[15,24,25],[20,26,29],[21,30,31],[27,35,34],[28,37,36],[32,40,41],[33,42,43],[38,46,47],[39,48,49],[44,53,52],[45,51,54],[50,55,56],[57,58,59],[0,1,4,9,15,25,19,11,6,2],[0,2,5,10,16,26,20,12,7,3],[1,3,7,13,21,31,22,14,8,4],[5,6,11,18,28,36,35,27,17,10],[8,14,23,32,41,42,33,24,15,9],[12,20,29,38,47,48,39,30,21,13],[16,17,27,34,44,52,46,38,29,26],[18,19,25,24,33,43,51,45,37,28],[22,31,30,39,49,55,50,40,32,23],[34,35,36,37,45,54,58,57,53,44],[40,50,56,59,58,54,51,43,42,41],[46,52,53,57,59,56,55,49,48,47]]},

  TruncatedIcosahedron : {
    "vertex":[[0,0,1.021],[0.4035482,0,0.9378643],[-0.2274644,0.3333333,0.9378643],[-0.1471226,-0.375774,0.9378643],[0.579632,0.3333333,0.7715933],[0.5058321,-0.375774,0.8033483],[-0.6020514,0.2908927,0.7715933],[-0.05138057,0.6666667,0.7715933],[0.1654988,-0.6080151,0.8033483],[-0.5217096,-0.4182147,0.7715933],[0.8579998,0.2908927,0.4708062],[0.3521676,0.6666667,0.6884578],[0.7841999,-0.4182147,0.5025612],[-0.657475,0.5979962,0.5025612],[-0.749174,-0.08488134,0.6884578],[-0.3171418,0.8302373,0.5025612],[0.1035333,-0.8826969,0.5025612],[-0.5836751,-0.6928964,0.4708062],[0.8025761,0.5979962,0.2017741],[0.9602837,-0.08488134,0.3362902],[0.4899547,0.8302373,0.3362902],[0.7222343,-0.6928964,0.2017741],[-0.8600213,0.5293258,0.1503935],[-0.9517203,-0.1535518,0.3362902],[-0.1793548,0.993808,0.1503935],[0.381901,-0.9251375,0.2017741],[-0.2710537,-0.9251375,0.3362902],[-0.8494363,-0.5293258,0.2017741],[0.8494363,0.5293258,-0.2017741],[1.007144,-0.1535518,-0.06725804],[0.2241935,0.993808,0.06725804],[0.8600213,-0.5293258,-0.1503935],[-0.7222343,0.6928964,-0.2017741],[-1.007144,0.1535518,0.06725804],[-0.381901,0.9251375,-0.2017741],[0.1793548,-0.993808,-0.1503935],[-0.2241935,-0.993808,-0.06725804],[-0.8025761,-0.5979962,-0.2017741],[0.5836751,0.6928964,-0.4708062],[0.9517203,0.1535518,-0.3362902],[0.2710537,0.9251375,-0.3362902],[0.657475,-0.5979962,-0.5025612],[-0.7841999,0.4182147,-0.5025612],[-0.9602837,0.08488134,-0.3362902],[-0.1035333,0.8826969,-0.5025612],[0.3171418,-0.8302373,-0.5025612],[-0.4899547,-0.8302373,-0.3362902],[-0.8579998,-0.2908927,-0.4708062],[0.5217096,0.4182147,-0.7715933],[0.749174,0.08488134,-0.6884578],[0.6020514,-0.2908927,-0.7715933],[-0.5058321,0.375774,-0.8033483],[-0.1654988,0.6080151,-0.8033483],[0.05138057,-0.6666667,-0.7715933],[-0.3521676,-0.6666667,-0.6884578],[-0.579632,-0.3333333,-0.7715933],[0.1471226,0.375774,-0.9378643],[0.2274644,-0.3333333,-0.9378643],[-0.4035482,0,-0.9378643],[0,0,-1.021]],
    "edge":[[0,3],[3,8],[8,5],[5,1],[1,0],[2,7],[7,15],[15,13],[13,6],[6,2],[4,10],[10,18],[18,20],[20,11],[11,4],[9,14],[14,23],[23,27],[27,17],[17,9],[12,21],[21,31],[31,29],[29,19],[19,12],[16,26],[26,36],[36,35],[35,25],[25,16],[22,32],[32,42],[42,43],[43,33],[33,22],[24,30],[30,40],[40,44],[44,34],[34,24],[28,39],[39,49],[49,48],[48,38],[38,28],[37,47],[47,55],[55,54],[54,46],[46,37],[41,45],[45,53],[53,57],[57,50],[50,41],[51,52],[52,56],[56,59],[59,58],[58,51],[1,4],[11,7],[2,0],[6,14],[9,3],[5,12],[19,10],[17,26],[16,8],[25,21],[13,22],[33,23],[20,30],[24,15],[29,39],[28,18],[34,32],[27,37],[46,36],[38,40],[35,45],[41,31],[43,47],[50,49],[44,52],[51,42],[54,53],[48,56],[58,55],[57,59]],
    "face":[[0,3,8,5,1],[2,7,15,13,6],[4,10,18,20,11],[9,14,23,27,17],[12,21,31,29,19],[16,26,36,35,25],[22,32,42,43,33],[24,30,40,44,34],[28,39,49,48,38],[37,47,55,54,46],[41,45,53,57,50],[51,52,56,59,58],[0,1,4,11,7,2],[0,2,6,14,9,3],[1,5,12,19,10,4],[3,9,17,26,16,8],[5,8,16,25,21,12],[6,13,22,33,23,14],[7,11,20,30,24,15],[10,19,29,39,28,18],[13,15,24,34,32,22],[17,27,37,46,36,26],[18,28,38,40,30,20],[21,25,35,45,41,31],[23,33,43,47,37,27],[29,31,41,50,49,39],[32,34,44,52,51,42],[35,36,46,54,53,45],[38,48,56,52,44,40],[42,51,58,55,47,43],[48,49,50,57,59,56],[53,54,55,58,59,57]]},

  Cuboctahedron : {
    "vertex":[[0,0,1.154701],[1,0,0.5773503],[0.3333333,0.942809,0.5773503],[-1,0,0.5773503],[-0.3333333,-0.942809,0.5773503],[1,0,-0.5773503],[0.6666667,-0.942809,0],[-0.6666667,0.942809,0],[0.3333333,0.942809,-0.5773503],[-1,0,-0.5773503],[-0.3333333,-0.942809,-0.5773503],[0,0,-1.154701]],
    "edge":[[0,1],[1,2],[2,0],[0,3],[3,4],[4,0],[1,6],[6,5],[5,1],[2,8],[8,7],[7,2],[3,7],[7,9],[9,3],[4,10],[10,6],[6,4],[5,11],[11,8],[8,5],[9,11],[11,10],[10,9]],
    "face":[[0,1,2],[0,3,4],[1,6,5],[2,8,7],[3,7,9],[4,10,6],[5,11,8],[9,11,10],[0,2,7,3],[0,4,6,1],[1,5,8,2],[3,9,10,4],[5,6,10,11],[7,8,11,9]]},

  TruncatedCuboctahedron : {
    "vertex":[[0,0,1.024117],[0.4314788,0,0.928785],[-0.02106287,0.4309644,0.928785],[-0.3410582,-0.2642977,0.928785],[0.4104159,0.4309644,0.833453],[0.7006238,-0.2642977,0.6986333],[-0.3831839,0.5976311,0.7381211],[-0.3919084,-0.6380712,0.6986333],[-0.7031792,-0.09763107,0.7381211],[0.6584981,0.5976311,0.5079694],[0.6497736,-0.6380712,0.4684816],[0.948706,-0.09763107,0.3731496],[-0.4638216,0.8333333,0.3731496],[-0.7242421,0.3333333,0.6427891],[-0.7540295,-0.4714045,0.5079694],[-0.1227634,-0.9023689,0.4684816],[0.5778604,0.8333333,0.1429979],[0.9276431,0.3333333,0.2778177],[0.8978557,-0.4714045,0.1429979],[0.3087154,-0.9023689,0.3731496],[-0.8048797,0.5690356,0.2778177],[-0.2157394,1,0.04766598],[-0.8470055,-0.5690356,0.08715377],[-0.2157394,-1,0.04766598],[0.8470055,0.5690356,-0.08715377],[0.2157394,1,-0.04766598],[0.8048797,-0.5690356,-0.2778177],[0.2157394,-1,-0.04766598],[-0.8978557,0.4714045,-0.1429979],[-0.3087154,0.9023689,-0.3731496],[-0.9276431,-0.3333333,-0.2778177],[-0.5778604,-0.8333333,-0.1429979],[0.7540295,0.4714045,-0.5079694],[0.1227634,0.9023689,-0.4684816],[0.7242421,-0.3333333,-0.6427891],[0.4638216,-0.8333333,-0.3731496],[-0.948706,0.09763107,-0.3731496],[-0.6497736,0.6380712,-0.4684816],[-0.6584981,-0.5976311,-0.5079694],[0.7031792,0.09763107,-0.7381211],[0.3919084,0.6380712,-0.6986333],[0.3831839,-0.5976311,-0.7381211],[-0.7006238,0.2642977,-0.6986333],[-0.4104159,-0.4309644,-0.833453],[0.3410582,0.2642977,-0.928785],[0.02106287,-0.4309644,-0.928785],[-0.4314788,0,-0.928785],[0,0,-1.024117]],
    "edge":[[0,1],[1,4],[4,2],[2,0],[3,8],[8,14],[14,7],[7,3],[5,10],[10,18],[18,11],[11,5],[6,12],[12,20],[20,13],[13,6],[9,17],[17,24],[24,16],[16,9],[15,23],[23,27],[27,19],[19,15],[21,25],[25,33],[33,29],[29,21],[22,30],[30,38],[38,31],[31,22],[26,35],[35,41],[41,34],[34,26],[28,37],[37,42],[42,36],[36,28],[32,39],[39,44],[44,40],[40,32],[43,46],[46,47],[47,45],[45,43],[2,6],[13,8],[3,0],[1,5],[11,17],[9,4],[14,22],[31,23],[15,7],[10,19],[27,35],[26,18],[12,21],[29,37],[28,20],[24,32],[40,33],[25,16],[30,36],[42,46],[43,38],[41,45],[47,44],[39,34]],
    "face":[[0,1,4,2],[3,8,14,7],[5,10,18,11],[6,12,20,13],[9,17,24,16],[15,23,27,19],[21,25,33,29],[22,30,38,31],[26,35,41,34],[28,37,42,36],[32,39,44,40],[43,46,47,45],[0,2,6,13,8,3],[1,5,11,17,9,4],[7,14,22,31,23,15],[10,19,27,35,26,18],[12,21,29,37,28,20],[16,24,32,40,33,25],[30,36,42,46,43,38],[34,41,45,47,44,39],[0,3,7,15,19,10,5,1],[2,4,9,16,25,21,12,6],[8,13,20,28,36,30,22,14],[11,18,26,34,39,32,24,17],[23,31,38,43,45,41,35,27],[29,33,40,44,47,46,42,37]]},

  Rhombicuboctahedron : {
    "vertex":[[0,0,1.070722],[0.7148135,0,0.7971752],[-0.104682,0.7071068,0.7971752],[-0.6841528,0.2071068,0.7971752],[-0.104682,-0.7071068,0.7971752],[0.6101315,0.7071068,0.5236279],[1.04156,0.2071068,0.1367736],[0.6101315,-0.7071068,0.5236279],[-0.3574067,1,0.1367736],[-0.7888348,-0.5,0.5236279],[-0.9368776,0.5,0.1367736],[-0.3574067,-1,0.1367736],[0.3574067,1,-0.1367736],[0.9368776,-0.5,-0.1367736],[0.7888348,0.5,-0.5236279],[0.3574067,-1,-0.1367736],[-0.6101315,0.7071068,-0.5236279],[-1.04156,-0.2071068,-0.1367736],[-0.6101315,-0.7071068,-0.5236279],[0.104682,0.7071068,-0.7971752],[0.6841528,-0.2071068,-0.7971752],[0.104682,-0.7071068,-0.7971752],[-0.7148135,0,-0.7971752],[0,0,-1.070722]],
    "edge":[[0,2],[2,3],[3,0],[1,6],[6,5],[5,1],[4,9],[9,11],[11,4],[7,15],[15,13],[13,7],[8,16],[16,10],[10,8],[12,14],[14,19],[19,12],[17,22],[22,18],[18,17],[20,21],[21,23],[23,20],[0,1],[5,2],[3,9],[4,0],[4,7],[7,1],[13,6],[5,12],[12,8],[8,2],[10,3],[10,17],[17,9],[11,15],[6,14],[13,20],[20,14],[19,16],[18,11],[16,22],[18,21],[21,15],[23,19],[23,22]],
    "face":[[0,2,3],[1,6,5],[4,9,11],[7,15,13],[8,16,10],[12,14,19],[17,22,18],[20,21,23],[0,1,5,2],[0,3,9,4],[0,4,7,1],[1,7,13,6],[2,5,12,8],[2,8,10,3],[3,10,17,9],[4,11,15,7],[5,6,14,12],[6,13,20,14],[8,12,19,16],[9,17,18,11],[10,16,22,17],[11,18,21,15],[13,15,21,20],[14,20,23,19],[16,19,23,22],[18,22,23,21]]},

  SnubCube : {
    "vertex":[[0,0,1.077364],[0.7442063,0,0.7790187],[0.3123013,0.6755079,0.7790187],[-0.482096,0.5669449,0.7790187],[-0.7169181,-0.1996786,0.7790187],[-0.1196038,-0.7345325,0.7790187],[0.6246025,-0.7345325,0.4806734],[1.056508,-0.1996786,0.06806912],[0.8867128,0.5669449,0.2302762],[0.2621103,1.042774,0.06806912],[-0.532287,0.9342111,0.06806912],[-1.006317,0.3082417,0.2302762],[-0.7020817,-0.784071,0.2302762],[0.02728827,-1.074865,0.06806912],[0.6667271,-0.784071,-0.3184664],[0.8216855,-0.09111555,-0.6908285],[0.6518908,0.6755079,-0.5286215],[-0.1196038,0.8751866,-0.6168117],[-0.8092336,0.4758293,-0.5286215],[-0.9914803,-0.2761507,-0.3184664],[-0.4467414,-0.825648,-0.5286215],[0.1926974,-0.5348539,-0.915157],[0.1846311,0.2587032,-1.029416],[-0.5049987,-0.1406541,-0.9412258]],
    "edge":[[0,1],[1,2],[2,0],[2,3],[3,0],[3,4],[4,0],[4,5],[5,0],[1,6],[6,7],[7,1],[7,8],[8,1],[8,2],[8,9],[9,2],[3,10],[10,11],[11,3],[11,4],[4,12],[12,5],[12,13],[13,5],[13,6],[6,5],[13,14],[14,6],[14,7],[14,15],[15,7],[8,16],[16,9],[16,17],[17,9],[17,10],[10,9],[17,18],[18,10],[18,11],[18,19],[19,11],[12,19],[19,20],[20,12],[20,13],[14,21],[21,15],[21,22],[22,15],[22,16],[16,15],[22,17],[18,23],[23,19],[23,20],[23,21],[21,20],[23,22]],
    "face":[[0,1,2],[0,2,3],[0,3,4],[0,4,5],[1,6,7],[1,7,8],[1,8,2],[2,8,9],[3,10,11],[3,11,4],[4,12,5],[5,12,13],[5,13,6],[6,13,14],[6,14,7],[7,14,15],[8,16,9],[9,16,17],[9,17,10],[10,17,18],[10,18,11],[11,18,19],[12,19,20],[12,20,13],[14,21,15],[15,21,22],[15,22,16],[16,22,17],[18,23,19],[19,23,20],[20,23,21],[21,23,22],[0,5,6,1],[2,9,10,3],[4,11,19,12],[7,15,16,8],[13,20,21,14],[17,22,23,18]]},

  Icosidodecahedron : {
    "vertex":[[0,0,1.051462],[0.618034,0,0.8506508],[0.2763932,0.5527864,0.8506508],[-0.618034,0,0.8506508],[-0.2763932,-0.5527864,0.8506508],[1,0,0.3249197],[0.7236068,-0.5527864,0.5257311],[-0.1708204,0.8944272,0.5257311],[0.4472136,0.8944272,0.3249197],[-1,0,0.3249197],[-0.7236068,0.5527864,0.5257311],[0.1708204,-0.8944272,0.5257311],[-0.4472136,-0.8944272,0.3249197],[1,0,-0.3249197],[0.8944272,0.5527864,0],[0.5527864,-0.8944272,0],[-0.5527864,0.8944272,0],[0.4472136,0.8944272,-0.3249197],[-1,0,-0.3249197],[-0.8944272,-0.5527864,0],[-0.4472136,-0.8944272,-0.3249197],[0.618034,0,-0.8506508],[0.7236068,-0.5527864,-0.5257311],[0.1708204,-0.8944272,-0.5257311],[-0.7236068,0.5527864,-0.5257311],[-0.1708204,0.8944272,-0.5257311],[0.2763932,0.5527864,-0.8506508],[-0.618034,0,-0.8506508],[-0.2763932,-0.5527864,-0.8506508],[0,0,-1.051462]],
    "edge":[[0,1],[1,2],[2,0],[0,3],[3,4],[4,0],[1,6],[6,5],[5,1],[2,8],[8,7],[7,2],[3,10],[10,9],[9,3],[4,12],[12,11],[11,4],[5,13],[13,14],[14,5],[6,11],[11,15],[15,6],[7,16],[16,10],[10,7],[8,14],[14,17],[17,8],[9,18],[18,19],[19,9],[12,19],[19,20],[20,12],[13,22],[22,21],[21,13],[15,23],[23,22],[22,15],[16,25],[25,24],[24,16],[17,26],[26,25],[25,17],[18,24],[24,27],[27,18],[20,28],[28,23],[23,20],[21,29],[29,26],[26,21],[27,29],[29,28],[28,27]],
    "face":[[0,1,2],[0,3,4],[1,6,5],[2,8,7],[3,10,9],[4,12,11],[5,13,14],[6,11,15],[7,16,10],[8,14,17],[9,18,19],[12,19,20],[13,22,21],[15,23,22],[16,25,24],[17,26,25],[18,24,27],[20,28,23],[21,29,26],[27,29,28],[0,2,7,10,3],[0,4,11,6,1],[1,5,14,8,2],[3,9,19,12,4],[5,6,15,22,13],[7,8,17,25,16],[9,10,16,24,18],[11,12,20,23,15],[13,21,26,17,14],[18,27,28,20,19],[21,22,23,28,29],[24,25,26,29,27]]},

  TruncatedIcosidodecahedron : {
    "vertex":[[0,0,1.008759],[0.2629922,0,0.973874],[-0.00462747,0.2629515,0.973874],[-0.2211363,-0.1423503,0.973874],[0.2583647,0.2629515,0.9389886],[0.4673861,-0.1423503,0.8825429],[-0.2303913,0.3835526,0.9041033],[-0.3159502,-0.372678,0.8825429],[-0.4469001,-0.02174919,0.9041033],[0.4581312,0.3835526,0.8127722],[0.5351104,-0.372678,0.7696515],[0.6671526,-0.02174919,0.7563265],[-0.3326926,0.5786893,0.7563265],[-0.4515276,0.2412023,0.8692179],[-0.541714,-0.2520769,0.8127722],[-0.248226,-0.6030057,0.7696515],[0.518368,0.5786893,0.6434351],[0.6625252,0.2412023,0.7214412],[0.7348768,-0.2520769,0.6434351],[0.4402965,-0.6030057,0.6783205],[-0.5538289,0.436339,0.7214412],[-0.2724557,0.7738261,0.5869894],[-0.6997536,-0.3618034,0.6301101],[-0.04383203,-0.745356,0.6783205],[-0.4062656,-0.7127322,0.5869894],[0.722762,0.436339,0.552104],[0.4160667,0.7738261,0.4956583],[0.8398294,-0.3618034,0.4258876],[0.2191601,-0.745356,0.6434351],[0.5452491,-0.7127322,0.460773],[-0.7147284,0.4891254,0.5172187],[-0.07268925,0.8944272,0.460773],[-0.4333553,0.8266125,0.3827669],[-0.8606531,-0.309017,0.4258876],[-0.6320294,-0.5921311,0.5172187],[-0.2018716,-0.8550825,0.4956583],[0.8248546,0.4891254,0.3129962],[0.1903029,0.8944272,0.4258876],[0.5181594,0.8266125,0.2565505],[0.9419221,-0.309017,0.1867798],[0.7450156,-0.5921311,0.3345566],[0.3241127,-0.8550825,0.4258876],[-0.8727679,0.3793989,0.3345566],[-0.6544916,0.6842621,0.3478816],[-0.2335888,0.9472136,0.2565505],[-0.7929289,-0.5393447,0.3129962],[-0.9629544,-0.1138803,0.2781109],[-0.096919,-0.9648091,0.2781109],[0.9298072,0.3793989,0.09544872],[0.7225533,0.6842621,0.1652194],[0.2923956,0.9472136,0.1867798],[0.8471082,-0.5393447,0.09544872],[1.002159,-0.1138803,0.01744268],[0.1660732,-0.9648091,0.2432255],[-0.8125311,0.5745356,0.1652194],[-0.9675818,0.1490712,0.2432255],[-0.1314961,1,0.01744268],[-0.8275059,-0.5745356,0.05232804],[-0.9975315,-0.1490712,0.01744268],[-0.1314961,-1,0.01744268],[0.8275059,0.5745356,-0.05232804],[0.9975315,0.1490712,-0.01744268],[0.1314961,1,-0.01744268],[0.8125311,-0.5745356,-0.1652194],[0.9675818,-0.1490712,-0.2432255],[0.1314961,-1,-0.01744268],[-0.8471082,0.5393447,-0.09544872],[-1.002159,0.1138803,-0.01744268],[-0.1660732,0.9648091,-0.2432255],[-0.7225533,-0.6842621,-0.1652194],[-0.9298072,-0.3793989,-0.09544872],[-0.2923956,-0.9472136,-0.1867798],[0.7929289,0.5393447,-0.3129962],[0.9629544,0.1138803,-0.2781109],[0.096919,0.9648091,-0.2781109],[0.6544916,-0.6842621,-0.3478816],[0.8727679,-0.3793989,-0.3345566],[0.2335888,-0.9472136,-0.2565505],[-0.7450156,0.5921311,-0.3345566],[-0.9419221,0.309017,-0.1867798],[-0.3241127,0.8550825,-0.4258876],[-0.8248546,-0.4891254,-0.3129962],[-0.5181594,-0.8266125,-0.2565505],[-0.1903029,-0.8944272,-0.4258876],[0.6320294,0.5921311,-0.5172187],[0.8606531,0.309017,-0.4258876],[0.2018716,0.8550825,-0.4956583],[0.7147284,-0.4891254,-0.5172187],[0.4333553,-0.8266125,-0.3827669],[0.07268925,-0.8944272,-0.460773],[-0.8398294,0.3618034,-0.4258876],[-0.5452491,0.7127322,-0.460773],[-0.2191601,0.745356,-0.6434351],[-0.722762,-0.436339,-0.552104],[-0.4160667,-0.7738261,-0.4956583],[0.6997536,0.3618034,-0.6301101],[0.4062656,0.7127322,-0.5869894],[0.04383203,0.745356,-0.6783205],[0.5538289,-0.436339,-0.7214412],[0.2724557,-0.7738261,-0.5869894],[-0.7348768,0.2520769,-0.6434351],[-0.4402965,0.6030057,-0.6783205],[-0.6625252,-0.2412023,-0.7214412],[-0.518368,-0.5786893,-0.6434351],[0.541714,0.2520769,-0.8127722],[0.248226,0.6030057,-0.7696515],[0.4515276,-0.2412023,-0.8692179],[0.3326926,-0.5786893,-0.7563265],[-0.6671526,0.02174919,-0.7563265],[-0.5351104,0.372678,-0.7696515],[-0.4581312,-0.3835526,-0.8127722],[0.4469001,0.02174919,-0.9041033],[0.3159502,0.372678,-0.8825429],[0.2303913,-0.3835526,-0.9041033],[-0.4673861,0.1423503,-0.8825429],[-0.2583647,-0.2629515,-0.9389886],[0.2211363,0.1423503,-0.973874],[0.00462747,-0.2629515,-0.973874],[-0.2629922,0,-0.973874],[0,0,-1.008759]],
    "edge":[[0,1],[1,4],[4,2],[2,0],[3,8],[8,14],[14,7],[7,3],[5,10],[10,18],[18,11],[11,5],[6,12],[12,20],[20,13],[13,6],[9,17],[17,25],[25,16],[16,9],[15,24],[24,35],[35,23],[23,15],[19,28],[28,41],[41,29],[29,19],[21,31],[31,44],[44,32],[32,21],[22,33],[33,45],[45,34],[34,22],[26,38],[38,50],[50,37],[37,26],[27,40],[40,51],[51,39],[39,27],[30,43],[43,54],[54,42],[42,30],[36,48],[48,60],[60,49],[49,36],[46,55],[55,67],[67,58],[58,46],[47,59],[59,65],[65,53],[53,47],[52,64],[64,73],[73,61],[61,52],[56,62],[62,74],[74,68],[68,56],[57,70],[70,81],[81,69],[69,57],[63,75],[75,87],[87,76],[76,63],[66,78],[78,90],[90,79],[79,66],[71,82],[82,94],[94,83],[83,71],[72,85],[85,95],[95,84],[84,72],[77,89],[89,99],[99,88],[88,77],[80,92],[92,101],[101,91],[91,80],[86,96],[96,105],[105,97],[97,86],[93,102],[102,110],[110,103],[103,93],[98,107],[107,113],[113,106],[106,98],[100,109],[109,114],[114,108],[108,100],[104,111],[111,116],[116,112],[112,104],[115,118],[118,119],[119,117],[117,115],[2,6],[13,8],[3,0],[1,5],[11,17],[9,4],[14,22],[34,24],[15,7],[10,19],[29,40],[27,18],[12,21],[32,43],[30,20],[25,36],[49,38],[26,16],[35,47],[53,41],[28,23],[31,37],[50,62],[56,44],[33,46],[58,70],[57,45],[51,63],[76,64],[52,39],[54,66],[79,67],[55,42],[48,61],[73,85],[72,60],[59,71],[83,89],[77,65],[74,86],[97,92],[80,68],[81,93],[103,94],[82,69],[75,88],[99,107],[98,87],[78,91],[101,109],[100,90],[95,104],[112,105],[96,84],[102,108],[114,118],[115,110],[113,117],[119,116],[111,106]],
    "face":[[0,1,4,2],[3,8,14,7],[5,10,18,11],[6,12,20,13],[9,17,25,16],[15,24,35,23],[19,28,41,29],[21,31,44,32],[22,33,45,34],[26,38,50,37],[27,40,51,39],[30,43,54,42],[36,48,60,49],[46,55,67,58],[47,59,65,53],[52,64,73,61],[56,62,74,68],[57,70,81,69],[63,75,87,76],[66,78,90,79],[71,82,94,83],[72,85,95,84],[77,89,99,88],[80,92,101,91],[86,96,105,97],[93,102,110,103],[98,107,113,106],[100,109,114,108],[104,111,116,112],[115,118,119,117],[0,2,6,13,8,3],[1,5,11,17,9,4],[7,14,22,34,24,15],[10,19,29,40,27,18],[12,21,32,43,30,20],[16,25,36,49,38,26],[23,35,47,53,41,28],[31,37,50,62,56,44],[33,46,58,70,57,45],[39,51,63,76,64,52],[42,54,66,79,67,55],[48,61,73,85,72,60],[59,71,83,89,77,65],[68,74,86,97,92,80],[69,81,93,103,94,82],[75,88,99,107,98,87],[78,91,101,109,100,90],[84,95,104,112,105,96],[102,108,114,118,115,110],[106,113,117,119,116,111],[0,3,7,15,23,28,19,10,5,1],[2,4,9,16,26,37,31,21,12,6],[8,13,20,30,42,55,46,33,22,14],[11,18,27,39,52,61,48,36,25,17],[24,34,45,57,69,82,71,59,47,35],[29,41,53,65,77,88,75,63,51,40],[32,44,56,68,80,91,78,66,54,43],[38,49,60,72,84,96,86,74,62,50],[58,67,79,90,100,108,102,93,81,70],[64,76,87,98,106,111,104,95,85,73],[83,94,103,110,115,117,113,107,99,89],[92,97,105,112,116,119,118,114,109,101]]},

  Rhombicosidodecahedron : {
    "vertex":[[0,0,1.026054],[0.447838,0,0.9231617],[-0.02363976,0.4472136,0.9231617],[-0.4050732,0.190983,0.9231617],[-0.1693344,-0.4145898,0.9231617],[0.4241982,0.4472136,0.8202696],[0.7673818,0.190983,0.6537868],[0.5552827,-0.4145898,0.7566788],[-0.2312241,0.7562306,0.6537868],[-0.5744076,-0.2236068,0.8202696],[-0.6126576,0.5,0.6537868],[0.1738492,-0.6708204,0.7566788],[-0.4669629,-0.6381966,0.6537868],[0.493393,0.7562306,0.4873039],[0.8748265,-0.2236068,0.4873039],[0.8365765,0.5,0.320821],[0.7054921,-0.6381966,0.3844118],[0.08831973,0.9472136,0.3844118],[-0.5434628,0.809017,0.320821],[-0.8866463,-0.1708204,0.4873039],[-0.9102861,0.2763932,0.3844118],[-0.1237794,-0.8944272,0.4873039],[0.3240586,-0.8944272,0.3844118],[-0.7792016,-0.5854102,0.320821],[0.6289922,0.809017,0.05144604],[1.010426,-0.1708204,0.05144604],[0.9867859,0.2763932,-0.05144604],[0.8410913,-0.5854102,-0.05144604],[-0.223919,1,0.05144604],[0.223919,1,-0.05144604],[-0.8410913,0.5854102,0.05144604],[-0.9867859,-0.2763932,0.05144604],[-1.010426,0.1708204,-0.05144604],[-0.223919,-1,0.05144604],[0.223919,-1,-0.05144604],[-0.6289922,-0.809017,-0.05144604],[0.7792016,0.5854102,-0.320821],[0.9102861,-0.2763932,-0.3844118],[0.8866463,0.1708204,-0.4873039],[0.5434628,-0.809017,-0.320821],[-0.3240586,0.8944272,-0.3844118],[0.1237794,0.8944272,-0.4873039],[-0.7054921,0.6381966,-0.3844118],[-0.8365765,-0.5,-0.320821],[-0.8748265,0.2236068,-0.4873039],[-0.08831973,-0.9472136,-0.3844118],[-0.493393,-0.7562306,-0.4873039],[0.4669629,0.6381966,-0.6537868],[0.6126576,-0.5,-0.6537868],[0.5744076,0.2236068,-0.8202696],[0.2312241,-0.7562306,-0.6537868],[-0.1738492,0.6708204,-0.7566788],[-0.5552827,0.4145898,-0.7566788],[-0.7673818,-0.190983,-0.6537868],[-0.4241982,-0.4472136,-0.8202696],[0.1693344,0.4145898,-0.9231617],[0.4050732,-0.190983,-0.9231617],[0.02363976,-0.4472136,-0.9231617],[-0.447838,0,-0.9231617],[0,0,-1.026054]],
    "edge":[[0,2],[2,3],[3,0],[1,6],[6,5],[5,1],[4,9],[9,12],[12,4],[7,16],[16,14],[14,7],[8,18],[18,10],[10,8],[11,21],[21,22],[22,11],[13,15],[15,24],[24,13],[17,29],[29,28],[28,17],[19,31],[31,23],[23,19],[20,30],[30,32],[32,20],[25,27],[27,37],[37,25],[26,38],[38,36],[36,26],[33,45],[45,34],[34,33],[35,43],[43,46],[46,35],[39,50],[50,48],[48,39],[40,41],[41,51],[51,40],[42,52],[52,44],[44,42],[47,49],[49,55],[55,47],[53,58],[58,54],[54,53],[56,57],[57,59],[59,56],[0,1],[5,2],[3,9],[4,0],[1,7],[14,6],[2,8],[10,3],[12,21],[11,4],[6,15],[13,5],[7,11],[22,16],[8,17],[28,18],[9,19],[23,12],[18,30],[20,10],[24,29],[17,13],[16,27],[25,14],[15,26],[36,24],[19,20],[32,31],[21,33],[34,22],[31,43],[35,23],[37,38],[26,25],[27,39],[48,37],[29,41],[40,28],[30,42],[44,32],[33,35],[46,45],[45,50],[39,34],[38,49],[47,36],[51,52],[42,40],[41,47],[55,51],[43,53],[54,46],[52,58],[53,44],[50,57],[56,48],[49,56],[59,55],[58,59],[57,54]],
    "face":[[0,2,3],[1,6,5],[4,9,12],[7,16,14],[8,18,10],[11,21,22],[13,15,24],[17,29,28],[19,31,23],[20,30,32],[25,27,37],[26,38,36],[33,45,34],[35,43,46],[39,50,48],[40,41,51],[42,52,44],[47,49,55],[53,58,54],[56,57,59],[0,1,5,2],[0,3,9,4],[1,7,14,6],[2,8,10,3],[4,12,21,11],[5,6,15,13],[7,11,22,16],[8,17,28,18],[9,19,23,12],[10,18,30,20],[13,24,29,17],[14,16,27,25],[15,26,36,24],[19,20,32,31],[21,33,34,22],[23,31,43,35],[25,37,38,26],[27,39,48,37],[28,29,41,40],[30,42,44,32],[33,35,46,45],[34,45,50,39],[36,38,49,47],[40,51,52,42],[41,47,55,51],[43,53,54,46],[44,52,58,53],[48,50,57,56],[49,56,59,55],[54,58,59,57],[0,4,11,7,1],[2,5,13,17,8],[3,10,20,19,9],[6,14,25,26,15],[12,23,35,33,21],[16,22,34,39,27],[18,28,40,42,30],[24,36,47,41,29],[31,32,44,53,43],[37,48,56,49,38],[45,46,54,57,50],[51,55,59,58,52]]},

  SnubDodecahedron: {
    "vertex":[[0,0,1.028031],[0.4638569,0,0.9174342],[0.2187436,0.4090409,0.9174342],[-0.2575486,0.3857874,0.9174342],[-0.4616509,-0.04518499,0.9174342],[-0.177858,-0.4284037,0.9174342],[0.5726782,-0.4284037,0.7384841],[0.8259401,-0.04518499,0.6104342],[0.6437955,0.3857874,0.702527],[0.349648,0.7496433,0.6104342],[-0.421009,0.7120184,0.6104342],[-0.6783139,0.3212396,0.702527],[-0.6031536,-0.4466658,0.702527],[-0.2749612,-0.7801379,0.6104342],[0.1760766,-0.6931717,0.7384841],[0.5208138,-0.7801379,0.4206978],[0.8552518,-0.4466658,0.3547998],[1.01294,-0.03548596,0.1718776],[0.7182239,0.661842,0.3208868],[0.3633691,0.9454568,0.1758496],[-0.04574087,0.9368937,0.4206978],[-0.4537394,0.905564,0.1758496],[-0.7792791,0.5887312,0.3208868],[-0.9537217,0.1462217,0.3547998],[-0.9072701,-0.3283699,0.3547998],[-0.6503371,-0.7286577,0.3208868],[0.08459482,-0.9611501,0.3547998],[0.3949153,-0.9491262,-0.007072558],[0.9360473,-0.409557,-0.1136978],[0.9829382,0.02692292,-0.2999274],[0.9463677,0.4014808,-0.007072558],[0.6704578,0.7662826,-0.1419366],[-0.05007646,1.025698,-0.04779978],[-0.4294337,0.8845784,-0.2999274],[-0.9561681,0.3719321,-0.06525234],[-1.022036,-0.1000338,-0.04779978],[-0.8659056,-0.5502712,-0.06525234],[-0.5227761,-0.8778535,-0.1136978],[-0.06856319,-1.021542,-0.09273844],[0.2232046,-0.8974878,-0.4489366],[0.6515438,-0.7200947,-0.3373472],[0.7969535,-0.3253959,-0.5619888],[0.8066872,0.4395354,-0.461425],[0.4468035,0.735788,-0.5619888],[0.001488801,0.8961155,-0.503809],[-0.3535403,0.6537658,-0.7102452],[-0.7399517,0.5547758,-0.4489366],[-0.9120238,0.1102196,-0.461425],[-0.6593998,-0.6182798,-0.4896639],[-0.2490651,-0.8608088,-0.503809],[0.4301047,-0.5764987,-0.734512],[0.5057577,-0.1305283,-0.8854492],[0.5117735,0.3422252,-0.8232973],[0.09739587,0.5771941,-0.8451093],[-0.6018946,0.2552591,-0.7933564],[-0.6879024,-0.2100741,-0.734512],[-0.3340437,-0.5171509,-0.8232973],[0.08570633,-0.3414376,-0.9658797],[0.1277354,0.1313635,-1.011571],[-0.3044499,-0.06760332,-0.979586]],
    "edge":[[0,1],[1,2],[2,0],[2,3],[3,0],[3,4],[4,0],[4,5],[5,0],[1,6],[6,7],[7,1],[7,8],[8,1],[8,2],[8,9],[9,2],[3,10],[10,11],[11,3],[11,4],[4,12],[12,5],[12,13],[13,5],[13,14],[14,5],[6,14],[14,15],[15,6],[15,16],[16,6],[16,7],[16,17],[17,7],[8,18],[18,9],[18,19],[19,9],[19,20],[20,9],[10,20],[20,21],[21,10],[21,22],[22,10],[22,11],[22,23],[23,11],[12,24],[24,25],[25,12],[25,13],[13,26],[26,14],[26,15],[26,27],[27,15],[16,28],[28,17],[28,29],[29,17],[29,30],[30,17],[18,30],[30,31],[31,18],[31,19],[19,32],[32,20],[32,21],[32,33],[33,21],[22,34],[34,23],[34,35],[35,23],[35,24],[24,23],[35,36],[36,24],[36,25],[36,37],[37,25],[26,38],[38,27],[38,39],[39,27],[39,40],[40,27],[28,40],[40,41],[41,28],[41,29],[29,42],[42,30],[42,31],[42,43],[43,31],[32,44],[44,33],[44,45],[45,33],[45,46],[46,33],[34,46],[46,47],[47,34],[47,35],[36,48],[48,37],[48,49],[49,37],[49,38],[38,37],[49,39],[39,50],[50,40],[50,41],[50,51],[51,41],[42,52],[52,43],[52,53],[53,43],[53,44],[44,43],[53,45],[45,54],[54,46],[54,47],[54,55],[55,47],[48,55],[55,56],[56,48],[56,49],[50,57],[57,51],[57,58],[58,51],[58,52],[52,51],[58,53],[54,59],[59,55],[59,56],[59,57],[57,56],[59,58]],
    "face":[[0,1,2],[0,2,3],[0,3,4],[0,4,5],[1,6,7],[1,7,8],[1,8,2],[2,8,9],[3,10,11],[3,11,4],[4,12,5],[5,12,13],[5,13,14],[6,14,15],[6,15,16],[6,16,7],[7,16,17],[8,18,9],[9,18,19],[9,19,20],[10,20,21],[10,21,22],[10,22,11],[11,22,23],[12,24,25],[12,25,13],[13,26,14],[14,26,15],[15,26,27],[16,28,17],[17,28,29],[17,29,30],[18,30,31],[18,31,19],[19,32,20],[20,32,21],[21,32,33],[22,34,23],[23,34,35],[23,35,24],[24,35,36],[24,36,25],[25,36,37],[26,38,27],[27,38,39],[27,39,40],[28,40,41],[28,41,29],[29,42,30],[30,42,31],[31,42,43],[32,44,33],[33,44,45],[33,45,46],[34,46,47],[34,47,35],[36,48,37],[37,48,49],[37,49,38],[38,49,39],[39,50,40],[40,50,41],[41,50,51],[42,52,43],[43,52,53],[43,53,44],[44,53,45],[45,54,46],[46,54,47],[47,54,55],[48,55,56],[48,56,49],[50,57,51],[51,57,58],[51,58,52],[52,58,53],[54,59,55],[55,59,56],[56,59,57],[57,59,58],[0,5,14,6,1],[2,9,20,10,3],[4,11,23,24,12],[7,17,30,18,8],[13,25,37,38,26],[15,27,40,28,16],[19,31,43,44,32],[21,33,46,34,22],[29,41,51,52,42],[35,47,55,48,36],[39,49,56,57,50],[45,53,58,59,54]]},

  /* Other */

  PentagonalPrism: {
    "vertex":[[0,0,1.159953],[1.013464,0,0.5642542],[-0.3501431,0.9510565,0.5642542],[-0.7715208,-0.6571639,0.5642542],[0.6633206,0.9510565,-0.03144481],[0.8682979,-0.6571639,-0.3996071],[-1.121664,0.2938926,-0.03144481],[-0.2348831,-1.063314,-0.3996071],[0.5181548,0.2938926,-0.9953061],[-0.5850262,-0.112257,-0.9953061]],
    "edge":[[0,1],[1,4],[4,2],[2,0],[2,6],[6,3],[3,0],[1,5],[5,8],[8,4],[6,9],[9,7],[7,3],[5,7],[9,8]],
    "face":[[0,1,4,2],[0,2,6,3],[1,5,8,4],[3,6,9,7],[5,7,9,8],[0,3,7,5,1],[2,4,8,9,6]]},

  Hebesphenorotunda: {
    "vertex":[[-0.748928,0.557858,-0.030371],[-0.638635,0.125804,-0.670329],[-0.593696,0.259282,0.67329],[-0.427424,0.876636,-0.665507],[-0.373109,-0.604827,-0.606627],[-0.32817,-0.471348,0.736992],[-0.217876,-0.903403,0.097033],[-0.141658,1.042101,0.041134],[-0.021021,0.094954,1.176701],[0.013575,0.743525,0.744795],[0.036802,0.343022,-0.994341],[0.267732,-1.036179,-0.498733],[0.302328,-0.387609,-0.93064],[0.443205,-0.438661,0.847867],[0.499183,0.610749,0.149029],[0.553499,-0.870715,0.207908],[0.609478,0.178694,-0.490931],[0.76471,-0.119883,0.212731]],
    "edge":[[11,12],[12,16],[16,17],[17,15],[15,11],[11,4],[4,12],[11,6],[6,4],[15,6],[15,13],[13,5],[5,6],[17,13],[8,13],[17,14],[14,9],[9,8],[8,5],[2,5],[8,2],[9,2],[7,9],[14,7],[7,0],[0,2],[16,14],[16,10],[10,3],[3,7],[3,0],[3,1],[1,0],[10,1],[4,1],[10,12]],
    "face":[[12,11,4],[11,6,4],[6,11,15],[13,15,17],[5,13,8],[2,5,8],[2,8,9],[7,9,14],[16,14,17],[3,0,7],[3,1,0],[1,3,10],[12,10,16],[6,15,13,5],[2,9,7,0],[12,4,1,10],[11,12,16,17,15],[8,13,17,14,9],[16,10,3,7,14],[1,4,6,5,2,0]]},

  StellatedDodecahedron: {
    vertex: [[.8944,.4472,0],[.2764,.4472,.8506],[.2764,.4472,-.8506],[-.7236,.4472,.5257],[-.7236,.4472,-.5257],[-.3416,.4472,0],[-.1056,.4472,.3249],[-.1056,.4472,-.3249],[.2764,.4472,.2008],[.2764,.4472,-.2008],[-.8944,-.4472,0],[-.2764,-.4472,.8506],[-.2764,-.4472,-.8506],[.7236,-.4472,.5257],[.7236,-.4472,-.5257],[.3416,-.4472,0],[.1056,-.4472,.3249],[.1056,-.4472,-.3249],[-.2764,-.4472,.2008],[-.2764,-.4472,-.2008],[-.5527,.1058,0],[-.1708,.1058,.5527],[-.1708,.1058,-.5527],[.4471,.1058,.3249],[.4471,.1058,-.3249],[.5527,-.1058,0],[.1708,-.1058,.5527],[.1708,-.1058,-.5527],[-.4471,-.1058,.3249],[-.4471,-.1058,-.3249],[0,1,0],[0,-1,0]],
    edge: [[0,8],[8,9],[0,9],[2,7],[7,9],[2,9],[4,5],[5,7],[4,7],[3,5],[5,6],[3,6],[1,6],[6,8],[1,8],[0,23],[23,8],[30,6],[30,8],[21,3],[21,6],[11,21],[21,26],[11,26],[13,23],[23,26],[13,26],[2,24],[24,9],[30,9],[1,23],[23,25],[13,25],[14,24],[24,25],[14,25],[22,4],[22,7],[30,7],[0,24],[24,27],[14,27],[12,22],[22,27],[12,27],[20,3],[20,5],[30,5],[2,22],[22,29],[12,29],[10,20],[20,29],[10,29],[1,21],[20,4],[20,28],[10,28],[21,28],[11,28],[10,18],[18,19],[10,19],[12,17],[17,19],[12,19],[14,15],[15,17],[14,17],[13,15],[15,16],[13,16],[11,16],[16,18],[11,18],[19,31],[17,31],[17,27],[2,27],[29,4],[19,29],[18,31],[28,3],[18,28],[16,31],[1,26],[16,26],[15,31],[0,25],[15,25]],
    face: [[0,9,8],[2,7,9],[4,5,7],[3,6,5],[1,8,6],[0,8,23],[30,6,8],[3,21,6],[11,26,21],[13,23,26],[2,9,24],[30,8,9],[1,23,8],[13,25,23],[14,24,25],[4,7,22],[30,9,7],[0,24,9],[14,27,24],[12,22,27],[3,5,20],[30,7,5],[2,22,7],[12,29,22],[10,20,29],[1,6,21],[30,5,6],[4,20,5],[10,28,20],[11,21,28],[10,19,18],[12,17,19],[14,15,17],[13,16,15],[11,18,16],[31,19,17],[14,17,27],[2,27,22],[4,22,29],[10,29,19],[31,18,19],[12,19,29],[4,29,20],[3,20,28],[11,28,18],[31,16,18],[10,18,28],[3,28,21],[1,21,26],[13,26,16],[31,15,16],[11,16,26],[1,26,23],[0,23,25],[14,25,15],[31,17,15],[13,15,25],[0,25,24],[2,24,27],[12,27,17]]
  }
};
