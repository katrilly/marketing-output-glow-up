import React from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ChevronRight, FileBarChart, ExternalLink, Check } from "lucide-react";
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

  const keyIssues = [
    { title: "Difficult UI", description: "Users find navigation confusing and workflows unintuitive" },
    { title: "Slow Performance", description: "Reports of long loading times and system lag" },
    { title: "Poor Support", description: "Long response times and unhelpful troubleshooting" }
  ];

  const negativeReviews = [
    { title: "Confusing Interface", link: "https://www.g2.com/review1" },
    { title: "System Too Slow", link: "https://www.g2.com/review2" },
    { title: "Support Issues", link: "https://www.g2.com/review3" }
  ];

  const actionPlan = {
    shortTerm: [
      "Create comparison landing page highlighting your intuitive UI",
      "Launch ad campaign targeting 'easy to use' messaging"
    ],
    midTerm: [
      "Develop case studies showing time saved with your solution",
      "Create webinar highlighting your responsive customer support"
    ],
    longTerm: [
      "Build features that address competitor's gaps in performance",
      "Create migration guides to make switching easier"
    ]
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

          <TabsContent value="summary" className="space-y-8">
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

            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Issues</h3>
              <div className="space-y-4">
                {keyIssues.map((issue, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{issue.title}</h4>
                      <p className="text-gray-600">{issue.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Top Negative Reviews</h3>
              <div className="space-y-2">
                {negativeReviews.map((review, index) => (
                  <a
                    key={index}
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#9b87f5] hover:text-[#7E69AB] hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {review.title}
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Recommended Action Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#9b87f5] font-semibold mb-4">Short-term</h4>
                  <ul className="space-y-3">
                    {actionPlan.shortTerm.map((action, index) => (
                      <li key={index} className="flex gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#9b87f5] font-semibold mb-4">Mid-term</h4>
                  <ul className="space-y-3">
                    {actionPlan.midTerm.map((action, index) => (
                      <li key={index} className="flex gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#9b87f5] font-semibold mb-4">Long-term</h4>
                  <ul className="space-y-3">
                    {actionPlan.longTerm.map((action, index) => (
                      <li key={index} className="flex gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
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
