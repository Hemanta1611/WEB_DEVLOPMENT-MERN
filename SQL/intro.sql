create database College1;

drop database College1;

use College1;

CREATE table Student(
	roll_no int,
    name varchar(30),
    age INT
);

INSERT INTO Student
VALUES
(101, "adam", 12),
(102, "bob", 14);

select * from Student;
drop table Student;
show databases;
show tables;

create table user(
	id int,
	/*id int primary key,*/
    age int,
    name varchar(30) not null,
    email varchar(70) unique,
    followers int default 0,
    following int,
    constraint age_check check (age >= 18),  /* we can remove "age_check" it won't affect*/
    primary key (id)
);

insert into user
(id, age, name, email, followers, following)
values
(1, 19, "adam", "adam@yahoo.com", 123, 145),
(2, 20, "bob", "bob123@yahoo.in", 200, 231),
(3, 21, "casey", "casey69@giet.in", 234, 12),
(4, 22, "donald", "donald@google.com", 2343412, 313);

select id, name, followers from user;
select distinct age from user;

select name, email from user
where followers >= 200;

select name, age, followers from user
where age > 20 AND followers > 200;

select name, age from user
where age between 20 and 22;

select name, age, email from user
where email IN ("adam@yahoo.com", "donald@google.com", "abc@gmail.com");

insert into user
(id, age, name, email, followers, following)
values
(5, 20, "eve", "eve143@yahoo.com", 1233, 145),
(6, 22, "steve", "steve23@yahoo.in", 200331, 133);

select * from user;

select name, age, email from user
where age > 18
limit 3;

select name, age, followers FROM user order by followers asc;
select name, age, followers FROM user order by followers desc;

select max(followers) from user;
select count(age) from user where age = 20;
select avg(age) from user;
select min(age) from user;
select sum(age) from user;

select age, count(id) from user group by age;
select age, max(followers) from user group by age;

select age, max(followers) from user group by age having max(followers) >= 200;
select age, max(followers) from user group by age having max(followers) >= 200 order by age desc;

SET SQL_SAFE_UPDATES = 0;
update user set followers = 7777777 where age = 21;

delete from user where age = 20;

alter table user
add column city varchar(25) default "Delhi";

alter table user
drop column city;

alter table user rename to instauser;

select * from user;
drop table user;

CREATE TABLE POST(
	id int primary key,
    content varchar(100),
    userid int,
    foreign key (userid) REFERENCES user(id)
);

drop table post;










