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




*/