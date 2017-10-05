module.exports = function (context, req) {
    context.log('Node.js GitHub WebHook function processed a request. RequestUri=%s', req.originalUrl);

    context.bindings.message = {
        body : `The card ${req.project_card.note} has been ${req.action} by ${req.sender.login}`,
        to : "+18177600002"
    };

    context.done();
}
