module.exports = function (context, req) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);

    var name = context.bindingData.name;

    context.res = {
        status: 200, /* Defaults to 200 */
        body: `Hello ${name}!  Welcome to DogFoodCon.`
    };

    context.done();
}
