import { useState } from 'react';
import {ethers, BigNumber } from 'ethers';
import brunoNFT from './BrunoNFT.json';

const brunoNFTAddress = ""; {/* Здесь Нужно прописать контракт адрес */}

const mainMint = ({accounts, setAccounts }) => {
    const [mintAmount, setAmount] = useState(1);
    const isConnected = Bollean(accounts[0]);

    async function handleMint(){
        if(window.ethereum){ {/* Нужно прописать вместо window.ethereum чето, наверное что то с бэка, точно хз  */}
            const provider = new ethers.providers.Web3Provider(window.ethereum); {/* Нужно прописать вместо window.ethereum чето, наверное что то с смарт контракта, точно хз  */}
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                brunoNFTAddress,
                brunoNFT.abi, /* brunoNFT.abi это вроде бы файл который должен был появиться в файле 'artifacts'. Сам файл artifacts должен был появиться во время работы со смарт контрактами  */
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));{/* Здесь mint это функция которая была прописана в солидити */}
                console.log('response: ', response);
            } catch(err){
                console.log("error: ",err)
            }
        }
    }


    const handleDecrement = () =>{
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () =>{
        if (mintAmount >= 3) return;
        setmintAmount(mintAmount + 1);
    };

    return (
        <div>
            <h1>BrunoNFT</h1>
            <p>This is our project. TA DAAAAM</p>
            {isConnected ? (
            <div>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <input type="number" value={mintAmount} />
                    <button onClick={handleIncrement}>+</button>
                    </div>  
                    <button onClick={handleMint}>Mint Now</button>
                    </div>
            ) : (
                <p>You are not connected </p>
            )}
        </div>
        );
            };


export default mainMint;            
