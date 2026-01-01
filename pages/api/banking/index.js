async function handler(req, res) {
  if (req.method === "POST") {
    const response = await fetch(`${process.env.BANKING_API_URL}/api/banking`, {
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