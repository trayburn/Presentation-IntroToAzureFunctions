module.exports = function (context, p) {
    context.log('Node.js GitHub WebHook function processed a request. RequestUri=%s', req.originalUrl);

    context.bindings.message = {
        body : `The card ${p.project_card.note} has been ${p.action} by ${p.sender.login}`,
        to : "+18177600002"
    };

    context.done();
}
