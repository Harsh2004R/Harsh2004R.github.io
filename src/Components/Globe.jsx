
import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import { useMediaQuery, Text } from "@chakra-ui/react"

const Globe = () => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    useEffect(() => {
        return () => {

            const container = ".tagcloud";
            const tools = [
                "HTML",
                "•",
                "CSS",
                "Type Script",
                "•",
                "JavaScript",
                "React",
                "•",
                "mongoDB",
                "EJS",
                "Node.js",
                "•",
                "Babel",
                "•",
                "Bootstrap",
                "ES6",
                "•",
                "GITHUB",
                "•",
            ];

            const attributes = {
                radius: isLargerThan768 ? 300 : 160,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, tools, attributes);
        };
    }, []);

    return (
        <>

            <div className="text-shpere" style={{
                position: "relative",
                top: 0,
                width: "100%",
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "transparent",
                flexDirection: "column",
                // border: "1px solid yellow"
            }}>
                <Text color="#fff" fontFamily={"font2"} fontSize={{ base: "2xl", md: "2xl" }} margin={"50px"} textAlign={{ base: "center", md: "justify" }}
                    style={{
                        textShadow: "3px 3px 0.2em #E91E63",

                    }}
                >Journey so far in Web Development.</Text>
                <span className="tagcloud" style={{
                    display: "inline-block",
                    top: 0,
                    left: 0,
                    fontFamily: "'Caveat', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.0625em",
                    fontSize: "0.6em",
                    borderLeft: "1px solid hsl(0, 0%, 93%)",
                    borderRadius: "50%",
                    marginBottom: "-10px",
                    width: "330px",
                    height: "330px",
                    boxShadow: "#E91E63 10px 5px 20px -10px",


                }}></span>
            </div>
            <style>
                {`
                    .tagcloud--item {
                        color: #3184df;
                        text-shadow: #FF0000 0px 5px 15px;
                        text-transform: uppercase;
                        /* border: 1px solid red; */
                    }

                    .tagcloud--item:hover {
                        color: #ff6347;
                    }
                `}
            </style>
        </>
    );
};

export default Globe;
// 00B0FF