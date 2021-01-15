function concatNames() {
  var result = "", value;

  for (var i = 0; i < arguments.length; ++i) {
    value = "string" == typeof arguments[i] ?
                arguments[i] : arguments[i].toString();
    if (0 != i) {
      result += "_";
    }

    result += value;
  }

  return result;
}
