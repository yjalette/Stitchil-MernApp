const { gql } = require("apollo-server-express");


module.exports = gql`

union Response = Result | Failure

type AuthData {   
    role: String
    username: String
    fullname: String
    profileImage: String
    country: [String]
    rating: Int
    googleAuth: Boolean
}


type PortfolioItem {
    _id: ID
    url: String
    coverImage: String
    gallery: [String]
    title: String
    description: String
    likes: [String]
    createdAt: String
}

type Comment{
    _id: ID
    docId: String
    subject: String
    message: String
    sender: AuthData
    rating: Int
    createdAt: String
}

type Package {
    _id: ID
    type: String
    itemId: ID
    price: Int
    delivery: Int
    swatches: [ID]
    description: String
}


type Failure {
    code: Int
    type: String
    path: String
    field: String
    error: String
    message: String
}


type Result {  
    type: String
    success: Boolean
    message: String
}

type Error {
    code: Int
    type: String
    path: String
    field: String
    message: String
}



`;

