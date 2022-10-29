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


export default function Registeration() {

    const style = {
        marginTop : "2%",
    }

    const navigate = useNavigate();

    const [Fullname, setFullname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const [DOB, setDOB] = useState("");
    const [Gender, setGender] = useState("");
    // console.log(Fullname, Email, Password, Cpassword,DOB,Gender);

    const register = async (e) => {
        e.preventDefault();
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Fullname,
                Email,
                Password,
                Cpassword,
                DOB,
                Gender
            }),
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
            window.location.reload();
        }
        else if(res.status === 420){
            window.alert("Password and Confirm Password must be same");
            console.log("Password and Confirm Password must be same");
            window.location.reload();
        } 
        else if(res.status === 419){
            window.alert("Password must be atleast 10 characters");
            console.log("Password must be atleast 10 characters");
            window.location.reload();
        }
        else if(res.status === 418){
            window.alert("You are not eligible to register");
            console.log("You are not eligible to register");
            window.location.reload();
        }
        else {
            window.alert("Registration Successful");
            window.alert("Please Login");
            console.log("Registration Successful");
            navigate("/login");
        }

        // window.location.reload();
       
    }
   
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
            <Text fontSize="4xl" textAlign="center" fontWeight="bold" color="teal.500">
                Sign Up Form
            </Text>

            <FormControl method = "POST" style={{
                width: "100%",
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                padding: "5%",
            }}>
                <FormLabel>Full Name</FormLabel>
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

                <FormLabel style={style}>Confirm Password</FormLabel>
                <Input 
                    placeholder="Confirm Password" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed" 
                    type="password"
                    value={Cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                />

                <FormLabel style={style}>Date Of Birth</FormLabel>
                <Input 
                    type="date"
                    placeholder="Date Of Birth (DD/MM/YYYY)" 
                    _placeholder={{ fontSize: "sm" }}
                    required 
                    variant= "flushed"
                    value={DOB}
                    onChange={(e) => setDOB(e.target.value)}
                />

                <FormLabel style={style}>Gender</FormLabel>
                <Select 
                    placeholder="Select Gender" 
                    _placeholder={{ fontSize: "sm" }}
                    variant= "flushed"  
                    onChange={(e)=>{
                        setGender(e.target.value)
                    }}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </Select>

                <Button 
                    type="submit" 
                    variant="outline" 
                    colorScheme="blue"
                   style={{
                        marginTop: "4%",
                   }}
                   onClick={register}
                >
                    Register
                </Button>
             </FormControl>

        </Box>
       
    </>
    )
}