import { VStack, IconButton, Tooltip } from '@chakra-ui/react';
import { MdSettings, MdCall } from 'react-icons/md';
import { HiUserGroup, HiBell } from 'react-icons/hi';
import { BsChatDotsFill, BsCalendar3 } from 'react-icons/bs';

import ChakraLogo from './ChakraLogo';

const Navigation = () => {
  return (
    <VStack p={4} justifyContent="space-between" alignItems="center" w="full">
      <VStack>
        <Tooltip label="Activity" placement="right">
          <IconButton color="gray.500" icon={<HiBell />} aria-label="Activity" />
        </Tooltip>
        <Tooltip label="Chat" placement="right">
          <IconButton color="gray.500" icon={<BsChatDotsFill />} aria-label="Chat" />
        </Tooltip>
        <Tooltip label="Teams" placement="right">
          <IconButton color="gray.500" icon={<HiUserGroup />} aria-label="Teams" />
        </Tooltip>
        <Tooltip label="Calender" placement="right">
          <IconButton color="gray.500" icon={<BsCalendar3 />} aria-label="Calender" />
        </Tooltip>
        <Tooltip label="Call" placement="right">
          <IconButton color="gray.500" icon={<MdCall />} aria-label="Call" />
        </Tooltip>
      </VStack>
      <Tooltip label="Settings" placement="right">
        <IconButton color="gray.500" icon={<MdSettings />} aria-label="Settings" />
      </Tooltip>
    </VStack>
  );
};

export default Navigation;