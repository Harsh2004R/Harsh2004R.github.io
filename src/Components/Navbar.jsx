import React from 'react'
import "./navbar.css"
// import { Box } from "@chakra-ui/react"
// import useCustomColorMode from '../Hooks/UseCustomColorMode';
import SideNav from './SideNav.jsx';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const Navbar = () => {
    // const { colorMode, toggleColorMode, getColorPalette } = useCustomColorMode();

    return (
        <>
            <SideNav />
            <div>
                <div class="header">
                    <div class="header__logo">
                        <a href="#"> <span>Home</span></a>
                    </div>
                    <div class="header__navigation-links">
                        <div
                            class="header__hamburger-icon"
                            id="header__hamburger-icon"

                        >
                             {/*  humber can be here if needed...? */}
                        </div>
                        <div class="header__links" id="header__nav-links">
                            <a href="#" class="header__links--active">About</a>
                            <a href="#">Skills</a>
                            <a href="#">Projects</a>
                            <a href="#">Contact us</a>
                            <a href="#">Resume</a>
                            {/* <Box  justifyContent={'right'} style={{ background: getColorPalette().background, color: getColorPalette().text }}>
                                <Box onClick={toggleColorMode} w="30px" border={"0.5px solid #eee"} h="30px" display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"50%"} background={"transparent"}  >
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </Box>
                            </Box> */}
                            <div class="header__social">
                            </div>
                        </div>
                    </div>
                </div>


                <div class="hero">
                    <h2 class="headingText">Hey there! I'm <span style={{ color: "#00bcd4" }}>Harsh Shrama</span>, a relentless Full Stack Web Developer on a mission to turn caffeine into code. </h2>
                </div>




            </div>
        </>

    )
}

export default Navbar





