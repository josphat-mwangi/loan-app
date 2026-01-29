"use client";

import { useState, useCallback } from "react";
import { Search, Loader2, CheckCircle, XCircle, Clock } from "lucide-react";
import {
  type LoanApplication,
  isValidPhone,
  formatCurrency,
  formatDate,
  getStatusDisplay,
} from "@/lib/loanUtils";

const renderIcon = (iconType: string) => {
  switch (iconType) {
    case "approved":
      return <CheckCircle className="w-6 h-6" />;
    case "rejected":
      return <XCircle className="w-6 h-6" />;
    default:
      return <Clock className="w-6 h-6" />;
  }
};

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [application, setApplication] = useState<LoanApplication | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      setApplication(null);

      if (!searchValue.trim()) {
        setError("Please enter your phone number");
        return;
      }

      if (!isValidPhone(searchValue)) {
        setError("Please enter a valid phone number (e.g., 0712345678)");
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(
          `/api/applications/${encodeURIComponent(searchValue)}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(
              "Application not found. Please check your phone number and try again.",
            );
          }
          throw new Error(
            "Failed to fetch application. Please try again later.",
          );
        }

        const data = await response.json();
        setApplication(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    [searchValue],
  );

  const handleNewSearch = useCallback(() => {
    setApplication(null);
    setSearchValue("");
    setError("");
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Loan Status Checker
          </h1>
          <p className="text-gray-600">
            Check your loan application status instantly
          </p>
        </div>

        {/* Search Form - Hidden when results are shown */}
        {!application && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="search"
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="e.g., 0712345678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005748] focus:border-transparent outline-none transition"
                  disabled={loading}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Enter your phone number to check application status
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#005748] hover:bg-[#004436] disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Check Status
                  </>
                )}
              </button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
          </div>
        )}

        {/* Results Display */}
        {application && (
          <div className="bg-white rounded-lg shadow-lg p-6 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Application Details
              </h2>
              <button
                onClick={handleNewSearch}
                className="text-[#005748] hover:text-[#004436] font-medium text-sm flex items-center gap-1"
              >
                <Search className="w-4 h-4" />
                New Search
              </button>
            </div>

            {/* Status Badge */}
            <div
              className={`flex items-center gap-3 p-4 rounded-lg border mb-6 ${getStatusDisplay(application.status).bgColor} ${getStatusDisplay(application.status).borderColor}`}
            >
              <div className={getStatusDisplay(application.status).color}>
                {renderIcon(getStatusDisplay(application.status).iconType)}
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p
                  className={`text-lg font-bold ${getStatusDisplay(application.status).color}`}
                >
                  {application.status}
                </p>
              </div>
            </div>

            {/* Application Info */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b border-gray-300">
                <span className="text-gray-600">Applicant Name</span>
                <span className="font-semibold text-gray-800">
                  {application.applicantName}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-300">
                <span className="text-gray-600">Application ID</span>
                <span className="font-semibold text-gray-800">
                  {application.id}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-300">
                <span className="text-gray-600">Phone Number</span>
                <span className="font-semibold text-gray-800">
                  {application.phoneNumber}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-300">
                <span className="text-gray-600">Application Date</span>
                <span className="font-semibold text-gray-800">
                  {formatDate(application.applicationDate)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-300">
                <span className="text-gray-600">Loan Amount</span>
                <span className="font-semibold text-gray-800">
                  {formatCurrency(application.loanAmount)}
                </span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-teal-50 border border-teal-300 rounded-lg p-4">
              <h3 className="font-semibold text-[#005748] mb-2">Next Steps</h3>
              <p className="text-teal-900 text-sm">{application.nextSteps}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
