"use client"

import P5Background from "../(site)/p5Background2";
import EmptyState from "../components/EmptyState";

const Users = () => {
    return (
        <div className="hidden lg:block lg:pl-80 h-full">

            <EmptyState />

            <div className="w-32 h-32 relative" id="p5-container">
                <P5Background />
            </div>

        </div>
    )
}


export default Users;