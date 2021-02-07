let mysql = require('mysql')

mysql.createConnection({

})
    let connection  = mysql.createConnection({
    
        // host:'octv.cuuo94lplrvs.eu-west-1.rds.amazonaws.com',
        // // port:'3307',
        // user:'ubuntu',
        // password:'M9a-39a-Bd6-V8E',
        // database:'pub'
        host:'rds-tobeweb-phplist.ckvjvsug45uq.eu-west-1.rds.amazonaws.com',
        // port:'3307',
        user:'rdsTobewebPhp',
        password:'tobeweb55',
        // password:'M9a-39a-Bd6-V8E',
        database:'DemoTest'
    })
    
    connection.connect((error)=>{
        if (error) console.log(error.message)
        else console.log('connecter')
    
    });

module.exports = connection
