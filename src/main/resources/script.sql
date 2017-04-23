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
  note text
);

CREATE table contract (
  uuid text NOT NULL,
  damper_uuid text NOT NULL,
  number text not null,
  from date not null,
  customer text,
  amount int NOT NULL,
  quoter int NOT NULL,
  year int NOT NULL,
  prepaid_note text NOT NULL,
  done BOOL NOT NULL
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
  requirements text NOT NULL,
  contract text NOT NULL
);

create table step (
  uuid text NOT NULL,
  research_detail_uuid text NOT NULL,
  name text NOT NULL,
  number text NOT NULL,
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

create table files (
  uuid text NOT NULL,
  object_uuid text NOT NULL,
  name text NOT NULL,
  data text NOT NULL,
  extension text NOT NULL
)