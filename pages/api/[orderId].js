async function handler(req, res) {
  const { orderId } = req.query;
  const response = await fetch(
    `${process.env.NOTIFICATION_API_URL}/api/orders/items/${orderId}`,
    {
      method: "PATCH",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  res.json(data);
}

export default handler;
