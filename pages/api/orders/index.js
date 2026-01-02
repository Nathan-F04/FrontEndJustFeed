async function handler(req, res) {
  if (req.method === "POST") {
    const response = await fetch(
      `${process.env.NOTIFICATION_API_URL}/api/orderReceipt`,
      {
        method: "POST",
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
      `${process.env.NOTIFICATION_API_URL}/api/orders/items`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  }
}

export default handler;
