
function create_teeth_tables() {
  const TABLE_TD_LABEL_CLASS_NAME = "label";
  const TABLE_FONT_DATA_LABEL_CLASS_NAME = "data_label";
  const TABLE_FONT_CHART_LABEL_CLASS_NAME = "chart_label";
  const TABLE_FONT_CHART_DESC_CLASS_NAME = "chart_desc";
  const TABLE_CHART_CANVAS_CLASS_NAME = "chart_type";
  const TABLE_TOOTH_CLASS_NAME = "tooth-table";
  const FORM_ID4TABLE = "main_form";
  const TABLE_TR_ENUM = { CAL_BOP: 0,
                          PD_PLAQUE: 1,
                          CEJGM: 2
                        };
  const TABLE_CHART_LABEL = { BUCCAL: 0,
                              DESC: 1,
                              PALATAL: 2,
                              LABIAL: 3,
                              LINGUAL: 4,
                            };
  const TABLE_CHART_LABEL_STR = {[TABLE_CHART_LABEL.BUCCAL]: "Buccal",
                                 [TABLE_CHART_LABEL.DESC]:
                                     "<br>" +
                                     "&nbsp;Mobility Scale<br>" +
                                     "&nbsp;Used:<br>" +
                                     "&nbsp;<u>Miller, 1953</u><br>" +
                                     "<br>" +
                                     "&nbsp;Furcation Grade<br>" +
                                     "&nbsp;System Used:<br>" +
                                     "&nbsp;<u>Hamp, 1975</u><br>" +
                                     "&nbsp;<u></u>" +
                                     "<br><br><br><br>",
                                  [TABLE_CHART_LABEL.PALATAL]: "Palatal",
                                  [TABLE_CHART_LABEL.LABIAL]: "Labial",
                                  [TABLE_CHART_LABEL.LINGUAL]: "Lingual",
                                };
  const TABLE_LABEL_INNER_HTML = { [TABLE_TR_ENUM.CAL_BOP]: "CAL &amp; BOP",
                                   [TABLE_TR_ENUM.PD_PLAQUE]: "PD &amp; Plaque",
                                   [TABLE_TR_ENUM.CEJGM]: "CEJ-GM",
                                   };
  const TABLE_DOT_TYPE_INNER_HTML = "&nbsp;";
  const TABLE_CHART_LABEL_TD_BOTTOM_APPEND_HTML = "<br><br>";
  var all_table_ids = [TABLE_1_ID, TABLE_2_ID, TABLE_3_ID,
                       TABLE_4_ID, TABLE_5_ID, TABLE_6_ID];
  var all_table_tooth_no = {[TABLE_1_ID] : TABLE_1_TOOTH_NO,
                            [TABLE_2_ID] : TABLE_2_TOOTH_NO,
                            [TABLE_3_ID] : TABLE_3_TOOTH_NO,
                            [TABLE_4_ID] : TABLE_4_TOOTH_NO,
                            [TABLE_5_ID] : TABLE_5_TOOTH_NO,
                            [TABLE_6_ID] : TABLE_6_TOOTH_NO};
  var all_img_clip = {[TABLE_1_ID]: TABLE_1_IMAGE_CLIP,
                      [TABLE_2_ID]: TABLE_2_IMAGE_CLIP,
                      [TABLE_3_ID]: TABLE_3_IMAGE_CLIP,
                      [TABLE_4_ID]: TABLE_4_IMAGE_CLIP,
                      [TABLE_5_ID]: TABLE_5_IMAGE_CLIP,
                      [TABLE_6_ID]: TABLE_6_IMAGE_CLIP};
 var all_chart_label_str = {[TABLE_1_ID]: [TABLE_CHART_LABEL.BUCCAL,
                                           TABLE_CHART_LABEL.DESC,
                                           TABLE_CHART_LABEL.PALATAL],
                            [TABLE_2_ID]: [TABLE_CHART_LABEL.LABIAL,
                                           TABLE_CHART_LABEL.DESC,
                                           TABLE_CHART_LABEL.PALATAL],
                            [TABLE_3_ID]: [TABLE_CHART_LABEL.BUCCAL,
                                           TABLE_CHART_LABEL.DESC,
                                           TABLE_CHART_LABEL.PALATAL],
                            [TABLE_4_ID]: [TABLE_CHART_LABEL.BUCCAL,
                                           TABLE_CHART_LABEL.DESC,
                                           TABLE_CHART_LABEL.LINGUAL],
                            [TABLE_5_ID]: [TABLE_CHART_LABEL.LABIAL,
                                           TABLE_CHART_LABEL.DESC,
                                           TABLE_CHART_LABEL.LINGUAL],
                            [TABLE_6_ID]: [TABLE_CHART_LABEL.BUCCAL,
                                           TABLE_CHART_LABEL.DESC,
                                           TABLE_CHART_LABEL.LINGUAL],
                           };

  var form = document.getElementById("main_form");

  for (var i = 0; i < all_table_ids.length; ++i) {
    var table_id = all_table_ids[i]
    var table = docCEwithAttrs("table", {"id": table_id,
                                         "class": TABLE_TOOTH_CLASS_NAME});
    var t_tr, t_td;

    insertInputRows2TableByPos(table, table_id, TOP_POS_TAG);
    insertChartRow2Table(table, table_id);
    insertInputRows2TableByPos(table, table_id, BOTTOM_POS_TAG);

    form.appendChild(table);
  }

  // --------------- inner functions ------------------
  function insertChartRow2Table(table, table_id) {
    var tr = docCEwithAttrs("tr");
    var t_td, t_font, t_attrs, canvas;
    var font_class = [TABLE_FONT_CHART_LABEL_CLASS_NAME,
                      TABLE_FONT_CHART_DESC_CLASS_NAME,
                      TABLE_FONT_CHART_LABEL_CLASS_NAME,
                     ];
    var clip_data = all_img_clip[table_id];
    var chart_label_str = all_chart_label_str[table_id];

    t_attrs = {"class": TABLE_TD_LABEL_CLASS_NAME};
    t_td = docCEwithAttrs("td", t_attrs);
    for (var i = 0; i < font_class.length; ++i) {
      t_attrs = {"class": font_class[i]};
      t_font = docCEwithAttrs("font", t_attrs);
      t_font.innerHTML = TABLE_CHART_LABEL_STR[chart_label_str[i]];
      t_td.appendChild(t_font);
    }
    t_td.innerHTML += TABLE_CHART_LABEL_TD_BOTTOM_APPEND_HTML;
    tr.appendChild(t_td);

    t_attrs = {"colspan": all_table_tooth_no[table_id].length.toString()};
    t_td = docCEwithAttrs("td", t_attrs);

    t_attrs = {"class": TABLE_CHART_CANVAS_CLASS_NAME,
               "name": CANVAS_NAME,
               "width": clip_data["width"].toString(),
               "height": clip_data["height"].toString()};
    canvas = docCEwithAttrs("canvas", t_attrs);
    t_td.appendChild(canvas);
    tr.appendChild(t_td);
    table.appendChild(tr);
  }

  function insertInputRows2TableByPos(table, table_id, pos_tag) {
    var t_tr, t_td;
    var settings = [[TABLE_TR_ENUM.CAL_BOP, BOP_TAG, CAL_TAG, true],
                    [TABLE_TR_ENUM.PD_PLAQUE, PLAQUE_TAG, PD_TAG, false],
                    [TABLE_TR_ENUM.CEJGM, null, CEJGM_TAG, false]];

    if (pos_tag == BOTTOM_POS_TAG)
      settings.reverse();

    for (var i = 0; i < settings.length; ++i) {
      t_tr = docCEwithAttrs("tr");
      t_td = createDataLabelTd(settings[i][0]);
      t_tr.appendChild(t_td);

      for (var j = 0; j < all_table_tooth_no[table_id].length; ++j) {
        t_td = createDotNumTd(settings[i][1],
                              settings[i][2],
                              pos_tag,
                              j+1,
                              settings[i][3]);
        t_tr.appendChild(t_td);
      }
      table.appendChild(t_tr);
    }
  }

  function createDataLabelTd(inner_html_i) {
    var td = docCEwithAttrs("td", {"class": TABLE_TD_LABEL_CLASS_NAME});
    var font = docCEwithAttrs("font",
                             {"class": TABLE_FONT_DATA_LABEL_CLASS_NAME});

    font.innerHTML = TABLE_LABEL_INNER_HTML[inner_html_i];
    td.appendChild(font);

    return td;
  }

  function insertDotType2Div(div, set_tag) {
    var attrs = {"name": // ex: bop_dot
                   concatNames(set_tag, TABLE_DOT_SUB_TAG),
                 "class": // ex: dot_type
                   concatNames(TABLE_DOT_SUB_TAG, TABLE_TYPE_SUB_TAG)
                };
    var t_font;

    for (var i = 0; i < SITE_OF_TOOTH_MULTIPPLIER_WITH_POS; ++i) {
      t_font = docCEwithAttrs("font", attrs);
      t_font.innerHTML = TABLE_DOT_TYPE_INNER_HTML;
      div.appendChild(t_font);
    }
  }

  function insertNumType2Div(div, set_tag, is_read_only) {
    var attrs, name_sub_tag, t_input, is_read_only;

    name_sub_tag = is_read_only ? TABLE_RESULT_SUB_TAG :
                                  TABLE_VALUE_SUB_TAG;

    attrs = {"name": // ex: cal_result
                concatNames(set_tag, name_sub_tag),
             "class": // ex: number_type
                concatNames(TABLE_NUM_SUB_TAG, TABLE_TYPE_SUB_TAG),
             "type": // input type
                "number" 
            };
    for (var i = 0; i < SITE_OF_TOOTH_MULTIPPLIER_WITH_POS; ++i) {
      t_input = docCEwithAttrs("input", attrs);
      t_input.readOnly = is_read_only;
      div.appendChild(t_input);
    }
  }

  function createDotNumDiv(set_tag, type_tag, pos_tag, index_str) {
    var attrs = { "name": // ex: bop_top_set_1
                     concatNames(set_tag,
                     pos_tag,
                     TABLE_DIV_SET_TAG,
                     index_str),
                  "class": // ex: dot_container
                     concatNames(type_tag, TABLE_CONTAINER_SUB_TAG)
                };
    return docCEwithAttrs("div", attrs);
  }

  function createDotNumTd(tag4dot, tag4num, pos_tag,
                                   index, num_read_only=false) {
    var td = docCEwithAttrs("td");
    var index_str = index.toString();
    var t_div, t_font, t_attrs;

    if (null != tag4dot) {
      t_div = createDotNumDiv(tag4dot,
                              TABLE_DOT_SUB_TAG,
                              pos_tag,
                              index_str);
      insertDotType2Div(t_div, tag4dot);
      td.appendChild(t_div);
    }

    if (null != tag4num) {
      t_div = createDotNumDiv(tag4num,
                              TABLE_NUM_SUB_TAG,
                              pos_tag,
                              index_str);
      insertNumType2Div(t_div, tag4num, num_read_only);
      td.appendChild(t_div);
    }

    return td;
  }

  function docCEwithAttrs(tag, attrs = {}) {
    var e = document.createElement(tag);
    if (null != attrs) {
      for (var key in attrs) {
        e.setAttribute(key, attrs[key]);
      }
    }
    return e
  }

  function docCEwithId(tag, id) {
    var e = document.createElement(tag);
    e.setAttribute("id", id);
    return e
  }
}
