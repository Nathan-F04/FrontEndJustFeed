async function handler(req, res) {
  const { cardId } = req.query;
  if (req.method === "GET") {
    const response = await fetch(
      `${process.env.BANKING_API_URL}/api/banking/${cardId}`,
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
  if (req.method === "PATCH") {
    const response = await fetch(
      `http://localhost:8000/api/banking/${cardId}`,
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
  if (req.method === "DELETE") {
    const response = await fetch(
      `http://localhost:8000/api/banking/${cardId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status(response.status).end();
  }
}

export default handler;

