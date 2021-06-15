import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Login" />
    <h1>Login Page</h1>
    <p>This is were you are logging in</p>
    <Link to="/">back to home</Link>
  </Layout>
)

export default SecondPage
