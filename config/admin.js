module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa8ce1330cfe0be92b7ff538853ad756'),
  },
});
