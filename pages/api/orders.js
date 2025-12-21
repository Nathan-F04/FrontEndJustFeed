// /api/new-meetup

async function handler(req, res) {
  const response = await fetch("http://service_d:8000/api/orders/items");

  const data = await response.json();
  res.status(200).json(data);
}

export default handler;
