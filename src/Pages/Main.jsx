import React from 'react'
import Globe from '../Components/Globe'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Profile from '../Components/Profile'
import Navbar from '../Components/Navbar';
import Skills from './Skills';
import Projects from './Projects';

const Main = () => {


  return (
    <>
      <Navbar />





      <Box w="100%" h="auto" bg={"#1e1e1e"} position={"absolute"} >


        <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
          <Box
            // border={"1px solid red"}
            w={{ base: "100%", md: "60%" }} justifyContent={"center"} display={"flex"} alignContent={"center"} h={{ base: "100vh", md: "90vh" }} >
            <Profile />
          </Box>
          <Box
            //  border={"1px solid red"}
            w={{ base: "100%", md: "40%" }} h={{ base: "80vh", md: "80vh" }}
          >
            <Globe />
          </Box>

        </Box>




        {/* 2nd part starting from here */}
        <Text

          style={{
            textShadow: "3px 3px 0.2em #E91E63",

          }}
          color="#fff" fontFamily={"font2"} fontSize={{ base: "2xl", md: "4xl" }} mb="10px" ml="7%" textAlign={{ base: "left", md: "left" }}>Intoduction-</Text>
        <Box w="100%" h="auto" display={"flex"} justifyContent={"center"} mb="30px" >
          <Text

            w={{ base: "90%", md: "85%" }} color="#fff" fontFamily={"font5"} fontSize={{ base: "sm", md: "2xl" }} mb="10px" textAlign={{ base: "justify", md: "justify" }}
          >
            I am Harsh Sharma, a versatile <span style={{ color: "#fff", fontFamily: "font2", textShadow: "3px 3px 0.2em #03A9F4" }}>Full Stack Web Developer</span> hailing from the scenic landscapes
            of Uttarakhand, India. My expertise lies in the MERN stack (Mongodb, Express.js, React.js, and Node.js). With a passion for
            crafting seamless digital experiences, I thrive on collaborative efforts, often partnering with friends from across India.
          </Text>




        </Box>

        <Skills />
        <Projects/>





      </Box>
    </>
  )
}

export default Main
