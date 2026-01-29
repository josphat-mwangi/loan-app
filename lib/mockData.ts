import { type LoanApplication } from "./loanUtils";

export const mockApplications: LoanApplication[] = [
  {
    id: "APP-001",
    applicantName: "John Kamau",
    phoneNumber: "0712345678",
    applicationDate: "2024-01-15",
    status: "Approved",
    loanAmount: 50000,
    nextSteps:
      "Your loan has been approved! Funds will be disbursed to your M-Pesa account within 24 hours. Please ensure your phone is active to receive the funds.",
  },
  {
    id: "APP-002",
    applicantName: "Mary Wanjiku",
    phoneNumber: "0723456789",
    applicationDate: "2024-01-20",
    status: "Pending",
    loanAmount: 30000,
    nextSteps:
      "Your application is under review. Our team is verifying your documents. You will receive an SMS notification within 2-3 business days.",
  },
  {
    id: "APP-003",
    applicantName: "Peter Ochieng",
    phoneNumber: "0734567890",
    applicationDate: "2024-01-10",
    status: "Rejected",
    loanAmount: 100000,
    nextSteps:
      "Unfortunately, your application was not approved at this time. You can reapply after 30 days. Please contact our support team for more details on 0800-LOAN-HELP.",
  },
  {
    id: "APP-004",
    applicantName: "Grace Akinyi",
    phoneNumber: "0745678901",
    applicationDate: "2024-01-25",
    status: "Pending",
    loanAmount: 75000,
    nextSteps:
      "We need additional documentation from you. Please upload your latest payslip through our customer portal or visit our nearest branch.",
  },
  {
    id: "APP-005",
    applicantName: "David Mutua",
    phoneNumber: "0756789012",
    applicationDate: "2024-01-18",
    status: "Approved",
    loanAmount: 25000,
    nextSteps:
      "Congratulations! Your loan is approved. Sign the loan agreement sent to your email, and funds will be disbursed immediately.",
  },
];
