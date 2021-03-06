DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

CREATE table damper (
  uuid text NOT NULL,
  name text NOT NULL,
  designation text NOT NULL,
  expiration_date date NOT NULL,
  inspection_methods text,
  control_type text,
  measurement_means text,
  guarantee text,
  fiat_labeling text,
  note text,
  vendor text,
  customer text,
  head text,
  contract text
);

CREATE table contract (
  uuid text NOT NULL,
  number text not null,
  from_date date not null,
  customer text
);

create table contract_item (
  uuid text NOT NULL,
  contract_uuid text NOT NULL,
  damper_uuid text NOT NULL,
  amount integer NOT NULL,
  accepted integer NOT NULL
);

create table accessory (
  uuid text NOT NULL,
  damper_uuid text NOT NULL,
  name text NOT NULL,
  designation text NOT NULL,
  type text NOT NULL
);

CREATE TABLE research_detail (
  uuid text NOT NULL,
  name text NOT NULL,
  requirements text,
  contract text,
  vendor text,
  customer text,
  head text
);

create table step (
  uuid text NOT NULL,
  research_detail_uuid text NOT NULL,
  name text NOT NULL,
  number text NOT NULL,
  done BOOL NOT NULL,
  expiration_date date NOT NULL
);

CREATE TABLE test_equipment (
  uuid text NOT NULL,
  name text NOT NULL,
  type text NOT NULL,
  number text NOT NULL,
  expiration_date date NOT NULL,
  vendor text NOT NULL
);

CREATE TABLE event (
  uuid text NOT NULL,
  title text NOT NULL,
  comment text NOT NULL,
  date date NOT NULL
);

CREATE TABLE files (
  uuid text NOT NULL,
  object_uuid text NOT NULL,
  name text NOT NULL,
  data text NOT NULL,
  extension text NOT NULL
);

COMMIT;