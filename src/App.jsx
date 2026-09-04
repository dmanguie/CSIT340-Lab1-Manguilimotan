function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Danielle Manguilimotan</h1>
        <p className="mt-2 text-lg text-slate-600">BSIT student and furniture business owner from Cebu, Philippines.</p>
        <hr className="mt-8 border-slate-200" />
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="leading-relaxed text-slate-700">
            I am a BSIT student from Cebu who enjoys learning about technology and building useful
            projects. Outside of school, I also help run a furniture business where we create
            handmade and customized furniture for different spaces.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Details</h2>
          <p className="leading-relaxed text-slate-700">
            Course: BS Information Technology
            <br />
            Year level: Third year
            <br />
            Hometown: Aloguinsan Cebu, Philippines
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Things I like</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Building websites and applications</li>
            <li>Learning new technology</li>
            <li>Hiking, Freediving, and running/walking</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Reach me</h2>
          <p className="leading-relaxed text-slate-700">
            You can reach me through my social media accounts
            <br />
            @dandandemadara
          </p>
        </section>

      </main>

      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-slate-200" />
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </section>
    </>
  )
}

export default App