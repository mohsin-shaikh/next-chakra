import {
    VStack, 
    HStack, 
    Flex, 
    useDisclosure, 
    Input, 
    Menu, 
    MenuButton, 
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button,
    Box,
    useColorMode,
    IconButton,
    Spacer,
    useColorModeValue
} from '@chakra-ui/react';
import Chat from 'components/Chat';
import Navigation from 'components/Navigation';
import ChatHistorySidebar from 'components/ChatHistory/ChatHistorySidebar';
import ChakraLogo from 'components/ChakraLogo';
import { HiChevronDown } from 'react-icons/hi';
import { FiMoon, FiSun } from 'react-icons/fi';


const Teams = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const {
        isOpen: isChatHistoryOpen,
        onOpen: onChatHistoryOpen,
        onClose: onChatHistoryClose,
    } = useDisclosure();
    const {
        isOpen: isChatFilesOpen,
        onOpen: onChatFilesOpen,
        onClose: onChatFilesClose,
    } = useDisclosure();
    return (
        <VStack h='100vh' maxH='100vh' spacing={0}>
            <HStack h='5%' w='full' spacing={0} borderBottom={1} borderColor={useColorModeValue("gray.100", "gray.600")}>
                <Flex
                    as='nav'
                    h='full'
                    maxW={16}
                    w='full'
                    // bg='gray'
                    justifyContent='center'
                    alignItems='center'
                >
                    <ChakraLogo w={10} m={1} />
                </Flex>
                <Flex
                    as='aside'
                    h='full'
                    maxW={{ base: 'xs', xl: 'sm' }}
                    display={{ base: 'none', lg: 'flex' }}
                    w='full'
                    // bg='gray'
                >
                </Flex>
                <Flex
                    as='main'
                    h='full'
                    flex={1}
                    // bg='gray'
                    // justifyContent='space-between'
                    alignItems='center'
                >
                    <Box w='50%'>
                        <Input
                            variant='filled'
                            rounded='md'
                            placeholder='Search'
                        />
                    </Box>
                    <Spacer />
                    <Box>
                        <IconButton
                            aria-label="Toggle dark mode"
                            icon={colorMode === 'light' ? <FiMoon/> : <FiSun/>}
                            onClick={toggleColorMode}
                            mr='4'
                        >
                            Switch Mode
                        </IconButton>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<HiChevronDown />}>
                                Mohsin Shaikh
                            </MenuButton>
                            <MenuList>
                                <MenuGroup title='Profile'>
                                    <MenuItem>My Account</MenuItem>
                                </MenuGroup>
                                <MenuDivider />
                                <MenuGroup title='Help'>
                                    <MenuItem>Docs</MenuItem>
                                    <MenuItem>FAQ</MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </HStack>
            <HStack h='95%' w='full' spacing={0}>
                <Flex
                    as='nav'
                    h='full'
                    maxW={16}
                    w='full'
                    // bg='gray.100'
                    boxShadow='lg'
                >
                    <Navigation />
                </Flex>
                <Flex
                    as='aside'
                    h='full'
                    maxW={{ base: 'xs', xl: 'sm' }}
                    display={{ base: 'none', lg: 'flex' }}
                    w='full'
                    borderRightColor={useColorModeValue("gray.100", "gray.600")}
                    borderRightWidth={1}
                    boxShadow='lg'
                >
                    <ChatHistorySidebar />
                </Flex>
                <Flex
                    as='main'
                    h='full'
                    flex={1}
                    borderRightColor='gray.100'
                    borderRightWidth={1}
                >
                    <Chat onChatHistoryOpen={onChatHistoryOpen} onChatFilesOpen={onChatFilesOpen} />
                </Flex>
            </HStack>
        </VStack>
    );
};

export default Teams;
