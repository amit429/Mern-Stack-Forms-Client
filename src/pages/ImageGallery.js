import React from 'react'
import { useState } from "react";
import { Box, Image, Flex, Button, Heading } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://i.imgur.com/xJ8GXtu.jpg",
    "https://i.imgur.com/qmAoOFy.jpg",
    "https://i.imgur.com/4qEQMbC.jpg",
    "https://i.imgur.com/zNYaXZx.jpg",
    "https://i.imgur.com/RmdsbOi.jpg",
  ];

  return (
    <>
         <Flex 
            justifyContent="center" 
            alignItems="center" 
            flexDirection="column"
            padding={5}
        >
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.5 }}
          className="image-container"
        >
          <Image src={images[currentImageIndex]} w="350px" h="500px" />
        </motion.div>
      <Box padding={5}>
        <Button
            mr={5}
            colorScheme="teal"
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
            )
          }
        >
          Previous
        </Button>
        <Button
            colorScheme="teal"
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
            )
          }
        >
          Next
        </Button>
      </Box>

      <Box padding={5}>
        <Heading><span>❤️</span> Yes , I will be your valentine <span>❤️</span></Heading>
      </Box>
    </Flex>
    
    </>
  )
}
