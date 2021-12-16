import { Box, Flex, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const ChatRow = () => {
    return (
        <Flex
            py={2}
            px={4}
            w="full"
            alignItems="center"
            borderBottomColor={useColorModeValue("gray.100", "gray.600")}
            borderBottomWidth={1}
            style={{ transition: "background 300ms" }}
            _hover={{ bg: useColorModeValue("gray.100", "gray.600"), cursor: "pointer" }}
        >
            <Box rounded="full" bg="gray.300" minW={10} minH={10} />
            <VStack
                overflow="hidden"
                flex={1}
                ml={3}
                spacing={0}
                alignItems="flex-start"
            >
                <Heading fontSize={12} w="full">
                    John Shinoda
                </Heading>
                <Text
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    w="full"
                    fontSize="xs"
                    color="gray.500"
                >
                    Sample text message goes here.
                </Text>
            </VStack>
            <Text ml={3} fontSize="xs" color="gray.500">
                08:30
            </Text>
        </Flex>
    )
};

export default ChatRow;