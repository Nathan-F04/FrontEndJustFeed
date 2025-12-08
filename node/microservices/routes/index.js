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

let cardInfo = oldMong.model('cardInfo', cardInfoschema);

router.get('/', async function (req, res, next) {
  const cardInfo = await getcardInfo();
  res.render('index');
});

router.get('/getcardInfo', async function (req, res, next) {
  const cardInfo = await getcardInfo();
  res.json(cardInfo);
});

async function getcardInfo() {
  data = await cardInfo.find().lean();
  return { cardInfo: data };
}

router.post('/saveCardInfo', async function (req, res, next) {
  const cardInfo = await saveCardInfo(req.body);
  res.json(cardInfo);
});

async function saveCardInfo(theCard) {
  console.log('theCard: ' + theCard);
  await cardInfo.create(theCard,
    function (err, res) {
      if (err) {
        console.log('Could not insert new card')
        return { saveCardResponse: "fail" };
      }
    }
  )
  return { saveCardInfoResponse: "success" };
}

module.exports = router;