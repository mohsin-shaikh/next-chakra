import { 
    extendTheme, 
    ThemeConfig, 
    withDefaultVariant 
} from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
    cssVarPrefix: "zuupee",
};

export const theme = extendTheme({
    config,
},
    withDefaultVariant({
        variant: 'ghost',
        components: ['Button', 'IconButton']
    })
);