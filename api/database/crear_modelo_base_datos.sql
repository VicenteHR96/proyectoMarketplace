CREATE DATABASE tienda;

CREATE TABLE sexos
(
    id_sexo serial,
    sexo character varying(15),
	PRIMARY KEY("id_sexo")
);

INSERT INTO sexos VALUES (DEFAULT,'Femenino');
INSERT INTO sexos VALUES (DEFAULT,'Masculino');
INSERT INTO sexos VALUES (DEFAULT,'No Binario');
INSERT INTO sexos VALUES (DEFAULT,'No Contesta');

SELECT * FROM sexos;

CREATE TABLE categorias
(
    id_categoria serial,
    categoria character varying(15),
	PRIMARY KEY("id_categoria")
);

INSERT INTO categorias VALUES (DEFAULT,'Deportes');
INSERT INTO categorias VALUES (DEFAULT,'Mascotas');
INSERT INTO categorias VALUES (DEFAULT,'Vestuario');


SELECT * FROM categorias;


ALTER TABLE usuarios 
ADD COLUMN uid VARCHAR(30);

ALTER TABLE usuarios 
DROP COLUMN password

CREATE TABLE usuarios
(
    id_usuario serial,
    email character varying(100),
    nombre character varying(50),
	telefono character varying(10),
	uid character varying(30),
	fk_id_sexo INT, 
    PRIMARY KEY("id_usuario"),
    FOREIGN KEY("fk_id_sexo") REFERENCES "sexos"("id_sexo")
);

select * from usuarios
update usuarios set uid='guR7xvc1dqXxEevAa8Eo5l1TXLo1' where id_usuario=1

CREATE TABLE productos
(
    id_producto serial,
    nombre character varying(50),
	descripcion_corta character varying(100),
	descripcion_completa character varying(500),
	foto character varying(100),
	precio INT,
	stock INT,
	fk_id_usuario INT,
	fk_id_categoria INT,
    PRIMARY KEY("id_producto"),
    FOREIGN KEY("fk_id_usuario") REFERENCES "usuarios"("id_usuario"),
	FOREIGN KEY("fk_id_categoria") REFERENCES "categorias"("id_categoria")
	
);

CREATE TABLE likes
(
    id_like serial,
    fk_id_usuario INT,
	fk_id_producto INT,
	PRIMARY KEY("id_like"),
	FOREIGN KEY("fk_id_usuario") REFERENCES "usuarios"("id_usuario"),
	FOREIGN KEY("fk_id_producto") REFERENCES "productos"("id_producto")
);

DELETE from likes
select * from likes

CREATE TABLE mensajes
(
    id_mensaje serial,
	mensaje character varying(300),
    fk_id_usuario INT,
	fk_id_producto INT,
	PRIMARY KEY("id_mensaje"),
	FOREIGN KEY("fk_id_usuario") REFERENCES "usuarios"("id_usuario"),
	FOREIGN KEY("fk_id_producto") REFERENCES "productos"("id_producto")
);

select * from mensajes

select id_producto, pr.nombre nombre_producto, descripcion_corta, descripcion_completa, foto, precio, stock, us.nombre nombre_usuario, email, categoria
from productos pr
inner join usuarios us on id_usuario=fk_id_usuario
inner join categorias on id_categoria = fk_id_categoria
where fk_id_usuario = 1
order by nombre_producto 