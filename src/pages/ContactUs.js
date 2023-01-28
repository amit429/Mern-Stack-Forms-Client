import React from 'react'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    Text,
    Select,
    Textarea,
    
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function ContactUs() {
    const style = {
        marginTop : "2%",
    }

    const navigate = useNavigate();

    const [Fullname, setFullname] = useState("");
    const [Email, setEmail] = useState("");
    const [Subject, setSubject] = useState("");
    const [Message, setMessage] = useState("");
    const [Query, setQuery] = useState("");

    const contact = async (e) => {
        e.preventDefault();
        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Fullname,
                Email,
                Subject,
                Message,
                Query
            }),
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Submission");
            console.log("Invalid Contact Submission");
            navigate("/query");
        }
        else {
            window.alert("Recommendation Successful");
            console.log("Recommendation Successful");
            window.location.reload();
        }
    }

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
        <Box style={{
            width: "35%",
            height: "95vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            flexDirection: "column",
            marginTop: "1%",
            padding: "2%",
            boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px"
        }}>
            <Text fontSize="3xl" textAlign="center" fontWeight="bold" color="teal.500">
                Recommend Something Special
            </Text>

            <FormControl method = "POST" style={{
                width: "100%",
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                padding: "5%",
            }}>
                <FormLabel>Name</FormLabel>
                <Input 
                    placeholder="Full Name" 
                    _placeholder={{ fontSize: "sm" }}
                    required variant= "flushed"
                    autoComplete='on'
                    value={Fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />

                <FormLabel style={style}>Email</FormLabel>    
                <Input 
                    placeholder="Email" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    isReadOnly
                    variant= "flushed"                    
                    autoComplete="on"
                    value={profile.Email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <FormLabel style={style}>What are you recommending</FormLabel>
                <Select 
                    placeholder="Select a type" 
                    _placeholder={{ fontSize: "sm" }}
                    variant= "flushed"  
                    onChange={(e)=>{
                        setSubject(e.target.value);
                    }}
                >
                    <option value="Male">Movie</option>
                    <option value="Female">Series</option>
                    <option value="Other">Song</option>
                    <option value="Other">Career Related</option>
                </Select>

                <FormLabel style={style}>Put link (if any)</FormLabel>
                <Input 
                    placeholder="Type your message here" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={Message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <FormLabel style={style}>Write a brief description</FormLabel>
                <Textarea
                    placeholder="Type your query here" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={Query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <Button 
                    type="submit" 
                    variant="outline" 
                    colorScheme="blue"
                   style={{
                        marginTop: "4%",
                   }}
                   onClick={contact}
                >
                   Submit
                </Button>
             </FormControl>

        </Box>
    </>
  )
}
