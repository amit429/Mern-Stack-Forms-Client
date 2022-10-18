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
    
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {

    const style = {
        marginTop : "2%",
    }

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const login = async(e)=>{
        e.preventDefault();
        
    }
  return (
    <>
        <Box style={{
            width: "35%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            flexDirection: "column",
            marginTop: "5%",
            padding: "2%",
            boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px"
        }}>
            <Text fontSize="4xl" textAlign="center" fontWeight="bold" color="teal.500">
                Sign In
            </Text>

            <FormControl method = "POST" style={{
                width: "100%",
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                padding: "5%",
            }}>
                
                <FormLabel style={style}>Email</FormLabel>    
                <Input 
                    placeholder="Email" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={Email}
                    autoComplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <FormLabel style={style}>Password</FormLabel>
                <Input 
                    placeholder="Password" 
                    _placeholder={{ fontSize: "sm" }}
                    type="password" 
                    required 
                    variant= "flushed"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button 
                    type="submit" 
                    variant="outline" 
                    colorScheme="blue"
                   style={{
                        marginTop: "4%",
                   }}
                   onClick={login}
                >
                    Login
                </Button>
             </FormControl>

        </Box>
    </>
  )
}
