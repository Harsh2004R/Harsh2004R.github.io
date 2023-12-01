import React from 'react';
import {
    Box,
    Stack,
    HStack,
    VStack,
    Link,
    Divider,
    Image,
    Text,
    Button,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

const Footer = () => {
    return (
        <Box p={{ base: 5, md: 8 }} w="100%" h="auto" bg={"#1e1e1e"} marginInline="auto">
            <Divider my={2} bgColor="red"/>
            <Stack
                spacing={{ base: 8, md: 0 }}
                justifyContent="space-between"
                direction={{ base: 'column', md: 'row' }}
            >
                <Box maxW="300px" display={"flex"}>
                    <Link href="https://github.com/Harsh2004R" color="#999" isExternal>

                    </Link>
                    <Text mt={2} style={{
                        background: 'linear-gradient(to right, #18FFFF, #E91E63)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }} fontSize="md">
                        Build fully functional accessible web applications faster than ever
                    </Text>
                    <Image
                        w="50px"
                        h="50px"
                        borderRadius={"100%"}
                        src="https://avatars.githubusercontent.com/u/115461808?v=4"
                        alt="broken"
                    />
                </Box>
                <HStack
                    spacing={4}
                    d={{ base: 'none', sm: 'flex' }}
                    justifyContent={{ sm: 'space-between', md: 'normal' }}
                >
                    <VStack spacing={4} alignItems="flex-start">
                        <Text fontSize="md" color={"#fff"} fontWeight="bold">
                            About
                        </Text>
                        <VStack spacing={2} alignItems="flex-start" color="gray.500">


                            <CustomLink>Changelog</CustomLink>
                            <CustomLink>Releases</CustomLink>
                        </VStack>
                    </VStack>
                    <VStack spacing={4} alignItems="flex-start">
                        <Text color={"#fff"} fontSize="md" fontWeight="bold">
                            Community
                        </Text>
                        <VStack spacing={2} alignItems="flex-start" color="gray.500">


                            <CustomLink>Follow on Github</CustomLink>
                            <CustomLink>Github discussions</CustomLink>
                        </VStack>
                    </VStack>
                    <VStack spacing={4} alignItems="flex-start">
                        <Text color={"#fff"} fontSize="md" fontWeight="bold">
                            Project
                        </Text>
                        <VStack spacing={2} alignItems="flex-start" color="gray.500">

                            <CustomLink>Documentation</CustomLink>
                            <CustomLink>Github organization</CustomLink>

                        </VStack>
                    </VStack>
                </HStack>
            </Stack>

            <Divider my={2} />

            <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={3}
                justifyContent="space-between"
            >
                <Text color="#999" fontSize="md">
                    build by{' '}
                    <Link
                        href="https://github.com/MA-Ahmad"
                        textDecoration="underline"
                        _hover={{ textDecoration: 'underline' }}
                        isExternal
                    >
                        Harsh Sharma
                    </Link>
                </Text>
                <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
                    <Button
                        leftIcon={<FaGithub />}
                        as={Link}
                        href="#"
                        rounded="md"
                        colorScheme="gray"
                    >
                        Github Discussions
                    </Button>
                    <Button
                        leftIcon={<BsDiscord />}
                        as={Link}
                        href="#"
                        rounded="md"
                        color="white"
                        bg="purple.500"
                        _hover={{ bg: 'purple.600' }}
                    >
                        Discord community
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

const CustomLink = ({ children, ...props }) => {
    return (
        <Link
            href="#"
            fontSize="sm"
            _hover={{ textDecoration: 'underline' }}
            {...props}
        >
            {children}
        </Link>
    );
};

export default Footer;
