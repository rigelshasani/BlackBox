"use client"

import clsx from "clsx";
import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";

import P5Background from "../(site)/p5Background2";

const Home = () => {
    const { isOpen } = useConversation();

    return (

        <div
            className={clsx(
                "lg:pl-80 h-full lg:block",
                isOpen ? 'block' : 'hidden'
            )}
        >
            <EmptyState />
            
            <div className="w-64 h-32 relative" id="p5-container">
                <P5Background />
            </div>

        </div>
    )

}


export default Home;
