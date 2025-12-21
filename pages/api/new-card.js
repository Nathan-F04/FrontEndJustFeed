// /api/new-meetup

async function handler(req, res) {
  // can be called anything you like
  if (req.method === "POST") {
    const response = await fetch("http://service_b:8000/createCard", {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  }
  if (req.method === "GET") {
    const response = await fetch("http://service_b:8000/readCard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  }
}

export default handler;
