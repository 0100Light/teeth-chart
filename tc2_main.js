const DEBUG_MODE = false;

let DEBUG_DRAW_GRID = false;
let DEBUG_CLICK_AREA = false;
let DEBUG_GET_POINT = false;
let DEBUG_ONLY_ORIGINAL_BACKGROUND = false;
let DEBUG_REPORT_CANVAS = false;

const ALL_TABLE_ID = [TABLE_1_ID, TABLE_2_ID, TABLE_3_ID,
                      TABLE_4_ID, TABLE_5_ID, TABLE_6_ID];
const ALL_TABLE_TOOTH_NO = {[TABLE_1_ID] : TABLE_1_TOOTH_NO,
                            [TABLE_2_ID] : TABLE_2_TOOTH_NO,
                            [TABLE_3_ID] : TABLE_3_TOOTH_NO,
                            [TABLE_4_ID] : TABLE_4_TOOTH_NO,
                            [TABLE_5_ID] : TABLE_5_TOOTH_NO,
                            [TABLE_6_ID] : TABLE_6_TOOTH_NO};
const ALL_CLICK_AREA_SET = {[TABLE_1_ID] : TABLE_1_CLICK_AREA,
                            [TABLE_2_ID] : TABLE_2_CLICK_AREA,
                            [TABLE_3_ID] : TABLE_3_CLICK_AREA,
                            [TABLE_4_ID] : TABLE_4_CLICK_AREA,
                            [TABLE_5_ID] : TABLE_5_CLICK_AREA,
                            [TABLE_6_ID] : TABLE_6_CLICK_AREA};
const ALL_CHART_SETTING = { [TABLE_1_ID] :
                               {[TOP_POS_TAG] : TABLE_1_TOP_CHART_SETTING,
                                [MIDDLE_POS_TAG] : TABLE_1_MIDDLE_CHART_SETTING,
                                [BOTTOM_POS_TAG] : TABLE_1_BOTTOM_CHART_SETTING},
                            [TABLE_2_ID] :
                              {[TOP_POS_TAG] : TABLE_2_TOP_CHART_SETTING,
                               [MIDDLE_POS_TAG] : TABLE_2_MIDDLE_CHART_SETTING,
                               [BOTTOM_POS_TAG] : TABLE_2_BOTTOM_CHART_SETTING},
                            [TABLE_3_ID] :
                              {[TOP_POS_TAG] : TABLE_3_TOP_CHART_SETTING,
                               [MIDDLE_POS_TAG] : TABLE_3_MIDDLE_CHART_SETTING,
                               [BOTTOM_POS_TAG] : TABLE_3_BOTTOM_CHART_SETTING},
                            [TABLE_4_ID] :
                              {[TOP_POS_TAG] : TABLE_4_TOP_CHART_SETTING,
                               [MIDDLE_POS_TAG] : TABLE_4_MIDDLE_CHART_SETTING,
                               [BOTTOM_POS_TAG] : TABLE_4_BOTTOM_CHART_SETTING},
                            [TABLE_5_ID] :
                              {[TOP_POS_TAG] : TABLE_5_TOP_CHART_SETTING,
                               [MIDDLE_POS_TAG] : TABLE_5_MIDDLE_CHART_SETTING,
                               [BOTTOM_POS_TAG] : TABLE_5_BOTTOM_CHART_SETTING},
                            [TABLE_6_ID] :
                              {[TOP_POS_TAG] : TABLE_6_TOP_CHART_SETTING,
                               [MIDDLE_POS_TAG] : TABLE_6_MIDDLE_CHART_SETTING,
                               [BOTTOM_POS_TAG] : TABLE_6_BOTTOM_CHART_SETTING}
                              };
const ALL_IMG_CLIP = {[TABLE_1_ID]: TABLE_1_IMAGE_CLIP,
                      [TABLE_2_ID]: TABLE_2_IMAGE_CLIP,
                      [TABLE_3_ID]: TABLE_3_IMAGE_CLIP,
                      [TABLE_4_ID]: TABLE_4_IMAGE_CLIP,
                      [TABLE_5_ID]: TABLE_5_IMAGE_CLIP,
                      [TABLE_6_ID]: TABLE_6_IMAGE_CLIP};

const GLOBAL_DATA_IMPLANT_IMG = "implant_img";
const GLOBAL_DATA_RECORD_FILE_NAME = "file_name";
const GLOBAL_DATA_STATISTIC_KEY = "statistic";

const DATA_IMAGEDATA_KEY = "imagedata_object";
const DATA_CLICK_AREA_SET_KEY = "click_area";
const DATA_IMG_CLIP_KEY = "img_clip";
const DATA_TOOTH_NO_KEY = "tooth_no";
const DATA_CHART_SETTING_KEY = "chart_setting";
const DATA_CLICK_AREA2DATA_INDEX_KEY = "click_area2index";

const DATA_IMG_CLASS_KEY = "img_class";
const DATA_FURCATION_GRADE_KEY = "furcation_grade";
const DATA_TOOTH_COMPACT_KEY = "compact";
//NOTE: legacy code, will be deleted in next version
//const DATA_IS_TOOTH_CHIPPED_KEY = "is_tooth_chipped";
const DATA_IS_DRAW_TOOTH_NO = "is_draw_tooth_no";
const DATA_TABLE_VALUE_KEY = "value";
const DATA_CANVAS_KEY = "canvas";

window.onload = function () {

  // check if is debug mode.
  if (DEBUG_MODE){
    DEBUG_DRAW_GRID = true;
    DEBUG_CLICK_AREA = true;
    DEBUG_GET_POINT = true;
    DEBUG_ONLY_ORIGINAL_BACKGROUND = false;
    DEBUG_REPORT_CANVAS = true;
  }

  var teeth_image_urls = TEETH_IMAGE_URLS;
  var all_img_clip = ALL_IMG_CLIP;

  create_teeth_tables()

  if (DEBUG_REPORT_CANVAS) {
    document.getElementById("report_div").style.position = "absolute";
    document.getElementById("report_canvas").style.display = "inline";
  }

  setGlobalDefaultValue();
  setStatisticTableDefaultValue();
  setStatLevelTableDefaultValue();
  setFunc2GlobalElement();

  for (var key in teeth_image_urls) {
    var img = new Image();
    img.myUserData = {};
    img.myUserData.key = key;
    img.addEventListener("load", function () {
      for (var table_id in all_img_clip) {
        if (all_img_clip[table_id].key == this.myUserData.key) {
          var table = document.getElementById(table_id);
          var canvas = table.querySelectorAll("[name=" + CANVAS_NAME + "]")
                         .item(0);
          var ctx = canvas.getContext("2d");
          var idata;

          showToothClassDiv(false);

          ctx.drawImage(this,
                        all_img_clip[table_id].start_x, all_img_clip[table_id].start_y,
                        all_img_clip[table_id].width, all_img_clip[table_id].height,
                        0, 0,
                        all_img_clip[table_id].width, all_img_clip[table_id].height);
          idata = ctx.getImageData(0, 0, canvas.width, canvas.height);

          setTableDefaultValue(table);
          initTableUserData(table,
                            idata,
                            ALL_CLICK_AREA_SET[table_id],
                            ALL_CHART_SETTING[table_id],
                            ALL_IMG_CLIP[table_id],
                            ALL_TABLE_TOOTH_NO[table_id]);
          setFunc2Table(table);
          getTableInputNumber(table);
          drawChartCurve(table);
        }
      }
    });
    img.src = teeth_image_urls[key];
  }
}

window.onunload = function () {
  for (var i = 0; i < ALL_TABLE_ID.length; ++i) {
    var table_id = ALL_TABLE_ID[i];
    var table = document.getElementById(table_id);

    clearChart(table);
  }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function getStyleProp(elem, prop){
    if(window.getComputedStyle)
        return window.getComputedStyle(elem, null).getPropertyValue(prop);
    else if(elem.currentStyle) return elem.currentStyle[prop]; //IE
}

function setTableDefaultValue(table) {
  var table_list = table.getElementsByClassName(NUMBER_CLASS_NAME);

  for (var i = 0; i < table_list.length; ++i) {
    table_list.item(i).value = NUMBER_CLASS_DEFAULT_VALUE;
    table_list.item(i).maxLength = NUMBER_CLASS_MAX_LENGTH;
  }
}

function setGlobalDefaultValue() {
  var img = new Image();

  document.myUserData = {};
  img.addEventListener("load", function () {
    document.myUserData[GLOBAL_DATA_IMPLANT_IMG] = this;
    });
  img.src = IMPLANT_IMAGE_URL;

  document.myUserData[GLOBAL_DATA_RECORD_FILE_NAME] = RECORD_FILE_NAME_DEFAULT;
}

function createStatStrWithPercentData(value, total) {
  var p = parseInt(value) * 100 / parseInt(total)
  return value.toString() + " (" + p.toFixed(2) + "%)";
}

function setStatisticTableDefaultValue() {
  var stat_div = document.getElementById(STAT_TABLE_ID);

  var input_text = stat_div.querySelectorAll("[type=text]");

  var total_teeth_num = TOTAL_NUM_OF_ORIGINAL_TEETH;
  var total_site_num = total_teeth_num * SITE_OF_TOOTH_MULTIPLIER;
  var value;

  document.myUserData[GLOBAL_DATA_STATISTIC_KEY] = {};
  for (var i = 0; i < input_text.length; ++i) {
    var curr_in = input_text[i];
    switch (curr_in.name) {
      case STAT_TABLE_NUM_OF_TOTAL_TEETH_NAME:
        value = total_teeth_num;
        break;
      case STAT_TABLE_NUM_OF_TOTAL_SITE_NAME:
        value = total_site_num;
        break;
      default:
        value = 0;
    }
    document.myUserData[GLOBAL_DATA_STATISTIC_KEY][curr_in.name] = value;

    switch (curr_in.name) {
      case STAT_TABLE_NUM_OF_BOP_NAME:
      case STAT_TABLE_NUM_OF_PLAQUE_NAME:
         curr_in.value = createStatStrWithPercentData(value, total_site_num);
         break;
      case STAT_TABLE_NUM_OF_TEETH_BOP_NAME:
      case STAT_TABLE_NUM_OF_TEETH_PLAQUE_NAME:
         curr_in.value = createStatStrWithPercentData(value, total_teeth_num);
         break;
      default:
        curr_in.value = value;
    }
  }

}

// TODO: fix this stupid initialization, no initial value now, this might be removed
function setStatLevelTableDefaultValue() {
  var id2content = {[STAT_LEVEL_PD_1_ID]: false,
                    [STAT_LEVEL_PD_2_ID]: false,
                    [STAT_LEVEL_CEJGM_1_ID]: false,
                    [STAT_LEVEL_CEJGM_2_ID]: false,
                   };

  for (var key in id2content) {
    var table = document.getElementById(key);
    var tds = table.querySelectorAll("td");
    var strs = ["18 17 16 15 14 13 12 11",
                "21 22 23 24 25 26 27 28",
                "48 47 46 45 44 43 42 41", 
                "31 32 33 34 35 36 37 38"];

    for (var i = 0; i < tds.length; ++i) {
      tds[i].innerHTML = id2content[key] ? strs[i] : "";
    }
  }
}

function setFunc2GlobalElement() {
  var tooth_class_div = document.getElementById("tooth_classes");
  var tooth_class_radio = tooth_class_div.querySelectorAll("[type=radio]");

  for (var i = 0; i < tooth_class_radio.length; ++i) {
    tooth_class_radio[i].addEventListener("click", function () {
      var target_table = tooth_class_div.myTargetData[0];
      var target_i = tooth_class_div.myTargetData[1];
      var data = target_table.myUserData;
      var img_class = data[DATA_IMG_CLASS_KEY];

      img_class[target_i] = IMG_TOOTH_CLASSES[this.value.toUpperCase()];

      hideTableColumn(target_table, target_i + 1, img_class[target_i]);
      //data[DATA_IS_TOOTH_CHIPPED_KEY][target_i] = is_chipped;
      redrawChart(target_table);
      updateStatisticTable();
      updateStatLevelTable();
    }, false);
  }

  tooth_class_div.addEventListener("mouseleave", function () {
    showToothClassDiv(false);
  }, false);

  document.getElementById("report_button")
          .addEventListener("click", function () {
    var canvas = drawReportCanvas();
    // NOTE: Since the download attribute is not available for the Safari old version
    //       The code below is just left in case of the reference for future usage
    // var img_url = canvas.toDataURL().replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    //
    // var pom = document.createElement('a');
    // pom.setAttribute('href', img_url);
    // pom.setAttribute('download', "test.png");
    //
    // if (document.createEvent) {
    //     var event = document.createEvent('MouseEvents');
    //     event.initEvent('click', true, true);
    //     pom.dispatchEvent(event);
    // }
    // else {
    //     pom.click();
    // }
    var img = document.getElementById("report_img");

    img.addEventListener("load", function () {
      showReportDiv(true);
    });
    img.src = canvas.toDataURL();

    if (img.complete) {
      showReportDiv(true);
    }
  });

  document.getElementById("close_report")
          .addEventListener("click", function () {
    showReportDiv(false);
  });

  document.getElementById("load_record_button")
          .addEventListener("click", loadRecordOnClick);

  document.getElementById("save_record_button")
          .addEventListener("click", saveRecordOnCLick);
}

function setFunc2Table(table) {
  var canvas;

  var next_table_i = ALL_TABLE_ID.indexOf(table.id) + 1;
  var next_table = next_table_i < ALL_TABLE_ID.length ?
                      document.getElementById(ALL_TABLE_ID[next_table_i]) :
                      null;

  for (var i = 0; i < TABLE_DIV_VALUE_SET_SUP_NAMES.length; ++i) {
      var value_list = table.querySelectorAll(
                                  "[name=" +
                                  concatNames(TABLE_DIV_VALUE_SET_SUP_NAMES[i],
                                              TABLE_VALUE_SUB_TAG) +
                                  "]");
      var next_table_value_list = next_table != null ?
                                  next_table.querySelectorAll(
                                  "[name=" +
                                  concatNames(TABLE_DIV_VALUE_SET_SUP_NAMES[i],
                                              TABLE_VALUE_SUB_TAG) +
                                  "]") : null;
      for (var j = 0; j < value_list.length; ++j) {
        value_list[j].myUserData = {};
        value_list[j].myUserData.isLast = j == value_list.length - 1;
        value_list[j].myUserData.nextTable = next_table;
        value_list[j].myUserData.nextTableValueList =
                                             next_table_value_list;
        value_list[j].addEventListener('focus', function() {
          this.myUserData.prevValue = this.value;
          this.value = "";
        });
        value_list[j].addEventListener('blur', function() {
          var value = parseInt(this.value);
          if (isNaN(value)) {
            value = parseInt(this.myUserData.prevValue);
          }

          if (isNaN(value)) {
            value = 0;
          } else if (value > 10) {
            value = 10;
          } else if (value < 0 &&
                     this.name != concatNames(CEJGM_TAG, TABLE_VALUE_SUB_TAG)) {
            value = 0;
          } else if (value < MIN_NEGATIVE_CEJGM_VALUE) {
            value = MIN_NEGATIVE_CEJGM_VALUE;
          }


          this.style.color = value >= TABLE_NUMBER_LARGE_THRESHOLD ?
                             TABLE_NUMBER_COLOR_LARGE : TABLE_NUMBER_COLOR_DEFAULT;
          this.value = value;
          getTableInputNumber(table);
          setTableResultValue(table);
          redrawChart(table);
          updateStatLevelTable();
        });

      }

      value_list[value_list.length / 2 - 1].
                  addEventListener('keydown', tabKeyDown, false);
      value_list[value_list.length - 1].
                  addEventListener('keydown', tabKeyDown, false);
      function tabKeyDown(event) {
          var TABKEY = 9;
          var tdata = event.target.myUserData;
          var ntvl = tdata.nextTableValueList;

          if (event.keyCode == TABKEY &&
              document.getElementById("tab2next_table").checked) {
            if (ntvl != null && tdata.nextTable != null &&
                                tdata.nextTable.id != TABLE_4_ID) {
              var next_value_item = tdata.isLast ?
                                    ntvl[ntvl.length / 2] : ntvl[0];
              next_value_item.focus();
            }
            if (event.preventDefault) {
              event.preventDefault();
            }
          }
      }
  }

  var dot_class_name = concatNames(TABLE_DOT_SUB_TAG, TABLE_CONTAINER_SUB_TAG);
  var dot_container = table.querySelectorAll("[class=" + dot_class_name + "]");

  for (var i = 0; i < dot_container.length; ++i) {
    var re = new RegExp("([a-z]+)_[a-z0-9_]", "i");
    var dot_tag = re.exec(dot_container[i].getAttribute("name"))[1];
    var dot_name = concatNames(dot_tag, TABLE_DOT_SUB_TAG);
    var dot_list = dot_container[i].querySelectorAll("[name=" + dot_name + "]");

    for (var j = 0; j < dot_list.length; ++j) {
      dot_list[j].myUserData = { "parentTable": table,
                                 "value_index": j};

      dot_list[j].addEventListener("click", function () {
        var parent = this.parentElement || this.parentNode;
        var table_value = this.myUserData
                              .parentTable
                              .myUserData[DATA_TABLE_VALUE_KEY];
        var dot_value = table_value[parent.getAttribute("name")];
        var curr_color = getStyleProp(this, "color");

        if (curr_color != "rgb(255, 255, 255)") {
          this.innerHTML = "&nbsp;";
          this.style.color = "#FFFFFF";
          dot_value[this.myUserData.value_index] = false;
        } else {
          re = new RegExp("([a-z]+)_" + TABLE_DOT_SUB_TAG, "i");
          dot_tag = re.exec(this.getAttribute("name"))[1];

          this.innerHTML = "&#8226";
          this.style.color = TABLE_DOT_COLORS[dot_tag];
          dot_value[this.myUserData.value_index] = true;
        }

        updateStatisticTable();
      });

      dot_list[j].addEventListener('mousemove', function (event) {

        var text = this.getAttribute("name").match("bop") ? "BOP" : "Plaque";
        showTip(true, event.pageX, event.pageY, text);
        }, false);

      dot_list[j].addEventListener('mouseout', function () {
          showTip(false);
          }, false);
    }
  }

  canvas = table.querySelectorAll("[name=" + CANVAS_NAME + "]").item(0);
  canvas.myParentTable = table;
  canvas.addEventListener('click', chartOnClick, false);
  canvas.addEventListener('mousemove', chartOnMouseMove, false);
  canvas.addEventListener('mouseleave', chartOnMouseLeave, false);
}

function combineLRFurcationGrade(left, right) {
  return left * 10 + right;
}

function extractLRFurcationGrade(grade) {
  var right = grade % 10;

  return [(grade - right) / 10, right];
}

function chartOnClick(event) {
  var data = this.myParentTable.myUserData;
  var click_areas = data[DATA_CLICK_AREA_SET_KEY];
  var rect = this.getBoundingClientRect();
  var pos_x = event.clientX - rect.left;
  var pos_y = event.clientY - rect.top;

  var [column_i, row_i] = getColumnRowIndex(click_areas, pos_x, pos_y);

  if (DEBUG_GET_POINT) {
    var temp_d = this.getContext("2d").getImageData(pos_x, pos_y, 1, 1).data;
    console.log("pox = (" + pos_x + ", "+ pos_y +
                "), area = (" + row_i + ", " + column_i +
                "), color = (R:" + temp_d[0] + ", G:" + temp_d[1] +
                ", B:" + temp_d[2] +  ", A:" + temp_d[3]+")"
                );
  }

  if (DEBUG_ONLY_ORIGINAL_BACKGROUND) {
    return;
  }

  var area_usage = click_areas.usage[row_i][column_i];
  var data_index = data[DATA_CLICK_AREA2DATA_INDEX_KEY][row_i][column_i];

  switch (area_usage) {
    case CHART_CLICK_AREA_USAGE.CLASS:
      showToothClassDiv(true, event.pageX, event.pageY, this.myParentTable, data_index);
      break;
    case CHART_CLICK_AREA_USAGE.FURCATION:
      var furcation_grade = data[DATA_FURCATION_GRADE_KEY];

      furcation_grade[data_index[0]][data_index[1]] =
           (furcation_grade[data_index[0]][data_index[1]] + 1)
           % FURCATION_GRADE_SYMBOLS.length;

      redrawChart(this.myParentTable);
      break;
    case CHART_CLICK_AREA_USAGE.FURCATIONL:
    case CHART_CLICK_AREA_USAGE.FURCATIONR:
      var left, right;
      furcation_grade = data[DATA_FURCATION_GRADE_KEY];

      [left, right] = extractLRFurcationGrade(
                           furcation_grade[data_index[0]][data_index[1]]);
      if (CHART_CLICK_AREA_USAGE.FURCATIONL === area_usage) {
        left = (left + 1) % FURCATION_GRADE_SYMBOLS.length;
      } else {
        right = (right + 1) % FURCATION_GRADE_SYMBOLS.length;
      }
      furcation_grade[data_index[0]][data_index[1]] =
           combineLRFurcationGrade(left, right);

      redrawChart(this.myParentTable);
      break;
    case CHART_CLICK_AREA_USAGE.NO:
      data[DATA_IS_DRAW_TOOTH_NO] = data[DATA_IS_DRAW_TOOTH_NO] ? false : true;
      redrawChart(this.myParentTable);
      break;
    case CHART_CLICK_AREA_USAGE.COMPACT:
      data[DATA_TOOTH_COMPACT_KEY][data_index] =
           data[DATA_TOOTH_COMPACT_KEY][data_index] ? false : true;
      redrawChart(this.myParentTable);
      break;
    default:
  }
}

function showToothClassDiv(is_show, left = 0, top = 0, table = null, index = -1) {
  var tooth_class_div = document.getElementById("tooth_classes");
  var tooth_class_radio = tooth_class_div.querySelectorAll("[type=radio]");

  if (!is_show) {
    tooth_class_div.style.visibility = "hidden";
    tooth_class_div.myTargetData = null;
  } else {
    tooth_class_div.myTargetData = [table, index];
    tooth_class_div.style.left = event.pageX + TOOTH_CLASSES_DIV_OFFSET[0];
    tooth_class_div.style.top = event.pageY + TOOTH_CLASSES_DIV_OFFSET[1];
    if (null != table && index >= 0) {
      tooth_class_radio[table.myUserData[DATA_IMG_CLASS_KEY][index]].checked = true;
    }
    tooth_class_div.style.visibility = "visible";
  }
}

function chartOnMouseMove(event) {
  var data = this.myParentTable.myUserData;
  var click_areas = data[DATA_CLICK_AREA_SET_KEY];
  var chart_setting = data[DATA_CHART_SETTING_KEY];

  var tip_text = document.getElementById("tip_text");

  var rect = this.getBoundingClientRect();
  var pos_x = event.clientX - rect.left;
  var pos_y = event.clientY - rect.top;

  var [column_i, row_i] = getColumnRowIndex(click_areas, pos_x, pos_y);
  var is_cursor_auto = false, title_table;

  var area_usage = click_areas.usage[row_i][column_i];

  if (CHART_CLICK_AREA_USAGE.NONE === area_usage) {
    this.style.cursor = "auto";
    showTip(false);
  } else {
    this.style.cursor = "pointer";
    showTip(true, event.pageX, event.pageY, area_usage);
  }
}

function chartOnMouseLeave(event) {
  var node = event.relatedTarget || event.toElemnt;
  var tooth_class_div = document.getElementById("tooth_classes");

  showTip(false);

  if (!tooth_class_div.contains(node)) {
    showToothClassDiv(false);
  }

}

function showTip(is_show, left = 0, top = 0, text = "") {
  var tip_text = document.getElementById("tip_text");

  if (!is_show) {
    tip_text.style.visibility = "hidden";
  } else {
    tip_text.style.left = left + TIP_TEXT_OFFSET[0];
    tip_text.style.top = top + TIP_TEXT_OFFSET[1];
    tip_text.innerHTML = text;
    tip_text.style.visibility = "visible";
  }
}

function getColumnRowIndex(click_areas, pos_x, pos_y) {
  var column_i, row_i;

  var check_x, check_y = 0;
  for (row_i = 0; row_i < click_areas.height.length; ++row_i) {
    check_y += click_areas.height[row_i];
    if (pos_y <= check_y) {
      break;
    }
  }

  check_x = 0;
  for (column_i = 0; column_i < click_areas.width[row_i].length; ++column_i) {
    check_x += click_areas.width[row_i][column_i];
    if (pos_x <= check_x) {
      break;
    }
  }

  return [column_i, row_i];
}

function initTableUserData(table, img, click_areas, chart_setting, img_clip, tooth_no) {
  table.myUserData = {};
  table.myUserData[DATA_CANVAS_KEY] = table.querySelectorAll("[name=" + CANVAS_NAME + "]")
                                           .item(0);
  table.myUserData[DATA_IMAGEDATA_KEY] = img;
  table.myUserData[DATA_CLICK_AREA_SET_KEY] = click_areas;
  table.myUserData[DATA_CHART_SETTING_KEY] = chart_setting;
  table.myUserData[DATA_IMG_CLIP_KEY] = img_clip;
  table.myUserData[DATA_TOOTH_NO_KEY] = tooth_no;

  table.myUserData[DATA_TABLE_VALUE_KEY] = {};
  for (var i = 1; i <= tooth_no.length; ++i) {
    for (var j = 0; j < TABLE_DIV_TOP_BOTTOM_POS_TAGS.length; ++j) {
      // CAL, PD, CEJ-GM values are not init here
      // since they will be inserted/replaced after value changed
      for (var key in TABLE_DOT_COLORS) {
        var set_name = concatNames(key,
                                   TABLE_DIV_TOP_BOTTOM_POS_TAGS[j],
                                   TABLE_DIV_SET_TAG,
                                   i.toString());
        table.myUserData[DATA_TABLE_VALUE_KEY][set_name] =
                   [INIT_DOT_VALUE, INIT_DOT_VALUE, INIT_DOT_VALUE];
      }
    }
  }

  //table.myUserData[DATA_IS_TOOTH_CHIPPED_KEY] = [];
  //for (var i = 1; i <= tooth_no.length; ++i) {
  //  table.myUserData[DATA_IS_TOOTH_CHIPPED_KEY].push(INIT_IS_TOOTH_CHIPPED_VALUE);
  //}

  table.myUserData[DATA_IS_DRAW_TOOTH_NO] = INIT_IS_DRAW_TOOTH_NO_VALUE;
  table.myUserData[DATA_IMG_CLASS_KEY] = [];
  table.myUserData[DATA_FURCATION_GRADE_KEY] = [[], [], []];
  for (var i = 0; i < tooth_no.length; ++i) {
    table.myUserData[DATA_IMG_CLASS_KEY].push(INIT_IMG_CLASS_INDEX);
    for (var j = 0; j < table.myUserData[DATA_FURCATION_GRADE_KEY].length; ++j) {
      table.myUserData[DATA_FURCATION_GRADE_KEY][j].push(INIT_FURCATION_GRADE);
    }
  }
  table.myUserData[DATA_TOOTH_COMPACT_KEY] = [];
  for (var i = 0; i < tooth_no.length + 1; ++i) {
    table.myUserData[DATA_TOOTH_COMPACT_KEY].push(INIT_TOOTH_COMPACT_VALUE);
  }

  table.myUserData[DATA_CLICK_AREA2DATA_INDEX_KEY] = [];
  var furcation_i = 0;
  for (var i = 0; i < click_areas.usage.length; ++i) {
    var img_class_i = furcation_j = compact_i = 0;
    var is_furcation_row = false;
    table.myUserData[DATA_CLICK_AREA2DATA_INDEX_KEY].push([]);
    for (var j = 0; j < click_areas.usage[i].length; ++j) {
      var item_value;
      switch (click_areas.usage[i][j]) {
        case CHART_CLICK_AREA_USAGE.CLASS:
          item_value = img_class_i++;
          break;
        case CHART_CLICK_AREA_USAGE.FURCATION:
          item_value = [furcation_i, furcation_j++];
          is_furcation_row = true;
          break;
        case CHART_CLICK_AREA_USAGE.FURCATIONL:
          item_value = [furcation_i, furcation_j];
          is_furcation_row = true;
          break;
        case CHART_CLICK_AREA_USAGE.FURCATIONR:
          item_value = [furcation_i, furcation_j++];
          break;
        case CHART_CLICK_AREA_USAGE.COMPACT:
          item_value = compact_i++;
          break;
        case CHART_CLICK_AREA_USAGE.NONE:
        case CHART_CLICK_AREA_USAGE.NO:
          item_value = null;
      }
      table.myUserData[DATA_CLICK_AREA2DATA_INDEX_KEY][i].push(item_value);
    }

    if (is_furcation_row) {
      ++furcation_i;
    }
  }
}

function getTableNoUsageClass(img_c) {
  if (IMG_SET_CLASS_BLACK_INDICE.indexOf(img_c) >= 0) {
    return TABLE_NO_USAGE_CLASSES.ALL;
  }

  if (NONORIGINAL_TOOTH_CLASS_INDICE.indexOf(img_c) >= 0) {
    return TABLE_NO_USAGE_CLASSES.DOT;
  }
  return TABLE_NO_USAGE_CLASSES.NONE;
}

function hideTableColumn(table, which_column, img_c) {
  var no_usage_class = getTableNoUsageClass(img_c);
  var show_sup_names = [], hide_sup_names = [];

  switch (no_usage_class) {
    case TABLE_NO_USAGE_CLASSES.DOT:
      hide_sup_names = TABLE_DIV_DOT_SET_SUP_NAMES;
      show_sup_names = TABLE_DIV_VALUE_SET_SUP_NAMES;
      show_sup_names.push(TABLE_DIV_RESULT_SET_SUP_NAME);
      break;
    case TABLE_NO_USAGE_CLASSES.ALL:
      hide_sup_names = TABLE_DIV_ALL_SET_SUP_NAMES;
      break;
    default:
      show_sup_names = TABLE_DIV_ALL_SET_SUP_NAMES;
  }

  setMatchDivVisibility(table, show_sup_names, which_column, "visible");
  setMatchDivVisibility(table, hide_sup_names, which_column, "hidden");

  function setMatchDivVisibility(table, sup_names, which_column, value) {
    var name_str = "";
    var pos_tags = TABLE_DIV_TOP_BOTTOM_POS_TAGS;

    if (sup_names.length <= 0)
      return;

    for (var i = 0; i < pos_tags.length; ++i) {
      for (var j = 0; j < sup_names.length; ++j) {
        var name = concatNames(sup_names[j],
          pos_tags[i],
          TABLE_DIV_SET_TAG,
          which_column.toString());
        name_str += "[name=" + name + "]";
        if (j < sup_names.length - 1) {
          name_str += ", ";
        }
      }
      if (i < pos_tags.length - 1) {
        name_str += ", ";
      }
    }

    var set = table.querySelectorAll(name_str);
    for (var i = 0; i < set.length; ++i) {
      set[i].style.visibility = value;
    }
  }
}

function redrawChart(table) {

  clearChart(table);

  drawToothClass(table);
  drawFurcation(table);
  drawToothNo(table);
  drawCompact(table);
  drawChartCurve(table);
}

function clearChart(table) {
  var canvas = table.myUserData[DATA_CANVAS_KEY];
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawToothClass(table) {
  var data = table.myUserData;

  var imagedata = data[DATA_IMAGEDATA_KEY];
  var chart_setting_set = data[DATA_CHART_SETTING_KEY];

  var canvas = data[DATA_CANVAS_KEY];
  var ctx = canvas.getContext("2d");

  if (DEBUG_ONLY_ORIGINAL_BACKGROUND) {
    ctx.putImageData(imagedata, 0, 0);
    return;
  }

  var t_imagedata = ctx.createImageData(imagedata.width, imagedata.height);

  t_imagedata.data.set(imagedata.data);

  for (var i = 0; i < data[DATA_TOOTH_NO_KEY].length; ++i) {
    switch(data[DATA_IMG_CLASS_KEY][i]) {
      case IMG_TOOTH_CLASSES.MISSING:
        fillToothPart(chart_setting_set.top, "crown_pos", i,
                      hexToRgb(CHART_CHIPPED_TOOTH_COLOR), true);
        fillToothPart(chart_setting_set.top, "root_pos", i,
                      hexToRgb(CHART_CHIPPED_TOOTH_COLOR), true);

        fillToothPart(chart_setting_set.middle, "crown_pos", i,
                      hexToRgb(CHART_CHIPPED_TOOTH_COLOR), true);

        fillToothPart(chart_setting_set.bottom, "crown_pos", i,
                      hexToRgb(CHART_CHIPPED_TOOTH_COLOR), true);
        fillToothPart(chart_setting_set.bottom, "root_pos", i,
                      hexToRgb(CHART_CHIPPED_TOOTH_COLOR), true);
        break;
      case IMG_TOOTH_CLASSES.CROWN:
        color = hexToRgb(CHART_BRACE_TOOTH_COLOR);
        fillToothPart(chart_setting_set.top, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);

        fillToothPart(chart_setting_set.middle, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);

        fillToothPart(chart_setting_set.bottom, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);
        break;
      case IMG_TOOTH_CLASSES.CROWNIMPLANT:
        color = hexToRgb(CHART_BRACE_TOOTH_COLOR);
        fillToothPart(chart_setting_set.top, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);

        fillToothPart(chart_setting_set.middle, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);

        fillToothPart(chart_setting_set.bottom, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);
        break;
      case IMG_TOOTH_CLASSES.CROWNENDO:
        color = hexToRgb(CHART_BRACE_TOOTH_COLOR);
        fillToothPart(chart_setting_set.top, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);

        fillToothPart(chart_setting_set.middle, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);

        fillToothPart(chart_setting_set.bottom, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);
        break;
      case IMG_TOOTH_CLASSES.PONTIC:
        fillToothPart(chart_setting_set.top, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);
        fillToothPart(chart_setting_set.top, "root_pos", i,
                      hexToRgb(CHART_CHIPPED_TOOTH_COLOR), true);

        fillToothPart(chart_setting_set.middle, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);

        fillToothPart(chart_setting_set.bottom, "crown_pos", i,
                      hexToRgb(CHART_BRACE_TOOTH_COLOR), false);
        fillToothPart(chart_setting_set.bottom, "root_pos", i,
                      hexToRgb(CHART_CHIPPED_TOOTH_COLOR), true);
        break;
      default:
    }
  }

  ctx.putImageData(t_imagedata, 0, 0);

  for (var i = 0; i < data[DATA_TOOTH_NO_KEY].length; ++i) {
    if (//IMG_TOOTH_CLASSES.IMPLANT == data[DATA_IMG_CLASS_KEY][i] ||
        IMG_TOOTH_CLASSES.CROWNIMPLANT == data[DATA_IMG_CLASS_KEY][i]) {
      drawImplant(chart_setting_set.top, i);
      drawImplant(chart_setting_set.bottom, i);
    } else if (IMG_TOOTH_CLASSES.ENDO == data[DATA_IMG_CLASS_KEY][i] ||
               IMG_TOOTH_CLASSES.CROWNENDO == data[DATA_IMG_CLASS_KEY][i]) {
      drawRootCanal(chart_setting_set.top, i);
      drawRootCanal(chart_setting_set.bottom, i);
    }
  }

  function fillToothPart(chart_setting, part, tooth_i, color, draw_edge) {
    var gray_value_threshold = GRAY_VALUE_THRESHOLD_KEY_NAME in chart_setting ?
                               chart_setting[GRAY_VALUE_THRESHOLD_KEY_NAME] :
                               FLOODFILL_GRAY_VALUE_DEFAULT_THRESHOLD;
    var part_setting = chart_setting[part];

    for (var i = 0; i < part_setting[tooth_i].length; ++i) {
      var tooth_part = part_setting[tooth_i][i];
      floodFill(t_imagedata, tooth_part[0], tooth_part[1],
                gray_value_threshold, color.r, color.g, color.b, draw_edge);
    }
  }

  function drawImplant(chart_setting, tooth_i) {
    var x, y;
    var width = chart_setting.x_grid[tooth_i][2] - chart_setting.x_grid[tooth_i][0] +
                CHART_IMPLANT_IMG_WIDTH_INC * 2;
    var height = chart_setting.grid_height * CHART_IMPLANT_IMG_HEIGHT_GRID_NUM;

    if (CHART_Y_DIRECTION.UP == chart_setting.y_direction) {
      x = chart_setting.x_grid[tooth_i][2] + CHART_IMPLANT_IMG_WIDTH_INC;
      y = Math.max(chart_setting.y_base[tooth_i][0], chart_setting.y_base[tooth_i][2]);
    } else {
      x = chart_setting.x_grid[tooth_i][0] - CHART_IMPLANT_IMG_WIDTH_INC;
      y = Math.min(chart_setting.y_base[tooth_i][0], chart_setting.y_base[tooth_i][2]);
    }

    ctx.save();

    ctx.translate(x, y);
    ctx.globalAlpha = IMPLANT_IMAGE_OPACITY_ALPHA;
    if (CHART_Y_DIRECTION.UP == chart_setting.y_direction) {
      ctx.rotate(Math.PI);
    }
    ctx.drawImage(document.myUserData[GLOBAL_DATA_IMPLANT_IMG], 0, 0, width, height);
    ctx.restore();
  }

  function drawRootCanal(chart_setting, tooth_i) {
    var root_canal_curves = chart_setting.root_canal_curve[tooth_i];

    for (var i = 0; i < root_canal_curves.length; ++i) {
      var anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y;
      var curve = root_canal_curves[i];
      var is_quardratic_curve;
      var sign_shape = 1;

      var width = Math.abs(curve[3] - curve[1]);
      var height = Math.abs(curve[4] - curve[2]);
      switch (curve[0]) {
        case ROOT_CANAL_CURVE_SHAPE.C:
          sign_shape = -1;
        case ROOT_CANAL_CURVE_SHAPE.REVERSE_C:
          anchor_1_x = (curve[1] + curve[3]) / 2 + sign_shape * width / 2;
          anchor_1_y = (curve[2] + curve[4]) / 2;
          is_quardratic_curve = true;
          break;
        case ROOT_CANAL_CURVE_SHAPE.ONE_ANCHOR:
          anchor_1_x = curve[5];
          anchor_1_y = curve[6];
          is_quardratic_curve = true;
          break;
        case ROOT_CANAL_CURVE_SHAPE.REVERSE_S:
         sign_shape = -1;
        case ROOT_CANAL_CURVE_SHAPE.S:
          var sign_x_1 = sign_x_2 = sign_y_1 = sign_y_2 = 1

          if (curve[4] >= curve[2]) {
            sign_y_2 = -1;
            if (curve[3] >= curve[1]) {
              sign_x_1 = -1;
            } else {
              sign_x_2 = -1;
            }
          } else {
            sign_y_1 = -1;
            if (curve[3] >= curve[1]) {
              sign_x_2 = -1;
            } else {
              sign_x_1 = -1;
            }
          }
          anchor_1_x = curve[1] + sign_shape * sign_x_1 * (curve[3] - curve[1]) * 3 / 4;
          anchor_1_y = curve[2] + sign_y_1 * height / 4;
          anchor_2_x = curve[3] + sign_shape * sign_x_2 * (curve[3] - curve[1]) * 3 / 4;
          anchor_2_y = curve[4] + sign_y_2 * height / 4;
          is_quardratic_curve = false;
          break;
        case ROOT_CANAL_CURVE_SHAPE.TWO_ANCHOR:
          anchor_1_x = curve[5];
          anchor_1_y = curve[6];
          anchor_2_x = curve[7];
          anchor_2_y = curve[8];
          is_quardratic_curve = false;
          break;
      }

      ctx.beginPath();
      ctx.moveTo(curve[1], curve[2]);
      if (is_quardratic_curve) {
        ctx.quadraticCurveTo(anchor_1_x, anchor_1_y, curve[3], curve[4]);
      } else {
        ctx.bezierCurveTo(anchor_1_x, anchor_1_y,
                             anchor_2_x, anchor_2_y,
                             curve[3], curve[4]);
      }
      ctx.strokeStyle = CHART_ROOT_CANAL_CURVE_COLOR;
      ctx.lineWidth = CHART_ROOT_CANAL_CURVE_WIDTH;
      ctx.stroke();
    }
  }
}

function drawFurcation(table) {
  var data = table.myUserData;

  var canvas = data[DATA_CANVAS_KEY];
  var ctx = canvas.getContext("2d");

  var furcation_i = 0;

  for (var i = 0; i < TABLE_DIV_ALL_POS_TAGS.length; ++i) {
    var chart_setting = data[DATA_CHART_SETTING_KEY][TABLE_DIV_ALL_POS_TAGS[i]];
    if ("furcation_type" in chart_setting && "furcation_pos" in chart_setting) {
      var draw_type = chart_setting.furcation_type;
      var furcation_pos = chart_setting.furcation_pos;
      var grades = data[DATA_FURCATION_GRADE_KEY][furcation_i];

      for (var j = 0; j < data[DATA_TOOTH_NO_KEY].length; ++j) {

        if (0 == grades[j]) {
          continue;
        }

        switch (draw_type) {
          case FURCATION_GRADE_TRIANGLE_BASE:
            ctx.save();
            ctx.translate(furcation_pos[j][0], furcation_pos[j][1]);
            if (CHART_Y_DIRECTION.UP == chart_setting.y_direction) {
              ctx.rotate(Math.PI);
            }
            drawTriangle(draw_type, grades[j]);
            ctx.restore();
            break;
          case FURCATION_GRADE_BITRIANGLE_BASE:
            var [left, right] = extractLRFurcationGrade(grades[j]);
            ctx.save();
            ctx.translate(furcation_pos[j][0], furcation_pos[j][1]);
            drawTriangle(draw_type[0], left);
            drawTriangle(draw_type[1], right);
            ctx.restore();
            break;
          case FURCATION_GRADE_SYMBOLS:
            ctx.font = CHART_FURCATION_SYMBOL_FONT;
            ctx.fillText(draw_type[grades[j]],
                         furcation_pos[j][0],
                         furcation_pos[j][1]);
            break;
        }
      }
    ++furcation_i;
    }
  }

  function drawTriangle(points, grade) {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    ctx.lineTo(points[1][0], points[1][1]);
    ctx.lineTo(points[2][0], points[2][1]);
    switch (grade) {
      case 2:
        ctx.closePath();
      case 1:
        ctx.strokeStyle = CHART_FURCATION_TRIANGLE_COLOR;
        ctx.lineWidth = CHART_FURCATION_TRIANGLE_LINE_WIDTH;
        ctx.stroke();
        break;
      case 3:
        ctx.closePath();
        ctx.fillStyle = CHART_FURCATION_TRIANGLE_COLOR;
        ctx.fill();
        ctx.strokeStyle = CHART_FURCATION_TRIANGLE_COLOR;
        ctx.lineWidth = CHART_FURCATION_TRIANGLE_LINE_WIDTH;
        ctx.stroke();
    }
  }
}

function drawToothNo(table) {
  var data = table.myUserData;
  if (!data[DATA_IS_DRAW_TOOTH_NO]) {
    return;
  }

  var canvas = data[DATA_CANVAS_KEY];
  var ctx = canvas.getContext("2d");

  for (var i = 0; i < data[DATA_TOOTH_NO_KEY].length; ++i) {
    if (IMG_SET_CLASS_TOOTH_NO_NOT_SHOW_INDICE.indexOf(data[DATA_IMG_CLASS_KEY][i]) < 0) {
      ctx.font = CHART_TOOTH_NO_FONT;
      ctx.fillText(data[DATA_TOOTH_NO_KEY][i].toString(),
                   data[DATA_CHART_SETTING_KEY].top.tooth_no_pos[i][0],
                   data[DATA_CHART_SETTING_KEY].top.tooth_no_pos[i][1]);
      ctx.fillText(data[DATA_TOOTH_NO_KEY][i].toString(),
                   data[DATA_CHART_SETTING_KEY].bottom.tooth_no_pos[i][0],
                   data[DATA_CHART_SETTING_KEY].bottom.tooth_no_pos[i][1]);

    }
  }
}

function drawCompact(table) {
  var data = table.myUserData;
  var canvas = data[DATA_CANVAS_KEY];
  var ctx = canvas.getContext("2d");

  for (var i = 0; i < TABLE_DIV_ALL_POS_TAGS.length; ++i) {
    var chart_setting = data[DATA_CHART_SETTING_KEY][TABLE_DIV_ALL_POS_TAGS[i]];
    var compact_pos = chart_setting.compact_pos;

    for (var j = 0; j < compact_pos.length; ++j) {
      if (data[DATA_TOOTH_COMPACT_KEY][j]) {
        drawZigZag(compact_pos[j][0], compact_pos[j][1]);
      }
    }
  }

  function drawZigZag(x, y) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(compact_pos[j][0], compact_pos[j][1]);
    ctx.moveTo(COMPACT_ZIGZAG_BASE[0][0], COMPACT_ZIGZAG_BASE[0][1]);
    for (var i = 1; i < COMPACT_ZIGZAG_BASE.length; ++i) {
      ctx.lineTo(COMPACT_ZIGZAG_BASE[i][0], COMPACT_ZIGZAG_BASE[i][1]);
      if (i != COMPACT_ZIGZAG_BASE.length - 1) {
        ctx.moveTo(COMPACT_ZIGZAG_BASE[i][0], COMPACT_ZIGZAG_BASE[i][1]);
      }
    }
    ctx.strokeStyle = CHART_COMPACT_ZIGZAG_COLOR;
    ctx.lineWidth = CHART_COMPACT_ZIGZAG_WIDTH;
    ctx.stroke();
    ctx.restore();
  }
}

function setStatTableTextValue(stat_table, text_name, value) {
  stat_table.querySelectorAll("[name=" + text_name + "]").
             item(0).
             value = value;
}

function setStatGlobalDataValue(text_name, value) {
  document.myUserData[GLOBAL_DATA_STATISTIC_KEY][text_name] = value;
}

function getStatGlobalDataValue(text_name) {
  return document.myUserData[GLOBAL_DATA_STATISTIC_KEY][text_name];
}

function updateDotStatData(stat_table) {
  var dot_sum = {[BOP_TAG]: 0,
                 [PLAQUE_TAG]: 0};
  var teeth_sum = {[BOP_TAG]: 0,
                   [PLAQUE_TAG]: 0};
  var value, total, tname;

  for (var i = 0; i < ALL_TABLE_ID.length; ++i) {
    var data = document.getElementById(ALL_TABLE_ID[i]).myUserData;
    var tooth_no = data[DATA_TOOTH_NO_KEY];
    var table_data = data[DATA_TABLE_VALUE_KEY];
    var img_classes = data[DATA_IMG_CLASS_KEY];

    for (var j = 0; j < tooth_no.length; ++j) {
      var is_checked = {[BOP_TAG]: false,
                        [PLAQUE_TAG]: false};

      if (NONORIGINAL_TOOTH_CLASS_INDICE.indexOf(img_classes[j]) >= 0) {
        continue;
      }

      for (var key in TABLE_DOT_COLORS) {
        for (var k = 0; k < TABLE_DIV_TOP_BOTTOM_POS_TAGS.length; ++k) {
          var set_name = concatNames(key,
                                     TABLE_DIV_TOP_BOTTOM_POS_TAGS[k],
                                     TABLE_DIV_SET_TAG,
                                     (j + 1).toString());

          for (var l = 0; l < TABLE_COLUMN_VALUE_NUM; ++l) {
            if (table_data[set_name][l]) {
              ++dot_sum[key];
              if (!is_checked[key]) {
                is_checked[key] = true;
                ++teeth_sum[key];
              }
            }
          }

        } // end of for TABLE_DIV_TOP_BOTTOM_POS_TAGS
      } // end of for TABLE_DOT_COLORS
    } // end of for tooth_no
  } // end of for ALL_TABLE_ID

  total = getStatGlobalDataValue(STAT_TABLE_NUM_OF_TOTAL_SITE_NAME);
  value = dot_sum[BOP_TAG];
  tname = STAT_TABLE_NUM_OF_BOP_NAME;
  setAllStatData(tname, value, total);

  value = dot_sum[PLAQUE_TAG];
  tname = STAT_TABLE_NUM_OF_PLAQUE_NAME;
  setAllStatData(tname, value, total);

  total = getStatGlobalDataValue(STAT_TABLE_NUM_OF_TOTAL_TEETH_NAME);
  value = teeth_sum[BOP_TAG];
  tname = STAT_TABLE_NUM_OF_TEETH_BOP_NAME;
  setAllStatData(tname, value, total);

  value = teeth_sum[PLAQUE_TAG];
  tname = STAT_TABLE_NUM_OF_TEETH_PLAQUE_NAME;
  setAllStatData(tname, value, total);

  function setAllStatData(tname, value, total) {
    setStatGlobalDataValue(tname, value);
    setStatTableTextValue(stat_table, tname, createStatStrWithPercentData(value, total));
  }
}

function updateNormalTeethStatData(stat_table) {
  var original_teeth_num = TOTAL_NUM_OF_ORIGINAL_TEETH;
  var value;

  for (var i = 0; i < ALL_TABLE_ID.length; ++i) {
    var data = document.getElementById(ALL_TABLE_ID[i]).myUserData;
    var img_classes = data[DATA_IMG_CLASS_KEY];

    for (var j = 0; j < img_classes.length; ++j) {
      if (NONORIGINAL_TOOTH_CLASS_INDICE.indexOf(img_classes[j]) >= 0) {
        --original_teeth_num;
      }
    }
  }

  value = original_teeth_num;
  setStatGlobalDataValue(STAT_TABLE_NUM_OF_TOTAL_TEETH_NAME, value);
  setStatTableTextValue(stat_table, STAT_TABLE_NUM_OF_TOTAL_TEETH_NAME, value);

  value = original_teeth_num * SITE_OF_TOOTH_MULTIPLIER;
  setStatGlobalDataValue(STAT_TABLE_NUM_OF_TOTAL_SITE_NAME, value);
  setStatTableTextValue(stat_table, STAT_TABLE_NUM_OF_TOTAL_SITE_NAME, value);
}

function updateStatisticTable() {
  var stat_table = document.getElementById(STAT_TABLE_ID);

  updateNormalTeethStatData(stat_table);
  updateDotStatData(stat_table);
}

function updateStatLevelTable() {
  var table = document.getElementById(STAT_LEVEL_TABLE_ID);
  var pd_tooth = {[STAT_LEVEL_PD_1_ID]:[],
                  [STAT_LEVEL_PD_2_ID]:[]};
  var cejgm_tooth = {[STAT_LEVEL_CEJGM_1_ID]:[],
                     [STAT_LEVEL_CEJGM_2_ID]:[]};

  for (var i = 0; i < ALL_TABLE_ID.length; ++i) {
    var data = document.getElementById(ALL_TABLE_ID[i]).myUserData;
    var tooth_nos = data[DATA_TOOTH_NO_KEY];
    var table_data = data[DATA_TABLE_VALUE_KEY];
    var img_classes = data[DATA_IMG_CLASS_KEY];

    for (var j = 0; j < tooth_nos.length; ++j) {
      if (IMG_SET_CLASS_BLACK_INDICE.indexOf(img_classes[j]) >= 0) {
        continue;
      }
      collectIfLevelMeet(pd_tooth,
                         tooth_nos[j],
                         table_data,
                         STAT_LEVEL_PD_RANGE,
                         PD_TAG,
                         j);
      collectIfLevelMeet(cejgm_tooth,
                         tooth_nos[j],
                         table_data,
                         STAT_LEVEL_CEJGM_RANGE,
                         CEJGM_TAG,
                         j);
    }
  }

  writeStatLevelTable(STAT_LEVEL_PD_1_ID, pd_tooth);
  writeStatLevelTable(STAT_LEVEL_PD_2_ID, pd_tooth);
  writeStatLevelTable(STAT_LEVEL_CEJGM_1_ID, cejgm_tooth);
  writeStatLevelTable(STAT_LEVEL_CEJGM_2_ID, cejgm_tooth);

  function collectIfLevelMeet(tooth_dict,
                              tooth_no, table_data,
                              range,
                              key_tag, set_index) {
                 
    var isMeet = {max: 0};

    for (key in range) {
      isMeet[key] = false;
      ++isMeet["max"];
    }

    for (var i = 0; i < TABLE_DIV_TOP_BOTTOM_POS_TAGS.length; ++i) {
      var set_name = concatNames(key_tag,
                                 TABLE_DIV_TOP_BOTTOM_POS_TAGS[i],
                                 TABLE_DIV_SET_TAG,
                                 (set_index + 1).toString());
      var values = table_data[set_name];
      for (var k = 0; k < values.length; ++k) {
        var val = values[k];
      
        for (key in range) {
          if (!isMeet[key] &&
              val >= range[key][0] && val <= range[key][1]) {
            isMeet[key] = true;
            --isMeet["max"];
            break;
          }
        } // range

        if (isMeet["max"] <= 0) {
          break;
        }
      } // values
      if (isMeet["max"] <= 0) {
        break;
      }
    } // TABLE_DIV_TOP_BOTTOM_POS_TAGS

    for (key in range) {
      if (isMeet[key]) {
        tooth_dict[key].push(tooth_no);
      }
    }
  }

  function writeStatLevelTable(id, tooth_dict) {
    var table = document.getElementById(id);
    var tds = table.querySelectorAll("td");
    var tooth_nos = tooth_dict[id];

    for (var i = 0; i < tds.length; ++i) {
      var str = ""
      for (var j = 0; j < tooth_nos.length; ++j) {
        if (TOOTH_DIMENTION2NO_10DIGIT[i] == Math.floor(tooth_nos[j]/10)) {
          if (0 != j)
            str += " ";
          str += tooth_nos[j].toString();
        }
      }
      tds[i].innerHTML = str;
    }
  }
}

function getTableInputNumber(table) {
  var data = table.myUserData;
  var table_value = data[DATA_TABLE_VALUE_KEY];

  for (var i = 1; i <= data[DATA_TOOTH_NO_KEY].length; ++i) {
    for (var j = 0; j < TABLE_DIV_TOP_BOTTOM_POS_TAGS.length; ++j) {
      var set_name;
      var cal_result = [];
      for (var k = 0; k < TABLE_DIV_VALUE_SET_SUP_NAMES.length; ++k) {
        var input_name = concatNames(TABLE_DIV_VALUE_SET_SUP_NAMES[k],
                                     TABLE_VALUE_SUB_TAG);
        var value_str_set;
        var value_set = [];

        set_name = concatNames(TABLE_DIV_VALUE_SET_SUP_NAMES[k],
                               TABLE_DIV_TOP_BOTTOM_POS_TAGS[j],
                               TABLE_DIV_SET_TAG,
                               i.toString());
        value_str_set = table.querySelectorAll("[name=" + set_name + "]")
                             .item(0)
                             .querySelectorAll("[name=" + input_name + "]");
        for (var l = 0; l < value_str_set.length; ++l) {
          var value = parseInt(value_str_set[l].value);

          value_set.push(value);
          if (k == 0) {
            cal_result.push(value);
          } else {
            cal_result[l] += value;
          }
        }
        table_value[set_name] = value_set;
      }
      set_name = concatNames(TABLE_DIV_RESULT_SET_SUP_NAME,
                             TABLE_DIV_TOP_BOTTOM_POS_TAGS[j],
                             TABLE_DIV_SET_TAG,
                             i.toString());

      table_value[set_name] = cal_result;
    }
  }
}

function setTableResultValue(table) {
  var patt = new RegExp(TABLE_DIV_RESULT_SET_SUP_NAME);
  var cal_name = concatNames(TABLE_DIV_RESULT_SET_SUP_NAME, TABLE_RESULT_SUB_TAG);
  var table_value = table.myUserData[DATA_TABLE_VALUE_KEY];

  for (var key in table_value) {
    if (patt.test(key)) {
      var cal = table.querySelectorAll("[name=" + key + "]")
                     .item(0)
                     .querySelectorAll("[name=" + cal_name + "]");
      for (var i = 0; i < cal.length; ++i) {
        // TODO: find a better way to handle no color for CAL row
        cal[i].style.color = TABLE_NUMBER_COLOR_DEFAULT;
        cal[i].value = table_value[key][i].toString();
      }
    }
  }
}

function drawChartCurve(table) {
  var canvas = table.myUserData[DATA_CANVAS_KEY];
  var ctx = canvas.getContext("2d");
  var data = table.myUserData;
  var table_value = data[DATA_TABLE_VALUE_KEY];
  var chart_setting_data = data[DATA_CHART_SETTING_KEY];
  var chart_setting, y_direction_scale;

  if (DEBUG_DRAW_GRID) {
    drawDebugGrid(table);
  }

  if (DEBUG_CLICK_AREA) {
    drawDebugClickRegion(table);
  }

  if (DEBUG_ONLY_ORIGINAL_BACKGROUND) {
    return;
  }

  if (null == table_value) {
     return;
  }

  for (var i = 0; i < TABLE_DIV_TOP_BOTTOM_POS_TAGS.length; ++i) {
    var pre_x = -1, pre_y = -1;
    var chart_setting = chart_setting_data[TABLE_DIV_TOP_BOTTOM_POS_TAGS[i]];
    var y_direction_scale = chart_setting.y_direction == CHART_Y_DIRECTION.UP ? -1 : 1;

    for (var j = 0; j < data[DATA_TOOTH_NO_KEY].length; ++j) {
      var pd_set_id, cejgm_set_id;
      var pd_values, cejgm_values;
      var cejgm_pos;
      var value_set_size;

      if (TABLE_NO_USAGE_CLASSES.ALL == getTableNoUsageClass(data[DATA_IMG_CLASS_KEY][j])) {
        pre_x = -1;
        pre_y = -1;
        continue;
      }

      pd_set_id = concatNames(PD_TAG,
                              TABLE_DIV_TOP_BOTTOM_POS_TAGS[i],
                              TABLE_DIV_SET_TAG,
                              (j + 1).toString());
      cejgm_set_id = concatNames(CEJGM_TAG,
                                 TABLE_DIV_TOP_BOTTOM_POS_TAGS[i],
                                 TABLE_DIV_SET_TAG,
                                 (j + 1).toString());
      pd_values = table_value[pd_set_id];
      cejgm_values = table_value[cejgm_set_id];

      cejgm_pos = [];
      pd_end_pos = [];
      value_set_size = cejgm_values.length;

      for (var k = 0; k < value_set_size; ++k) {
        var cejgm_x = chart_setting.x_grid[j][k];
        var cejgm_y = chart_setting.y_base[j][k] +
                      y_direction_scale * cejgm_values[k] * chart_setting.grid_height;
        var pd_end_y = cejgm_y +
                       y_direction_scale * pd_values[k] * chart_setting.grid_height;

        cejgm_pos.push({"x" : cejgm_x, "y" : cejgm_y});
        pd_end_pos.push({"x" : cejgm_x,
                         "y" : pd_end_y,
                         "isShow" : pd_values[k] >= CHART_PD_SHOW_MIN_VALUE});
      }

      for (var k = 0; k < value_set_size; ++k) {
        var is_up;

        if (pre_x > 0) {
          is_up = (0 == k && chart_setting.y_direction != CHART_Y_DIRECTION.UP) ||
                  (0 != k && chart_setting.y_direction == CHART_Y_DIRECTION.UP);

          drawCEJGMCurve(pre_x, pre_y, cejgm_pos[k].x, cejgm_pos[k].y, is_up);
        }

        if (pd_end_pos[k].isShow) {
          drawPDBar(cejgm_pos[k].x, cejgm_pos[k].y, pd_end_pos[k].x, pd_end_pos[k].y);
        }

        pre_x = cejgm_pos[k].x;
        pre_y = cejgm_pos[k].y;
      }
    }
  }

  function drawCEJGMCurve(start_x, start_y, end_x, end_y, isUp) {
    var anchor_x_pos = (start_x + end_x) / 2
    var anchor_y_pos = (start_y + end_y) / 2

    anchor_y_pos = is_up ? anchor_y_pos - chart_setting.grid_height / 4 :
                           anchor_y_pos + chart_setting.grid_height / 4;

    ctx.beginPath();
    ctx.moveTo(start_x, start_y);
    ctx.quadraticCurveTo(anchor_x_pos, anchor_y_pos, end_x, end_y);
    ctx.strokeStyle = CHART_CEJGM_CURVE_COLOR;
    ctx.lineWidth = CHART_CEJGM_CURVE_WIDTH;
    ctx.stroke();
  }

  function drawPDBar(start_x, start_y, end_x, end_y) {
    ctx.beginPath();
    ctx.moveTo(start_x, start_y);
    ctx.lineTo(end_x, end_y);
    ctx.strokeStyle = CHART_PD_LINE_COLOR;
    ctx.lineWidth = CHART_PD_LINE_WIDTH;
    ctx.stroke();
  }
}

function floodFill(imagedata, x, y, threshold, r, g, b, draw_edge) {
  var check_queue = [[x, y]];

  while (check_queue.length > 0) {
    var pixel_pos = check_queue.pop();
    var pixel_i = (pixel_pos[1] * imagedata.width + pixel_pos[0]) * 4;
    var is_color_changed = false;

    if (imagedata.data[pixel_i] == r &&
        imagedata.data[pixel_i + 1] == g &&
        imagedata.data[pixel_i + 2] == b) {
      continue;
    }

    var gray_value = GRAY_VALUE_COEF.R * imagedata.data[pixel_i] +
                     GRAY_VALUE_COEF.G * imagedata.data[pixel_i + 1] +
                     GRAY_VALUE_COEF.B * imagedata.data[pixel_i + 2];

    if (draw_edge) {
      imagedata.data[pixel_i] = r;
      imagedata.data[pixel_i + 1] = g;
      imagedata.data[pixel_i + 2] = b;
      is_color_changed = true;
    }

    if (gray_value < threshold) {
      continue;
    }

    if (!is_color_changed) {
      imagedata.data[pixel_i] = r;
      imagedata.data[pixel_i + 1] = g;
      imagedata.data[pixel_i + 2] = b;
    }

    if (pixel_pos[0] > 0) {
      check_queue.push([pixel_pos[0] - 1, pixel_pos[1]]);
    }
    if (pixel_pos[1] > 0) {
      check_queue.push([pixel_pos[0], pixel_pos[1] - 1]);
    }
    if (pixel_pos[0] < imagedata.width - 1) {
      check_queue.push([pixel_pos[0] + 1, pixel_pos[1]]);
    }
    if (pixel_pos[1] < imagedata.height - 1) {
      check_queue.push([pixel_pos[0], pixel_pos[1] + 1]);
    }
  }
}

function showReportDiv(is_show) {
  var div = document.getElementById("report_div");

  div.style.visibility = is_show ? "visible" : "hidden";
}

function drawReportCanvas() {
  var canvas = document.getElementById("report_canvas");
  var ctx = canvas.getContext("2d");

  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.strokeStyle = "#FFFFFF";
  ctx.stroke();

  drawTableChart2ReportCanvas(canvas);
  return canvas;
}

function drawTableChart2ReportCanvas(canvas) {
  var tables = document.querySelectorAll("[id^='table_']");
  var ctx = canvas.getContext("2d");

  drawAllLabel();
  drawPatientDataLine();
  drawPatientData();

  var common_data = REPORT_TABLE_POS.common;

  for (var i = 0; i < tables.length; ++i) {
    var report_pos = REPORT_TABLE_POS[tables[i].id];
    var data = tables[i].myUserData;
    var column_num = data[DATA_TOOTH_NO_KEY].length;

    drawTableGrid(report_pos.table_top_pos[0], report_pos.table_top_pos[1],
                  common_data.table_grid_width, common_data.table_grid_height,
                  column_num, common_data.table_row_num);

    drawTableData(tables[i], TOP_POS_TAG,
                  report_pos.table_top_pos[0], report_pos.table_top_pos[1],
                  common_data.table_grid_width, common_data.table_grid_height,
                  column_num, common_data.table_row_num);

    ctx.drawImage(data[DATA_CANVAS_KEY],
                  report_pos.canvas_pos[0], report_pos.canvas_pos[1],
                  data[DATA_CANVAS_KEY].width * common_data.chart_size_ratio,
                  data[DATA_CANVAS_KEY].height * common_data.chart_size_ratio);

    drawTableGrid(report_pos.table_bottom_pos[0], report_pos.table_bottom_pos[1],
                  common_data.table_grid_width, common_data.table_grid_height,
                  column_num, common_data.table_row_num);

    drawTableData(tables[i], BOTTOM_POS_TAG,
                  report_pos.table_bottom_pos[0], report_pos.table_bottom_pos[1],
                  common_data.table_grid_width, common_data.table_grid_height,
                  column_num, common_data.table_row_num);
  }

  function drawAllLabel() {

    for (var i = 0; i < REPORT_SINGLE_LABEL_DATAS.length; ++i) {
      var label = REPORT_SINGLE_LABEL_DATAS[i];

      ctx.font = label.font;
      ctx.fillStyle = "#000000";
      ctx.textAlign = "start";
      for (var key in label.pos) {
        ctx.fillText(key, label.pos[key][0], label.pos[key][1]);
        if ("is_underline" in label && label.is_underline) {
          var text_width = ctx.measureText(key).width;
          var start_x = label.pos[key][0],
              start_y = label.pos[key][1] + REPORT_LABEL_UNDERLINE_OFFSET;

          ctx.beginPath();
          ctx.moveTo(start_x, start_y);
          ctx.lineTo(start_x + text_width, start_y);
          ctx.strokeStyle = "#000000";
          ctx.stroke();
        }
      }
    }

    ctx.font = REPORT_TABLE_LABEL.font;
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";
    for (var label in REPORT_TABLE_LABEL.pos) {
      for (var i = 0; i < REPORT_TABLE_LABEL.pos[label].length; ++i) {
        var label_pos = REPORT_TABLE_LABEL.pos[label][i];
        ctx.fillText(label, label_pos[0], label_pos[1]);
      }
    }
  }

  function drawPatientDataLine() {
    for (var i = 0; i < REPORT_PATIENT_DATA_LINE.length; ++i) {
      var line = REPORT_PATIENT_DATA_LINE[i];
      ctx.beginPath();
      ctx.moveTo(line[0][0], line[0][1]);
      ctx.lineTo(line[1][0], line[1][1]);
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  function drawPatientData() {
    ctx.font = REPORT_PATIENT_DATA_INPUT.font;
    ctx.fillStyle = "#000000";
    for (var key in REPORT_PATIENT_DATA_INPUT.pos) {
      var text = document.getElementById(key);

      ctx.textAlign = "center";
      ctx.fillText(text.value,
                   REPORT_PATIENT_DATA_INPUT.pos[key][0],
                   REPORT_PATIENT_DATA_INPUT.pos[key][1]);
    }

    var p_stage = document.getElementById(PATIENT_TREAT_STAGE_ID)
                          .querySelector("input[name='" +
                                          REPORT_PATIENT_DATA_STAGE.name +
                                          "']:checked");
    if (p_stage != null) {
      var [x, y] = REPORT_PATIENT_DATA_STAGE.pos[parseInt(p_stage.value)];
      var radius = REPORT_PATIENT_DATA_STAGE.radius[parseInt(p_stage.value)];

      ctx.beginPath();
      ctx.ellipse(x, y, radius[0], radius[1], 0, 0, 2 * Math.PI);
      ctx.strokeStyle = "#000000";
      ctx.stroke();
    }
  }

  function drawTableGrid(x, y, grid_width, grid_height, c_num, r_num) {
    var start_x = x,
        start_y = y,
        end_x = start_x,
        end_y = start_y + grid_height * r_num;

    for (var j = 0; j < c_num + 1; ++j) {
      ctx.beginPath();
      ctx.moveTo(start_x, start_y);
      ctx.lineTo(end_x, end_y);
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      start_x += grid_width;
      end_x = start_x;
    }

    start_x = x;
    start_y = y;
    end_x = start_x + grid_width * c_num;
    end_y = start_y;
    for (var j = 0; j < r_num + 1; ++j) {
      ctx.beginPath();
      ctx.moveTo(start_x, start_y);
      ctx.lineTo(end_x, end_y);
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      start_y += grid_height;
      end_y = start_y;
    }
  }

  function drawTableData(table, pos_tag, x, y, grid_width, grid_height, c_num, r_num) {
     var start_x = x,
         start_y = y;
     for (var i = 0; i < c_num; ++i) {
       //var is_chipped = table.myUserData[DATA_IS_TOOTH_CHIPPED_KEY][i];
       var no_usage_class = getTableNoUsageClass(table.myUserData[DATA_IMG_CLASS_KEY][i]);

       if (TABLE_NO_USAGE_CLASSES.ALL == no_usage_class) {
         var end_x = start_x + grid_width,
             end_y = start_y + grid_height * r_num;

         ctx.beginPath();
         ctx.moveTo(start_x, start_y);
         ctx.lineTo(end_x, end_y);
         ctx.strokeStyle = "#000000";
         ctx.stroke();
       } else {
         var table_value = table.myUserData[DATA_TABLE_VALUE_KEY];
         var common_data = REPORT_TABLE_POS.common;
         var pos_sub_tag = concatNames(pos_tag,
                                       TABLE_DIV_SET_TAG,
                                       (i + 1).toString());
         var cal_set_name = concatNames(CAL_TAG, pos_sub_tag),
             bop_set_name = concatNames(BOP_TAG, pos_sub_tag),
             pd_set_name = concatNames(PD_TAG, pos_sub_tag),
             plaque_set_name = concatNames(PLAQUE_TAG, pos_sub_tag),
             cejgm_set_name = concatNames(CEJGM_TAG, pos_sub_tag);

         var all_values = [];
         var dot_color;

         if (TOP_POS_TAG === pos_tag) {
           all_values.push([table_value[cal_set_name], table_value[bop_set_name]]);
           all_values.push([table_value[pd_set_name], table_value[plaque_set_name]]);
           all_values.push([table_value[cejgm_set_name]]);
           dot_color = [TABLE_BOP_DOT_COLOR, TABLE_PLAQUE_DOT_COLOR, null];
         } else {
           all_values.push([table_value[cejgm_set_name]]);
           all_values.push([table_value[pd_set_name], table_value[plaque_set_name]]);
           all_values.push([table_value[cal_set_name], table_value[bop_set_name]]);
           dot_color = [null, TABLE_PLAQUE_DOT_COLOR, TABLE_BOP_DOT_COLOR];
         }

         var curr_x = start_x,
             curr_y = start_y;
         for (var j = 0; j < r_num; ++j) {
           var curr_values = all_values[j];
           var value;
           for (var k = 0; k < curr_values[0].length; ++k) {
             var x = curr_x + common_data.num_offset[0] + common_data.num_dist * k,
                 y = curr_y + common_data.num_offset[1];

             value = curr_values[0][k];
             ctx.font = common_data.num_font;
             ctx.fillStyle = TABLE_NUMBER_COLOR_DEFAULT;
             // TODO: find a better way to handle no color for CAL row
             if (value >= TABLE_NUMBER_LARGE_THRESHOLD) {
               if (TOP_POS_TAG === pos_tag) {
                 if (j != 0) { //non CAL row on top of table
                    ctx.fillStyle = TABLE_NUMBER_COLOR_LARGE;
                 }
               } else {
                 if (j != 2) { //non CAL row on top of table
                    ctx.fillStyle = TABLE_NUMBER_COLOR_LARGE;
                 }
               }
             }
             ctx.textAlign = "start";
             var val_str = curr_values[0][k].toString();
             if (curr_values[0][k] < 10) {
               val_str = " " + val_str;
             }
             ctx.fillText(val_str, x, y);

             if (TABLE_NO_USAGE_CLASSES.NONE == no_usage_class &&
                 null != dot_color[j] && curr_values[1][k]) {
               x = curr_x + common_data.dot_offset[0] + common_data.dot_dist * k;
               y = curr_y + common_data.dot_offset[1];

               ctx.beginPath();
               ctx.arc(x, y, common_data.dot_radius, 0, 2 * Math.PI);
               ctx.fillStyle = dot_color[j];
               ctx.fill();
             }
           }
           curr_y += grid_height;
         }
       }
       start_x += grid_width;
     }
  }
}

function outputCanvas2ReportImage(canvas) {
  var img = new Image();

  img.width = canvas.width;
  img.height = canvas.height;
  img.addEventListener("load", function () {

  });
  img.src = canvas.toDataURL();
}

function loadRecordOnClick() {
  if ('FileReader' in window) {
    var input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.setAttribute("accept", RECORD_FILE_SUB_NAME);
    input.addEventListener("change", loadRecordFileOnChange);
    input.addEventListener("blur", function() {
      console.log("blur");
      console.log(this.value);
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  } else {
    alert('Can not LOAD!! Your browser does not support the HTML5 FileReader.');
  }
}

function loadRecordFileOnChange(event) {
  var file2load = event.target.files[0];

  if (file2load) {
    var reader = new FileReader();
    reader.addEventListener("load", function(load_event) {
      var parse_result = JSON.parse(load_event.target.result);
      if (RECORD_CHECK_KEY in parse_result) {
        document.myUserData[GLOBAL_DATA_RECORD_FILE_NAME] =
          file2load.name.substring(0, file2load.name.indexOf(RECORD_FILE_SUB_NAME));
        writeRecordDataToPage(parse_result);
      } else {
        alert("File '" + file2load.name +
              "' is not accepted!! Please try another file!!") ;
      }
    });
    reader.readAsText(file2load, 'UTF-8');
  }

  function writeRecordDataToPage(all_data) {
    var patient_data_div = document.getElementById(PATIENT_DATA_DIV_ID);
    var t_element = patient_data_div.querySelectorAll('[type="text"]');

    for (var i = 0; i < t_element.length; ++i) {
      t_element[i].value = all_data[t_element[i].id];
    }

    t_element = patient_data_div.querySelectorAll("input[name='" +
                                                  REPORT_PATIENT_DATA_STAGE.name +
                                                  "']");
    for (var i = 0; i < t_element.length; ++i) {
      t_element[i].checked = t_element[i].value == all_data[PATIENT_TREAT_STAGE_ID] ?
                             true : false;
    }

    for (var i = 0; i < ALL_TABLE_ID.length; ++i) {
      var table_data = all_data[ALL_TABLE_ID[i]];
      var table = document.getElementById(ALL_TABLE_ID[i]);

      table.myUserData[DATA_IMG_CLASS_KEY] = table_data[DATA_IMG_CLASS_KEY];
      table.myUserData[DATA_FURCATION_GRADE_KEY] = table_data[DATA_FURCATION_GRADE_KEY];
      table.myUserData[DATA_TOOTH_COMPACT_KEY] = table_data[DATA_TOOTH_COMPACT_KEY];
      //NOTE: legacy code, will be deleted in next version
      //table.myUserData[DATA_IS_TOOTH_CHIPPED_KEY] = table_data[DATA_IS_TOOTH_CHIPPED_KEY];
      table.myUserData[DATA_IS_DRAW_TOOTH_NO] = table_data[DATA_IS_DRAW_TOOTH_NO];
      table.myUserData[DATA_TABLE_VALUE_KEY] = table_data[DATA_TABLE_VALUE_KEY];

      for (var key in table.myUserData[DATA_TABLE_VALUE_KEY]) {
        var set_element = table.querySelector("[name=" + key + "]");

        if (null != set_element) {
          var value_element;
          var tag = /([a-z]+)_[a-z0-9_]+/.exec(key)[1];

          if (CAL_TAG == tag || PD_TAG == tag || CEJGM_TAG == tag) {
            value_element = set_element.querySelectorAll('[class="number_type"]');

            for (var j = 0; j < value_element.length; ++j) {
              var value = table.myUserData[DATA_TABLE_VALUE_KEY][key][j]
              var ele_color = TABLE_NUMBER_COLOR_DEFAULT;
              // TODO: find a better way to handle no color for CAL row
              if (value >= TABLE_NUMBER_LARGE_THRESHOLD && (PD_TAG == tag || CEJGM_TAG == tag)) {
                   ele_color = TABLE_NUMBER_COLOR_LARGE;
              }
              value_element[j].style.color = ele_color;
              value_element[j].value = value;

            }

          } else if (BOP_TAG == tag || PLAQUE_TAG == tag) {
            value_element = set_element.querySelectorAll('[class="dot_type"]');

            for (var j = 0; j < value_element.length; ++j) {
              if (table.myUserData[DATA_TABLE_VALUE_KEY][key][j]) {
                  value_element[j].innerHTML = "&#8226";
                  value_element[j].style.color = TABLE_DOT_COLORS[tag];
              } else {
                  value_element[j].innerHTML = "&nbsp;";
                  value_element[j].style.color = "#FFFFFF";
              }
            }
          } // end of elif BOP_TAG == tag or PLAQUE_TAG == tag
        } // end of if null != set_element
      } // end of for loop key in DATA_TABLE_VALUE_KEY

      //NOTE: legacy code, will be deleted in next version
      //var chipped_data = table.myUserData[DATA_IS_TOOTH_CHIPPED_KEY];
      //for (var j = 0; j < chipped_data.length; ++j) {
      //    hideTableColumn(table, j + 1, chipped_data[j]);
      //}

      var img_class = table.myUserData[DATA_IMG_CLASS_KEY];
      for (var j = 0; j < img_class.length; ++j) {
          hideTableColumn(table, j + 1, img_class[j]);
      }

      redrawChart(table);
    } // end of for loop ALL_TABLE_ID
    updateStatisticTable();
    updateStatLevelTable();
  }
}

function saveRecordOnCLick() {
  if (!('Blob' in window)) {
    alert('Can not SAVE!!! Your browser does not support the HTML5 Blob.');
    return;
  }

  var download_link = document.createElement('a');

  if (typeof download_link.download == "undefined") {
      alert('Can not SAVE!!! Your browser does not support the HTML5 download.');
      return;
  }

  var file_name = prompt('Please enter file name to save',
                        document.myUserData[GLOBAL_DATA_RECORD_FILE_NAME]);
  if (file_name) {
    document.myUserData[GLOBAL_DATA_RECORD_FILE_NAME] = file_name;

    var file_blob = new Blob([JSON.stringify(createRecordDataFromPage())],
                             {type : 'application/json'});

    download_link.download = file_name;
    download_link.innerHTML = 'Download File';
    download_link.target = '_blank';

    download_link.href = window.URL.createObjectURL(file_blob);
    download_link.addEventListener("click", function(event) {
      document.body.removeChild(event.target);
    });
    download_link.style.display = "none";
    document.body.appendChild(download_link);

    download_link.click();
  }

  function createRecordDataFromPage() {
    var all_data = {[RECORD_CHECK_KEY]: RECORD_CHECK_KEY};
    var patient_data_div = document.getElementById(PATIENT_DATA_DIV_ID);
    var t_element = patient_data_div.querySelectorAll('[type="text"]');

    for (var i = 0; i < t_element.length; ++i) {
      all_data[t_element[i].id] = t_element[i].value;
    }

    t_element = patient_data_div.querySelector("input[name='" +
                                               REPORT_PATIENT_DATA_STAGE.name +
                                               "']:checked");
    all_data[PATIENT_TREAT_STAGE_ID] = t_element == null ? null : t_element.value;

    for (var i = 0; i < ALL_TABLE_ID.length; ++i) {
      var table_data = {};
      var table = document.getElementById(ALL_TABLE_ID[i]);

      table_data[DATA_IMG_CLASS_KEY] = table.myUserData[DATA_IMG_CLASS_KEY];
      table_data[DATA_FURCATION_GRADE_KEY] = table.myUserData[DATA_FURCATION_GRADE_KEY];
      table_data[DATA_TOOTH_COMPACT_KEY] = table.myUserData[DATA_TOOTH_COMPACT_KEY];
      //NOTE: legacy code, will be deleted in next version
      //table_data[DATA_IS_TOOTH_CHIPPED_KEY] = table.myUserData[DATA_IS_TOOTH_CHIPPED_KEY];
      table_data[DATA_IS_DRAW_TOOTH_NO] = table.myUserData[DATA_IS_DRAW_TOOTH_NO];
      table_data[DATA_TABLE_VALUE_KEY] = table.myUserData[DATA_TABLE_VALUE_KEY];

      all_data[ALL_TABLE_ID[i]] = table_data;
    }

    return all_data;
  }
}

function drawDebugClickRegion(table) {
  var canvas = table.querySelectorAll("[name=" + CANVAS_NAME + "]").item(0);
  var ctx = canvas.getContext("2d");
  var click_area_data = table.myUserData[DATA_CLICK_AREA_SET_KEY];
  var x, y;

  if (!DEBUG_CLICK_AREA) {
    return;
  }

  y = 0;
  var end_y = 0;
  for (var i = 0; i < click_area_data.width.length; ++i) {
    x = 0;
    end_y += click_area_data.height[i];
    for (var j = 0; j < click_area_data.width[i].length - 1; ++j) {
      x += click_area_data.width[i][j];
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, end_y);
      ctx.strokeStyle = "#00FF00";
      ctx.stroke();
      ctx.closePath();
    }
    y = end_y;
  }

  x = 0;
  y = 0;
  for (var i = 0; i < click_area_data.height.length - 1; ++i) {
    y += click_area_data.height[i];

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width, y);
    ctx.strokeStyle = "#00FF00";
    ctx.stroke();
    ctx.closePath();
  }
}

function drawDebugGrid(table) {
  var canvas = table.querySelectorAll("[name=" + CANVAS_NAME + "]").item(0);
  var ctx = canvas.getContext("2d");
  var chart_setting_data = table.myUserData[DATA_CHART_SETTING_KEY];
  var chart_setting, y_direction_scale;

  if (DEBUG_DRAW_GRID) {
    for (var key in chart_setting_data) {
      chart_setting = chart_setting_data[key];
      if (!("y_direction" in chart_setting &&
            "x_grid" in chart_setting &&
            "grid_height" in chart_setting &&
            "y_zero" in chart_setting &&
            "x_zero" in chart_setting)) {
        continue;
      }
      y_direction_scale = chart_setting.y_direction == CHART_Y_DIRECTION.UP ? -1 : 1;
      var x, y;
      var x_grid = chart_setting.x_grid;
      var grid_height = chart_setting.grid_height;

      y = chart_setting.y_zero;
      for (var i = 0; i < 11; ++i) {
        drawLine(chart_setting.x_zero, y, canvas.width, y);
        y += y_direction_scale * grid_height;
      }

      x = chart_setting.x_zero;
      for (var i = 0; i < x_grid.length; ++i) {
        for (var j = 0; j < x_grid[i].length; ++j) {
            drawLine(x_grid[i][j], chart_setting.y_zero,
                     x_grid[i][j], chart_setting.y_zero + y_direction_scale * grid_height * 10);
        }
      }

      function drawLine(start_x, start_y, end_x, end_y) {
        ctx.beginPath();
        ctx.moveTo(start_x, start_y);
        ctx.lineTo(end_x, end_y);
        ctx.strokeStyle = "#FF00FF";
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}
