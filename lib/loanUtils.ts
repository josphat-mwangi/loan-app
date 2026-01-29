export interface LoanApplication {
  id: string;
  applicantName: string;
  phoneNumber: string;
  applicationDate: string;
  status: "Pending" | "Approved" | "Rejected";
  loanAmount: number;
  nextSteps: string;
}

export interface StatusDisplay {
  iconType: "approved" | "rejected" | "pending";
  color: string;
  bgColor: string;
  borderColor: string;
}

export const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\s/g, "");
  return /^(07\d{8}|\+?254\d{9})$/.test(cleaned);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getStatusDisplay = (status: string): StatusDisplay => {
  switch (status) {
    case "Approved":
      return {
        iconType: "approved",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-400",
      };
    case "Rejected":
      return {
        iconType: "rejected",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-400",
      };
    default:
      return {
        iconType: "pending",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-400",
      };
  }
};
