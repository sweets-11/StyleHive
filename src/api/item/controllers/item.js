const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
"use strict";

/**
 * item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::item.item");