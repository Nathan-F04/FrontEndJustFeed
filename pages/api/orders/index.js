// /api/new-meetup

async function handler(req, res) {
  if (req.method === "GET") {
    const response = await fetch("http://localhost:8003/api/orders/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data)
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    const response = await fetch("http://localhost:8003/api/orderReceipt", {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  }
}

export default handler;
