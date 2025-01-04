```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:value}});
//The above query will work fine if value is a number but if value is a string or any other datatype it will throw an error.
//Correct Usage:
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:parseInt(value)}});
```