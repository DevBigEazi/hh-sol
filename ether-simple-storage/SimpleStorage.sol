// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// pragma solidity ^0.8.0;
// pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage {
    uint256 favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }
    // uint256[] public anArray;
    People[] public people;

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}

// 0xd9145CCE52D386f254917e481eB44e9943F39138 // every single smart contract have addresses just like our wallets.
// Anytime we make changes or modify a value in blockchain, including making a new transaction, it happens in transaction.
// You cant get rid of deploy contract on the blockchain cos it is immutable.
// Visibility in smart contract can be private, public, internal or extrernal.
// When we dont give the visibilty to functions or variables the default visibility is internal.
// Prefixing the parameter with underscore _ is useful for naming convention.
// Each blockchain has a different way of calculating their gas but the more stuff you do in your function, the more gas it costs.
// Global scope/local scope.
// view and pure function when called alone dont spend gas. Remember we only spend gas if we modify state.

