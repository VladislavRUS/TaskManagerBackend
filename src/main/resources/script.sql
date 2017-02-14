drop table IF EXISTS steps;
drop table IF EXISTS step;
drop TABLE IF EXISTS detail;
drop TABLE if EXISTS crtd_equipment;
drop table if EXISTS equipment;
drop TABLE IF EXISTS contract;
drop TABLE IF EXISTS accessory_detail;

CREATE table detail(
  uuid text NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  expirationdate date NOT NULL,
  methods_inspection text,
  type_control text,
  means_measurement text,
  guarantee text,
  fiat_labeling text,
  note text
);

CREATE table contract(
  uuid text NOT NULL,
  detailuuid text NOT NULL,
  agreement text NOT NULL,
  customer text,
  amount int NOT NULL,
  quoter int NOT NULL,
  year int NOT NULL,
  prepaidnote text NOT NULL,
  isdone BOOL NOT NULL
);

create table step(
  uuid text NOT NULL,
  uuid_equipment text NOT NULL,
  number text NOT NULL,
  time date NOT NULL
);

CREATE TABLE equipment(
  uuid text NOT NULL,
  name text NOT NULL,
  type text not null,
  number text not null,
  expirationdate date not null,
  vendor text NOT NULL
);

CREATE TABLE crtd_equipment(
  uuid text NOT NULL,
  agreement text NOT NULL,
  description text not null,
  number text not null
);

create table accessory_detail(
  uuid text NOT NULL,
  detail_uuid text NOT NULL,
  name text NOT NULL,
  designation text NOT NULL
);