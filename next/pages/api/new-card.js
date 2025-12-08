// /api/new-meetup

async function handler(req, res) { // can be called anything you like
  if(req.method === "POST"){
    const response = await fetch('http://localhost:8000/saveCardInfo', {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  res.json(data)
  }
  if(req.method === "GET"){
    const response = await fetch('http://localhost:8000/getCardInfo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  res.json(data)
  }

}

export default handler;
