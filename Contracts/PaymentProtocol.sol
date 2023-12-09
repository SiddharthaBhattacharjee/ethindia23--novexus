pragma solidity ^0.8.0;

contract PayContract {
    mapping(string => address) public UI; // Safe ID -> Address
    mapping(string => address payable) public AR;
    mapping(string => uint) public pendingPayments;
    address Special_Signer =  0x0000000000000000000000000000000000000000;

    function addEmail(string memory emailid, address addr) public {
        require(msg.sender==Special_Signer,"Access Denied! Error Code:420");
        AR[emailid] = payable(addr);
        if(pendingPayments[emailid] > 0){
            AR[emailid].transfer(pendingPayments[emailid]);
            pendingPayments[emailid] = 0;
        }
    }

    function addNumber(string memory number, address addr) public {
        require(msg.sender==Special_Signer,"Access Denied! Error Code:420");
        AR[number] = payable(addr);
        if(pendingPayments[number] > 0){
            AR[number].transfer(pendingPayments[number]);
            pendingPayments[number] = 0;
        }
    }

    function Pay(string memory id) public payable {
        require(msg.value > 0, "Not enough Ether provided.");
        if(AR[id] == address(0)){
            pendingPayments[id] += msg.value;
        } else {
            AR[id].transfer(msg.value);
        }
    }
}
