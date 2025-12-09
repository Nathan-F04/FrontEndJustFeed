// /api/new-meetup

async function handler(req, res) {
  const response = await fetch("http://localhost:8003/api/orders_front");

  const data = await response.json();
  res.status(200).json(data);
}

export default handler;
