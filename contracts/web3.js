//imports the Web3 API
import Web3 from 'web3';

/**
 * creates & exports new instance for 
 * Web3 using provided service by Metamask.
 */
let currentWeb3;

if (window.ethereum) {
    let instance = new Web3(window.ethereum);
    try {
        // Request account access if needed
        window.ethereum.enable();
        // Acccounts now exposed
        currentWeb3 = instance;
    } catch (error) {
        // User denied account access...
        alert('Permita el acceso para que la aplicación funcione');
    }
} else if (window.web3) {
    currentWeb3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
}
else {
    //console.log('El browser no es Ethereum. Considere probar MetaMask');
}

const web3 = currentWeb3
//console.log('web3');
export default web3;