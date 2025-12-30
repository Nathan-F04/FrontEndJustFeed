import { createContext, useState, useEffect, useRef } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  const [globals, setGlobals] = useState({
    aString: "init val",
    count: 0,
    orders: [],
    cards: [],
    cartItems: [],
    pastOrders: [],
    dataLoaded: false,
    isLoggedIn: true,
    cardDataLoaded: false,
    isPastOrdersLoaded: false,
    userId: 0,
    messages: [],
  });

 /* const ws = useRef(null);
   
  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080/ws");
    ws.current.onopen = () => console.log("WebSocket connected");
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setGlobals((prev) => ({
        ...prev,
        messages: [...prev.messages, data.message],
      }));
    };

    ws.current.onclose = () => console.log("WebSocket disconnected");
    getAllCards();
    getAllPastOrders();
    getAllMeetings();
    return () => ws.current.close();
  }, []);*/

  async function getAllMeetings() {
    const response = await fetch("/api/orders");
    let data = await response.json();
    setGlobals((previousGlobals) => {
      const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
      newGlobals.orders = data;
      newGlobals.dataLoaded = true;
      return newGlobals;
    });
  }

  async function getAllCards() {
    const response = await fetch(`/api/banking/${globals.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log([data]);
    setGlobals((previousGlobals) => {
      const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
      newGlobals.cards = [data];
      newGlobals.cardDataLoaded = true;
      return newGlobals;
    });
  }

  async function getAllPastOrders() {
    const response = await fetch("/api/add-items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    setGlobals((previousGlobals) => {
      const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
      newGlobals.pastOrders = data;
      newGlobals.isPastOrdersLoaded = true;
      return newGlobals;
    });
  }

  async function setQuantity(id, newVal) {
    const response = await fetch(`/api/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newVal),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setGlobals((previousGlobals) => {
      const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
      newGlobals.cartItems = newGlobals.cartItems.map((item) =>
        item.id === data.id ? data : item
      );
      return newGlobals;
    });
  }

  async function editGlobalData(command) {
    if (command.cmd == "login") {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(command.newVal),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      let status = false;
      if (data.response === "login Successful") {
        status = true;
      }
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        newGlobals.isLoggedIn = status;
        newGlobals.userId = data.id;
        return newGlobals;
      });
    }

    if (command.cmd == "deleteAccount") {
      const response = await fetch(`/api/login/${globals.userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response === 204) {
        setGlobals((previousGlobals) => {
          const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
          newGlobals.isLoggedIn = false;
          newGlobals.userId = 0;
          return newGlobals;
        });
      }
    }

    if (command.cmd == "changeDetails") {
      const response = await fetch(`/api/login/${globals.userId}`, {
        method: "PATCH",
        body: JSON.stringify(command.newVal),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
    }

    if (command.cmd == "addItems") {
      const response = await fetch("/api/add-items", {
        method: "POST",
        body: JSON.stringify(command.newVal),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json(); // Should check here that it worked OK
      getAllPastOrders();
    }

    if (command.cmd == "createAccount") {
      const response = await fetch("/api/createAccount", {
        method: "POST",
        body: JSON.stringify(command.newVal),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    }
    if (command.cmd == "setQuantiyInCart") {
      setQuantity(command.id, command.newVal);
    }
    if (command.cmd == "addCard") {
      const response = await fetch("/api/banking", {
        method: "POST",
        body: JSON.stringify(command.newVal),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json(); // Should check here that it worked OK
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        newGlobals.cards.push(data);
        newGlobals.cardDataLoaded = true;
        return newGlobals;
      });
    }
    if (command.cmd == "addCartItem") {
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        const exists = newGlobals.cartItems.find(
          (item) => item.id === command.newVal.id
        );
        if (!exists) {
          newGlobals.cartItems.push(command.newVal);
        } else {
          const newQuantity = exists.quantity + 1;
          setQuantity(command.newVal.id, { quantity: newQuantity });
        }
        return newGlobals;
      });
    }
    if (command.cmd == "removeCartItem") {
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        newGlobals.cartItems = newGlobals.cartItems.filter(
          (item) => item.id !== command.newVal.id
        );
        setQuantity(command.newVal.id, { quantity: 1 });
        return newGlobals;
      });
    }
    if (command.cmd == "clearCart") {
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        newGlobals.cartItems.splice(0, newGlobals.cartItems.length);
        return newGlobals;
      });
    }
  }

  const context = {
    updateGlobals: editGlobalData,
    theGlobalObject: globals,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
