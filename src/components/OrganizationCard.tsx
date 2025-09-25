import React from 'react';
import { Organization, Metric } from '../types';
import MetricCard from './MetricCard';

interface OrganizationCardProps {
  organization: Organization;
  onThresholdClick: (metric: Metric) => void;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ 
  organization, 
  onThresholdClick 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'border-green-200 bg-green-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'critical': return 'border-red-200 bg-red-50';
      default: return 'border-gray-200 bg-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return '✓';
      case 'warning': return '⚠';
      case 'critical': return '⚠';
      default: return '?';
    }
  };

  return (
    <div className={`rounded-lg border-2 ${getStatusColor(organization.status)} p-6`}>
      {/* Organization Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
            organization.status === 'healthy' ? 'bg-green-500' :
            organization.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
          }`}>
            {getStatusIcon(organization.status)}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{organization.name}</h2>
            <p className="text-sm text-gray-500">
              Last updated: {new Date(organization.lastUpdated).toLocaleTimeString()}
            </p>
          </div>
        </div>
        <div className={`status-indicator ${
          organization.status === 'healthy' ? 'status-good' :
          organization.status === 'warning' ? 'status-warning' : 'status-critical'
        }`}>
          {organization.status}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {organization.metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            metric={metric}
            onThresholdClick={onThresholdClick}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationCard;

