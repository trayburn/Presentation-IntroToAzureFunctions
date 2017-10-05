module.exports = function (context, req) {
    context.log('Node.js GitHub WebHook function processed a request. RequestUri=%s', req.originalUrl);

    context.bindings.message = {
        body : "ABC123",
        to : "+18177600002"
    };

    context.done();
}
