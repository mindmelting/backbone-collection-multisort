var compare = function(modelA, modelB, attributeObj) {
  var result = 0;
  var modelAValue = attributeObj.func ? modelA[attributeObj.func]() : modelA.get(attributeObj.attribute);
  var modelBValue = attributeObj.func ? modelB[attributeObj.func]() : modelB.get(attributeObj.attribute);
  if (modelAValue > modelBValue) {
    result = 1;
  } else if (modelAValue < modelBValue) {
    result = -1;
  }
  if (attributeObj.order === 'desc') {
    result = -result;
  }
  return result;
};

var multiSort = function(modelA, modelB, attributes) {
  var compResult;
  if (modelA instanceof Backbone.Model && modelB instanceof Backbone.Model) {
    compResult = compare(modelA, modelB, attributes[0]);
    if (compResult === 0 && attributes.length > 1) {
      compResult = multiSort(modelA, modelB, attributes.splice(0, 1));
    }
    return compResult;
  } else {
    throw Error('Both models must be Backbone Models');
  }
};