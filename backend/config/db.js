const pgp = require('pg-promise')();
const usuario = "postgres";
const senha = "postgres";
const host = "localhost";
const porta = "5433";
const banco_de_dados = "prog2";

const db = pgp(`postgres://${usuario}:${senha}@${host}:${porta}/${banco_de_dados}`);
module.exports = db;