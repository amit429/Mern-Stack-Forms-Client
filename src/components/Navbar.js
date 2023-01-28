import React from 'react'
import {
    Button,
    Box,
    Text,
    Flex,
    Spacer,
    HStack,
    MenuList,
    MenuItem,
    MenuDivider,
    Menu
} from '@chakra-ui/react';
import './Navbar.css';
import {
    Link
} from 'react-router-dom';

export default function Navbar() {

    const navItems = [{
            name: "Home",
            link: "/"
        },

        {
            name: "Send Recommendation",
            link: "/contact-us"
        },

        {
            name: "All Recommendations",
            link: "/query"
        },

        {
            name: "Logout",
            link: "/logout"
        },
    ];

    
  return (
    <>
        <Box className='nav-design'>
            <Box>
                <Text className='logo' style={{
                    fontSize: '30px',
                }}>Logo</Text>
            </Box>
        </Box>

        <Box className='navbar'>
            <HStack spacing="40px">

                {navItems.map((item) => (

                    <Button 
                        className='nav-box' 
                        colorScheme='#1D2D50' 
                        color='blackAlpha'
                        variant='ghost'
                    >
                         <Link to={item.link} className='nav-text'>{item.name}</Link>
                    </Button>

                ))}
                
            </HStack>
        </Box>

    </>
  )
}
