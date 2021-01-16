const TABLE_3_ID = "table_3";
const TABLE_3_TOOTH_NO = [24, 25, 26, 27, 28];
const TABLE_3_IMAGE_CLIP = {"key": "palate",
                            "start_x": 624,
                            "start_y": 23,
                            "width": 286,
                            "height": 415
                           };
const TABLE_3_CLICK_AREA = {"width" : [[56, 44, 61, 56, 69],
                                       [16, 32, 16, 28, 16, 45, 16, 40, 16, 45, 16],
                                       [56, 44, 61, 56, 69],
                                       [16, 29, 16, 30, 16, 45, 16, 41, 16, 44, 16],
                                       [44, 43, 64, 55, 80],
                                       [16, 20, 16, 27, 16, 48, 16, 39, 16, 56, 16],
                                       [44, 43, 32, 32, 26, 29, 28, 52]],
                           "height": [125, 45, 27, 68, 91, 42, 17],
                           "usage": [[CHART_CLICK_AREA_USAGE.CLASS,
                                      CHART_CLICK_AREA_USAGE.CLASS,
                                      CHART_CLICK_AREA_USAGE.CLASS,
                                      CHART_CLICK_AREA_USAGE.CLASS,
                                      CHART_CLICK_AREA_USAGE.CLASS],
                                     [CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.NONE],
                                     [CHART_CLICK_AREA_USAGE.NONE,
                                      CHART_CLICK_AREA_USAGE.NONE,
                                      CHART_CLICK_AREA_USAGE.FURCATION,
                                      CHART_CLICK_AREA_USAGE.FURCATION,
                                      CHART_CLICK_AREA_USAGE.FURCATION],
                                     [CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.FURCATION,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.FURCATION,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.FURCATION,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.FURCATION,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.FURCATION,
                                      CHART_CLICK_AREA_USAGE.NONE],
                                     [CHART_CLICK_AREA_USAGE.CLASS,
                                      CHART_CLICK_AREA_USAGE.CLASS,
                                      CHART_CLICK_AREA_USAGE.CLASS,
                                      CHART_CLICK_AREA_USAGE.CLASS,
                                      CHART_CLICK_AREA_USAGE.CLASS],
                                     [CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.COMPACT,
                                      CHART_CLICK_AREA_USAGE.NO,
                                      CHART_CLICK_AREA_USAGE.NONE],
                                     [CHART_CLICK_AREA_USAGE.NONE,
                                      CHART_CLICK_AREA_USAGE.NONE,
                                      CHART_CLICK_AREA_USAGE.FURCATIONL,
                                      CHART_CLICK_AREA_USAGE.FURCATIONR,
                                      CHART_CLICK_AREA_USAGE.FURCATIONL,
                                      CHART_CLICK_AREA_USAGE.FURCATIONR,
                                      CHART_CLICK_AREA_USAGE.FURCATIONL,
                                      CHART_CLICK_AREA_USAGE.FURCATIONR]]};
const TABLE_3_TOP_ROOT_CANAL_CURVE =
       [[[ROOT_CANAL_CURVE_SHAPE.C, 32, 119, 37, 44]],
        [[ROOT_CANAL_CURVE_SHAPE.C, 77, 121, 83, 43]],
        [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 118, 123, 112, 59, 103, 76],
         [ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR, 136, 123, 145, 61, 129, 101, 152, 75],
         [ROOT_CANAL_CURVE_SHAPE.C, 122, 100, 129, 54]],
        [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 182, 129, 186, 72, 170, 96],
         [ROOT_CANAL_CURVE_SHAPE.REVERSE_S, 197, 128, 204, 71],
         [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 188, 107, 195, 68, 192, 87]],
        [[ROOT_CANAL_CURVE_SHAPE.C, 241, 130, 249, 71]]];
const TABLE_3_BOTTOM_ROOT_CANAL_CURVE =
       [[[ROOT_CANAL_CURVE_SHAPE.C, 20, 352, 30, 273]],
        [[ROOT_CANAL_CURVE_SHAPE.C, 65, 352, 71, 276]],
        [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 118, 357, 120, 285, 114, 318],
         [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 103, 340, 105, 292, 95, 311],
         [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 130, 329, 136, 291, 140, 308]],
        [[ROOT_CANAL_CURVE_SHAPE.C, 175, 353, 189, 295]],
        [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 233, 354, 250, 309, 240, 331]]];
const TABLE_3_TOP_CHART_SETTING =
                        { "x_zero" : 2,
                          "y_zero" : 125,
                          "y_direction" : CHART_Y_DIRECTION.UP,
                          "x_grid" : [[ 19,  32,  51],
                                      [ 63,  74,  93],
                                      [108, 130, 153],
                                      [169, 190, 209],
                                      [225, 242, 260]],
                          "y_base" :  [[125, 119, 125],
                                       [125, 119, 125],
                                       [125, 123, 125],
                                       [136, 130, 136],
                                       [136, 130, 136]],
                          "grid_height" : 5.5,
                          "crown_pos": [[[33, 143]],
                                        [[76, 143]],
                                        [[129, 143]],
                                        [[190, 143]],
                                        [[243, 143]]],
                          "root_pos": [[[33, 108], [42, 48]],
                                       [[76, 108]],
                                       [[129, 108], [124, 81]],
                                       [[187, 118], [190, 87]],
                                       [[243, 108], [256, 86]]],
                           "furcation_pos": [[130, 35],
                                             [190, 45],
                                             [250, 50]],
                           "furcation_type": FURCATION_GRADE_TYPE.TRIANGLE,
                           "compact_pos": [[0, 135],
                                           [48, 135],
                                           [92, 135],
                                           [153, 140],
                                           [209, 140]],
                           "tooth_no_pos" : [[25, 152],
                                             [69, 152],
                                             [120, 152],
                                             [180, 152],
                                             [232, 152]],
                           "root_canal_curve" : TABLE_3_TOP_ROOT_CANAL_CURVE};
const TABLE_3_MIDDLE_CHART_SETTING =
                        {"crown_pos":[[[22, 231]],
                                      [[79, 231]],
                                      [[140, 231]],
                                      [[198, 231]],
                                      [[244, 231]]],
                         "furcation_pos": [[21, 236],
                                           [65, 236],
                                           [113, 236],
                                           [175, 236],
                                           [233, 236]],
                         "furcation_type": FURCATION_GRADE_TYPE.SYMBOLS,
                         "compact_pos": [[0, 208],
                                         [44, 208],
                                         [90, 208],
                                         [151, 212],
                                         [208, 212]]};
const TABLE_3_BOTTOM_CHART_SETTING =
                        { "x_zero" : 2,
                          "y_zero" : 358,
                          "y_direction" : CHART_Y_DIRECTION.UP,
                          "x_grid" : [[  7,  21,  37],
                                      [ 52,  64,  80],
                                      [ 97, 119, 140],
                                      [157, 177, 192],
                                      [215, 234, 247]],
                          "y_base" :  [[358, 352, 358],
                                       [358, 352, 358],
                                       [360, 358, 360],
                                       [358, 352, 358],
                                       [359, 356, 359]],
                          "grid_height" : 5.5,
                          "crown_pos": [[[24, 379]],
                                        [[64, 379]],
                                        [[117, 379], [127, 394]],
                                        [[178, 379]],
                                        [[236, 379]]],
                          "root_pos": [[[24, 339], [21, 277]],
                                       [[64, 339]],
                                       [[117, 339], [99, 321], [134, 321]],
                                       [[178, 339], [165, 321], [194, 312],
                                        [170, 310], [162, 333]],
                                       [[236, 339], [226, 334]]],
                           "furcation_pos": [[130, 45],
                                             [189, 60],
                                             [250, 60]],
                           "furcation_type": FURCATION_GRADE_TYPE.BITRIANGLE,
                           "compact_pos": [[0, 367],
                                           [36, 367],
                                           [79, 367],
                                           [143, 367],
                                           [198, 367]],
                           "tooth_no_pos" : [[17, 380],
                                             [54, 380],
                                             [109, 380],
                                             [167, 380],
                                             [224, 380]],
                           "root_canal_curve" : TABLE_3_BOTTOM_ROOT_CANAL_CURVE};
