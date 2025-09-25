import React from 'react';
import { Organization, Alert } from '../types';

interface DashboardHeaderProps {
  organizations: Organization[];
  alerts: Alert[];
  lastUpdated: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  organizations, 
  alerts, 
  lastUpdated 
}) => {
  const totalAlerts = alerts.filter(alert => !alert.acknowledged).length;
  const criticalAlerts = alerts.filter(alert => !alert.acknowledged && alert.severity === 'critical').length;
  
  const getOverallStatus = () => {
    const criticalOrgs = organizations.filter(org => org.status === 'critical').length;
    const warningOrgs = organizations.filter(org => org.status === 'warning').length;
    
    if (criticalOrgs > 0) return 'critical';
    if (warningOrgs > 0) return 'warning';
    return 'healthy';
  };

  const overallStatus = getOverallStatus();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Finance Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">
                Last updated: {new Date(lastUpdated).toLocaleString()}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Overall Status */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Overall Status:</span>
              <span className={`status-indicator ${
                overallStatus === 'healthy' ? 'status-good' :
                overallStatus === 'warning' ? 'status-warning' : 'status-critical'
              }`}>
                {overallStatus === 'healthy' ? 'Healthy' :
                 overallStatus === 'warning' ? 'Warning' : 'Critical'}
              </span>
            </div>
            
            {/* Alert Summary */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  {criticalAlerts} Critical
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  {totalAlerts - criticalAlerts} Warning
                </span>
              </div>
            </div>
            
            {/* Organization Status Summary */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Organizations:</span>
              <div className="flex space-x-1">
                {organizations.map((org) => (
                  <div
                    key={org.id}
                    className={`w-3 h-3 rounded-full ${
                      org.status === 'healthy' ? 'bg-green-500' :
                      org.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    title={`${org.name}: ${org.status}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

