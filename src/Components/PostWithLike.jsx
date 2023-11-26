import { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
    Image
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

export default function PostWithLike({ category, title, description, imageUrl, externalLink, githubPages }) {
    const [liked, setLiked] = useState(false);
    const handleArrowClick = () => {
        window.open(externalLink, '_blank');
    };
    const handleGithubPages = ()=>{
        window.open(githubPages, '_blank');
    }
    return (
        <Center py={6}>
            <Box
                w="xs"
                rounded={'sm'}
                my={5}
                mx={[0, 5]}
                overflow={'hidden'}
                bg="white"
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}
            >
                <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                    <Img
                        src={imageUrl}
                        roundedTop={'sm'}
                        objectFit="cover"
                        h="full"
                        w="full"
                        alt={'Project Image'}
                    />
                </Box>
                <Box p={4}>
                    <Box
                        bg="black"
                        display={'inline-block'}
                        px={2}
                        py={1}
                        color="white"
                        mb={2}
                    >
                        <Text fontSize={'xs'} fontWeight="medium">
                            {category}
                        </Text>
                    </Box>
                    <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'} noOfLines={2}>
                        {description}
                    </Text>
                </Box>
                <HStack borderTop={'1px'} color="black">
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        cursor={'pointer'}
                        w="full"

                    >
                        <Text onClick={handleArrowClick} fontSize={'md'} fontWeight={'semibold'}>
                            View more
                        </Text>
                        <BsArrowUpRight onClick={handleArrowClick} />
                        <Image onClick={handleGithubPages} w="25px" h="25px" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github" />
                    </Flex>
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        borderLeft={'1px'}
                        cursor="pointer"
                        onClick={() => setLiked(!liked)}
                    >
                        {liked ? (
                            <BsHeartFill fill="red" fontSize={'24px'} />
                        ) : (
                            <BsHeart fontSize={'24px'} />
                        )}
                    </Flex>
                </HStack>
            </Box>
        </Center>
    );
}
