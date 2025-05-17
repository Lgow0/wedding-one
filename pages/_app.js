import { useEffect, useState } from "react"
import OpenInvite from "@/component/open-invite"
import "../styles/tailwind.css"
import { BeatLoader } from "react-spinners"

function MyApp({ Component, pageProps }) {
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getLoad = setTimeout(() => 
      setIsLoading(false), 3000)
    return () => clearTimeout(getLoad)
  }, [])
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <BeatLoader 
        loading={isLoading}
        color="gray"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
      </div>
    ) 
  }
  if (!isValid) {
     return (
       <OpenInvite onValidate={() => setIsValid(true)} />
     )
  }
  return (
    <Component {...pageProps} />
  ) 
}

export default MyApp
