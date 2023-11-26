import React from 'react'
import { Box, Text, Image, Button, Grid } from '@chakra-ui/react'
import PostWithLike from "../Components/PostWithLike";

function Projects() {
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
                    >Projects-</Text>
                </Box>

                <Box w="100%" h="auto">
                    <Text style={{
                        background: "-webkit-linear-gradient(top, #18FFFF, #E91E63)", // replace these color values with your desired gradient
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                        fontFamily={"font2"} fontSize={{ base: "xl", md: "4xl" }} mb="10px" textAlign={{ base: "justify", md: "justify" }}
                    >Category-(i) "ecommerce website"</Text>
                </Box>


                <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}>

                    <PostWithLike
                        category="React"
                        title="Travels E-commerce Website Project"
                        description="A description of the e-commerce website project."
                        imageUrl="https://i.ibb.co/sWkHyc6/travels.png"
                        externalLink="https://travel-lovat-eight.vercel.app/"
                        githubPages="https://github.com/vaibhav7895/dapper-nation-4838"
                    />
                    <PostWithLike
                        category="React"
                        title="Unique E-commerce Website Project"
                        description="A description of the e-commerce website project."
                        imageUrl="https://i.ibb.co/PGq6fkK/koko.png"
                        externalLink="https://koko-iota.vercel.app/"
                        githubPages="https://github.com/Harsh2004R/rambunctious-attraction-3750"
                    />
                    <PostWithLike
                        category="HTML, css, Java scriot"
                        title="Carter's E-commerce Website Project"
                        description="A description of the e-commerce website project."
                        imageUrl="https://i.ibb.co/gJSYN2J/carters.png"
                        externalLink="https://fabulous-lily-b76f3b.netlify.app/"
                        githubPages="https://github.com/Ayush-kr-shanu/carters.com"
                    />
                    <PostWithLike
                        category="HTML, css, Java scriot"
                        title="J.Crew E-commerce Website Project"
                        description="A description of the e-commerce website project."
                        imageUrl="https://i.ibb.co/JngGPrM/azra.png"
                        externalLink="https://stunning-gecko-bef43b.netlify.app/"
                        githubPages="https://github.com/Harsh2004R/expensive-fog-3682"
                    />

                    <Box
                        w="xs"
                        rounded={'sm'}
                        my={10}
                        mx={[0, 14]}
                        overflow={'hidden'}
                        display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}
                        bg="transparent"

                    ><Image w={{ base: "60px", md: "80px" }} h={{ base: "60px", md: "80px" }} src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" alt="plus icon" /></Box>

                    <PostWithLike
                        category="React"
                        title="Dare To Visit"
                        description="CEO [Harsh sharma](under Cunstruction) comming Soon..."
                        imageUrl="https://i.ibb.co/QJ5KVHC/PC1.png"
                        externalLink=""
                    />

                </Grid>




                {/* mini category part here working day saturday date:- 25/11/2023 */}

                <Box w="100%" h="auto">
                    <Text style={{
                        background: "-webkit-linear-gradient(top, #18FFFF, #E91E63)", // replace these color values with your desired gradient
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                        fontFamily={"font2"} fontSize={{ base: "xl", md: "4xl" }} mb="10px" textAlign={{ base: "justify", md: "justify" }}
                    >Category-(ii) "mini projects"</Text>
                </Box>

                <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}>

                    <PostWithLike
                        category="Vite + React"
                        title="A bucket list app"
                        description="Make you bucket list. (it's free and secure)"
                        imageUrl="https://i.ibb.co/j3k6Z8D/bucket.png"
                        externalLink="https://dream-quest-seven.vercel.app/"
                        githubPages="https://github.com/Harsh2004R/My_work"
                    />
                    <PostWithLike
                        category="Vite + React"
                        title="Advance pagination system."
                        description="In this project you will get to see advance pagnation just visit it once."
                        imageUrl="https://i.ibb.co/cXjvJ4y/pagination.png"
                        externalLink="https://pagination-psi-seven.vercel.app/"
                        githubPages="https://github.com/Harsh2004R/sorting_filtering_pagination"
                    />

                </Grid>


                {/* comming soon category part here........  */}

                <Box w="100%" h="auto">
                    <Text style={{
                        background: "-webkit-linear-gradient(top, #18FFFF, #E91E63)", // replace these color values with your desired gradient
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                        fontFamily={"font2"} fontSize={{ base: "xl", md: "4xl" }} mb="10px" textAlign={{ base: "justify", md: "justify" }}
                    >Category-(iii) "Comming Soon..."</Text>
                </Box>

                <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}>

                    <PostWithLike
                        category="? vue x ? angular "
                        title="Soon..."
                        description="Something Dark and secret is comming..."
                        imageUrl="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_640.jpg"
                        externalLink="https://github.com/Harsh2004R"
                        githubPages="https://github.com/Harsh2004R"
                    />
                    <PostWithLike
                        category="? React x ? next.js "
                        title="Soon..."
                        description="Something special and intresting is comming..."
                        imageUrl="https://cdn.pixabay.com/photo/2020/04/07/17/59/knowledge-5014345_640.jpg"
                        externalLink="https://github.com/Harsh2004R"
                        githubPages="https://github.com/Harsh2004R"
                    />

                </Grid>


            </Box>
        </>
    )
}

export default Projects
