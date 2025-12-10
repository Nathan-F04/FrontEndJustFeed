let express = require('express');
let router = express.Router();

let Mongoose = require('mongoose').Mongoose;
let Schema = require('mongoose').Schema;

let oldMong = new Mongoose();
oldMong.connect('mongodb://127.0.0.1:27017/db');

let cardInfoschema = new Schema({
  cardId: String,
  nameOneCard: String,
  creditCardNumber: String,
  expMonth: String,
  expYear: String,
  cvc: String
}, { collection: 'cardInfo' });

let loginInfoSchema = new Schema({
  accountId: String,
  email: String,
  password: String
}, { collection: 'login details' });

let cardInfo = oldMong.model('cardInfo', cardInfoschema);
let loginInfo = oldMong.model('loginInfo', loginInfoSchema);

router.get('/', async function (req, res, next) {
  const cardInfo = await getcardInfo();
  res.render('index');
});

// Crud
router.post('/createCard', async function (req, res, next) {
  let retVal = { response: "fail" }
  await cardInfo.create(req.body,
    function (err, res) {
      if (!err) {
        retVal = { response: "success" }
      }
    }
  )
  res.json(retVal);
});

// cRud   Should use GET . . . we'll fix this is Cloud next term
router.get('/readCard', async function (req, res, next) {
  let data;
  data = await cardInfo.find().lean()
  // else {
  //   data = await meetings.find({ _id: req.body._id }).lean()
  // }
  res.json({ cardInfo: data });
})

router.post('/createAccount', async function (req, res, next) {
  let retVal = { response: "fail" }
  await loginInfo.create(req.body,
    function (err, res) {
      if (!err) {
        retVal = { response: "success" }
      }
    }
  )
  res.json(retVal);
});

router.post('/login', async function (req, res, next) {
  let retVal = { response: "fail", message: "Email or Password is incorrect"}
  const user = await loginInfo.findOne({ email: req.body.email });
  if (!user) {
    return res.json(retVal);
  }
  if (user.password === req.body.password) {
    retVal = { response: "success" };
  }
  res.json(retVal);
});

module.exports = router;