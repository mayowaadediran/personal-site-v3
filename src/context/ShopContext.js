import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "acedevtestshop.myshopify.com",
  storefrontAccessToken: "dce46c6eee6d263d8daea50f5a119af0",
})

const initialState = {
  cart: [],
  client,
  checkoutId: "",
}

function ShopReducer(state, action) {
  switch (action.type) {
    default:
      return state
  }
}

//Create Context
export const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShopReducer, initialState)

  useEffect(() => {
    client.checkout.create().then(checkout => {
      // Do something with the checkout
      console.log(checkout.id)
    })
  }, [])

  async function createCheckout() {
    // try {
    //   const res = await axios.get("/api/v1/transactions")
    //   dispatch({
    //     type: "GET_TRANSACTIONS",
    //     payload: res.data.data,
    //   })
    // } catch (err) {
    //   dispatch({
    //     type: "TRANSACTION_ERROR",
    //     payload: err.response.data.error,
    //   })
    // }
  }

  //Actions
  async function deleteTransaction(id) {
    // try {
    //   await axios.delete(`api/v1/transactions/${id}`)
    //   dispatch({
    //     type: "DELETE_TRANSACTION",
    //     payload: id,
    //   })
    // } catch (err) {
    //   dispatch({
    //     type: "TRANSACTION_ERROR",
    //     payload: err.response.data.error,
    //   })
    // }
  }

  async function addTransaction(transaction) {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }
    // try {
    //   const res = await axios.post("/api/v1/transactions", transaction, config)
    //   dispatch({
    //     type: "ADD_TRANSACTION",
    //     payload: res.data.data,
    //   })
    // } catch (err) {
    //   dispatch({
    //     type: "TRANSACTION_ERROR",
    //     payload: err,
    //   })
    // }
  }

  return (
    <ShopContext.Provider
      value={{
        client: state.client,
        // transactions: state.transactions,
        // error: state.error,
        // loading: state.loading,
        // getTransactions,
        // deleteTransaction,
        // addTransaction,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
