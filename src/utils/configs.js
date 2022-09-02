import * as crypto from "crypto";
// @INCLUDE_IN_API_DOCS
/**
 * @typedef {Object} MySqlConfigs
 * @property {string} host - hostname or ip address
 * @property {string} port - port on which MySql server is listening
 * @property {string} database - name of database to do operations
 * @property {string} user - name of user who has permissions to do operation
 * @property {string} password - password of the user for authentication
 *
 */

/**
 * It returns a JavaScript object with the host, port, database, user, and password for a MySQL database
 * @returns  {MySqlConfigs} An object with the following properties:
 *
 *     `host`: The value of the environment variable MY_SQL_SERVER or 'localhost'
 *
 *     port: The value of the environment variable MY_SQL_SERVER_PORT or '3306'
 *
 *     database: The value of the environment variable MY_SQL_SERVER_DB or a random hex string
 *
 *     user: The value of the environment variable MY_SQL_USER or a random hex string
 *
 *     password :  The value of the environment variable MY_SQL_PASSWORD or a random hex string
 */

export function getMySqlConfigs() {
    const host = process.env.MY_SQL_SERVER || 'localhost';
    const port = process.env.MY_SQL_SERVER_PORT || '3306';
    const database = process.env.MY_SQL_SERVER_DB || 'a' + crypto.randomBytes(4).toString('hex');
    const user = process.env.MY_SQL_USER || 'b' + crypto.randomBytes(4).toString('hex');
    const password = process.env.MY_SQL_PASSWORD || 'c' + crypto.randomBytes(4).toString('hex');
    return {
        'host': host,
        'port': port,
        'database': database,
        'user': user,
        'password': password
    };
}
