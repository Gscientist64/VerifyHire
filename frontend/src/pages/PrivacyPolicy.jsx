import { FaShieldAlt } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <section className="border-b bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="lg:inline-flex flex items-buttom gap-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
              <FaShieldAlt className="text-white text-lg" />
            </div>
            <h1 className="mb-10 text-3xl font-bold">
              <span className="text-white">Verify</span>
              <span className="text-orange-500">Hire</span>
            </h1>
          </div>
          <br />
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Privacy Policy
          </h1>
          <p className="mt-1 text-blue-100 max-w-3xl">
            Last updated: 23 July 2026
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-8 space-y-8">
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/30 p-5">
            <p className="font-semibold">Disclaimer</p>
            <p className="mt-2 text-sm">
              This is a draft, not legal advice. It is intended as a starting
              point for legal review before use in production.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-3">1. About VerifyHire</h2>
            <p>
              VerifyHire is a job verification platform that helps job seekers
              identify genuine employers, read reviews from previous applicants,
              and report suspicious job postings. VerifyHire is currently a
              demo/portfolio project. Company and job listings are sample data.
              User accounts, authentication, and submitted content are processed
              through Firebase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. What We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email/password or Google profile information.</li>
              <li>User role (job seeker, employer or admin).</li>
              <li>Reviews, reports and employer registration details.</li>
              <li>Session information required to keep users signed in.</li>
              <li>No payment information is currently collected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and secure your account.</li>
              <li>Display reviews and reports.</li>
              <li>Allow administrators to moderate the platform.</li>
              <li>Enforce platform rules.</li>
              <li>We do not sell your data or use it for advertising.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Third-Party Services</h2>

            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="border p-3 text-left">Service</th>
                    <th className="border p-3 text-left">Provider</th>
                    <th className="border p-3 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Firebase Authentication</td>
                    <td className="border p-3">Google</td>
                    <td className="border p-3">Authentication</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Cloud Firestore</td>
                    <td className="border p-3">Google</td>
                    <td className="border p-3">Database</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Google Sign-In</td>
                    <td className="border p-3">Google</td>
                    <td className="border p-3">OAuth Login</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Hosting</td>
                    <td className="border p-3">To be confirmed</td>
                    <td className="border p-3">Application Hosting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              5. Reporter & Reviewer Identity
            </h2>
            <p>
              Platform administrators may access information required for
              moderation. Reporter identities should not be disclosed to
              employers. Ensure this matches your backend implementation before
              publishing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Your Rights</h2>
            <ul className="list-disc pl-6">
              <li>Access your data.</li>
              <li>Correct inaccurate information.</li>
              <li>Delete your account.</li>
              <li>Disconnect Google Sign-In.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">7. Children's Privacy</h2>
            <p>VerifyHire is not intended for users under 18 years of age.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">8. Changes</h2>
            <p>
              Material changes will be reflected by updating the Last Updated
              date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">9. Contact</h2>
            <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-4">
              Questions about this policy can be sent to:{' '}
              <strong>support@verifyhire.com</strong>.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
