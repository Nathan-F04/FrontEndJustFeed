// /api/add-items

async function handler(req, res) { // can be called anything you like
  if(req.method === "POST"){
    const response = await fetch('http://localhost:8000/addItems', {
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
    const response = await fetch('http://localhost:8000/readItems', {
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
