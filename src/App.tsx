import React, { useState, useEffect } from 'react';
import { Organization, Alert, Metric, ThresholdConfig } from './types';
import { mockOrganizations, mockAlerts } from './data/mockData';
import DashboardHeader from './components/DashboardHeader';
import OrganizationCard from './components/OrganizationCard';
import AlertsPanel from './components/AlertsPanel';
import ThresholdModal from './components/ThresholdModal';

const App: React.FC = () => {
  const [organizations, setOrganizations] = useState<Organization[]>(mockOrganizations);
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const [selectedMetric, setSelectedMetric] = useState<Metric | null>(null);
  const [isThresholdModalOpen, setIsThresholdModalOpen] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date().toISOString());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date().toISOString());
      // In a real app, this would fetch fresh data
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleThresholdClick = (metric: Metric) => {
    setSelectedMetric(metric);
    setIsThresholdModalOpen(true);
  };

  const handleThresholdSave = (config: ThresholdConfig) => {
    // Update the metric threshold in the organizations data
    setOrganizations(prevOrgs => 
      prevOrgs.map(org => ({
        ...org,
        metrics: org.metrics.map(metric => 
          metric.id === config.metricId 
            ? { 
                ...metric, 
                threshold: { 
                  warning: config.warning, 
                  critical: config.critical 
                },
                status: getMetricStatus(metric.value, config.warning, config.critical)
              }
            : metric
        )
      }))
    );

    // Save to localStorage
    const savedConfigs = JSON.parse(localStorage.getItem('thresholdConfigs') || '[]');
    const updatedConfigs = savedConfigs.filter((c: ThresholdConfig) => 
      !(c.organizationId === config.organizationId && c.metricId === config.metricId)
    );
    updatedConfigs.push(config);
    localStorage.setItem('thresholdConfigs', JSON.stringify(updatedConfigs));

    console.log('Threshold configuration saved:', config);
  };

  const getMetricStatus = (value: number, warning: number, critical: number): 'good' | 'warning' | 'critical' => {
    if (value >= critical) return 'critical';
    if (value >= warning) return 'warning';
    return 'good';
  };

  const handleAcknowledgeAlert = (alertId: string) => {
    setAlerts(prevAlerts => 
      prevAlerts.map(alert => 
        alert.id === alertId 
          ? { ...alert, acknowledged: true }
          : alert
      )
    );
    console.log('Alert acknowledged:', alertId);
  };

  // Load saved threshold configurations on mount
  useEffect(() => {
    const savedConfigs = localStorage.getItem('thresholdConfigs');
    if (savedConfigs) {
      const configs: ThresholdConfig[] = JSON.parse(savedConfigs);
      // Apply saved configurations to organizations
      setOrganizations(prevOrgs => 
        prevOrgs.map(org => ({
          ...org,
          metrics: org.metrics.map(metric => {
            const config = configs.find(c => c.metricId === metric.id);
            if (config) {
              return {
                ...metric,
                threshold: { warning: config.warning, critical: config.critical },
                status: getMetricStatus(metric.value, config.warning, config.critical)
              };
            }
            return metric;
          })
        }))
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader 
        organizations={organizations}
        alerts={alerts}
        lastUpdated={lastUpdated}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alerts Panel */}
        <div className="mb-8">
          <AlertsPanel 
            alerts={alerts}
            onAcknowledge={handleAcknowledgeAlert}
          />
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {organizations.map((organization) => (
            <OrganizationCard
              key={organization.id}
              organization={organization}
              onThresholdClick={handleThresholdClick}
            />
          ))}
        </div>
      </main>

      {/* Threshold Configuration Modal */}
      <ThresholdModal
        isOpen={isThresholdModalOpen}
        onClose={() => setIsThresholdModalOpen(false)}
        metric={selectedMetric}
        onSave={handleThresholdSave}
      />
    </div>
  );
};

export default App;

