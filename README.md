backbone-collection-multisort
=============================

A couple of small functions to assist in sorting on multiple attributes in Backbone Collections.

If the first attributes are the same, then it will iterate down to further attributes set in an array.

Use by calling:

```javascript

multiSort(modelA, modelB, attributes);

```

modelA and modelB should both be Backbone Models.

attributes should be an array of objects in this format:

```javascript

{
  attribute: 'name',
  order: 'desc'
}

```

If the value is returned from a function on the model then use this format:

```javascript

{
  func: 'getBuyIn',
  order: 'asc'

```

The returned value can be returned straight into the comparator function on Backbone Collections.
