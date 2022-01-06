const mysql=require("mysql");
const Promise=require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "project1",
  };

async function connectioncheck(){
  const connection=mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection sucess...");
  await connection.endAsync();
}

async function addUser(user){
    const connection =mysql.createConnection(dbinfo)
    await connection.connectAsync();
    console.log("connecton sucessfully");
    let sql=`insert into user(id,username,password,mobile)values(?,?,?,?)`;
    await connection.queryAsync(sql,[user.id,user.username,user.password,user.mobile]);
    await connection.endAsync();
    console.log("record add");
}

async function selectUser(){
    const connection =mysql.createConnection(dbinfo)
    await connection.connectAsync();
    console.log("connecton sucessfully");
    let sql=`select * from user`;
    const list=await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log(list);
    return list;
}


module.exports={selectUser,addUser};

//selectUser();


//const user={id:'1',username:'payal',password:'payal@14',mobile:'9658455254'};

//addUser(user);
//connectioncheck();