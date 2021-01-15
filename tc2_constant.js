const CAL_TAG = "cal";
const PD_TAG = "pd";
const CEJGM_TAG = "cejgm";
const BOP_TAG = "bop";
const PLAQUE_TAG = "plaque";

const TABLE_DIV_SET_TAG = "set";
const TABLE_VALUE_SUB_TAG = "value";
const TABLE_RESULT_SUB_TAG = "result";
const TABLE_DOT_SUB_TAG = "dot";
const TABLE_NUM_SUB_TAG = "number";

const TABLE_CONTAINER_SUB_TAG = "container";
const TABLE_TYPE_SUB_TAG = "type";

const TOP_POS_TAG = "top";
const MIDDLE_POS_TAG = "middle";
const BOTTOM_POS_TAG = "bottom";

const PATIENT_DATA_DIV_ID = "patient_data";
const PATIENT_NAME_ID = "p_name";
const PATIENT_CASE_NUMBER_ID = "p_report_no";
const PATIENT_NUMBER_ID = "p_number";
const PATIENT_AGE_ID = "p_age";
const PATIENT_SEX_ID = "p_sex";
const PATIENT_RACE_ID = "p_race";
const PATIENT_TREAT_STAGE_ID = "p_stage_container";
const PATIENT_EXAM_DATE_ID = "p_date";

const PATIENT_STAGE_RADIO_NAME = "p_stage";

const NUMBER_CLASS_DEFAULT_VALUE = 0;
const NUMBER_CLASS_MAX_LENGTH = 1;

const INIT_IMG_CLASS_INDEX = 0;
const INIT_FURCATION_GRADE = 0;
const INIT_TOOTH_COMPACT_VALUE = false;
const INIT_IS_DRAW_TOOTH_NO_VALUE = false;
//NOTE: legacy code, will be deleted in next version
//const INIT_IS_TOOTH_CHIPPED_VALUE = false;
const INIT_DOT_VALUE = false;
const TABLE_DOT_COLORS = {[BOP_TAG] : TABLE_BOP_DOT_COLOR,
                          [PLAQUE_TAG] : TABLE_PLAQUE_DOT_COLOR};

const TABLE_DIV_ALL_SET_SUP_NAMES = [CAL_TAG, PD_TAG, CEJGM_TAG, BOP_TAG, PLAQUE_TAG];
const TABLE_DIV_RESULT_SET_SUP_NAME = CAL_TAG;
const TABLE_DIV_DOT_SET_SUP_NAMES = [BOP_TAG, PLAQUE_TAG];
const TABLE_DIV_VALUE_SET_SUP_NAMES = [PD_TAG, CEJGM_TAG];
const TABLE_DIV_TOP_BOTTOM_POS_TAGS = [TOP_POS_TAG, BOTTOM_POS_TAG];
const TABLE_DIV_ALL_POS_TAGS = [TOP_POS_TAG, MIDDLE_POS_TAG, BOTTOM_POS_TAG];


const CANVAS_NAME = "table_chart";

const NUMBER_CLASS_NAME = "number_type";
const DOT_CLASS_NAME = "dot_type";

const TABLE_COLUMN_VALUE_NUM = 3;
const IMG_TOOTH_CLASSES = {NORMAL: 0,
                           CROWN: 1,
                           CROWNIMPLANT: 2,
                           ENDO: 3,
                           CROWNENDO: 4,
                           MISSING: 5,
                           PONTIC: 6,
                         /*,IMPLANT: 7*/};
const IMG_SET_CLASS_BLACK_INDICE = [IMG_TOOTH_CLASSES.MISSING,
                                    IMG_TOOTH_CLASSES.PONTIC];
const IMG_SET_CLASS_TOOTH_NO_NOT_SHOW_INDICE = [IMG_TOOTH_CLASSES.MISSING];
const FURCATION_GRADE_SYMBOLS = ["", "I", "II", "III"];
const FURCATION_GRADE_TRIANGLE_BASE = [[-5, -7], [0, 7], [5, -7]];
const FURCATION_GRADE_BITRIANGLE_BASE = [[[-18, -5], [-4, 0], [-18, 5]],
                                         [[ 18, -5], [ 4, 0], [ 18, 5]]];
const FURCATION_GRADE_TYPE = {SYMBOLS: FURCATION_GRADE_SYMBOLS,
                              TRIANGLE: FURCATION_GRADE_TRIANGLE_BASE,
                              BITRIANGLE: FURCATION_GRADE_BITRIANGLE_BASE};
const COMPACT_ZIGZAG_BASE = [[0, 0], [15, 1], [1, 5], [16, 6],
                             [2, 10], [15, 11], [3, 15], [16, 16]];
const ROOT_CANAL_CURVE_SHAPE = {C: 0,
                                REVERSE_C: 1,
                                S: 2,
                                REVERSE_S: 3,
                                ONE_ANCHOR: 4,
                                TWO_ANCHOR: 5};
// FURCATIONL and FURCATIONR is tricky to represent furcation grade on a tooth,
// If they are defined in the table click area,
// FURCATIONR must follow FURCATIONL immediately.
// Both grades will be combined into a single value in record.
const CHART_CLICK_AREA_USAGE = {CLASS: "Tooth Class",
                                NO: "Tooth NO.",
                                FURCATION: "Furcation Grade",
                                FURCATIONL: "Furcation Grade Left",
                                FURCATIONR: "Furcation Grade Right",
                                COMPACT: "Teeth Compact",
                                NONE: ""};
const CHART_Y_DIRECTION = {UP: 0, DOWN: 1};
const CHART_IMPLANT_IMG_WIDTH_INC = 2;
const CHART_IMPLANT_IMG_HEIGHT_GRID_NUM = 10;
const GRAY_VALUE_COEF = {R:0.2126, G:0.7152, B:0.0722};
const FLOODFILL_GRAY_VALUE_DEFAULT_THRESHOLD = 130;
const GRAY_VALUE_THRESHOLD_KEY_NAME = "gray_value_threshold";
const IMPLANT_IMAGE_OPACITY_ALPHA = 1;
const TIP_TEXT_OFFSET = [5, -17];
const TOOTH_CLASSES_DIV_OFFSET = [-5, -5];
const MIN_NEGATIVE_CEJGM_VALUE = -9;

// NOTE: Images under img/ are no longer used and replaced by data URL.
//       Teeth images are saved as data URL in the other js file due to local usage without web server
//       TEETH_IMAGE_NAMES below is not used (so are the 2 jpeg) but left for reference
//       Also, the TOOTH_IMPLANT_IMAGE_NAME is not used.
// const TEETH_IMAGE_NAMES = {"palate": "1488730130653.JPEG",
//                            "mandible": "1488730137234.JPEG"};
//
// const CHART_IMAGE_PATH = "img/";
// const TOOTH_IMPLANT_IMAGE_NAME = "1489849301187.JPEG";

const RECORD_FILE_SUB_NAME = ".json";
const RECORD_CHECK_KEY = "tc2_main.key";

const STAT_TABLE_ID = "stat_table";
const STAT_TABLE_NUM_OF_BOP_NAME = "s_bop";
const STAT_TABLE_NUM_OF_PLAQUE_NAME = "s_plaque";
const STAT_TABLE_NUM_OF_TEETH_BOP_NAME = "s_bop_teeth";
const STAT_TABLE_NUM_OF_TEETH_PLAQUE_NAME = "s_plaque_teeth";
const STAT_TABLE_NUM_OF_TOTAL_TEETH_NAME = "s_total_teeth";
const STAT_TABLE_NUM_OF_TOTAL_SITE_NAME = "s_total_site";

const STAT_LEVEL_TABLE_ID = "stat_level_table";
const STAT_LEVEL_PD_1_ID = "pd_level_1";
const STAT_LEVEL_PD_2_ID = "pd_level_2";
const STAT_LEVEL_CEJGM_1_ID = "cejgm_level_1";
const STAT_LEVEL_CEJGM_2_ID = "cejgm_level_2";
const LEVEL_SET_TAG = "level";

// 99 means very large
const STAT_LEVEL_PD_RANGE = {[STAT_LEVEL_PD_1_ID]: [4, 6],
                             [STAT_LEVEL_PD_2_ID]: [7, 99]};
const STAT_LEVEL_CEJGM_RANGE = {[STAT_LEVEL_CEJGM_1_ID]: [1, 2],
                                [STAT_LEVEL_CEJGM_2_ID]: [3, 99]};

const TOOTH_DIMENTION2NO_10DIGIT = [1, 2, 4, 3];

const TOTAL_NUM_OF_ORIGINAL_TEETH = 32;
const SITE_OF_TOOTH_MULTIPPLIER_WITH_POS = 3;
const SITE_OF_TOOTH_MULTIPLIER = SITE_OF_TOOTH_MULTIPPLIER_WITH_POS * 2;
const NONORIGINAL_TOOTH_CLASS_INDICE = [IMG_TOOTH_CLASSES.CROWNIMPLANT,
                                        IMG_TOOTH_CLASSES.MISSING,
                                        IMG_TOOTH_CLASSES.PONTIC];
const TABLE_NO_USAGE_CLASSES = {NONE: 0,
                                DOT: 1,
                                ALL: 2};
