import { FaShieldAlt } from 'react-icons/fa';
export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <section className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 text-white">
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
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
            Legal
          </span>
          <h1 className="text-5xl font-bold mt-4">Terms &amp; Conditions</h1>
          <p className="mt-3 text-slate-200">Last updated: 23 July 2026</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-8 space-y-8">
          <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-5 rounded-xl">
            <p className="font-semibold">Draft Notice</p>
            <p className="text-sm mt-2">
              This document is a draft intended for legal review before
              production use.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>
              By creating an account or using VerifyHire, you agree to these
              Terms and the Privacy Policy. If you do not agree, please do not
              use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. What VerifyHire Is</h2>
            <p>
              VerifyHire is a demo/portfolio project. Company and job listings
              are sample data and are not affiliated with real employers.
              Authentication and submitted content are handled through a real
              backend.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Eligibility</h2>
            <p>You must be at least 18 years old to create an account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Accounts & Roles</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browsing is available without an account.</li>
              <li>Applications, reviews and reports require an account.</li>
              <li>Choose Job Seeker or Employer during registration.</li>
              <li>Administrator access is granted separately.</li>
              <li>
                You are responsible for safeguarding your login credentials.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Acceptable Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No false reports.</li>
              <li>No fake reviews.</li>
              <li>No impersonation.</li>
              <li>No harassment.</li>
              <li>No unauthorized access to admin functions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. User Content</h2>
            <p>
              You retain ownership of submitted content while granting
              VerifyHire a non-exclusive license to store and display it within
              the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              7. Verified Employer Badge
            </h2>
            <p>
              A verified badge indicates only that basic verification has been
              completed. It is not a guarantee against fraud or hiring risks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">8. Disclaimers</h2>
            <p>
              VerifyHire is provided "as is" without warranties. We do not
              guarantee employment outcomes or uninterrupted service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, VerifyHire is not liable
              for indirect or consequential damages arising from use of the
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">10. Termination</h2>
            <p>
              Accounts may be suspended or terminated for violations of these
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">11. Changes</h2>
            <p>These Terms may be updated as the platform evolves.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">12. Governing Law</h2>
            <p>[Insert governing jurisdiction]</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">13. Contact</h2>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4">
              Questions about these Terms can be sent to{' '}
              <strong>support@verifyhire.com</strong>.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
