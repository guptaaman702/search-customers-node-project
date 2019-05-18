import { convert } from '../utils/convertTextToJson';
import path from 'path';
import fs from 'fs';
import { find_customers } from 'search-customers';

const customerTextFile =  path.join(__dirname,'../models/customers.txt');
let customerList = [];

convert(customerTextFile).then(customerListResponse => {
  customerList = customerListResponse
}, (e) => next(e));

function get(req, res) {
  const customerId = req.params.customerId;
  const foundCustomer = customerList.filter(customer => customer.user_id == customerId);
  return res.json(foundCustomer);
}

function list(req, res, next) {
  return res.json(customerList);
}

function search(req, res, next) {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const customersWithinDublinArea = find_customers(customerList, latitude, longitude);
  return res.json(customersWithinDublinArea);
}

export default { get, list, search };
