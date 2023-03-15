module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfo6joh4rebfdav4hos0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'sample_q78t'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'KYzTbDiN4Z1bCIaQBuant6w3hfxpMvV8'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
