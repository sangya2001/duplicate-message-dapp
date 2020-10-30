const HelloWorld = require("./build/contracts/HelloWorld.json");

const Web3 = require("web3");
let Contract;
let account;

async function loadBlockchain() {
  // connect the browser to ethereum blockchain
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  }

  // connect to local blockchain where current provider came from ganache
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  }

  // if both eth browser or metamask is undetected show the error/
  else {
    window.alert(
      "Non-Ethereum Browser. Consider using metamask or web3 compatible browser."
    );
  }

  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  account = accounts[0];
  // Get network id
  // network id differs, for ganache it's 5777, for eth 1 and so on
  const networkId = await web3.eth.net.getId();
  const networkData = HelloWorld.networks[networkId];

  // checks if the contract is available or not in current chain network
  if (networkData) {
    const helloWorld = new web3.eth.Contract(
      HelloWorld.abi,
      networkData.address
    );
    const message = await helloWorld.methods.getMessage().call();
    Contract = helloWorld;

    const container = document.getElementById("message");
    container.innerHTML = message;
  } else
    window.alert(
      "Hello world contract is not deployed n current chain network"
    );
}

loadBlockchain();

const form = document.getElementById("newMessage");

async function handleForm(event) {
  event.preventDefault();
  const message = document.getElementById("inputMessage").value;
  if (message == "") {
    alert("Message can't be empty.");
    return false;
  }

  await Contract.methods.setMessage(message).send({ from: account });
  window.location.reload()
}

form.addEventListener("submit", handleForm);
