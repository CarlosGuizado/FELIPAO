createStringConnection("db_produtcs", "felipe", "9876")

function createStringConnection(dataBaseName,user,pass){
    console.log(`connect:DBCONNECT; user=${user}; pass=${pass}; initial_database=${dataBaseName}`)
}