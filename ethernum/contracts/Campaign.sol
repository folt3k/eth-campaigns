// SPDX-License-Identifier: GPL-3.0

pragma  solidity >=0.7.0 <0.9.0;

contract CampaignFactory {
    // address[] public campaigns;
    Campaign[] public campaigns;
    event CampaignCreated(address);

    function createCampaign(string memory title, uint minContribution) public {
        Campaign campaign = new Campaign(title, minContribution, payable(msg.sender));
        address campaignAddress = address(campaign);

        campaigns.push(campaign);
        emit CampaignCreated(campaignAddress);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        return campaigns;
    }
}

contract Campaign {
    struct Request {
        string desc;
        uint value;
        bool completed;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    struct CampaignDisplayModel {
        address contractAddress;
        string title;
        uint minContribution;
        address manager;
        uint approversCount;
        uint requestsCount;
        uint balance;
    }

    address payable public manager;
    uint public minContribution;
    string public title;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint approversCount = 0;

    constructor(string memory _title, uint _minContribution, address payable _manager) {
        minContribution = _minContribution;
        title = _title;
        manager = _manager;
    }

    function contribute() public payable {
        require(msg.value >= minContribution, "Contribution value is less than minimal contribution.");
        require(!approvers[msg.sender], "You are approver already.");

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequests(string memory desc, uint value) public onlyManager {
        Request storage newReq = requests.push();

        newReq.desc = desc;
        newReq.value = value;
        newReq.completed = false;
        newReq.approvalCount = 0;
    }


    function approveRequest(uint index) public {
        Request storage req = requests[index];

        require(approvers[msg.sender], "You are not approver of this campaign.");
        require(!req.approvals[msg.sender], "You have been voted already!");

        req.approvalCount++;
        req.approvals[msg.sender];
    }

    function finalizeRequest(uint index) public onlyManager {
        Request storage req = requests[index];

        require(req.approvalCount > (approversCount / 2), "You need at least 51% approvals.");
        require(!req.completed, "Cannot finalize completed request.");

        manager.transfer(req.value);
        req.completed = true;
    }

    function displayModel() public view returns(CampaignDisplayModel memory) {
        CampaignDisplayModel memory model = CampaignDisplayModel({
            contractAddress: address(this),
            title: title,
             manager: manager,
             minContribution: minContribution,
             approversCount: approversCount,
             requestsCount: requests.length,
             balance: address(this).balance
        });


        return model;
    }

    modifier onlyminContributionManager() {
        require(msg.sender == manager, "You are not the owner.");
        _;
    }
}
