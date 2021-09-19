require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember huge half clip bubble genius'; 
let testAccounts = [
"0x72e1ba627c26c755fdd4fa5270cadb22bbc44924b3d58e27e336b02827d1498a",
"0x21b4050caa737375e4e11db6abb7f4fed68639510079acf2593eb6e07cf9152c",
"0x6722255e5d6335a2dc56821a4b326fb947279568a4af1e58dd8f04155e72211f",
"0x24475649edb4caedb43faa8a6ea5acec305cde4b8fc3254971349c61c60bd6f4",
"0xa31d75a37496effd8b496abae4b91985699bba789d89a71cd26c35195f668379",
"0xf397ad0cbc14633596e645f9f16807948ae0a27e6fa1a8711e980c2d0241089d",
"0x049fed64acadde2f6e720dc742c0a46661984a3a9e4e352c5ea3562d4d71cbff",
"0xa3dfc5b9949b1a1eada6854c7e1730131b289eca866c4dae19d8566e583f8165",
"0x39ea0e9cb060dd7dd136c7ac10284c5629610e8ff3d50171f18e062c86432972",
"0x7b615921bac0569a01711e86515ca3ede9fd637bf3badf285280f497d616b4d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

