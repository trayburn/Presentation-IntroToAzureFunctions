module.exports = function (context, req) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);

    var name = context.bindingData.name;

    context.res = {
        status: 200, /* Defaults to 200 */
        body: `Hello ${name}!  Welcome to DogFoodCon.`
    };

    context.done();
}

// https://itaf.azurewebsites.net/api/helloworld/Tim?code=/e55udEcFgONqsXa7XqaYQcqkKkZpdA4Ned9fvuEbr9S0DoeZB8Mrg==
