import { VStack, Box, Text, useColorModeValue } from '@chakra-ui/react';

type Props = {
    message: string;
    dateSent: string;
    from: "me" | "others";
};

const ChatBubble = ({ message, dateSent, from }: Props) => {
    const isMe = from === "me";
    const alignment = isMe ? "flex-end" : "flex-start";
    const bottomRightRadius = isMe ? 0 : 32;
    const bottomLeftRadius = isMe ? 32 : 0;

    return (
        <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
            <Box
                bg={useColorModeValue("blue.100", "blue.900")}
                px={6}
                py={4}
                maxW={80}
                borderTopLeftRadius={32}
                borderTopRightRadius={32}
                borderBottomLeftRadius={bottomLeftRadius}
                borderBottomRightRadius={bottomRightRadius}
            >
                {message}
            </Box>
            <Text fontSize="xs">
                {dateSent}
            </Text>
        </VStack>
    );
};

export default ChatBubble;