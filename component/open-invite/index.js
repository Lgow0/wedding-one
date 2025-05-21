import React from 'react'
import { Button } from '@/components/ui/button'
import { Fade } from 'react-reveal'
import { useRouter} from 'next/router'

const OpenInvite = ({onValidate, name:initialName}) => {
    const router = useRouter()
    const [name, setName] = React.useState(initialName)

    const handleClick = () => {
        if (typeof onValidate === "function") {
            onValidate()
        } else {
            console.error("onValidate is not a function")
        }
        router.push('/')
    }       
    React.useEffect(() => {
        if (router.query.name) {
            setName(router.query.name)
        }
    }, [router.query.name])

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Fade bottom duration={1000}> 
            <h1 className="text-2xl font-bold mb-4">Open Invite</h1>
                <p className="text-lg mb-4">{name ? name : 'Guest'} & Partner</p>
                <Button 
                 onClick={handleClick}
                 className="bg-dark-500 text-white font-font-semibold px-4 py-2 rounded-xl">
                    {'Open Invite'}
                </Button>
            </Fade>
        </div>
    )
}

export default OpenInvite