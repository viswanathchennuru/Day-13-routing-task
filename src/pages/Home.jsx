function Home() {
  return (
    <main className="container portal-home">
      <header className="hero-card">
        <div>
          <h1>Student Portal Dashboard</h1>
          <p>
            A clean student dashboard for assessments, marks, announcements, and counselling support.
          </p>
        </div>
      </header>

      <section className="grid-row">
        <article className="info-card accent-card">
          <h2>Assessments</h2>
          <p>View your active assignments, upcoming deadlines, and submission status.</p>
          <ul>
            <li>Math assignment: due May 15</li>
            <li>Science lab report: submitted</li>
            <li>History quiz: pending review</li>
          </ul>
        </article>

        <article className="info-card blue-card">
          <h2>Marks</h2>
          <p>Check your latest grades and see how each course contributes to your progress.</p>
          <ul>
            <li>Math: 90%</li>
            <li>English: 85%</li>
            <li>Computer Science: 92%</li>
          </ul>
        </article>
      </section>

      <section className="grid-row">
        <article className="info-card purple-card">
          <h2>Announcements</h2>
          <p>Receive the latest school updates, exam notices, and campus messages.</p>
          <ul>
            <li>Exam schedule published for next week</li>
            <li>New library resources now available</li>
            <li>Semester break starts June 1</li>
          </ul>
        </article>

        <article className="info-card green-card">
          <h2>Counselling</h2>
          <p>Connect with advisors for academic planning, stress support, and course guidance.</p>
          <ul>
            <li>Academic advising session: book now</li>
            <li>Wellbeing workshop on Thursday</li>
            <li>Peer mentoring available weekly</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default Home;