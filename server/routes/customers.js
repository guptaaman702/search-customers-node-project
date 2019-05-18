import express from 'express';
import validate from 'express-validation';
import customerCtrl from '../controllers/customers';
import validations from './validation/customers';

const router = express.Router();

router.route('/')
  /** GET /api/customers - Get list of customers */
  .get(customerCtrl.list)

router.route('/:customerId')
  /** GET /api/customers/:customerId - Get customer */
  .get(validate(validations.getcustomer),
       customerCtrl.get)
  
router.route('/search')
  /** POST /api/customers/search - Get All customers whose distance 
   * is less than or equal to 100 km from Dublin Area(53.339428,-6.257664)
   */
  .post(validate(validations.searchcustomer),
        customerCtrl.search);

export default router;
