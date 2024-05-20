import { Container, Box, Heading, Text, VStack, HStack, Button, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box bg="blue.600" color="white" py={10} textAlign="center">
          <Heading as="h1" size="2xl">
            Maritime College
          </Heading>
          <Text fontSize="xl" mt={4}>
            Navigating the Future of Maritime Education
          </Text>
        </Box>

        {/* About Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            About Us
          </Heading>
          <HStack spacing={8}>
            <Image src="https://images.unsplash.com/photo-1700480555928-198c674a6ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJpdGltZSUyMGVkdWNhdGlvbnxlbnwwfHx8fDE3MTYxNjgxNTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Maritime Education" boxSize="300px" objectFit="cover" borderRadius="md" />
            <Text fontSize="lg">Maritime College is dedicated to providing top-notch education and training for the maritime industry. Our programs are designed to equip students with the skills and knowledge needed to excel in various maritime careers. With state-of-the-art facilities and experienced faculty, we are committed to fostering a learning environment that promotes innovation and excellence.</Text>
          </HStack>
        </Box>

        {/* Programs Section */}
        <Box py={10} bg="gray.100">
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            Our Programs
          </Heading>
          <VStack spacing={4}>
            <Box p={4} bg="white" borderRadius="md" shadow="md" width="100%">
              <Heading as="h3" size="lg">
                Marine Engineering
              </Heading>
              <Text mt={2}>A comprehensive program that covers the principles of marine engineering, including ship design, maintenance, and operation.</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" shadow="md" width="100%">
              <Heading as="h3" size="lg">
                Nautical Science
              </Heading>
              <Text mt={2}>Focused on the navigation and operation of ships, this program prepares students for careers as deck officers and captains.</Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" shadow="md" width="100%">
              <Heading as="h3" size="lg">
                Maritime Law
              </Heading>
              <Text mt={2}>An in-depth study of the laws and regulations governing the maritime industry, ideal for those interested in legal careers within the sector.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            Contact Us
          </Heading>
          <VStack spacing={4} align="stretch" textAlign="center">
            <Text fontSize="lg">123 Ocean Drive, Maritime City, MC 12345</Text>
            <Text fontSize="lg">Email: info@maritimecollege.edu</Text>
            <Text fontSize="lg">Phone: (123) 456-7890</Text>
            <HStack spacing={4} justify="center">
              <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
              <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
            </HStack>
          </VStack>
        </Box>

        {/* Footer Section */}
        <Box bg="blue.600" color="white" py={4} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Maritime College. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
