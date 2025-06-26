import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { FileText } from "lucide-react"

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <PageHeader
            title="Terms and Conditions"
            subtitle="B9Tech Consult - Operator of BringBackBarter (B3) Platform"
            description="Last Updated: June 21, 2025"
            badgeText="Legal Documents"
            badgeIcon={<FileText className="h-4 w-4 text-emerald-600" />}
          />
        </div>

        <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardContent className="p-8 space-y-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                These Terms and Conditions of Use ("Terms") constitute a binding legal agreement between you (whether as
                an individual or as a duly authorized representative of a legal entity) and B9Tech Consult ("B9Tech",
                "we", "us", or "our"), the sole proprietor and operator of the digital barter and exchange platform
                known as BringBackBarter ("B3").
              </p>

              <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Catchphrases</h3>
                <p className="text-emerald-700 dark:text-emerald-300 font-medium">
                  #BarterNaija | #BarterisBackandBetter
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                I. Overview of the Service
              </h2>
              <p>
                B3 is a platform designed to facilitate barter exchanges between users, enabling them to exchange goods
                and services without monetary transactions. The Service uses AI and machine learning to recommend
                matches, support valuation, and enhance fairness in transactions.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                II. Eligibility and Account
              </h2>
              <ul className="space-y-2">
                <li>a) You must be at least 18 years old or have legal guardian consent if under 18.</li>
                <li>
                  b) You must provide accurate information during registration and keep your account credentials secure.
                </li>
                <li>c) You are responsible for all activity on your account.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                III. Platform Role and Limited Liability
              </h2>
              <ul className="space-y-2">
                <li>
                  a) B3 is a neutral connector between users. We do not own, inspect, or guarantee any item or service
                  listed on the platform.
                </li>
                <li>b) We do not mediate disputes. Transactions are solely between users.</li>
                <li>c) We provide AI-driven recommendations as suggestions only.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">IV. User Responsibilities</h2>
              <p>By using B3, you agree:</p>
              <ul className="space-y-2">
                <li>a) To list only goods/services you have the right to offer.</li>
                <li>b) To communicate truthfully with other users.</li>
                <li>c) To not upload or distribute unlawful, offensive, or prohibited content.</li>
                <li>d) That all barter agreements are voluntary, with mutual consent.</li>
                <li>e) To refrain from misrepresenting item condition, location, or value.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                V. Verification and Fairness
              </h2>
              <ul className="space-y-2">
                <li>a) We may require minimal KYC, such as email, phone, or government ID.</li>
                <li>b) Our platform may use location data to match users within geographic range.</li>
                <li>
                  c) We collect approximate geolocation (when opted in) to match you with nearby users and suggest safe
                  meet-up points. Your precise location is never shared directly with others.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                VI. AI and Automated Recommendations
              </h2>
              <ul className="space-y-2">
                <li>a) We use AI/ML to enhance matchmaking, valuation, and personalization.</li>
                <li>b) We do not guarantee accuracy or suitability of any automated suggestion.</li>
                <li>c) Users make final decisions and are fully responsible for accepting matches.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                VII. Geo-Location and Real-Time Transactions
              </h2>
              <ul className="space-y-2">
                <li>a) Users may opt in to share location for better matching.</li>
                <li>b) Location-based exchanges ("Meetups") are suggested but not enforced.</li>
                <li>c) The platform does not track users beyond the stated scope.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                VIII. Content Ownership and Use
              </h2>
              <ul className="space-y-2">
                <li>a) You retain ownership of content you upload (images, descriptions, etc.).</li>
                <li>
                  b) You grant B9Tech a limited license to use, display, and distribute your content to facilitate your
                  use of the platform.
                </li>
                <li>c) We reserve the right to remove content violating our standards.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">IX. Feedback and Ratings</h2>
              <ul className="space-y-2">
                <li>a) Users may leave reviews after transactions.</li>
                <li>b) Reviews must be truthful and not defamatory.</li>
                <li>c) B9Tech reserves the right to moderate or remove abusive content.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                X. Termination and Suspension
              </h2>
              <ul className="space-y-2">
                <li>a) We may suspend or terminate accounts that violate these Terms.</li>
                <li>b) You may deactivate your account at any time via your user settings.</li>
                <li>c) Upon termination, your rights to access the Service cease immediately.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                XI. Use of Third-Party Services
              </h2>
              <ul className="space-y-2">
                <li>a) We use third-party services (Microsoft Azure, Vercel, Google Maps).</li>
                <li>b) We are not liable for interruptions or losses caused by third-party tools.</li>
                <li>c) You agree to their respective terms by using our platform.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">XII. Disclaimers</h2>
              <ul className="space-y-2">
                <li>a) B9Tech provides the platform "as-is" without warranties of any kind.</li>
                <li>b) We do not guarantee continuous availability, error-free operation, or perfect security.</li>
                <li>c) We disclaim all liability for user interactions, content, or transactions.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                XIII. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, B9Tech will not be liable for any direct, indirect, incidental,
                or consequential damages arising from your use of the Service.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">XIV. Indemnity</h2>
              <p>
                You agree to defend, indemnify, and hold harmless B9Tech, its affiliates, and team from any claims or
                damages arising from:
              </p>
              <ul className="space-y-2">
                <li>a) Your use of the platform</li>
                <li>b) Violation of these Terms</li>
                <li>c) Content you submit or transact with</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">XV. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the Federal Republic of Nigeria. Disputes shall be resolved
                by negotiation or binding arbitration under applicable Nigerian law.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">XVI. Modifications</h2>
              <p>
                We reserve the right to modify these Terms at any time. Updated Terms will be posted on the platform and
                reflected by the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">XVII. Contact</h2>
              <p>
                For questions, support, or complaints, contact us at:{" "}
                <a href="mailto:support@b9techafrica.com" className="text-emerald-600 hover:text-emerald-700">
                  support@b9techafrica.com
                </a>
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mt-8">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">XVIII. Agreement</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  By using B3 (BarterNaija) under B9Tech Consult, you agree to these Terms of Service.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
