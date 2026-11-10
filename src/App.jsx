import { useEffect, useMemo, useState } from "react";
import {
  TRIP, FLIGHTS, TICKETS, HOTEL, VERSION_CHANGES, DAYS,
  BIG5_HOURS, GAME_PLAN, TALKS, ZONES, TIERS,
  REMINDERS, PACKING, ESSENTIALS, TRANSPORT, ETIQUETTE, EMERGENCY, QUICKREF,
} from "./data.js";

// ---------- persisted checklist state --------------------------
const LS_KEY = "bimtour-dubai-2026-done";
function loadDone() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

const COLOR = { navy: "#0B3954", teal: "#087E8B", gold: "#C8963E", coral: "#E4572E", green: "#3E8E5E", grey: "#6B7B8C" };
const CAT = { travel: "navy", free: "green", bim: "teal", big5: "coral", partner: "gold" };
const CAT_LABEL = { travel: "TRAVEL", free: "FREE DAY", bim: "BIM TOUR", big5: "BIG 5", partner: "MEETING" };

// ---------- tiny UI atoms --------------------------------------
function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function KV({ rows }) {
  return (
    <div className="kv">
      {rows.map((r, i) => (
        <div className="kv-row" key={i}>
          <div className="kv-k">{r.k}</div>
          <div className="kv-v">{r.v}</div>
        </div>
      ))}
    </div>
  );
}

function Callout({ color = "teal", title, children }) {
  return (
    <div className="callout" style={{ borderLeftColor: COLOR[color], background: `${COLOR[color]}14` }}>
      {title && <div className="callout-title" style={{ color: COLOR[color] }}>{title}</div>}
      {children}
    </div>
  );
}

function Tag({ tag }) {
  if (tag === "top") return <span className="tag tag-top">⭐ TOP EVENT</span>;
  if (tag === "key") return <span className="tag tag-key">🔑 IMPORTANT</span>;
  return null;
}

// ---------- TAB: HOME ------------------------------------------
function Home({ done, goto }) {
  const total = REMINDERS.length + PACKING.length;
  const doneCount = [...REMINDERS, ...PACKING].filter((x) => done[x.id]).length;
  const pct = Math.round((doneCount / total) * 100);
  return (
    <>
      <div className="hero">
        <div className="hero-kicker">TRAVEL PLAN & ITINERARY · VERSION 2</div>
        <h1>{TRIP.title}</h1>
        <div className="hero-sub">{TRIP.subtitle}</div>
        <div className="hero-dates">{TRIP.dates} · Dubai, UAE</div>
        <div className="hero-meta">{TRIP.version} · {TRIP.travellers}</div>
      </div>

      <div className="stats">
        {TRIP.stats.map((s, i) => (
          <div className="stat" key={i} style={{ background: [COLOR.teal, COLOR.gold, COLOR.coral, COLOR.green][i] }}>
            <div className="stat-big">{s.big}</div>
            <div className="stat-small">{s.small}</div>
          </div>
        ))}
      </div>

      <Section title="🗺️ Week at a glance">
        <div className="week">
          {DAYS.map((d) => (
            <button key={d.id} className="week-day" style={{ background: COLOR[d.color] }} onClick={() => goto("schedule", d.id)}>
              <div className="week-dow">{d.dow}</div>
              <div className="week-num">{d.num}</div>
              <div className="week-title">{d.title}</div>
            </button>
          ))}
        </div>
        <div className="big5-band">BIG 5 GLOBAL · DWTC · 23 – 26 NOV</div>
      </Section>

      <Section title="✅ Trip readiness">
        <div className="progress-wrap" onClick={() => goto("reminders")}>
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
          <div className="progress-label">{doneCount} / {total} items confirmed ({pct}%) — tap to open Reminders</div>
        </div>
      </Section>

      <Section title="✨ What's new in Version 2">
        <Callout color="gold">
          <ul className="list">
            <li><b>Flights:</b> Emirates direct from <b>Rome Fiumicino (FCO)</b> instead of Salerno — out <b>Sat 21 Nov</b>, back <b>Fri 27 Nov</b>.</li>
            <li><b>Hotel:</b> same hotel, <b>Canal Central</b>, now from <b>21 Nov</b> (6 nights).</li>
            <li><b>Bonus:</b> free day on <b>Sun 22 Nov</b> to rest and prepare.</li>
            <li><b>Unchanged:</b> every appointment from Version 1 + Big 5 show days.</li>
          </ul>
        </Callout>
      </Section>
    </>
  );
}

// ---------- TAB: TRAVEL ----------------------------------------
function Travel() {
  return (
    <>
      <Section title="✈️ Flights — Emirates direct, T3 both ends">
        {FLIGHTS.map((f) => (
          <div className="flight" key={f.id}>
            <div className="flight-head" style={{ background: COLOR[f.color] }}>
              <span>{f.icon} {f.label}</span><span>{f.date}</span>
            </div>
            <div className="flight-body">
              <div className="flight-route">
                <div className="fr-col"><div className="fr-code">{f.from.code}</div><div className="fr-city">{f.from.city}</div><div className="fr-time">{f.from.time}</div></div>
                <div className="fr-mid">✈ <div className="fr-flight">{f.flight}</div></div>
                <div className="fr-col"><div className="fr-code">{f.to.code}</div><div className="fr-city">{f.to.city}</div><div className="fr-time">{f.to.time}</div></div>
              </div>
              <div className="flight-meta">
                <div>{f.carrier}</div>
                <div>{f.checkin} · {f.duration}</div>
                <div>🧳 {f.baggage}</div>
              </div>
            </div>
          </div>
        ))}
        <Callout color="navy" title="⏰ Airport timing (Emirates rules)">
          <ul className="list">
            <li>Online check-in opens <b>48 h before</b> each flight.</li>
            <li>Arrive <b>3 h before departure</b> (up to 4 h at busy times).</li>
            <li>Passport control 90 min before · gate 60 min before (Economy).</li>
            <li><b>21 Nov:</b> be at FCO T3 by ≈ <b>11:00</b> → leave Irpinia by ≈ <b>07:30</b>.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="👥 Travellers & tickets">
        {TICKETS.map((t, i) => (
          <div className="ticket" key={i}>
            <div className="ticket-name">{t.passenger}</div>
            <div className="ticket-row"><span>Ticket</span><b>{t.ticket}</b></div>
            <div className="ticket-row"><span>Booking ref</span><b>{t.ref}</b></div>
          </div>
        ))}
      </Section>

      <Section title="🏨 Hotel — Canal Central">
        <KV rows={[
          { k: "Address", v: HOTEL.address },
          { k: "Check-in", v: HOTEL.checkin },
          { k: "Check-out", v: HOTEL.checkout },
          { k: "Nights", v: HOTEL.nights },
          { k: "Booking #", v: HOTEL.booking },
          { k: "Phone", v: <a href={`tel:${HOTEL.phone.replace(/\s/g, "")}`}>{HOTEL.phone}</a> },
          { k: "Email", v: <a href={`mailto:${HOTEL.email}`}>{HOTEL.email}</a> },
          { k: "Action", v: HOTEL.action },
        ]} />
        <Callout color="gold" title="Two small emails that save big headaches">
          <ul className="list">{HOTEL.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </Callout>
      </Section>

      <Section title="🔄 What changed vs. Version 1">
        <div className="vtable">
          <div className="vt-row vt-head"><div /><div>V1 (old)</div><div>V2 (now)</div></div>
          {VERSION_CHANGES.map((c, i) => (
            <div className="vt-row" key={i}><div className="vt-k">{c.k}</div><div className="vt-old">{c.v1}</div><div className="vt-new">{c.v2}</div></div>
          ))}
        </div>
      </Section>
    </>
  );
}

// ---------- TAB: SCHEDULE --------------------------------------
function Schedule({ selectedDay, setSelectedDay }) {
  const day = DAYS.find((d) => d.id === selectedDay) || DAYS[0];
  return (
    <>
      <div className="day-chips">
        {DAYS.map((d) => (
          <button key={d.id}
            className={`chip ${d.id === day.id ? "chip-on" : ""}`}
            style={d.id === day.id ? { background: COLOR[d.color], borderColor: COLOR[d.color] } : {}}
            onClick={() => setSelectedDay(d.id)}>
            <span className="chip-dow">{d.dow}</span><span className="chip-num">{d.num}</span>
          </button>
        ))}
      </div>

      <div className="day-head" style={{ background: COLOR[day.color] }}>
        <div className="day-head-title">{day.dow} {day.num} NOV · {day.title}</div>
        <div className="day-head-sub">{day.sub}</div>
      </div>

      <div className="events">
        {day.events.map((e, i) => (
          <div className={`event ${e.tag === "top" ? "event-top" : ""}`} key={i}
            style={{ borderLeftColor: COLOR[CAT[e.cat]] }}>
            <div className="event-time" style={{ color: COLOR[CAT[e.cat]] }}>{e.time}</div>
            <div className="event-main">
              <div className="event-what">{e.what} <Tag tag={e.tag} /></div>
              <div className="event-where">📍 {e.where} · <span className="event-cat" style={{ color: COLOR[CAT[e.cat]] }}>{CAT_LABEL[e.cat]}</span></div>
            </div>
          </div>
        ))}
      </div>

      {day.warn && <Callout color="coral" title="⚠️ Logistics check">{day.warn}</Callout>}
      {day.tip && <Callout color="teal" title="💡 Tip">{day.tip}</Callout>}

      <Section title="🏷️ Legend">
        <div className="legend">
          {Object.keys(CAT).map((c) => (
            <span key={c} className="legend-item"><i style={{ background: COLOR[CAT[c]] }} />{CAT_LABEL[c]}</span>
          ))}
          <span className="legend-item"><span className="tag tag-top">⭐ TOP EVENT</span></span>
          <span className="legend-item"><span className="tag tag-key">🔑 IMPORTANT</span></span>
        </div>
      </Section>
    </>
  );
}

// ---------- TAB: BIG 5 -----------------------------------------
function Big5() {
  const [open, setOpen] = useState("t1");
  return (
    <>
      <Section title="🕘 Opening hours · DWTC">
        <div className="hours">
          {BIG5_HOURS.map((h, i) => (
            <div className="hour" key={i} style={{ background: [COLOR.teal, COLOR.teal, COLOR.gold, COLOR.coral][i] }}>
              <b>{h.day}</b><span>{h.hours}</span>
            </div>
          ))}
        </div>
        <Callout color="coral" title="🎫 Tickets">Do <b>NOT</b> print at home — show the PDF badge on your phone at DWTC for on-site printing.</Callout>
      </Section>

      <Section title="🎯 Show-floor game plan">
        {GAME_PLAN.map((g, i) => (
          <div className="plan" key={i}>
            <div className="plan-day">{g.day}<span>{g.slot}</span></div>
            <div className="plan-body"><div>{g.focus}</div><div className="plan-where">📍 {g.where}</div></div>
          </div>
        ))}
      </Section>

      <Section title="🤝 Exhibitors to meet — by tier">
        {TIERS.map((t) => (
          <div className="tier" key={t.id}>
            <button className="tier-head" style={{ background: COLOR[t.color] }} onClick={() => setOpen(open === t.id ? "" : t.id)}>
              <span>{t.medal} {t.name}</span><span>{open === t.id ? "▲" : "▼"}</span>
            </button>
            {open === t.id && (
              <div className="tier-body">
                <div className="tier-note">{t.note}</div>
                {t.rows.map((r, i) => (
                  <div className="card" key={i}>
                    <div className="card-title">{r[0]}</div>
                    <div className="card-stand">📍 {r[1]}</div>
                    <div className="card-why">{r[2]}</div>
                    {r[3] && <div className="card-ask">🎙️ Ask for: <b>{r[3]}</b></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <Callout color="grey">📍 The partner list says "Hall 4"; 2026 Big 5 materials place digital & geospatial zones in the <b>Za'abeel Halls</b>. Confirm every stand in the official app on Sunday 22.</Callout>
      </Section>

      <Section title="🗣️ Talks & summits (official 2026 agenda)">
        {TALKS.map((t, i) => (
          <div className="talks" key={i}>
            <div className="talks-venue">{t.venue}</div>
            <div className="talks-grid">
              <div><b>MON</b> {t.mon}</div><div><b>TUE</b> {t.tue}</div>
              <div><b>WED</b> {t.wed}</div><div><b>THU</b> {t.thu}</div>
            </div>
          </div>
        ))}
        <div className="small grey">(D) = delegate pass · (I) = invitation only · Big 5 Impact Trail runs daily.</div>
      </Section>

      <Section title="🧭 Zones worth walking">
        {ZONES.map((z, i) => (
          <div className="card" key={i}>
            <div className="card-title">{z.z}</div>
            <div className="card-why">{z.what}</div>
            <div className="card-ask">→ {z.why}</div>
          </div>
        ))}
      </Section>
    </>
  );
}

// ---------- TAB: REMINDERS -------------------------------------
function Check({ item, done, toggle }) {
  const ok = !!done[item.id];
  return (
    <button className={`check ${ok ? "check-on" : ""} ${item.urgent && !ok ? "check-urgent" : ""}`} onClick={() => toggle(item.id)}>
      <span className="check-box">{ok ? "✓" : ""}</span>
      <span className="check-text">
        {item.due && <b className="check-due">{item.due} · </b>}
        <span className={ok ? "strike" : ""}>{item.text}</span>
      </span>
    </button>
  );
}

function Reminders({ done, toggle, reset }) {
  const rDone = REMINDERS.filter((r) => done[r.id]).length;
  const pDone = PACKING.filter((p) => done[p.id]).length;
  return (
    <>
      <Section title={`⏰ Special reminders — confirm on completion (${rDone}/${REMINDERS.length})`}>
        <div className="small grey" style={{ marginBottom: 8 }}>🔴 red border = urgent / time-critical. Tap to confirm ✓ — saved on this phone.</div>
        {REMINDERS.map((r) => <Check key={r.id} item={r} done={done} toggle={toggle} />)}
      </Section>
      <Section title={`🎒 Packing checklist (${pDone}/${PACKING.length})`}>
        {PACKING.map((p) => <Check key={p.id} item={p} done={done} toggle={toggle} />)}
      </Section>
      <button className="reset" onClick={reset}>↺ Reset all checkmarks</button>
    </>
  );
}

// ---------- TAB: INFO ------------------------------------------
function Info() {
  return (
    <>
      <Section title="🌍 Dubai travel essentials">
        <KV rows={ESSENTIALS} />
      </Section>
      <Section title="🚕 Getting around">
        <KV rows={TRANSPORT} />
      </Section>
      <Section title="🤝 Business etiquette in a nutshell">
        <ul className="list">{ETIQUETTE.map((e, i) => <li key={i}>{e}</li>)}</ul>
      </Section>
      <Section title="🚨 Emergency numbers">
        <div className="hours">
          {EMERGENCY.map((e, i) => (
            <a className="hour" key={i} href={`tel:${e.n}`} style={{ background: COLOR[e.c] }}>
              <b>{e.n}</b><span>{e.l}</span>
            </a>
          ))}
        </div>
      </Section>
      <Section title="📌 Quick reference">
        <KV rows={QUICKREF} />
      </Section>
      <Section title="🇮🇹 Before you fly — Italian travellers">
        <ul className="list">
          <li>Register the trip on <b>Dove Siamo nel Mondo</b> (Farnesina) and read the UAE page on <b>Viaggiare Sicuri</b>.</li>
          <li>Save the contacts of the <b>Consolato Generale d'Italia a Dubai</b> in your phone.</li>
          <li>Check your travel/health insurance covers the UAE.</li>
        </ul>
      </Section>
      <div className="farewell">Have a wonderful and fruitful trip — بالتوفيق ✨</div>
    </>
  );
}

// ---------- ROOT -----------------------------------------------
const TABS = [
  { id: "home", icon: "🏠", label: "Trip" },
  { id: "travel", icon: "✈️", label: "Travel" },
  { id: "schedule", icon: "📅", label: "Schedule" },
  { id: "big5", icon: "🏛️", label: "Big 5" },
  { id: "reminders", icon: "✅", label: "Reminders" },
  { id: "info", icon: "ℹ️", label: "Info" },
];

export default function App() {
  const [tab, setTab] = useState("home");
  const [selectedDay, setSelectedDay] = useState("sat21");
  const [done, setDone] = useState(loadDone);

  useEffect(() => {
    try { localStorage.setItem(LS_KEY, JSON.stringify(done)); } catch { /* storage unavailable */ }
  }, [done]);

  const toggle = (id) => setDone((d) => ({ ...d, [id]: !d[id] }));
  const reset = () => { if (window.confirm("Reset all checkmarks?")) setDone({}); };
  const goto = (t, dayId) => { setTab(t); if (dayId) setSelectedDay(dayId); window.scrollTo(0, 0); };

  const pendingUrgent = useMemo(() => REMINDERS.filter((r) => r.urgent && !done[r.id]).length, [done]);

  return (
    <div className="app">
      <header className="topbar">
        <span className="topbar-title">✈️ Dubai 2026 · Big 5 Global</span>
        <span className="topbar-badge">{TRIP.dates}</span>
      </header>

      <main className="content">
        {tab === "home" && <Home done={done} goto={goto} />}
        {tab === "travel" && <Travel />}
        {tab === "schedule" && <Schedule selectedDay={selectedDay} setSelectedDay={setSelectedDay} />}
        {tab === "big5" && <Big5 />}
        {tab === "reminders" && <Reminders done={done} toggle={toggle} reset={reset} />}
        {tab === "info" && <Info />}
      </main>

      <nav className="tabbar">
        {TABS.map((t) => (
          <button key={t.id} className={`tab ${tab === t.id ? "tab-on" : ""}`} onClick={() => goto(t.id)}>
            <span className="tab-icon">
              {t.icon}
              {t.id === "reminders" && pendingUrgent > 0 && <span className="dot">{pendingUrgent}</span>}
            </span>
            <span className="tab-label">{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
