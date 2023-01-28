import { Button,Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Main() {
    const navigate = useNavigate();

    const [profile, setProfile] = useState("");

    const profilepage = async (e) => {

        try {
            const res = await fetch("/profile", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

           // console.log(res.json());

            const data = await res.json();
            setProfile(data);
            console.log(data);

           if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
           }
        }
        catch (error) {
           window.alert("Please Login");
            navigate("/login");
        }
    }

    useEffect(() => {
        profilepage();
    }, []);

  return (
    <>

        <Navbar/>
        
    
    </>
  )
}
