// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Election {

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public voters;

    uint public candidatesCount;
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin allowed");
        _;
    }

    function addCandidate(string memory _name) public onlyAdmin {

        candidatesCount++;

        candidates[candidatesCount] = Candidate(
            candidatesCount,
            _name,
            0
        );
    }

    function vote(uint _candidateId) public {

        require(!voters[msg.sender], "Already voted");

        require(
            _candidateId > 0 &&
            _candidateId <= candidatesCount,
            "Invalid candidate"
        );

        voters[msg.sender] = true;

        candidates[_candidateId].voteCount++;
    }

    function getVotes(uint _candidateId)
        public
        view
        returns(uint)
    {
        return candidates[_candidateId].voteCount;
    }
}