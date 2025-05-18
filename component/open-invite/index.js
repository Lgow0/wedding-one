import React from 'react'
import { Button } from '@/components/ui/button'
import { Fade } from 'react-reveal'

const OpenInvite = ({onValidate}) => {
     const handleClick = () => {
        onValidate()
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Fade bottom duration={1000}> 
            <h1 className="text-2xl font-bold mb-4">Open Invite</h1>
                <p className="text-lg mb-4">Name Guest</p>
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