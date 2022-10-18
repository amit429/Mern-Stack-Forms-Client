import { Button,Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();

    const register =()=>{
        navigate("/register");
    }

    const contact =()=>{
        navigate("/contact-us");
    }

    const login =()=>{
        navigate("/login");
    }
  return (
    <>
        <Box style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "5%",
        }}>
            <Button onClick={register} style={{
                margin: "2%",
                width: "15%",
                height: "10vh",
            }}>
                <Text fontSize="2xl">
                    Register
                </Text>
            </Button>

            <Button onClick={contact} style={{
                margin: "2%",
                width: "15%",
                height: "10vh",
            }}>
                <Text fontSize="2xl">
                    Contact Form
                </Text>
            </Button>

            <Button onClick={login} style={{
                margin: "2%",
                width: "15%",
                height: "10vh",
            }}>
                <Text fontSize="2xl">
                    Sign In
                </Text>
            </Button>
        </Box>
        
    
    </>
  )
}
