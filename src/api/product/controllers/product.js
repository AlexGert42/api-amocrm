'use strict';

const { default: entityService } = require("@strapi/strapi/lib/services/entity-service");

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product');





