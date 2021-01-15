const TABLE_6_ID = "table_6";
const TABLE_6_TOOTH_NO = [34, 35, 36, 37, 38];
const TABLE_6_IMAGE_CLIP = {"key": "mandible",
                            "start_x": 638,
                            "start_y": 42,
                            "width": 287,
                            "height": 416};
const TABLE_6_CLICK_AREA = {"width" : [[49, 42, 68, 60, 68],
                                       [16, 25, 16, 26, 16, 52, 16, 44, 16, 44, 16],
                                       [49, 42, 68, 60, 68],
                                       [16, 22, 16, 27, 16, 48, 16, 48, 16, 46, 16],
                                       [48, 41, 67, 60, 71],
                                       [16, 24, 16, 25, 16, 51, 16, 44, 16, 47, 16],
                                       [48, 41, 67, 60, 71]],
                            "height": [25, 40, 110, 70, 18, 36, 117],
                            "usage": [[CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION],
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
                                      [CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS],
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
                                      [CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION],
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
                                      [CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS]]};
const TABLE_6_TOP_ROOT_CANAL_CURVE =
        [[[ROOT_CANAL_CURVE_SHAPE.C, 24, 75, 25, 147]],
         [[ROOT_CANAL_CURVE_SHAPE.C, 68, 73, 68, 148]],
         [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 111, 71, 117, 145, 94, 125],
          [ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR, 134, 70, 154, 142, 134, 104, 157, 123]],
         [[ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR, 178, 70, 188, 138, 165, 108, 190, 123],
          [ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR, 200, 71, 213, 136, 195, 86, 213, 107]],
         [[ROOT_CANAL_CURVE_SHAPE.C, 239, 71, 271, 126],
          [ROOT_CANAL_CURVE_SHAPE.C, 261, 72, 284, 124]]];
const TABLE_6_BOTTOM_ROOT_CANAL_CURVE =
        [[[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 23, 313, 28, 387, 20, 358]],
         [[ROOT_CANAL_CURVE_SHAPE.C, 66, 308, 69, 390]],
         [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 110, 305, 121, 382, 100, 363],
          [ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR, 133, 304, 151, 375, 128, 329, 149, 344]],
         [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 173, 307, 193, 381, 161, 358],
          [ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR, 193, 307, 214, 375, 190, 337, 214, 350]],
         [[ROOT_CANAL_CURVE_SHAPE.C, 232, 306, 261, 368],
          [ROOT_CANAL_CURVE_SHAPE.C, 252, 306, 271, 364]]];
const TABLE_6_TOP_CHART_SETTING =
                        { "x_zero" : 3,
                          "y_zero" : 66,
                          "y_direction" : CHART_Y_DIRECTION.DOWN,
                          "x_grid" : [[ 10,  24,  42],
                                      [ 54,  66,  83],
                                      [ 96, 124, 148],
                                      [168, 188, 212],
                                      [229, 250, 274]],
                          "y_base" :  [[66, 74, 66],
                                       [66, 72, 66],
                                       [66, 72, 66],
                                       [66, 72, 66],
                                       [66, 72, 66]],
                          "grid_height" : 5.5,
                          "crown_pos": [[[26, 54]],
                                        [[67, 54]],
                                        [[123, 54]],
                                        [[186, 54]],
                                        [[242, 54]]],
                          "root_pos": [[[26, 81]],
                                       [[67, 81]],
                                       [[123, 81]],
                                       [[186, 81]],
                                       [[242, 81], [262, 81]]],
                           "furcation_pos": [[124, 11],
                                             [188, 11],
                                             [250, 11]],
                           "furcation_type": FURCATION_GRADE_TYPE.TRIANGLE,
                           "compact_pos": [[0, 37],
                                           [40, 37],
                                           [82, 37],
                                           [151, 37],
                                           [211, 37]],
                           "tooth_no_pos" : [[16, 60],
                                             [59, 60],
                                             [114, 60],
                                             [178, 60],
                                             [240, 60]],
                           "root_canal_curve" : TABLE_6_TOP_ROOT_CANAL_CURVE};
const TABLE_6_MIDDLE_CHART_SETTING =
                        {"crown_pos":[[[22, 231]],
                                      [[79, 231]],
                                      [[140, 231]],
                                      [[198, 231]],
                                      [[244, 231]]],
                         "furcation_pos": [[16, 228],
                                           [58, 228],
                                           [111, 228],
                                           [175, 228],
                                           [234, 228]],
                         "furcation_type": FURCATION_GRADE_TYPE.SYMBOLS,
                         "compact_pos": [[0, 210],
                                         [37, 210],
                                         [80, 210],
                                         [144, 210],
                                         [208, 210]],};
const TABLE_6_BOTTOM_CHART_SETTING =
                        { "x_zero" : 3,
                          "y_zero" : 300,
                          "y_direction" : CHART_Y_DIRECTION.DOWN,
                          "x_grid" : [[  7,  25,  40],
                                      [ 51,  69,  83],
                                      [ 95, 123, 150],
                                      [160, 185, 210],
                                      [219, 242, 267]],
                          "y_base" :  [[300, 312, 300],
                                       [300, 306, 300],
                                       [300, 306, 300],
                                       [300, 306, 300],
                                       [300, 306, 300]],
                          "grid_height" : 5.5,
                          "crown_pos": [[[26, 289]],
                                        [[67, 289]],
                                        [[123, 289]],
                                        [[186, 289]],
                                        [[242, 289]]],
                          "root_pos": [[[26, 323]],
                                       [[67, 323]],
                                       [[123, 312]],
                                       [[183, 316]],
                                       [[236, 316]]],
                           "furcation_pos": [[123, 258],
                                             [185, 258],
                                             [242, 258]],
                           "furcation_type": FURCATION_GRADE_TYPE.TRIANGLE,
                           "compact_pos": [[0, 276],
                                           [39, 276],
                                           [81, 276],
                                           [148, 276],
                                           [207, 276]],
                           "tooth_no_pos" : [[15, 295],
                                             [59, 295],
                                             [113, 295],
                                             [175, 295],
                                             [232, 295]],
                          "root_canal_curve" : TABLE_6_BOTTOM_ROOT_CANAL_CURVE,
                          [GRAY_VALUE_THRESHOLD_KEY_NAME]: 156};
