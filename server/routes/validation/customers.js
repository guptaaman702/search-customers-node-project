import Joi from 'joi';

export default {
  // POST /api/customers
  searchcustomer: {
    body: {
      latitude: Joi.number().required(),
      longitude: Joi.number().required()      
    }
  },

  // GET /api/customers/:customerId
  getcustomer: {
    params: {
      customerId: Joi.number().required()
    }
  }
};
