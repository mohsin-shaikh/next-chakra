import {
    VStack,
    Flex,
    Heading,
    Box,
    List,
    ListItem,
    useColorModeValue
} from '@chakra-ui/react';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs';
import ChatRow from './ChatRow';

const onlineFriends = [
    'Lazar Nikolov',
    'Mark Chandler',
    'Segun Adebayo',
    'Tim Kolberger',
    'Folasade Agbaje',
    'Alex Gerrit',
    'Jason Hughes',
    'Jonathan Bakebwa',
    'Tioluwani Kolawole',
];

const ChatHistorySidebar = () => {
    return (
        <VStack h='full' alignItems='center' w='full' spacing={0}>
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
                    Chats
                </Heading>
                <Flex justifyContent='space-around'>
                    <BsFilter size={20} />
                    <BiMessageSquareEdit size={20} />
                </Flex>
                {/* <Input
                    variant='filled'
                    mt={2}
                    minH={10}
                    // rounded='full'
                    placeholder='Filter'
                /> */}
            </Flex>
            <Box w="full" overflowY="auto" h='95%'>
                <List w="full" spacing={0}>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                    <ListItem>
                        <ChatRow />
                    </ListItem>
                </List>
            </Box>
        </VStack>
    );
};

export default ChatHistorySidebar;