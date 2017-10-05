module.exports = function (context, req) {
    context.log('Node.js GitHub WebHook function processed a request. RequestUri=%s', req.originalUrl);

    var p = req.body;
    context.bindings.message = {
        body : `The card ${p.project_card.note} has been ${p.action} by ${p.sender.login}`,
        to : "+18177600002"
    };

    context.done();
}
