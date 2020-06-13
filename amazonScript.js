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

var removeIdList = ["averageCustomerReviews"];
var removeClassList = ["a-icon-row a-spacing-none","a-link-normal adReviewLink a-text-normal","a-icon-row a-spacing-none","a-section a-spacing-none a-text-left octopus-pc-asin-review-star","crAvgStars"];



for(var i = 0; i < removeIdList.length; i++){
  removeIdElement(removeIdList[i]);
}

for(var i = 0; i < removeClassList.length; i++){
  removeClassElement(removeClassList[i]);
}
