/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 15.2 		*/
/*  Author : Kozhevnikov Sergey     				    */
/*  Created On : 07-04-2024 1:44:09 				    */
/*  DBMS       : PostgreSQL 						    */
/* ---------------------------------------------------- */

/* Drop Sequences for Autonumber Columns */

DROP SEQUENCE IF EXISTS log_id_seq
;

DROP SEQUENCE IF EXISTS connector_id_seq
;

DROP SEQUENCE IF EXISTS public.glossaryid_seq
;

DROP SEQUENCE IF EXISTS public.object_id_seq
;

DROP SEQUENCE IF EXISTS package_id_seq
;

DROP SEQUENCE IF EXISTS project_id_seq
;

DROP SEQUENCE IF EXISTS public.taskid_seq
;

/* Drop Tables */

DROP TABLE IF EXISTS t_changehistory CASCADE
;

DROP TABLE IF EXISTS t_connector CASCADE
;

DROP TABLE IF EXISTS public.t_documents CASCADE
;

DROP TABLE IF EXISTS public.t_files CASCADE
;

DROP TABLE IF EXISTS public.t_glossary CASCADE
;

DROP TABLE IF EXISTS public.t_object CASCADE
;

DROP TABLE IF EXISTS public.t_objectfiles CASCADE
;

DROP TABLE IF EXISTS t_package CASCADE
;

DROP TABLE IF EXISTS t_project CASCADE
;

DROP TABLE IF EXISTS public.t_secgroup CASCADE
;

DROP TABLE IF EXISTS public.t_secuser CASCADE
;

DROP TABLE IF EXISTS public.t_secusergroup CASCADE
;

DROP TABLE IF EXISTS public.t_statustypes CASCADE
;

DROP TABLE IF EXISTS public.t_stereotypes CASCADE
;

DROP TABLE IF EXISTS public.t_taggedvalue CASCADE
;

DROP TABLE IF EXISTS public.t_tasks CASCADE
;

DROP TABLE IF EXISTS public.usys_system CASCADE
;

/* Create Tables */

CREATE TABLE t_changehistory
(
	log_id integer NOT NULL   DEFAULT NEXTVAL(('log_id_seq'::text)::regclass),
	datetime timestamp without time zone NULL,
	author varchar(250) NULL,
	notes text NULL,
	object_id integer NULL,
	logtype varchar(50) NULL,
	modules varchar(50) NULL,
	actions varchar(50) NULL
)
;

CREATE TABLE t_connector
(
	connector_id integer NOT NULL   DEFAULT NEXTVAL(('connector_id_seq'::text)::regclass),
	name varchar(255) NULL,
	direction varchar(50) NULL,
	notes text NULL,
	connector_type varchar(50) NULL,
	start_object_id integer NULL   DEFAULT 0,
	end_object_id integer NULL   DEFAULT 0,
	ims_guid varchar(40) NULL
)
;

CREATE TABLE public.t_documents
(
	doc_id varchar(40) NOT NULL,
	docname varchar(100) NULL,
	notes varchar(255) NULL,
	style varchar(255) NULL,
	element_id varchar(40) NOT NULL,
	elementtype varchar(50) NOT NULL,
	strcontent text NULL,
	bincontent bytea NULL,
	doctype varchar(100) NULL,
	author varchar(50) NULL,
	isactive integer NULL   DEFAULT 1,
	sequence integer NULL   DEFAULT 0,
	docdate timestamp without time zone NULL,
	object_id integer NULL
)
;

CREATE TABLE public.t_files
(
	fileid varchar(50) NOT NULL,
	appliesto varchar(50) NOT NULL,
	category varchar(100) NOT NULL,
	name varchar(150) NOT NULL,
	file varchar(255) NULL,
	notes text NULL,
	filedate timestamp without time zone NULL,
	filesize integer NULL,
	object_id integer NULL,
	filename varchar(1000) NULL
)
;

CREATE TABLE public.t_glossary
(
	term varchar(255) NULL,
	type varchar(255) NULL,
	meaning text NULL,
	glossaryid integer NOT NULL   DEFAULT NEXTVAL(('glossaryid_seq'::text)::regclass)
)
;

CREATE TABLE public.t_object
(
	object_id integer NOT NULL   DEFAULT NEXTVAL(('object_id_seq'::text)::regclass),
	object_type varchar(255) NULL,
	name varchar(255) NULL,
	alias varchar(255) NULL,
	author varchar(255) NULL,
	version varchar(50) NULL   DEFAULT '1.0',
	note text NULL,
	package_id integer NULL   DEFAULT 0,
	stereotype varchar(255) NULL,
	status varchar(50) NULL,
	ims_guid varchar(40) NULL,
	property_id integer NULL,
	connector_id integer NULL,
	filename varchar(1000) NULL,
	appliesto varchar(255) NULL,
	project_id integer NULL
)
;

CREATE TABLE public.t_objectfiles
(
	object_id integer NOT NULL   DEFAULT 0,
	filename varchar(1000) NOT NULL,
	type varchar(50) NULL,
	note text NULL,
	filesize varchar(255) NULL,
	filedate varchar(255) NULL,
	fileid varchar(50) NULL
)
;

CREATE TABLE t_package
(
	package_id integer NOT NULL   DEFAULT NEXTVAL(('package_id_seq'::text)::regclass),
	name varchar(255) NULL,
	parent_id integer NULL   DEFAULT 0,
	notes text NULL,
	ims_guid varchar(40) NULL,
	project_id integer NULL
)
;

CREATE TABLE t_project
(
	project_id integer NOT NULL   DEFAULT NEXTVAL(('project_id_seq'::text)::regclass),
	name varchar(255) NULL,
	notes text NULL,
	status varchar(50) NULL,
	ims_guid varchar(40) NULL
)
;

CREATE TABLE public.t_secgroup
(
	groupid varchar(40) NOT NULL,
	groupname varchar(32) NOT NULL,
	description varchar(100) NULL,
	userid varchar(40) NULL
)
;

CREATE TABLE public.t_secuser
(
	userid varchar(40) NOT NULL,
	userlogin varchar(255) NOT NULL,
	firstname varchar(50) NOT NULL,
	surname varchar(50) NOT NULL,
	department varchar(50) NULL,
	password varchar(12) NULL,
	groupid varchar(40) NULL
)
;

CREATE TABLE public.t_secusergroup
(
	userid varchar(40) NOT NULL,
	groupid varchar(40) NOT NULL
)
;

CREATE TABLE public.t_statustypes
(
	status varchar(50) NOT NULL,
	description varchar(50) NULL,
	object_id integer NULL
)
;

CREATE TABLE public.t_stereotypes
(
	stereotype varchar(255) NOT NULL,
	appliesto varchar(255) NOT NULL,
	description varchar(255) NULL,
	mfenabled integer NULL   DEFAULT 0,
	mfpath varchar(255) NULL,
	metafile bytea NULL,
	style text NULL,
	ea_guid varchar(50) NULL,
	visualtype varchar(100) NULL
)
;

CREATE TABLE public.t_taggedvalue
(
	property_id varchar(40) NOT NULL,
	element_id varchar(40) NOT NULL,
	tagvalue text NOT NULL,
	notes text NULL,
	baseclass varchar(100) NULL,
	object_id integer NULL
)
;

CREATE TABLE public.t_tasks
(
	taskid integer NOT NULL   DEFAULT NEXTVAL(('taskid_seq'::text)::regclass),
	name varchar(255) NULL,
	tasktype varchar(255) NULL,
	notes text NULL,
	priority varchar(255) NULL,
	status varchar(255) NULL,
	owner varchar(255) NULL,
	startdate date NULL,
	enddate date NULL,
	phase varchar(50) NULL,
	history text NULL,
	percent integer NULL,
	totaltime integer NULL,
	actualtime integer NULL,
	assignedto varchar(100) NULL
)
;

CREATE TABLE public.usys_system
(
	property varchar(50) NOT NULL,
	value varchar(50) NULL
)
;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE t_changehistory ADD CONSTRAINT "PK_t_changehistory"
	PRIMARY KEY (log_id)
;

ALTER TABLE t_connector ADD CONSTRAINT "PK_t_connector"
	PRIMARY KEY (connector_id)
;

ALTER TABLE t_connector 
  ADD CONSTRAINT uq_connector_ims_guid UNIQUE (ims_guid)
;

ALTER TABLE t_connector 
  ADD CONSTRAINT conn_unique UNIQUE (direction,start_object_id,end_object_id)
;

CREATE INDEX "IXFK_t_connector_t_object" ON t_connector (start_object_id ASC)
;

CREATE INDEX "IXFK_t_connector_t_object_02" ON t_connector (end_object_id ASC)
;

ALTER TABLE public.t_documents ADD CONSTRAINT "PK_t_documents"
	PRIMARY KEY (doc_id)
;

CREATE INDEX "IXFK_t_documents_t_object" ON public.t_documents (object_id ASC)
;

ALTER TABLE public.t_files ADD CONSTRAINT pk_files
	PRIMARY KEY (fileid)
;

CREATE INDEX "IXFK_t_files_t_objectfiles" ON public.t_files (object_id ASC,filename ASC)
;

CREATE INDEX ix_files_appliesto ON public.t_files (appliesto ASC)
;

CREATE INDEX ix_files_appliestoname ON public.t_files (appliesto ASC,name ASC)
;

CREATE INDEX ix_files_category ON public.t_files (category ASC)
;

CREATE INDEX ix_files_filesize ON public.t_files (filesize ASC)
;

CREATE INDEX ix_files_name ON public.t_files (name ASC)
;

ALTER TABLE public.t_glossary ADD CONSTRAINT pk_glossary
	PRIMARY KEY (glossaryid)
;

CREATE INDEX idx_glossary_term ON public.t_glossary (term ASC)
;

CREATE INDEX idx_glossary_type ON public.t_glossary (type ASC)
;

ALTER TABLE public.t_object ADD CONSTRAINT "PK_t_object"
	PRIMARY KEY (object_id)
;

ALTER TABLE public.t_object 
  ADD CONSTRAINT uq_object_ims_guid UNIQUE (ims_guid)
;

CREATE INDEX "IXFK_t_object_t_objectfiles" ON public.t_object (object_id ASC,filename ASC)
;

CREATE INDEX "IXFK_t_object_t_package" ON public.t_object (package_id ASC)
;

CREATE INDEX "IXFK_t_object_t_project" ON public.t_object (project_id ASC)
;

CREATE INDEX "IXFK_t_object_t_statustypes" ON public.t_object (status ASC)
;

CREATE INDEX "IXFK_t_object_t_stereotypes" ON public.t_object (appliesto ASC,stereotype ASC)
;

ALTER TABLE public.t_objectfiles ADD CONSTRAINT pk_objectfiles
	PRIMARY KEY (object_id,filename)
;

CREATE INDEX "IXFK_t_objectfiles_t_files" ON public.t_objectfiles (fileid ASC)
;

CREATE INDEX "IXFK_t_objectfiles_t_object" ON public.t_objectfiles (object_id ASC)
;

CREATE INDEX "IXFK_t_objectfiles_t_object_02" ON public.t_objectfiles (object_id ASC)
;

ALTER TABLE t_package ADD CONSTRAINT "PK_t_package"
	PRIMARY KEY (package_id)
;

ALTER TABLE t_package 
  ADD CONSTRAINT uq_packadge_ims_guid UNIQUE (ims_guid)
;

CREATE INDEX "IXFK_t_package_t_project" ON t_package (project_id ASC)
;

CREATE INDEX ix_package_name ON t_package (name ASC)
;

ALTER TABLE t_project ADD CONSTRAINT "PK_t_project"
	PRIMARY KEY (project_id)
;

ALTER TABLE t_project 
  ADD CONSTRAINT uq_project_ims_guid UNIQUE (ims_guid)
;

CREATE INDEX ix_project_name ON t_project (name ASC)
;

ALTER TABLE public.t_secgroup ADD CONSTRAINT pk_secgroup
	PRIMARY KEY (groupid)
;

CREATE INDEX "IXFK_t_secgroup_t_secusergroup" ON public.t_secgroup (userid ASC,groupid ASC)
;

ALTER TABLE public.t_secuser ADD CONSTRAINT pk_secuser
	PRIMARY KEY (userid)
;

CREATE INDEX "IXFK_t_secuser_t_secusergroup" ON public.t_secuser (userid ASC,groupid ASC)
;

ALTER TABLE public.t_secusergroup ADD CONSTRAINT pk_secusergroup
	PRIMARY KEY (userid,groupid)
;

ALTER TABLE public.t_statustypes ADD CONSTRAINT pk_statustypes
	PRIMARY KEY (status)
;

CREATE INDEX "IXFK_t_statustypes_t_object" ON public.t_statustypes (object_id ASC)
;

ALTER TABLE public.t_stereotypes ADD CONSTRAINT pk_stereotypes
	PRIMARY KEY (appliesto,stereotype)
;

CREATE INDEX ix_stereotypes_eaguid ON public.t_stereotypes (ea_guid ASC)
;

CREATE INDEX ix_stereotypes_stereotype ON public.t_stereotypes (stereotype ASC)
;

ALTER TABLE public.t_taggedvalue ADD CONSTRAINT "PK_t_taggedvalue"
	PRIMARY KEY (property_id)
;

CREATE INDEX "IXFK_t_taggedvalue_t_object" ON public.t_taggedvalue (object_id ASC)
;

ALTER TABLE public.t_tasks ADD CONSTRAINT pk_tasks
	PRIMARY KEY (taskid)
;

ALTER TABLE public.usys_system ADD CONSTRAINT pk_usyssystem
	PRIMARY KEY (property)
;

/* Create Foreign Key Constraints */

ALTER TABLE t_connector ADD CONSTRAINT "FK_t_connector_t_object"
	FOREIGN KEY (start_object_id) REFERENCES public.t_object (object_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE t_connector ADD CONSTRAINT "FK_t_connector_t_object_02"
	FOREIGN KEY (end_object_id) REFERENCES public.t_object (object_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE public.t_documents ADD CONSTRAINT "FK_t_documents_t_object"
	FOREIGN KEY (object_id) REFERENCES public.t_object (object_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE public.t_object ADD CONSTRAINT "FK_t_object_t_package"
	FOREIGN KEY (package_id) REFERENCES t_package (package_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE public.t_object ADD CONSTRAINT "FK_t_object_t_project"
	FOREIGN KEY (project_id) REFERENCES t_project (project_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE public.t_object ADD CONSTRAINT "FK_t_object_t_statustypes"
	FOREIGN KEY (status) REFERENCES public.t_statustypes (status) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE public.t_object ADD CONSTRAINT "FK_t_object_t_stereotypes"
	FOREIGN KEY (appliesto,stereotype) REFERENCES public.t_stereotypes (appliesto,stereotype) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE public.t_objectfiles ADD CONSTRAINT "FK_t_objectfiles_t_object_02"
	FOREIGN KEY (object_id) REFERENCES public.t_object (object_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE t_package ADD CONSTRAINT "FK_t_package_t_project"
	FOREIGN KEY (project_id) REFERENCES t_project (project_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE public.t_secgroup ADD CONSTRAINT "FK_t_secgroup_t_secusergroup"
	FOREIGN KEY (userid,groupid) REFERENCES public.t_secusergroup (userid,groupid) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE public.t_secuser ADD CONSTRAINT "FK_t_secuser_t_secusergroup"
	FOREIGN KEY (userid,groupid) REFERENCES public.t_secusergroup (userid,groupid) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE public.t_taggedvalue ADD CONSTRAINT "FK_t_taggedvalue_t_object"
	FOREIGN KEY (object_id) REFERENCES public.t_object (object_id) ON DELETE No Action ON UPDATE No Action
;

/* Create Table Comments, Sequences for Autonumber Columns */

COMMENT ON TABLE t_changehistory
	IS '������� � �������� ���������'
;

CREATE SEQUENCE log_id_seq INCREMENT 1 START 1
;

COMMENT ON TABLE t_connector
	IS '������� ���� ������ ������������ ����� ���������� '
;

CREATE SEQUENCE connector_id_seq INCREMENT 1 START 1
;

COMMENT ON TABLE public.t_documents
	IS '������� �������� ����������� � ������� � ������ � ��� '
;

COMMENT ON TABLE public.t_files
	IS '���������� �� ��������� � ������� �� �����'
;

COMMENT ON TABLE public.t_glossary
	IS '������� ���������� ���������'
;

CREATE SEQUENCE public.glossaryid_seq INCREMENT 1 START 1
;

COMMENT ON TABLE public.t_object
	IS '������� ��������, �������� ���������� �� ���� �������� � ������ ������ �������'
;

CREATE SEQUENCE public.object_id_seq INCREMENT 1 START 1
;

COMMENT ON TABLE public.t_objectfiles
	IS '������� c����� �� ������� Properties/files � ��������'
;

COMMENT ON TABLE t_package
	IS '������� �������� ��������� ������� ������'
;

CREATE SEQUENCE package_id_seq INCREMENT 1 START 1
;

COMMENT ON TABLE t_project
	IS '������� ��������'
;

CREATE SEQUENCE project_id_seq INCREMENT 1 START 1
;

COMMENT ON TABLE public.t_secgroup
	IS '������� ����� ������� � ������� '
;

COMMENT ON TABLE public.t_secuser
	IS '������� �� ������� ������������� �������'
;

COMMENT ON TABLE public.t_secusergroup
	IS '������� ����� ������������� � ����� � �������'
;

COMMENT ON TABLE public.t_statustypes
	IS '������� ��������  ��� ��������'
;

COMMENT ON TABLE public.t_stereotypes
	IS '������� �� ������� ����������� ��� ��������'
;

COMMENT ON TABLE public.t_taggedvalue
	IS '������� ��� ���������� �������� �����������. ��� �������� Tags ��� �������� �������'
;

COMMENT ON TABLE public.t_tasks
	IS '������ � �������� �������'
;

CREATE SEQUENCE public.taskid_seq INCREMENT 1 START 1
;

COMMENT ON TABLE public.usys_system
	IS '������� � ���������� ����������� �������'
;
