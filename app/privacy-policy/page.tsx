import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Lock } from "lucide-react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <PageHeader
            title="Privacy Policy"
            subtitle="B9TECH Consult / BringBackBarter (B3 Initiative)"
            description="Effective Date: June 21, 2025"
            badgeText="Privacy & Data Protection"
            badgeIcon={<Shield className="h-4 w-4 text-blue-600" />}
            gradientColors="from-slate-900 to-blue-600 dark:from-white dark:to-blue-400"
          />
        </div>

        <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardContent className="p-8 space-y-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                B9TECH Consult ("we," "our," or "us") respects your privacy and is committed to protecting your personal
                data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit or use the BringBackBarter (B3) platform, including our website [b9techafrica.com] and
                associated services (the "Service"). This policy complies with the Nigeria Data Protection Regulation
                (NDPR) and other applicable laws.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">I. Information We Collect</h2>
              <p>We may collect the following categories of personal information:</p>
              <ul className="space-y-2">
                <li>
                  a) <strong>Account Information:</strong> Full name, email address, phone number, and any other details
                  you provide during registration.
                </li>
                <li>
                  b) <strong>Identity Verification Data:</strong> Government-issued ID, facial recognition (optional),
                  or other KYC data if required.
                </li>
                <li>
                  c) <strong>Location Data:</strong> Real-time or approximate location to enable location-based
                  matching.
                </li>
                <li>
                  d) <strong>User-Generated Content:</strong> Images, descriptions, messages, and reviews you post or
                  submit.
                </li>
                <li>
                  e) <strong>Device & Usage Data:</strong> IP address, browser type, device information, log files, and
                  user interaction data.
                </li>
                <li>
                  f) <strong>Cookies and Analytics:</strong> Information from cookies and similar technologies used to
                  enhance user experience.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                II. How We Use Your Information
              </h2>
              <p>We use your information for the following purposes:</p>
              <ul className="space-y-2">
                <li>a) To register and manage your account.</li>
                <li>b) To verify user identity and protect the platform from fraud.</li>
                <li>c) To provide AI/ML-based recommendations and valuations.</li>
                <li>d) To facilitate and personalize barter matches.</li>
                <li>e) To communicate updates, service notices, and promotional content.</li>
                <li>f) To improve the platform, perform analytics, and develop new features.</li>
                <li>g) To comply with legal obligations and law enforcement requests.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                III. Legal Basis for Processing (NDPR Compliance)
              </h2>
              <p>Under NDPR, we process your data based on:</p>
              <ul className="space-y-2">
                <li>
                  a) <strong>Consent:</strong> You have given clear permission to process your personal data for a
                  specific purpose.
                </li>
                <li>
                  b) <strong>Contract:</strong> Processing is necessary for fulfilling our contract with you.
                </li>
                <li>
                  c) <strong>Legal Obligation:</strong> Required to comply with applicable Nigerian laws.
                </li>
                <li>
                  d) <strong>Legitimate Interest:</strong> For improving services, fraud prevention, and security.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                IV. Sharing of Information
              </h2>
              <p>We do not sell your personal data. We may share your data with:</p>
              <ul className="space-y-2">
                <li>a) Third-party service providers (e.g., Azure, Google Maps) to operate platform features.</li>
                <li>b) Law enforcement or regulators if required by applicable law.</li>
                <li>c) Partners and Affiliates involved in delivering B3 services, under strict confidentiality.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                V. Data Security and Retention
              </h2>
              <ul className="space-y-2">
                <li>a) We use encryption, access controls, and secure infrastructure to protect your data.</li>
                <li>
                  b) We retain your data as long as needed for service provision, legal compliance, or dispute
                  resolution.
                </li>
                <li>
                  c) Inactive accounts and associated data may be deleted after a period of non-use, subject to our
                  retention policy.
                </li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  VI. Your Rights Under NDPR
                </h3>
                <p className="text-blue-700 dark:text-blue-300 mb-3">You have the right to:</p>
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                  <li>a) Request access to your personal data.</li>
                  <li>b) Correct or update inaccurate data.</li>
                  <li>c) Withdraw consent or object to processing.</li>
                  <li>d) Request deletion of your data, subject to legal obligations.</li>
                  <li>e) File complaints with the Nigeria Data Protection Bureau (NDPB).</li>
                </ul>
                <p className="text-blue-700 dark:text-blue-300 mt-3">
                  To exercise these rights, contact us via{" "}
                  <a href="mailto:support@b9techafrica.com" className="underline">
                    support@b9techafrica.com
                  </a>
                  .
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">VII. Children's Privacy</h2>
              <p>
                Our platform is not intended for individuals under the age of 13. We do not knowingly collect data from
                minors without parental consent. If we become aware of such collection, we will delete the information
                promptly.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                VIII. International Data Transfers
              </h2>
              <p>
                While our servers and primary operations are based in Nigeria, we may use third-party services that
                process data internationally. All transfers are done under data protection agreements consistent with
                NDPR and GDPR standards.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                IX. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies to improve user experience. You can control cookies via your browser settings. Some
                features may not function properly without cookies enabled.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">X. Updates to this Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify users of significant changes through our
                platform or via email. Continued use after changes constitutes acceptance.
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mt-8">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  XI. Contact Us
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  For questions, concerns, or to exercise your data rights, contact:
                </p>
                <div className="space-y-2 text-slate-700 dark:text-slate-300">
                  <p>
                    <strong>B9TECH Consult</strong>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:support@b9techafrica.com" className="text-blue-600 hover:text-blue-700">
                      support@b9techafrica.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a href="https://www.b9techafrica.com" className="text-blue-600 hover:text-blue-700">
                      www.b9techafrica.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800 mt-8">
                <p className="text-emerald-700 dark:text-emerald-300 font-medium">
                  By using the B3 platform, you acknowledge and agree to this Privacy Policy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
