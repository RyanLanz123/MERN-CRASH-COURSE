import React from 'react';
import { Button, HStack, Container, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from './ui/color-mode';
import { LuSun } from 'react-icons/lu';
import { IoMoon } from 'react-icons/io5';


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();  
  return (
    <Container maxW="1140px" px={4} bg={useColorModeValue("gray.100", "gray.900")}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Text
            fontSize={{ base: '22px', sm: '28px' }}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
        >
            <ChakraLink as={RouterLink} to="/">
                Product Store
            </ChakraLink>
        </Text>

        <HStack spacing={2} alignItems="center">
          <Link to="/create">
            <Button>
              <FaPlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode == "light" ? <IoMoon /> :
               <LuSun size ="20" /> }
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
