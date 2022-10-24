remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

remark.macros.fit = function (width, height, x, y) {
  var url = this;
  return '<img src="' + url + '" style="object-fit: cover;' +
          'width: ' + width + ' ;' +
          'height: ' + height + ' ;' +
          'object-position: ' + x + ' ' + y + '" />';
};
