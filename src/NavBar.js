import React from 'react';

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
        <div>
            {/* Right Side of navbar */}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {/* Connect */}
            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )}
        </div>
        )

     
}


export default NavBar;