"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";


const ProfilePage = () => {
    const {data: session} = useSession();
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            const response = await fetch(`/api/quote?creator=${session?.user?.id}`)
            const data = await response.json();
            setQuotes(data);
        }
        fetchQuotes();
    }, [])

  return (
    <div>
        <Profile 
            name={session?.user.name}
            data={quotes}
        />
    </div>
  )
}
export default ProfilePage