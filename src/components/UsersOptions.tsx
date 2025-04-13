import { doUserLogOut } from '@/app/actions/auth'
import React from 'react'

const UsersOptions = () => {
    return (
        <div>
            <button className="btn" onClick={doUserLogOut}>
                Logout
            </button>
        </div>
    )
}

export default UsersOptions
