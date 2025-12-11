

// async function handler(req, res) { // can be called anything you like
//   if(req.method === "DELETE"){
//     const response = await fetch('http://localhost:8000/deleteCartItem', {
//         method: 'DELETE',
//         body: JSON.stringify(req.body),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     const data = await response.json();
//     res.json(data)
//   }
//   if(req.method === "POST"){
//         const response = await fetch('http://localhost:8000/addCartItem', {
//         method: 'POST',
//         body: JSON.stringify(req.body),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     const data = await response.json();
//     res.json(data)
//   }
// }
// export default handler;