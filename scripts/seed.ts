import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawData = `	SNo	Name	Email	Title	Company	Send
	1	Suraj Shylaja	suraj.shylaja@g10x.com	Head Human Resources	_G10X	
	2	Vijaya Talluri	vijaya.talluri@g10x.com	Head - Talent Acquisition	_G10X	
	3	Nidhi	nidhi.vishnoi@2isolutions.com	Head-HR	2iSolutions	
	4	Raj Agarwal	raj.agarwal@360degreecloud.in	Chief Recruitment Officer	360 Degree Cloud Technologies	
	5	Prathyusha Mannar	prathyusha@5cnetwork.com	Head - HR	5C Network	
	6	Khushi Mishra	khushi@5ire.org	Head of Human Resources	5ireChain	
	7	Reenaa S	reenaa.s@63moons.com	Assistant Vice President - Human Resources	63 moons Technologies	
	8	Samidha Varadkar	samidha.varadkar@63moons.com	Asst. Vice President - Human Resources	63 moons Technologies	
	9	Vasu P	vasu.p@nbhcindia.com	Assistant Vice President - Human Resources	63 moons Technologies	
	10	Gautam Tungare	gautam.tungare@6degreesit.com	HR HEAD	6DegreesIT	
	11	Tanisha T	tanisha@91social.com	Head of HR and Finance	91social	
	12	Ankit Sharma	ankit.sharma@a1technology.com	Head Of Recruitment & HR	A-1 Technology	
	13	Vinod Malik	vinod.malik@a1technology.com	Head HR	A-1 Technology	
	14	Nisha Roy	nisharoy@aabasoft.com	Head of Human Resources Operations	Aabasoft	
	15	Sanghamitra Roy	sroy@aapnainfotech.com	Head HR Admin	AAPNA Infotech	
	16	Chaitanya Arikati	chaitanya.arikati@abjayon.com	Senior Recruitment Manager (Head - TA)	Abjayon	
	17	Prasad Kelkar	prasad_k@abmindia.com	Head HR & Admin	ABM Knowledgeware	
	18	Ramchandra Patil	head.hr@abmindia.com	Head of HR	ABM Knowledgeware	
	19	Anshu Anand	anshu.anand@absolutdata.com	Head Of Human Resources	Absolutdata Analytics	
	20	Mukta Dar	mukta.dar@absolutdata.com	Head HR	Absolutdata Analytics	
	21	Muthyala Manasa	muthyala.manasa@absyz.com	Director - Human Resources	ABSYZ Inc	
	22	Arif Memon	arif.memon@abzooba.com	Associate Vice President Talent Acquisition	Abzooba	
	23	Shalini Director	shalini.director@accelalpha.com	Head Of Human Resources - Asia Pacific	Accelalpha	
	24	Deepti N	deepti.n@accelq.com	Director-HR	ACCELQ	
	25	Garima Sangwan	garima.sangwan@accops.com	Senior Director Human Resources	Accops Systems	
	26	Sanjeev Dhokte	sanjeev.dhokte@accops.com	Senior Director Human Resources	Accops Systems	
	27	Gautham Premkumar	gautham.p@accubits.com	Head of Campus Recruitment	Accubits Technologies	
	28	Roystone Fernandez	roystone@accubits.com	Chief Human Resources Officer	Accubits Technologies	
	29	Deepak Pawar	deepak.pawar@accutech.co.in	Head Of Human Resources	Accutech Power Solutions	
	30	Chhavi Bhatnagar	chhavi.bhatnagar@acnovate.com	Chief People Officer	Acnovate Corporation	
	31	Shivani Singh	shivani@acpl.com	Head of HR	ACPL Systems	
	32	Vijay Unnikrishnan	vijay.unnikrishnan@acqueon.com	Global Head-Human Resources	Acqueon	
	33	Komala Tummala	komala.t@acropetal.com	Head Talent Management	Acropetal Technologies	
	34	Prabha Giri	prabha.giri@acropolisinfotech.com	AVP - People Operations	Acropolis Infotech	
	35	Krishna Kumar	krishna_kumar@actis.co.in	Head HR	Actis Technologies	
	36	Hina Khan	hina.khan@acuteinformatics.in	Head Recruitment	Acute Informatics	
	37	Umar Kizhuvapat	umar.k@acuverconsulting.com	Director - HR & Operations	Acuver Consulting	
	38	Mayukh Mitra	mmitra@adaequare.com	Director & Head of HR	Adaequare	
	39	Reena Vijayanand	reena.v@adani.com	Head HR - Data Center	AdaniConneX	
	40	Vandana Pandey	vandana.pandey@adapty.com	Head Of Human Resources	Adapty	
	41	Balesh S	balesh@adarshsolutions.com	Head HR & Operations	Adarsh Solutions	
	42	Kiran Kumar	kkumar@adea.com	Head -HR	Adea Solutions	
	43	Jyothendra Reddy	jyothendraar@aditiconsulting.com	Senior Director - Recruitment & Operations	Aditi Consulting	
	44	Kumar Anchan	kumara@aditiconsulting.com	Director - Recruitment	Aditi Consulting	
	45	Madhan Kumar	madhan.kumar@aditiconsulting.com	Director of Talent Management & Operations	Aditi Consulting	
	46	Nayana Martin	nayanam@aditiconsulting.com	Associate Director L&D	Aditi Consulting	
	47	Ravikumar M	ravikumarm@aditiconsulting.com	Director - Recruitment	Aditi Consulting	
	48	Siji John	sijimolj@aditiconsulting.com	Senior Director Talent Management	Aditi Consulting	
	49	Venkat Challa	cvenkat@aditiconsulting.com	Sr. Director - Recruitment	Aditi Consulting	
	50	Anand Rajendran	anand.r@whatarage.com	Director - HR	ADK Rage	
	51	Subramanian Ponnusamy	sponnusamy@aequor.com	Director-India Staffing Services	Aequor Technologies	
	52	Dishank Raj	dishank.raj@aeriestechnology.com	Head/Director Talent Acquisition - India	Aeries Technology Group	
	53	Sheetal Sawant	sheetal.sawant@aeriestechnology.com	Head Of Human Resources	Aeries Technology Group	
	54	Shilpa Reddy	shilpa.reddy@aeriestechnology.com	Director HR	Aeries Technology Group	
	55	Sudhir B	sudhir.b@aeriestechnology.com	Head - Talent Acquisition	Aeries Technology Group	
	56	Sujit Jiandani	sujit.jiandani@aethereus.com	Director Talent Acquisition - Leadership Hiring	Aethereus	
	57	Puja Gupta	puja@affle.com	Associate Director Human Resources	Affle	
	58	Sunitha Sriekumaar	sunithas@affluentgs.com	Sr Head HR Operations	Affluent Global Services	
	59	Pradnya Kulkarni	pradnya.kulkarni@afourtech.com	Head-HR & Admin	AFour Technologies	
	60	Sunit Kanoi	sunit.kanoi@ag-technologies.com	Head - Talent Acquisition	AG Technologies	
	61	Renu Srivastava	renu.srivastava@agdata.com	India HR Head	AGDATA, LP	
	62	Sirisree Dayanand	sirisree.dayanand@aggne.com	Director HR	Aggne	
	63	Santosh Gopineni	santosh@agilecrm.com	Director Human Resources Information Technology	Agile CRM	
	64	Vardhini Mani	vardhini.mani@agile-ft.com	Head HR	Agile Financial Technologies	
	65	Shrikant Joshi	shrikant@agileglobalsolutions.com	Vice President Talent Acquisition	Agile Global Solutions	
	66	Praveen Zore	praveen.zore@agiliad.com	Director Human Resources	Agiliad	
	67	Pooja	pooja@agri10x.com	VP-MarComm & Head-HR	Agri10x	
	68	Pragati Kumar	pkumar@aienterprise.com	Director Human Resources and Administration	AIEnterprise Inc	
	69	Bandana Kaul	bandana@airditsoftware.com	Director-Human Resources	Airdit Software Services	
	70	Meena R	meena@airmeet.com	Senior Director Human Resources	Airmeet	
	71	Neha Chaughule	neha@aistechnolabs.com	Head- Talent Acquisition	AIS Technolabs	
	72	Bhargavi Challa	bhargavic@aissel.com	Head of Human Resources	Aissel Technologies	
	73	Roopali Srivastava	roopali@aitglobalinc.com	Head - Human Resource	AIT Global India	
	74	Deo Kumar	deo.kumar@akalinfosys.com	Recruitment and Deployment Head	Akal Information Systems	
	75	Saumya Singh	saumya.singh@akalinfosys.com	Head Of Recruitment	Akal Information Systems	
	76	Dharmendra Singh	dharmendra@akshay.com	GM - Head of Staffing	Akshay Software Technologies	
	77	Smitha T	smitha@alchemysolutions.asia	Head - HR	Alchemy Techsol India	
	78	Rajeev S	rajeev.s@algonomy.com	Associate Director - Talent Acquisition	Algonomy	
	79	Shavee Sehajpal	shavee.s@algonomy.com	Vice President Human Resources	Algonomy	
	80	Sanjukta Biswas	sanjukta.biswas@algoworks.com	HR Head	Algoworks	
	81	Vinod Mankala	vinod@ally.io	Director of People & Culture	Ally.io	
	82	Madhu Kapu	madhu.kapu@allyis.com	Head HR & Operations	Allyis	
	83	Rakesh Kumar	rakesh.kumar@anetcorp.com	Head of Recruitment Operations	Alpha Net	
	84	Arushi Sawhney	arushi.sawhney@e2eresearch.com	Head Of Human Resources	Altezzasys Systems	
	85	Rosy Mitra	rosy.mitra@altiusdata.com	Head Recruiter	Altius	
	86	Arathi Prabhu	arathi.prabhu@altruistahealth.com	Director - Talent Acquisition	Altruista Health	
	87	Nipsy Jhamb	nipsy.jhamb@altudo.co	Director - HR	Altudo	
	88	Nitin Sharma	nitin.sharma@altudo.co	Director Talent Acquisition	Altudo	
	89	Vikash Choudhary	vikas.kumar@altudo.co	Associate Director - Talent Acquisition	Altudo	
	90	Vishal Verma	vishal@alumnux.com	Head Of Human Resources	Alumnus Software	
	91	Sweety Rath	sweety.rath@aspect.com	VP Global HR	Alvaria,	
	92	Nalini Panwar	nalini@amresearch.in	Director of Human Resources & Research	AM Research	
	93	Mamta Yadav	mamta.yadav@amantyatech.com	Head of Talent Acquisition	Amantya Technologies	
	94	Praveen Gupta	praveen.gupta@amantyatech.com	Vice President - Global HR	Amantya Technologies	
	95	Arun Ravi	arun.ravi@ipsoft.com	Digital Workforce Management - Head	Amelia	
	96	Vijay T	vijay.t@ipsoft.com	Head, Human Resources	Amelia	
	97	Shubham Katiyar	shubhamkatiyar@ameyo.com	Vice President & Head - Human Resources	Ameyo	
	98	Gaurav Saxena	gaurav.s@amigainformatics.com	Associate Director-Talent Acquisition/Recruitment	Amiga Informatics	
	99	Manoj Prasad	mxp@amitysoftware.com	Head of IT / HR & Admin	Amity Software Systems	
	100	Vara Tupalli	vara.tupalli@amnetdigital.com	Director - Human Resources	Amnet Digital	
	101	Sathya Sekaran	sathyaprakash.sekaran@amnet-systems.com	Head - Human Resources	Amnet Systems	
	102	Jyoti Kajale	jyoti.kajale@ampcus.com	VP Talent Acquisition	Ampcus Inc	
	103	Manoj K	manoj@ampl.app	Head People & Culture	Ampl	
	104	Chitra Ravi	chitra.ravi@ample.co.in	Head of HR	Ample Technologies	
	105	Ravi Kumar	ravi.kumar@ample.co.in	Director - Recruitment	Ample Technologies	
	106	Pavan Reddy	pavan.r@amplelogic.com	Head Of Human Resources	AmpleLogic	
	107	Raj Abubakkar	rabubakkar@amrepinspect.com	Global Head Human Resources	AMREP SUPPLIER MANAGEMENT SERVICES	
	108	Jayashri Benjamin	jayashri@amrutsoftware.com	HR and Admin Head	Amrut Software	
	109	Suhasini Ramakrishnan	suhasinir@amzetta.com	Vice President - Human Resources	AmZetta Technologies	
	110	Shilpa Shukla	sshukla@anaqua.com	Associate Director - HR	Anaqua	
	111	Hank Mishra	hank.mishra@anchanto.com	Global Human Resources Director	Anchanto	
	112	Pradeep Kumar	pradeep.kumar@andortech.com	Director - HR	Andor Tech	
	113	Rishabh Jain	rishabh.jain@angara.com	Head - Human Resource	Angara E-Commerce	
	114	Suzanna Tapala	suzanna.tapala@ankercloud.com	Head of Human Resources Operations	Ankercloud GmbH	
	115	Kavita Gupta	kavita.gupta@anm.com	Head Of Human Resources (India)	ANM	
	116	Manuel Fernandes	manuel.fernandes@antheliohealth.com	HR Head - India	Anthelio Healthcare Solutions	
	117	Mohammed Samiullah	samiullah.mohammed@antheliohealth.com	Head Of Human Resources	Anthelio Healthcare Solutions	
	118	Rajagopal	rajagopal@antra.com	Vice President - TA & IT Staffing	Antra,	
	119	Sajitha Nair	sajitha.nair@antra.com	Associate Vice President Human Resources	Antra,	
	120	Hanish Tiwari	hanish.tiwari@ant.works	AVP-HR	AntWorks	
	121	Jitendra Wankhede	jitendra.wankhede@anuntatech.com	Head - Talent Acquisition	Anunta Tech	
	122	Haseeb Imran	imran.h@apar.com	Head Of Recruitment	Apar Peopleworld Software	
	123	Lituja Mishra	lituja.mishra@apmosys.in	Sr. VP - HR	ApMoSys Technologies	
	124	Piyush Raghuvanshi	piyush.r@apna.co	Head - Talent & Culture	apna	
	125	Faiza Khan	faiza.khan@apolisrises.com	Head HR - India	Apolis	
	126	Inderjeet Gujral	inderjeet.gujral@apolisrises.com	Director Talent Acquisition	Apolis	
	127	Jyoti Saini	jyoti.saini@apolisrises.com	Global HR Head	Apolis	
	128	Vijay Rai	vijay.rai@apollo.engineer	Chief HR Officer	Apollo	
	129	Himanshu Bhatnagar	himanshub@appcino.com	Head HR	Appcino Technologies	
	130	Deepika Pandita	deepika@appinessworld.com	Head Of Human Resources	Appiness Interactive	
	131	Vijil V	vijil@appinessworld.com	Chief People Officer	Appiness Interactive	
	132	Khyati Sagar	khyatisagar@appitsimple.com	Talent Head	Appitsimple Infotek	
	133	Omesh Makhija	omeshmakhija@appitsimple.com	Head of People Operations	Appitsimple Infotek	
	134	Smitha Sajo	smitha.sajo@applexus.com	VP & Global Head- HR & Operations	Applexus Technologies	
	135	Elizabeth Johnson	elizabeth.j@appnomic.com	Director-Human Resources	Appnomic	
	136	Jayakumar N	njayakumar@a-bits.com	Vice President Human Resources	Apps Business IT Solutions	
	137	Bharathi Ravipati	bravipati@appstekcorp.com	Sr. Director HR- Eastern Region	AppsTek	
	138	Pavan Kumar	pkumar@appstekcorp.com	Eastern Regional Human Resources Director	AppsTek	
	139	Diksha Rohokale	diksha@apptware.com	Chief People Officer	Apptware	
	140	Anita Yadav	anita@appventurez.com	Global HR Head	Appventurez	
	141	Deepak Babu	deepak.babu@appviewx.com	Director Talent Acquisition	AppViewX	
	142	Nivrutha Sampath	nivrutha.s@appviewx.com	VP of HR	AppViewX	
	143	Smitha Pradeep	smitha.pradeep@aptos.com	HR Head	Aptos Retail	
	144	Roshni S	roshni.s@apty.io	Head of People and Culture	Apty	
	145	Hitesh Nair	hitesh.nair@aqmtechnologies.com	AVP of Performance Engineering	AQM Technologies	
	146	Roy Mathew	roy.mathew@aqmtechnologies.com	AQM Group Talent Head	AQM Technologies	
	147	Swapnil Pilkhane	swapnil.pilkhane@aqmtechnologies.com	Head - HR Operations	AQM Technologies	
	148	Anoob Abraham	anoob.abraham@arcadia.com	Associate Director - Talent Acquisition	Arcadia	
	149	Sarah John	sarah.john@onearchwell.com	Associate Director Human Resources	Archwell	
	150	Karuna Geddam	karuna.geddam@arcserve.com	Director HR at Arcserve	Arcserve	
	151	Pooja M	pooja.m@aress.com	Director HR	Aress Software	
	152	Kannu Taneja	kannu.taneja@areteanstech.com	Associate Director People and Culture (Global)	Areteans	
	153	Swagato Sengupta	swagato.sengupta@areteanstech.com	Associate Director - Human Resources	Areteans	
	154	Shalini Pathak	shalini.pathak@arkinfo.in	Head- People Services	ARK Infosolutions	
	155	Eustine Thomas	eustine.thomas@ars-traffic.com	Head of HR	ARS Traffic & Transport Technology	
	156	Artoon Solutions	qa@artoonsolutions.com	Chief Human Resources Officer	Artoon Solutions	
	157	Drishti Mistry	drishti@artoonsolutions.com	Head Of Recruitment	Artoon Solutions	
	158	Pragati Dey	pragati@aryacma.co.in	Head - Human Resources	Arya.ag	
	159	Hariprasad Adthale	hariprasadadthale@askbrake.com	Head HR & Admin	ASK Automotive	
	160	Suresh Menon	suresh@aspirenxt.com	Head Human Resources	AspireNXT	
	161	Hemlata Goel	hemlata.goel@shl.com	Head HR-India at SHL( Former Gartner)	Aspiring Minds	
	162	Sanchita Chakraborty	sanchita.chakraborty@assetanalytix.com	Head HR	Asset Analytix	
	163	Sapana Suresh	sapana.suresh@trizetto.com	Director - Human Resources	AST LLC	
	164	Manoj Sahoo	asta_onboarding@astacrs.com	Recruiter and Head of Onboarding	Asta Crs Inc	
	165	Arun Murugappa	arun@theatem.com	Delivery Head - Talent Acquisition	ATEM Software Solutions	
	166	Debdutta Bhowmick	debdutta.bhowmick@atidiv.com	Human Resources Director	Atidiv	
	167	Nitasha Dusi	nitasha.dusi@atidiv.com	Director - HR	Atidiv	
	168	Dharmik Gohel	dharmik@atlan.com	Director - Talent Acquisition	Atlan	
	169	Harsh Khanna	harshk@elementsgs.com	Director Global Payroll	Atlas	
	170	Naresh Nuthulapati	naresh.nuthulapati@atmecs.com	Associate Director - Talent Acquisition	ATMECS Inc	
	171	Prabhu	prabhu@atmecs.com	Director Human Resources Development	ATMECS Inc	
	172	Vamsi Krishna	vamsi.krishna@atmecs.com	Associate Director- Talent acquisition	ATMECS Inc	
	173	Swathi Narayan	snarayan@atsg.net	Head of Human Resources, India	ATSG	
	174	Mahasweta Paul	mahasweta.paul@atyati.com	VP - Chief People Officer	atyati Technologies	
	175	Shubhada Kale	shubhada.kale@atyeti.com	Head of HR - India	Atyeti Inc	
	176	Archana Anand	archana@aufait.in	Head of Talent Acquisition	Aufait Technologies	
	177	Ramya Eradi	eradi.ramya@aujas.com	Head - Talent Management	Aujas Cybersecurity	
	178	Ranjith Vp	ranjith.vp@aujas.com	Head- Talent Acquisition	Aujas Cybersecurity	
	179	Roopa Gangadharan	roopa.g@aujas.com	Associate Director HRBP	Aujas Cybersecurity	
	180	Susan D'Silva	susan.dsilva@aujas.com	Head of HR and Recruitment	Aujas Cybersecurity	
	181	Gayatri Moghe	gayatri@aumnitechworks.com	Head- Talent Acquisition	Aumni Techworks	
	182	Nisha Saini	nisha.saini@aurigait.com	Head Of Recruitment	Auriga IT Consulting	
	183	Shweta Murthy	smurthy@aurusinc.com	Vice President HR	Aurus Inc	
	184	Esha Mayekar	esha.mayekar@autoplant.in	Head Of Human Resources	Autoplant System India	
	185	Sanketh Ramkrishnamurthy	sanketh.r@autorabit.com	Head HR	AutoRABIT	
	186	Anand Sl	anand@auzmor.com	HR Director / Operations Head (India)	Auzmor	
	187	Miriam Shaju	miriam.shaju@avanzegroup.com	Director, Human Resources	Avanze	
	188	Hari Krishnan	hari.krishnan@avasotech.com	Global Head Human Resources	AVASO Technology Solutions	
	189	Raj Bose	rajbose@avataar.me	Head of Talent Acquisition	Avataar.Me	
	190	Simran Kalra	simran.kalra@avataar.me	Associate Director Human Resources	Avataar.Me	
	191	Pooja Mishra	pooja@avestacs.com	Vice President - HR & Strategic Accounts	Avesta Computer Services	
	192	Swapna Lamba	swapna@avestacs.com	Head-People, Immigration & Talent	Avesta Computer Services	
	193	Muhammed Rafi	payable@awign.com	HR Head	Awign	
	194	Bushra Mehdi	bushra.mehdi@axeno.co	AVP - Human Resources	Axeno	
	195	Sunny Walia	sunny.walia@axeno.co	Assistant Vice President - Talent Acquisition	Axeno	
	196	Deepa Dand	deepa@prdxn.com	Director of Accounts/Administration (HR Support)	Axioned	
	197	Sandip Bhise	sandipb@prdxn.com	Head of People Operations and Human Resources	Axioned	
	198	Shweta Setia	shwetasetia@ayoconnect.id	Head Of Human Resources	Ayoconnect	
	199	Suruchi Handa	suruchi.handa@azilen.com	Associate Vice President - Human Resources	Azilen Technologies	
	200	Sridevi Putta	sputta@aztecsoftware.com	Head of HR	Aztecsoft	
	201	Thomas Kuruvila	thomask@azuga.com	Director Human Resources	Azuga,	
	202	Pratik M	pratik.m@baazigames.com	Chief People Officer	Baazi Games	
	203	Jothi Prakash	jothi.prakash@bwdesigngroup.com	Head HR	Barry-Wehmiller International	
	204	Lakshmi Radhakrishnan	lakshmipriya.radhakrishnan@bwdesigngroup.com	Director - HR	Barry-Wehmiller International	
	205	Satyanrayana S	satyanrayana.s@bbm.com	Group Head Human Resources- BBM Group	BBM	
	206	Komal Hazra	komal@balajidatasolutions.net	Head of HR and Finance	BDS Services	
	207	Eyunni Kumar	eyunni.kumar@bdxworld.com	Vice President Global Head HR & Admin	BDx Data Centers	
	208	Ruchi Batra	ruchi.batra@beetel.in	Head - Human Resources	Beetel	
	209	Vinay Karrow	vinay.karrow@belwo.com	Head HR	BelWo Inc	
	210	Monica Bajaj	monica.bajaj@soft-corner.com	Head-HR	Benchmark IT Solutions	
	211	Nirzari Sen	nirzari.sen@benisontech.com	Head of HR	Benison Technologies	
	212	Neha Kohli	neha.kohli@benq.com	Associate Director Human Resources	BenQ India	
	213	Gurpreet Jaggi	gurpreet.jaggi@betsol.com	Director, HR and Operations	BETSOL	
	214	Arushi Goel	arushi.goel@betterplace.co.in	Director HRBP	BetterPlace	
	215	Debojit Das	debojit.das@betterplace.co.in	Associate Director - Staffing	BetterPlace	
	216	Maanoj Mishra	maanoj@betterplace.co.in	Group Head HR	BetterPlace	
	217	Pallavi Mishra	pmishra@bhavnacorp.com	Senior Director Human Resources	Bhavna Corp.	
	218	Pradeep Pg	pradeep@bidgely.com	Director, Human Resources	Bidgely	
	219	Parool Duggal	parool.duggal@bijnis.com	Director | Talent Acquisition	bijnis	
	220	Varun Wadhwa	varun.wadhwa@birdeye.com	Senior Director, People & Culture	Birdeye	
	221	Vishnu Ramesh	vishnu.vardhan@bitlasoft.com	Head of HR	Bitla Software	
	222	Rupali Veerkar	rupali.veerkar@bitwiseglobal.com	Vice President / Head-HR	Bitwise India	
	223	Shalaka Kothawle	shalaka.kothawale@bizom.com	Head - HR	Bizom	
	224	Kinjal Shah	kinjal@biztechconsultancy.com	Human Resource Director	BiztechCS	
	225	Radhika Boppana	radhika.boppana@blackstraw.ai	Chro	Blackstraw.ai	
	226	Jaslieen Kaur	jaslieen.baghh@blancco.com	Director HR and Operations	Blancco Technology Group	
	227	Ilham Mulla	ilham.mulla@blazeclan.com	Head - Talent Acquisition	Blazeclan Technologies	
	228	Shah Shoaib	shoaib.shah@blazeclan.com	Associate Director - Talent Acquisition	Blazeclan Technologies	
	229	Susmita Kaushik	susmita.kaushik@blazeclan.com	Associate Director - People & Culture	Blazeclan Technologies	
	230	Yashwanth Salian	yashwanths@blubirch.com	Head Of Human Resources & Administration	Blubirch	
	231	Madhavee Singh	madhavee.singh@blucognition.com	Human Resource Manager- Head	bluCognition	
	232	Rohit Singh	rohit.singh@blucognition.ai	Head of Talent Acquisition	bluCognition	
	233	Kalyani Pendharkar	kalyani.pendharkar@theblueflamelabs.com	Head of Talent Acquisition	Blue Flame Labs	
	234	Suva Dasgupta	suva.dasgupta@theblueflamelabs.com	Director Human Resources	Blue Flame Labs	
	235	Zia Alam	zia.alam@bluepineapple.io	Chief People Officer	bluepineapple	
	236	Shreesh Katti	shreesh_katti@bluerose-tech.com	Senior Vice President - Staffing	BlueRose Technologies	
	237	Sharad Srivastava	sharad.srivastava@blumeglobal.com	Senior Director-HR	Blume Global	
	238	Sridhar Srinivasan	sridhar.srinivasan@boardex.com	Head - HR	BoardEx	
	239	Arun Kumar	arun.kumar@bobtechsolutions.com	HEAD - Human Resources & Operations	BOB Tech Solutions	
	240	Roopa Rajesh	roopa.rajesh@bobcares.com	Head HR	Bobcares	
	241	Malathi Premkumar	malathip@boston-technology.com	Vice President - Human Resources	Boston Technology Corporation	
	242	Naveen Sounderrajan	naveen.s@bourntec.com	Head of Talent Acquisition - India , EMEA & US	Bourntec Solutions Inc	
	243	Naindeep Kaur	naindeep.kaur@bpktechmail.com	Recruitment/Talent Acquisition Head	BPK Technologies	
	244	Anju Tyagi	anju.tyagi@bpoconvergence.com	Head of HR	BPO Convergence	
	245	Ashok Tripathy	ashok.tripathy@bpoconvergence.com	PRINCIPAL CONSULTANT & GROUP HEAD HR	BPO Convergence	
	246	Devanshi Shah	devanshi@brainerhub.com	Head of HR & Talent Acquisition	BrainerHub Solutions	
	247	Sameera Chowdry	sameera.chowdry@brainly.com	Director, People & Culture - India	Brainly	
	248	Jaya Pandey	jaya.pandey@brainvire.com	Head HR	Brainvire Infotech	
	249	Balaraju Guddinti	balaraju.g@nslhub.com	Head of Talent Acquisition	Brane Enterprises	
	250	Raghava Krishna	raghava.krishna@nslhub.com	Senior Group Solutions Leader (CHRO)	Brane Enterprises	
	251	Renju Nithin	renju.nithin@bridge-global.com	Talent Acquisition Head	Bridge Global	
	252	Preeth Joseph	preeth.joseph@bridgei2i.com	Director - Talent Strategy & Operations	BRIDGEi2i Analytics Solutions	
	253	Monika Save	monika@bridgelabz.com	Head of Talent Acquisition and HR Operations	BridgeLabz	
	254	Donna Ellies	donna.ellies@br.iq	Sr. Director, People Operations - India	Briq	
	255	Shailender Nr	shailender@buddi.ai	Director Of Operations and HR	BUDDI AI	
	256	Sudhaa Veerappan	sudhaav@buddi.ai	Consulting HR Head	BUDDI AI	
	257	Vijay Kumar	vijay.kumar@bukuwarung.com	Head of Global Talent Acquisition	BukuWarung	
	258	Robin B	robin@burgeonits.net	Director Of Recruiting	BURGEON IT SERVICES	
	259	Sunder Rangarajan	sunder.rangarajan@businessintegra.com	Vice President - HR & Operations	Business Integra Inc	
	260	Sangita Nair	sangita.nair@buyerforesight.com	Director - HR	BuyerForesight	
	261	Ety Garg	ety@buzzclan.com	Associate Director-Talent Acquisition	BuzzClan	
	262	Chiranjeevi Pannem	chiranjeevip@byteridge.com	Chief People Officer	Byteridge	
	263	Deepak Ramakrishnan	deepak.ramakrishnan@csquare.in	Head Of Human Resources	C-Square Info Solutions	
	264	Kajal Tuteja	kajal.tuteja@csquare.in	HR Head	C-Square Info Solutions	
	265	Shubhra Narang	shubhra.narang@c-zentrix.com	Head of HR	C-Zentrix	
	266	Sathyanarayanan Reddipalli	sathyanarayanan@c1exchange.com	Head HR & Talent Acquisition	C1X	
	267	Crp Saurabh	saurabh@caastle.com	Head of Total Rewards and People Operations	CaaStle	
	268	Uday Kumar	udaykumar@cadmaxx.com	Vice President Staffing	Cadmaxx Solutions	
	269	Mukta Dewan	mukta.dewan@caeliusconsulting.com	Chief People Officer at Caelius Consulting	Caelius Consulting	
	270	Vignesh Manickam	vignesh.m@myhealthchampion.com	HR Director - India	Calcium	
	271	Vaidyanathan P	vaidyanathan@calsof.com	Head - HR	California Software	
	272	Sirisha P	sp@calliduscloud.com	Director, HR & Talent - India	CallidusCloud	
	273	Happy Vachhani	happy@capermint.com	Head Of Human Resources	Capermint Technologies	
	274	Anita Mourya	anita.mourya@capricot.com	PS to Chairman / Director - HR	Capricot Technologies	
	275	Anand Soni	anand@capsitech.com	Talent Acquisition Head	Capsitech	
	276	Pearl Dsouza	pdsouza@cartesianconsulting.com	Head - Human Resources	Cartesian Consulting	
	277	Fabiana Sobers	fabiana.sobers@cashapona.com	Vice President Human Resources	Cashapona Technologies	
	278	Leela Madhuri	leela.madhuri@cashapona.com	Head Of Recruitment	Cashapona Technologies	
	279	Shhweta Joshi	shhweta@cashkaro.com	Head : Talent Acquisition & Employer Branding	CashKaro.com	
	280	Chinmoy Roy	chinmoy.roy@catalyst-us.com	Head Human Resources	Catalyst Business Solutions	
	281	Pratyush Sinha	pratyush.sinha@catalystone.com	Head Of Human Resources India	CatalystOne Solutions	
	282	Sandhya Nair	snair@catchpoint.com	Director - HR	Catchpoint	
	283	Neha Sharna	neha.sharma@cavisson.com	HR Head	Cavisson Systems,	
	284	Neeraj Sharma	neerajsharma@cavistatech.com	Director People Operations, India	Cavista	
	285	Priyanka Basak	priyanka.basak@cbnits.com	Head of Recruitment	CBNITS	
	286	Sam Manohar	smanohar@cdcsoftware.com	Director, Human Resources	CDC Software	
	287	Vimal Balsara	vimal.balsara@cdpindia.com	Head Human Resource and Administration	CDP India	
	288	Syed Mehandi	syedmehandi@cedcoss.com	Head Of Human Resources	CEDCOSS Technologies	
	289	Divya P	divyap@cegonsoft.com	HR Head	Cegonsoft	
	290	Sakshi Themaskar	sakshi.themaskar@ceinsys.com	Head of HR	Ceinsys Tech	
	291	Divya Pant	divya.p@ceipal.com	AVP - HR	CEIPAL Corp.	
	292	Shashikant Acharya	shashikanta@celcomsolutions.com	Director Talent Acquisition	Celcom Solutions Global	
	293	Sujatha G	sujathag@celcomsolutions.com	Director - HR	Celcom Solutions Global	
	294	Manisha Dash	manisha.dash@celigo.com	Director India, Human Resources	Celigo	
	295	Rajiv Kumar	rkumar@cendyn.com	Director - Talent Acquisition	Cendyn	
	296	Harshida Bhamare	harshida@cctech.co.in	Head HR & operations	Centre for Computational Technologies	
	297	Gyan Dash	gyan@centroxy.com	Head of Talent Acquisition	Centroxy	
	298	Ramkrishna Sahu	ramkrishna.sahu@ceptes.com	Head of Talent Acquisition	CEPTES Software	
	299	Leena Arora	leena@getcerta.com	Head Of Human Resources	Certa	
	300	Rishabh	rishabhkalra@cetpainfotech.com	Recruitments Delivery Head	CETPA Infotech	
	301	Venkatesan Srinivasan	vs@changepond.com	Vice President Human Resources & HR Head	Changepond Technologies	
	302	Sandip Raj	sandip.raj@cheersin.com	AVP - Talent Acquisition & Engagement	Cheers Interactive	
	303	Priyanka Madhala	priyankam@chimeratechnologies.com	Head of Talent Acquisition	Chimera Technologies	
	304	Snehdeep Ambarkar	snehdeep.ambarkar@cientra.com	Vice President - Talent Acquisition	Cientra	
	305	Peterson Pereira	peterson.pereira@cignex.com	Associate Vice President Human Resources	CIGNEX Datamatics	
	306	Rajni Noronha	rajni.noronha@cignex.com	AVP Talent Acquisition	CIGNEX Datamatics	
	307	Bharat Rao	bharat@ka-nex.com	Director - Talent Acquisition	CK Solutions	
	308	Madhura Lanjekar	madhura.lanjekar@clariontechnologies.co.in	Vice President Human Resources	Clarion Technologies	
	309	Preeti Phansalkar	preeti.phansalkar@clariontech.com	Head Of Human Resources	Clarion Technologies	
	310	Santosh Kamble	santosh.kamble@clariontechnologies.co.in	Head of Talent Acquisition	Clarion Technologies	
	311	Brij Kishore	brij@claritusconsulting.com	Vice President Recruitment Operations	Claritus Management Consulting	
	312	Pragya Parashar	pragya.parashar@claritusconsulting.com	Head of HR	Claritus Management Consulting	
	313	Ruchi Banerjee	ruchi@clearbit.com	Head of People Engagement and Inclusion	Clearbit	
	314	Anita Sidhwani	asidhwani@cleo.com	Head HR	Cleo	
	315	Heena Bawa	heena@clevertap.com	Director HR	CleverTap	
	316	Prashant Parashar	prashant.parashar@clevertap.com	Chief Human Resources Officer	CleverTap	
	317	Divya Dang	divya.dang@cloudanalogy.com	Sr. HR Head	Cloud Analogy	
	318	Divya Jethi	divya.jethi@cloudanalogy.com	Sr. HR Head	Cloud Analogy	
	319	Sabina Juvekar	sabina.juvekar@cloudaction.com	Chief People Officer	Cloudaction	
	320	Kulvir Kaur	kulvir.kaur@cloudeq.com	HOD Human Resource	cloudEQ	
	321	Manjiri Patel-Shinde	manjiri.shinde@cloudmoyo.com	Vice President Global HR	CloudMoyo	
	322	Sarabjeet Gill	sarabjeet.gill@cloudmoyo.com	Associate Director - HR and Talent Acquisition	CloudMoyo	
	323	Shamli Krishnan	shamli.krishnan@cloudmoyo.com	Associate Director - Talent Acquisition	CloudMoyo	
	324	Joshua Henry	joshua.henry@cloudsek.com	Associate Vice President - Talent Acquisition	CloudSEK	
	325	Ramya Ramachandran	ramya.ramachandran@cloudsek.com	Associate Vice President - Talent Acquisition	CloudSEK	
	326	Hemraj Desai	hemraj@cloudthat.in	Director HR and OD	CloudThat	
	327	Kanhaiya Sharma	kanhaiya@cloudthing.com	Head Of Human Resources	cloudThing	
	328	Vedha Bharathi	vedha@cloudthing.com	Chief People Officer	cloudThing	
	329	Logesh Chandramoorthy	logesh@clumio.com	Head of Talent Acquisition	Clumio	
	330	Vishwanath Belliappa	vishwanath.belliappa@codecraft.co.in	Chief People Officer	CodeCraft Technologies	
	331	Rekha Poonacha	rekhap@codeforce.com	Head of Human Resources	CodeForce 360	
	332	Sharma Rohit	sharmar@codeforce.com	Head of Client & Talent Acquisition	CodeForce 360	
	333	Shilpa Mahajan	shilpam@codeforce.com	Director Talent Acquisition	CodeForce 360	
	334	Ritika Jha	ritika.jha@codelogicx.com	Head Of Human Resources	Codelogicx	
	335	Tanuj Uppal	tanuj@codersbrain.com	HR Head	CodersBrain	
	336	Vipin Ravindranath	vipin.r@codilar.com	Head of Talent Acquisition	Codilar Technologies	
	337	Harishankher Selvaraj	harishankher@codingmart.com	Lead Talent Acquisition (Interview Head)	Codingmart Technologies	
	338	Sapna Soni	sapna@codingmart.com	Head of Human Resources	Codingmart Technologies	
	339	Rajesh Balasubramanian	rajeshb@coffeebeans.io	Head of Talent Acquisition	CoffeeBeans Consulting	
	340	Padmaja Arya	padmajasingh.arya@cogencis.com	Head - Human Resources	Cogencis Information Services	
	341	Lata Kohli	lata.kohli@cogentinfo.com	Director - US HR Operations	COGENT Infotech	
	342	Sheetal Biswas	sbiswas@cognitusconsulting.com	HR - Global Head (CHRO)	Cognitus	
	343	Archana Shinde	archana.shinde@cognologix.com	Head Human Resources Department	Cognologix Technologies	
	344	Mamta	mamta@cognustechnology.com	Chief Human Resources Officer	Cognus Technology	
	345	Mayur Sisodiya	mayur.sisodiya@collabera.com	Associate Delivery Director - Talent Acquisition	Collabera India	
	346	Srinivas P	srinivas@collaboratesolutions.com	Head - Talent Aquisation	Collaborate Solutions	
	347	Cheryl Anjelo	cheryl.anjelo@colortokens.com	Director - HR	ColorTokens	
	348	Savitha R	savitha.r@colortokens.com	Director - Talent Acquisition	ColorTokens	
	349	Shiva Prasad	shiva@comakeit.com	Director - Human Resources	coMakeIT	
	350	Ruchika Sawhney	ruchika.sawhney@cometchat.com	Senior Director Human Resources	CometChat	
	351	Jyoti Gouri	jyoti.g@commerceiq.ai	Director - HR	CommerceIQ	
	352	Tanvi	tanvi.s@commerceiq.ai	Principal - India Recruiting Head	CommerceIQ	
	353	Ankit Shah	ankit@compumatrice.com	Head of HR & Operations	CompuMatrice	
	354	Barkha Agrawal	bagrawal@cpg-inc.com	Director-Talent Acquisition	Computer Power Group	
	355	Aravind Chandrasekar	aravind.chandrasekar@tigerspike.com	Associate Director, Talent Acquisition	Concentrix Tigerspike	
	356	Sharanya Govind	sharanya.g@concord.net	Director - Human Resources (India)	Concord Technologies	
	357	Ankita Rajrishi	ankita.rajrishi@condecosoftware.com	Head of Shared Services - Talent Acquisition	Condeco	
	358	Garima Rathi	garima.rathi@condecosoftware.com	Head of Shared Services - Human Resources	Condeco	
	359	Priya Nair	priya@congruentindia.com	Director - Human Resources	Congruent Info-Tech	
	360	Kriti A	kriti@consummatetechnologies.com	Head HR	Consummate Technologies	
	361	Varsha Rathore	varsha@consystentinfo.com	Head of Talent Acquisition	Consystent Infotech	
	362	Suruchi Khosla	skhosla@contecglobal.com	Head -HR(India)	Contec Global	
	363	Yesha Brahmbhatt	yesha.brahmbhatt@contentstack.com	Associate Director Human Resources	Contentstack	
	364	Sheetal Deshmukh	sheetal.deshmukh@contractpodai.com	Associate Director Human Resources	ContractPodAi	
	365	Sanjay Shanmugaum	sshanmugaum@controlcase.com	Vice President - Global Head - HR & Admin	ControlCase	
	366	Vijay Kumar	vijaykumar.r@contus.in	Director Human Resources Services	Contus	
	367	Deepti Lewis	dlewis@conviva.com	HR Director	Conviva	
	368	Vikram Kallianpur	vkallianpur@cordys.com	Head-HR & OD, Corporate Services	Cordys	
	369	Saravana Kumar	saravanakumar@coresolutionsinc.com	Head - Human Resource and Administration	Core Solutions,	
	370	Saravana Padmanabhan	spadmanabhan@coresolutionsinc.com	Head - Human Resource and Administration	Core Solutions,	
	371	Pankaj Chopra	pankaj.chopra@corecard.com	Head of Talent Acquisition	CoreCard India	
	372	Omkar Patwardhan	omkarp@coreflexsolutions.com	HR Head	CoreFlex Solutions	
	373	Murugessan Panchatcharam	pmurugesan@corenttech.com	Director - Human Resources & Facilities	Corent Technology	
	374	Anil K	anil.k@corestack.io	Human Resources Director	CoreStack	
	375	Durga Akula	durga.akula@cotelligent.com	Associate Director - HR	Cotelligent	
	376	Gita Madhuri	gita.madhuri@covalenseglobal.com	Director - HR and Talent Acquisition	Covalense Global	
	377	Preety Mehra	preety@cozentus.com	Head - Talent Acquisition	Cozentus	
	378	Atul Kanknala	atul.kanknala@craveinfotech.com	Head HR- Talent Acquisition and Strategy	Crave InfoTech	
	379	Naveen Pillai	naveen@crayondata.com	Vice President - Human Resources	Crayon Data	
	380	Sujee Shalini	sujee@crayondata.com	Head of Talent Acquisition	Crayon Data	
	381	Pragati Tilve	pragati.tilve@creativecapsule.com	Director of Human Resources	Creative Capsule	
	382	Ratan Dalal	ratan.dalal@global-csg.com	Head Of Digital Recruitment - US, Europe	Creative Synergies Group	
	383	Dipali Chavan	dipalichavan@credenceanalytics.com	Head HR	Credence Analytics	
	384	Siddharth Gaur	siddharth.gaur@credencys.com	Head HR	Credencys Solutions	
	385	Sanjeev Rana	sanjeev.rana@crestechsoftware.com	AVP HR	Crestech Software	
	386	Dinanath Gokhale	dgokhale@crgroup.co.in	Director - HR	CRG Solutions	
	387	Pranab Mishra	pranab.mishra@criticalriver.com	Human Resources Director	CriticalRiver	
	388	Suresh Tedlapu	sureshkumar.tedlapu@criticalriver.com	Director of Recruiting Operations - India & APAC	CriticalRiver	
	389	Ravi K	ravi.k@crmit.com	Global Recruitment Head	CRMIT Solutions	
	390	Ravi Kasinadhuni	ravi.kasinadhuni@crmit.com	Head HR	CRMIT Solutions	
	391	Ravi Shankar	ravi.shankar@crmit.com	Global Recruitment Head	CRMIT Solutions	
	392	Siddharth Balakrishnan	siddharth.balakrishnan@crmit.com	Director - Human Resources	CRMIT Solutions	
	393	Lipika Mohanty	lipika.mohanty@crmnext.com	Global HR Director	CRMNEXT	
	394	Meenakshi Banerjee	meenakshi.banerjee@crmnext.in	Vice President Human Resources	CRMNEXT	
	395	Nandakishore Padmanabhan	nandakishore.padmanabhan@crmnext.com	Vice President - People & Culture	CRMNEXT	
	396	Ramesh Talwar	ramesh.talwar@crmnext.com	VP Admin & HR	CRMNEXT	
	397	Manasi Kelkar	manasi.kelkar@cropin.com	VP - Human Resources	CropIn Technology	
	398	Vinay Kn	vinay.kn@cropin.com	Head of Talent Acquisition	CropIn Technology	
	399	Soundarya Murugaiyan	soundarya.murugaiyan@cts.co	Human Resources Director	CTS	
	400	Usha Ns	usha@cube84.com	Human Resources Director	CUBE84	
	401	Ananthram Iyer	ananthram.iyer@customercentria.com	Vice President HR	Customer Centria	
	402	Jayakrishnan M	jay@customerxps.com	Director - Head of HR	CustomerXPs	
	403	Smitha Bijith	smitha@cybersecit.net	HR Manager & Operations Head	CyberSec Consulting	
	404	Poonam Sharma	poonam.b@cynetsystems.com	Director Human Resources	Cynet Systems Inc	
	405	Pushpendra Yadav	pushpendra.y@cynetsystems.com	Director - Recruiting Operations (RecOps)	Cynet Systems Inc	
	406	Shelton Banerjee	shelton.b@cynetsystems.com	Director - Staffing Services	Cynet Systems Inc	
	407	Sonali Sharma	hr@cyntexa.com	HR Head	Cyntexa	
	408	Nidhi Ruparel	nidhi@cystemslogic.com	Recruitment & Operations Head	Cystems Logic Inc	
	409	Prerna Kohli	prerna.kohli@cyware.com	Director Human Resources (India)	Cyware	
	410	Tanul Jain	tanul.jain@cyware.com	Head of Talent Acquisition	Cyware	
	411	Priya Malhotra	priya.malhotra@daffodilsw.com	AVP Human Resources	Daffodil Software	
	412	Govind Bhandari	govind.bhandari@daloopa.com	Head of Human Resources & Talent Acquisition	Daloopa	
	413	Pardeep Pahal	pardeepp@damcogroup.com	VP Global HR	Damco Solutions	
	414	Rajat Bansal	rajatb@damcogroup.com	Associate Vice President- HR	Damco Solutions	
	415	Rajesh Malhotra	rajeshm@damcogroup.com	AVP Staffing and Fixed Bid Projects	Damco Solutions	
	416	Surinder Cheema	surinderc@damcogroup.com	Associate Director : Recruitments	Damco Solutions	
	417	Anindita Ranjan	anindita.ranjan@3ds.com	Director HR	Dassault Systems	
	418	Pradeep R	pradeep_r@3dplmsoftware.com	Head of HR (India)	Dassault Systems	
	419	Shirish Bavdekar	shirish.bavdekar@3ds.com	Head of Talent Acquisition (India)	Dassault Systems	
	420	Aru Uppal	aru.uppal@datdyn.com	Global Head Human Resources	Data Dynamics	
	421	Anirban Ghosh	aghosh@trimaxamericas.com	Head - Human Resources Management	Data Glove	
	422	Mohamed Hussain	mhussain@trimaxamericas.com	HEAD TALENT ACQUISITION - INDIA	Data Glove	
	423	Tanu Saxena	tsaxena@trimaxamericas.com	Talent Acquisition head	Data Glove	
	424	Dhinesh Shankar	dshankar@dataintensity.com	AVP - HR & Admin	Data Intensity	
	425	Shalini Garlapally	shalini.garlapally@dataintensity.com	Director - HR	Data Intensity	
	426	Rashmme Eshwar	rashmme.eshwar@datacore.com	Senior Director - APAC Human Resources	DataCore Software	
	427	Sailaja Saranu	ssaranu@dataeconomy.io	Head Of Human Resources	DATAECONOMY	
	428	Dipthi Rajagopal	dipthir@dckap.com	Head - Human Resources	DCKAP	
	429	Priyanka Sharma	priyanka.s@decimaltech.com	AVP HR (Talent and Culture)	Decimal Technologies	
	430	Shikha Dhillon	shikha.dhillon@decimaltech.com	Head of HR	Decimal Technologies	
	431	Ashwani Bhargava	ashwanib@decisionminds.com	Director Recruitment	Decision Minds	
	432	Supriya Shonu	supriya.shonu@deeptek.ai	Human Resources Director	DeepTek	
	433	Angel Mathew	angel.mathew@delphix.com	Human Resources Director	Delphix	
	434	Mohini Bansal	mbansal@deqode.com	Head Of Recruitment	Deqode	
	435	Shalini James	shalini.james@deque.com	Associate Director Human Resources & Operations	Deque Systems	
	436	Anuj Agarwal	anuj@deskera.com	VP, Corporate Operations & HR	Deskera	
	437	Shweta Dugad	shweta@desteksolutions.com	Head - HR & Operations	Destek Infosolutions	
	438	Gripson Martes	gripson.martes@detecttechnologies.com	Head Of Human Resources	Detect Technologies	
	439	Himanshu Raina	himanshu@ditserv.com	Vice President Human Resources	DEV IT SERV	
	440	Phanidhar Sangam	phanidhars@dextara.com	Director HR	Dextara Digital	
	441	Kajal Gupta	hr@dhaninfo.biz	Hr & Admin Director	DhanInfo	
	442	Bhavik Kaklotar	bkaklotar@diabsolut.com	Head Global Talent Acquisition	Diabsolut Inc	
	443	Parma Dutta	pdutta@diabsolut.com	Chief People Officer	Diabsolut Inc	
	444	Divya Keshav	divya.k@diamondpick.com	Head of Human Resources Operations	Diamondpick	
	445	Divya Nitin	divya@diamondpick.com	Head Of Human Resources	Diamondpick	
	446	Pallavi Sharma	pallavi.sharma@digimantra.com	Head of Human Resources Operations	DigiMantra Labs	
	447	Pradeep Raju	pradeep@digiryte.com	Vice President - People Operations	Digiryte	
	448	Piyali Basu	piyalib@digitalaptech.com	Head - Human Resource	Digital Aptech	
	449	Huma Sayed	huma@dctinc.com	Head - Human Resources	Digital Convergence Technologies	
	450	Rahul Bansode	rahul.bansode@digitalf5.com	Head - Performance & Solutions E-commerce	Digital Refresh Networks	
	451	Shivani Khanna	khanna.shivani@digitate.com	Head HR	Digitate	
	452	Shraddha Patil	shraddha@digite.com	Vice President- People Operations	Digite,	
	453	Piyush Naik	piyush.naik@digivalet.com	AVP-Talent Acquisition	DigiValet	
	454	Joseph Francis	joseph@vdartinc.com	Head Human Resources Development	Dimiour	
	455	Nishtha Sareen	nishtha.sareen@dionglobal.com	VP - Human Resources	Dion Global Solutions	
	456	Prashant Saxena	prashant@diverselynx.com	India Recruitment Head	Diverse Lynx	
	457	Sujeet Rao	sujeet.rao@diverselynx.com	AVP-HR	Diverse Lynx	
	458	Deepak Singh	deepak@dixitindia.com	Head of HR	Dixit Infotech Services	
	459	Syed Husain	syed@dixitindia.com	Head HR	Dixit Infotech Services	
	460	Sharon Nijhawan	sharon.nijhawan@dltlabs.io	Head of HR	DLT Labs	
	461	Ritika Jatana	rjatana@docmation.com	Director of HR	Docmation	
	462	Ritika Malhotra	ritika.malhotra@dotpe.in	Associate Director Human Resources	DotPe	
	463	Supriya Lulla	supriya.lulla@doyen.co.in	Head - Human Resources	Doyen Infosolutions	
	464	Maria Fernandes	maria.fernandes@draup.com	Associate Director - HR	Draup	
	465	Rajani Siddhartha	rajani.siddhartha@dreamorbit.com	Vice President - Human Resource	DreamOrbit	
	466	Manisha	manisha@dreamsoft4u.com	VP - HR Department	DreamSoft4u	
	467	Rajesh A	rajesh@dremio.com	Director HR - India	Dremio	
	468	Sanjeev Kumar	sanjeev.kumar@drishinfo.com	Director(HR and Special Projects)	Drish Infotech	
	469	Sourabh Rai	s.rai@drishti.com	Head Of Performance Engineering	Drishti	
	470	Anandhi Srinivasan	anandhi.s@dsmsoft.com	Associate Vice President - Human Resources	DSM SOFT	
	471	Vinibha S	vinibha@dsrc.com	Head of HR	DSRC	
	472	Deepa Palaniswamy	deepa.palaniswamy@ducenit.com	Center Head India / Operations and Global HR	Ducen	
	473	Ram Varadamoorthy	ram.varadamoorthy@ducenit.com	Director Talent Acquisition	Ducen	
	474	Vram V	vram.v@ducenit.com	Director Talent Acquisition	Ducen	
	475	Bhavin Sanghavi	bhavin@mydukaan.io	Head - Talent Acquisition	Dukaan	
	476	Devi Reddy	dreddy@dvginteractive.com	Head - Talent Acquisition	DVG	
	477	Vijay Pundir	vijaypundir@dwao.in	Group Head - Human Resources	DWAO	
	478	Neha Velankar	neha@dynalogindia.com	Head Of Human Resources & Administration	Dynalog India	
	479	Naveen Wadhawan	naveen@dynpro.com	Director - Talent Acquisition	DynPro,	
	480	Shefali Lall	shefali@dynproindia.com	Vice President Human Resources	DynPro,	
	481	Umesh Yadav	umesh.yadav@dynpro.com	Director Talent Acquisition	DynPro,	
	482	Yashpal Yadav	yashpal.yadav@dynproindia.com	Head Of Talent Management	DynPro,	
	483	Gayatri Shanker	gayatri@dyooti.com	Head, Communications, People & Culture	Dyooti	
	484	Nandni Bhatnagar	nbhatnagar@e-emphasys.com	Associate Director Human Resources	e-Emphasys Technologies	
	485	Ranju Nair	ranju@eateam.com	Director Of Recruiting	EA Team Inc	
	486	Sreepriya	sreepriya@eagleview.co.in	Head HR	EagleView India	
	487	Mittal Patel	m.patel@easternenterprise.com	Head - Talent Acquisition	Eastern Enterprise	
	488	Rakshita Shharma	rakshita@easyeat.ai	CHRO	Easy Eat AI	
	489	Sapna Sukhrani	sapna.sukhrani@milessoft.com	Head HR	EbixCash Financial Technologies	
	490	Sharvari Lingayat	sharvari.lingayat@milessoft.com	Vice President Human Resources	EbixCash Financial Technologies	
	491	Chandrasekhar Gv	cgv@eclinicalsol.com	Vice President Human Resources	eClinical Solutions	
	492	Supriya A	supriya.a@ecolabdigitalcenter.in	Senior Director - HR	Ecolab Digital Center	
	493	Tasneem Mujir	tasneem.mujir@ecolab.com	Associate Director Human Resources	Ecolab Digital Center	
	494	Robin Thomas	robin.thomas@ecsfin.com	Global Human Resources Director	ECS Fin	
	495	Bharti Negi	bharti.negi@edifecs.com	Sr. Director, Recruitment, Talent Acquisition	Edifecs	
	496	Ramya Menon	ramya.menon@edifecs.com	Head - People& Culture, India	Edifecs	
	497	Shams Tabrez	shams.tabrez@editorialistyx.com	Director People & Culture	Editorialist	
	498	Subhakant Das	sdas@edrinfo.com	Head Of Human Resources	EDR Continuous Information	
	499	Ekta Kohli	ekta.kohli@simulationiq.com	VP - HR & Operations	Education Management Solutions	
	500	Manish Sitania	msitania@egain.com	Worldwide Head of HR	eGain Corporation	
	501	Kanika Gupta	kanika@eglogics.com	Human Resources Director	EGlogics Softech	
	502	Pavan K	pk@eightfold.ai	Director - Talent Acquisition	Eightfold	
	503	Arvind Sadasivan	arvind.sadasivan@ekaplus.com	Director Global Human Resources	Eka Software Solutions	
	504	Satyodai Krovi	satyodai.krovi@eka1.com	Director, Global Talent Acquisition	Eka Software Solutions	
	505	Shuchi Nijhawan	shuchi.nijhawan@ekaplus.com	Sr Vice President- Global Human Resources	Eka Software Solutions	
	506	Sumarani Sarkar	sumarani.y@ekaplus.com	Director - Global Human Resources	Eka Software Solutions	
	507	Vani Sathvik	vani.sathvik@ekaplus.com	Vice President - HR & Admin	Eka Software Solutions	
	508	Rajesh Kethepalle	rajesh.kethepalle@electrifai.net	Director Talent Acquisition	ElectrifAi	
	509	Giridhar D	giridhar.d@e5.ai	Head Of Operations & HR	Element5	
	510	Mugdha Wagh	mugdha.wagh@ellicium.com	Head Of Talent Management	Ellicium Solutions	
	511	Kunal	kunal@elsner.com	Head - HR	Elsner Technologies	
	512	Swati M	swati_m@elsner.com	Head of HR	Elsner Technologies	
	513	Utsav Kothari	utsav.kothari@embee.co.in	AVP- Human Resources	Embee Software	
	514	Monika Koul	monika@embitel.com	Head l Sr. Director- HR	Embitel Technologies	
	515	Rana Bose	rana.bose@emds.com	Human Resources Director	eMDs	
	516	Somdatta Gupta	sgupta@encoress.com	Head Human Resources	Encore Software Services,	
	517	Anchal Rastogi	anrastogi@enhanceit.com	AVP Recruitments	Enhance IT	
	518	Nandini Aggarwal	nandini.aggarwal@enhancesys.com	Chief Human Resources Officer	Enhancesys Innovations	
	519	Durga Androthu	durgaprasada@proarch.com	Head of Human Resources	Enhops	
	520	Surbhi Gupta	surbhi.gupta@enquero.com	Head- Talent Acquisition India	Enquero	
	521	Phani Kalyan	phani@eminds.ai	Director of Talent Engineering	Enterprise Minds	
	522	Shivani Naidu	shivani@eminds.ai	Director of Talent Acquisition	Enterprise Minds	
	523	Pavithra Bopanna	pavithra.bopanna@entropiktech.com	Director Human Resources	Entropik Tech	
	524	Arindam Kar	arindam.kar@yodlee.com	Head-Talent Acquisition	Envestnet	
	525	Latchoumanan Tirounavoucarassou	ltirounavoucarassou@yodlee.com	Director Operations - Performance	Envestnet	
	526	Madhvi Arora	madhvi.arora@yodlee.com	Vice President & Head HR	Envestnet	
	527	Poornima P	pp@yodlee.com	HR Director	Envestnet	
	528	Sathish Chinnaiah	schinnaiah@yodlee.com	Human Resources Director	Envestnet	
	529	Swathi S	swathi.s@envoyglobal.com	Director Human Resources	Envoy Global	
	530	Govind Raj	govind@eoxvantage.com	Head Of Human Resources	EOX Vantage	
	531	Stephen Taylor	stephen@eoxvantage.com	Head Human Resources Department	EOX Vantage	
	532	Ravitha Devasenapathy	ravitha.devasenapathy@epikindifi.com	Chief Human Resources Officer	EPIKInDiFi	
	533	Mrugesh Maisuriya	mrugesh.maisuriya@procuretiger.com	Head Of HR- Talent Acquisition and Management	eProcurement Technologies	
	534	Preeti Mathur	preeti.mathur@eproductivitysoftware.com	Director HR for APAC	eProductivity Software	
	535	Garima Pandey	garima.pandey@epsoftinc.com	HR-Director	EPSoft	
	536	Rustom Taraporevala	rustom@1eq.com	Director Talent Management	eQ Technologic	
	537	Sameer Kumar	sameer.kumar@equifax.com	AVP - Talent Acquisition	Equifax India	
	538	Shalini Lal	shalini@erelego.com	Head Of Human Resources	eReleGo Technologies	
	539	Anupama Dasgupta	anupamadg@erevmax.com	SVP Human Resources	eRevMax	
	540	Deepa Mukherjee	deepa.mukherjee@esri.in	Chief People Officer & Vice President	Esri India	
	541	Mandeep Virdi	mandeep.virdi@esri.in	Head of Human Resources	Esri India	
	542	Naveen Shankar	naveen.shankar@estuate.com	Associate Director - Talent Acquisition	Estuate,	
	543	Diksha Sisodia	diksha.sisodia@eternussolutions.com	Associate Director Human Resources	Eternus	
	544	Cireesha Mailavarapu	cireesha.m@etisbew.com	Vice President - Global HR & Alliances	ETG Digital	
	545	Deepthi Vorem	deepthi.v@etggs.com	Director - Human Resources	ETG Digital	
	546	Ashwini Ashok	ashwini.ashok@eton-solutions.com	Head of Human Resources	Eton Solutions LP	
	547	Emilio Rodrigues	emilio@etouch.net	Director - HR	eTouch Systems	
	548	Supreeth Gudla	supreeth.gudla@euclidinnovations.com	Pan India Head - Staffing and Operations	Euclid Innovations	
	549	Nirmiti Choudhari	nirmiti.hr@eventbeep.com	Head Of Human Resources	EventBeep	
	550	Nidhuraj Prasannarajan	nidhuraj@everest.engineering	Recruitment Head/Operations	EverestEngineering	
	551	Pankaj Singh	psingh@everquote.com	Associate Director - People Operations	EverQuote	
	552	Deborah Passanha	dpassanha@everydayhealth.com	Director of Operations / HR Head	Everyday Health Group	
	553	Ramesh Mantana	rmantana@evoketechnologies.com	Vice President - HR & Ops	Evoke Technologies	
	554	Sharmilaa Kannan	sharmilaa.k@evolgence.com	Vice President- HR & Customer Success	Evolgence Telecom Systems	
	555	Manda Kishore	manda.kishore@evolutyz.com	Head - Recruitments	Evolutyz Corp	
	556	Kumuda Panda	kumuda.panda@evonsys.com	Director HR	EvonSys	
	557	Murali Krishnamoorthy	murali.k@excelacom.in	Head - Human Resources	Excelacom Technologies	
	558	Gitanjali Venkatesh	gitanjali.venkatesh@excelenciaconsulting.com	Head of Talent Acquisition	Excelencia	
	559	Hari Paramatmuni	harikishore.p@excelra.com	Head Talent Acquisition and Development	Excelra	
	560	Mahendra Singh	mahendra.singh@excelra.com	Vice President - HR	Excelra	
	561	Rajendra Bn	rajendra.bn@exilant.com	Head HR	EXILANT Technologies	
	562	Pavan Kumar	pavank@eximiusdesign.com	Associate Director- Talent Acquisition	Eximius Design	
	563	Timcy Bansal	timcy@exlyapp.com	Head of Talent Acquisition	Exly	
	564	Sushil Kumar	sushil.kumar@expediteinc.com	Associate Director - Human Resources	Expedite Technology Solutions	
	565	Jasinta Francis	jasinta@experience.com	Director - Human Resources	Experience.com	
	566	Celina Joseph	celina.joseph@extentia.com	Vice President - Human Resources	Extentia Information Technology	
	567	Nitya K	nk@ezesoft.com	Director, Human Resources	Eze Software	
	568	Disha Bali	disha.bali@remitonline.info	Head HR	Fable Fintech	
	569	Facile	vineet.shah@facileserv.com	Head HR	Facile Services	
	570	Nithyanandham Ravi	nithyanandham@facilio.com	Human Resources Director	Facilio	
	571	Vaibhav	vaibhav.khanna@fci-ccm.com	Chief People Officer	FCI CCM	
	572	Chetan Verma	cverma@fcsltd.com	Head Recruitment	FCS Software Solutions	
	573	Mallika Poojari	mallika.poojari@featsystems.com	Recruitment Head	Feat Systems	
	574	Pranali Shinde	pranali.shinde@featsystems.com	Head of Human Resources Operations	Feat Systems	
	575	Mrudul Godavarthi	mrudul.k@fssglobal.in	Chief Talent Officer	Federal Soft Systems	
	576	Kishor Pinninti	kishor.p@feuji.com	Vice President Talent Acquisition	Feuji Inc	
	577	Mrudhula Guda	mrudhula.g@feuji.com	HR Head - India	Feuji Inc	
	578	Raghavendra Mesta	raghavendra@fidelisgroup.in	Vice President - HR	Fidelis Corporate Solutions	
	579	Priyanka Grover	priyanka.grover@fifthnote.co	Function Head - Culture Building	fifthnote	
	580	Sanchi Saxena	sanchis@fiftyfivetech.io	Head of HR	FiftyFive Technologies	
	581	Annapurna A	annapurna.a@fime.com	Head of HR & Admn	FIME	
	582	Ranjana Anand	ranjana@finessedirect.com	Vice President Human Resources	Finesse Global	
	583	Neena Rajdev	neena@fintinc.com	Director of HR, L&D & Administration.	Fint Solutions	
	584	Varsha Sethia	varsha.sethia@fintellix.com	Director - Human Resources	Fintellix Solutions	
	585	Pasha Amjad	amjad.pasha@fiorano.com	Head - HR & Operations.	Fiorano Software	
	586	Gautam Kar	gautam@firstconnectsolutions.com	Chief People Officer	FirstConnect Solutions	
	587	Sourabh Jain	sourabh.jain@fiserv.com	hr head	Fiserv Insurance Solutions	
	588	Nishita Algubelli	nishita@fissionlabs.com	HR & TA Director	Fission Labs	
	589	Rajesh Vadakevetil	rajesh@fissionlabs.com	Head of Talent Acquisition	Fission Labs	
	590	Mary Basu	mary.basu@fivesdigital.com	HR Head	FiveS Digital	
	591	Robin Massey	robin.massey@fivesdigital.com	Associate Director Talent Acquisition	FiveS Digital	
	592	Sharat M	sharat.m@fivesdigital.com	Associate Director HR	FiveS Digital	
	593	Sonia Gahlot	sonia.gahlot@fivesdigital.com	Assistant Vice President Human Resources	FiveS Digital	
	594	Suman Kitawat	suman.kitawat@fivesplash.in	Associate Director Corporate HR Head	FiveS Digital	
	595	Priya Malhotra	priya@flexasoft.com	VP-Staffing	Flexasoft	
	596	Pravin Kankane	pravin.kankane@flo-group.com	Director Human Resources Administration	Flo Group	
	597	Rabi Agrawal	rabi@flobiz.in	Head of HR	FloBiz	
	598	Subrina Lepcha	subrina@flobiz.in	Associate Director - Talent Management	FloBiz	
	599	Priyanka Shukla	priyankashu@flock.com	Head - Total Rewards and HR Analytics	Flock	
	600	Pavan Bodapati	pavan.b@fluentgrid.com	Assistant Vice President Human Resources	Fluentgrid	
	601	Sridhar Marla	sridhar.m@fluentgrid.com	Vice President & Head of HR	Fluentgrid	
	602	Vara Manda	varaprasad.m@fluentgrid.com	Recruitment Head	Fluentgrid	
	603	Anil Ramachandran	anil.kumar@flytxt.com	Head - Global HR	Flytxt	
	604	Sangeetha Jalkam	sangeetha@focussoftnet.com	Head HR	Focus Softnet	
	605	Suresh Aade	suresh.aade@foodhub.com	Head Of Human Resources - India	Foodhub	
	606	Batool Ali	batool.ali@electriphi.ai	Head Of Human Resources	Ford Pro Charging	
	607	Roohi	roohi.syeda@forecastera.com	Global Head of Human Resources	ForecastEra	
	608	Poornima Gowda	poornima.gowda@fortanix.com	Head Of Human Resources	Fortanix	
	609	Chandni Yadav	chandniyadav@ucreate.co.in	Global Head of Talent Acquisition	Founder and Lightning	
	610	Shreelipta Mishra	shreelipta.mishra@blujaysolutions.com	Director-Human Resources	Four Soft	
	611	Neeraj Sharma	neeraj@fourkites.com	Senior Director of Human Resources	FourKites,	
	612	Anil Tomar	anil.tomar@fdsindia.co.in	HR Head	Fourth Dimension Solutions	
	613	Shikha Soni	shikha.soni@franconnect.com	Director, Human Resources	FranConnect	
	614	Neha Sharma	nehasharma@freeskout.com	Head of Human Resources	freeskout	
	615	Harshada Moharil	harshada.moharil@freshgravity.com	Head HR	Fresh Gravity	
	616	Jaisy Augustine	jaisy@freshersworld.com	Head- Recruitment Solutions	Freshersworld.com	
	617	Priyanka Roy	priyanka@freshersworld.com	Head - HR & Operations	Freshersworld.com	
	618	Preetha Somashekar	preetha@frontier.in	Head of Human Resources	Frontier Business systems	
	619	Sourik Syed	sourik.s@frontizo.in	Head-HRBP (Frontizo and Appario)	Frontizo Business Services	
	620	Pandey	pandey@fsltechnologies.com	VP HR	FSL Software Technologies	
	621	Srikrishna	srikrishna@fugoservices.com	Head - HR, Compliance & Quality Control	FUGO Services	
	622	Anjali Sharma	anjali.sharma@fulcrumdigital.com	Director, Global head of L&D	Fulcrum Digital Inc	
	623	Bensely Zachariah	bensely.zachariah@fulcrumdigital.com	Global Head of Human Resources	Fulcrum Digital Inc	
	624	Bensley Zachariah	bensley.zachariah@fulcrumdigital.com	Global Head of Human Resources	Fulcrum Digital Inc	
	625	Priya Bagla	priya.bagla@fullestop.com	HR Director	Fullestop	
	626	Saily Vyas	sailyv@futurismtechnologies.com	Head - Human Resources	Futurism Technologies,	
	627	Mayank Agarwal	mayank.agarwal@gaana.com	Head - HRBP	Gaana	
	628	Deepak Melwani	deepak.melwani@galaxyweblinks.co.in	Head of Talent Acquisition and Employer Branding	Galaxy Weblinks Inc	
	629	Sheetal Katari	sheetal@gameopedia.com	Director Human Resources	Gameopedia	
	630	Sarita Singh	sarita.singh@games24x7.com	Associate Director- Talent Acquisition	Games24x7	
	631	Vikrant Goyal	vikrant.goyal@games24x7.com	VP (Head) HR - Games24x7	Games24x7	
	632	Bhavik Shah	bhavik@games2win.com	Human Resources Head	Games2win India	
	633	Nitin Nahata	nitin.nahata@gameskraft.com	CHRO	Gameskraft	
	634	Chainsingh Rathore	chainsingh.rathore@thegatewaycorp.com	AVP Talent Acquisition & Operations	Gateway Group of Companies	
	635	Kapil K	kapil.katira@thegatewaycorp.com	Head of Talent Acquisition	Gateway Group of Companies	
	636	Rushikesh Rajendra	rushikesh.rajendra@thegatewaycorp.com	CHRO	Gateway Group of Companies	
	637	Sandipan Kar	sandipan.kar@thegatewaycorp.com	Director Operations & Director Human Resources	Gateway Group of Companies	
	638	Shivangi Vakil	shivangi@gatewaytechnolabs.com	VP - Finance, Legal, Compliance & Head - HR	Gateway Group of Companies	
	639	Gayatri P	gayatrip@gathi.com	Chief People Officer	Gathi Analytics	
	640	Mainka Sharma	mainka.s@geeklurn.com	Head of Talent Acquisition &HR	GeekLurn	
	641	Divya Devapathni	ddevapathni@gemini-us.com	HR Head Operations	Gemini Consulting & Services	
	642	Reshma Mohan	reshma.mohan@gemini-us.com	Director - People & Culture	Gemini Consulting & Services	
	643	Balakrishna Shetty	balakrishna.shetty@genisys-group.com	Vice President - Human Resource	Genisys Group	
	644	Deepali Verdi	deepali.verdi@genzeon.com	Associate Director Human Resources	Genzeon	
	645	Kapeesh Saxena	kapeesh.saxena@genzeon.com	Vice President Talent Acquisition	Genzeon	
	646	Subashini Sundaram	suba@geval6.com	Vice President Talent Acquisition	Geval6 Inc	
	647	Anupam Jauhari	anupam.j@gsl.in	Group CHRO	Ginesys	
	648	Reshma Bopanna	reshma.bopanna@girmiti.com	AVP-Human Resources	Girmiti Software	
	649	Naganagouda J	naganagouda.sj@globaledgesoft.com	Associate Vice President & Head - Human Resources	GlobalEdge	
	650	Revathy Reddy	revathy.reddy@glu.com	HR Director People and Workplace	Glu Mobile	
	651	Meghana Sarwate	megh@godrej.com	Head - Human Resource Information Systems	Godrej Infotech	
	652	Chetna Gogia	chetna@gokwik.co	Chief Human Resources Officer	GoKwik	
	653	Ritesh Advani	radvani@thegoldensource.com	Vice President Human Resources	GoldenSource	
	654	Madhuri Rajath	madhuri.rajath@goodera.com	Associate Director Human Resources	Goodera	
	655	Manoj Parikatil	manoj.parikatil@goodera.com	Human Resources Director	Goodera	
	656	Rajesh Yadav	rajesh.yadav@gstn.org.in	Vice President & Head Human Resources	Goods And Services Tax Network	
	657	Somya Babu	somya.babu@gramtarang.in	Head HR	Gram Tarang Employability Training Services	
	658	Annie Manoj	annie.manoj@grasko.com	Director - Human Resources	Grasko Solutions	
	659	Anand Christopher	anand.christopher@grassrootsbpo.com	Vice President Human Resources	Grassroots	
	660	Amruta Urkude	amruta@greatplaceitservices.com	HR Head (Generalist)	Great Place IT Services	
	661	Divya Bhardwaj	divya.b@greyorange.com	Associate Director Global HR Operations	GreyOrange	
	662	Neha Chaudhary	neha.c@greyorange.com	Associate Director-HRBP	GreyOrange	
	663	Ramya Sharma	ramya.s@greyorange.com	Chief People Officer	GreyOrange	
	664	Ruchira Garg	ruchira.g@greyorange.com	Vice President -People Operations	GreyOrange	
	665	Vasanthi Naidu	vasanthi.n@greyorange.com	Vice President - Talent Acquisition & Operations	GreyOrange	
	666	Rajni Bansal	rajni@growexx.com	Head Of Human Resources	Growexx	
	667	Deepa Makhija	deepa.makhija@gupshup.io	Associate Director HR	Gupshup	
	668	Madhuri Nandgaonkar	madhuri@gupshup.io	Senior Director HR	Gupshup	
	669	Michelle Joseph	michelle.joseph@gupshup.io	Associate Director - HR	Gupshup	
	670	Sridhar Kotha	sridhar.kotha@gupshup.io	Director - Performance QA Automation	Gupshup	
	671	Swetha Harikrishnan	swetha@hackerearth.com	HR Director	HackerEarth	
	672	Chamola Hal	chamola.hal@hal-dz.com	Human Resources Director	HAL	
	673	Vijay Tiwari	vijay.tiwari@hal-dz.com	Head of Plant Human Resources Operations	HAL	
	674	Nidhi	nidhi@empirix.com	Director of Human Resources Americas	Hammer	
	675	Nimesh Mathur	nimesh@haptik.ai	Director - People, Culture & Talent	Haptik	
	676	Manjeet Walia	manjeet.walia@harbingergroup.com	Head of Talent Acquisition	Harbinger Group	
	677	Neville Postwalla	neville.postwalla@harbingergroup.com	Associate Vice President - Talent Management	Harbinger Group	
	678	Ruby Baksi	ruby.baksi@harbingergroup.com	Head Talent Engagement	Harbinger Group	
	679	Viraaj Arora	viraaj@headout.com	Head - Culture and Talent	Headout	
	680	Ruchi Sharma	ruchi@headspin.io	Director, People & Culture	HeadSpin	
	681	Rohit Minton	rohit.minton@hpiinc.com	Group Vice President - Human Resources	Health Prime	
	682	Ranjitha Sathyanarayan	ranjitha.s@healthasyst.com	Head - Talent Acquisition	HealthAsyst	
	683	Kirti Manucha	kirti.manucha@healthfore.com	SVP - HR	HealthFore Technologies	
	684	Firdaus Mehta	firdaus.mehta@heliossolutions.co	Head - People & Culture	Helios Solutions	
	685	Vivek Purc	vivek@helius-tech.com	Vice President - Staffing Services	Helius Technologies	
	686	Monila Gupta	mgupta@helm360.com	Regional HR Head - India	HELM360	
	687	Syed Ibrahim	syed@helpshift.com	Head Of Human Resources	Helpshift	
	688	Seema Natarajan	seema@heptagon.in	Assistant Vice President - HR	Heptagon Technologies	
	689	Rinki Goel	rinki.goel@hevodata.com	Director - HR	Hevo Data	
	690	Sasank Pandey	sasank.pandey@hevodata.com	Associate Director - Talent Acquisition	Hevo Data	
	691	Simran Nair	simran.nair@hexagon.com	Head Of Human Resources	Hexagon Geosystems	
	692	Santosh Badarinath	santosh@hexagonglobal.in	Head - HR	Hexagon Global	
	693	Payal Bhowmick	payal@highpeaksw.com	Head - Human Resource & Operations	High Peak Software	
	694	Veena Rao	veena.rao@highstreetit.com	Director of India Human Resource	Highstreet IT Solutions	
	695	Ramani Ganesh	ramani@hirect.in	Senior Vice President -Human Resources	Hirect India	
	696	Dinesh Rai	dinesh.rai@hirexa.com	Head Of Human Resources	Hirexa Solutions	
	697	Fareeda Begum	fbegum@hitachi-solutions.com	Director - HR	Hitachi Solutions Asia Pacific	
	698	Krishnan Ramachandran	kramachandran@hitachi-solutions.com	Senior Director Human Resources	Hitachi Solutions Asia Pacific	
	699	Hitendra Singh	hsingh@hitachi-solutions.com	Vice President Human Resources	Hitachi Solutions India	
	700	Karthikeyan P	karthikeyan@hiverhq.com	Head of Talent Acquisition	Hiver	
	701	Sunetra	sunetra@hiverhq.com	Head Of Human Resources	Hiver	
	702	Nishant Shukla	nishant.shukla@hoonartek.com	Vice President Human Resources	Hoonartek	
	703	Anjan Bose	anjan.bose@hpl.co.in	CIO & Head of HR	HPL	
	704	Bhawna Suri	bhawna@weexcel.in	Head HR & Operations	HR	
	705	Anand Sasidharan	anand@hubilo.com	Head of Talent Acquisition	Hubilo	
	706	Shobana Kailash	shobana@hubilo.com	Chief People Officer	Hubilo	
	707	Jabeen Pathan	jabeen@hulkapps.com	Chief Human Resources Officer	HulkApps	
	708	Sudhindra Sarnobat	sudhindra.sarnobat@isourceinfosystems.com	HR Chief at i-Source and Director	i-Source Infosystems	
	709	Vinok Sequeria	vinok.sequeria@jda.com	Director HR	i2 Technologies	
	710	Neha Mishra	neha@i2k2.com	Head - Human Resource	i2k2 Networks	
	711	Sajani Sodadasi	sajani@i95dev.com	Head HR	i95Dev	
	712	Ratish Ravindran	ratish.r@iantindia.com	Head - Talent Management	IANT	
	713	Nidhi Singh	nidhi.singh@iapcorp.com	Head HR	IAP Company	
	714	Saurabh Lion	slion@curologic.com	Director - Talent Management	iauro Systems	
	715	Sowmya Bezawada	sowmya@ibhubs.co	AVP - Human Resources	iB Hubs	
	716	Revathi Venkatesh	revathi.venkatesh@ibridgellc.com	Head of HR	iBridge	
	717	Karthick Rengasamy	karthick@ideas2it.com	Head of Talent Acquisition	Ideas2IT Technologies	
	718	Nancy Andrews	nancy.andrews@ideas2it.com	Head - Workforce Management	Ideas2IT Technologies	
	719	Rohini Radhakrishnan	rohini.radhakrishnan@ideas2it.com	Head - Human Resources	Ideas2IT Technologies	
	720	Gugapriya O	gugapriya@ideassion.com	Head-Talent Transformation	Ideassion Technology Solutions	
	721	Samatha R	samathar@ideyalabs.com	Head Of Human Resources	ideyaLabs	
	722	Bhakti Dharod	bhakti.dharod@idfy.com	Head of HR	IDfy	
	723	Nivedita Kaushal	nivedita.kaushal@idmworks.com	Head of Human Resource	IDMWORKS	
	724	Meghana V	meghana@idrive.com	Head HR, Operations & Finance	IDrive Software India	
	725	Neetu Choudhary	neetu.choudhary@idsnext.com	Associate Vice President Human Resources	IDS NEXT Business Solutions	
	726	Chirag Shah	chirag.shah@iflair.com	Director (HR & Admin)	iFlair Web Technologies	
	727	Ramanujam Cs	ramanujam.cs@ifocussystec.com	Head - HR & Finance	iFocus Systec	
	728	Rakesh Ebrahimpurkar	rakesh.e@63moons.com	Deputy Vice President - Human Resources	IFTAS	
	729	Bishnu Rai	bishnu.rai@iglobalservices.net	Head Of Human Resources	iGlobal KPO Services	
	730	Prashant Kesharwani	prashant@kljindia.com	HEAD- LEGAL & HR	IKF Technologies	
	731	Ranjeeta Das	ranjeeta.d@iksula.com	Head Human Resources	Iksula	
	732	Gazal Singhania	gazal@imarkinfotech.com	Head Of Human Resources	iMark Infotech	
	733	Madhusudhanan	madhusudhanan@imarque.co.in	Head of HR	iMarque Solutions	
	734	Img Infotech	img@imgglobalinfotech.com	Head Of Human Resources	IMG Global Infotech	
	735	Viju Gangadharan	viju@imocha.io	Director - Human Resources	iMocha	
	736	Radhika Khurana	radhika.khurana@impactanalytics.co	Chief People Officer	Impact Analytics	
	737	Divya Prasad	divya.prasad@impelsys.com	Associate Director - Talent Development	Impelsys	
	738	Harista Jakhar	harista.jakhar@impelsys.com	Associate Director - HR	Impelsys	
	739	Kavita N	kavitha.nandagopal@impelsys.com	AVP - HR	Impelsys	
	740	Kunal Acharyaa	kunal.acharya@impelsys.com	Global Head Talent Acquisition & TA COE	Impelsys	
	741	Dilip Satpute	dilip.s@theimperative.in	Chief Human Resources Officer	Imperative Business Ventures	
	742	Kalpana Kanhere	kalpana@theimperative.in	Director HR & Admin	Imperative Business Ventures	
	743	Minal Vilekar	minal.vilekar@theimperative.in	Vice President Human Resources	Imperative Business Ventures	
	744	Saravanan Thinagarasamy	saravanan.thinagarasamy@impigertech.com	President HR l CHRO	Impiger Technologies	
	745	Sree Umamaheswari	sree.umamaheswari@impigertech.com	Director Talent Management	Impiger Technologies	
	746	Soumya Somanathan	soumya@impress.ai	Head of HR (India)	impress.ai	
	747	Lisa Crage	lisacrage@insolutionsglobal.com	Vice President Human Resources	In-Solutions Global	
	748	Biju Varghese	biju.v@inapp.com	Director | HR | InApp	InApp	
	749	Richa Pande	richa.pande@inatech.com	Chief People Officer	Inatech	
	750	Pooja Misra	pooja@incnut.com	Head - Human Resources	IncNut Digital	
	751	Anand E	anand.e@increff.com	Chief Human Resources Officer	Increff	
	752	Ravisankar Velidi	ravisankar.velidi@increff.com	Chief Culture Officer & VP Engineering	Increff	
	753	Anitha Davis	anitha.davis@incture.com	Associate Director - Talent Acquisition	Incture	
	754	Praveen Kunta	praveen.kunta@incture.com	Human Resources Director	Incture	
	755	Ranjani Sunkara	ranjani.sunkara@incture.com	Associate Director Human Resources	Incture	
	756	Rajni Singh	rajni.singh@indinnovation.com	Head HR Manager at Ind Innovation Private Limited	Ind Innovation	
	757	Nitin Padharia	nitin.padharia@indianic.com	Head - HR / ILDC and L&D	IndiaNIC Infotech	
	758	Shalu Chinai	shalu.chinai@indianic.com	Head Of Human Resources	IndiaNIC Infotech	
	759	Nidhi Khulbe	nidhi@indusnet.co.in	Head Of Recruitment	Indus Net Technologies	
	760	Sweta Mishra	smishra@ivp.in	Director HR	Indus Valley Partners	
	761	Nandini Tandon	nandini.tandon@indusface.com	Chief People Officer	Indusface	
	762	Smita Narkar	smita.narkar@infinite-uptime.com	Head of HR	Infinite Uptime	
	763	Vaidhyanathan C	vaidhyanathan@infinitysts.com	Head, Delivery Talent Acquisition and Operation	Infinity	
	764	Nancy Varghese	nancy.varghese@inflowtechnologies.com	Head- HR & Admin	Inflow Technologies	
	765	Manian Chennai	manian@callezee.com	head talent resourcing	Info Network Management Company	
	766	Rijil Kannoth	rijil.kannoth@infobelt.com	VP, HR & Operations	Infobelt	
	767	Neha Sharma	neha.sharma@infodartmail.com	Head HR & TAG	Infodart Technologies	
	768	Vaibhavi Joshi	vaibhavi.j@infogen-labs.com	Head - HR & Recruitments	Infogen Labs	
	769	Ritika Naithani	ritika.naithani@infollion.com	Chief Human Resources Officer	Infollion Research Services	
	770	Girish Kumar	girish.k@infomazeapps.com	Head-Admin/ HR	INFOMAZE	
	771	Maximus J	maximus.j@infoplusltd.co.uk	Head of HR	Infoplus Technologies UK	
	772	Hetal	hsoni@infosenseglobal.com	Head Of Human Resources	Infosenseglobal Inc	
	773	Somesh Sharma	somesh.sharma@infostride.com	Vertical Head - US Staffing	InfoStride	
	774	Vishakha Saini	vishakha.saini@infostride.com	HR Head	InfoStride	
	775	Sunila Jaikumar	sunila_jaikumar@edgeverve.com	Head HR - Finacle	Infosys Finacle	
	776	Govinda Shastry	govinda.shastry@igiusa.com	Head-HR and Administration	Infotech Global	
	777	Nawaaz Hafeez	nawaaz.hafeez@ivlglobal.com	Director Talent Acquisition	InfoVision Labs	
	778	Divya Chandrasekhara	divya.chandrasekhara@infoworks.io	HR Director - India at Infoworks.Io	Infoworks.io	
	779	Shamika Kulkarni	shamika.kulkarni@infrabeat.com	HR & Operations Head	InfraBeat Technologies	
	780	Veena Bhagwat	veena.bhagwat@infrabeat.com	Head - Human Resource	InfraBeat Technologies	
	781	Pavithradesai Pd	pavithra.desai@infracloud.io	Chief People Officer	InfraCloud Technologies	
	782	Rahul Inamdar	rahul.inamdar@infracloud.io	Head of Talent Acquisition	InfraCloud Technologies	
	783	Prasad Bagawade	prasad.bagawade@infrasofttech.com	Global Head - Human Resources	Infrasoft Technologies	
	784	Sonali Bhave	sonali.bhave@infrasofttech.com	Global Head HR	Infrasoft Technologies	
	785	Megh Makwana	megh@inheritx.com	Head of Human Resources Operations	InheritX Solutions	
	786	Atul Pal	atul.pal@innefu.com	Head Of Human Resources - Client Operations	Innefu Labs	
	787	Vandana Chawla	vandana.chawla@innefu.com	Head Of Human Resources	Innefu Labs	
	788	Anand Thiagarajan	athiagarajan@inniveinc.com	Vice President - Human Resources	Innive Inc	
	789	Rohini G	rohini@innobox.com	HR Head	Innobox	
	790	Prince Kumar	prince.kumar@innohubtechnologies.com	Human Resources Director	Innohub Technologies Pte	
	791	Roshan Thomas	roshan.thomas@ivldsp.com	Head - Human Resources	Innoval Digital Solutions	
	792	Nitisha Baalay	nitisha.baalay@innovapptive.com	Director Global Talent Acquisition	Innovapptive Inc	
	793	Vikram Kallianpur	vikram.kallianpur@innovapptive.com	Chief Human Resources Officer	Innovapptive Inc	
	794	Chandra Prakash	chandra.prakash@innoverdigital.com	Head of Talent Acquisition	Innover Digital	
	795	Liton Saha	litons@innov.in	Head - Human Resources	Innovsource	
	796	Sunil Sarangdhar	sunils2@innov.in	AVP - HR	Innovsource	
	797	Gayatri Nikkula	gayatri.nikkula@inry.com	VP HR and Operations	INRY	
	798	Preethy Paul	preethy.paul@insemitech.com	Associate Vice President Human Resources	Insemi Technology Services	
	799	Sarath V	sarath.v@insemitech.com	Associate Director-HR	Insemi Technology Services	
	800	Srinivas Talampuranam	srinivas.talampuranam@inspirage.com	Director - Human Resources	Inspirage	
	801	Namrata Kamrushi	namrata.k@inspiredgeit.com	Head - People & Culture	Inspiredge IT Solutions	
	802	Sagorika Sanyal	sagorika.s@insync.co.in	Vice President Talent Acquisition & Management	InSync Solutions	
	803	Deep Patel	deep.patel@ics-global.in	Vice President Talent Acquisition	INTECH	
	804	Kshama Patel	kshama.patel@intech-systems.com	Head Of Human Resources	Intech Systems	
	805	Kevin Parker	kparker@integrass.com	Practice Head- IT Staffing	Integrass	
	806	Shalini Chopra	shalini@intelegain.com	Director - Human Resources	Intelegain Technologies	
	807	Sonali Titus	sonali.titus@intelegencia.com	VP Hr and Recruiting	Intelegencia	
	808	Trupti Pansare	trupti.pansare@inteliment.com	Director & CHRO	Inteliment	
	809	Nitin Gawli	nitin.g@intellectbizware.com	Head HR	Intellect Bizware Services	
	810	Parinita Kaur	parinita.kaur@intellolabs.com	Vice President Human Resources	Intello Labs	
	811	Soni Anand	soni@intellolabs.com	AVP - HR	Intello Labs	
	812	Sumit Midha	sumit.midha@intellolabs.com	Head of Talent Acquisition	Intello Labs	
	813	Debashish Bhattacharya	debashishb@interrait.com	Head of HR	Interra Information Technologies	
	814	Surojit Chowdhury	surojitc@interrait.com	Director - Recruitment	Interra Information Technologies	
	815	Vikas Singh	vikass@interrait.com	Director Recruitment	Interra Information Technologies	
	816	Chandan Gambhir	chandan@noida.interrasystems.com	Director - Human Resources	Interra Systems	
	817	Swetha Monalisa	swetha@intonenetworks.com	Head - TAG / Human Resources Operations	Intone	
	818	Chintan Bhatt	b.chintan@introlligent.com	Recruitment Head-US Operations	Introlligent	
	819	Vignesh Uthandi	u.vignesh@introlligent.com	Delivery Head - Staffing Services & Solutions	Introlligent	
	820	Navneet Murthy	navneet@inventechinfo.com	Global Head - Recruitment	Inventech Info Solutions	
	821	Chaitali Bhattacharya	cbhattacharya@inventive-it.com	Senior Director of Human Resources	Inventive IT	
	822	Inventum Recruiter	inventum.recruiter@inventum.net	Head HR	Inventum	
	823	Sangeeta Tandon	sangeeta.tandon@ionidea.com	Director HR	IonIdea	
	824	Savitha Karanth	skaranth@ipass.com	Head HR	iPass	
	825	Swapnil Trikane	swapnil.trikane@irisbusiness.com	Head - Nordic, Baltic & Eastern European Union	IRIS Business Services	
	826	Gaurav Gaur	gauravgaur@ironsystems.com	Head of Workforce Innovation	Iron Systems	
	827	Susheel Kumar	susheelk@ironsystems.com	Director Workforce Services EMEA & APAC	Iron Systems	
	828	Deepak Khanna	dkhanna@ishir.com	Chief Talent Officer	ISHIR	
	829	Jegannathan Balasubramanian	jegannathan@isolve.global	AVP - Talent Growth	iSolve Technologies	
	830	Balaji Er	balaji@isourceindia.com	Head Of Recruitment	iSource ITES	
	831	Rohit Singh	rsingh@issquaredinc.com	Senior Director Talent Acquisition and Management	ISSQUARED,	
	832	Joe M	joem@itamerica.com	Head Technical Recruiter	IT America Inc	
	833	Banmeet Kour	banmeet.kour@itbd.net	Head of Talent Acquisition India/PH/US	IT BY DESIGN	
	834	Deepak Gelda	deepak@uchicago.edu	Head Of Human Resources	IT Services	
	835	Bhavika Sheth	bhavika.sheth@itcgindia.com	HR Head at ITCG	ITCG Solutions	
	836	Manikandan Balasubramanian	manikandan.b@itech-india.com	Head Of Human Resources	iTech India	
	837	Vineela Gopalajosyula	vineela.gopalajosyula@itelligencegroup.com	Associate Director Talent Acquisition	itelligence	
	838	Ravi Vattikota	ravi.vattikota@itelligencegroup.com	VP, SAP Staffing & Delivery	itelligence India Software Solutions	
	839	Sukhpreet Sandhu	sukhpreet.sandhu@itilite.com	Head of Human Resources | Executive Team	ITILITE	
	840	Nitin Pandey	nitin@itlize.com	Director Talent Acquisition	Itlize Global	
	841	Sreevidhya Shashi	sreevidhya.shashi@itorizon.com	Senior Director - HR @ ITOrizon & UCBOS	ITOrizon	
	842	Sini Jerry	sini@ittdigital.com	Delivery Head - India Staffing	ITTDigital	
	843	Samir Dhond	samir.dhond@ittiam.com	Chief PeopleOfficer	Ittiam Systems	
	844	Dhirendra Panda	dhirendra.panda@ivalue.co.in	Head HR	iValue InfoSolutions	
	845	Ravi Gurunathan	ravi.gurunathan@ivalue.co.in	Chief Human Resources Officer	iValue InfoSolutions	
	846	Dinesh Yuvaraj	dinesh.yuvaraj@ivymobility.com	Director - Human Resources	Ivy Mobility	
	847	Prasaanth Subbiah	prasaanth.s@ivymobility.com	Head Of Human Resources	Ivy Mobility	
	848	Nupur Jain	nupur@ixigo.com	VP of Human Resources	ixigo	
	849	Biplob Das	biplob.das@izmoltd.com	Head Of Human Resources	izmo	
	850	Chandresh Kumar	chandresh.kumar@jagrannewmedia.com	Chief Manager & Head ( Performance Advertising)	Jagran New Media	
	851	Saravanan Muralidharan	saravanan.muralidharan@janes.com	Director HR	Janes	
	852	Nimesh Shah	nimesh@jeavio.com	VP, HR & Operations	Jeavio	
	853	Sridevi Vinayagaraj	sridevi.v@jeevantechnologies.com	Head - HR	Jeevan Technologies	
	854	Patel Kavita	patel.kavita@jeksonvision.com	Head HR	Jekson Vision	
	855	Niharika Patel	niharika.patel@jetsynthesys.com	CHRO	JetSynthesys	
	856	Snigdha Prashar	snigdha@saavn.com	Director Human Resources	JioSaavn	
	857	Rajitha Jaffer	rajitha.jaffer@jmrinfotech.com	DIRECTOR - HR and OPERATIONS	JMR Infotech	
	858	Haritha Etakula	haritha.etakula@jnettechnologies.com	Head of Human Resources	JNET Technologies	
	859	Priyadarshini Torke	priyadarshini.torke@jobsforher.com	AVP - HRBP	JobsForHer	
	860	Sagar Arondekar	sagar.arondekar@joshsoftware.com	Head HR	Josh Software,	
	861	Sanjay Chandel	sanjay.chandel@joveo.com	Head Of Human Resources	Joveo	
	862	Gopalakrishna Gubbi	gopalakrishna.gubbi@jsw.in	Head HR & Facilities	JSoft Solutions	
	863	Sridhar Barige	sridhar.barige@jsw.in	Head HR	JSoft Solutions	
	864	Anupriya Gandhi	anupriya.gandhi@juliacomputing.com	Global Director People Ops	Julia Computing	
	865	Kushagra	kushagra.pande@jungleegames.com	Director Talent Acquisition	Junglee Games	
	866	Priya Surana	priya@jungleegames.com	Head Employee Experience & Talent Acquisition	Junglee Games	
	867	Sayyed Hameed	hameed@juntrantech.com	VP - Operations & HR	Juntran Technologies	
	868	Vivek Singh	viveksingh@jupitice.com	Director- HR & Operations	Jupitice Justice Technologies	
	869	Shipra Pandit	shipra.pandit@juspay.in	Director - HR	JUSPAY	
	870	Ram R	ram.r@kairostech.com	Talent Acquisition Head	Kairos Technologies	
	871	Pradeep Krishnan	krishnanp@kaizentek.com	Recruitment Head - Technology Consulting Services	Kaizen Technologies	
	872	Rohit Jain	rohit.jain@kalelogistics.com	AVP HR	Kale Logistics Solutions	
	873	Ashwini J	ashwini.janardhanan@kaleyra.com	Head - People & Culture, APAC	Kaleyra	
	874	Basava	basava@kamivision.com	Head Of Human Resources	Kami Vision	
	875	Surbhi Sinha	surbhi.sinha@kapture.cx	HR Head	Kapture CRM	
	876	Mani Narayanan	manin@karyatech.com	Vice President - Human Resources	KARYA Technologies	
	877	Jyothsna Devi	jyothsna.devi@kasmo.co	Delivery Head - Staffing	Kasmo	
	878	Shubha Menon	shubham@kastechssg.com	Chief Human Resources Officer	Kastech Software Solutions Group	
	879	Ishani Sharma	ishani.sharma@idctechnologies.com	India Head-HR & Operations	KBC Technologies Group	
	880	Jayati Pardhy	jayati.p@keka.com	Head of Human Resources	Keka HR	
	881	Srinidhi Dasaka	srinidhi.d@keka.com	Head Of Human Resources	Keka HR	
	882	Vasudev Munji	vasudevm@kensium.com	AVP - HR	Kensium	
	883	Krishnachand Nair	knair@ixiacom.com	Director- Human Resources	Keysight Network Visibility Test & Security	
	884	Archana Kp	archana.kp@kilowott.com	Vice President Human Resources	Kilowott	
	885	Susan Leonard	susan@kissflow.com	Director Talent Acquisition	Kissflow	
	886	Medha Sharma	medha.sharma@kiwitech.com	Director - Human Resources (Global HR)	KiwiTech	
	887	Rehan Abdi	rehan.abdi@kiwitech.com	Head of Talent Acquisition	KiwiTech	
	888	Shilpa Tungikar	shilpa.tungikar@infrasofttech.com	Assistant Vice President -Talent Acquisition	Kiya.ai	
	889	Sonia Lazar	sonia@klausit.com	Chief Human Resources Officer	Klaus IT Solutions	
	890	Shikha Kothari	shikha.kothari@klearnow.com	HR Head	KlearNow	
	891	Anjali	anjali@knackforge.com	Vice President Human Resources & Operations	KnackForge	
	892	Gayatri Patil	g.patil@kokonetworks.com	Head Of Human Resources	KOKO Networks	
	893	Srikanth Sathyanarayana	srikanth.sathyanarayana@komprise.com	Head of Talent Acquisition	Komprise	
	894	Deepa Sripathi	deepa.sripathi@konicaminolta.com	Head Human Resources	Konica Minolta Business Solutions India	
	895	Supriya Dodia	hr.mumbai@konverge.co.in	Assistant Vice President -HR	Konverge Technologies	
	896	Sarada Kandanur	sarada.kandanur@kore.com	Senior Director - HR & Recruitment	Kore.ai	
	897	Mahendran Subramaniam	mahendran.s@kovaion.com	Head HR & RPO Delivery	Kovaion Consulting	
	898	Daniel Shaw	daniel.shaw@kpipartners.com	Director of HR & Talent Acquisition	KPI Partners	
	899	Satyendu Naik	satyendu.naik@kcsitglobal.com	AVP - People & Culture	Krish Compusoft Services	
	900	Nishith Parikh	nishith.parikh@krishtechnolabs.com	Global Head HR	Krish TechnoLabs	
	901	Priyom Barooah	priyom.barooah@kritikalvision.ai	Associate Vice President Human Resources	KritiKal Solutions	
	902	Prakash Rc	prakash.rc@kriyanxw.com	Head Of Human Resources	Kriya IT	
	903	Srivathsan Mg	srivathsan.mg@kumaran.com	Head - Talent Acquisition	Kumaran Systems	
	904	Suriya Kumar	suriya.kumar@kumaran.com	AVP - HR	Kumaran Systems	
	905	Suresh Thangaraj	tsuresh@kutirtech.com	Delivery Head - Talent Acquisition	Kutir Corporation	
	906	Vickky Sahoo	vickky.sahoo@lanetteam.com	Head Of Recruitment	La Net Team Software Solution.	
	907	Kanta Nandy	kantan@labvantage.com	India Head - Human Resources	LabVantage Solutions	
	908	Chandni Chopra	chandnic@lambdatest.com	Director - Human Resources	LambdaTest	
	909	Payyalore Sainath	payyalore.sainath@larvol.com	Global Head of Talent Acquisition	LARVOL	
	910	Kausar Khatri	kausar.khatri@lauren.co.in	Vice President Human Resources	Lauren Information Technologies	
	911	Shyama Nair	shyama@lesoft.com	Head HR Ops - LIG India	Leader Investment Group - LIG	
	912	Nikita Trivedi	nikita@goleadingit.com	Head Of Human Resources	Leading IT	
	913	Poulo Mathew	poulo@goleadingit.com	VP of Human Resource	Leading IT	
	914	Vijay Sharma	vijay@leadiq.com	Head of Recruiting	LeadIQ	
	915	Sanjeeta Mohta	sanjeeta@learningspiral.co.in	Head of Talent & Finance	Learning Spiral	
	916	Patricia Natalia	patricia.natalia@learnquest.com	Head of HR, India	LearnQuest	
	917	Sanya Nagpal	sanya.nagpal@leena.ai	Head Of Human Resources	Leena AI	
	918	Madhushree Kumra	madhuk@lentra.ai	Head - People Operations	Lentra	
	919	Jagadabhi Krishna	jagadabhi.krishna@leoforce.com	Director - Talent Acquisition	Leoforce	
	920	Vijayakrishna Tarikonda	vijayakrishna.t@lera.us	Director - Human Resources	Lera Technologies	
	921	Ruchi Jain	ruchi.jain@lighthouseindia.com	Head Of Human Resources	Lighthouse Info Systems	
	922	Nikhil Bhat	nikhil.bhat@lipi.in	Assitant Vice President Human Resources	Lipi Data Systems	
	923	Vishva Paneri	vishva.paneri@lipi.in	Head HR	Lipi Data Systems	
	924	Satishh Kumar	skumar@liquidhub.com	Associate Director-Talent Acquisition	LiquidHub	
	925	Pragya	pragya.khanna@lirik.io	Vice President Human Resources	Lirik	
	926	Sharon Manaloor	sharon.manaloor@litmus7.com	Head of Strategic Talent Acquisition	Litmus7	
	927	Vishma Vivek	vishma@litmus7.com	Global Head-Talent Acquisition	Litmus7	
	928	Latha Shankar	lshankar@liventus.com	Director - HR	Liventus,	
	929	Juhi Sharma	juhi.sharma@lockstep.io	Director - HR & TA (APAC)	Lockstep	
	930	Anusha Kishore	anusha.kishore@loco.gg	Assistant Vice President Human Resources	Loco	
	931	Devansh Narang	devansh.narang@loco.gg	Head of Content & Talent	Loco	
	932	Manav Jain	manav.jain@loconav.com	Chief Human Resources Officer	LocoNav	
	933	Tisha Prasad	tisha@loconav.com	Vice President Human Resources	LocoNav	
	934	Archana Manne	archana.manne@locuz.com	Vice President Human Resources	Locuz	
	935	Kritika Khanduri	kritika.khanduri@loginradius.com	Head of Global Recruitment	LoginRadius	
	936	Subramanian B	subramanian@logisofttechinc.com	Head Staffing and IT Services	Logisoft Technologies	
	937	Dinesh Hemdev	dinesh.hemdev@logixal.com	Head of Talent Acquisition	Logixal Inc	
	938	Sameer Samant	ssamant@omnicogroup.com	AVP - Compensation Control and Payroll Processing	Looking for Opportunities	
	939	Laxman Reddy	laxman.reddy@lorhanit.com	Vice President - Finance, HR & IT Support Systems	Lorhan IT	
	940	Shreeja Santosh	shreeja.santosh@lrn.com	Director, People & Culture	LRN	
	941	Mukesh Tiwary	mukesh.t@lrsservices.in	Head of HR	LRS Services (P)	
	942	Narender Thatipalli	narender@lsarecruit.co.uk	Head of Talent Acquisition (UK, Europe & India)	LSA Recruit	
	943	Rinku Chauhan	rinkuc@lumel.com	Director - Talent Acquisition	Lumel	
	944	Zeeshan Khan	zeeshan.khan@luminescent.digital	Head Of Human Resources	Luminescent Digital	
	945	Dharmendra Rawat	dharmendra.rawat@lumiq.ai	Head Of Recruitment	Lumiq	
	946	Jinu Jose	jinu@m2comsys.com	Human Resources Director	M Squared Software and Services	
	947	Pavan Vemuri	pavan.vemuri@m3bi.com	Head - HR	M3BI	
	948	Tanvi Salpekar	tanvi.salpekar@maantic.com	Director- HR	Maantic Inc	
	949	Sankar Nath	snath@macrosoftinc.com	Director - US Recruitment	Macrosoft	
	950	Shagun Bhunchal	shagun.bhunchal@magicedtech.com	Director - Human Resources	Magic EdTech	
	951	Uma Revanasiddaiah	uma.hr@magnasoft.com	AVP - Human Resources, Operations Enablement	Magnasoft	
	952	Babu Thoppil	babu_thoppil@mahindrasatyam.com	VP - HR	Mahindra Satyam BPO	
	953	Ratish Kurle	ratish@maintec.com	Delivery Head - IT Technical Staffing	Maintec Technologies	
	954	Subhash Bv	subhashbv@macomsolutions.com	Head HR	Manappuram Comptech & Consultants	
	955	Kiran Punjabi	kiran@manektech.com	Head Of Human Resources	ManekTech	
	956	Rency Hakani	rency.hakani@manektech.com	Head of HR (Mobile Team)	ManekTech	
	957	Anjali Ghadge	anjalig@mangoapps.com	VP - HR & Operations I We're Hiring!	MangoApps	
	958	Lyndon Saldanha	lyndon.saldanha@manthan.com	Vice President - Human Resources	Manthan	
	959	Vinay Singh	vinay.s@manthan.com	Global Talent Acquisition Head	Manthan	
	960	Reddy	reddy@mantratechno.com	Senior Director HR & Operations	Mantra	
	961	Priscilla Francis	priscilla.f@mantralabsglobal.com	Head of HR	Mantra Labs	
	962	Swati Suryavanshi	suryavanshi.swati@mantratec.com	Head - Strategic HR	Mantra Softech	
	963	Rima Das	rima@maropost.com	Global Head & Director of People and Culture	Maropost	
	964	Ashton Lawrie	ashton.lawrie@iitms.co.in	General Manager - HR (Head of Department)	MasterSoft ERP Solutions	
	965	Shakeel Yalgod	shakeel@matchpointsolutions.com	Head Of Recruitment	MatchPoint Solutions	
	966	Reena Bhansali	reena@matellio.com	Vice President Human Resources	Matellio	
	967	Nitika Bhandari	nitika.bhandari@mavenwave.com	Head HR	Maven Wave	
	968	Hrd Ltd	hrd@mawaimail.com	Head of Human Resources	Mawai Infotech	
	969	Yashika Gupta	yashika@mawaimail.com	Head of Recruitment	Mawai Infotech	
	970	Praveen Kummar	praveen@maxval.com	Director Talent Management	MaxVal Group,	
	971	Umesh Kamath	umesh.kamath@maxval.com	Vice President Human Resources	MaxVal Group,	
	972	Pavan Vooribindi	pavan.vooribindi@mckinleyrice.co	HR Generalist/ Community Head	McKinley Rice	
	973	Sunny Chavan	sunny.chavan@mediaagility.com	Head - Talent Acquisition & Management	MediaAgility	
	974	Swaroop Shrm-Scp	swaroop.gokhale@mediaagility.com	Head of People Operations	MediaAgility	
	975	Rajeev Sen	rsen@medline.com	Director Human Resources	Medline India	
	976	Syed Rizvi	syed.rizvi@megasoftsol.com	HEAD PAYROLL And Compliances	Megasoft Solutions India	
	977	Rakesh Raj	rakesh@mergenit.com	Vice President, IT - Staffing & Solutions	Mergen IT LLC	
	978	Srikanth Emula	srikanth.e@mergenit.com	Head Talent Acquisition	Mergen IT LLC	
	979	Sneha Hegde	sneha@merklescience.com	Head of Talent Acquisition - APAC, UK & USA	Merkle Science	
	980	Himagauri Kashalikar	himagauri@metamorphtech.com	Chief People Officer	MetaMorphoSys Technologies	
	981	Jimeet Jain	jimeet@metamorphtech.com	Health Insurance Practice Head - Asia Pacific	MetaMorphoSys Technologies	
	982	Fazal Karim	fazal.karim@metaoption.com	Staffing Head	MetaOption LLC	
	983	Huzefa Retiwala	huzefa.retiwala@metro-services.in	Head of Human Resources Operations	METRO SERVICES	
	984	Shilpi Saklani	shilpi.saklani@metro-gsc.in	DIRECTOR HR	METRO SERVICES	
	985	Madhav Mallela	madhava.mallela@microexcel.com	Director-HR	Microexcel Inc	
	986	Archana Sarda	archana.sarda@microlise.com	Head Of Human Resources	Microlise	
	987	Benson Mendez	benson.mendez@microobjects.net	VP - Human Resources	MicroObjects	
	988	Rupali Bagaddeo	rbagaddeo@microproindia.com	Head - HR & Admin	Micropro Software Solutions	
	989	Shishir Singh	shishir.singh@milkbasket.com	Head Of HR Operations	Milkbasket	
	990	Deepti Ashar	deepti@mindcraft.in	Vice President, Head of Consulting Services & HR	MindCraft Software	
	991	Ansuman Sahu	ansumans@mindfiresolutions.com	Head of HR / Staffing	Mindfire Solutions	
	992	Kiran Singh	kirans@mindfiresolutions.com	VP, Talent Development	Mindfire Solutions	
	993	Ashish Naidu	ashish.naidu@mindgate.in	Assistant Vice President - Talent Acquisition	Mindgate Solutions	
	994	Vishakha Shinde	vishakha.s@mindgate.in	Assistant Vice President Human Resources	Mindgate Solutions	
	995	Rohit Kalamkar	rohit@mindpooltech.com	Associate Director Human Resources	Mindpool Technologies Inc	
	996	Sucheta Ukidve	sucheta.ukidve@mindstix.com	Director, HR	Mindstix Software Labs	
	997	Pradeep K	pradeep.k@mindteck.com	Vice President Human Resources	Mindteck India	
	998	Pradeep Chigurupati	pradeep.chigurupati@mindtickle.com	Head, Talent Acquisition	Mindtickle	
	999	Rajneesh Malik	rajneesh.malik@mindtickle.com	Sr. Director Global - Talent Acquisition	Mindtickle	
	1000	Shilpa Malhotra	shilpa.malhotra@mindtickle.com	Head of Talent Acquisition	Mindtickle	
	1001	Sindhuja Parthasarathy	sindhuja.parthasarathy@mindtickle.com	Director- Global Talent Management	Mindtickle	
	1002	Uma Maheshwari	uma_maheshwari@mindtree.com	Associate Director - Talent	MINDTREE	
	1003	Neelima Vaka	neelima.vaka@minfytech.com	Head Of Human Resources	Minfy	
	1004	Pooja Arora	pooja.arora@minosha.in	Head HR	Minosha India	
	1005	Jayaprakash Yangal	jayaprakash@mirafra.com	Director Talent Acquisition	Mirafra Technologies	
	1006	Shailesh Jadhav	shailesh@mirafra.com	Vice President and Global Head - HR	Mirafra Technologies	
	1007	Korak Saha	korak.saha@mjunction.in	Chief People Officer	mjunction services	
	1008	Shamita Nandi	shamita.nandi@mjunction.in	Head of HR	mjunction services	
	1009	Shivani Chaturvedi	shivani.chaturvedi@mjunction.in	Chief People Officer	mjunction services	
	1010	Sonal Srivastava	sonal.srivastava@mobilecoderz.com	Head Of Human Resources	MobileCoderz	
	1011	Deepti Sahni	deepti.sahni@mobiloitte.com	Director - Human Resources	Mobiloitte	
	1012	Mamatha Nagesh	mamatha.n@modefin.com	Head - Human Resources	Modefin	
	1013	Francis Gonsalves	francis.gonsalves@moengage.com	Director, HRBP	MoEngage	
	1014	Veena Satish	veena.satish@moengage.com	VP - People & Culture	MoEngage	
	1015	Nitesh Karir	nitesh.karir@moksatechnologies.com	Head HR	mokSa Technologies	
	1016	Harikrishna Bachala	harikrishna.bachala@mitsind.com	Associate Director HR	Monarch Info Tech Services	
	1017	Peeyush Singhal	peeyush.singhal@monsterindia.com	Product Head - Talent Search Platform	Monster India	
	1018	Priyanka Priyadarshini	priyanka.priyadarshini@hcl.com	Head - HR (APAC & Gulf)	Monster India	
	1019	Sarieka Vaze	svaze@montran.com	Head - Human Resources & Administration	Montran Corporation	
	1020	Chandini Mokthar	chandini@moolya.com	VP-People & Culture	Moolya	
	1021	Shruti Gandhi	shruti.gandhi@moolya.com	Head of Human Resources Operations	Moolya	
	1022	Harshita Rathore	harshita.rathore@moonfroglabs.com	Head of HR	Moonfrog Labs	
	1023	Preeti Kalyankar	preeti.kalyankar@mosambee.com	Head of Human Resources	Mosambee	
	1024	Meher Gaurav	gaurav@mphrx.com	Vice President Global HR	mphrX	
	1025	Frida Dias	frida.dias@mpsinteractive.com	Director - HR	MPS Interactive Systems	
	1026	Saurabh Mittal	saurabhm@tatainteractive.com	Head - E-Performance Support Systems	MPS Interactive Systems	
	1027	Ganapathy D	ganapathy.d@mresult.com	Director HRBP	MResult	
	1028	Padmashree Alva	padmashree.alva@mresult.com	Director - Talent & Initiatives	MResult	
	1029	Venkat Rengasamy	venkat.r@mresult.com	SVP & Head of HR	MResult	
	1030	Ramakrishna Chanduri	ramakrishnac@msrcosmos.com	Head HR	MSRcosmos LLC	
	1031	Ankita Sinha	ankita.sinha@mtxb2b.com	Chief People Officer	MTX Group	
	1032	Sakshi Goyal	sakshi.goyal@mtxb2b.com	Director, People Operations & Growth	MTX Group	
	1033	Sapna Verma	sapna.verma@mtxb2b.com	Director - Talent Engagement and Growth	MTX Group	
	1034	Shashikanth Jayaraman	shashi@multicorewareinc.com	Vice President - Global Human Resources	MulticoreWare Inc	
	1035	Neha Thakker	neha@multiqos.com	Head Of Human Resources	MultiQoS Technologies	
	1036	Jaipal Addagatla	jaipal.addagatla@mutualmobile.com	Associate Director, Talent Acquisition	Mutual Mobile	
	1037	Prashasti Pritiprada	prashasti@muvi.com	Director of HR	Muvi.com	
	1038	Saroj Tripathy	saroj.tripathy@muvi.com	Head Of Recruitment	Muvi.com	
	1039	Amritesh Shukla	amritesh.shukla@mygate.com	Head Of Human Resources	MyGate	
	1040	Eram Qudsia	eram.qudsia@mygate.in	Head of Human Resources	MyGate	
	1041	Mohan Joshi	mohan.joshi@myglamm.com	Head- C&B, HR Automation & HR Operations	MyGlamm	
	1042	Pooja Pareek	pooja.pareek@myglamm.com	Head of Talent Acquisition	MyGlamm	
	1043	Ravindra Dandekar	ravindra.dandekar@myglamm.com	Head of HR	MyGlamm	
	1044	Kavya K	kavya.k@mygoconsulting.com	Director - Global HR	Mygo Consulting	
	1045	Vishal Naithani	vishal.naithani@mylofamily.com	Head of People & Culture	Mylo	
	1046	Chandan Thakur	chandan.kashyap@mysenseinc.com	Chief Talent Officer	Mysense Technologies	
	1047	Shamna Libu	shamna.libu@naicoits.com	Vice President Human Resources	Naico ITS	
	1048	Pooja Malawade	pooja.malawade@nanostuffs.com	Head of HR	Nanostuffs	
	1049	Sukeshni Tulasi	sukeshni.tulasi@napierhealthcare.com	Head Of Human Resources	Napier Healthcare	
	1050	Lakshmi Eyyunni	lakshmi.eyyunni@narvar.com	Director of People Operations	Narvar	
	1051	Mrugesh Raval	mrugesh.raval@nascentinfo.com	Head of Human Resources	Nascent Info Technologies	
	1052	Garima Sharma	gsharma@nasscom.in	Head - Human Resources	NASSCOM	
	1053	Koustav Chatterjee	koustav@nasscom.in	Head - Digital Health Ecosystem	NASSCOM	
	1054	Sarita Chaudhary	sarita@nasscom.in	Deputy Director-HR	NASSCOM	
	1055	Usha Nath	usha.nath@nathcorp.com	Director HR	NathCorp	
	1056	Naresh Kumar	naresh@ncsus.net	Recruiting Director	National Computer Systems	
	1057	Nibedita Dutta	nibedita.dutta@natureglobal.com	Vice President - HR & Operations	Nature Technologies	
	1058	Vijay Rao	vijay.r@navasoftware.com	VP - HR & Operations	NAVA Software Solutions	
	1059	Chandra Ratra	chandra.ratra@navigaglobal.com	Director Talent Acquisition	Naviga India	
	1060	Rekha Nair	rekha.nair@navis.com	Global Director People & Culture	Navis	
	1061	Sanjay Mashere	sanjay.mashere@neml.in	Asst. Vice President - Human Resource	NCDEX e Markets	
	1062	Nikhil Kulkarni	nikhil.kulkarni@ncircletech.com	Head Of Human Resources	nCircle Tech	
	1063	Gulshan S	gulshan@near.com	Director, Strategic HR	Near	
	1064	Justin Joseph	justin@near.com	Chief People Officer	Near	
	1065	Pritha Das	pritha@near.com	Director - People and Culture	Near	
	1066	Chanchal Chandiok	chanchal.chandiok@northgateps.com	HR Director	NEC Software Solutions	
	1067	Shradha Sule	shradha.sule@northgateps.com	Head of Talent Acquisition	NEC Software Solutions	
	1068	Vinod Ch	vinod.ch@neelblue.com	Human Resources Director	NeelBlue Technologies	
	1069	Mahesh Bandaru	mahesh.bandaru@neewee.ai	Director - HR India	Neewee	
	1070	Prasad Narayan	prasad_narayan@neovasolutions.in	Head of Talent Acquisition & Special Projects	Neova Solutions	
	1071	Giri Babu	giri.babu@neovatic.com	Head of Human Resources	Neovatic Technologies	
	1072	Dileep Choyappally	dileep.choyappally@nestgroup.net	Vice President & Head of Human Resources	NeST Digital	
	1073	Anjani Salian	anjani.salian@in.nbssap.com	Head - Talent Acquisition & Talent Management	Net Business Solutions	
	1074	Balneet Birah	balneet.birah@netsolutions.com	Chief Human Resources Officer	Net Solutions	
	1075	Shruti	shruti.bhargava@netcomlearning.com	Head HR	NetCom Learning	
	1076	Shyni K	shyni.k@netcon.in	Head of Human Resources	Netcon Technologies India	
	1077	Lata Chemudupati	lata.c@netconnectglobal.com	AVP- HR	NetConnectGlobal	
	1078	Bhavana Jain	bhavana@netcore.co.in	Chief Human Resources Officer	Netcore Cloud	
	1079	Cynthia Rodrigues	cynthia@netcore.co.in	Group Vice President -HR	Netcore Cloud	
	1080	Sebastian Rodriguez	sebastian.rodriguez@netcore.co.in	Vice President & Global Head - Talent	Netcore Cloud	
	1081	Zulfiqar Syed	zulfiqar.syed@netcore.co.in	Associate Vice President - HR	Netcore Cloud	
	1082	Roshni J	roshni.j@netenrich.com	Director HR	Netenric,	
	1083	Narendra S	narendra.s@netenrich.com	Director Talent Acquisition	Netenrich,	
	1084	Shilpi Sardana	shilpi@netomi.com	Head of Talent Acquisition & People Operations	Netomi	
	1085	Mamtha Akula	mamtha.akula@netradyne.com	Talent Head at Netradyne	Netradyne	
	1086	Pooja Madappa	pooja.madappa@netradyne.com	Vice President Human Resources	Netradyne	
	1087	Manisha Dixit	mdixit@netrixllc.com	HR Director - Asia Pacific	Netrix	
	1088	Johnson Kasukurthi	johnsonk@netrovert.net	Delivery Head - Recruitment	Netrovert Software,	
	1089	Sheena Malhotra	sheena.malhotra@netsmartz.com	Head Human Resources	Netsmartz	
	1090	Yogita Sharma	yogita.sharma@netsmartz.com	Head-HR(People and Culture)	Netsmartz	
	1091	Chaitali Ray	cray@netwoven.com	Director HR	Netwoven	
	1092	Ujjal Sarkar	usarkar@netwoven.com	Head - HR, Operations & Finance	Netwoven	
	1093	Shyam Warrier	shyam.warrier@neudesic.com	Vice President Global Talent & Culture	Neudesic Technologies	
	1094	Ruchi Bhayani	ruchi.bhayani@neutrinotechsystems.com	Director - HR & Strategic Alliances	Neutrino Tech Systems	
	1095	Tarit Bhaumik	tarit.bhaumik@nevaehtech.com	Head HR	Nevaeh Technology	
	1096	Ratika Mirji	ratika.mirji@neviton.com	Head Of Human Resources	Neviton Softech.	
	1097	Lavita Nathani	lavita.n@endurance.com	Senior Director Human Resources	Newfold Digital	
	1098	Rena Soans	rena.so@endurance.com	Associate Director - HR Operations	Newfold Digital	
	1099	Vivek Saxena	vivek.saxena@newstechnologyservices.com	Head - HR Ops	News Technology Services	
	1100	Dhirendra Kamboj	dkamboj@newtglobalcorp.com	Director-Talent Acquisition	Newt Global Consulting	
	1101	Pradeep Kumar	pradeepkumar@newtglobalcorp.com	Director - Talent Management	Newt Global Consulting	
	1102	Prakash Kumaran	prakashk@newtglobalcorp.com	Associate Director Human Resources	Newt Global Consulting	
	1103	Meenakshi Kogje	meenakshi.kogje@newvisionsoftware.in	Global Director - Talent Acquisition	NewVision Software	
	1104	Lokesh Gurgela	lokesh@nexgeniots.com	Sr. Manager/Head - Talent Acquisition	Nexgen IOT Solutions	
	1105	Hemant Pawar	hemant.pawar@ndsglobal.com	Head HR	NextGen Digital Solutions	
	1106	Shambhavi Sharma	shambhavi.sharma@nexval.com	Chief Human Resources Officer	Nexval Group	
	1107	Srinath Gururajarao	srinath.g@nexval.com	Vice President & CHRO	Nexval Group	
	1108	Manjunath P	manju@nichi.com	Head - Finance, HR & Administration	Nichi-In Software Solutions	
	1109	Mayank Ahuja	mayank.ahuja@nickelfox.com	Head - Human Resources	Nickelfox Technologies	
	1110	Poornima Subramanian	poornima.s@d4insight.com	Associate Director - Human Resources	NielsenIQ	
	1111	Sudhir Shinde	sudhir.shinde@nielseniq.com	Associate Director - Talent Acquisition	NielsenIQ	
	1112	Ayush Daryani	ayush.daryani@niftel.com	Head Of Recruitment	Niftel Communications	
	1113	Ankur Beri	ankur.beri@niit-tech.com	Group Head Human Resources	NIIT Technologies	
	1114	Friend Friend	friend.friend@niit-tech.com	recruitment head	NIIT Technologies	
	1115	Trisha Chandra	trisha.chandra@nirvanasolutions.com	VP - Human Resource	Nirvana Solutions	
	1116	Rohini Wwagh	rohiniw@nitorinfotech.com	Vice President & Head HR	Nitor Infotech	
	1117	Sayanti S	sayanti.s@nitorinfotech.com	Associate Director - Talent Acquisition	Nitor Infotech	
	1118	Shailesh Banaeet	shailesh.banaeet@nitorinfotech.com	Associate Director - People Function	Nitor Infotech	
	1119	Rashmi George	rashmi.george@niveussolutions.com	Chief Talent Officer	Niveus Solutions	
	1120	Shipra Rai	shipra.rai@niveussolutions.com	Vice President People Operations	Niveus Solutions	
	1121	Ravish Chadha	ravish.chadha@niyuj.com	Director & Head of Talent Acquisition	Niyuj	
	1122	Sudhakar	sudhakar@noblesoft.com	Head Hunter Recruitment	Noblesoft Technologies	
	1123	Nevy George	nevyg@norwintechnologies.com	Director Talent Acquisition	Norwin Technologies	
	1124	Toshi Jain	t.jain@novelvox.com	Director - HR & Delivery Governance	NovelVox	
	1125	Animesh Kumar	animesh.kumar@novopay.in	Head HR, Novopay	Novopay	
	1126	Sumit Kathuria	sumit.k@nrconsultingservice.com	Chief Human Resources Officer (CHRO)	NR Consulting	
	1127	Vaibhav Kumar	kumar.v@nrconsultingservice.com	National Recruiting Director	NR Consulting	
	1128	Raju Vatsavayi	raju.vatsavayi@nsight-inc.com	Director - Human Resource	Nsight,	
	1129	Indrakumar Thirunavukkarasu	tindrakumar@ntrustinfotech.com	Head-HR (Chennai & US Operations)	NTrust Infotech	
	1130	Anirban Chakravorty	anirban.chakravorty@nttdata.com	Senior Director & Regional Head - Human Resources	NTT DATA	
	1131	Deepak Deshpande	deepak.deshpande@netmagicsolutions.com	Vice President - Human Resources	NTT DATA	
	1132	Harshiika Upadhyay	husahu@ciphercloud.com	Director Talent Acquisition	NTT DATA	
	1133	Paramananda Chabungbam	paramananda.c@itelligencegroup.com	Director - HRBP & Engagement	NTT DATA	
	1134	Rahul Choudhury	rahul@netmagicsolutions.com	Associate Vice President Human Resources	NTT DATA	
	1135	Raja Pamidi	raja.pamidi@nttdata.com	Delivery Head- Talent Acquisition	NTT DATA	
	1136	Sumukhi Jairam	sumukhi.jairam@nttdata.com	Sr. Director- Talent and Development	NTT DATA	
	1137	Zubair Wani	zubair.wani@netmagicsolutions.com	Associate Director - Human Resources	NTT DATA	
	1138	Nayaki Naidu	nayaki@numerictech.com	Head Of Human Resources	Numeric Technologies	
	1139	Poonam Dobriyal	poonam@nuvento.com	AVP -Human Resources	Nuvento Inc	
	1140	Shoaib Ahmed	shoaib.ahmed@nuware.com	Associate Vice President- Human Resources	NuWare	
	1141	Harpreet Bali	harpreet.bali@nvish.com	Director HR	NVISH Solutions	
	1142	Rajat Mehra	rajat.mehra@nxtgen.com	Head - Human Resources	NxtGen Infinite Datacenter	
	1143	Varna Nair	varna.nair@nxtgen.com	Head of HR	NxtGen Infinite Datacenter	
	1144	O2f Info	info@o2finfo.com	Head of HR	O2F INFO SOLUTIONS	
	1145	Vinod Reddy	vinod.r@o2finfosolutions.com	Delivery Head - Recruitment	O2F INFO SOLUTIONS	
	1146	Jyoti Gupta	jgupta@otsi-usa.com	Director - Talent Acquisition	Object Technology Solutions India	
	1147	Pradeep Boiri	pradeep.boiri@otsi.co.in	Senior Director - HR	Object Technology Solutions India	
	1148	Ashok Seshadri	ashok.seshadri@objectfrontier.com	Head - Global Talent Management	ObjectFrontier Software	
	1149	Harith Chambravalli	harith.chambravalli@observe.ai	Senior Director/India Head of Talent Strategy	Observe.AI	
	1150	Terence Anthony	terencea@observe.ai	Director Talent Acquisition	Observe.AI	
	1151	Utkarsh Tomar	utkarsht@observe.ai	Human Resources Director	Observe.AI	
	1152	Ravi Surathu	ravi@olivetech.com	Human Resources Director	Olive Technology	
	1153	Kartik Sehgal	kartik.sehgal@omnepresent.com	Head of Talent Acquisition	OmnePresent Technologies	
	1154	Pragati S	pragati@onamagroup.com	Head Of Human Resources	Onama Consultants	
	1155	Gautam Prasad	gautam.prasad@ondemandagility.com	Head - US Staffing	OnDemand Agility Solutions	
	1156	Rajat Das	rajat.das@ondemandagility.com	Talent Acquisition Head	OnDemand Agility Solutions	
	1157	Prof Chro	prof.dutt@onebcg.com	Head - People & Culture	ONE BCG	
	1158	Gurucharan Singh	guru@one.com	Head of Talent Acquisition	one.com	
	1159	Sujatha Venkatesan	sujatha.v@oneglobesystems.com	Head - Talent Acquisition & People Management	OneGlobe	
	1160	Nishu Mittal	nishu.nits@ongraph.com	Human Resources Director	OnGraph Technologies	
	1161	Isle Fernandes	isle@opendestinations.com	Vice President - HR & Admin	Open Destinations	
	1162	Karthik R	karthikr@operative.com	Head of HR, India (Managed Services)	Operative	
	1163	Madhavi G	madhavig@operative.com	Senior Head of HR, India (R&D)	Operative	
	1164	Narasimhan	narasimhan@opsera.io	Director - HR	Opsera	
	1165	Gautam Pathak	gautam.pathak@opshub.com	Vice President (Human Resources and Operations)	OpsHub,	
	1166	Thrishala Narule	thrishala.n@optit.in	Head - Finance & HR Operations	Opt IT Technologies	
	1167	Ramanjit Goswami	ramanjit.goswami@inadev.com	Director - Human Resources	Optimize IT Systems	
	1168	Vithika Binjrajka	vithika@optimizeitsystems.com	Vice President Human Resources	Optimize IT Systems	
	1169	Swapna Krishna	swapna.krishna@theoptimum.net	AVP-Human Resources	Optimum Solutions	
	1170	Piali Goswami	piali.goswami@optimusinfo.com	HR Head	Optimus Information	
	1171	Trupti Shukla	trupti.shukla@optym.com	Director HR	Optym	
	1172	Babitha Nambiar	babitha.nambiar@opusconsulting.com	VP - Head Human Resources	Opus Consulting Solutions	
	1173	Ruchi Mago	ruchi.mago@orange.com	Head HR Shared Services International	Orange Business Services	
	1174	Shruti Malhotra	shruti.malhotra@orange.com	Head HR Projects - APAC	Orange Business Services	
	1175	Sudeep Luthra	sudeep.luthra@orange.com	Head - Human Resources	Orange Business Services	
	1176	Thierry Flury	thierry.flury@orange.com	Director International HR Shared Services	Orange Business Services	
	1177	Pragatii Choudhary	hr.orbit@orbitindia.net	Head of HR	Orbit Techsol	
	1178	Arunima Bhushan	arunima.bhushan@orcapodservices.com	AVP-HR	Orcapod	
	1179	Deepti Bathija	deepti.bathija@orcapodservices.com	AVP - (Contract Staffing - BFSI & Service Clients)	Orcapod	
	1180	Bindu Krishnan	bindu.krishnan@ospyn.com	Director-Human Resources and Administration	Ospyn Technologies	
	1181	Vivek Gaur	vivek@pacificbpo.com	Chief Peoples Officer	Pacific Global	
	1182	Priyanka Jaiswal	pjaiswal@paktolus.com	Head Of Human Resources	Paktolus Solutions	
	1183	Charles Timothy	charles.t@palni.com	Director HR	Palni Inc	
	1184	Nilangini Gupta	nilangini.gupta@panamaxil.com	VP People Management and Talent Growth	Panamax	
	1185	Nusrat Supediwala	nusrat.supediwala@panamaxil.com	AVP Talent Acquisition	Panamax Infotech	
	1186	Honeydeep Sabharwal	honeydeep@pando.ai	Sr Director - HR	PandoCorp	
	1187	Mohammed Yaseen	tariq.yaseen@panzertechnologies.net	Director Talent Acquisition	Panzer Technologies	
	1188	Mujeeb Khan	mujeeb@panzertechnologies.net	Head - Talent Acquisition	Panzer Technologies	
	1189	Syed Quddus	syed@panzertechnologies.com	Director - Talent Acquisition	Panzer Technologies	
	1190	Ramakrishna Jampala	ramakrishna.jampala@paradigmit.com	Head - HR	ParadigmIT	
	1191	Kalyani Mahajan	kalyani.mahajan@paramatrix.com	Associate Vice President Human Resources	Paramatrix Technologies.	
	1192	Aparna Srikanth	aparna.srikanth@appsian.com	Head, Human Resources - India	Pathlock	
	1193	Ashish Karnik	ashish.karnik@pavilion.io	Head Performance Engineering	Pavilion	
	1194	Pallavi Singh	pallavi.singh@paycraftsol.com	Associate Vice President - Human Resources	Paycraft Solutions	
	1195	Prakash Balasubramanian	prakash.b@payoda.com	Head Of Human Resources	Payoda Technology	
	1196	Vijayalakshmi Subramaniam	vijayalakshmi.s@payoda.com	Associate Vice President- Human Resources	Payoda Technology	
	1197	Dipti Goel	dipti@insider.in	Head Of Human Resources	Paytm Insider	
	1198	Mamta Nath	mamta.nath@e-pspl.com	Head - HR	PC Solutions	
	1199	Rimpee Kukreja	rkukreja@pelican.ai	Global HR Head	Pelican.ai	
	1200	Atin Karmokar	atin.karmokar@pentagon.co.in	AVP - Head Human Resources & Admin	Pentagon System and Services	
	1201	Malini Venugopal	malini.venugopal@people10.com	Director Human Resources	People10 Technologies	
	1202	Remisa Dhar	remisa.dhar@percipere.co	Head Of Human Resources	Percipere	
	1203	Gracy Dsouza	gracy@perfios.com	Associate Director Human Resources	Perfios Software Solutions	
	1204	Jasmine Framjee	jasmine.f@ptechnosoft.com	Head HR	Perpetuuiti Technosoft PTE	
	1205	Dipesh Jain	dipesh@pesto.tech	Head - Talent Acquisition	Pesto Tech	
	1206	Shilpika Raheja	shilpikar@petroit.com	Global Head Human Resources	Petro IT	
	1207	Anand Khot	anandk@pharmarack.com	Chief Human Resources Officer	Pharmarack	
	1208	Ridhima Gera	ridhimag@pharmarack.com	Associate Director HR	Pharmarack	
	1209	Manashi Chakraborty	mchakraborty@phdata.io	Director Of People Operations, India	phData	
	1210	Manish	mtripathi@phdata.io	Director Talent Acquisition	phData	
	1211	Sandeep Jaiswal	adops@phoenixsoftwares.in	Head - Performance Delivery	Phoenix Advanced Softwares	
	1212	Monica Kamal	monica@pingasolutions.com	Director & HR Head	Pinga Solution	
	1213	Job Pixentia	jpixentia@pixentia.com	Chief People Officer	Pixentia	
	1214	Tariq Khan	tariq@pfinfotech.com	HR Head	Placement Services	
	1215	Tulasi Pochampally	tpochampally@hostanalytics.com	Senior Director, People Operations	Planful	
	1216	Veena Vishnu	veena.vishnu@plansource.com	Senior Director, HR	PlanSource	
	1217	Vishwa Kapadia	vishwa@platform9.com	Chief People Officer	Platform9 Systems	
	1218	Prabha Masilamani	prabha.masilamani@plivo.com	Director - Human Resources	Plivo	
	1219	Kunal Wadhwani	kunal.wadhwani@pocketfm.com	Director - Human Resources	Pocket FM	
	1220	Kranthi Kumar	kkumar@polarismanagement.com	Director Human Resources	Polaris	
	1221	Srinivas Polaris	srinivas.polaris@polarismanagement.com	Director HR	Polaris	
	1222	Chaitanya Peeta	chaitanya.peeta@polygon.technology	Vice President Human Resources	Polygon	
	1223	Sanchari	sanchari@polygon.technology	Vice President - HR Finance	Polygon	
	1224	Swarup Chilumkuru	swarup@polygon.technology	Global Head - People Operations	Polygon	
	1225	Kuldeep Gupta	kuldeepg@porteck.com	Head Of Human Resources	Porteck Corporation	
	1226	Philip Manikya	philip.manikya@posidex.com	Chief People Officer	Posidex	
	1227	Nupur Phatak	nphatak@potomactpl.com	Vice President Human Resources	Potomac Technologies	
	1228	Swapnil Bhoskar	swapnil.bhoskar@pragmasys.in	Head-HR	Pragmasys Consulting	
	1229	Anitha Prabhakar	anitha.prabhakar@pramati.com	HR Director	Pramati Technologies	
	1230	Paul	paul.jacob@pramati.com	Director- Human Resources	Pramati Technologies	
	1231	Sonal Upadhyay	sonal.upadhyay@thepsi.com	Head Human Resource	Pratham Software	
	1232	Nisha Motwani	nisha.motwani@pratititech.com	Head of Human Resources	Pratiti Technologies	
	1233	Monika Jasrotia	monika@precisiontechcorp.com	HR- Manager/Admin Head	Precision Technologies	
	1234	Pranay Mahadik	pranay@precisiontechcorp.com	AVP - Talent Acquisition	Precision Technologies	
	1235	Shubhendu Bose	bose@precisiontechcorp.com	Sr. Vice President - HR & Operations	Precision Technologies	
	1236	Prasad Reddy	prasad_r@preludesys.com	Associate Vice President - IT & HR	PreludeSys	
	1237	Deepti Waghmare	deeptiw@pre-scient.com	Director - Legal, HR & Admin	Prescient Technologies	
	1238	Naveen Kumar	naveen@primusglobal.com	Associate Director Talent Acquisition	PRIMUS Global Technologies	
	1239	Ravneet Kaur	rkaur@primusglobal.com	Delivery Head (UK and Europe recruitment)	PRIMUS Global Technologies	
	1240	Sreetam Mohanty	smohanty@primusglobal.com	Head Of Recruitment	PRIMUS Global Technologies	
	1241	Narayana Pawar	narayana.pawar@privafy.com	Director, Human Resources & Biz. Ops.	Privafy	
	1242	Sowmya Anish	sowmya@probeinformation.com	Head Human Resources	Probe42	
	1243	Shaheen Malim	shaheen@prodevans.com	VP – HR & Operations	Prodevans Technologies	
	1244	Ruchi Hr	ruchi@prodexnet.com	Head - HR & Talent Acquisition	ProdEx Technologies	
	1245	Ramya Hv	ramya.hv@profinch.com	Head Of Human Resources	Profinch	
	1246	Ramya Venkatesh	ramya.venkatesh@profinch.com	Head Of Human Resources	Profinch	
	1247	Lydia D'Souza	lydia.dsouza@progilitytech.com	Head - Human Resources	Progility Technologies	
	1248	Lydia Dsouza	lydia.dsouza@progility.com.au	Head Human Resources	Progility Technologies	
	1249	Divya Jaggi	divyajaggi@promactinfo.com	Chief People Officer	Promact Infotech	
	1250	Padmanav Kundu	padmanavk@nsdl.co.in	Head of Rewards & HR Operations	Protean eGov Technologies	
	1251	Minal Wadlawala	minal@protechmanize.com	Chief Human Resources Officer	ProTechmanize Solutions	
	1252	Sivasankar R	sivasankar.r@provintl.com	Global HR Head	ProV International	
	1253	Vinita Jayapalan	vinita.jayapalan@provintl.com	Director - Global People & Culture	ProV International	
	1254	Neelam Sharma	neelam.sharma@provartesting.com	Head of People and Culture, India	Provar Testing	
	1255	Ravindra Musunuru	ravindra.musunuru@prowesssoft.com	Vice President Human Resources	Prowess Software Services	
	1256	Sasikala Vedam	sasikala.vedam@prowesssoft.com	Head of Talent Acquisition & Resource Management	Prowess Software Services	
	1257	Deepali	deepali@proximity.tech	Director - People Operations	Proximity Works	
	1258	Aswin Prashannth	aswin@psrtek.com	Head Talent Acquisition of India Operation	PSRTEK	
	1259	Arun Singh	arun.singh@puresoftware.com	Senior Director Talent Acquisition	PureSoftware	
	1260	Sundeep Pandey	sundeep.pandey@puresoftware.com	Director Technology (US Health Care)	PureSoftware	
	1261	Sweety Nair	sweety.nair@puresoftware.com	Associate Director - HR	PureSoftware	
	1262	Richie Joseph	joseph@purpletalk.com	Director - Talent Development	PurpleTalk	
	1263	Nikhil Mooley	nikhil.m@purplle.com	Head Of Human Resources, L&D	Purplle.com	
	1264	Ramesh Parepalli	ramesh.parepalli@purviewservices.com	Global Recruitment Director	PURVIEW	
	1265	Vaibhav R	r.vaibhav@pixis.ai	Global Head of Talent Acquisition	Pyxis One	
	1266	Rajeeb Biswas	rajeeb@q3tech.com	Director-HR & Admin	Q3 Technologies	
	1267	Manik Mahajan	manikmahajan@qainfotech.com	Director, Performance Engineering	QA InfoTech	
	1268	Manik Mondal	manik.mondal@qbadvisory.com	Director Talent Acquisition (India)	QBA Worldwide	
	1269	Ashraf Mulla	ashraf.mulla@qseap.com	AVP- Talent Acquisition & Strategy	qSEAp Infotech	
	1270	Kanchan Verma	kanchan.verma@qsstechnosoft.com	Head Of Human Resources	QSS Technosoft	
	1271	Shahed Akhter	shahed@quadrantresource.com	Director - Human Resources	Quadrant Resource	
	1272	Sitaram Kuruganti	sitaram.kuruganti@quadrantresource.com	Director Human Resources & TA	Quadrant Resource	
	1273	Moumi Chatterjee	moumi@spartanpoker.com	Assistant Vice President Human Resources	QUADRIFIC MEDIA	
	1274	Tapas Chatterjee	tapas@spartanpoker.com	President - Human Resources	QUADRIFIC MEDIA	
	1275	Madhu Nakkala	madhu.n@qualizeal.com	Head of Talent Acquisition	QualiZeal	
	1276	Sreeram Kaviliga	sreeram@qualizeal.com	Head Of Human Resources	QualiZeal	
	1277	Janani Prakaash	janani.prakaash@quantela.com	Head HR	Quantela	
	1278	Deepti Tewari	dgtewari@quark.com	Global Human Resources Director	Quark Software	
	1279	Swarup Chowdhury	swarup.chowdhury@qtsolv.com	Director-HR & Finance	Quarks	
	1280	Priya Tyagi	priya@quartic.ai	Head Of Human Resources	Quartic.ai	
	1281	Mohammad Siddique	msiddique@quessgts.com	Head of Talent Acquisition	Quess GTS	
	1282	Lakshmipriya Babu	lakshmi.p@qis.co.in	Head-Human Resources & Placements	Quest Innovative Solutions	
	1283	Jeswin Thomas	jeswin.thomas@questionpro.com	Head, Customer Success Team | WorkForce	QuestionPro	
	1284	Archana Kunde	archana@quinbay.com	Human Resources Director	Quinbay	
	1285	Arjita Chawla	arjita.chawla@quytech.com	Head Of Human Resources	Quytech	
	1286	Nirupama Sridhar	sridhar.n@qwikcilver.com	Head HR	Qwikcilver Solutions	
	1287	Shikha Gupta	shikha@rahinfotech.com	HR Head	RAH Infotech	
	1288	Vijay Gupta	vijay.gupta@rahisystems.com	Director of Global Human Resources	Rahi	
	1289	Madhuri Palaji	mpalaji@randomtrees.com	Head - Talent Acquisition Group	RandomTrees	
	1290	Santosh Sakhare	santosh.s@telematics4u.com	Head Of Human Resources	Rane t4u	
	1291	Chirag Patel	chirag.patel1@rangtech.com	Talent Acquisition Manager & Head-hunter	Rang Technologies Inc	
	1292	Varsha Raghav	tyson@rapidinnovation.dev	Head of HR	Rapid Innovation	
	1293	Farheen Hassan	farheen@rapidflowapps.com	Associate Director - HR	Rapidflow Inc	
	1294	Aravind Warrier	aravind.warrier@rapidvaluesolutions.com	Human Resources Director	RapidValue	
	1295	Ankit Tomar	ankit.tomar@rategain.com	Associate Director HR Transformation	RateGain	
	1296	Garima Pandey	garima.pandey@rategain.com	Associate Director - Global Talent Acquisition	RateGain	
	1297	Luisa Mohanty	luisa.mohanty@rategain.com	Associate Vice President - Human Resources	RateGain	
	1298	Rashmi Chauhan	rashmi.chauhan@rategain.com	Global Head - Talent Acquisition	RateGain	
	1299	Sahil Sharma	sahil.sharma@rategain.com	Global Head - Human Resources	RateGain	
	1300	Saud Zafar	saud.zafar@raydeninteractive.com	Vice President Human Resources	Rayden Interactive	
	1301	Byju Valappil	byju@rdalabs.com	Senior Director - HR	RDAlabs	
	1302	Parneet Waraich	parneet.waraich@myrealdata.in	Vice President Human Resources (Head HR)	Real Time Data Services	
	1303	Jagadish V	jagadish.v@realworld-one.com	Head of Talent Management and Culture	realworld one	
	1304	Shenoj Balaraman	shenoj.balaraman@rebit.org.in	Vice President Human Resources	ReBIT	
	1305	Nigel Crisanto	nigel@recruitnxt.com	Head Of Human Resources	RecruitNXT	
	1306	Sayeram Balakumar	sayeram.balakumar@reflectionsinfos.com	Head of Talent Acquisition & Sourcing	Reflections Info Systems	
	1307	Tara Cherian	tara.cherian@reflectionsinfos.com	HR Director	Reflections Info Systems	
	1308	Usha Chirayil	usha.chirayil@reflectionsinfos.com	Director Human Resources	Reflections Info Systems	
	1309	Sunita Dave	sdave@relsci.com	Director of Human Resources	Relationship Science	
	1310	Pathanjali Bhat	pathanjali.bhat@relevancelab.com	Director - HR	Relevance Lab	
	1311	Syed Faizan	syed.faizan@rsrit.com	Director Talent Acquisition	Reliable Software	
	1312	Kirti Manucha	kirti.manucha@religare.com	President - HR	Religare Technova	
	1313	Anupam Srivastava	anupam.srivastava@reltio.com	Head Of Human Resources	Reltio	
	1314	Anirudhan Vasudevan	anirudhan.vasudevan@replicon.com	Senior Director Human Resources	Replicon	
	1315	Shashank Shekher	shashank.s@replicon.com	Head Of Talent Acquisition	Replicon	
	1316	Vidya Srikumar	vsrikumar@reputation.com	Human Resources Director	Reputation.com	
	1317	Sophronia Kasab	sophronia@reshamandi.com	Chief Human Resources Officer	ReshaMandi	
	1318	Subramanya Srikant	subramanya@reshamandi.com	Head Of Human Resources	ReshaMandi	
	1319	Rajani Patel	rajanip@resilienceitusa.com	Chief People Officer	Resilience InfoTech	
	1320	Gayathri Nagaraj	gayathri.nagaraj@responsivemts.com	Head Of Human Resources	Responsive Media Tech Services	
	1321	Vinutha Govindan	vinutha.govindan@resulticks.com	Head of Talent Experience	Resulticks	
	1322	Mohammed Rizwan	mohammed.rizwan@reverieinc.com	Head Of Human Resources	Reverie Language Technologies	
	1323	Sharwari Shah	sharwari.shah@revgurus.com	Director Human Resources	RevGurus Inc	
	1324	Bedisha Karmakar	bedisha@reward360.co	Senior Director People Operations	Reward360 Global Services.	
	1325	Binoy Varghese	binoy.varghese@rgigroup.com	Group Head (Human Resources)	RGI Group	
	1326	Sameer Deo	sameer.deo@riaadvisory.com	Head of HR and Operations	RIA Advisory	
	1327	Praveen Nambiar	praveen.nambiar@rigvedtech.com	Head Of Human Resources	Rigved Technologies	
	1328	Tanuj	tanuj.sonawale@riomed.com	Head - HR and Operations, India (Director)	RioMed	
	1329	Shani Ramakrishnan	shani.ramakrishnan@ritesoftware.com	Vice President - Global Talent Acquisition	Rite Software	
	1330	Shankar Darna	shankar.d@ritesoftware.com	AVP-Talent Acquisition	Rite Software	
	1331	Sumalatha Duggu	sumalatha.d@ritesoftware.com	Head -Human Resources	Rite Software	
	1332	Vamshi Krishna	vamshi.krishna@ritesoftware.com	AVP Global Talent Acquisition	Rite Software	
	1333	Sweta Jain	sweta@rizzle.tv	HR Head & General Manager	Rizzle	
	1334	Keerthi Vinodh	keerthi.v@rlabsglobal.com	Director Human Resources	RLabs Enterprise Services	
	1335	Sanitha Singh	ssingh@in.rm.com	Chief People Officer	RM Education Solutions India.	
	1336	Gunjan Mishra	gunjan@rnftechnologies.com	Head Of Human Resources	RNF Technologies	
	1337	Ruchika Chawla	ruchika@rooter.io	Head HR	Rooter App	
	1338	Ranjan Hooda	ranjan.hooda@rpsconsulting.in	Head - Client Management & Talent Acquisition	RPS Consulting	
	1339	Nita Aryasomayajula	naryasomayajula@rrootshell.com	Global Human Resources Director	Rrootshell Technologiiss	
	1340	Pratim Purkait	pratim.purkait@rtns.in	Head of HR	RT Network Solutions	
	1341	Oindrila Das	oindrila.das@rteservices.com	Group Head-HR	RT Outsourcing Services	
	1342	Joel Lobo	joel.lobo@rtcamp.com	Human Resources Director	rtCamp	
	1343	Shwetha Sethuraman	shwetha@rudderstack.com	Head Of Human Resources	RudderStack	
	1344	Manoj Sehgal	manoj.sehgal@rvu.in	Head of People Services/ HR ( India)	RVU India	
	1345	Shalini	singh.shalini@rxlogix.com	Associate Director Human Resources	RxLogix	
	1346	Dipti Kothari	dipti.kothari@satincorp.com	Recruitment Delivery Head	SA Technologies	
	1347	Jairaj Jagtap	jairaj.jagtap@satincorp.com	Delivery Head- Recruitment/ Recruiting Head	SA Technologies	
	1348	Kuldeep Chobey	kuldeep.chobey@satincorp.com	Director-HR & Operations	SA Technologies	
	1349	Chandini Davies	chandinid@saglobal.com	Head Of Human Resources	sa.global	
	1350	Payal Parmar	payal@safe.security	Senior Director, Global Talent Acquisition	Safe Security	
	1351	Swati Dev	swati.d@safe.security	Senior Directo Talent Acquisition	Safe Security	
	1352	Aradhana Gupta	aradhana@safexpay.com	Chief People Officer	SafexPay	
	1353	Nisha Nair	nisha.nair@sagarsoft.in	Head - Human Resources & TAG	Sagarsoft	
	1354	Santosh Prajapati	santosh.prajapati@saggezza.com	Talent Acquisition Head	Saggezza	
	1355	Ravi Kumar	rkumar@saiconinc.com	Recruitment Operations-Director	Saicon	
	1356	Joshua T	joshua.t@sailotech.com	Associate Director - HR & Compliance	Sailotech	
	1357	Thejaswini Kulkarni	thejaswini.kulkarni@sakhatech.com	Head - HR & Admin	Sakhatech Information Systems	
	1358	Paul Thomas	paul@salesken.ai	Head Human Resources	Salesken	
	1359	Sweta Bidwai	sbidwai@saltside.se	Director - People & Operations	Saltside	
	1360	Yogesh Waran	yogesh.waran@sandhata.com	Director- Talent Acquisition	Sandhata Technologies	
	1361	Sai Teja	sai.t@saranshinc.com	Head HR	Saransh Inc	
	1362	Manju Jacob	manju.jacob@sarvatra.in	AVP -Human Resources	Sarvatra Technologies	
	1363	Mithun Jose	mithun.jose@savantis.com	Head- Staffing	Savantis Solutions LLC	
	1364	Swapna Jaladi	swapna.jaladi@savantis.com	Vice President - HR & Operations	Savantis Solutions LLC	
	1365	Vignesh Sanga	vignesh.sanga@savantis.com	Global HR Head	Savantis Solutions LLC	
	1366	Nikhil Jangir	nikhil.jangir@saviance.com	Director - Global Staffing & Recruitment	Saviance Technologies	
	1367	Sheetal Pote	sheetal.pote@saviantconsulting.com	VP of Human Resources	Saviant Consulting	
	1368	Karthikeyan Sivasubramanian	karthikeyan.sivasubramanian@saviynt.com	India Head - Talent Acquisition	Saviynt	
	1369	Krishnan Vr	krishnanvr@savvy-it.com	Director HR	Savvysoft Technologies	
	1370	Vaibhav Ghai	vaibhav@scienaptic.com	Head HR	Scienaptic AI	
	1371	Santosh Singh	santosh.singh@scikey.ai	Director - Talent Solutions	SCIKEY	
	1372	Sindhu Prabakar	sprabakar@sciohealthanalytics.com	Senior Director HR & Admin	SCIO Health Analytics	
	1373	Nirmal Nimodiya	nirmaln@scorgconsult.com	Head of Staffing & Alliances	SCORG International Consulting	
	1374	Kamla Mulla	kamla.mulla@se2.com	Global Director, Talent Development	SE2	
	1375	Pushpinder Singh	pushpinder.singh@se2.com	Global Head - Talent Acquisition	SE2	
	1376	Surabhi Sharma	surabhi.sharma@se2.com	Head Of Human Resources	SE2	
	1377	Nisha Singh	nisha.s@seanergydigital.com	Director Human Resources	Seanergy Digital	
	1378	Ragini Mahapatra	ragini.m@seanergydigital.com	Human Resources Director	Seanergy Digital	
	1379	Sudhir Salve	sudhir.salve@searshc.com	Head - Talent Acquisition	Sears Holdings India	
	1380	Sanika Arora	sanika.arora@piri.ai	Vice President Human Resources	Secomind.AI	
	1381	Anand K	ak@8kmiles.com	Vice President Human Resources	SecureKloud Technologies	
	1382	Dipika Sharma	dipikasharma@slx.co.in	Head of HR at Securelynkx Networks	Securelynkx Networks	
	1383	Janet Paul	jpaul@securonix.com	Human Resources Director	Securonix	
	1384	Avinash Poojari	avinash@sedintechnologies.com	AVP - Talent Acquisition	Sedin Technologies	
	1385	Sridevi Ramoo	sridevi@sedintechnologies.com	Global Head Human Resources	Sedin Technologies	
	1386	Raman Tsk	rtsk@seec.com	HR-Director	SEEC	
	1387	Sonali Patnaik	sonalip@selectsourceintl.com	Head HRBP	Select Source International	
	1388	Vivek	vivekj@selectsourceintl.com	Director Of Operations (Recruitment & Delivery)	Select Source International	
	1389	Raj Kish	r.kish@selectsys.com	Head of Human Resources	Selectsys India	
	1390	Vijayeta Rohilla	vijayeta@sellcraft.net	Delivery Head-Talent Acquisition	Sellcraft Global Solutions	
	1391	Nandita Singh	nandita.singh@selp.in	Manager - HR (Plant HR Head)	SELP	
	1392	Ashok Putsala	ashok.putsala@senecaglobal.com	Associate Vice President - Talent Acquisition	SenecaGlobal	
	1393	Dilip Borah	borah.dilip@senrysa.com	Chief People Officer	Senrysa Technologies	
	1394	Shivangi Chauhan	shivangi@sensehq.com	Head of Talent Acquisition	Sense	
	1395	Anish Raj	anish.raj@sentieo.com	Human Resources Director	Sentieo	
	1396	Neelakanteshwar Rao	neel.rao@serole.com	Head HR	Serole Technologies	
	1397	Varsha Shekar	varsha.shekar@servicemax.com	Human Resources Director	ServiceMax	
	1398	Pradeep Sinha	pradeep@servosys.com	Head HR & Quality	Servosys Solutions	
	1399	Prasanna Soparkar	prasanna.soparkar@steeplap.com	Vice President - Human Resources	Shell Transource	
	1400	Arun Kumar	arun.kumar@shipsy.io	Mentor/ Chief People Officer	Shipsy	
	1401	Ekta Chowdhry	ekta.chowdhry@shipsy.io	Head of Talent Acquisition	Shipsy	
	1402	Vishwajit Sakhare	vishwajit@shivaami.com	Director - Renewals, HR and Admin	Shivaami Cloud Services	
	1403	Devika Chauhan	devika@shopx.in	Director Human Resource	ShopX	
	1404	Irudia Anthony	irudia.anthony@h1insights.com	Associate Vice President - Human Resources	Shore Group Associates	
	1405	Anita Noronha	anoronha@shorewise.com	Global Head Human Resources	ShoreWise Consulting	
	1406	Pavan Vangala	pavanv@sidgs.com	Director Talent Acquisition	SID Global Solutions	
	1407	Sangeetha Bodduna	sangeethab@sidgs.com	Engineering Recruiter & Head of Recruitments	SID Global Solutions	
	1408	Joy Dupati	joy.dupati@sierraatlantic.com	Head- Recruitment	Sierra Atlantic	
	1409	Vijaya R	vijayar@sightspectrum.com	Chief People Officer	SightSpectrum LLC	
	1410	Suvarna Fuke	suvarna_f@sigma-byte.com	Head HR	Sigma-Byte Computers	
	1411	Mamtha	mamtha@sigmoidanalytics.com	Director Talent Acquisition - Leadership Hiring	Sigmoid	
	1412	Shravan Kumar	shravan@sigmoid.com	Director Talent Acquisition	Sigmoid	
	1413	Shweta Sharma	shweta@signitysolutions.com	Head of HR	Signity Software Solutions	
	1414	Seema Singh	seema.singh@sigtuple.com	Head of HR	SigTuple	
	1415	Subhash Chandra	subhash.chandra@silverlinecrm.com	Head of People Operations - India	Silverline	
	1416	Ashraf Kazi	ashraf.kazi@simplifyhealthcare.com	Associate Director Talent Acquisition	Simplify Healthcare	
	1417	Kavita Tandon	kavita.tandon@simplifyhealthcare.com	VP, Global Head of HR	Simplify Healthcare	
	1418	Sadi Hussain	sadi.hussain@simpplr.com	Senior Manager Talent Acquisition (TA Head)	Simpplr	
	1419	Sandhya Tripathi	sandhya@singsys.com	Director(HR and Administration)	Singsys Pte	
	1420	Anurag Rana	anurag.rana@sirionlabs.com	Head of Human Resources	SirionLabs	
	1421	Benoy Koshy	benoy.koshy@sisainfosec.com	Head of Talent Acquisition	SISA	
	1422	Shalini Bhasin	shalinib@sixsails.com	Head Of Human Resources	SixSails	
	1423	Kavitha	kavitha@6thenergy.com	Human Resource Head	Sixth Energy Technologies	
	1424	Deepashree V	deepashree.v@skience.com	HR Head - India	Skience	
	1425	Kamaldeep Singh	ksingh@skillgigs.com	Director of Talent Acquisition and Promotion	skillgigs.com	
	1426	Samir Mehta	samir.mehta@skill-mine.com	Director Talent Acquisition	Skillmine Technology Consulting	
	1427	Rakesh Arora	rakesh.arora@skilrock.com	Group CHRO	Skilrock Technologies	
	1428	Imran Nazir	imrannd@skoruz.com	Vice President-(Talent Acquisition/Analytics)	Skoruz Technologies	
	1429	Sreeja Sreedharan	sreeja.sreedharan@skuad.io	Director - Global Payroll	Skuad	
	1430	Manu's Jobs	jobs@skyonn.com	IT RECRUITING HEAD	SkyOnn Technologies	
	1431	Nirupa Leeladhar	nirupa.l@smaartt.com	SVP - HR & Talents	Smaartt Digital Consulting	
	1432	Chaitanya Kanthi	chaitanya.kanthi@smartims.com	Senior Director - Human Resources	Smart IMS	
	1433	Deepthi Kesireddy	deepthi.kesireddy@smartims.com	Head of Human Resources	Smart IMS	
	1434	Raveendra Datla	raveendra.datla@smartims.com	Head of Talent Acquisition	Smart IMS	
	1435	Shashi Dhar	shashi.dhar@smartims.com	Head of Talent Acquisition	Smart IMS	
	1436	Parul Gala	parul.gala@smarteinc.com	VP of Products and HR	SMARTe	
	1437	Rehana Inamdar	rehana.inamdar@smarteinc.com	Head of Talent Acquisition	SMARTe	
	1438	Narayana Bvs	narayana@smartedgesolutions.co.uk	Head - HR & Operations	Smartedge Solutions	
	1439	Anna Andrews	annaa@smartek21.com	Head-Human Resources (India)	SmarTek21	
	1440	Meghna Mahajan	meghnam@smartek21.com	Human Resources Director	SmarTek21	
	1441	Nishant Gawand	nishant@smartkargo.com	Vice President Human Resources	SmartKargo	
	1442	Mayur Pabari	mayur.pabari@smartsensesolutions.com	CEO & CHRO	smartSense Consulting Solutions	
	1443	Megh Risaldar	megh.risaldar@sms-magic.com	Director and Head of Human Resources	SMS-Magic	
	1444	Raghunath Gawde	rgawde@softcell.com	Corporate Head- Finance & HR	Softcell Technologies Global	
	1445	Rashmi Taksande	rashmi.taksande@softdel.com	HR Director	Softdel	
	1446	Shraddha Adarkar	first@softenger.com	AVP & Head - Human Resources	Softenger	
	1447	Murali Nagarajan	murali@softlogicsys.in	HR and Operations Head	Softlogic Systems	
	1448	Aparna Gunjikar	aparna.gunjikar@softnautics.com	Head Of Human Resources	Softnautics	
	1449	Jitesh Asna	jitesh@softnice.com	AVP - US HR Operations	SoftNice	
	1450	Rajesh Babu	rajesh.babu@softobiz.com	Head of Talent Acquisition	Softobiz Technologies	
	1451	Praveen Rao	praveen.r@softpath.net	Associate Director - HR	Softpath System	
	1452	Rahul Agrawal	rahul.a@softpath.net	Director & BU Head - Talent Acquisition	Softpath System	
	1453	Subbarao Cvrk	subbarao.c@softpath.net	Vice President & Global Head HR	Softpath System	
	1454	Nagamani Yerneni	nagamani.yerneni@softsol.com	Head - HR & Operations	SoftSol	
	1455	Chandrashekar R	chandrashekarr@softura.com	Head of Human Resources	Softura	
	1456	Mary Naidu	mary@software.com	Head HR	Software	
	1457	Udit Gupta	udit@dataincindia.com	Delivery Head - Talent Acquisition	Software Data (India) - SDIL	
	1458	Sakshi Agrawal	sakshi.agrawal@solacetechnologies.co.in	Head Of Human Resources	Solace Infotech	
	1459	Leena Xavier	leena.xavier@solitontech.com	Head of Leadership, Talent	Soliton Technologies	
	1460	Geetanjali Toopran	geetanjali.toopran@solix.com	Head-HUman Resources	Solix Technologies,	
	1461	Shubha Menon	shubha.menon@soltius.co.id	Head HR	Soltius Indonesia	
	1462	Anil Moturi	anil.moturi@solugenix.com	Director Talent Acquisition	Solugenix	
	1463	Uthappa Kuppanda	uthappa.kuppanda@solugenix.com	Head of Talent Acquisition	Solugenix	
	1464	Solution Head	solution.head@solutionanalysts.com	Head Of Human Resources	Solution Analysts	
	1465	Ravishanker Kannan	ravishanker.kannan@solverminds.com	Head-Talent Acquisition	Solverminds Solutions & Technologies	
	1466	Reena Bajaj	reena.bajaj@solverminds.com	Head Of Transformation - Human Resources	Solverminds Solutions & Technologies	
	1467	Shanthi Abayam	shanthi.abayam@solverminds.com	HR Head	Solverminds Solutions & Technologies	
	1468	Kalyan Neelagiri	kalyan.neelagiri@soroco.com	Director of Talent Acquisition	Soroco	
	1469	Phani Kumar	phani.kumar@soroco.com	Director Talent Acquisition	Soroco	
	1470	Rama C	rama.c@soroco.com	Head of People Operations	Soroco	
	1471	Parvathy Therembil	parvathy.therembil@sourcebits.com	Vice President and Head HR	Sourcebits Digital	
	1472	Ravdeep Singh	ravdeep.singh@sourcefuse.com	Chief People Officer	SourceFuse Technologies	
	1473	Kavitha Martin	mkavitha@sourcetrace.com	Vice President HR	SourceTrace	
	1474	Ravichandran Perumal	ravichandran@spantechnologyservices.com	VP - Excise & Payroll Tax	Span Technology Services	
	1475	Ranjit Dhillon	ranjitd@spancobpo.com	SITE HEAD, HUMAN RESOURCES	Spanco BPO	
	1476	Radhakrishna K	radhakrishnak@spanidea.com	Associate Director - HR	SpanIdea Systems	
	1477	Ashok Manjunath	ashok@spenmo.com	Head of Talent Acquisition	Spenmo	
	1478	Nitish Kumar	nitish.k@sphinxworldbiz.com	Head- Talent Acquisition	Sphinx Worldbiz	
	1479	Sharika Bhatte	sharika.bhatte@spiceworks.com	Associate Practice Director, Human Resources	Spiceworks Ziff Davis	
	1480	Srividhya Deshpande	srividhya.deshpande@springml.com	Senior Director Human Resources	SpringML,	
	1481	Karthik Ingarsal	karthik.i@springworks.in	Vice President - Human Resources	Springworks	
	1482	Charan Singh	charan@srinipharma.com	HEAD /HR	SRINI PHARMACEUTICALS	
	1483	Asenath Sharon	sharon@srinsofttech.com	Associate Vice President - HR	SrinSoft Technologies	
	1484	Chandrakanth K	chandra@srivensys.com	Head of Recruiting Operations	Sriven Systems	
	1485	Anusha Jayachandran	anusha@srswebsolutions.com	Head - Human Resources Operations	SRS Web Solutions	
	1486	Sudeep Chakkingal	sudeep.chakkingal@ssitsol.com	Head of Talent Acquisition	SSIT,	
	1487	Devershi Desai	devershi.desai@ssminfotech.com	Head -Human Resource	SSM InfoTech Solutions	
	1488	Sanjay Mirchandani	sanjay.mirchandani@sttelemediagdc.in	Associate Director Human Resources	ST Telemedia Global Data Centres	
	1489	Sanjeev Verma	sanjeev.verma@sttelemediagdc.in	Sr. Vice President - HR, CS & EHS	ST Telemedia Global Data Centres	
	1490	Ray Albro	ralbro@stand8.io	Human Resources Director	STAND 8 Technology Services	
	1491	Amrita Tripathi	amrita@sdnaglobal.com	VP - India, ME and APAC HR	Stanley David and Associates	
	1492	Mehak Fath	mehak@startupnation.com	Head HR	StartUP	
	1493	Keerthi Kamasamudra	keerthi.kamasamudra@stellapps.com	Head Of Human Resources	Stellapps Technologies	
	1494	Saurabh Srivastavaa	saurabh.srivastavaa@stellarinfo.com	Head Of Human Resources	Stellar Information Technology	
	1495	Hrishikesh Nc	hrishikesh@sterlingsoftware.co.in	Head HR	Sterling Software	
	1496	Surajeet Sinha	surajeet@stockedge.com	Head Of Human Resources	StockEdge	
	1497	Devang Hindocha	devang@strategicerp.com	Head of HR	StrategicERP Business Automation Solutions	
	1498	Sree T	sree@straviso.com	Director Human Resources Development	StraViso	
	1499	Charmaine Pinto	charmaine@streamoid.com	Head of Human Resources	Streamoid	
	1500	Ashwani Kumar	ashwani@successive.tech	Vice President - People & Culture	Successive Technologies	
	1501	Rakesh Arora	rakesh.arora@sugaldamani.com	Group CHRO	Sugal & Damani	
	1502	Ayush Sinha	ayush.sinha@sugarboxnetworks.com	Vice President Human Resources	SugarBox Networks	
	1503	Jyotsna Mahajan	jyotsna.mahajan@sugarboxnetworks.com	Associate Director - Talent Acquisition, India	SugarBox Networks	
	1504	Shirin Varghese	shirin.varghese@sugarboxnetworks.com	Head - L&D and Corporate HR	SugarBox Networks	
	1505	Ashwin Singh	ashwin@suki.ai	Head of Talent Acquisition	Suki	
	1506	Saurabh Jadhav	saurabh.jadhav@sumerusolutions.com	Head - India HR, IT, InfoSec & Administration	SUMERU SOFTWARE SOLUTIONS	
	1507	Subramanian Adaikalam	subramanian.adaikalam@sumtotalsystems.com	Director, Global Talent Management	SumTotal Systems	
	1508	Arjun Chatterjee	arjun.chatterjee@sunlife.com	Director & Head of Talent Acquisition	Sun Life	
	1509	Namita Sinha	namita.sinha@sunlife.com	Head of Talent Acquisition (Asia Services Centre India)	Sun Life	
	1510	Rajeev Bhardwaj	rajeev.bhardwaj@sunlife.com	Chief Human Resources Officer	Sun Life	
	1511	Saurav Sanyal	saurav.sanyal@sunlife.com	Director Total Rewards & People Services	Sun Life	
	1512	Vanitha Nitin	vanitha.nitin@sunlife.com	Director, Head HR- ASC India	Sun Life	
	1513	Arathi Rajeswari	arathi@suntecgroup.com	AVP, Head of Talent Advancement and Excellence	SunTec Business Solutions	
	1514	Prakash Nair	prakashpn@suntecgroup.com	Vice President & Global Head - HR & KMTD	SunTec Business Solutions	
	1515	Radhakrishnan Nair	r.nair@suntecgroup.com	Sr.Vice President and Head of HR	SunTec Business Solutions	
	1516	Vidhya Sam	vidhya.sam@superops.ai	Head Of Human Resources	SuperOps.ai	
	1517	Bhavya Shetty	bhavya@supplywisdom.com	Director Talent Management	Supply Wisdom	
	1518	Hemant Batra	hemant.batra@supraits.com	Talent Acquisition Manager / Head RMG	SupraES.	
	1519	Tej Kumar	krtk@suprasoft.com	Head -Talent Acquisition Operations (INDIA)	SupraSoft	
	1520	Remi Vaz	remi.vaz@sureprep.com	Associate Director-HR	SurePrep LLC	
	1521	Linju Varughese	lvarughese@suyati.com	Associate Director - Talent Attraction	Suyati Technologies	
	1522	Praveen Joseph	pjoseph@suyati.com	Director - Human Resources	Suyati Technologies	
	1523	Vineet Singh	vineets@svam.com	Head - Domestic Staffing	SVAM International	
	1524	Tess Burlow	tess.burlow@symbiosystech.com	Head of HR	Symbiosis Technologies	
	1525	Venkata Kuruhuri	venkata.kuruhuri@symphonycorp.com	Senior Head HR	Symphony Corporation	
	1526	Girish	girish.subramanian@symphonyretailai.com	Human Resources Director - India	Symphony RetailAI	
	1527	Poornima Narayanappa	poornima.narayanappa@symphonysummit.com	Head- Human Resources	Symphony SummitAI	
	1528	Raghavendra	raghavendra@syscloud.com	Sr. Director Recruitment	SysCloud	
	1529	Hima Kulshrestha	hima@systango.com	Head - Talent Acquisition	Systango	
	1530	Goutham B	gouthamb@systelinc.com	AVP - INDIA - HR	Systel	
	1531	Sreevalli K	sreevalli.k@sstech.us	Director L&D	System Soft Technologies	
	1532	Usha Jaiswal	usha.jaiswal@systematixindia.com	Head Of Human Resources	Systematix Infotech	
	1533	Edwin	edwin.vimal@sysvine.com	Director HR	Sysvine Technologies	
	1534	Krishan Kumar	krishan_kumar@taaltech.com	Talent Management Head	TAAL Tech	
	1535	Divya Nadikattu	divya@taashee.com	Head of HR	Taashee Linux Services	
	1536	Rakesh Arora	rakesh@taazaa.com	Head HR & Talent Acquisition	Taazaa Inc	
	1537	Rohini Rai	rohini.rai@taazaa.com	Director Employee Relations	Taazaa Inc	
	1538	Suby Mathew	mathew@techautocons.com	Director - Executive Search	TAC	
	1539	Dimpal Patel	dimpal.patel@tacttree.com	Head- Human Resources and Talent Acquisition	TactTree LLP	
	1540	Meenakshi Jha	meenakshi.jha@talentica.com	Head of Talent Acquisition	Talentica Software	
	1541	Selvi Ganapathi	selvi.ganapathi@talentica.com	Head HRBP and HR Ops	Talentica Software	
	1542	Sharmila Yadav	sharmila@talentployer.com	Head Of Human Resources	TALENTPLOYER	
	1543	Anurag Shrivastava	anurags@talisma.com	Director - HR	Talisma	
	1544	Priya Subramanian	priya.subramanian@talview.com	Head of HR	Talview	
	1545	Shivam Shukla	sshukla@tanishasystems.com	Director- Talent Acquisition	Tanisha Systems	
	1546	Divya Puthireddi	divya.puthireddi@tanla.com	AVP HR	Tanla Platforms	
	1547	Paul Daniel	paul.daniel@tanla.com	Head of Talent Acquisition	Tanla Platforms	
	1548	Pravin Subba	pravin.subba@tanla.com	Chief People Experience Officer	Tanla Platforms	
	1549	Preetham Singh	preetham.singh@tanla.com	Chief Human Resources Officer	Tanla Platforms	
	1550	Shyamili Satyendran	shyamili.satyendran@tarento.com	Director - HR	Tarento Group	
	1551	Giridhar Vemuganti	gvemuganti@tataunistore.com	Head - People Operations	Tata CLiQ	
	1552	Priyadarshini Kachroo	priyadarshini@tatacliq.com	Head of Corporate Planning and Strategy	Tata CLiQ	
	1553	Swapnika Nag	snag@tataunistore.com	Chief People Officer	Tata CLiQ	
	1554	Shikha Gupta	shikha.gupta@tatacommunications.com	Executive Secretary to Global HR head	Tata Communications	
	1555	Janaki Naik	janaki.naik@tatadigital.com	Chief Human Resources Officer	Tata Digital	
	1556	Navleen Bhatia	navleen.bhatia@tcs.com	Director - Human Resources	Tata Digital	
	1557	Roshan Nair	nair.roshan@tcs.com	Associate Director HR	Tata Digital	
	1558	Ruchika Kohli	rkohli@tata.com	Director HR (Technology and Product)	Tata Digital	
	1559	Kanchan Jagtap	kanchan.jagtap@tatatechnologies.com	Head Global HR Shared Services	Tata Technologies, Pune	
	1560	Bikram Dash	bikram.dash@tatwa.info	Vice President HR L&D	TATWA Technologies	
	1561	Sameer Jadhav	sameer.jadhav@tavisca.com	Head & Vice President Recruitment	Tavisca	
	1562	Varun Hatmode	vhatmode@tavisca.com	Vice President Human Resources	Tavisca	
	1563	Parameswar Reddy	parameswar.p@recykal.com	Vice President Talent Management	Team Recykal	
	1564	Monika Soutiyal	monika@techretail.in	Head - HR & Admin	Tech Connect Services	
	1565	Rajesh	rajeshn@techaffinity.com	Director - HR	TechAffinity	
	1566	Khushboo Rathore	khushboo@techaheadcorp.com	Associate Director of Human Capital Management	TechAhead	
	1567	Gautam Nautiyal	gautamn@tblocks.com	Head of Talent Acquisition	TechBlocks	
	1568	Vinay Mahajan	vinay.mahajan@techgenies.com	Head HR	TechGenies	
	1569	Prashant Dubey	prashant.dubey@techilaservices.com	Head of Talent Acquisition	Techila Global Services	
	1570	Ravi Bhushan	ravi.bhushan@techilaservices.com	Head Of Human Resources	Techila Global Services	
	1571	Yasar Arafath	yasar.j@techmango.net	Head Of Human Resources	Techmango Technology Services	
	1572	Pallavi Singh	pallavi@techmatrixconsulting.com	Assistant Vice President Human Resources	TechMatrix Consulting	
	1573	Nirmala Nayak	nirmala@technobind.com	Head of HR	TechnoBind Solutions	
	1574	Rajyashree Rao	rajyashree@technodysis.com	HR and Operations Head	Technodysis	
	1575	Muthukumar K	muthukumar.k@technogeninc.com	Head of Human Resources Operations	TechnoGen,	
	1576	Srini Chakravarthy	srini@technogeninc.com	COO & Director - IT Workforce Solutions	TechnoGen,	
	1577	Sveta Shenoy	sveta.shenoy@technoidentity.com	Head of Talent Acquisition	TechnoIdentity	
	1578	Nisha Nayar	nisha.n@technovert.com	Head of HR	Technovert	
	1579	Srikanth Battu	srikanthb@techpointsolutions.com	Managing Director and Technical Recruitment Lead	Techpoint	
	1580	Khushboo Jain	khushboo@techspian.com	Human Resources Director	Techspian	
	1581	Ravi Devara	ravi.devara@tammina.com	Head Of Recruitment	TechTammina LLC	
	1582	Khandoba K	khandoba.k@techtreeit.com	Assistant Vice President HR	TechTree IT Systems	
	1583	Manoj Madhavan	manoj@techversantinfotech.com	Vice President - HR	Techversant	
	1584	Sahana Ps	sahana@tecplix.com	Vice President - HR	Tecplix Technologies	
	1585	Rakesh Vishwakarma	rakesh.vishwakarma@tejora.com	AVP - STAFFING	Tejora	
	1586	Rashmita Pradhan	rashmita.pradhan@teklink.com	Associate Director Human Resources	TekLink International	
	1587	Sushmita Aduri	sushmita.aduri@teklink.com	Head of US HR / Manager - India Operations	TekLink International	
	1588	Krishnanand Joshi	krishnanand.joshi@teknorix.com	Head - HR & Operations	Teknorix	
	1589	Niyati Parmar	niyati@teksun.us	Head of HR	Teksun Inc	
	1590	Anchan Arasinaguppe	aarasina@teksystems.com	Associate Director Talent Acquisition	TEKsystems Global Services in India	
	1591	Sunandha Sakthiprassad	sunandha@telliant.net	Vice President - HR & Finance (India)	Telliant Systems	
	1592	Sneha Tope	sneha@tavisca.com	Head Of Human Resources	Tenerity India	
	1593	Livin Varghese	livin.varghese@teqfocus.com	Chief People Officer	Teqfocus	
	1594	Sai Banerjee	sai.b@terasoftware.com	Head HR	Tera Software	
	1595	Bandla Shyamprasad	bandla.shyamprasad@terralogic.com	Director - HR & Operations	Terralogic	
	1596	Koundinya Adiraju	koundinya.adiraju@testingxperts.com	Vice President Talent Acquisition	TestingXperts	
	1597	Shail Parashar	shail.parashar@testingxperts.com	Director HR	TestingXperts	
	1598	Poornima Srinivasan	poornima@testvagrant.com	Head of Human Resources, People Head & Culture	TestVagrant Technologies	
	1599	Sriram Sundaram	ssundaram@tetrasoft.us	Head Of Human Resources	Tetrasoft	
	1600	Sunil Kapoor	skapoor@milcorp.com	VICE PRESIDENT-HR	The MIL Corporation	
	1601	Divya Gunashekar	divya@thescalers.com	Director of HR	The Scalers	
	1602	Franklin Frank	franklin@thescalers.com	Head of People & Culture	The Scalers	
	1603	Deep Ambike	deep@thinkbridge.in	Associate Director - Global Talent	thinkbridge	
	1604	Neha Bhushan	neha@thinkbridge.com	Director - Talent & Branding	thinkbridge	
	1605	Balaji Thiyagarajan	balaji.thiyagarajan@thirdware.com	Associate Director HR	Thirdware Solution INC	
	1606	Anil Chandra	anil.chandra@thoughtspot.com	Senior Director, Talent Acquisition	ThoughtSpot	
	1607	Prajeetha Prasad	prajeetha.prasad@thoughtspot.com	Director People Operations	ThoughtSpot	
	1608	Kiran Lal	kiran.lal@tomiaglobal.com	Director & Head Human Resources	TOMIA	
	1609	Rakesh Badam	rakesh.badam@tomiaglobal.com	Human Resources Director	TOMIA	
	1610	Vigil Thomas	vigilmthomas@tonetag.com	Head - Human Resources	ToneTag	
	1611	Vinny Sethi	vinny@tops-int.com	Head HR at TOPS Technologies Pvt Ltd	TOPS Technologies	
	1612	Prem Nair	prem.nair@toshiba-tsip.com	Senior Director Human Resources	Toshiba Software (India)	
	1613	Bosky Wadhwa	bosky.w@totalitglobal.com	Associate Director - Talent Acquisition	Total IT Global	
	1614	Nitin Marwah	nitin.m@totalitglobal.com	Human Resources Director	Total IT Global	
	1615	Neha Bhise	nbhise@tracelink.com	Head Of Human Resources - India & APAC	TraceLink	
	1616	Nidhi Srivastava	nidhi.srivastava@trangile.com	Head Of Human Resources	Trangile Services	
	1617	Swaminathan Srinivasan	swaminathan.srinivasan@transactcampus.com	Senior Human Resources Manager (HR Head)	Transact Campus Inc	
	1618	Anna Mathunny	anna@transactglobal.com	Head Of Human Resources	Transact Global	
	1619	Sonam Dwivedi	sonam.dwivedi@transunion.com	AVP Talent Acquisition	TransUnion CIBIL	
	1620	Nilesh Indulkar	nilesh.indulkar@trantorinc.com	Director & Head of Recruitment	Trantor	
	1621	Prasheel Pardhe	prasheel.pardhe@trantorinc.com	Chief People Officer	Trantor	
	1622	Pronami Borah	pronami.borah@travclan.com	People Operations Head	TravClan	
	1623	Deepti Mendiratta	deepti.m@trell.in	Associate Director HR	Trell	
	1624	Neha Sahi	neha@trell.in	Director - HR	Trell	
	1625	Pramodh Karumbaiah	pramodh.karumbaiah@trell.co	Head Of Human Resources	Trell	
	1626	Barkha Dave	barkha@trellissoft.ai	Head of HR & Operations Compliance	Trellissoft,	
	1627	Sachin Girolla	sachin.girolla@triarqhealth.com	Chief People Officer	TRIARQ Health India	
	1628	Lakshmi Vishwanatth	lakshmi@triconinfotech.com	Director - People Operations	Tricon Infotech	
	1629	Anuja Sivaram	anuja@codenation.co.in	CHRO & COO	Trilogy Innovations	
	1630	Jaspreet Mehta	jaspreetsingh@dataglove-us.com	Director-Offshore Staffing Services	Trimax Americas	
	1631	Kannan Krishnan	kannan.krishnan@trinamix.com	Senior Director, Global HR	Trinamix Inc	
	1632	Neha Choudhary	nchoudhary@tractionondemand.com	Director - People (HR)	Trineo	
	1633	Eswari Velayutham	eswari.v@tringapps.com	Director - Human Resources	Tringapps	
	1634	Swati Sharma	swati.sharma@triotree.in	Head Of Human Resources	TrioTree Technologies	
	1635	Mayank Sharma	mayank@tripoto.com	Head of Talent Acquisition	Tripoto	
	1636	Preeti Das	preeti.das@tripstack.com	Human Resources Director - India	TripStack	
	1637	Tejinder Bhullar	tejinder@truckx.com	Head Of Human Resources	TruckX Inc	
	1638	Humera Iffath	humera.iffath@truecaller.com	Human Resources Director- India	Truecaller	
	1639	Suresh Divakaran	suresh@truetechsolutions.in	Associate Vice President - Talent Acquisition	TrueTech Solutions	
	1640	Haris Ali	haris.a@truglobal.com	Corp. HR Director	TRUGlobal	
	1641	Smitha S	smitha.s@truglobal.com	Head of HR	TRUGlobal	
	1642	Sulabh Daigavhane	sulabh.daigavhane@truminds.com	Head of Talent Acquisition	Truminds Software Systems	
	1643	Vyas Ramaraj	vyas.ramaraj@trustrace.com	Director HR	TrusTrace	
	1644	Mandeep Singh	mandeep.singh@tulip.co	Head of HR	Tulip Interfaces	
	1645	Ashutosh Sinha	ashutosh@tuya.com	Head - Human Resource	Tuyasmart India	
	1646	Gayathri Arunkumar	gayathri.arunkumar@tvsnext.io	Associate Vice President Recruitment	TVS Next	
	1647	Pranitha Penmetsa	pranitha@tyfone.com	VP - Human Resources and Operations	tyfone,	
	1648	Hemendra Bist	hemendra.bist@u2opiamobile.com	Vice President - HR & Admin.	U2opia Mobile	
	1649	Sunaina Sisodiya	sunaina@u3infotech.com	Head HR-APAC	U3 Infotech	
	1650	Suvro Karmakar	suvro.karmakar@ubique-systems.com	Global Human Resources - Platform Head	Ubique Systems	
	1651	Suman Mukherjee	suman.mukherjee@ultimatesolutions.in	Head of Human Resources	Ultimate Digital Solutions	
	1652	Arpana Jaiswal	arpanaj@umbrellainfocare.com	Head Human Resources	Umbrella Infocare	
	1653	Faisal Siddiqui	faisal.siddiqui@uneecops.com	Head Of Human Resources	Uneecops Technologies	
	1654	Gargi Rajan	gargi.rajan@unicommerce.com	Associate Director - Human Resources	Unicommerce eSolutions	
	1655	Vishruti Arora	varora@unifocus.com	Vice President - People & Culture	UniFocus	
	1656	Asha Rao	asha.j@unilogcorp.com	Associate Director - Human Resources	Unilog	
	1657	Mahalakshmi	mahalakshmi@unilogcorp.com	Vice President Human Resources	Unilog	
	1658	Anurag Verma	anurag@uniphore.com	Vice President Human Resources	Uniphore	
	1659	Medhika Sood	medhika@uniphore.com	Associate Director : TM | L&D	Uniphore	
	1660	Mohammed Hussain	mohammed@uniphore.com	Director - Talent Acquisition	Uniphore	
	1661	Thangaraj Vinayagmoorthy	thangaraj@uniphore.com	Head of Talent Acquisition	Uniphore	
	1662	Natarajan Perumal	natarajan@uniquehire.in	VP - Staffing	UniqueHire Consulting LLP	
	1663	Sunny Shroff	sunny.shroff@unitech-rio.com.br	Director - HR	Unitech	
	1664	Venkata Akella	ratnakar@corp.untd.com	Head - Human Resources	United Online,	
	1665	Anto Faria	anto.faria@urbanladder.com	Head L&D Operation and Fulfillment	Urban Ladder	
	1666	Shashwat Mittra	shashwat.mittra@urbanladder.com	Head - Talent	Urban Ladder	
	1667	Sreeparna Samanta	sreeparna.samanta@urbanladder.com	Head - HR	Urban Ladder	
	1668	Naga Siddharth	n.siddharth@urbanpiper.com	Chief Human Resources Officer	UrbanPiper	
	1669	Venkatesh G	venkateshg@useready.com	Associate Director- Talent Acquisition	USEReady	
	1670	Jayashree Jayanth	jayashree.jayanth@ushur.com	Human Resources Director	Ushur	
	1671	Kiran Bala	kiran.bala@blueconchtech.com	Director Human Resources	UST BlueConch Technologies	
	1672	Supraja Sekhar	ssekhar@utopiainc.com	Associate Director - HR	Utopia Global,	
	1673	Amulya	amulya.ms@utthunga.com	Director HR	Utthunga	
	1674	Vema Radha	vradha@v2soft.com	Director HR	V2Soft	
	1675	Gaurav Upadhyay	gaurav.upadhyay@v2solutions.com	Director - Digital Workforce	V2Solutions	
	1676	Nimmy Chowalloor	nimmy.c@v2solutions.com	Recruitment Head	V2Solutions	
	1677	Prashanth Kulkarni	prashanth.kulkarni@v2solutions.com	Director - Talent Acquisition	V2Solutions	
	1678	Ramaprasad Baleguli	ramaprasad.baleguli@v2solutions.com	Head of Talent Acquisition-Digital Engineering	V2Solutions	
	1679	Anish Ahmed	anish.ahmed@vaave.com	Head-13x Talent	Vaave	
	1680	Rahul Vishwanatham	rahul.vishawantham@vaave.com	Head Of Human Resources	Vaave	
	1681	Mruga Dave	mruga.dave@vagaro.com	Human Resources Director	Vagaro Inc	
	1682	Prastily Kp	prastily@vaisesika.in	Director -HR, Operations, Finance, Immigration	Vaisesika Consulting	
	1683	Pratheek Machaya	pratheek.machaya@valentabpo.com	Head - Franchise Recruitment	Valenta	
	1684	Ujjwaal D	ujjwaal.d@valentabpo.com	Head HR	Valenta	
	1685	Himanshu Mishra	hmishra@valethi.com	Head Of Human Resources	Valethi Technologies	
	1686	Neena Nagle	nagle@valethi.com	Chief Human Resources Officer	Valethi Technologies	
	1687	Sathish Kumar	sathish.kumar@valgenesis.com	Human Resources Director	ValGenesis	
	1688	Sundeep Dasa	sundeep.dasa@valgenesis.com	Associate Director - HR	ValGenesis	
	1689	Kavita Y	kavita.y@valiancesolutions.com	AVP-Human Resources	Valiance Solutions	
	1690	Kavita Yadav	kavita.yadav@valiancesolutions.com	AVP-Human Resources	Valiance Solutions	
	1691	Sourabha Ravi	sourabha.ravi@valuepointsystems.com	Head Of Recruitment	Value Point Systems	
	1692	Shweta Aggarwal	shweta@valuecoders.com	Head Of Recruitment	ValueCoders	
	1693	Vandana Roy	vandana.roy@vfirst.com	Vice President Human Resources	ValueFirst	
	1694	Shreyasi Sen	shreyasi@valuepitch.com	Head of HR and Administration	Valuepitch E Technologies	
	1695	Saraswathi Rajasekhar	saraswathi@vasudhaika.net	Director-People Operations	Vasudhaika Software	
	1696	Prakyath Krishnappa	prakyath.k@verifaya.com	Head of HR	Verifaya Corporation	
	1697	Nikhil Kadu	nikhil.kadu@verinite.com	Head HR & Operations	Verinite	
	1698	Preeti Mani	pmani@verisys.com	Head of HR	Verisys Corporation	
	1699	Maya Nagpal	maya.nagpal@verolt.com	Director Human Capital Management	Verolt	
	1700	Zarna Trivedi	zarnatrivedi@versa-networks.com	Head - Human Resources	Versa Networks	
	1701	Bhupesh Wasmatkar	bhupesh.wasmatkar@verse.in	Head - Talent Acquisition	VerSe Innovation	
	1702	Maya John	maya.john@verse.in	Chief People Officer	VerSe Innovation	
	1703	Sacchin Kalkal	sacchin.kalkal@vertexglobalservices.com	VP- Talent Acquisition	Vertex Global Services	
	1704	Nayazuddin Meer	nayazuddin.meer@slkgroup.com	Head of Talent Acquisition	VFI SLK	
	1705	Roli Singh	roli.singh@vfislk.com	Head of HR	VFI SLK	
	1706	Vaishali Gandhi	vgandhi@vibrenthealth.com	Vice President Finance, HR and Operations	Vibrent Health	
	1707	Jaya Laxmi	jaya.laxmi@vincit.fi	hr head	Vincit	
	1708	Prachi Singh	prachi.singh@vinculumgroup.com	Head - Global Resourcing & Talent Management	Vinculum Group	
	1709	Sneha Sharma	sneha@virinchi.com	Head of HR	Virinchi	
	1710	Divya A	da@virsec.com	Head HR	Virsec Systems	
	1711	Shivani Jaiswal	shivani@virtualheight.com	Chief People Officer	Virtual Height IT Services	
	1712	Anil Pereira	anil.pereira@visiblealpha.com	Senior Director Human Resources	Visible Alpha	
	1713	Deepak Chavan	deepak.chavan@visiblealpha.com	Manager - Head Talent Acquisition India	Visible Alpha	
	1714	Karthik Chintapatla	karthik.chintapatla@visteon.com	Country Head HR	Visteon Technical And Services Centre	
	1715	Parthasarathy Paravasthu	pparavasthu@vitechinc.com	Director, Human Resources	Vitech Systems Asia	
	1716	Tanvi Mittal	tanvi.mittal@vlinkinfo.com	HR Head- India	VLink Inc	
	1717	Neha Bhandari	neha.bhandari@vmock.com	Director of Human Resources	VMock	
	1718	Dathree Javvadi	dathree.javvadi@vncservices.in	Cheif Human Resources Officer CHRO	VNC Digital Services	
	1719	Shaili Trivedi	shaili.trivedi@volansys.com	Head - Talent Management and RMG	VOLANSYS	
	1720	Mirunalini Mothilal	mirunalini@volantetech.com	Director - India & Global HR	Volante Technologies	
	1721	Parthiban Santhanakrishnan	parthiban.santhanakrishnan@volantetech.com	Associate Director- Performance Testing	Volante Technologies	
	1722	Kalyani Mudigonda	kalyani.mudigonda@votarytech.com	Head HR & Talent Management Group	Votary Softech Solutions	
	1723	Vikram Vijan	vikram@gyftr.com	Head Of Human Resources	Vouchagram India	
	1724	Venkatesh Bj	venkatesh.bj@vrize.com	Head of Talent Acquisition	VRIZE	
	1725	Yashika Thimmaiah	yashika@vrize.com	Chief Human Resources Officer	VRIZE	
	1726	Vipin Sharma	vipin.sharma@vtnetzwelt.com	Head of HR	VT Netzwelt	
	1727	Kartik	kartik.v@vtechsolution.com	Vice President Human Resources	vTech Solution	
	1728	Suresh C	sureshc@vuram.com	Director of People Operations	Vuram	
	1729	Anshika Khaitan	anshika.khaitan@getvymo.com	Director-People & Culture	Vymo	
	1730	Damayanti Ghosh	damayanti.ghosh@getvymo.com	Head of Talent Acquisition	Vymo	
	1731	Arathi	arathi.gs@vyomlabs.com	AVP HR	Vyom Labs	
	1732	Mahendra Thiyagarajan	mahendra@vysystems.com	Head - Global HR & Operations	VySystems	
	1733	Gitanjali Verma	gitanjali.verma@w3villa.com	AVP - Human Resources	W3villa Technologies	
	1734	Ravi Mourya	ravi.mourya@waisl.in	Sr. Associate HR & Chief Security Officer	WAISL	
	1735	Arun Kumar	arun.kumar@wavicledata.com	Director - Human Resources	Wavicle Data Solutions	
	1736	Birendra Rout	birendra.rout@weavertec.com	Head-HR	Weaverbird Engineering & Technology	
	1737	Mili Panicker	mili.panicker@webengage.com	AVP - HR & People Operations	WebEngage	
	1738	Vinny Singh	vinny@webguruz.in	Human Resources Director	Webguruz Technologies	
	1739	Deepika Singh	deepika@webkul.com	Vice President Human Resources	Webkul	
	1740	Vikrant Bhalodia	vikrant@weblineindia.com	Head of HR & People Operations	WeblineIndia	
	1741	Poonam Yadav	poonam.yadav@webmobril.com	Group Head Human Resources	WebMobril Technologies	
	1742	Nitin Suri	nitin.suri@webomaze.com	Vice President Human Resources	Webomaze Technologies	
	1743	Arpita Sarkar	arpita.sarkar@webskitters.com	Director Talent Acquisition	WEBSKITTERS TECHNOLOGY SOLUTIONS	
	1744	Suman Bhattacharjee	suman.bhattacharjee@webskitters.com	Corporate Account & Talent Acquisition Head	WEBSKITTERS TECHNOLOGY SOLUTIONS	
	1745	Maclean Raphael	maclean.raphael@wepindia.com	VP - HR	WeP Peripherals	
	1746	Hari Prashanth	hari.p@westagilelabs.com	Associate Director -Talent Acquisition	West Agile Labs	
	1747	Jasmine Vaswani	jasmine.vaswani@worldfashionexchange.com	Chief Human Resources Officer (CHRO)	WFX - World Fashion Exchange	
	1748	Sharon Narang	sharon.narang@wibmo.com	Head of HR	Wibmo	
	1749	Satya Kundurthi	satyak@wilcosource.com	Director/Head HR	Wilco Source	
	1750	Gurpreet Singh	gurpreet.singh@wingify.com	Head - Talent Management	Wingify	
	1751	Sakshi Agarwal	sakshia@winjit.com	AVP - Global Talent Acquisition	Winjit Technologies	
	1752	Pavan Kadumuri	pavankumar.k@winwire.com	Associate Director-HR	WinWire Technologies	
	1753	Prajeeth Gobi	prajeeth.g@winwire.com	Associate Director - Recruitment	WinWire Technologies	
	1754	Shikha Gupta	shikha.gupta@winwire.com	Director Of Recruiting	WinWire Technologies	
	1755	Shiva	shiva@winwire.com	Associate Director Human Resources	WinWire Technologies	
	1756	Rashmi Gupte	rashmi.gupte@wisdmlabs.com	Head Human Resources	WisdmLabs	
	1757	Barkha Sharma	barkha@wobot.ai	CHRO	Wobot.ai	
	1758	Kavitha Umasankar	kavitha.umasankar@wolterskluwer.com	Director Human Resources	Wolters Kluwer ELM Solutions	
	1759	Gaurang Joshi	gyjoshi@workforcelogiq.com	Director, Human Resource	Workforce Logiq	
	1760	Jayendra Solanki	jasolanki@workforcelogiq.com	Director- Talent Acquisition	Workforce Logiq	
	1761	Aswanth Goka	agoka@workfusion.com	Vice President Human Resources	WorkFusion	
	1762	Anjali Patil	anjali.patil@workindia.in	HR Director	WorkIndia	
	1763	Bharat Bhartia	bharat.bhartia@workindia.in	Head of Talent Acquisition and HR	WorkIndia	
	1764	Jitendra Das	jitendra.das@workinsync.io	Director HR	WorkInSync	
	1765	Vidya Salve	vidya.salve@wovvtech.com	Group Head – Talent Acquisition	WovV Technologies	
	1766	Jacob Joy	jacob.j@wrenchsolutions.com	Head Strategic HR	WRENCH Solutions	
	1767	Suresh Nair	suresh.n@wrenchsolutions.com	Head - HR and Admn	WRENCH Solutions	
	1768	Capt Kansal	capt.kansal@writerinformation.com	Head Safety Security	Writer Information	
	1769	Ketan Shetty	ketan.shetty@writerinformation.com	Head HR	Writer Information	
	1770	Preeti Msw	preeti.msw@wundermanthompson.com	Head Strategic HR & Leadership	Wunderman Thompson Commerce	
	1771	Shipra Lavania	shipra.lavania@wundermanthompson.com	Head- Human Resources	Wunderman Thompson Commerce	
	1772	Rajashree Mahajan	m.rajashree@xangars.com	Talent Acquisition Recruiter Head	Xangars Solutions	
	1773	Karthikeyan Samuel	karthikeyan.samuel@xansa.com	Associate Vice President - Recruitment	Xansa plc	
	1774	Praveen Singh	praveen.singh@xduce.com	Senior Director - HR and Head of India Operations	XDuce	
	1775	Kevin Marbaniang	kevin@xeno.in	Head of Talent Acquisition	Xeno	
	1776	Prafull	pjaiswal@xento.com	Head - HR Strategy & Talent Management	Xento Systems	
	1777	Nitin Verma	nitin.verma@xicom.biz	Head HR	Xicom Technologies	
	1778	Britto Ambrose	britto@xoxoday.com	Vice President of People & Culture	Xoxoday	
	1779	Ganesh Somisetti	gsomisetti@email.xtglobal.com	Head - People & Culture	XTGlobal,	
	1780	Arun Vigneswaran	arun@xto10x.com	Head of People Excellence & HR head for xto10x	xto10x	
	1781	Suguna Rajaram	suguna.rajaram@ymedialabs.com	Human Resources Director	Y Media Labs	
	1782	Vijay Arcot	vijay.arcot@ymedialabs.com	Director Talent Acquisition	Y Media Labs	
	1783	Priya Bhogineni	priya.bhogineni@yexle.com	Head of Human Resources	Yexle	
	1784	Madhuri Mhamankar	mmhamankar@yotta.com	General Manager & Head Human Resources	Yotta Infrastructure Solutions	
	1785	Divya Beneesh	divya.beneesh@zaggle.in	Associate Director - Employee Benefits	Zaggle Prepaid Ocean Services	
	1786	Paromita Areng	paromita.areng@zaggle.in	Chief Human Resources Officer	Zaggle Prepaid Ocean Services	
	1787	Priti Mhatre	priti.mhatre@zaggle.in	Senior Manager (Head- Human Resources)	Zaggle Prepaid Ocean Services	
	1788	Jyoti Singh	jyoti.singh@zapcg.com	CHRO | Global HR Head	ZapCom Group Inc	
	1789	Chitra Markale	chitram@zconsolutions.com	Head Of Human Resources	zCon Solutions	
	1790	Mahesh Hyam	mahesh.h@zelitesolutions.com	Head - HR	Zelite Solutions	
	1791	Ritu Malhotra	ritu.malhotra@zemosolabs.com	Head of Talent Acquisition	Zemoso Technologies	
	1792	Vishal Kanade	vishal.kanade@zenart.com	Sr. Director Finance and HR	Zen & Art	
	1793	Dhritiparna Dhar	dhritiparnad@zendrive.com	Director Talent Acquisition	Zendrive	
	1794	Sanjay V	sanjayv@zenithsoft.com	Head-Human Resource	Zenith Software	
	1795	Panchali Das	panchalid@zenoti.com	Head Of Human Resources	Zenoti	
	1796	Purva Pandit	purvap@zenoti.com	Vice President - Talent Management	Zenoti	
	1797	Rupa Bang	rupab@zenoti.com	Senior Director, Talent Acquisition	Zenoti	
	1798	Sanjay Jengiti	sanjayj@zenoti.com	Director - Finance & HR	Zenoti	
	1799	Ravi Kuchampudi	ravi.kuchampudi@zenq.com	Head - Human Resources	ZenQ	
	1800	Rajsekhar Dangeti	rajsekhar.dangeti@zensark.com	Director, Global Talent Acquisition	Zensark	
	1801	Pooja	pooja@zentekinfosoft.com	Head of Human Resources	Zentek Infosoft	
	1802	Ankita	ankita@zenwork.com	Vice President HR & Operations	Zenwork	
	1803	Deepa Baburaj	bdeepa@zeomega.com	Associate Director - HR at ZeOmega	ZeOmega	
	1804	Kiran Somanath	kiran.s@zerone-consulting.com	Chief People Officer	Zerone Consulting	
	1805	Monika Miglani	monika.miglani@zigram.tech	Associate Director - HR	ZIGRAM	
	1806	Swati Patil	swatip@zimetrics.com	Head - HR	ZiMetrics Technologies	
	1807	Soumya Rajesh	soumya@zoondia.in	Head Of Human Resources	Zoondia	
	1808	Jithesh Vijayan	jithesh.v@zucisystems.com	Director- Workforce Management and Strategy	Zuci Systems	
	1809	Punitha Nagarajan	punitha.n@zucisystems.com	Head - Talent Acquisition	Zuci Systems	
	1810	Harishankar Krishnamurthi	hari@zumen.com	Head of Talent Acquisition	Zumen Inc	
	1811	Pradep Sakthi	pradep.s@zuper.co	Head Of Human Resources	Zuper	`;

async function main() {
  const lines = rawData.split("\n");
  const entriesToCreate = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    
    const parts = line.split("\t");
    
    // Format: \t SNo \t Name \t Email \t Title \t Company \t Send
    const email = parts[3]?.trim();
    if (!email) continue;

    const name = parts[2]?.trim() || "";
    const role = parts[4]?.trim() || "Software Developer";
    const company = parts[5]?.trim() || "";
    const sentStr = parts[6]?.trim().toLowerCase() === "sent" || parts[6]?.trim().toLowerCase() === "yes";
    
    const status = sentStr ? "SENT" : "PENDING";
    
    // Auto-detect email type based on recipient's title/role
    const roleLower = role.toLowerCase();
    let emailType = "APPLICATION"; // Default to Application
    
    if (
      roleLower.includes("engineer") || 
      roleLower.includes("developer") || 
      roleLower.includes("sde") || 
      roleLower.includes("tech") ||
      roleLower.includes("founder") ||
      roleLower.includes("cto")
    ) {
      emailType = "REFERRAL";
    }

    entriesToCreate.push({
      hrEmail: email,
      companyName: company, // We now have actual company names!
      role: role,
      emailType: emailType,
      status: status,
      scheduledAt: new Date(),
      lastSentAt: sentStr ? new Date() : null,
    });
  }

  console.log(`Parsed ${entriesToCreate.length} entries. Seeding to MongoDB...`);

  let count = 0;
  for (const entry of entriesToCreate) {
    // Check if it exists manually since hrEmail is not unique in Prisma
    const existing = await prisma.emailEntry.findFirst({
      where: { hrEmail: entry.hrEmail }
    });

    if (existing) {
      await prisma.emailEntry.update({
        where: { id: existing.id },
        data: {
          companyName: entry.companyName,
          role: entry.role,
          emailType: entry.emailType
        }
      });
    } else {
      await prisma.emailEntry.create({
        data: entry
      });
    }
    count++;
  }

  console.log(`Successfully seeded ${count} emails!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
