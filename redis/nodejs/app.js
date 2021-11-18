const redis = require('redis');
console.debug("Redis demo started...");
const port = 6379;
const host = "127.0.0.1";
console.debug("Trying to connect to Redis...");
const client = redis.createClient(port, host);

client.on('connect', function() {
    console.log('Connected!');
    client.set('framework', 'ReactJS', function(err, reply) {
        if(err) { console.error(err); return; }
        console.debug(reply);
      });
    client.get('framework', function(err, val) {
        console.debug(("framework="+val));
      });

    var customer = { id:1001, name:"Michael" };
    client.set('customer', JSON.stringify(customer), function(err, reply) {
        if(err) { console.error(err); return; }
        console.debug(reply);
      });
    client.get('customer', function(err, val) {
        var customerFromDB = JSON.parse(val);
        console.debug(("customer.id="+customerFromDB.id));
        console.debug(("customer.name="+customerFromDB.name));
      });      
});


//console.debug("Redis demo ended.");