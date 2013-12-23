var vcard = [];

exports.create = function(req, res){
        var person = {
                        nickname: "",
                        name: "",
                        tel: ""
        };

        person.nickname = req.params.nickname;

        person.tel =  req.query.tel;
        person.name = req.query.name;

        vcard.push(person);

        res.end();
};

exports.read = function(req, res){
        res.send(vcard);

        res.end();        
};

exports.update = function(req, res){
        var nickname = req.params.nickname;

        vcard.forEach(function (entry) {
                if (entry.nickname === nickname) {
                        console.log('found!');

                        entry.name =  req.query.name;
                        entry.tel =  req.query.tel;
                }
        });

        res.end();
};

exports.delete = function(req, res){
        res.end();
};

exports.upload = function(req, res) {

    var fs = require('fs');
    var path = require('path');
    var type = req.params.type;   // 'photo' or 'voice'
    var ext;

    switch (type) {
            case 'photo':
                    ext = '.jpg';
                    break;
            case 'voice':
                    ext = '.mp3';
                    break;
    }
    var filename = req.params.nickname + ext;

    fs.readFile(req.files.file.path, function (err, data) {
        var newPath = path.join(__dirname, '../frontend/', 'uploads',  filename);

        fs.writeFile(newPath, data, function (err) {
            if (err) {
                res.json({status: 'error', message: err});
            } else {
                res.json({status: 'ok'});
            }
        });
    });
};