module.exports = function (app) {
    app.get('*', function (request, respond) {
        //Loads Index.html
        respond.sendFile(__dirname + '../project/index.html');
    });
};