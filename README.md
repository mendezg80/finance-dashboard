# Finance Dashboard MVP

A comprehensive finance dashboard displaying key metrics across 4 organizations: Customer Service, Engineering, AI, and Money Movement/Treasury.

## Features

- **Multi-Organization View**: 2x2 grid layout showing all 4 organizations
- **Real-time Metrics**: 4-6 key financial metrics per organization
- **Color-coded Status**: Green (good), Yellow (warning), Red (critical)
- **Threshold Management**: Click to configure warning and critical thresholds
- **Alert System**: Visual indicators and alert panel for threshold breaches
- **Mini Charts**: Trend visualizations using Recharts
- **Responsive Design**: Works on desktop and tablet
- **Local Storage**: Threshold settings persist across sessions

## Organizations & Metrics

### Customer Service
- Cost per Ticket
- Average Resolution Time
- Customer Satisfaction
- Staffing Costs
- Ticket Volume

### Engineering
- Development Costs
- Bug Resolution Rate
- Feature Delivery Rate
- Infrastructure Costs
- Code Quality Score

### AI
- Model Training Costs
- API Usage Costs
- Model Accuracy
- Compute Costs
- Average Inference Time

### Money Movement
- Transaction Volume
- Processing Costs
- Fraud Rate
- Average Settlement Time
- Revenue

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Usage

1. **View Metrics**: Each organization card displays current metrics with trend indicators
2. **Configure Thresholds**: Click "Configure" on any metric to set warning and critical thresholds
3. **Monitor Alerts**: Check the alerts panel for threshold breaches
4. **Acknowledge Alerts**: Click "Acknowledge" to dismiss resolved alerts

## Technical Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Local Storage** for persistence
- **Responsive Design** with mobile-first approach

## Project Structure

```
src/
├── components/
│   ├── DashboardHeader.tsx
│   ├── OrganizationCard.tsx
│   ├── MetricCard.tsx
│   ├── AlertsPanel.tsx
│   └── ThresholdModal.tsx
├── data/
│   └── mockData.ts
├── types/
│   └── index.ts
├── App.tsx
├── index.tsx
└── index.css
```

## Future Enhancements

- Real-time data integration
- Email/SMS notifications
- Advanced charting options
- User authentication
- Role-based access control
- Data export functionality
- Historical trend analysis

