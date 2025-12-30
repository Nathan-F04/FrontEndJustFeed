async function handler(req, res) {
  const { accountId } = req.query;
  if (req.method === "DELETE") {
    const response = await fetch(
      `${process.env.LOGIN_API_URL}/api/login/delete/${accountId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.status(response.status).end();
  }
  if (req.method === "PATCH") {
    const response = await fetch(
      `${process.env.LOGIN_API_URL}/api/login/patch/${accountId}`,
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
}

export default handler;
