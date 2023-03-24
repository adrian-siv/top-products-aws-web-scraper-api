// Pretendo usar este arquivo como base para criar a funcionalidade de exportação dos dados obtidos pelo scraper para o DynamoDB.

const AWS = require('aws-sdk');

module.exports.createRecord = async (productsList) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_DATA_TABLE,
    Item: {
      products_list: JSON.stringify(productsList),
    },
  };
  await dynamoDb.put(putParams).promise();

};
