"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";


const ProfilePage = () => {
    const {data: session} = useSession();
    const [quotes, setQuotes] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await fetch(`/api/quote?creator=${session?.user?.id}`);
                const data = await response.json();
                setQuotes(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchQuotes();
    }, [])

    const handleEdit = (quote) => {
        router.push(`/update-quote?id=${quote._id}`);
    }

    const handleDelete = async (quote) => {
        const hasConfirmed = confirm("Are you sure you want to delete this quote?");
        if(hasConfirmed){
            try {
                await fetch(`/api/quote/${quote._id}`, {
                    method: 'DELETE'
                });
                const filteredQuotes = quotes.filter((p) => p._id !== quote._id);
                setQuotes(filteredQuotes);
            } catch (error) {
                console.log(error)
            }
        }
    }

  return (
    <div>
        <Profile 
            name={session?.user.name}
            data={quotes}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    </div>
  )
}
export default ProfilePage