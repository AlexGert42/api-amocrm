'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('amo')
      .service('myService')
      .getWelcomeMessage();
  },
};
