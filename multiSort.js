var compare = function(modelA, modelB, attributeObj) {
    var normaliseValue = function(value){
      if(typeof value === 'string'){
        value = value.toLowerCase();
      }
      return value;
    };
    var result = 0,
        modelAValue,
        modelBValue;

    if(attributeObj.func){
      modelAValue = normaliseValue(modelA[attributeObj.func]());
      modelBValue = normaliseValue(modelB[attributeObj.func]());
    }else{
      modelAValue = normaliseValue(modelA.get(attributeObj.attribute));
      modelBValue = normaliseValue(modelB.get(attributeObj.attribute));
    }
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
        attributes.splice(0, 1);
        compResult = multiSort(modelA, modelB, attributes);
      }
      return compResult;
    }
      
    throw new Error('Both models must be Backbone Models');
  };
