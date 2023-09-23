'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    const {data: session} = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const fetchAndSetProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        fetchAndSetProviders();
    }, [])
    
    return (
        <nav className="w-full flex-between mb-16 pt-3">
            <Link href="/" className="flex gap-2 align-middle">
            <Image 
                src="/assets/images/logo.jpg"
                alt="quotevault-logo"
                width={40}
                height={40}
                className="object-contain rounded-full"
            />
            <p className="logo_text pt-1">QuoteVault</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
            {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href='/add-quote' className="black_btn">
                        Add Quote
                    </Link>
                    <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
                    <Link href='/profile'>
                    <Image 
                        src={session?.user?.image} 
                        alt="profile picture" 
                        width={40} 
                        height={40} 
                        className="rounded-full"
                    />
                    </Link>
                </div>
            ):(
                <>
                    {providers && 
                        Object.values(providers).map((provider) => (
                            <button 
                                type="button"  
                                key={provider.name} 
                                onClick={() => signIn(provider.id)}
                                className='black_btn'
                            >
                                Sign In
                            </button>
                        ))
                    }
                </>
            )}
            </div>
            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image 
                            src={session?.user?.image}
                            alt="profile picture"
                            width={30}
                            height={30}
                            className="object-contain"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />
                        {toggleDropdown && (
                        <div className="dropdown">
                            <Link 
                                href="/profile"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                            >
                                My Profile
                            </Link>
                            <Link 
                                href="/add-quote"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                            >
                                Add Quote
                            </Link>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();
                                }}
                                className="mt-5 w-full black_btn"
                            >
                                Sign Out
                            </button>
                        </div>
                        )}
                    </div>  
                ) : (
                    <>
                    {providers && Object.values(providers).map((provider) => (
                        <button type="button" key={provider.name} onClick={() => signIn(provider.id)}>
                            Sign In
                        </button>
                    ))}
                    </>
                )}
            </div>
        </nav>
    );
}


export default Nav;