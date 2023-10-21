import { useState } from 'react';
import {ethers, BigNumber } from 'ethers';
import {Box, Button, Flex, Input, Text} from '@chakra-ui/react';
import pupkinNalupkinNFT from './pupkinNalupkinNFT.json';

const pupkinNalupkinNFTAddress = "3UTZIV53KF6FNY9D7GMZDPRVSB7JD8J9TC"; {/* Здесь Нужно прописать контракт адрес */}

const MainMint = ({accounts, setAccounts }) => {
    const [MintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if(window.ethereum){ {/* Нужно прописать вместо window.ethereum чето, наверное что то с бэка, точно хз  */}
            const provider = new ethers.providers.Web3Provider(window.ethereum); {/* Нужно прописать вместо window.ethereum чето, наверное что то с смарт контракта, точно хз  */}
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                pupkinNalupkinNFTAddress,
                pupkinNalupkinNFT.abi, /* brunoNFT.abi это вроде бы файл который должен был появиться в файле 'artifacts'. Сам файл artifacts должен был появиться во время работы со смарт контрактами  */
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(MintAmount));{/* Здесь mint это функция которая была прописана в солидити */}
                console.log('response: ', response);
            } catch(err){
                console.log("error: ",err)
            }
        }
    }


    const handleDecrement = () =>{
        if (MintAmount <= 1) return;
        setMintAmount(MintAmount - 1);
    };

    const handleIncrement = () =>{
        if (MintAmount >= 3) return;
        setMintAmount(MintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <div>
            <Text fontSize="48px" textShadow="0 5px #00000">pupkinNalupkin</Text>
            <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #00000"
            >This is our project. TA DAAAAM</Text>
            </div>
            {isConnected ? (
            <div>
                <Flex align="center" justify="center">
                    <Button
                    backgroundColor="D6517D"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    marginTop="10px"
                    onClick={handleDecrement}
                    >
                        -
                    </Button>
                    <Input
                    readOnly
                    fontFamily="inherit"
                    width="100px"
                    height="40px"
                    textAlign="center"
                    paddingLeft="19px"
                    marginTop="10px"
                    type="number"
                    value={MintAmount}
                    />
                    <Button
                    backgroundColor="D6517D"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    marginTop="10px"
                    onClick={handleIncrement}
                    >
                        +
                    </Button>
                    </Flex>  
                    <Button
                    backgroundColor="D6517D"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    marginTop="10px"
                    onClick={handleMint}>
                        Mint Now
                    </Button>
                    </div>
            ) : (
                <p>You are not connected </p>
            )}
            </Box>
        </Flex>
        );
            };


export default MainMint;            
