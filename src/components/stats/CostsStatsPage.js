import React from 'react';
import CostStatsForm from './CostsStatsForm';

const CostsStatsPage = () => (
  <div className="stat-group">
    <div className="stat-header">Costs</div>
    <div className="stats-info">
      <CostStatsForm/>
    </div>
  </div>
);

export default CostsStatsPage;
