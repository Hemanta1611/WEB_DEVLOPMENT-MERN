/*
--- To run mongosh in command prompt ---:
-> Command: mongosh
-- Basic Commands:
    : cls - clear
    : help - get to know about some basic commands
    : quit or exit - to exit from the shell
    : show dbs - to show databases
    : use college - use database name "college" if it not there than it will automatically create and use

--- JSON Data VS BSON Data ---
- json data is text based, space infecient, need to parse
- BSON - Binaray JSON

-- Document: Mongodb stores data in form of document(BSON docs) :: rows form in sql
-- Collection: Mongodb stores documents in collections :: table form in sql

-- TO KNOW ABOUT CRUD METHOD VISIT OFFICIAL WEBISTE:
   -- https://www.mongodb.com/docs/manual/

 -- to know all the database write command: show dbs
 -- to create database write command: use database_name
 -- to create table/collection write command: db.collection_name.insertOne({data})
 -- to know the tables in a database: show collections
 -- to know the table data: db.collection_name.find()

-- FIND in DB:
- db.collection_name.find({key: value})
- db.collection_name.findOne({key: value})

-- FIND in DB - Query Operators:
- Q. find students where marks > 75:   db.student.find({marks: {$gt: 75}})
- Q. find students who live in delhi or mumbai:   db.student.find({city: {$in: ["Delhi, "Mumbai"]}})
- Q. find studnets who scored > 75 or live in delhi:    db.student.find({$or [{marks: {$gt: 75}}, {city: "Delhi"}]})

-- UPDATE IN DB:
- db.collection_name.updateOne(<filter>, <update>, <options>):   ex: db.student.updateOne({name: "adam"}, {$set: {marks: 99}})
- db.collection_name.deleteOne(<filter>)

-- db.student.deleteMany({}) : student table/collection deleted, 
-- db.dropDatabase() : delete database







*/