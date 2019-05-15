# nodeRestSQL
sudo npm install -g nodemon

sudo npm install express-generator -g

Crear proyecto
express restMongo

Cambiar en el package json a nodemon

npm install sequelize-cli
npm install sequelize

# One of the following:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Serve

Note: setting up SQLite

If you're using SQLite, you should use the following instead:

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});



Configurar base de datos en config/database.js

y la configuracion se instancia en app.js

Crear modelo

models/Persona.js

Crear endPoints En app.js

Poner app.post app.get app.put app.delete

Creacion de la tabla

create table personas (
  id VARCHAR(256),
  nombre VARCHAR(256),
  apellidos VARCHAR(256),
  edad integer,
  created_at date,
  updated_at date,
  deleted_at date
);
