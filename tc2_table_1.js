const TABLE_1_ID = "table_1";
const TABLE_1_TOOTH_NO = [18, 17, 16, 15, 14];
const TABLE_1_IMAGE_CLIP = {"key": "palate",
                            "start_x": 18,
                            "start_y": 23,
                            "width": 287,
                            "height": 415
                           };

// TODO: order of array has to be changed if want to move furcation click area up.
const TABLE_1_CLICK_AREA = {"width" : [[70, 61, 64, 44, 48],
                                       [16, 46, 16, 45, 16, 48, 16, 28, 16, 24, 16],
                                       [70, 61, 64, 44, 48],
                                       [16, 37, 16, 43, 16, 50, 16, 29, 16, 32, 16],
                                       [70, 59, 65, 43, 50],
                                       [16, 46, 16, 43, 16, 49, 16, 27, 16, 26, 16],
                                       [43, 27, 28, 31, 35, 30, 43, 50]],
                            "height": [132, 39, 17, 70, 97, 43, 17],
                            "usage": [[CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS],
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
                                      [CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.FURCATION,
                                       CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.NONE],
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
                                      [CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS,
                                       CHART_CLICK_AREA_USAGE.CLASS],
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
                                      [CHART_CLICK_AREA_USAGE.FURCATIONL,
                                       CHART_CLICK_AREA_USAGE.FURCATIONR,
                                       CHART_CLICK_AREA_USAGE.FURCATIONL,
                                       CHART_CLICK_AREA_USAGE.FURCATIONR,
                                       CHART_CLICK_AREA_USAGE.FURCATIONL,
                                       CHART_CLICK_AREA_USAGE.FURCATIONR,
                                       CHART_CLICK_AREA_USAGE.NONE,
                                       CHART_CLICK_AREA_USAGE.NONE]]};
const TABLE_1_TOP_ROOT_CANAL_CURVE =
        [[[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 44, 129, 35, 69]],
         [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 92, 127, 83, 68, 79, 82],
          [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 109, 127, 102, 68, 118, 88],
          [ROOT_CANAL_CURVE_SHAPE.C, 103, 105, 93, 64]],
         [[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 160, 121, 152, 57, 142, 67],
          [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 177, 122, 181, 56, 191, 75],
          [ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 172, 94, 164, 52]],
         [[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 216, 119, 211, 38]],
         [[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 262, 115, 257, 41]]];
const TABLE_1_BOTTOM_ROOT_CANAL_CURVE =
        [[[ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 40, 352, 21, 305, 32, 328]],
         [[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 101, 349, 86, 290]],
         [[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 163, 354, 160, 283],
          [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 151, 330, 145, 289, 140, 308],
          [ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR, 178, 334, 176, 290, 186, 313]],
         [[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 215, 347, 210, 272]],
         [[ROOT_CANAL_CURVE_SHAPE.REVERSE_C, 257, 346, 251, 273]]];
const TABLE_1_TOP_CHART_SETTING =
                        { "x_zero" : 12,
                          "y_zero" : 131,
                          "y_direction" : CHART_Y_DIRECTION.UP,
                          "x_grid" : [[ 25,  43,  60],
                                      [ 80, 100, 119],
                                      [144, 168, 188],
                                      [203, 215, 236],
                                      [245, 260, 276]],
                          "y_base" :  [[131, 127, 131],
                                       [131, 126, 131],
                                       [131, 125, 131],
                                       [125, 119, 129],
                                       [128, 117, 128]],
                          "grid_height" : 5.5,
                          "crown_pos":[[[42, 145]],
                                       [[99, 145]],
                                       [[162, 145]],
                                       [[216, 145]],
                                       [[259, 145]]],
                          "root_pos":[[[26, 83], [41, 83]],
                                      [[85, 83], [98, 83]],
                                      [[152, 83], [168, 83]],
                                      [[215, 83]],
                                      [[252, 45],[260, 83]]],
                          "furcation_pos": [[30, 48],
                                            [90, 40],
                                            [165, 38]],
                          "furcation_type": FURCATION_GRADE_TYPE.TRIANGLE,
                          "compact_pos": [[61, 140],
                                          [123, 140],
                                          [186, 140],
                                          [231, 140],
                                          [271, 140]],
                          "tooth_no_pos" : [[33, 151],
                                            [90, 151],
                                            [155, 151],
                                            [205, 151],
                                            [250, 151]],
                          "root_canal_curve" : TABLE_1_TOP_ROOT_CANAL_CURVE};
const TABLE_1_MIDDLE_CHART_SETTING =
                         {"crown_pos":[[[22, 231]],
                                       [[79, 231]],
                                       [[140, 231]],
                                       [[198, 231]],
                                       [[244, 231]]],
                          "furcation_pos": [[22, 231],
                                            [79, 231],
                                            [140, 231],
                                            [198, 231],
                                            [244, 231]],
                          "furcation_type": FURCATION_GRADE_TYPE.SYMBOLS,
                          "compact_pos": [[53, 205],
                                          [112, 205],
                                          [178, 205],
                                          [223, 205],
                                          [271, 205]]};
const TABLE_1_BOTTOM_CHART_SETTING =
                        { "x_zero" : 5,
                          "y_zero" : 356,
                          "y_direction" : CHART_Y_DIRECTION.UP,
                          "x_grid" : [[ 25,  43,  60],
                                      [ 83,  98, 118],
                                      [141, 164, 185],
                                      [203, 214, 229],
                                      [245, 257, 270]],
                          "y_base" :  [[356, 351, 356],
                                       [356, 350, 356],
                                       [356, 351, 356],
                                       [356, 350, 356],
                                       [356, 348, 356]],
                          "grid_height" : 5.5,
                          "crown_pos":[[[41, 374], [24, 390]],
                                       [[98, 374], [93, 391]],
                                       [[161, 374], [152, 391]],
                                       [[212, 374]],
                                       [[254, 374]]],
                          "root_pos":[[[35, 334], [49, 337], [43, 323],
                                       [45, 327], [54, 349]],
                                      [[98, 334], [79, 306], [113, 321]],
                                      [[161, 334], [144, 316], [180, 317]],
                                      [[215, 334]],
                                      [[257, 334],[255, 272]]],
                          "furcation_pos": [[30, 58],
                                            [90, 50],
                                            [165, 45]],
                          "furcation_type": FURCATION_GRADE_TYPE.BITRIANGLE,
                          "compact_pos": [[61, 367],
                                          [121, 367],
                                          [185, 367],
                                          [229, 367],
                                          [271, 367]],
                          "tooth_no_pos" : [[33, 378],
                                            [88, 378],
                                            [154, 378],
                                            [204, 378],
                                            [247, 378]],
                          "root_canal_curve" : TABLE_1_BOTTOM_ROOT_CANAL_CURVE};
