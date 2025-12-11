import { createContext, useState, useEffect } from "react";

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
    isLoggedIn: false,
    cardDataLoaded: false,
    isPastOrdersLoaded: false,
  });

  useEffect(() => {
    getAllCards();
    getAllPastOrders();
    getAllMeetings();
  }, []);

  async function getAllMeetings() {
    const response = await fetch("/api/orders");
    let data = await response.json();
    console.log(data);
    setGlobals((previousGlobals) => {
      const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
      newGlobals.orders = data;
      newGlobals.dataLoaded = true;
      return newGlobals;
    });
  }

  async function getAllCards() {
    const response = await fetch("/api/new-card", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    setGlobals((previousGlobals) => {
      const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
      newGlobals.cards = data;
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
    console.log(data);
    setGlobals((previousGlobals) => {
      const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
      newGlobals.pastOrders = data;
      newGlobals.isPastOrdersLoaded = true;
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
      console.log(data);
      if (data.response === "success") {
        status = true;
      }
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        newGlobals.isLoggedIn = status;
        return newGlobals;
      });
    }
    if (command.cmd == "addItems") {
      const response = await fetch("/api/add-items", {
        method: "POST",
        body: JSON.stringify(command.newVal),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json(); // Should check here that it worked OK
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
      console.log(data);
    }
    if (command.cmd == "setQuantiyInCart") {
      const response = await fetch(`/api/${command.id}`, {
        method: "PATCH",
        body: JSON.stringify(command.newVal),
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
    if (command.cmd == "addCard") {
      const response = await fetch("/api/new-card", {
        method: "POST",
        body: JSON.stringify(command.newVal),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json(); // Should check here that it worked OK
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        newGlobals.cards = data;
        return newGlobals;
      });
    }
    if (command.cmd == "addCartItem") {
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        newGlobals.cartItems.push(command.newVal);
        return newGlobals;
      });
    }
    if (command.cmd == "removeCartItem") {
      setGlobals((previousGlobals) => {
        const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
        newGlobals.cartItems = newGlobals.cartItems.filter(
          (item) => item.id !== command.newVal.id
        );
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
