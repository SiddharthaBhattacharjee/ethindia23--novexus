pragma solidity ^0.8.0;

contract PayContract {
    struct Preferences{
        address redirectAddress;
        uint256 chainID;
        address TokenAddress;
    }
    mapping(string => address payable) public mailToWallet;
    mapping(string => uint) public pendingPayments;
    mapping(string => string) public AadhaarToEmail;
    mapping(string => string) public EmailToAadhaar;
    mapping(address => Preferences) public WalletToPreferences;

    function KYC(string memory Aadhaar, string memory email) public {
        AadhaarToEmail[Aadhaar] = email;
        EmailToAadhaar[email] = Aadhaar;
        mailToWallet[email] = payable(msg.sender);
    }//Thik Kardo bhai

    function SetPreferences(uint256 chainID, address TokenID,address redirectAddress) public{
        WalletToPreferences[msg.sender] = Preferences(redirectAddress,chainID,TokenID);
    }

    // function addEmail(string memory emailid, address addr) public {
    //     AR[emailid] = payable(addr);
    //     if(pendingPayments[emailid] > 0){
    //         AR[emailid].transfer(pendingPayments[emailid]);
    //         pendingPayments[emailid] = 0;
    //     }
    // }

    // function addNumber(string memory number, address addr) public {
    //     require(msg.sender==Special_Signer,"Access Denied! Error Code:420");
    //     AR[number] = payable(addr);
    //     if(pendingPayments[number] > 0){
    //         AR[number].transfer(pendingPayments[number]);
    //         pendingPayments[number] = 0;
    //     }
    // }

    function Pay(string memory id) public payable {
        require(msg.value > 0, "Not enough Ether provided.");
        if(mailToWallet[id] == address(0)){
            pendingPayments[id] += msg.value;
        } else {
            mailToWallet[id].transfer(msg.value);
        }
    }
}
