var vcard = [];
exports.create= function(req, res) {
        console.log(">>>>>>>>>>>>> create");


var person = {
        name:"",
        nickname: "",
        tel:""

};

person.nickname = req.params.name;
person.name = req.query.name;
person.tel = req.query.tel;
vcard.push(person);


        res.end();
};

exports.read= function(req, res) {
        console.log(">>>>>>>>>>>>> read");

        res.send(vcard);
         res.end();
};

exports.update = function(req, res){
        var nickname = req.params.name;

        vcard.forEach(function (entry) {
                if (entry.nickname === nickname) {
                        console.log('found!');
                        
                        entry.name =  req.query.name;
                        entry.tel =  req.query.tel;
                }
        });

        res.end();
};

exports.delete= function(req, res) {
        console.log(">>>>>>>>>>>>> delete");


        res.end();
};

exports.upload= function(req, res) {
        console.log(">>>>>>>>>>>>> upload");


        res.end();
};