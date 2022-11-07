const {Sequelize} = require("sequelize");

const pass = "12345678nM..";


// const db = new Sequelize("qr_usuarios", "bwrod44ust62glm5mhfi", "pscale_pw_3jnx697hMl75etQlOfjJfW3EFis4gQxWK2iPvr1KuUa",{
//     host: "us-east.connect.psdb.cloud",
//     port:3306,
//     dialect: "mysql",
// });

// const db = new Sequelize({
//     dialect: 'mysql',
//     username: 'bwrod44ust62glm5mhfi',
//     password:' pscale_pw_3jnx697hMl75etQlOfjJfW3EFis4gQxWK2iPvr1KuUa',
//     host: 'us-east.connect.psdb.cloud',
//     dialectOptions: {
//         bigNumberStrings: true,
//         ssl: {
//           ca: fs.readFileSync(__dirname + '/ca-certificates.crt')
//         }
//     }
// })

const db = new Sequelize(
    "qr_usuarios",
    "mnf0c6dkqq691bj3vgzc",
    "pscale_pw_hMrcImZH2iSIIyI3IxZWxpN1eTxoWhbOvVNChOE9BKM",
    {
      host: "us-east.connect.psdb.cloud",
      dialect: "mysql",
      dialectOptions: {
        ssl: {
          rejectUnauthorized: true,
        },
      },
      define: {
        timestamps: false,
      },
    }
  );


// async function createUser(){
//     const result = await db.query('use qr_usuarios')
//     const result2 = await db.query('CREATE TABLE users(name VARCHAR(1000))')
//     console.log(result2)

// }

// createUser()

module.exports = db;

