import React, { useState } from 'react';
import { Text, Image, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';
const L_arrow = "https://i.ibb.co/DfFs4jh/L-arrow.png"
const skills = "https://i.ibb.co/hMQKxjF/skills.png"
const project = "https://i.ibb.co/vqgXMnr/project.png"
const CV = "https://i.ibb.co/zSSL6tN/CV.png"
const about = "https://i.ibb.co/jkXZY2B/about.png"
const contact = "https://i.ibb.co/RDhVS7w/contact-US.png"

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;


const colorChangeAnimation = keyframes`
  0%, 100% {
    color: #FF0000;
  }
  80% {
    color: #A7FFEB;
  }
  50% {
    color: #FFFF8D;
  }
  30% {
    color: #EEEEEE;
  }
`;


function SideNav() {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const numButtons = 5;
  const angle = Math.PI / (numButtons - 1); // Angle between each button in radians

  const parentBoxHeight = showButtons ? '170px' : '50px'; // Adjusted parent box height based on button visibility

  const buttonData = [
    {
      path: '/',
      image: skills,
      text: 'Skills',
    },
    {
      path: '/',
      image: project,
      text: 'Project',
    },
    {
      path: '/',
      image: CV,
      text: 'Resume',
    },
    {
      path: '/',
      image: about,
      text: 'About',
    },
    {
      path: '/',
      image: contact,
      text: 'Contact',
    },
    // Add more objects for each button
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: 0, // Align to the right side of the viewport
        transform: 'translateY(-50%)',
        zIndex: 1000, // Ensure it's above other content
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', background: "transparent", alignItems: 'center', height: parentBoxHeight }}>
        <Box
          // border="1px solid red"

          // backgroundColor="blue.200"
          borderRadius="50%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Box
            animation={`${float} 2.5s ease-in-out infinite`}
            onClick={toggleButtons}
            // bg={NavBG}
            style={{
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              marginBottom: '0px',
              backgroundColor: 'transparent',
              color: 'white',

              // border:"1px solid red"
            }}
          >
            <Image borderRadius={"50%"} src={L_arrow} w="100%" h="100%" />
          </Box>
          {showButtons && (
            <div
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              {buttonData.map((button, index) => (
                <Box

                  key={index}
                  style={{
                    position: 'absolute',
                    transform: `translate(-50%, -50%) translateX(${-Math.sin(angle * index) * 70}px) translateY(${Math.cos(angle * index) * 70}px)`,
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: 'red',
                    background: "linear-gradient(to right, #18FFFF, #E91E63)",
                    color: 'white',
                  }}
                  onClick={() => navigate(button.path)}
                >
                  <span style={{ fontSize: '10px' }}></span>
                  <Image src={button.image} w="70%" h="65%" />
                  <Text animation={`${colorChangeAnimation} 8s infinite alternate`} fontSize="9px" >{button.text}</Text>
                </Box>
              ))}
            </div>
          )}
        </Box>
      </div>
    </div>
  );
}

export default SideNav;

