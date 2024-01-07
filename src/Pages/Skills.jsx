import React from 'react'
import { Box, Text, Image, Grid } from '@chakra-ui/react';
const Skills = () => {

    return (
        <>
            <Box w={{ base: "90%", md: "85%" }} m="auto" h="auto" >
                <Box w="100%" h="auto">
                    <Text
                        style={{
                            textShadow: "3px 3px 0.2em #E91E63",
                            textDecoration: "underline"

                        }}
                        color="#fff" fontFamily={"font2"} fontSize={{ base: "xl", md: "4xl" }} mb="10px" textAlign={{ base: "justify", md: "justify" }}
                    >Skills - "A Journey Through My Technical Toolkit"</Text>
                </Box>
                <Box display={"flex"} mt={{ base: "30px", md: "50px" }}>
                    <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30px" />

                    <Text color='#fff' fontFamily={"font2"} fontSize={{ base: "xl", md: "4xl" }} mb="10px" textAlign={{ base: "justify", md: "justify" }}>My Tech Stack
                    </Text>
                </Box>

                <Grid templateColumns={{ base: "repeat(6, 1fr)", md: "repeat(6, 1fr)" }} mb={{ base: "40px", md: "100px" }} w="100%" h="auto">

                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }}>
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} alt="bootstrap" />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} alt="babel" />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" w={{ base: "50px", md: "150px" }} borderRadius={{ base: "6px", md: "10px" }} h={{ base: "50px", md: "150px" }} alt="javascript" />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" w={{ base: "50px", md: "150px" }} borderRadius={{ base: "6px", md: "10px" }} h={{ base: "50px", md: "150px" }} alt="typescript" />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} alt="mongodb" />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} alt="nodejs" />

                    </Box>

                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} alt="react" />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} alt="redux" />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} alt="tailwind" />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} alt="html5" />

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} >
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" w={{ base: "50px", md: "150px" }} h={{ base: "50px", md: "150px" }} alt="css3" />

                    </Box>




                </Grid>


                <Box display={"flex"}>
                    <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30px" />

                    <Text color='#fff' fontFamily={"font2"} fontSize={{ base: "xl", md: "4xl" }} mb="10px" textAlign={{ base: "justify", md: "justify" }}>My Tools
                    </Text>
                </Box>



                <Grid templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(8, 1fr)" }} mb={{ base: "50px", md: "100px" }} w="100%" h="auto">
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }} >
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" w="100%" h="100%" alt="github" />&nbsp;&nbsp;

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }} >
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/Git%20-%23F7DF1E.svg?&style=for-the-badge&color=blue&logo=Git&logoColor=white" w="100%" h="100%" />&nbsp;&nbsp;

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }} >
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/replit-667881?style=for-the-badge&logo=replit&logoColor=white" alt="replit" w="100%" h="100%" />&nbsp;&nbsp;

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }} >
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/Codesandbox-000000?style=for-the-badge&logo=CodeSandbox&logoColor=white" w="100%" h="100%" alt="codesandbox" />&nbsp;&nbsp;

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }} >
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white" w="100%" h="100%" alt="codepen" />&nbsp;&nbsp;

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }} >
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" w="100%" h="100%" alt="postman" />&nbsp;&nbsp;

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }}>
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" w="100%" h="100%" alt="vercel" />&nbsp;&nbsp;

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }}>
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" w="100%" h="100%" alt="netlify" />&nbsp;&nbsp;

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }}>
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" w="100%" h="100%" alt="canva" />&nbsp;&nbsp;

                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(117, 117, 117) 0px 7px 12px" _hover={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }} mb="10px" borderRadius={{ base: "6px", md: "10px" }} w={{ base: "70px", md: "150px" }} h={{ base: "30px", md: "50px" }}>
                        <Image borderRadius={{ base: "6px", md: "10px" }} src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" w="100%" h="100%" alt="vscode" />&nbsp;&nbsp;

                    </Box>
                </Grid>
                <Text

                    style={{
                        textShadow: "3px 3px 0.2em #E91E63",

                    }}
                    color="#fff" fontFamily={"font2"} fontSize={{ base: "2xl", md: "4xl" }} mb="10px" textAlign={{ base: "left", md: "left" }}>GitHub Stats Here:-</Text>
                <Box
                    // border={"1px solid red"}

                    w="100%" h="auto" display={"flex"} justifyContent={"space-between"} flexDirection={{ base: "column", md: "row" }}>
                    <Box w={{ base: "100%", md: "36%" }} h={{ base: "150px", md: "30vh" }} >
                        <Image w="100%" h="100%" src="https://github-readme-stats.vercel.app/api?username=Harsh2004R&theme=merko&&hide_border=true&hide=contribs,prs" />
                    </Box>

                    <Box w={{ base: "100%", md: "25%" }} h={{ base: "150px", md: "225px" }} >
                        <Image w="100%" h="100%" src="https://github-readme-stats.vercel.app/api/top-langs?username=Harsh2004R&show_icons=true&locale=en&layout=compact&title_color=7A7ADB&icon_color=2234AE&text_color=D3D3D3&bg_color=0,000000,130F40" alt="Harsh2004" />
                    </Box>
                    <Box

                        backgroundImage={`url('https://github-readme-streak-stats.herokuapp.com/?user=harsh2004r&theme=merko&hide_border=true&type=png')`}
                        backgroundSize="contain"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                        display={"flex"} justifyContent={"center"} alignItems={"center"} w={{ base: "100%", md: "36%" }} h={{ base: "150px", md: "30vh" }} >

                    </Box>
                </Box>


                <Box
                    // border={"1px solid red"}
                    w="100%" h="auto"
                >
                    <Image w="100%" h="100%" src="https://raw.githubusercontent.com/1999AZZAR/1999AZZAR/main/resources/img/grid-snake.svg" alt="snake" />
                    <Text mt="20px" fontFamily={"font5"}> ✍️ Random Dev Quote </Text>
                    <img  src='https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical' />

                </Box>




            </Box >

        </>
    )
}

export default Skills
