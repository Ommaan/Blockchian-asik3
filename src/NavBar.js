import React from 'react';
import {Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';

const NavBar = ({accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.etheruem){  {/* Тут Кажись из бэка нужно достать вместо window.etheruem чето другое  */}
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",   /* Тут так же вместо eth_requestAccounts чето из бэка пхд */
            });
            setAccounts(accounts);
        }
    }
    return (
        <Flex
        justify="space-around"
        align="center"
        width="40px"
        padding="30px"
        >
            {/* Right Side of navbar */}
            <Box margin="0 15px">About</Box>
            <Spacer />
            <Box margin="0 15px">Mint</Box>
            <Spacer />
            <Box margin="0 15px">Team</Box>
            <Spacer />

            {/* Connect */}
            {isConnected ? (
                <Box margin="0 15px">Connected</Box>
            ) : (
                <Button
                 backgroundColor="#DAF7A6"
                 borderRadius="5px"
                 boxShadow="0px 2px 2px 1px #0F0F0F"
                 color="white"
                 cursor="pointer"
                 fontFamily="inherit"
                 padding="15px"
                 margin="0 15px"
                 onClick={connectAccount}
                 >
                    Connect
                 </Button>
            )}

        <Flex/>
      </Flex>
        )

     
}


export default NavBar;
