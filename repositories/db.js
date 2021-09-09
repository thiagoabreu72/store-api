import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  
  const pool = new pg.Pool({
    connectionString:
      "postgres://oowzuhel:v87VsS0tSvJ7RTwiP3Awwo6fK_lyP_oZ@chunee.db.elephantsql.com/oowzuhel",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
