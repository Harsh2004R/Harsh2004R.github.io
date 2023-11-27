
import React, { useState } from 'react';
import { Box, Avatar, Text, Image, HStack, Input } from '@chakra-ui/react';
const Comments = ({ onClose }) => {
    const [message, setMessage] = useState("");
    const [typedMessage, setTypedMessage] = useState("");
    const [subject, setSubject] = useState("");

    const handleMessageChange = (event) => {
        const newMessage = event.target.value;
        setTypedMessage(newMessage);
        setMessage(newMessage);
    };
    const handleSubjectChange = (event) => {
        const newSubject = event.target.value;
        setSubject(newSubject);
    };

    const handleSendClick = () => {
        //  logic here for sending the email.
        const email = 'harshsharmaktm03@gmail.com'; // Reciver's email address
        const formattedSubject = encodeURIComponent(subject);
        const formattedBody = encodeURIComponent(typedMessage);


        // Clear the message after sending
        const mailtoLink = `mailto:${email}?subject=${formattedSubject}&body=${formattedBody}`;


        window.location.href = mailtoLink;

        // Clear the message after sending
        console.log("Sending email:", message);
        setTypedMessage("");
        setMessage("");
        setSubject("");

    };
    const handleClose = () => {
        onClose();
    }

    


    return (
        <>
            <Box
                // border={"1px solid red"}

                w={{ base: "90%", md: "100%" }} left={{ base: "5%", md: "0%" }} height={{ base: "70vh", md: "65vh" }} bg={{ base: "rgba(0, 0, 0, 0.6)", md: "rgba(0, 0, 0, 0.6)" }} top="0px" zIndex="1" position="absolute"
            >


                {/* Comment section parent box starting from here------------->>>>>>>>>>>>>>----------------->>>>>>>>>>>>>>>>>>>>---------------------->>>>>>>>>>>>>>>>------------Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here---------------------------------------------------------------- */}

                <Box
                    border={"1px solid "}
                    position="absolute"
                    bg="rgba(0, 0, 0, 0.7)"
                    w={{ base: "100%", md: "100%" }} height={{ base: "70vh", md: "65vh" }}
                    top={{ base: "0%", md: "0%" }}
                >
                    {/* Comment Box Two Parts starting from here ----->>>>>>>>>>>>>>>>>>>>>>>----------->>>>>>>>>>>>>>>>>>>--------->>>>>>>>>>>>--Comment Box Two Parts starting from here -----------------------------------------------------------Comment Box Two Parts starting from here -----------------------------------------------------------Comment Box Two Parts starting from here -----------------------------------------------------------Comment Box Two Parts starting from here ----------------------------------------------------------- */}

                    <Box
                        // border={"1px solid red"}
                        w="100%" h="100%"
                        display={"flex"}
                    >

                        {/* Content Box here------>>>>>>>>>>>>>>>--------------->>>>>>>>>>>>>>>>>>>----------------->>>>>>>>>>>> */}

                        <Box
                            // border={"1px solid blue"} 
                            p={{ base: "0", md: "0" }}
                            w={{ base: "0%", md: "50%" }} h="100%" >

                            <Image w={{ base: "0%", md: "100%" }} m="auto" borderRadius={"0px"} h="100%" src="https://images.pexels.com/photos/5083396/pexels-photo-5083396.jpeg?auto=compress&cs=tinysrgb&w=600" alt="media image broke" />
                        </Box>


                        {/* comment Box Starting from here------------->>>>>>>>>>>>>----------->>>>>>>>>>>>>---------------->>>>>>>>>>>>>> */}
                        <Box
                            // border={"1px solid white"}
                            w={{ base: "100%", md: "50%" }} h="100%" >
                            <Box
                                // border={"1px solid yellow"}
                                w="100%" h="8%"
                                display={"flex"}
                            >
                                <Box
                                    // border={"1px solid yellow"}
                                    w={{ base: "10%", md: "8%" }} display={"flex"} justifyContent={"center"}
                                    alignItems={"center"} alignContent={"center"} h="75%" m="1.5%">
                                    <Avatar w="100%" h="100%" m="auto" src={
                                        'https://img.freepik.com/free-photo/view-3d-man-taking-selfie_23-2150709936.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais'
                                    } alt="" />
                                </Box>
                                <Box
                                    // border={"1px solid yellow"}
                                    ml="10px"
                                    w={{ base: "77%", md: "85%" }} display={"flex"}
                                    alignItems={"center"} alignContent={"center"} h="100%">
                                    <Text fontWeight={"bold"} fontFamily={"font5"} color={"#fff"} fontSize={"14px"}>Sending email to harsh....</Text>
                                    <svg onClick={handleClose} style={{ margin: '10px 10px 0px auto' }} color='#fff' aria-label="Close" className="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>

                                </Box>



                            </Box>



                            <Box
                                borderTop={"1px solid #444"}
                                borderBottom={"1px solid #444"}
                                w={{ base: "100%", md: "100%" }} h="84%" p={{ base: "2", md: "5" }}>
                                <strong style={{ fontFamily: "font5", fontSize: "12px", color: 'skyblue' }}>To: harshsharmaktm03@gmail.com</strong>
                                <Box w="100%" h={"auto"} display={"flex"}>
                                    <Text display={"flex"} alignItems={"center"} style={{ fontFamily: "font5", fontSize: "12px", color: '#FFFFFF' }}>
                                        Subject:
                                    </Text>
                                    <Input value={subject} onChange={handleSubjectChange} ml={"1%"} fontSize={"14px"} fontFamily={"font5"} color={"#757575"} variant="unstyled" placeholder='Enter your subject' />
                                </Box>
                                <Text style={{ fontFamily: "font5", color: '#fff' }}>{message}</Text>

                            </Box>


                            <Box
                                // border={"1px solid cyan"}
                                w="100%" h="8%"
                            >
                                <HStack>
                                    <Box
                                        // border={"1px solid cyan"}
                                        h="auto" w="10%" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                        <svg aria-label="Emoji" color='#fff' className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="40" role="img" viewBox="0 0 24 24" width="24"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                    </Box>
                                    <Box
                                        // border={"1px solid cyan"}
                                        h="auto" w="77%" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                        <Input value={typedMessage} onChange={handleMessageChange} placeholder="Type your message..." fontFamily={"font5"} variant={"unstyled"} color={"#fff"} />
                                    </Box>
                                    <Box
                                        // border={"1px solid cyan"}
                                        h="auto" w="13%" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                        <Text color={"#81D4FA"} fontFamily={"font5"} onClick={handleSendClick}>Post</Text>
                                    </Box>
                                </HStack>

                            </Box>

                        </Box>


                    </Box>




                    {/* Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here ----------------------------------------------------------- */}

                </Box>


            </Box>

        </>
    )
}

export default Comments
