// /api/new-meetup

async function handler(req, res) {
  const response = await fetch(`${process.env.NOTIFICATION_API_URL}/api/orders/items`);

  const data = await response.json();
  res.status(200).json(data);
}

export default handler;