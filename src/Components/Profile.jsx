'use client'
import React, { useState } from "react";

import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import "../fonts.css"
import Message from "../Components/Message";

export default function Profile() {
    const [showCommentBox, setShowCommentBox] = useState(false);
    const follow = () => {
        let link = "https://www.linkedin.com/in/harsh-sharma-0545aa25b/";
        window.location.href = link;
    }
    const handleCommentClick = () => {
        setShowCommentBox(!showCommentBox);
    };
    const handleCloseComment = () => {
        setShowCommentBox(false);
    };
    return (
        <Center py={6} position={"absolute"}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ base: "95%", sm: '100%', md: '600px' }}
                height={{ sm: '476px', md: '19.4rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('transparent', 'gray.900')}
                border={"2px solid #263238"}
                boxShadow={{ base: "2xl", md: "3px 3px .2em #1E88E5, -0.5em 0 .8em #666666" }}
                padding={4}>
                <Flex flex={1} justifyContent={"center"}>
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        w={{ base: "250px", md: "100%" }}
                        borderRadius={{ base: "50%", md: "0%" }}
                        src={
                            "https://avatars.githubusercontent.com/u/115461808?v=4"
                            //   'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                        }
                        alt="#"
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={8}>
                    <Heading fontFamily="font1" fontSize={'30px'} color={"#fff"} >
                        Harsh Sharma
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        Full-Stack MERN Developer
                    </Text>
                    <Text
                        textAlign={{ base: "justify", md: "left" }}
                        color={"#fff"}
                        px={3} fontFamily={"font2"}>
                        Passionate about creating web applications using the
                        MERN stack (
                        <span style={{ color: "#29B6F6" }}>MongoDB, Express.js, React, Node.js.</span>)

                    </Text>
                    <Stack align={'center'} justify={'center'} direction={'row'} mt={4}>
                        <Badge
                            px={2}
                            py={1}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #art
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #photography
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #music
                        </Badge>
                    </Stack>

                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            _focus={{
                                bg: 'gray.200',
                            }}
                            onClick={handleCommentClick}
                        >
                            Message
                        </Button>
                        {showCommentBox && <Message onClose={handleCloseComment} />}
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}
                            onClick={follow}
                        >
                            Follow
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    )
}