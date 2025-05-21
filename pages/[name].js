import React from "react"
import OpenInvite from "@/component/open-invite"
import { useRouter} from "next/router"

export default function InvitePage() {
    const [name, setName] = React.useState()
    const router = useRouter()

    React.useEffect(() => {
        const { name } = router.query
        if (name) { 
            setName(name)
        }
    }, [router.query])
    
    const onValidate = () => {
        console.debug("onValidate")
    }
    
    return <OpenInvite name={name} onValidate={onValidate}/>
}