async function handler(req, res) {
  const { accountId } = req.query;
  if (req.method === "DELETE") {
    const response = await fetch(
      `http://localhost:8001/api/login/delete/${accountId}`,
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
      `http://localhost:8001/api/login/patch/${accountId}`,
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
      `http://localhost:8001/api/login/view/${accountId}`,
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
