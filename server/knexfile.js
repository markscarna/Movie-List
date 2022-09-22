// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "postgres",
    connection: {
      database: "movies_db",
      user: "postgres",
      password: "docker",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      client: "pg",
      connection: "postgres://postgres:docker@localhost/movies_db",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
