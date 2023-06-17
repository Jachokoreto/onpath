--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: company; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.company (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.company OWNER TO admin;

--
-- Name: company_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.company_id_seq OWNER TO admin;

--
-- Name: company_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.company_id_seq OWNED BY public.company.id;


--
-- Name: department; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.department (
    id integer NOT NULL,
    name character varying NOT NULL,
    "companyId" integer
);


ALTER TABLE public.department OWNER TO admin;

--
-- Name: department_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.department_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.department_id_seq OWNER TO admin;

--
-- Name: department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.department_id_seq OWNED BY public.department.id;


--
-- Name: employee; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.employee (
    id integer NOT NULL,
    name character varying NOT NULL,
    "companyId" integer,
    "roleId" integer
);


ALTER TABLE public.employee OWNER TO admin;

--
-- Name: employee_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_id_seq OWNER TO admin;

--
-- Name: employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.employee_id_seq OWNED BY public.employee.id;


--
-- Name: employee_role_impression; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.employee_role_impression (
    id integer NOT NULL,
    impression boolean NOT NULL,
    "roleId" integer,
    "employeeId" integer
);


ALTER TABLE public.employee_role_impression OWNER TO admin;

--
-- Name: employee_role_impression_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.employee_role_impression_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_role_impression_id_seq OWNER TO admin;

--
-- Name: employee_role_impression_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.employee_role_impression_id_seq OWNED BY public.employee_role_impression.id;


--
-- Name: employee_skill; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.employee_skill (
    id integer NOT NULL,
    name character varying NOT NULL,
    "employeeId" integer,
    value double precision NOT NULL
);


ALTER TABLE public.employee_skill OWNER TO admin;

--
-- Name: employee_skill_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.employee_skill_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_skill_id_seq OWNER TO admin;

--
-- Name: employee_skill_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.employee_skill_id_seq OWNED BY public.employee_skill.id;


--
-- Name: employee_skill_impression; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.employee_skill_impression (
    id integer NOT NULL,
    impression boolean NOT NULL,
    "skillId" integer,
    "employeeId" integer
);


ALTER TABLE public.employee_skill_impression OWNER TO admin;

--
-- Name: employee_skill_impression_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.employee_skill_impression_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_skill_impression_id_seq OWNER TO admin;

--
-- Name: employee_skill_impression_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.employee_skill_impression_id_seq OWNED BY public.employee_skill_impression.id;


--
-- Name: metric; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.metric (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    type character varying NOT NULL,
    value integer NOT NULL,
    weightage integer NOT NULL,
    "employeeSkillId" integer
);


ALTER TABLE public.metric OWNER TO admin;

--
-- Name: metric_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.metric_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.metric_id_seq OWNER TO admin;

--
-- Name: metric_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.metric_id_seq OWNED BY public.metric.id;


--
-- Name: pathway; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.pathway (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    "departmentId" integer
);


ALTER TABLE public.pathway OWNER TO admin;

--
-- Name: pathway_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.pathway_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pathway_id_seq OWNER TO admin;

--
-- Name: pathway_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.pathway_id_seq OWNED BY public.pathway.id;


--
-- Name: role; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    "pathwayId" integer
);


ALTER TABLE public.role OWNER TO admin;

--
-- Name: role_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_id_seq OWNER TO admin;

--
-- Name: role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;


--
-- Name: role_relation; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.role_relation (
    id integer NOT NULL,
    "parentRoleId" integer,
    "childRoleId" integer
);


ALTER TABLE public.role_relation OWNER TO admin;

--
-- Name: role_relation_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.role_relation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_relation_id_seq OWNER TO admin;

--
-- Name: role_relation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.role_relation_id_seq OWNED BY public.role_relation.id;


--
-- Name: role_skill; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.role_skill (
    id integer NOT NULL,
    value integer NOT NULL,
    "roleId" integer,
    name character varying NOT NULL
);


ALTER TABLE public.role_skill OWNER TO admin;

--
-- Name: role_skill_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.role_skill_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_skill_id_seq OWNER TO admin;

--
-- Name: role_skill_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.role_skill_id_seq OWNED BY public.role_skill.id;


--
-- Name: company id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.company ALTER COLUMN id SET DEFAULT nextval('public.company_id_seq'::regclass);


--
-- Name: department id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.department ALTER COLUMN id SET DEFAULT nextval('public.department_id_seq'::regclass);


--
-- Name: employee id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);


--
-- Name: employee_role_impression id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_role_impression ALTER COLUMN id SET DEFAULT nextval('public.employee_role_impression_id_seq'::regclass);


--
-- Name: employee_skill id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_skill ALTER COLUMN id SET DEFAULT nextval('public.employee_skill_id_seq'::regclass);


--
-- Name: employee_skill_impression id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_skill_impression ALTER COLUMN id SET DEFAULT nextval('public.employee_skill_impression_id_seq'::regclass);


--
-- Name: metric id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.metric ALTER COLUMN id SET DEFAULT nextval('public.metric_id_seq'::regclass);


--
-- Name: pathway id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.pathway ALTER COLUMN id SET DEFAULT nextval('public.pathway_id_seq'::regclass);


--
-- Name: role id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);


--
-- Name: role_relation id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role_relation ALTER COLUMN id SET DEFAULT nextval('public.role_relation_id_seq'::regclass);


--
-- Name: role_skill id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role_skill ALTER COLUMN id SET DEFAULT nextval('public.role_skill_id_seq'::regclass);


--
-- Data for Name: company; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.company (id, name) FROM stdin;
1	onPath Technologies
\.


--
-- Data for Name: department; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.department (id, name, "companyId") FROM stdin;
1	Tech	1
2	Marketing	1
3	Business	1
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.employee (id, name, "companyId", "roleId") FROM stdin;
6	Hilary Sitwell	1	12
5	Nataline Swaisland	1	9
4	Freddie Treven	1	1
3	Maynord Povall	1	6
2	Wallie Tomkin	1	4
1	Serena Fishcer	1	2
\.


--
-- Data for Name: employee_role_impression; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.employee_role_impression (id, impression, "roleId", "employeeId") FROM stdin;
\.


--
-- Data for Name: employee_skill; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.employee_skill (id, name, "employeeId", value) FROM stdin;
3	Python	1	3.2
9	Database Design	1	0
8	React	1	0.2
6	C++	1	0.4
4	Postgres	1	0.8
10	Python	2	3.2
11	Postgres	2	0.8
12	C++	2	0.4
14	Database Design	2	0
15	Python	3	3.2
16	Postgres	3	0.8
17	C++	3	0.4
18	React	3	0.2
19	Database Design	3	0
20	UI/UX	5	3.2
21	React	5	0.8
22	HTML	5	0.4
23	CSS	5	0.2
24	Node.Js	5	0
\.


--
-- Data for Name: employee_skill_impression; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.employee_skill_impression (id, impression, "skillId", "employeeId") FROM stdin;
\.


--
-- Data for Name: metric; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.metric (id, name, description, type, value, weightage, "employeeSkillId") FROM stdin;
1	Python and Statistics for Financial Analysis	test	Certificate	4	20	3
2	Google Advanced Data Analytics	test	Certificate	6	20	3
6	Relational Database Design Crash Course		Certificate	2	20	9
5	Bachelor of Information Systems	Data Analytics at Sunway University	Qualification	5	30	3
4	1 Years Senior Data Analayst	test	Work Experience	4	40	3
3	2 Years Junior Data Analayst	test	Work Experience	2	40	3
7	Facbook Clone		Personal Project	2	10	8
40	Facbook Clone		Personal Project	3	10	20
10	1 Year Senior Data Analayst		Work Experience	3	40	6
9	2 Years Junior Data Analayst		Work Experience	2	40	6
12	Bachelor of Information Systems		Qualification	3	30	4
13	Python and Statistics for Financial Analysis	test	Certificate	4	20	10
14	Google Advanced Data Analytics	test	Certificate	6	20	10
15	2 Years Junior Data Analayst	test	Work Experience	2	40	10
16	2 Years Senior Data Analayst	test	Work Experience	4	40	10
17	Bachelor of Information Systems	Data Analytics at Sunway University	Qualification	5	30	10
18	Relational Database Design Crash Course		Certificate	2	20	14
19	2 Years Junior Data Analayst		Work Experience	2	40	12
20	2 Year Senior Data Analayst		Work Experience	5	40	12
22	Bachelor of Information Systems		Qualification	3	30	12
27	Bachelor of Information Systems	Data Analytics at Sunway University	Qualification	5	30	15
26	2 Years Senior Data Analayst	test	Work Experience	4	40	15
25	2 Years Junior Data Analayst	test	Work Experience	2	40	15
24	Google Advanced Data Analytics	test	Certificate	6	20	15
23	Python and Statistics for Financial Analysis	test	Certificate	4	20	15
28	Relational Database Design Crash Course		Certificate	2	20	19
33	2 Year Data Analayst Team Lead		Work Experience	7	40	15
32	Bachelor of Information Systems		Qualification	3	30	15
30	2 Year Senior Data Analayst		Work Experience	5	40	15
29	2 Years Junior Data Analayst		Work Experience	2	40	15
34	UI / UX Design Specialization	test	Certificate	3	20	20
36	1 Year Junior Data Analayst	test	Work Experience	2	40	20
21	Google Cloud Database Engineer		Certificate	4	20	14
31	Google Cloud Database Engineer		Certificate	4	20	19
11	Google Cloud Database Engineer		Certificate	4	20	4
38	Bachelor of Science in Graphic Information Technology		Qualification	5	30	20
51	Bachelor of Science in Graphic Information Technology		Qualification	5	30	23
50	1 Year Junior Data Analayst	test	Work Experience	2	40	23
49	UI / UX Design Specialization	test	Certificate	3	20	23
48	Facbook Clone		Personal Project	3	10	22
47	Bachelor of Science in Graphic Information Technology		Qualification	5	30	22
46	1 Year Junior Data Analayst	test	Work Experience	2	40	22
45	UI / UX Design Specialization	test	Certificate	3	20	22
44	Facbook Clone		Personal Project	3	10	21
43	Bachelor of Science in Graphic Information Technology		Qualification	5	30	21
42	1 Year Junior Data Analayst	test	Work Experience	2	40	21
41	UI / UX Design Specialization	test	Certificate	3	20	21
52	Facbook Clone		Personal Project	3	10	23
\.


--
-- Data for Name: pathway; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.pathway (id, name, description, "departmentId") FROM stdin;
1	Programmer Analyst	test	1
2	Frontend	test	1
3	Backend	test	1
4	Devops	test	1
\.


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.role (id, name, description, "pathwayId") FROM stdin;
1	Programmer Analyst 1	test	1
4	Senior Programmer Analyst 2	tset	1
3	Senior Programmer Analyst 1	test	1
2	Programmer Analyst 2	test	1
6	Programmer Analyst Team Lead	test	1
7	Junior Frontend Developer 1	test	2
8	Junior Frontend Developer 2	test	2
11	Senior Frontend Developer 2	test	2
10	Senior Frontend Developer 1	test	2
12	Design Lead	test	2
9	UI/UX Designer	test	2
\.


--
-- Data for Name: role_relation; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.role_relation (id, "parentRoleId", "childRoleId") FROM stdin;
1	1	2
2	2	3
3	3	4
5	3	6
6	7	8
7	8	9
8	8	10
9	10	11
10	9	12
\.


--
-- Data for Name: role_skill; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.role_skill (id, value, "roleId", name) FROM stdin;
3	4	1	Python
4	3	1	Postgres
6	2	1	C++
9	3	1	Database Design
10	5	2	Python
11	4	2	Postgres
12	3	2	C++
13	4	2	Database Design
8	3	1	Docker
14	3	2	Docker
24	3	4	Docker
23	6	4	Database Design
22	4	4	C++
21	6	4	Postgres
20	7	4	Python
16	5	3	Postgres
17	4	3	C++
18	5	3	Database Design
19	3	3	Docker
15	6	3	Python
25	7	6	Python
26	6	6	Postgres
27	4	6	C++
28	6	6	Database Design
29	3	6	Docker
30	6	6	Management
31	6	6	Leadership
\.


--
-- Name: company_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.company_id_seq', 1, false);


--
-- Name: department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.department_id_seq', 1, false);


--
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.employee_id_seq', 1, false);


--
-- Name: employee_role_impression_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.employee_role_impression_id_seq', 1, false);


--
-- Name: employee_skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.employee_skill_id_seq', 9, true);


--
-- Name: employee_skill_impression_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.employee_skill_impression_id_seq', 1, false);


--
-- Name: metric_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.metric_id_seq', 12, true);


--
-- Name: pathway_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.pathway_id_seq', 1, false);


--
-- Name: role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.role_id_seq', 12, true);


--
-- Name: role_relation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.role_relation_id_seq', 10, true);


--
-- Name: role_skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.role_skill_id_seq', 1, false);


--
-- Name: company PK_056f7854a7afdba7cbd6d45fc20; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.company
    ADD CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY (id);


--
-- Name: employee PK_3c2bc72f03fd5abbbc5ac169498; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY (id);


--
-- Name: role_skill PK_743605ab545e8f22ef538b5ccc4; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role_skill
    ADD CONSTRAINT "PK_743605ab545e8f22ef538b5ccc4" PRIMARY KEY (id);


--
-- Name: employee_skill_impression PK_76326d72f21b1ee19143939cb58; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_skill_impression
    ADD CONSTRAINT "PK_76326d72f21b1ee19143939cb58" PRIMARY KEY (id);


--
-- Name: metric PK_7d24c075ea2926dd32bd1c534ce; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.metric
    ADD CONSTRAINT "PK_7d24c075ea2926dd32bd1c534ce" PRIMARY KEY (id);


--
-- Name: department PK_9a2213262c1593bffb581e382f5; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.department
    ADD CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY (id);


--
-- Name: employee_skill PK_9da90c8c9010bd6b62d23d4eacb; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_skill
    ADD CONSTRAINT "PK_9da90c8c9010bd6b62d23d4eacb" PRIMARY KEY (id);


--
-- Name: role PK_b36bcfe02fc8de3c57a8b2391c2; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY (id);


--
-- Name: pathway PK_d593326dc88056b1e118fd40f5a; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.pathway
    ADD CONSTRAINT "PK_d593326dc88056b1e118fd40f5a" PRIMARY KEY (id);


--
-- Name: role_relation PK_f1929ef2a7f86aaa8964fbf9171; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role_relation
    ADD CONSTRAINT "PK_f1929ef2a7f86aaa8964fbf9171" PRIMARY KEY (id);


--
-- Name: employee_role_impression PK_fe0dc83fbc795abc72835ee2d72; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_role_impression
    ADD CONSTRAINT "PK_fe0dc83fbc795abc72835ee2d72" PRIMARY KEY (id);


--
-- Name: metric FK_11d5a233162edde638c350730ad; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.metric
    ADD CONSTRAINT "FK_11d5a233162edde638c350730ad" FOREIGN KEY ("employeeSkillId") REFERENCES public.employee_skill(id);


--
-- Name: department FK_1c9f0159b4ae69008bd356bb1ce; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.department
    ADD CONSTRAINT "FK_1c9f0159b4ae69008bd356bb1ce" FOREIGN KEY ("companyId") REFERENCES public.company(id);


--
-- Name: employee_role_impression FK_1d189702c40d50b4a910321ae43; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_role_impression
    ADD CONSTRAINT "FK_1d189702c40d50b4a910321ae43" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);


--
-- Name: employee FK_26c3d513e0832e5abbbdd3d2a88; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "FK_26c3d513e0832e5abbbdd3d2a88" FOREIGN KEY ("companyId") REFERENCES public.company(id);


--
-- Name: role_skill FK_2fa72a65c4ce95a31522154e515; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role_skill
    ADD CONSTRAINT "FK_2fa72a65c4ce95a31522154e515" FOREIGN KEY ("roleId") REFERENCES public.role(id);


--
-- Name: employee_role_impression FK_3889e4ede9a3dd2b542cb296c01; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_role_impression
    ADD CONSTRAINT "FK_3889e4ede9a3dd2b542cb296c01" FOREIGN KEY ("roleId") REFERENCES public.role(id);


--
-- Name: employee_skill FK_4d677430066c2c55de3f0f4cb84; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_skill
    ADD CONSTRAINT "FK_4d677430066c2c55de3f0f4cb84" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);


--
-- Name: employee FK_646b91cc56d9fd9760973b4980d; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "FK_646b91cc56d9fd9760973b4980d" FOREIGN KEY ("roleId") REFERENCES public.role(id);


--
-- Name: employee_skill_impression FK_768c41f37aa8989c6f769dad360; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_skill_impression
    ADD CONSTRAINT "FK_768c41f37aa8989c6f769dad360" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);


--
-- Name: role FK_7caa8a1204c3a038d07877279c6; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT "FK_7caa8a1204c3a038d07877279c6" FOREIGN KEY ("pathwayId") REFERENCES public.pathway(id);


--
-- Name: role_relation FK_804b1d3f3af8f6a08fa3d11efbd; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role_relation
    ADD CONSTRAINT "FK_804b1d3f3af8f6a08fa3d11efbd" FOREIGN KEY ("childRoleId") REFERENCES public.role(id);


--
-- Name: role_relation FK_9b92b57d095db765f07c3fb0478; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.role_relation
    ADD CONSTRAINT "FK_9b92b57d095db765f07c3fb0478" FOREIGN KEY ("parentRoleId") REFERENCES public.role(id);


--
-- Name: employee_skill_impression FK_a462bb94bbe879086b1622aecb7; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_skill_impression
    ADD CONSTRAINT "FK_a462bb94bbe879086b1622aecb7" FOREIGN KEY ("skillId") REFERENCES public.role_skill(id);


--
-- Name: pathway FK_f8f7dfb2f1cee56066e00f665af; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.pathway
    ADD CONSTRAINT "FK_f8f7dfb2f1cee56066e00f665af" FOREIGN KEY ("departmentId") REFERENCES public.department(id);


--
-- PostgreSQL database dump complete
--

