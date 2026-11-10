// ============================================================
//  BIM TOUR DUBAI 2026 — all trip data (from Travel Plan v2)
// ============================================================

export const TRIP = {
  title: "Dubai 2026 ✈ Big 5 Global",
  subtitle: "& Strategic BIM Meetings · ACCA Software",
  dates: "21 – 27 November 2026",
  version: "Travel Plan v2 · updated 10 Nov 2026",
  travellers: "@TONY / ANTHEA",
  stats: [
    { big: "7", small: "days on the ground" },
    { big: "6", small: "nights · Canal Central" },
    { big: "9", small: "meetings booked" },
    { big: "4", small: "Big 5 show days" },
  ],
};

export const FLIGHTS = [
  {
    id: "out",
    label: "OUTBOUND",
    icon: "🛫",
    color: "navy",
    date: "Saturday 21 November 2026",
    flight: "EK 098",
    carrier: "Emirates · Economy Saver · Confirmed",
    from: { code: "FCO", city: "Rome Fiumicino", terminal: "Terminal 3", time: "14:55" },
    to: { code: "DXB", city: "Dubai International", terminal: "Terminal 3", time: "23:25" },
    checkin: "Check-in from 10:55 (Rome)",
    duration: "≈ 5 h 30 flying · same-day arrival",
    baggage: "25 kg checked + 1 cabin bag (7 kg · 55×38×22 cm)",
  },
  {
    id: "ret",
    label: "RETURN",
    icon: "🛬",
    color: "teal",
    date: "Friday 27 November 2026",
    flight: "EK 097",
    carrier: "Emirates · Economy Saver · Confirmed",
    from: { code: "DXB", city: "Dubai International", terminal: "Terminal 3", time: "08:55" },
    to: { code: "FCO", city: "Rome Fiumicino", terminal: "Terminal 3", time: "12:40" },
    checkin: "Check-in from 05:55 (Dubai)",
    duration: "≈ 6 h 45 flying · same-day arrival",
    baggage: "25 kg checked + 1 cabin bag (7 kg · 55×38×22 cm)",
  },
];

export const TICKETS = [
  { passenger: "Anthea Dipietro", ticket: "176 2218502849", ref: "NWBDTB" },
  { passenger: "Antonio De Palma", ticket: "➕ add ticket number", ref: "➕ add booking ref" },
];

export const HOTEL = {
  name: "Canal Central Hotel",
  address: "Business Bay, Al Abraj Street, Dubai",
  checkin: "Sat 21 Nov 2026 (late arrival — after midnight)",
  checkout: "Fri 27 Nov 2026 (very early — ≈ 05:00)",
  nights: "6 nights",
  booking: "6291740468",
  phone: "+971 4 873 2100",
  email: "info.cc@central-hotels.com",
  action: "🧾 Request the TAX INVOICE at check-out",
  notes: [
    "🌙 Late arrival: we land 23:25 → hotel ≈ 00:30–01:00. Email the hotel so the room is HELD for late arrival on 21 Nov.",
    "🌅 Early departure: ask for bill + tax invoice the evening of Thu 26, taxi booked for 05:00, breakfast box if possible.",
  ],
};

// ---- SCHEDULE -------------------------------------------------
// tag: "top" = ⭐ Top specialistic event · "key" = 🔑 Important meeting
// cat colors: travel(navy) free(green) bim(teal) big5(coral) partner(gold)
export const DAYS = [
  {
    id: "sat21", dow: "SAT", num: "21", title: "Travel day", color: "navy",
    sub: "Rome → Dubai",
    events: [
      { time: "~07:30", what: "Leave home for Rome Fiumicino (≈ 3 h drive)", where: "Irpinia → FCO", cat: "travel" },
      { time: "10:55", what: "Check-in opens · bag drop", where: "FCO Terminal 3", cat: "travel" },
      { time: "14:55", what: "✈️ Flight EK 098 departs", where: "FCO → DXB", cat: "travel", tag: "key" },
      { time: "23:25", what: "Land in Dubai · passport control · taxi (~20–30 min)", where: "DXB Terminal 3", cat: "travel" },
      { time: "~00:30", what: "🏨 Hotel check-in, rest", where: "Canal Central Hotel", cat: "travel" },
    ],
    tip: "Buy an eSIM / local SIM before leaving the airport — EU roaming does NOT cover the UAE.",
  },
  {
    id: "sun22", dow: "SUN", num: "22", title: "Free & prep day ✨", color: "green",
    sub: "New in Version 2",
    events: [
      { time: "Morning", what: "Sleep in · breakfast · adjust to +3 h", where: "Hotel", cat: "free" },
      { time: "Midday", what: "Prep: confirm Monday driver · re-confirm meetings · load Big 5 app · star target stands", where: "Hotel", cat: "free", tag: "key" },
      { time: "Afternoon", what: "Optional: Burj Khalifa / Dubai Mall walk, or test ride to DWTC", where: "Downtown / DWTC", cat: "free" },
      { time: "Evening", what: "Early night — Monday starts ≈ 06:45", where: "Hotel", cat: "free" },
    ],
    tip: "Sunday is part of the UAE weekend (Sat–Sun): offices closed — perfect for preparation.",
  },
  {
    id: "mon23", dow: "MON", num: "23", title: "BIM Tour + Big 5 opening", color: "teal",
    sub: "UAQ · Fujairah · DWTC",
    events: [
      { time: "~06:45", what: "Depart hotel with pre-booked car & driver", where: "Business Bay", cat: "travel" },
      { time: "08:00–10:00", what: "🏛️ BIM Tour: Umm Al Quwain Municipality", where: "Umm Al Quwain", cat: "bim", tag: "top" },
      { time: "11:00–13:00", what: "🏛️ BIM Tour: Fujairah Municipality", where: "Fujairah", cat: "bim", tag: "top" },
      { time: "Afternoon", what: "🏢 Big 5 Global (11:00–18:00) · badges · meeting with Dubai Municipality on-site", where: "DWTC", cat: "big5", tag: "top" },
    ],
    warn: "⚠️ UAQ → Fujairah is ≈ 1 h 30 drive but only 60 min between meetings. Ask Fujairah if 11:00 can become ~11:30, or leave UAQ by 09:30. Realistic arrival at Big 5: ≈ 15:00.",
    tip: "Car with driver for the whole day: prepare notes between stops, zero parking stress.",
  },
  {
    id: "tue24", dow: "TUE", num: "24", title: "Academia + buildingSMART", color: "teal",
    sub: "Universities · DWTC",
    events: [
      { time: "Morning", what: "🎓 Academic BIM meetings — both architectural universities", where: "University campuses", cat: "bim", tag: "key" },
      { time: "Afternoon", what: "⭐ buildingSMART Talks + Geospatial Talks — meet buildingSMART UAE", where: "Za'abeel Hall 6 Stage", cat: "big5", tag: "top" },
      { time: "Afternoon", what: "🤝 Proposed: Dubai Land Department (to be finalised)", where: "DWTC / DLD", cat: "partner", tag: "key" },
    ],
    tip: "Big 5 open 10:00–18:00. The talks fall exactly in our free afternoon — ideal for buildingSMART UAE.",
  },
  {
    id: "wed25", dow: "WED", num: "25", title: "Partner meetings day", color: "gold",
    sub: "Four meetings across Dubai",
    events: [
      { time: "09:00–10:00", what: "🤝 Wade Adams Contracting", where: "Corporate office / on-site", cat: "partner", tag: "key" },
      { time: "12:00–13:00", what: "🤝 Architectural Corner", where: "Design office", cat: "partner", tag: "key" },
      { time: "15:00–16:00", what: "🤝 NSD Architectural Consultants", where: "Consultant office", cat: "partner", tag: "key" },
      { time: "17:00–19:00", what: "🤝 Mad Bricks", where: "Office / venue", cat: "partner", tag: "key" },
    ],
    tip: "Gaps (10–12, 13–15) = notes & follow-up emails. Big 5 open 10:00–18:00 if an office is near DWTC.",
  },
  {
    id: "thu26", dow: "THU", num: "26", title: "Buffer & wrap-up", color: "gold",
    sub: "Big 5 closes at 17:00",
    events: [
      { time: "Morning", what: "Spill-over meetings · Tier 2 & 3 stands · Italian Pavilion · FM Talks", where: "TBD / DWTC", cat: "big5" },
      { time: "Afternoon", what: "Internal discussions & trip wrap-up · last stand visits before 17:00", where: "Canal Central / DWTC", cat: "big5" },
      { time: "Evening", what: "Pack · settle bill · collect TAX INVOICE · book 05:00 taxi", where: "Hotel", cat: "travel", tag: "key" },
    ],
  },
  {
    id: "fri27", dow: "FRI", num: "27", title: "Home day", color: "navy",
    sub: "Dubai → Rome",
    events: [
      { time: "~04:15", what: "Wake up · breakfast box", where: "Hotel", cat: "travel" },
      { time: "~05:00", what: "Taxi to airport (~20–30 min)", where: "Business Bay → DXB T3", cat: "travel" },
      { time: "05:55", what: "Check-in for EK 097", where: "DXB Terminal 3", cat: "travel" },
      { time: "08:55", what: "✈️ Flight EK 097 departs", where: "DXB → FCO", cat: "travel", tag: "key" },
      { time: "12:40", what: "Land in Rome — welcome home! 🇮🇹", where: "FCO Terminal 3", cat: "travel" },
    ],
  },
];

// ---- BIG 5 ----------------------------------------------------
export const BIG5_HOURS = [
  { day: "MON 23", hours: "11:00 – 18:00" },
  { day: "TUE 24", hours: "10:00 – 18:00" },
  { day: "WED 25", hours: "10:00 – 18:00" },
  { day: "THU 26", hours: "10:00 – 17:00" },
];

export const GAME_PLAN = [
  { day: "MON 23", slot: "~15:00–18:00", focus: "Badges · Dubai Municipality · scouting walk of the digital zone to locate Tier 1 stands", where: "Za'abeel Halls · AI Talks (Hall 6 Stage)" },
  { day: "TUE 24", slot: "Afternoon", focus: "⭐ buildingSMART + Geospatial Talks · buildingSMART UAE · CORA Premier (talks sponsor) · Tier 4 geospatial stands · DLD", where: "Za'abeel Hall 6 Stage · GeoWorld" },
  { day: "WED 25", slot: "Gaps only", focus: "Quick visit if a meeting is near DWTC · Startup City Talks & Pitch Competition", where: "Za'abeel Hall 6 Stage" },
  { day: "THU 26", slot: "Morning", focus: "Tier 2 & 3 conversations · Italian Pavilion · second visits · Facility Management Talks (URBANISE FM)", where: "Hall 6 Stage · Italian Pavilion" },
];

export const TALKS = [
  { venue: "Za'abeel Hall 6 Stage", mon: "AI Talks", tue: "AM: Startup pitch (prelim) · PM: ⭐ buildingSMART & Geospatial Talks", wed: "Startup City Talks & Pitch Competition", thu: "Facility Management Talks" },
  { venue: "Sheikh Rashid Hall Stage", mon: "Sustainability Talks", tue: "Building Codes & Regulation Talks", wed: "Everything Architecture Talks", thu: "Let's Talk Fire" },
  { venue: "Al Multaqua Ballroom", mon: "Leaders' Summit (D)", tue: "LiveableCitiesX Summit (D)", wed: "Impact Awards (I)", thu: "FutureTech Summit (D)" },
  { venue: "Al Ain Meeting Room A+B", mon: "Project Management Talks", tue: "Project Management Talks", wed: "Concrete Talks", thu: "Geotechnical Talks" },
];

export const ZONES = [
  { z: "💻 Digital Construction World", what: "AI, data, BIM, robotics, PM software", why: "The heart of our visit — most Tier 1–3 targets" },
  { z: "🛰️ GeoWorld + Geospatial Talks", what: "Survey, drones, LiDAR, GNSS", why: "Tier 4 targets · the usBIM.geotwin story" },
  { z: "🚀 Startup City", what: "Construction-tech start-ups & pitches", why: "Scouting future partners / competitors" },
  { z: "🇮🇹 Italian Pavilion", what: "Italian exhibitors, all sectors", why: "Rimond & Topogeos likely here · easy networking" },
  { z: "🏙️ LiveableCitiesX · Future FM", what: "Urban development & FM shows", why: "Digital-twin & handover conversations" },
  { z: "🌱 Big 5 Impact Trail", what: "Route to lower-emission suppliers", why: "Context for municipality talks" },
];

export const TIERS = [
  {
    id: "t1", name: "TIER 1 — Direct reseller candidates", color: "teal", medal: "🥇",
    note: "Sell software to Gulf AEC buyers, no openBIM line · the IPP conversations · 🗓️ best: MON PM",
    cols: ["Company", "Stand", "Why they fit", "Ask for"],
    rows: [
      ["ZWSOFT Middle East & Africa", "To verify", "⭐ Strongest target: real MEA dealer network for ZWCAD — master distributor, or their GCC dealers as prospect list", "Channel Manager MEA"],
      ["SIGNAX Software Design (L.L.C)", "To verify", "Dubai software house: BIM site control & progress tracking for GCC contractors — complementary", "Regional Sales / Country Manager"],
      ["First Bit Technologies LLC", "To verify", "Deep UAE SME base, subscription muscle — volume channel", "Head of Software Division"],
      ["VEROSOFT MEA Information Technology", "To verify", "Regional enterprise distribution — qualify hard on AEC know-how", "Business Development Director"],
    ],
  },
  {
    id: "t2", name: "TIER 2 — Implementation partners", color: "gold", medal: "🥈",
    note: "Deliver projects & pull licences through · 🗓️ best: THU AM",
    cols: ["Company", "Stand", "Why they fit", "Ask for"],
    rows: [
      ["Axium Global - FZCO", "To verify", "BIM services & engineering outsourcing — natural delivery arm of a usBIM rollout", "Operations Director / Head of BIM"],
      ["Rimond Innovative Constructions Srl", "Italian Pavilion (likely)", "🇮🇹 Italian BIM consultancy in the Gulf — easiest first conversation of the week", "Managing Director"],
      ["INSYNCHRO Group of Companies", "To verify", "Regional construction-tech integrator — 15 min to size BIM capability", "Technical Director"],
    ],
  },
  {
    id: "t3", name: "TIER 3 — Co-sell, not resell", color: "coral", medal: "🥉",
    note: "Own contractor/developer relationships · pitch integration & referral · 💬 \"What does your platform do when the client sends you a model?\"",
    cols: ["Company", "Stand", "What they sell"],
    rows: [
      ["CORA Premier Holdco (Premier)", "4A181", "Cloud construction ERP · buildingSMART Talks sponsor — expect them there Tue 24"],
      ["Algorithms ME DMCC (Xpedeon)", "4B191", "Cloud construction ERP: procurement, cost, site"],
      ["ePROMIS Solutions", "To verify", "Construction & contracting ERP, large GCC base"],
      ["IN4VELOCITY INTERNATIONAL", "To verify", "In4Suite ERP for real-estate developers"],
      ["Opteam", "To verify", "Planning, scheduling & delivery control — 4D adjacency"],
      ["URBANISE FM", "Future FM area", "Cloud FM & strata — handover end of the twin story (FM Talks Thu 26)"],
      ["Benetics AG", "To verify", "AI site documentation (CH) — European peer on go-to-market"],
    ],
  },
  {
    id: "t4", name: "TIER 4 — Geospatial channel (usBIM.geotwin)", color: "green", medal: "🛰️",
    note: "Hardware vendors with nothing to sell alongside the data · 🗓️ best: TUE PM (Geospatial Talks)",
    cols: ["Company", "Stand", "Why they fit"],
    rows: [
      ["DJI Enterprise | AERONEX", "GeoWorld", "⭐ Strongest geospatial fit: regional channel; drone resellers need software with hardware"],
      ["Leica Geosystems DMCC", "GeoWorld", "Hexagon's geospatial arm, own GCC dealers — same harvesting logic as ZWSOFT"],
      ["Topogeos Srl", "Italian Pavilion (likely)", "🇮🇹 Italian surveying & geospatial — easy cultural fit"],
      ["SingularXYZ Intelligent Technology", "GeoWorld", "GNSS & deformation monitoring — low priority"],
      ["Wuhan Geosun Navigation", "GeoWorld", "LiDAR & mobile mapping — low priority"],
      ["EPiC LiDAR Tech Co., Ltd.", "GeoWorld", "LiDAR sensors — low priority"],
      ["Guangzhou Alpha Surveying", "GeoWorld", "Volume GNSS — low priority"],
    ],
  },
];

// ---- REMINDERS (confirmable) ----------------------------------
export const REMINDERS = [
  { id: "r1", due: "By 13 Nov", text: "Email the hotel: late arrival 21 Nov + early check-out 27 Nov", urgent: true },
  { id: "r2", due: "By 16 Nov", text: "Book car with driver for Mon 23 · confirm UAQ → Fujairah timing (ask Fujairah for ~11:30?)", urgent: true },
  { id: "r3", due: "By 18 Nov", text: "Confirm (or drop) Dubai Land Department · re-confirm all Wednesday meetings" },
  { id: "r4", due: "19 Nov", text: "Online check-in opens for EK 098 (48 h before)" },
  { id: "r5", due: "22 Nov", text: "Download Big 5 app · verify 'to verify' stand numbers · star all targets" },
  { id: "r6", due: "25 Nov", text: "Online check-in opens for EK 097 (48 h before)" },
  { id: "r7", due: "26 Nov", text: "Settle hotel bill · collect TAX INVOICE · book 05:00 taxi", urgent: true },
  { id: "r8", due: "Anytime", text: "Add Antonio's ticket number & booking reference to the Travel tab data" },
  { id: "r9", due: "Before flying", text: "Register trip on 'Dove Siamo nel Mondo' (Farnesina) · check Viaggiare Sicuri UAE page" },
];

export const PACKING = [
  { id: "p1", text: "Passport (6+ months valid)" },
  { id: "p2", text: "E-tickets + booking ref NWBDTB" },
  { id: "p3", text: "Hotel booking 6291740468" },
  { id: "p4", text: "Big 5 PDF badges on phone (do NOT print at home)" },
  { id: "p5", text: "Business cards — plenty!" },
  { id: "p6", text: "ACCA / IPP presentation + offline copy" },
  { id: "p7", text: "Type G plug adapter + power bank" },
  { id: "p8", text: "Light jacket (cold air-conditioning)" },
  { id: "p9", text: "Comfortable shoes for DWTC" },
  { id: "p10", text: "Medicines + prescriptions (original packaging)" },
  { id: "p11", text: "Travel insurance details" },
  { id: "p12", text: "Credit card + some AED cash" },
];

// ---- INFO -----------------------------------------------------
export const ESSENTIALS = [
  { k: "🛂 Entry (Italian passport)", v: "Visa-free on arrival (up to 90 days). Passport valid 6+ months. Keep hotel booking & return ticket handy." },
  { k: "🕒 Time zone", v: "GST (UTC+4), no DST — 3 hours ahead of Rome in November." },
  { k: "☀️ Weather (late Nov)", v: "Highs ≈ 30 °C, evenings ≈ 20 °C, dry. Light business wear + a layer for A/C." },
  { k: "💵 Money", v: "UAE Dirham (AED) ≈ 3.67 per USD. Cards everywhere; small cash useful." },
  { k: "📶 Phone & data", v: "EU roaming does NOT cover the UAE — buy eSIM or du / e& SIM at the airport. Some VoIP calls restricted; WhatsApp messages work." },
  { k: "🔌 Power", v: "Type G plugs (UK-style), 220–240 V — bring an adapter." },
  { k: "📅 Working week", v: "Weekend Sat–Sun, so Mon–Thu meetings fit the business week." },
  { k: "👔 Dress code", v: "Smart business for meetings & show. Modest in public (shoulders/knees covered)." },
  { k: "💊 Medicines", v: "Strict zero-tolerance drug laws; some common medicines controlled. Carry prescriptions / doctor's note." },
  { k: "🍷 Alcohol", v: "Only in licensed hotels, bars, restaurants — never in public." },
  { k: "💁 Tipping", v: "Not required; 10–15 % appreciated in restaurants; round up taxis." },
];

export const TRANSPORT = [
  { k: "Airport ⇄ hotel", v: "Taxi or Careem/Uber from DXB T3 to Business Bay ≈ 20–30 min. At our late arrival, taxi is simplest." },
  { k: "Hotel ⇄ DWTC", v: "Short taxi (10–15 min) or Metro Red Line to World Trade Centre station." },
  { k: "UAQ & Fujairah (Mon)", v: "Outside Dubai — pre-booked car with driver for the whole day." },
  { k: "Taxis & apps", v: "RTA taxis metered; Careem & Uber work everywhere. Metro: first carriage = Gold Class; some carriages women & children only." },
];

export const ETIQUETTE = [
  "Be on time, but expect meetings to start a little late and include coffee & relationship talk.",
  "Offer & receive business cards with your RIGHT hand; take a moment to read the card.",
  "Wait for the other person to offer a handshake, especially across genders.",
  "Ask before photographing people, government buildings or offices.",
  "A short WhatsApp follow-up after a meeting is common and well received in the Gulf.",
];

export const EMERGENCY = [
  { n: "999", l: "Police", c: "navy" },
  { n: "998", l: "Ambulance", c: "coral" },
  { n: "997", l: "Fire", c: "gold" },
  { n: "112", l: "Emergency (mobile)", c: "teal" },
];

export const QUICKREF = [
  { k: "Flight booking ref", v: "NWBDTB" },
  { k: "Ticket (Anthea Dipietro)", v: "176 2218502849" },
  { k: "Outbound", v: "EK 098 · Sat 21 Nov · FCO 14:55 → DXB 23:25" },
  { k: "Return", v: "EK 097 · Fri 27 Nov · DXB 08:55 → FCO 12:40" },
  { k: "Hotel", v: "Canal Central Hotel, Al Abraj St, Business Bay" },
  { k: "Hotel booking / phone", v: "6291740468 · +971 4 873 2100" },
  { k: "Hotel email", v: "info.cc@central-hotels.com" },
  { k: "Big 5 Global", v: "Dubai World Trade Centre · 23–26 Nov" },
];
