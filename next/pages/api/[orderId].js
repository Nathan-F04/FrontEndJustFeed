async function handler(req, res) {
    const { orderId } = req.query; 
    const response = await fetch(`http://localhost:8003/api/${orderId}`, {
        method: 'PATCH',
        body: JSON.stringify(req.body),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    res.json(data);
}

    export default handler;