
import { useState } from 'react';
import CompetitorAnalysis from '@/components/CompetitorAnalysis';
import CompetitorInput from '@/components/CompetitorInput';

const Index = () => {
  const [analysisData, setAnalysisData] = useState<{
    competitor: string;
    g2Link: string;
  } | null>(null);

  const handleAnalysisSubmit = (data: { competitor: string; g2Link: string }) => {
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
      competitor={analysisData.competitor}
      g2Link={analysisData.g2Link}
      onReset={handleReset}
    />
  );
};

export default Index;
