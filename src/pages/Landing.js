import React from 'react'
import { Button,Box, Text } from '@chakra-ui/react';
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {

  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(false);
  const [userName, setuserName] = useState("")

  const home =async()=>{
    try{
      const res = await fetch("/home",{
        method:"GET",
        headers:{ 
          Accept: "application/json",
          "Content-Type":"application/json"
        },
      });

      const data = await res.json();
      setuserName(data.Fullname);
      setLoggedin(true);

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    }
    catch(error){
      console.log(error);
      setLoggedin(false);
    }
  }

  useEffect(() => {
    home();
  }, [])
  

  const contact =()=>{
      navigate("/contact-us");
  }

  const profile =()=>{
      navigate("/profile");
  }

  const log =()=>{
    
      if(!loggedin){
        navigate("/login");
      }
      else{
        navigate("/logout");
      }
  }



  return (
    <>

      <Text
        fontSize="5xl"
        fontWeight="bold"
        textAlign="center"
      >
        {loggedin ? `welcome ${userName}` : "Welcome to the website"}
      </Text>

      <Box style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "5%",
        }}>

            <Button onClick={contact} style={{
                margin: "2%",
                width: "15%",
                height: "10vh",
            }}>
                <Text fontSize="2xl">
                    Contact Form
                </Text>
            </Button>

            <Button onClick={profile} style={{
                margin: "2%",
                width: "15%",
                height: "10vh",
            }}>
                <Text fontSize="2xl">
                    Profile
                </Text>
            </Button>

            <Button onClick={log} style={{
                margin: "2%",
                width: "15%",
                height: "10vh",
            }}>
                <Text fontSize="2xl">
                    {loggedin ? "Logout" : "Login"}
                </Text>
            </Button>

        </Box>
        
    
    </>
  )
}
