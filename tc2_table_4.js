const TABLE_4_ID = "table_4";
const TABLE_4_TOOTH_NO = [48, 47, 46, 45, 44];
const TABLE_4_IMAGE_CLIP = {"key": "mandible",
                            "start_x": 39,
                            "start_y": 42,
                            "width": 288,
                            "height": 416
                           };
const TABLE_4_CLICK_AREA = {"width" : [[75, 61, 66, 40, 46],
                                       [16, 51, 16, 45, 16, 50, 16, 24, 16, 22, 16],
                                       [75, 61, 66, 40, 46],
                                       [16, 45, 16, 51, 16, 48, 16, 23, 16, 25, 16],
                                       [69, 64, 63, 40, 52],
                                       [16, 45, 16, 48, 16, 47, 16, 24, 16, 28, 16],
                                       [69, 64, 63, 40, 52]],
                            "height": [22, 43, 108, 71, 17, 39, 116],
                            "usage": [[CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.NONE],
                                      [CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT],
                                      [CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS],
                                      [CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.COMPACT],
                                      [CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.NONE],
                                      [CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT,
                                       CHART_CLICK_AREA_USAGE.NO,
                                       CHART_CLICK_AREA_USAGE.COMPACT],
                                      [CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS]]};
const TABLE_4_TOP_ROOT_CANAL_CURVE =
        [[[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 33, 66, 10, 116],
          [ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 50, 66, 24, 119]],
         [[ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR, 96, 66, 80, 134, 101, 82, 79, 105],
          [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 120, 65, 107, 132, 125, 105]],
         [[ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR, 159, 62, 141, 138, 164, 75, 136, 111],
          [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 181, 63, 172, 137, 193, 110]],
         [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 222, 71, 217, 145, 224, 120]],
         [[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 262, 73, 259, 144]]];
const TABLE_4_BOTTOM_ROOT_CANAL_CURVE =
        [[[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 30, 302, 9, 360],
          [ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 50, 302, 24, 363]],
         [[ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR, 89, 302, 71, 371, 97,324, 72, 341],
          [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 113, 301, 94, 374, 121, 358]],
         [[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 156, 302, 143, 343],
          [ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 143, 343, 135, 381],
          [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 175, 301, 167, 381, 189, 359]],
         [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 217, 307, 214, 385, 224, 368]],
         [[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 257, 307, 253, 385]]];
const TABLE_4_TOP_CHART_SETTING =
                        { "x_zero" : 3,
                          "y_zero" : 66,
                          "y_direction" : CHART_Y_DIRECTION.DOWN,
                          "x_grid" : [[ 21,  37,  61],
                                      [ 83, 109, 129],
                                      [147, 170, 194],
                                      [207, 221, 234],
                                      [247, 260, 277]],
                          "y_base" :  [[63, 66, 63],
                                       [61, 67, 61],
                                       [62, 68, 62],
                                       [66, 72, 66],
                                       [66, 72, 66]],
                          "grid_height" : 5.5,
                          "crown_pos": [[[40, 55]],
                                        [[107, 55]],
                                        [[171, 55]],
                                        [[221, 55]],
                                        [[263, 55]]],
                          "root_pos": [[[40, 77]],
                                       [[107, 77]],
                                       [[171, 77]],
                                       [[221, 77]],
                                       [[263, 77]]],
                           "furcation_pos": [[30, 140],
                                             [100, 150],
                                             [165, 160]],
                           "furcation_type": FURCATION_GRADE_TYPE.TRIANGLE,
                           "compact_pos": [[67, 34],
                                           [128, 34],
                                           [194, 34],
                                           [234, 34],
                                           [272, 34]],
                           "tooth_no_pos" : [[27, 52],
                                             [99, 52],
                                             [160, 52],
                                             [211, 52],
                                             [252, 52]],
                           "root_canal_curve" : TABLE_4_TOP_ROOT_CANAL_CURVE};
const TABLE_4_MIDDLE_CHART_SETTING =
                        {"crown_pos":[[[40, 231]],
                                      [[107, 231]],
                                      [[171, 231]],
                                      [[221, 231]],
                                      [[263, 231]]],
                         "furcation_pos": [[24, 225],
                                           [92, 225],
                                           [158, 225],
                                           [209, 225],
                                           [249, 225]],
                         "furcation_type": FURCATION_GRADE_TYPE.SYMBOLS,
                         "compact_pos": [[61, 204],
                                         [127, 204],
                                         [192, 204],
                                         [230, 208],
                                         [271, 208]]};
const TABLE_4_BOTTOM_CHART_SETTING =
                        { "x_zero" : 3,
                          "y_zero" : 300,
                          "y_direction" : CHART_Y_DIRECTION.DOWN,
                          "x_grid" : [[ 15,  37,  61],
                                      [ 76, 102, 126],
                                      [140, 165, 189],
                                      [201, 216, 234],
                                      [241, 254, 270]],
                          "y_base" :  [[300, 304, 300],
                                       [300, 304, 300],
                                       [300, 304, 300],
                                       [300, 306, 300],
                                       [300, 308, 300]],
                          "grid_height" : 5.5,
                          "crown_pos": [[[40, 288]],
                                        [[107, 288]],
                                        [[171, 288]],
                                        [[221, 288]],
                                        [[263, 288]]],
                          "root_pos": [[[40, 309]],
                                       [[107, 309]],
                                       [[171, 309]],
                                       [[221, 309]],
                                       [[263, 309]]],
                           "furcation_pos": [[30, 380],
                                             [80, 390],
                                             [150, 400]],
                           "furcation_type": FURCATION_GRADE_TYPE.TRIANGLE,
                           "compact_pos": [[61, 272],
                                           [124, 272],
                                           [188, 272],
                                           [227, 272],
                                           [271, 272]],
                           "tooth_no_pos" : [[27, 292],
                                             [92, 292],
                                             [155, 292],
                                             [206, 292],
                                             [249, 292]],
                           "root_canal_curve" : TABLE_4_BOTTOM_ROOT_CANAL_CURVE};
