const AWS = require('aws-sdk');

module.exports.createRecord = async (productsList) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_DATA_TABLE,
    Item: {
      id: Date.now().toString(),
      date: Date(),
      products_list: JSON.stringify(productsList),
    },
  };
  await dynamoDb.put(putParams).promise();

};
