import React from "react";
import { Heading, Text, ListItem, List, Box, Center, Link } from "@chakra-ui/react";
import Section from "./components/Section.js";

import {} from "@chakra-ui/icons";

export default function About() {
  return (
    <Box paddingTop="50px" className="whiteText mainFont">
      <Center>
        <Box paddingLeft="25px" width="70%">
          <Section delay={0.05}>
            <Heading as="h1" size="2xl" mt="10">
              <Text color="gray" className="mainFont">
                about
              </Text>
            </Heading>

            <Section delay={0.1}>
              <Text mt="2" fontWeight="300" fontSize="xl">
                HackerType is a simple typing test that allows you to test your typing speed and accuracy.
                This was an independent project that I created to learn more about React and Firebase for the
                first time. After enjoying the process of improving typing speed on{" "}
                <Link textDecor={"underline"} isExternal href="https://monkeytype.com">
                  MonkeyType
                </Link>
                , I wanted to have the same experience for programming but couldn't find any for my liking ——
                so I made my own. I hope you enjoy using HackerType!
              </Text>
            </Section>
          </Section>

          <Section delay={0.1}>
            <Heading as="h2" fontSize="24px" mt="20">
              <Text color="gray" fontWeight={500} className="mainFont">
                word set
              </Text>
            </Heading>

            <Section delay={0.2}>
              <Text mt="2" fontWeight="300" fontSize="m">
                The word set is a collection of{" "}
                <Link textDecor={"underline"} href="https://leetcode.com/" isExternal>
                  LeetCode
                </Link>{" "}
                solutions that were webscraped from{" "}
                <Link textDecor={"underline"} href="https://walkccc.me/LeetCode/" isExternal>
                  walkccc.me
                </Link>
                . Currently, HackerType contains 450+ solutions for C++, Java, and Python. I plan to add more
                accordingly if it seems necessary.
              </Text>
            </Section>
          </Section>

          <Section delay={0.2}>
            <Heading as="h2" fontSize="24px" mt="20">
              <Text color="gray" fontWeight={500} className="mainFont">
                wpm calculation
              </Text>
            </Heading>

            <Section delay={0.3}>
              <Text mt="2" fontWeight="300" fontSize="m">
                The amount of words are based on the number of characters typed divided by 4.7 (the average
                word length). Like MonkeyType, spaces are counted as characters.
              </Text>
            </Section>
          </Section>

          <Section delay={0.3}>
            <Heading as="h2" fontSize="24px" mt="20">
              <Text color="gray" fontWeight={500} className="mainFont">
                contact
              </Text>
            </Heading>

            <Section delay={0.4}>
              <Text mt="2" fontWeight="300" fontSize="m">
                Any issues or suggestions can be sent to me via email:{" "}
                <Link href="mailto:maxplee8@gmail.com">
                  <strong>maxplee8@gmail.com</strong>
                </Link>
                .
              </Text>
            </Section>
          </Section>
        </Box>
      </Center>
    </Box>
  );
}
