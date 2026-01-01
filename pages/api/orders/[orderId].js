async function handler(req, res) {
  const { orderId } = req.query;
  if (req.method === "PATCH") {
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
  if (req.method === "GET") {
    const response = await fetch(
      `${process.env.NOTIFICATION_API_URL}/api/orders/${orderId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    res.json(data);
  }
}

export default handler;
