module.exports = function (context, req) {
    context.bindings.message = {
        body : `The card ${req.project_card.note} has been ${req.action} by ${req.sender.login}`,
        to : "+18177600002"
    };

    context.done();
}
