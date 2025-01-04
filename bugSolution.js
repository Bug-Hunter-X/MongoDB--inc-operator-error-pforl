```javascript
//Correct usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:parseInt(value)}});
//This will work fine irrespective of the datatype of value
```