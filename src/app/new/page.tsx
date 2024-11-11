import { Button } from '@/components/ui/button'
import React from 'react'

const New = () => {
    return (
        <main className="h-full flex justify-center items-center flex-col space-y-4">
            <div>New Page</div>
            <button className="hover:bg-blue-600 px-6 py-2 bg-blue-500 rounded-sm">Test </button>
            <Button>Shadcn Button</Button>
        </main>
    )
}

export default New 