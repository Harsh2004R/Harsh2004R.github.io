import {
  Box,
  Flex,
  // useColorMode,
  Text,

} from '@chakra-ui/react';
import  useCustomColorMode  from '../Hooks/UseCustomColorMode'; 
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const Nav = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { colorMode, toggleColorMode, getColorPalette } = useCustomColorMode ();
  return (
    <>

      <Box h="100vh" justifyContent={'right'} style={{ background: getColorPalette().background, color: getColorPalette().text }}>
        <Box  onClick={toggleColorMode} w="30px" border={"0.5px solid #eee"} h="30px" display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"50%"} background={"transparent"}  >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Box>
        
      <img   src="https://github-readme-stats.vercel.app/api?username=YourUsername&include_all_commits=true&count_private=true&show_icons=true&line_height=20&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40" alt="YourUsername" />
      <img  src="https://github-readme-stats.vercel.app/api/top-langs?username=Harsh2004R&show_icons=true&locale=en&layout=compact&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40" alt="Harsh2004" />
      <img   src="https://github-readme-streak-stats.herokuapp.com/?user=YourUsername&theme=dark" alt="YourUsername" />

      <Text  style={{ color: getColorPalette().text }}>
        sample text here...
      </Text>

      </Box>

    </>
  );
};

export default Nav;
