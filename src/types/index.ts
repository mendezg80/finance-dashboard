export interface Metric {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendPercentage: number;
  threshold: {
    warning: number;
    critical: number;
  };
  status: 'good' | 'warning' | 'critical';
  chartData: Array<{
    period: string;
    value: number;
  }>;
}

export interface Organization {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  metrics: Metric[];
  lastUpdated: string;
}

export interface Alert {
  id: string;
  organizationId: string;
  metricId: string;
  message: string;
  severity: 'warning' | 'critical';
  timestamp: string;
  acknowledged: boolean;
}

export interface ThresholdConfig {
  organizationId: string;
  metricId: string;
  warning: number;
  critical: number;
}

export type AlertStatus = 'good' | 'warning' | 'critical';

