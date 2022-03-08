CREATE DATABASE librosbd
go
use librosbd
go

create table libro(
	id int identity(1,1) not null PRIMARY KEY,
	namebook varchar(150) null,
	desbook nvarchar(300) null,
	autor varchar(150) null,
	datePublish date null,
	numEjemplar int null,
	costo smallmoney null
)
select * from libro

insert into libro (namebook,desbook, autor, datePublish, numEjemplar, costo) values ('la culpa es de la vaca', 'test', 'wch','10/12/2021',3,20.20)
