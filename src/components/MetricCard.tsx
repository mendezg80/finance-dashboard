import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Metric } from '../types';

interface MetricCardProps {
  metric: Metric;
  onThresholdClick: (metric: Metric) => void;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, onThresholdClick }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      case 'stable': return '→';
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === '$') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }
    if (unit === '%') {
      return `${value.toFixed(1)}%`;
    }
    if (unit === 'M') {
      return `${value.toFixed(1)}M`;
    }
    return `${value.toFixed(1)}${unit}`;
  };

  return (
    <div className="metric-card">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1">{metric.name}</h3>
          <div className="flex items-baseline space-x-2">
            <span className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
              {formatValue(metric.value, metric.unit)}
            </span>
            <div className={`flex items-center space-x-1 text-sm ${getTrendColor(metric.trend)}`}>
              <span className="font-medium">{getTrendIcon(metric.trend)}</span>
              <span>{Math.abs(metric.trendPercentage).toFixed(1)}%</span>
            </div>
          </div>
        </div>
        <div className={`status-indicator ${
          metric.status === 'good' ? 'status-good' :
          metric.status === 'warning' ? 'status-warning' : 'status-critical'
        }`}>
          {metric.status}
        </div>
      </div>
      
      {/* Mini Chart */}
      <div className="h-16 mb-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={metric.chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={metric.status === 'good' ? '#10B981' : metric.status === 'warning' ? '#F59E0B' : '#EF4444'}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Thresholds */}
      <div className="flex justify-between items-center text-xs text-gray-500">
        <div className="flex space-x-4">
          <span>Warning: {formatValue(metric.threshold.warning, metric.unit)}</span>
          <span>Critical: {formatValue(metric.threshold.critical, metric.unit)}</span>
        </div>
        <button
          onClick={() => onThresholdClick(metric)}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Configure
        </button>
      </div>
    </div>
  );
};

export default MetricCard;

