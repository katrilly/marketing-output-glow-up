
import { useState } from 'react';
import CompetitorAnalysis from '@/components/CompetitorAnalysis';
import CompetitorInput from '@/components/CompetitorInput';

const Index = () => {
  const [analysisData, setAnalysisData] = useState<{
    g2Link: string;
  } | null>(null);

  const handleAnalysisSubmit = (data: { g2Link: string }) => {
    setAnalysisData(data);
  };

  const handleReset = () => {
    setAnalysisData(null);
  };

  if (!analysisData) {
    return <CompetitorInput onSubmit={handleAnalysisSubmit} />;
  }

  return (
    <CompetitorAnalysis 
      g2Link={analysisData.g2Link}
      onReset={handleReset}
    />
  );
};

export default Index;
