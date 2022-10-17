import React, { useEffect } from 'react'
import { Box , Text } from '@chakra-ui/react'
import { useState } from 'react'

export default function Query() {

    const [queryData, setqueryData] = useState();

    const getQuery = async (e) => {
        const res = await fetch("/query", {
            method: "GET",
            headers: {
                Accept : "application/json",
                "Content-Type": "application/json"
            },
        });

        const data = await res.json();
        console.log(data);

        if(!res.status === 200 || !data){
            console.log("No Query Found");
        }
        // setqueryData(data);
    }

    useEffect(() => {
        getQuery();
    }, [])

  return (
    <>
        <Text fontFamily="heading" fontWeight="bold" fontSize="4xl" textAlign="center" >
            Welcome to the Query page

        </Text>
        <Box
            style={{
                width: "25%",
                display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                //margin: "auto",
                flexDirection: "column",
                marginTop: "3%",
                marginLeft: "2%",
                padding: "2%",
                boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
                borderRadius: "5px"
            }}
        >
            <Text fontSize="3xl" fontWeight="bold" color="teal.500">
                Your Query
            </Text>
            <Text fontSize="xl" fontWeight="medium" fontFamily="sans-serif" color="GrayText">
                Name : {queryData.Fullname}
            </Text>
            <Text fontSize="xl" fontWeight="medium" fontFamily="sans-serif" color="GrayText">
                Email : {queryData.Email}
            </Text>
            <Text fontSize="xl" fontWeight="medium" fontFamily="sans-serif" color="GrayText">
                Subject : {queryData.Subject}
            </Text>
            <Text fontSize="xl" fontWeight="medium" fontFamily="sans-serif" color="GrayText">
                Message : {queryData.Message}
            </Text>
            <Text fontSize="xl" fontWeight="medium" fontFamily="sans-serif" color="GrayText">
                Query : {queryData.Query}
            </Text>

        </Box>
    
    
    </>
  )
}
