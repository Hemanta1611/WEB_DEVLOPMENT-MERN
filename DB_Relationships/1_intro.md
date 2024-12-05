# SQL Relationship
-> one to one
-> one to many
-> many to many

# Mongo Relationship
-> one to many / Approach 1 (one to few)
    we store the child document inside parent
    example: addresses saved in any app, addresses are in few number only

-> one to many / Approach 2 
    we store a reference to the child document inside parent
    - reference is nothing but the _id and it acts as foreign key (just like in sql)
    example: orders done by a customer
    - populate is used for extracting all the info of the referenced object

-> one to many / Approach 3
    one to squillons
    we store a reference to the parent document inside child
