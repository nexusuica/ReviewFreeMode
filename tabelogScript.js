var removeClassElement = function(className){
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (e) {
      e.parentNode.removeChild(e);
    }
  }
};
var removeIdElement = function(id){
  var e = document.getElementById(id);
  if (e) {
    e.parentNode.removeChild(e);
  }
};

var removeIdList = ["js-detail-score-open"];
var removeClassList = ["c-rating userdata-rstlist__rating c-rating--val30","rating","areatop-top3__rating","list-rst__rate"];



for(var i = 0; i < removeIdList.length; i++){
  removeIdElement(removeIdList[i]);
}

for(var i = 0; i < removeClassList.length; i++){
  removeClassElement(removeClassList[i]);
}
