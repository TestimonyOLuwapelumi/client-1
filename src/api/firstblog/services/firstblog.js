'use strict';

/**
 * firstblog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::firstblog.firstblog');
