async function handler(req, res) {
  const { cardId } = req.query;
  if (req.method === "GET") {
    const response = await fetch(
      `http://localhost:8000/api/banking/${cardId}`,
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
