// Generated by CoffeeScript 1.4.0
(function() {

  jQuery.fn.serializeObject = function() {
    var arr, obj, prop, _i, _len;
    obj = {};
    arr = this.serializeArray();
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      prop = arr[_i];
      obj[this.name] = this.value || '';
    }
    return obj;
  };

}).call(this);
