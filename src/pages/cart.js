import React from "react"
import Layout from "../components/layout"

import { ShopProvider } from "../context/ShopContext"

function Cart() {
  return (
    <ShopProvider>
      <Layout></Layout>
    </ShopProvider>
  )
}

export default Cart
