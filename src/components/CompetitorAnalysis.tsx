
import React from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ChevronRight, FileBarChart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompetitorAnalysisProps {
  g2Link: string;
  onReset: () => void;
}

const CompetitorAnalysis = ({ g2Link, onReset }: CompetitorAnalysisProps) => {
  const summaryMetrics = {
    rating: "3.2/5",
    ratingTrend: "-0.3 vs previous quarter",
    negativeReviews: "68%",
    reviewCount: "96 out of 147 reviews",
    topPainPoint: "Difficult UI",
    painPointMentions: "Mentioned in 27 reviews",
    competitiveGap: "UI/UX Design",
    opportunityNote: "Your opportunity"
  };

  const weaknesses = [
    { id: 1, title: "High Pricing Structure", description: "Cost concerns for small businesses and scaling" },
    { id: 2, title: "Limited Free Plan", description: "Restricted functionality in trial version" },
    { id: 3, title: "Complex Setup", description: "Difficulty with advanced workflows" },
    { id: 4, title: "UI/UX Issues", description: "Outdated interface and navigation problems" },
  ];

  const opportunities = [
    { id: 1, title: "Transparent Pricing", description: "Offer scalable, user-friendly pricing model" },
    { id: 2, title: "Modern UI/UX", description: "Intuitive interface with visual builders" },
    { id: 3, title: "Superior Support", description: "Multi-language, proactive customer service" },
    { id: 4, title: "No-Code Solutions", description: "Advanced features without technical expertise" },
  ];

  const marketingAngles = [
    { id: 1, title: "Predictable Pricing", description: "No surprise charges - automate more, pay less" },
    { id: 2, title: "User-Friendly", description: "Visual workflow builder for all skill levels" },
    { id: 3, title: "24/7 Support", description: "Never feel stuck with round-the-clock assistance" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#1A1F2C] mb-2">Competitor Insights</h1>
            <p className="text-gray-600 flex items-center gap-2">
              Analyzed from 
              <a 
                href={g2Link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9b87f5] hover:text-[#7E69AB] underline flex items-center gap-1"
              >
                G2 Reviews <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </div>
          <Button 
            onClick={onReset}
            variant="outline"
            className="text-[#9b87f5] hover:text-[#7E69AB] border-[#9b87f5] hover:border-[#7E69AB]"
          >
            Analyze Another Competitor
          </Button>
        </header>

        <Tabs defaultValue="summary" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="weaknesses">Weaknesses</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-6 bg-white border-l-4 border-l-red-500">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">G2 Rating</h3>
                <p className="text-3xl font-bold mb-1">{summaryMetrics.rating}</p>
                <p className="text-red-500 text-sm">{summaryMetrics.ratingTrend}</p>
              </Card>

              <Card className="p-6 bg-white border-l-4 border-l-yellow-500">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Negative Reviews</h3>
                <p className="text-3xl font-bold mb-1">{summaryMetrics.negativeReviews}</p>
                <p className="text-gray-500 text-sm">{summaryMetrics.reviewCount}</p>
              </Card>

              <Card className="p-6 bg-white border-l-4 border-l-green-500">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Top Pain Point</h3>
                <p className="text-3xl font-bold mb-1">{summaryMetrics.topPainPoint}</p>
                <p className="text-gray-500 text-sm">{summaryMetrics.painPointMentions}</p>
              </Card>

              <Card className="p-6 bg-white border-l-4 border-l-blue-500">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Competitive Gap</h3>
                <p className="text-3xl font-bold mb-1">{summaryMetrics.competitiveGap}</p>
                <p className="text-gray-500 text-sm">{summaryMetrics.opportunityNote}</p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="weaknesses" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {weaknesses.map((item) => (
                <Card key={item.id} className="p-6 bg-white hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {opportunities.map((item) => (
                <Card key={item.id} className="p-6 bg-white hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {marketingAngles.map((item) => (
                <Card key={item.id} className="p-6 bg-white hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompetitorAnalysis;
