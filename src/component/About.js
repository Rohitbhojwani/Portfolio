import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import myImg from "../assets/dp.jpg";
import Skills from "./Skills";
import Experience from "./Experience";
import { Helmet } from "react-helmet-async";
import Education from "./Education";
import Volunteer from "./Volunteer";
import Achievements from "./Achievements";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="This is the about page of my portfolio. It contains the information about me, the skills I have and the experience of my work." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="w-xl  md:mx-28 ">
        <section className="bg-section">
          <Heading
            size="xl"
            as="h2"
            width="fit-content"
            textAlign={{}}
            fontFamily='Orbitron'
            paddingBottom="4px"
            letterSpacing='1px'
            borderBottom="2px solid"
            borderBottomWidth="3px"
            textColor="white"
            paddingX={{ base: "16px", md: "4px" }}


          >
            About Me 👩‍💻
          </Heading>
          <Card
            className="md:flex w-xl md:gap-40 mt-16 grid gap:20 grid-rows-2 justify-center "
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            // variant='outline'
            border='none'
            background="transparent"
            color="white"
          >
            <Stack className=" bg-transparent order-last md:order-first">
              <CardBody>
                <Text py="4" letterSpacing="1px">
                  Hi Everyone, I am Rohit Bhojwani from Nagpur, India.
                  I'm passionate Full Stack web developer, a Competitive Programmer having an experience of web applications with Python, Django, Node.js, Express.js, RestFramework, Javascript, React.js and many more.
                  I am currently a final year B.Tech student of Computer Science and Engineering at Shri Ramdeobaba College of Engineering and Management, Nagpur.
                  <br />
                  <br />
                  In my role as a Backend Developer, I combine technical expertise with creativity. My passion for developing API's has lead me to sharpen my skills in Backend Frameworks.
                  <br />


                </Text>
              </CardBody>

              <CardFooter>
                <button
                  variant="solid"
                  className="btn-res "
                  style={{ marginTop: "-25px" }}
                >
                  <a href="mailto:rbbhojwani123@gmail.com">Hire Me</a>
                </button>
              </CardFooter>
            </Stack>+

            <Image
              objectFit="cover"
              // maxW={{ base: '100%', sm: '200px' }}
              src={myImg}
              marginTop="4"
              alt="Sneha Farkya"
              height="400px"
              width="400px"
              paddingX="16px"
              borderRadius="6px"
              justifyContent={{ sm: "center" }}
            // border='1px'
            />
          </Card>
        </section>
        <Skills />
        <Education />
        <Experience />
        <Volunteer />
        <Achievements />
      </div>
    </>
  );
}
