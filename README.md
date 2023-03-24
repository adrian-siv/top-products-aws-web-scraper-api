# 🔎 Top Products AWS Web Scraper API 🛍
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">

This is an **API Rest** capable of **scraping** the 3 first bestselling products exihibited in Amazon Bestsellers page and **storing** this information in a **DynamoDB table**. Furthermore, it also provides the user a way of **retrieving the stored data** as records containing id, date, and the respective products list.

## Building Technologies 🛠️
* [Puppeteer Core](https://www.npmjs.com/package/puppeteer-core) - Used to build the scraping function;
* [Serverless Framework](https://www.serverless.com/) - Used to build the AWS infrastructure;
* [AWS Lambda](https://aws.amazon.com/pt/lambda/) - Used to execute functions as services;
* [Amazon API Gateway](https://aws.amazon.com/pt/api-gateway/) - Used to handle the requests setting endpoints;
* [Amazon S3](https://aws.amazon.com/pt/s3/) - Used to store construct file to AWS Lambda layer;
* [Amazon DynamoDB](https://aws.amazon.com/pt/dynamodb/) - Used to store the data obtained with scraping;
* [Amazon CloudWatch](https://aws.amazon.com/pt/cloudwatch/) - Used to verify the proper functioning of the application, as well as to view error logs.


## API Documentation 📃
Acess the complete API Documentation by clicking the link: https://documenter.getpostman.com/view/26551541/2s93RNxaAU
### 📍 Route summary 
#### Scraping
| Route                | Method | Description                                                                            |
|----------------------|--------|----------------------------------------------------------------------------------------|
| /bestsellers         | GET    | Return the top 3 bestselling products list and store it as an unique record in DynamoDB|

#### Data Table
| Route                | Method | Description                                  |
|----------------------|--------|--------------------------------------------- |
| /datatable           | GET    | List all records stored in the DynamoDB table|

<br>
<br>
Thank you for visiting! 😁
