var redis = require('redis');
var client = redis.createClient();

client.on('connect', function () {
    console.log('connected Test');
	//client.hmset('languages', 'portugues', 'ingles', 'espanhol', 'alemao');
});

// ESTRUTURA  DE DADOS STRINGS

client.set('Nome', 'Diego Pereira');
//client.set('Id', '1');

//Atualiza chave Total 
//client.set('total', '2000');

//###########################################################################################

// ESTRUTURA DE DADOS HASH

//client.hmset('languages', 'portugues', 'ingles', 'espanhol', 'alemao');

//Mostra no Console
//client.hgetall('languages', function (err, object) {
//      console.log(object);
//});



//###########################################################################################


// ESTRUTURA DE DADOS LIST 

//client.rpush(['frameworks', 'angular', 'react', 'vue'], function (err, reply) {
//console.log(reply); 
//});

//client.lrange('frameworks', 0, -1, function (err, reply) {console.log(reply); 
//});


//###########################################################################################



//client.rpush(['Linguagens', 'JavaScript', 'Java', 'Python'], function (err, reply) {
//console.log(reply); 
//});



//client.lrange('Linguagens', 0, -1, function (err, reply) {console.log(reply); 
//});

//client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
//   console.log(reply);
//});

//client.smembers('tags', function (err, reply) {
//  console.log(reply);
//});



