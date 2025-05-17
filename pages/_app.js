import { useState } from "react"
import OpenInvite from "@/component/open-invite"
import "../styles/tailwind.css"

function MyApp({ Component, pageProps }) {
  const [isValid, setIsValid] = useState(false)

  if (!isValid) {
     return <OpenInvite onValidate={() => setIsValid(true)} />
  }
  return <Component {...pageProps} />
}

export default MyApp
