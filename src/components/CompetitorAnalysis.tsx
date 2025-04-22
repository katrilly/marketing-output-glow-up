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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-orange-100">
                <FileBarChart className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-sm font-medium text-gray-500">Overview</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">4</h3>
            <p className="text-gray-600">Key Weaknesses Identified</p>
          </Card>

          <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-purple-100">
                <ArrowUp className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-500">Growth</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">4</h3>
            <p className="text-gray-600">Market Opportunities</p>
          </Card>

          <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-500">Strategy</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">3</h3>
            <p className="text-gray-600">Marketing Angles</p>
          </Card>
        </div>

        <Tabs defaultValue="weaknesses" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="weaknesses">Weaknesses</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>

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
