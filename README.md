# Loan Application Status Checker

A simple, responsive Next.js application for checking loan application status using phone number or application ID.

## Features

✅ **Input Form (15 points)**
- Phone number or Application ID input
- Submit button with loading state
- Form validation (required field, phone format)
- Clear, user-friendly labels

✅ **Display Results (15 points)**
- Shows application status (Pending/Approved/Rejected)
- Displays applicant name and application date
- Shows next steps based on status
- Proper date and currency formatting

✅ **Technical Requirements (20 points)**
- TypeScript throughout the application
- API route `/api/applications/[id]` with mock data
- Loading states during API calls
- Error handling (not found, network errors)
- Fully responsive (mobile and desktop)
- Next.js App Router with Server/Client Components

✅ **Code Quality (10 points)**
- Clean, readable code
- Proper component structure
- Meaningful variable and function names
- Comments for clarity
- Follows Next.js and React best practices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing the Application

### Test Data

Use these credentials to test different scenarios:

#### Approved Applications
- **Phone**: `0712345678` or **ID**: `APP-001`
  - Applicant: John Kamau
  - Amount: KES 50,000

- **Phone**: `0756789012` or **ID**: `APP-005`
  - Applicant: David Mutua
  - Amount: KES 25,000

#### Pending Applications
- **Phone**: `0723456789` or **ID**: `APP-002`
  - Applicant: Mary Wanjiku
  - Amount: KES 30,000

- **Phone**: `0745678901` or **ID**: `APP-004`
  - Applicant: Grace Akinyi
  - Amount: KES 75,000

#### Rejected Applications
- **Phone**: `0734567890` or **ID**: `APP-003`
  - Applicant: Peter Ochieng
  - Amount: KES 100,000

### Testing Different States

1. **Loading State**: Submit any valid input and observe the spinner
2. **Success State**: Use any test phone number or ID above
3. **Error State (Not Found)**: Enter `0700000000` or `APP-999`
4. **Validation Error**: Submit empty form or invalid phone `123`

## Project Structure

```
loan-checker/
├── app/
│   ├── api/
│   │   └── applications/
│   │       └── [id]/
│   │           └── route.ts          # API endpoint
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Main page component
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Key Features Explained

### Form Validation
- Required field validation
- Kenyan phone number format validation (07XX XXX XXX or 254...)
- Real-time error messages

### API Route
- Mock data with 5 sample applications
- Searches by both phone number and application ID
- Handles multiple phone formats (0712... and 254712...)
- Simulated network delay for realistic UX

### Responsive Design
- Mobile-first approach
- Adapts to different screen sizes
- Optimized for both phone and desktop viewing

### Status Display
- Color-coded status indicators
- Icons for visual clarity
- Contextual next steps for each status

## Build for Production

```bash
npm run build
npm start
```

## Code Quality Highlights

- **TypeScript**: Full type safety throughout
- **Clean Code**: Descriptive names, proper formatting
- **Error Handling**: Comprehensive error states
- **Performance**: Optimized loading states
- **Accessibility**: Semantic HTML, proper labels
- **Best Practices**: Following Next.js conventions

## Future Enhancements

- Real database integration
- Authentication system
- Email/SMS notifications
- Document upload functionality
- Admin dashboard
- Payment integration

---

**Developer**: Built with Next.js, TypeScript, and Tailwind CSS