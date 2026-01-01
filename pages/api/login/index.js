async function handler(req, res) {
  if (req.method === "POST") {
    const response = await fetch(`${process.env.LOGIN_API_URL}/api/login/sign-in`, {
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
