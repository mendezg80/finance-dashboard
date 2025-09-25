import React, { useState, useEffect } from 'react';
import { Metric, ThresholdConfig } from '../types';

interface ThresholdModalProps {
  isOpen: boolean;
  onClose: () => void;
  metric: Metric | null;
  onSave: (config: ThresholdConfig) => void;
}

const ThresholdModal: React.FC<ThresholdModalProps> = ({
  isOpen,
  onClose,
  metric,
  onSave
}) => {
  const [warning, setWarning] = useState<number>(0);
  const [critical, setCritical] = useState<number>(0);

  useEffect(() => {
    if (metric) {
      setWarning(metric.threshold.warning);
      setCritical(metric.threshold.critical);
    }
  }, [metric]);

  const handleSave = () => {
    if (metric && warning >= 0 && critical >= 0 && warning < critical) {
      onSave({
        organizationId: 'temp', // This would come from the parent component
        metricId: metric.id,
        warning,
        critical
      });
      onClose();
    }
  };

  if (!isOpen || !metric) return null;

  const formatValue = (value: number, unit: string) => {
    if (unit === '$') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }
    return `${value.toFixed(1)}${unit}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Configure Thresholds
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {metric.name} - Current: {formatValue(metric.value, metric.unit)}
          </p>
        </div>
        
        <div className="px-6 py-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Warning Threshold ({metric.unit})
            </label>
            <input
              type="number"
              value={warning}
              onChange={(e) => setWarning(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              step="0.1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Critical Threshold ({metric.unit})
            </label>
            <input
              type="number"
              value={critical}
              onChange={(e) => setCritical(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              step="0.1"
            />
          </div>
          
          {warning >= critical && (
            <div className="text-red-600 text-sm">
              Warning threshold must be less than critical threshold
            </div>
          )}
        </div>
        
        <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={warning >= critical}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThresholdModal;

