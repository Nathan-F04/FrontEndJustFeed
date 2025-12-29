async function handler(req, res) {
  if (req.method === "POST") {
    const apiUrl = process.env.LOGIN_API_URL || "http://localhost:8001";
    const response = await fetch(`${apiUrl}/api/login/sign-up`, {
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
