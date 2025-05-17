import { useState } from "react"
import OpenInvite from "@/component/open-invite"
import "../styles/tailwind.css"
import { Theme } from "@radix-ui/themes"

function MyApp({ Component, pageProps }) {
  const [isValid, setIsValid] = useState(false)

  if (!isValid) {
     return(
      <Theme> 
        <OpenInvite onValidate={() => setIsValid(true)} />
      </Theme>
     )
  }
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  ) 
}

export default MyApp
