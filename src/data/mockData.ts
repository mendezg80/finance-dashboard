import { Organization, Alert } from '../types';

export const mockOrganizations: Organization[] = [
  {
    id: 'customer-service',
    name: 'Customer Service',
    status: 'warning',
    lastUpdated: '2024-01-15T10:30:00Z',
    metrics: [
      {
        id: 'cost-per-ticket',
        name: 'Cost per Ticket',
        value: 12.50,
        unit: '$',
        trend: 'up',
        trendPercentage: 8.5,
        threshold: { warning: 10, critical: 15 },
        status: 'warning',
        chartData: [
          { period: 'Week 1', value: 10.20 },
          { period: 'Week 2', value: 11.80 },
          { period: 'Week 3', value: 12.10 },
          { period: 'Week 4', value: 12.50 }
        ]
      },
      {
        id: 'resolution-time',
        name: 'Avg Resolution Time',
        value: 4.2,
        unit: 'hrs',
        trend: 'down',
        trendPercentage: 12.3,
        threshold: { warning: 6, critical: 8 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 5.8 },
          { period: 'Week 2', value: 5.2 },
          { period: 'Week 3', value: 4.8 },
          { period: 'Week 4', value: 4.2 }
        ]
      },
      {
        id: 'satisfaction',
        name: 'Customer Satisfaction',
        value: 87.5,
        unit: '%',
        trend: 'up',
        trendPercentage: 3.2,
        threshold: { warning: 80, critical: 70 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 82.1 },
          { period: 'Week 2', value: 84.3 },
          { period: 'Week 3', value: 86.7 },
          { period: 'Week 4', value: 87.5 }
        ]
      },
      {
        id: 'staffing-costs',
        name: 'Staffing Costs',
        value: 125000,
        unit: '$',
        trend: 'up',
        trendPercentage: 5.8,
        threshold: { warning: 120000, critical: 150000 },
        status: 'warning',
        chartData: [
          { period: 'Week 1', value: 118000 },
          { period: 'Week 2', value: 120500 },
          { period: 'Week 3', value: 123200 },
          { period: 'Week 4', value: 125000 }
        ]
      },
      {
        id: 'ticket-volume',
        name: 'Ticket Volume',
        value: 2847,
        unit: 'tickets',
        trend: 'up',
        trendPercentage: 15.2,
        threshold: { warning: 2500, critical: 3000 },
        status: 'warning',
        chartData: [
          { period: 'Week 1', value: 2100 },
          { period: 'Week 2', value: 2350 },
          { period: 'Week 3', value: 2600 },
          { period: 'Week 4', value: 2847 }
        ]
      }
    ]
  },
  {
    id: 'engineering',
    name: 'Engineering',
    status: 'healthy',
    lastUpdated: '2024-01-15T10:30:00Z',
    metrics: [
      {
        id: 'dev-costs',
        name: 'Development Costs',
        value: 450000,
        unit: '$',
        trend: 'down',
        trendPercentage: 2.1,
        threshold: { warning: 500000, critical: 600000 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 460000 },
          { period: 'Week 2', value: 455000 },
          { period: 'Week 3', value: 452000 },
          { period: 'Week 4', value: 450000 }
        ]
      },
      {
        id: 'bug-resolution',
        name: 'Bug Resolution Rate',
        value: 94.2,
        unit: '%',
        trend: 'up',
        trendPercentage: 1.8,
        threshold: { warning: 90, critical: 85 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 91.5 },
          { period: 'Week 2', value: 92.8 },
          { period: 'Week 3', value: 93.6 },
          { period: 'Week 4', value: 94.2 }
        ]
      },
      {
        id: 'feature-delivery',
        name: 'Feature Delivery Rate',
        value: 78.5,
        unit: '%',
        trend: 'up',
        trendPercentage: 4.2,
        threshold: { warning: 70, critical: 60 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 72.1 },
          { period: 'Week 2', value: 74.8 },
          { period: 'Week 3', value: 76.9 },
          { period: 'Week 4', value: 78.5 }
        ]
      },
      {
        id: 'infrastructure-costs',
        name: 'Infrastructure Costs',
        value: 185000,
        unit: '$',
        trend: 'stable',
        trendPercentage: 0.5,
        threshold: { warning: 200000, critical: 250000 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 184000 },
          { period: 'Week 2', value: 185500 },
          { period: 'Week 3', value: 184800 },
          { period: 'Week 4', value: 185000 }
        ]
      },
      {
        id: 'code-quality',
        name: 'Code Quality Score',
        value: 8.7,
        unit: '/10',
        trend: 'up',
        trendPercentage: 2.4,
        threshold: { warning: 7, critical: 6 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 8.2 },
          { period: 'Week 2', value: 8.4 },
          { period: 'Week 3', value: 8.6 },
          { period: 'Week 4', value: 8.7 }
        ]
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI',
    status: 'critical',
    lastUpdated: '2024-01-15T10:30:00Z',
    metrics: [
      {
        id: 'training-costs',
        name: 'Model Training Costs',
        value: 125000,
        unit: '$',
        trend: 'up',
        trendPercentage: 25.8,
        threshold: { warning: 100000, critical: 120000 },
        status: 'critical',
        chartData: [
          { period: 'Week 1', value: 85000 },
          { period: 'Week 2', value: 95000 },
          { period: 'Week 3', value: 110000 },
          { period: 'Week 4', value: 125000 }
        ]
      },
      {
        id: 'api-usage',
        name: 'API Usage Costs',
        value: 45000,
        unit: '$',
        trend: 'up',
        trendPercentage: 18.2,
        threshold: { warning: 40000, critical: 50000 },
        status: 'warning',
        chartData: [
          { period: 'Week 1', value: 32000 },
          { period: 'Week 2', value: 36000 },
          { period: 'Week 3', value: 41000 },
          { period: 'Week 4', value: 45000 }
        ]
      },
      {
        id: 'accuracy',
        name: 'Model Accuracy',
        value: 92.3,
        unit: '%',
        trend: 'down',
        trendPercentage: 1.2,
        threshold: { warning: 90, critical: 85 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 93.8 },
          { period: 'Week 2', value: 93.2 },
          { period: 'Week 3', value: 92.8 },
          { period: 'Week 4', value: 92.3 }
        ]
      },
      {
        id: 'compute-costs',
        name: 'Compute Costs',
        value: 78000,
        unit: '$',
        trend: 'up',
        trendPercentage: 12.5,
        threshold: { warning: 70000, critical: 80000 },
        status: 'warning',
        chartData: [
          { period: 'Week 1', value: 65000 },
          { period: 'Week 2', value: 69000 },
          { period: 'Week 3', value: 73000 },
          { period: 'Week 4', value: 78000 }
        ]
      },
      {
        id: 'inference-time',
        name: 'Avg Inference Time',
        value: 1.8,
        unit: 'ms',
        trend: 'down',
        trendPercentage: 5.3,
        threshold: { warning: 2.5, critical: 3.0 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 2.1 },
          { period: 'Week 2', value: 2.0 },
          { period: 'Week 3', value: 1.9 },
          { period: 'Week 4', value: 1.8 }
        ]
      }
    ]
  },
  {
    id: 'money-movement',
    name: 'Money Movement',
    status: 'healthy',
    lastUpdated: '2024-01-15T10:30:00Z',
    metrics: [
      {
        id: 'transaction-volume',
        name: 'Transaction Volume',
        value: 2.4,
        unit: 'M',
        trend: 'up',
        trendPercentage: 8.7,
        threshold: { warning: 2.0, critical: 1.5 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 2.1 },
          { period: 'Week 2', value: 2.2 },
          { period: 'Week 3', value: 2.3 },
          { period: 'Week 4', value: 2.4 }
        ]
      },
      {
        id: 'processing-costs',
        name: 'Processing Costs',
        value: 0.85,
        unit: '%',
        trend: 'down',
        trendPercentage: 2.3,
        threshold: { warning: 1.0, critical: 1.2 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 0.92 },
          { period: 'Week 2', value: 0.89 },
          { period: 'Week 3', value: 0.87 },
          { period: 'Week 4', value: 0.85 }
        ]
      },
      {
        id: 'fraud-rate',
        name: 'Fraud Rate',
        value: 0.12,
        unit: '%',
        trend: 'down',
        trendPercentage: 14.3,
        threshold: { warning: 0.2, critical: 0.3 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 0.18 },
          { period: 'Week 2', value: 0.16 },
          { period: 'Week 3', value: 0.14 },
          { period: 'Week 4', value: 0.12 }
        ]
      },
      {
        id: 'settlement-time',
        name: 'Avg Settlement Time',
        value: 1.2,
        unit: 'days',
        trend: 'down',
        trendPercentage: 7.7,
        threshold: { warning: 2.0, critical: 3.0 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 1.4 },
          { period: 'Week 2', value: 1.3 },
          { period: 'Week 3', value: 1.25 },
          { period: 'Week 4', value: 1.2 }
        ]
      },
      {
        id: 'revenue',
        name: 'Revenue',
        value: 850000,
        unit: '$',
        trend: 'up',
        trendPercentage: 12.4,
        threshold: { warning: 700000, critical: 600000 },
        status: 'good',
        chartData: [
          { period: 'Week 1', value: 720000 },
          { period: 'Week 2', value: 760000 },
          { period: 'Week 3', value: 810000 },
          { period: 'Week 4', value: 850000 }
        ]
      }
    ]
  }
];

export const mockAlerts: Alert[] = [
  {
    id: 'alert-1',
    organizationId: 'customer-service',
    metricId: 'cost-per-ticket',
    message: 'Cost per ticket exceeded warning threshold',
    severity: 'warning',
    timestamp: '2024-01-15T09:15:00Z',
    acknowledged: false
  },
  {
    id: 'alert-2',
    organizationId: 'ai',
    metricId: 'training-costs',
    message: 'Model training costs exceeded critical threshold',
    severity: 'critical',
    timestamp: '2024-01-15T08:45:00Z',
    acknowledged: false
  },
  {
    id: 'alert-3',
    organizationId: 'ai',
    metricId: 'api-usage',
    message: 'API usage costs approaching critical threshold',
    severity: 'warning',
    timestamp: '2024-01-15T07:30:00Z',
    acknowledged: true
  }
];

