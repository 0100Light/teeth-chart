
const REPORT_LABEL_UNDERLINE_OFFSET = 2;
const REPORT_TITLE_LABEL = {"pos": {"CASE REPORT RECORD": [580, 103]},
                            "font": "bold 44px serif"};
const REPORT_PATIENT_DATA_LABEL = {"pos": {"Patient's Name :": [46, 191],
                                           "Case Report No.": [1111, 191],
                                           "Patient's Number :": [46, 233],
                                           "Age": [1058, 233],
                                           "Sex": [1196, 233],
                                           "Race": [1348, 233],
                                           "Stage of Therapy :": [46, 275],
                                           "Pre-treatment": [410, 275],
                                           "Re-evaluation": [680, 275],
                                           "Post-Treatment": [947, 275],
                                           "Date of exam:": [1221, 275]},
                                   "font": "30px Georgia, serif"};
const REPORT_UPPER_CHART_LABEL = {"pos": {"FACIAL": [51, 563],
                                          "PALATAL": [51, 993]},
                                  "font": "bold 38px serif"};
const REPORT_DIRECTION_LABEL = {"pos": {"RIGHT": [71, 1282],
                                        "LEFT": [1533, 1282]},
                                "font": "bold 36px serif"};
const REPORT_LOWER_CHART_LABEL = {"pos": {"FACIAL": [51, 1619],
                                          "LINGUAL": [51, 2001]},
                                  "font": "bold 38px serif"};
const REPORT_CHART_COMMENT = {"pos": {"Mobility Scale": [51, 707],
                                      "Used:": [51, 756],
                                      "Furcation Grade": [51, 1715],
                                      "System Used" : [51, 1764]},
                              "font": "28px serif"};
const REPORT_CHART_REFERENCE = {"pos": {"Miller, 1953": [51, 807],
                                        "Hamp, 1975": [51, 1815],},
                                "font": '28px "Courier New", Courier, monospace',
                                "is_underline" : true};
const REPORT_SINGLE_LABEL_DATAS = [REPORT_TITLE_LABEL,
                                   REPORT_PATIENT_DATA_LABEL,
                                   REPORT_UPPER_CHART_LABEL,
                                   REPORT_DIRECTION_LABEL,
                                   REPORT_LOWER_CHART_LABEL,
                                   REPORT_CHART_COMMENT,
                                   REPORT_CHART_REFERENCE];
const REPORT_TABLE_LABEL = {"pos": {"CAL & BOP": [[33, 368],
                                                  [33,1236],
                                                  [33, 1379],
                                                  [33, 2244]],
                                    "PD & Plaque": [[33, 418],
                                                    [33,1186],
                                                    [33, 1429],
                                                    [33, 2194]],
                                    "CEJ-GM": [[33, 468],
                                               [33, 1136],
                                               [33, 1479],
                                               [33, 2144]]},
                            "font": '42px "Comic Sans MS", cursive, sans-serif'};
const REPORT_PATIENT_DATA_LINE = [[[305, 196], [1092, 196]],
                                  [[1331, 196], [1582, 196]],

                                  [[320, 238], [1039, 238]],
                                  [[1111, 238], [1178, 238]],
                                  [[1245, 238], [1335, 238]],
                                  [[1413, 238], [1574, 238]],

                                  [[1410, 280], [1609, 280]]];
const REPORT_PATIENT_DATA_INPUT = {"pos": {[PATIENT_NAME_ID]: [698, 195],
                                           [PATIENT_CASE_NUMBER_ID]: [1456, 195],
                                           [PATIENT_NUMBER_ID]: [679, 237],
                                           [PATIENT_AGE_ID]: [1139, 237],
                                           [PATIENT_SEX_ID]: [1290, 237],
                                           [PATIENT_RACE_ID]: [1493, 237],
                                           [PATIENT_EXAM_DATE_ID]: [1509, 279]},
                                   "font": "30px serif"};
const REPORT_PATIENT_DATA_STAGE = {"name": PATIENT_STAGE_RADIO_NAME,
                                   "pos": [[505, 264], [772, 264], [1050, 264]],
                                   "radius": [[110, 18], [116, 18], [120, 18]],
                                   "line_width": 1};

const REPORT_TABLE_POS = {[TABLE_1_ID]: {"table_top_pos": [285, 326],
                                         "table_bottom_pos": [285, 1094],
                                         "canvas_pos": [277, 480]
                                        },
                          [TABLE_2_ID]: {"table_top_pos": [713, 326],
                                         "table_bottom_pos": [713, 1094],
                                         "canvas_pos": [720, 480]
                                        },
                          [TABLE_3_ID]: {"table_top_pos": [1220, 326],
                                         "table_bottom_pos": [1220, 1094],
                                         "canvas_pos": [1222, 480]
                                       },
                          [TABLE_4_ID]: {"table_top_pos": [285, 1337],
                                         "table_bottom_pos": [285, 2102],
                                         "canvas_pos": [277, 1497]
                                        },
                          [TABLE_5_ID]: {"table_top_pos": [713, 1337],
                                         "table_bottom_pos": [713, 2102],
                                         "canvas_pos": [728, 1497]
                                        },
                          [TABLE_6_ID]: {"table_top_pos": [1220, 1337],
                                         "table_bottom_pos": [1220, 2102],
                                         "canvas_pos": [1212, 1497]
                                       },
                          "common": {"chart_size_ratio": 1.43,
                                     "table_row_num": 3,
                                     "table_grid_width": 79,
                                     "table_grid_height": 50,
                                     "dot_offset": [15, 13],
                                     "num_offset": [3, 40],
                                     "dot_dist": 25,
                                     "num_dist": 25,
                                     "num_font": "22px sans-serif",
                                     "dot_radius": 3}
                         };
