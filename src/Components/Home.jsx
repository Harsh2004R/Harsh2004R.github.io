import {
  Box,
  Text,
  Tag,
  TagLabel
} from '@chakra-ui/react';
import useCustomColorMode from '../Hooks/UseCustomColorMode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';
import Footer from '../Pages/Footer';
import Profile from './Profile';
import Navbar from './Navbar';
import Globe from './Globe';



const Home = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { colorMode, toggleColorMode, getColorPalette } = useCustomColorMode();
  return (
    <>
      <Navbar />




      <Box h="auto" w="100%" style={{ background: getColorPalette().background, color: getColorPalette().text }}>
        <Box w="100%" h="auto" display={"flex"} justifyContent={"right"} alignItems={"center"}>


          <Tag size='xl'
            style={{
              background: "-webkit-linear-gradient(right, #18FFFF, #E91E63)",
            }}
            borderRadius='full'>
            <TagLabel> <Text style={{ color: getColorPalette().text }} fontFamily={"font5"} mr="5px">Theme :) </Text></TagLabel>
            <Box mr="0px" onClick={toggleColorMode} w="30px" border={"0.5px solid #FFEE58"} backgroundColor={"#fff"} h="30px" display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"50%"}   >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Box>
          </Tag>


        </Box>

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
        <Skills />
        <Projects />
        <Contact />
        <Footer />


        {/* <Text  style={{ color: getColorPalette().text }}>
        sample text here...
      </Text> */}

      </Box>

    </>
  );
};

export default Home;
