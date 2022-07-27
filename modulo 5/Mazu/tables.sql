-- Active: 1658093017990@@35.226.146.116@3306@silveira-21814397-joao-aguiar

CREATE TABLE Dog_Walking (
    walkID INT PRIMARY KEY AUTO_INCREMENT,
    userID VARCHAR(255) NOT NULL,
    FOREIGN KEY (userID) REFERENCES Dog_Walking_Users(id),
    status VARCHAR(255) NOT NULL,
    walkDate DATE NOT NULL,
    price INT NOT NULL,
    duration INT NOT NULL,
    latitude VARCHAR(255) NOT NULL,
    longitude VARCHAR(255) NOT NULL,
    petID VARCHAR(255) NOT NULL,
    FOREIGN KEY (petID) REFERENCES Dog_Walking_UserPets(petID),
    walkStart VARCHAR(255) NOT NULL,
    walkEnd VARCHAR(255) NOT NULL
);

CREATE TABLE Dog_Walking_Users (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE Dog_Walking_UserPets (
    petID VARCHAR(255) PRIMARY KEY NOT NULL,
    userID VARCHAR(255) NOT NULL,
    FOREIGN KEY (userID) REFERENCES Dog_Walking_Users(id),
    petName VARCHAR(255) NOT NULL,
    breed VARCHAR(255) NOT NULL,
    details VARCHAR(500) DEFAULT("")
);
