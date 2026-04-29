(function () {
  const T = {
    en: {
      /* NAV */
      'nav.campus':      'Campus',
      'nav.clubs':       'Clubs',
      'nav.events':      'Events',
      'nav.campuslife':  'Campus Life',
      'nav.apply':       'Apply Now',
      'nav.apply.back':  'Apply Now ↗',

      /* INDEX — HERO */
      'idx.hero.eyebrow': 'Live from Poltava, Ukraine · Since 1818',
      'idx.hero.h1':      'Student<br /><span class="yellow">life</span> at <span class="stroke">NUPP.</span>',
      'idx.hero.seal':    'National University · Yuri Kondratyuk Poltava Polytechnic · 1818 · ',
      'idx.hero.lead':    "Poltava's most curious campus — 200+ years of tradition, a few thousand brilliantly weird students, and a coat of arms that already tells you everything: wheat, oak, the building, and a lot of ambition.",
      'idx.hero.cta1':    'Take the tour',
      'idx.hero.cta1b':   'Take the tour ↗',
      'idx.hero.cta2':    'Apply',
      'idx.hero.cta2b':   'Apply ↗',

      /* INDEX — MARQUEE 1 */
      'idx.mq1.a': 'Poltava Polytechnic',
      'idx.mq1.b': 'Since 1818',
      'idx.mq1.c': '11,000+ students',
      'idx.mq1.d': '9 faculties',
      'idx.mq1.e': 'Galushky & gigabytes',

      /* INDEX — SPOTS */
      'idx.spots.eyebrow': '§ 01 — Campus Spots',
      'idx.spots.h2':      'The places<br />students <em style="font-style:italic;">actually</em> hang out.',
      'idx.spots.p':       "Eight stories tall, two centuries old, and somehow always smelling like fresh coffee from the cafeteria — here's what makes our campus tick. Six spots every NUPP student knows by heart.",

      'idx.spot1.tag': 'Block 01 · Pershotravneva Ave',
      'idx.spot1.h3':  'The Main Building',
      'idx.spot1.p':   "The 1930s temple of engineering — eight floors, marble stairs, and the loudest hallway echo in Poltava. Selfies on the front steps are mandatory.",

      'idx.spot2.tag': 'The Dorms · 6 buildings',
      'idx.spot2.h3':  'The Dorms',
      'idx.spot2.p':   "Six buildings, one shared kettle. Where 4 a.m. exam crams meet 4 p.m. hallway dance battles. Bring slippers — it's a rule.",

      'idx.spot3.tag': 'Library',
      'idx.spot3.h3':  'Scientific Library',
      'idx.spot3.p':   "1.2M volumes. The good study spot is by the window on the third floor — don't tell anyone.",

      'idx.spot4.tag': 'Sport Complex',
      'idx.spot4.h3':  'The Stadium',
      'idx.spot4.p':   'Football, athletics, the annual Faculty Cup. Also: best place to watch the sunset over Poltava.',

      'idx.spot5.tag': 'Park',
      'idx.spot5.h3':  'The Student Park',
      'idx.spot5.p':   'Old chestnuts, painted benches, a fountain that works two months a year. Date spot, nap spot, debate spot.',

      /* INDEX — NUMBERS */
      'idx.num1': '<strong>Founded</strong> — older than the typewriter',
      'idx.num2': '<strong>Students</strong> on campus right now',
      'idx.num3': '<strong>Faculties</strong> from architecture to AI',
      'idx.num4': '<strong>Clubs</strong> from chess to chemistry-rock',

      /* INDEX — CLUBS */
      'idx.clubs.eyebrow': '§ 02 — Clubs & Societies',
      'idx.clubs.h2':      'Find your<br />weird people.',
      'idx.clubs.p':       "From rocket-building to traditional embroidery — there's roughly one club for every twelve square meters of campus. Some you join. Some find you.",
      'idx.club.debate':   'Debate Club',
      'idx.club.robotics': 'Robotics Lab',
      'idx.club.choir':    'Choir «Polifoniya»',
      'idx.club.chess':    'Chess Society',
      'idx.club.vol':      'Volunteer Corps',
      'idx.club.it':       'IT & Hackathons',
      'idx.club.arch':     'Architecture Workshop',
      'idx.club.vysh':     'Vyshyvanka Circle',
      'idx.club.eco':      'Eco Movement',
      'idx.club.photo':    'Photography Lab',
      'idx.club.esports':  'Esports Team',
      'idx.club.theatre':  'Theatre «Studio-T»',

      /* INDEX — EVENTS */
      'idx.events.eyebrow': '§ 03 — Traditions & Events',
      'idx.events.h2':      'A year of<br />well-organised chaos.',
      'idx.events.p':       'Every year cycles through the same beloved madness — Day of Knowledge in September, Vyshyvanka in May, the engineering ball in spring. Mark your calendar.',
      'idx.ev1.m':     'Sep',
      'idx.ev1.title': 'Day of Knowledge — opening ceremony at the Main Building',
      'idx.ev1.where': 'Main Steps · 09:00',
      'idx.ev2.m':     'Oct',
      'idx.ev2.title': "Freshmen's Initiation — face-paint, songs, faculty oath",
      'idx.ev2.where': 'Student Park · 18:00',
      'idx.ev3.m':     'Dec',
      'idx.ev3.title': 'Winter Hackathon — 36 hours, free pizza, real prizes',
      'idx.ev3.where': 'IT Faculty Lab · all weekend',
      'idx.ev4.m':     'Mar',
      'idx.ev4.title': 'Shevchenko Days — poetry night, kobzar performance, candle walk',
      'idx.ev4.where': 'Library Hall · 19:00',
      'idx.ev5.m':     'May',
      'idx.ev5.title': 'Vyshyvanka Day — wear your embroidery, march down Pershotravneva',
      'idx.ev5.where': 'All campus · 11:00',
      'idx.ev6.m':     'Jun',
      'idx.ev6.title': 'Graduation Ball — caps in the air, boats on the Vorskla',
      'idx.ev6.where': 'River Embankment · 20:00',

      /* INDEX — MARQUEE 2 */
      'idx.mq2.a': "Galushky o'clock",
      'idx.mq2.b': 'Vyshyvanka Friday',
      'idx.mq2.c': '11k brilliant minds',
      'idx.mq2.d': 'One ridiculous coat of arms',

      /* INDEX — TESTIMONIALS */
      'idx.testi.eyebrow': '§ 04 — Word on Campus',
      'idx.testi.h2':      'What students<br />actually say.',
      'idx.testi.p':       'Asked across faculties and dorms. Edited only for typos and occasional 4 a.m. enthusiasm.',
      'idx.t1.q':    "I came for civil engineering, stayed for the choir. Two years in and I still can't tell which one taught me more about teamwork.",
      'idx.t1.name': 'Oleksandra K.',
      'idx.t1.role': '3rd year · Architecture',
      'idx.t2.q':    'The library at 11 p.m. is the cosiest place in Poltava. Old wood, green lamps, and the gentle sound of someone crying about their thermo exam.',
      'idx.t2.name': 'Danylo M.',
      'idx.t2.role': '2nd year · Mechanical Eng.',
      'idx.t3.q':    "My freshman year I built a robot that brings coffee from the cafeteria to Block 03. It was a class project. It's now a campus celebrity.",
      'idx.t3.name': 'Maryna S.',
      'idx.t3.role': '4th year · Robotics & AI',
      'idx.t4.q':    'Came from a tiny village outside Kremenchuk. Was terrified. Three months later I was leading a vyshyvanka workshop for international students.',
      'idx.t4.name': 'Nazar P.',
      'idx.t4.role': '1st year · Economics',
      'idx.t5.q':    "Faculty Cup final, 2025. Last minute. Header. Goal. The entire stadium did the choreographed roar we'd practiced in a dorm hallway. Worth every grade I almost dropped.",
      'idx.t5.name': 'Volodya T.',
      'idx.t5.role': '3rd year · Civil Engineering',
      'idx.t6.q':    "Professors know your name by week three. That's terrifying for the first two weeks and lovely forever after.",
      'idx.t6.name': 'Sofia H.',
      'idx.t6.role': '2nd year · Information Tech.',

      /* INDEX — GALLERY */
      'idx.gal.eyebrow': '§ 05 — Photo Gallery',
      'idx.gal.h2':      'A campus,<br />captured.',
      'idx.gal.p':       "Real photos coming soon — for now, a quick illustrated tour of what you'll see when you arrive.",
      'idx.gal1': '01 — Main Building, Poltava',
      'idx.gal2': '02 — Library & Research',
      'idx.gal3': '03 — Culture & creativity',
      'idx.gal4': '04 — Campus grounds',
      'idx.gal5': '05 — Student events',
      'idx.gal6': '06 — Sports Complex',
      'idx.gal7': '07 — Student Housing',

      /* INDEX — FAQ */
      'idx.faq.eyebrow': "§ 06 — Newcomers' FAQ",
      'idx.faq.h2':      "Questions you<br />haven't asked yet.",
      'idx.faq.p':       'The honest answers — from a cohort of upperclassmen who remember exactly how confusing week one was.',
      'idx.faq1.q': 'Where do I actually live in first year?',
      'idx.faq1.a': 'First-years get priority placement in dorms 3, 4, and 5 (closest to the main building). Rooms are typically 2-3 person, kitchen and showers shared by floor. Bring a lamp, slippers, and a tea kettle — the rest sorts itself out by week two.',
      'idx.faq2.q': 'Is everything taught in Ukrainian?',
      'idx.faq2.a': "Mostly yes. Several master's tracks (IT, Civil Engineering, Architecture) run in English. International students also get free Ukrainian language classes for the first two semesters.",
      'idx.faq3.q': "What's the food situation?",
      'idx.faq3.a': 'Three cafeterias on campus, plus a couple of student-run coffee corners. Lunch averages 80-120 UAH. Pro tip: the Block 02 cafeteria does a borscht on Wednesdays that has its own fan club.',
      'idx.faq4.q': 'How do I join a club?',
      'idx.faq4.a': "There's a Club Day in the second week of September — every society sets up a stand outside the Main Building. Just turn up, sign your name, eat whatever they're offering. You can also DM most clubs directly through their Telegram channels.",
      'idx.faq5.q': 'Can I work part-time while studying?',
      'idx.faq5.a': "Yes — and most students do, especially from the second year. The Career Centre helps match students to local internships and remote roles. Many IT-faculty students freelance from week one.",
      'idx.faq6.q': 'Where do students go on weekends?',
      'idx.faq6.a': "Round Square (Kruhla Ploshcha), the Vorskla embankment, the corpus park, the gallery district, and — when nostalgia kicks in mid-semester — straight back to the dorm kitchen for a 1 a.m. tea council.",

      /* INDEX — CTA */
      'idx.cta.eyebrow': 'Applications · 2026 intake',
      'idx.cta.h2':      "Become a NUPP student.<br />It's actually pretty easy.",
      'idx.cta.p':       "Submit your documents through the official portal. Our admissions team replies within 48 hours, in English or Ukrainian. We'll also help with dorm placement, visas, and scholarship applications.",
      'idx.cta.btn1':    'Start application ↗',
      'idx.cta.btn2':    'Tour campus first',
      'idx.cta.btn2b':   'Tour campus first ↗',

      /* FOOTER (both pages) */
      'foot.blurb':       'National University «Yuri Kondratyuk Poltava Polytechnic» — engineering, architecture, IT, and 200+ years of curious students. Poltava, Ukraine.',
      'foot.explore':     'Explore',
      'foot.apply':       'Apply',
      'foot.visit':       'Visit',
      'foot.l.spots':     'Campus spots',
      'foot.l.clubs':     'Clubs & societies',
      'foot.l.events':    'Events',
      'foot.l.cl':        'Campus life',
      'foot.l.faq':       "Newcomers' FAQ",
      'foot.l.bach':      "Bachelor's programmes",
      'foot.l.master':    "Master's programmes",
      'foot.l.intl':      'International students',
      'foot.l.schol':     'Scholarships',
      'foot.l.dorm':      'Dorm placement',
      'foot.meta1':       '© 2026 NUPP Student Life',
      'foot.meta2':       'Poltava Polytechnic · 200+ years curious',

      /* CAMPUS LIFE PAGE */
      'cl.crumb.home':  'Home',
      'cl.hero.h1':     'A day in<br /><span class="yellow">the life</span> at <span class="stroke">NUPP.</span>',
      'cl.hero.lead':   "An hour-by-hour walk through campus — what students eat, where they study, what's loud, what's quiet, and where the kettle lives. The honest version.",

      'cl.mq.a': '07:30 alarm',
      'cl.mq.b': '08:30 first lecture',
      'cl.mq.c': '13:00 cafeteria rush',
      'cl.mq.d': '18:00 club hour',
      'cl.mq.e': '23:00 dorm tea council',

      'cl.day.eyebrow': '§ 01 — A typical Tuesday',
      'cl.day.h2':      'From kettle<br />to curfew.',
      'cl.day.p':       'Every faculty has its own rhythm, but Tuesdays look more or less like this for a second-year IT student living in Dorm 4.',

      'cl.t07.ampm': 'am · alarm',
      'cl.t07.h4a':  'Kettle on, slippers on.',
      'cl.t07.pa':   'Block 04 wakes up slowly. Coffee from the corner kiosk costs 35 UAH and the man behind it remembers your order by week three.',
      'cl.t07.h4b':  'The 12-minute walk.',
      'cl.t07.pb':   'Cut through the park, past the bronze plaque, up the front steps of the Main Building. There are exactly 23 steps — yes, students have counted.',

      'cl.t08.ampm': 'am · lecture',
      'cl.t08.h4a':  'Algorithms, Aud. 312.',
      'cl.t08.pa':   'Old wood desks, blackboard, professor draws diagrams faster than you can copy. Front row reserved for the keen kids; back row for the recovering.',
      'cl.t08.h4b':  '10-minute break, hallway buzz.',
      'cl.t08.pb':   'The corridor outside Aud. 312 is the unofficial gossip exchange. Important things heard here: club elections, exam leaks (rumours), engagement rumours (also rumours).',

      'cl.t13.ampm': 'pm · lunch',
      'cl.t13.h4a':  'Cafeteria, Block 02.',
      'cl.t13.pa':   'The borscht queue is fastest at 13:05 sharp, before the architects finish their studio. Galushky on Wednesdays. Compote always.',
      'cl.t13.h4b':  'Coffee on the steps.',
      'cl.t13.pb':   "If the sun's out, students park themselves on the front-stairs balustrade. Twenty minutes of nothing. Sacred.",

      'cl.t15.ampm': 'pm · lab',
      'cl.t15.h4a':  'Computer lab, Block 03.',
      'cl.t15.pa':   'Linux machines, three monitors each, instant noodles smell faintly in the air. Group project time. Four people, two opinions, one merge conflict.',
      'cl.t15.h4b':  'Library, third floor, by the window.',
      'cl.t15.pb':   'The good seats. Phone face-down, headphones in, two hours of finally getting things done. Old radiator clicks comfortingly.',

      'cl.t18.ampm': 'pm · clubs',
      'cl.t18.h4a':  'Robotics lab — Tuesday meet.',
      'cl.t18.pa':   "Soldering, solving, occasionally setting off a smoke alarm. A pizza usually appears around 19:30, no one knows who orders it.",
      'cl.t18.h4b':  'Choir rehearsal, hall 2.',
      'cl.t18.pb':   'Polifoniya warms up with scales, ends with someone playing a song on the piano while everyone sings. Acoustics: criminally good.',

      'cl.t23.ampm': 'pm · dorm',
      'cl.t23.h4a':  'Tea council in the kitchen.',
      'cl.t23.pa':   "Six people, four mugs, one slightly suspicious cake from someone's mum. Topics: politics, philosophy, why the radiator on third floor whistles.",
      'cl.t23.h4b':  'One last hour at the desk.',
      'cl.t23.pb':   "Lights out by 01:00 if you're sensible, 03:00 if it's exam week, and you tell yourself you'll sleep on the weekend.",

      'cl.mb.eyebrow': '§ 02 — Block 01',
      'cl.mb.h2':      'The Main Building has its own gravity.',
      'cl.mb.p':       "Built in the 1930s on Pershotravneva Avenue, the eight-floor flagship is where every NUPP student takes at least one class — usually a lot more. Marble stairs, original chandeliers in the rector's hall, and an attic rumoured to house a piano no one has played since 1987.",
      'cl.mb.stat1':   'Floors',
      'cl.mb.stat2':   'Rooms',
      'cl.mb.stat3':   'Built',

      'cl.dorms.h2':         'Six dorms.<br />One shared kettle.',
      'cl.dorms.p':          "Buildings 1 through 6, all within ten minutes of the Main Building. Each has its personality — Block 03 is the noisy one, Block 05 has the legendary kitchen, Block 06 is where the international students live and learn three languages by accident.",
      'cl.dorms.std.h4':     'Standard room',
      'cl.dorms.std.li1':    'Bed, desk, wardrobe, lamp',
      'cl.dorms.std.li2':    'Shared kitchen per floor',
      'cl.dorms.std.li3':    'Shower & bathroom per floor',
      'cl.dorms.rent.h4':    'Average rent',
      'cl.dorms.rent.li1':   'Includes utilities',
      'cl.dorms.rent.li2':   'Wi-Fi everywhere',
      'cl.dorms.rent.li3':   '24h security & access',

      'cl.costs.eyebrow':  '§ 04 — Cost of student life',
      'cl.costs.h2':       'A month in<br />Poltava money.',
      'cl.costs.p':        'What a typical NUPP student actually spends in a month, sourced from a survey of 240 second-years across 6 faculties. (1 EUR ≈ 44 UAH.)',
      'cl.costs.c1.h4':    'Dorm rent',
      'cl.costs.c1.li1':   '2-3 person room',
      'cl.costs.c1.li2':   'Utilities included',
      'cl.costs.c1.li3':   'Wi-Fi included',
      'cl.costs.c2.h4':    'Food & cafeteria',
      'cl.costs.c2.li1':   '~80 UAH lunch on campus',
      'cl.costs.c2.li2':   'Coffee corner: 35 UAH',
      'cl.costs.c2.li3':   'Saturday market splurge',
      'cl.costs.c3.h4':    'Everything else',
      'cl.costs.c3.li1':   'Transport, gym, books',
      'cl.costs.c3.li2':   'Cinema, kvartirniki',
      'cl.costs.c3.li3':   'The occasional borscht emergency',

      'cl.cta.eyebrow': 'Ready to enrol?',
      'cl.cta.h2':      'Come see for yourself.',
      'cl.cta.p':       'Open Days happen the first Saturday of every month from March to June. Free guided tour, free coffee, and a chance to actually walk the marble stairs.',
      'cl.cta.btn1':    'Apply now ↗',
      'cl.cta.btn2':    'Back to home',
      'cl.cta.btn2b':   'Back to home ↩',
    },

    ua: {
      /* NAV */
      'nav.campus':      'Кампус',
      'nav.clubs':       'Клуби',
      'nav.events':      'Події',
      'nav.campuslife':  'Студмістечко',
      'nav.apply':       'Вступити',
      'nav.apply.back':  'Вступити ↗',

      /* INDEX — HERO */
      'idx.hero.eyebrow': 'Полтава, Україна · З 1818 року',
      'idx.hero.h1':      'Студентське<br /><span class="yellow">життя</span> в <span class="stroke">НУПП.</span>',
      'idx.hero.seal':    'Національний університет · Юрій Кондратюк · Полтавська Політехніка · 1818 · ',
      'idx.hero.lead':    "Найцікавіший кампус Полтави — 200+ років традицій, тисячі блискуче своєрідних студентів і герб, що вже все розповідає: пшениця, дуб, будівля і великі амбіції.",
      'idx.hero.cta1':    'Оглянути кампус',
      'idx.hero.cta1b':   'Оглянути кампус ↗',
      'idx.hero.cta2':    'Вступити',
      'idx.hero.cta2b':   'Вступити ↗',

      /* INDEX — MARQUEE 1 */
      'idx.mq1.a': 'Полтавська Політехніка',
      'idx.mq1.b': 'З 1818 року',
      'idx.mq1.c': '11 000+ студентів',
      'idx.mq1.d': '9 факультетів',
      'idx.mq1.e': 'Галушки та гігабайти',

      /* INDEX — SPOTS */
      'idx.spots.eyebrow': '§ 01 — Місця кампусу',
      'idx.spots.h2':      'Місця, де студенти<br /><em style="font-style:italic;">насправді</em> проводять час.',
      'idx.spots.p':       "Вісім поверхів, два століття і завжди пахне свіжою кавою з їдальні — ось що робить наш кампус особливим. П'ять місць, які знає кожен студент НУПП.",

      'idx.spot1.tag': 'Корпус 01 · просп. Першотравневий',
      'idx.spot1.h3':  'Головний корпус',
      'idx.spot1.p':   "Храм інженерії 1930-х — вісім поверхів, мармурові сходи й найгучніше ехо в коридорах Полтави. Фото на парадних сходах — обов'язково.",

      'idx.spot2.tag': 'Гуртожитки · 6 будівель',
      'idx.spot2.h3':  'Гуртожитки',
      'idx.spot2.p':   "Шість будівель, один спільний чайник. Де нічні навчання о 4-й ранку зустрічаються з танцювальними батлами о 16:00. Капці — обов'язково.",

      'idx.spot3.tag': 'Бібліотека',
      'idx.spot3.h3':  'Наукова бібліотека',
      'idx.spot3.p':   "1,2 млн примірників. Найкраще місце — біля вікна на третьому поверсі. Нікому не кажи.",

      'idx.spot4.tag': 'Спорткомплекс',
      'idx.spot4.h3':  'Стадіон',
      'idx.spot4.p':   'Футбол, легка атлетика, щорічний Кубок факультетів. І найкраще місце для заходу сонця над Полтавою.',

      'idx.spot5.tag': 'Парк',
      'idx.spot5.h3':  'Студентський парк',
      'idx.spot5.p':   'Старі каштани, мальовані лавочки, фонтан, що працює два місяці на рік. Для побачень, сну і дискусій.',

      /* INDEX — NUMBERS */
      'idx.num1': '<strong>Засновано</strong> — старший за друкарську машинку',
      'idx.num2': '<strong>Студентів</strong> навчається зараз',
      'idx.num3': '<strong>Факультетів</strong> — від архітектури до ШІ',
      'idx.num4': '<strong>Клубів</strong> — від шахів до хімічного року',

      /* INDEX — CLUBS */
      'idx.clubs.eyebrow': '§ 02 — Клуби та гуртки',
      'idx.clubs.h2':      'Знайди<br />своїх людей.',
      'idx.clubs.p':       "Від ракетобудування до традиційної вишивки — приблизно один клуб на кожні дванадцять квадратних метрів кампусу. В одні ти вступаєш. Інші знаходять тебе.",
      'idx.club.debate':   'Дебатний клуб',
      'idx.club.robotics': 'Лабораторія робототехніки',
      'idx.club.choir':    'Хор «Поліфонія»',
      'idx.club.chess':    'Шаховий клуб',
      'idx.club.vol':      'Волонтерський корпус',
      'idx.club.it':       'ІТ та хакатони',
      'idx.club.arch':     'Архітектурна майстерня',
      'idx.club.vysh':     'Вишиванковий гурток',
      'idx.club.eco':      'Еко-рух',
      'idx.club.photo':    'Фотолабораторія',
      'idx.club.esports':  'Кіберспортивна команда',
      'idx.club.theatre':  'Театр «Студія-Т»',

      /* INDEX — EVENTS */
      'idx.events.eyebrow': '§ 03 — Традиції та події',
      'idx.events.h2':      'Рік добре<br />організованого хаосу.',
      'idx.events.p':       'Щороку повторюється та сама улюблена вакханалія — День знань у вересні, Вишиванка у травні, інженерний бал навесні. Занотуй у календар.',
      'idx.ev1.m':     'Вер',
      'idx.ev1.title': 'День знань — урочиста церемонія у Головному корпусі',
      'idx.ev1.where': 'Головні сходи · 09:00',
      'idx.ev2.m':     'Жов',
      'idx.ev2.title': 'Посвята першокурсників — грим, пісні, факультетська клятва',
      'idx.ev2.where': 'Студентський парк · 18:00',
      'idx.ev3.m':     'Гру',
      'idx.ev3.title': 'Зимовий хакатон — 36 годин, безкоштовна піца, реальні призи',
      'idx.ev3.where': 'Лаб. ІТ-факультету · весь вікенд',
      'idx.ev4.m':     'Бер',
      'idx.ev4.title': 'Шевченківські дні — вечір поезії, виступ кобзаря, хода зі свічками',
      'idx.ev4.where': 'Зал бібліотеки · 19:00',
      'idx.ev5.m':     'Тра',
      'idx.ev5.title': 'День вишиванки — вдягни вишиванку, пройди Першотравневим',
      'idx.ev5.where': 'Увесь кампус · 11:00',
      'idx.ev6.m':     'Чер',
      'idx.ev6.title': 'Випускний бал — шапки в небо, човни на Ворсклі',
      'idx.ev6.where': 'Набережна Ворскли · 20:00',

      /* INDEX — MARQUEE 2 */
      'idx.mq2.a': 'Час галушок',
      'idx.mq2.b': "П'ятниця вишиванок",
      'idx.mq2.c': '11 тис. яскравих умів',
      'idx.mq2.d': 'Один неймовірний герб',

      /* INDEX — TESTIMONIALS */
      'idx.testi.eyebrow': '§ 04 — Голоси кампусу',
      'idx.testi.h2':      'Що студенти<br />насправді кажуть.',
      'idx.testi.p':       'Зібрано з різних факультетів і гуртожитків. Відредаговано лише помилки та надмірний ентузіазм о 4-й ранку.',
      'idx.t1.q':    "Прийшла на цивільне будівництво — залишилась заради хору. Вже два роки і досі не можу вирішити, що більше навчило мене командній роботі.",
      'idx.t1.name': 'Олександра К.',
      'idx.t1.role': '3-й рік · Архітектура',
      'idx.t2.q':    'Бібліотека о 23:00 — найзатишніше місце у Полтаві. Стара деревина, зелені лампи й ніжний звук чийогось плачу над термодинамікою.',
      'idx.t2.name': 'Данило М.',
      'idx.t2.role': '2-й рік · Машинобудування',
      'idx.t3.q':    "На першому курсі я зібрала робота, який приносить каву з їдальні в корпус 03. Це був навчальний проєкт. Тепер він — зірка кампусу.",
      'idx.t3.name': 'Марина С.',
      'idx.t3.role': '4-й рік · Робототехніка та ШІ',
      'idx.t4.q':    "Приїхав із маленького села під Кременчуком. Було страшно. Через три місяці я вже проводив майстер-клас із вишивки для іноземних студентів.",
      'idx.t4.name': 'Назар П.',
      'idx.t4.role': '1-й рік · Економіка',
      'idx.t5.q':    "Фінал Кубка факультетів, 2025. Остання хвилина. Удар головою. Гол. Весь стадіон синхронно заревів — так, як ми репетирували в коридорі гуртожитку.",
      'idx.t5.name': 'Володя Т.',
      'idx.t5.role': '3-й рік · Цивільне будівництво',
      'idx.t6.q':    "Викладачі знають твоє ім'я вже на третьому тижні. Перші два тижні це лякає. Потім — тільки радує.",
      'idx.t6.name': 'Софія Г.',
      'idx.t6.role': '2-й рік · Інформаційні технології',

      /* INDEX — GALLERY */
      'idx.gal.eyebrow': '§ 05 — Фотогалерея',
      'idx.gal.h2':      'Кампус<br />у кадрі.',
      'idx.gal.p':       'Реальні фотографії — короткий тур по тому, що ти побачиш, коли приїдеш.',
      'idx.gal1': '01 — Головний корпус, Полтава',
      'idx.gal2': '02 — Бібліотека та наука',
      'idx.gal3': '03 — Культура та творчість',
      'idx.gal4': '04 — Територія кампусу',
      'idx.gal5': '05 — Студентські події',
      'idx.gal6': '06 — Спортивний комплекс',
      'idx.gal7': '07 — Студентське житло',

      /* INDEX — FAQ */
      'idx.faq.eyebrow': '§ 06 — FAQ для новачків',
      'idx.faq.h2':      'Питання, які<br />ти ще не ставив.',
      'idx.faq.p':       "Чесні відповіді — від старшокурсників, які ще пам'ятають, як заплутано було на першому тижні.",
      'idx.faq1.q': 'Де я житиму на першому курсі?',
      'idx.faq1.a': "Першокурсники мають пріоритет у гуртожитках 3, 4 і 5 (найближче до головного корпусу). Кімнати зазвичай на 2-3 особи, кухня й душ спільні на поверсі. Привези лампу, капці та чайник — решта вирішиться до другого тижня.",
      'idx.faq2.q': 'Чи все викладається українською?',
      'idx.faq2.a': "Переважно так. Кілька магістерських програм (ІТ, цивільне будівництво, архітектура) ведуться англійською. Іноземні студенти також мають безкоштовні курси української впродовж перших двох семестрів.",
      'idx.faq3.q': 'Як з їжею?',
      'idx.faq3.a': 'Три їдальні в кампусі плюс кілька студентських кавових куточків. Обід — 80–120 грн. Порада: їдальня в корпусі 02 готує борщ по середах, і він має власний фан-клуб.',
      'idx.faq4.q': 'Як вступити до клубу?',
      'idx.faq4.a': "На другому тижні вересня — День клубів: кожне товариство виставляє стенд перед головним корпусом. Просто підходь, підписуйся, їж що дають. Більшість клубів також є в Telegram.",
      'idx.faq5.q': 'Чи можна підробляти під час навчання?',
      'idx.faq5.a': "Так — і більшість студентів так роблять, особливо з другого курсу. Центр кар'єри допомагає знайти стажування чи дистанційну роботу. Багато студентів ІТ-факультету фрілансять з першого тижня.",
      'idx.faq6.q': 'Куди студенти ходять на вихідних?',
      'idx.faq6.a': "Кругла площа, набережна Ворскли, парк біля корпусів, галерейний квартал — і, коли в середині семестру накривало ностальгією, назад на кухню гуртожитку на нічну чайну раду.",

      /* INDEX — CTA */
      'idx.cta.eyebrow': 'Вступна кампанія · 2026',
      'idx.cta.h2':      'Стань студентом НУПП.<br />Це простіше, ніж здається.',
      'idx.cta.p':       "Подай документи через офіційний портал. Приймальна комісія відповідає впродовж 48 годин — українською або англійською. Допоможемо з поселенням у гуртожиток, візою та стипендійними заявками.",
      'idx.cta.btn1':    'Почати вступ ↗',
      'idx.cta.btn2':    'Спочатку оглянути кампус',
      'idx.cta.btn2b':   'Спочатку оглянути кампус ↗',

      /* FOOTER (both pages) */
      'foot.blurb':     'Національний університет «Юрій Кондратюк Полтавська Політехніка» — інженерія, архітектура, ІТ та 200+ років допитливих студентів. Полтава, Україна.',
      'foot.explore':   'Навігація',
      'foot.apply':     'Вступ',
      'foot.visit':     'Контакти',
      'foot.l.spots':   'Місця кампусу',
      'foot.l.clubs':   'Клуби та гуртки',
      'foot.l.events':  'Події',
      'foot.l.cl':      'Студмістечко',
      'foot.l.faq':     'FAQ для новачків',
      'foot.l.bach':    'Програми бакалавра',
      'foot.l.master':  'Програми магістра',
      'foot.l.intl':    'Іноземні студенти',
      'foot.l.schol':   'Стипендії',
      'foot.l.dorm':    'Поселення в гуртожиток',
      'foot.meta1':     '© 2026 Студентське життя НУПП',
      'foot.meta2':     'Полтавська Політехніка · 200+ років цікавості',

      /* CAMPUS LIFE PAGE */
      'cl.crumb.home':  'Головна',
      'cl.hero.h1':     'День з<br /><span class="yellow">життя</span> в <span class="stroke">НУПП.</span>',
      'cl.hero.lead':   "Погодинна прогулянка кампусом — що студенти їдять, де навчаються, де гамірно, де тихо і де живе чайник. Чесна версія.",

      'cl.mq.a': '07:30 будильник',
      'cl.mq.b': '08:30 перша пара',
      'cl.mq.c': '13:00 черга в їдальні',
      'cl.mq.d': '18:00 година клубів',
      'cl.mq.e': '23:00 чайна рада в гуртожитку',

      'cl.day.eyebrow': '§ 01 — Звичайний вівторок',
      'cl.day.h2':      'Від чайника<br />до відбою.',
      'cl.day.p':       "У кожного факультету свій ритм, але для студента-другокурсника ІТ, який живе в гуртожитку 4, вівторки виглядають ось так.",

      'cl.t07.ampm': 'ранку · будильник',
      'cl.t07.h4a':  'Чайник увімкнено, капці взуто.',
      'cl.t07.pa':   "Четвертий корпус прокидається повільно. Кава в кіоску на розі коштує 35 грн, і продавець пам'ятає твоє замовлення вже на третьому тижні.",
      'cl.t07.h4b':  '12 хвилин пішки.',
      'cl.t07.pb':   'Скорочуєш через парк, повз бронзову табличку, по парадних сходах Головного корпусу. Рівно 23 сходинки — так, студенти рахували.',

      'cl.t08.ampm': 'ранку · пара',
      'cl.t08.h4a':  'Алгоритми, ауд. 312.',
      'cl.t08.pa':   'Старі парти, дошка, викладач малює діаграми швидше, ніж ти встигаєш. Перший ряд — для завзятих, останній — для тих, хто відходить.',
      'cl.t08.h4b':  '10 хвилин перерви, галас у коридорі.',
      'cl.t08.pb':   'Коридор біля ауд. 312 — неофіційна біржа пліток. Тут дізнаєшся про вибори в клубах, зливи з іспитів (чутки) і чутки про заручини (теж чутки).',

      'cl.t13.ampm': 'дня · обід',
      'cl.t13.h4a':  'Їдальня, корпус 02.',
      'cl.t13.pa':   'Черга за борщем найшвидша рівно о 13:05, поки архітектори ще в студії. Галушки по середах. Компот — завжди.',
      'cl.t13.h4b':  'Кава на сходах.',
      'cl.t13.pb':   'Якщо сонячно — студенти сидять на парапеті парадних сходів. Двадцять хвилин ні про що. Священно.',

      'cl.t15.ampm': 'дня · лаб',
      'cl.t15.h4a':  "Комп'ютерний клас, корпус 03.",
      'cl.t15.pa':   'Linux-машини, три монітори кожен, у повітрі запах локшини швидкого приготування. Час групового проєкту. Четверо людей, дві думки, один конфлікт злиття.',
      'cl.t15.h4b':  'Бібліотека, третій поверх, біля вікна.',
      'cl.t15.pb':   'Ті самі місця. Телефон донизу екраном, навушники в, дві години нарешті зробленої роботи. Старий радіатор клацає із заспокійливою рівномірністю.',

      'cl.t18.ampm': 'вечора · клуби',
      'cl.t18.h4a':  'Лабораторія робототехніки — зустріч у вівторок.',
      'cl.t18.pa':   'Паяння, розв\'язування задач, іноді — спрацьовування пожежної сигналізації. Десь о 19:30 з\'являється піца, і ніхто не знає, хто замовив.',
      'cl.t18.h4b':  'Репетиція хору, зал 2.',
      'cl.t18.pb':   '«Поліфонія» розспівується гамами, а закінчує — тим, що хтось грає пісню на фортепіано, і всі підспівують. Акустика: злочинно хороша.',

      'cl.t23.ampm': 'вечора · гуртожиток',
      'cl.t23.h4a':  'Чайна рада на кухні.',
      'cl.t23.pa':   "Шестеро людей, чотири кружки, один підозрілий торт від чиєїсь мами. Теми: політика, філософія, чому свистить радіатор на третьому поверсі.",
      'cl.t23.h4b':  'Остання година за столом.',
      'cl.t23.pb':   "Лягаєш спати до 01:00, якщо розумний; до 03:00 — якщо сесія; і кажеш собі, що відіспишся на вихідних.",

      'cl.mb.eyebrow': '§ 02 — Корпус 01',
      'cl.mb.h2':      'Головний корпус має власне притяжіння.',
      'cl.mb.p':       "Збудований у 1930-х роках на проспекті Першотравневому, восьмиповерховий флагман — тут кожен студент НУПП слухає хоча б одну пару. Мармурові сходи, оригінальні люстри в залі ректора та горище, де, за легендою, стоїть фортепіано, на якому не грали з 1987 року.",
      'cl.mb.stat1':   'Поверхи',
      'cl.mb.stat2':   'Аудиторії',
      'cl.mb.stat3':   'Збудовано',

      'cl.dorms.h2':       'Шість гуртожитків.<br />Один спільний чайник.',
      'cl.dorms.p':        "Корпуси з 1 по 6, усі в десяти хвилинах від Головного корпусу. Кожен має свій характер — корпус 03 шумний, корпус 05 має легендарну кухню, корпус 06 — де живуть іноземці й мимоволі вчать три мови.",
      'cl.dorms.std.h4':   'Стандартна кімната',
      'cl.dorms.std.li1':  'Ліжко, стіл, шафа, лампа',
      'cl.dorms.std.li2':  'Спільна кухня на поверсі',
      'cl.dorms.std.li3':  'Душ і санвузол на поверсі',
      'cl.dorms.rent.h4':  'Середня орендна плата',
      'cl.dorms.rent.li1': 'Комунальні послуги включено',
      'cl.dorms.rent.li2': 'Wi-Fi скрізь',
      'cl.dorms.rent.li3': 'Охорона та доступ 24/7',

      'cl.costs.eyebrow': '§ 04 — Вартість студентського життя',
      'cl.costs.h2':      'Місяць<br />у полтавських гривнях.',
      'cl.costs.p':       'Скільки витрачає типовий студент НУПП на місяць — за опитуванням 240 другокурсників із 6 факультетів. (1 EUR ≈ 44 грн.)',
      'cl.costs.c1.h4':   'Оренда гуртожитку',
      'cl.costs.c1.li1':  'Кімната на 2-3 особи',
      'cl.costs.c1.li2':  'Комунальні послуги включено',
      'cl.costs.c1.li3':  'Wi-Fi включено',
      'cl.costs.c2.h4':   'Їжа та їдальня',
      'cl.costs.c2.li1':  '~80 грн обід у кампусі',
      'cl.costs.c2.li2':  'Кавовий куток: 35 грн',
      'cl.costs.c2.li3':  'Суботній ринок — маленьке свято',
      'cl.costs.c3.h4':   'Усе інше',
      'cl.costs.c3.li1':  'Транспорт, спортзал, книги',
      'cl.costs.c3.li2':  'Кіно, квартирники',
      'cl.costs.c3.li3':  'Борщ за потреби',

      'cl.cta.eyebrow': 'Готовий вступити?',
      'cl.cta.h2':      'Переконайся сам.',
      'cl.cta.p':       "Дні відкритих дверей — перша субота кожного місяця з березня по червень. Безкоштовна екскурсія, безкоштовна кава і можливість справді пройтись мармуровими сходами.",
      'cl.cta.btn1':    'Вступити зараз ↗',
      'cl.cta.btn2':    'На головну',
      'cl.cta.btn2b':   'На головну ↩',
    }
  };

  let lang = localStorage.getItem('nupp-lang') || 'en';

  function applyLang(l) {
    const t = T[l];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = t[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });
    const btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = l === 'en' ? 'UA' : 'EN';
    document.documentElement.lang = l === 'ua' ? 'uk' : 'en';
    localStorage.setItem('nupp-lang', l);
    lang = l;
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(lang);
    const btn = document.getElementById('lang-btn');
    if (btn) btn.addEventListener('click', function () {
      applyLang(lang === 'en' ? 'ua' : 'en');
    });
  });
})();
