import { Flex, IconButton, Input, Heading, useColorModeValue } from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';

import ChatBubble from './ChatBubble';

const messages = [
    {
        message: "Hey Travis! Would you like to go out for a coffee?",
        from: "others",
        dateSent: "20:21"
    },
    {
        message: "Sure! At 11:00 am?",
        from: "me",
        dateSent: "20:22"
    },
    {
        message: "That's too early! How about at noon?",
        from: "others",
        dateSent: "20:22"
    },
    {
        message: "That sounds good as well. Where should we meet?",
        from: "me",
        dateSent: "20:23"
    },
    {
        message: "Meet me at the hardware store on 21 Duck Street.",
        from: "others",
        dateSent: "20:23"
    },
    {
        message: "Sounds good. I'll bring my friend with me as well!",
        from: "me",
        dateSent: "20:24"
    },
    {
        message: "Which one? The developer or the designer?",
        from: "others",
        dateSent: "20:24"
    },
    {
        message: "The developer. You remember Tony, right?",
        from: "me",
        dateSent: "20:24"
    },
    {
        message: "Yeah! Tony's a great guy!",
        from: "others",
        dateSent: "20:25"
    },
    {
        message: "Indeed he is! Alright, see you later 👋!",
        from: "me",
        dateSent: "20:25"
    }
];

type Props = {
    onChatHistoryOpen: () => void;
    onChatFilesOpen: () => void;
};

const Chat = ({ onChatHistoryOpen, onChatFilesOpen }: Props) => {
    return (
        <Flex w='full' flexDirection='column'>
            <Flex
                px={4}
                w='full'
                h='5%'
                maxH='5%'
                alignItems='center'
                borderBottom={1}
                borderColor={useColorModeValue("gray.100", "gray.600")}
                borderStyle='solid'
            >
                <Heading size='xs' w='full'>
                    Sahil Shaikh
                </Heading>
            </Flex>
            <Flex px={6} overflowY="auto" flexDirection="column" flex={1}>
                {messages.map(({ message, from, dateSent }, index) => (
                    // const isMe = from;
                    <ChatBubble
                        key={index}
                        message={message}
                        from={from as "me" | "others"}
                        dateSent={dateSent}
                    />
                ))}
            </Flex>
            <Flex pl={4} pr={2} py={2} borderTopColor={useColorModeValue("gray.100", "gray.600")} borderTopWidth={1}>
                <Input variant="unstyled" placeholder="Type your message" />
                <IconButton
                    colorScheme="blue"
                    aria-label="Send message"
                    variant="ghost"
                    icon={<IoSend />}
                />
            </Flex>
        </Flex>
    );
};

export default Chat;