
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface CompetitorInputProps {
  onSubmit: (data: { 
    g2Link: string 
  }) => void;
}

const CompetitorInput = ({ onSubmit }: CompetitorInputProps) => {
  const [g2Link, setG2Link] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ g2Link });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A1F2C] mb-2">Competitor Analysis Tool</h1>
          <p className="text-gray-600">Enter G2 Reviews URL to generate insights</p>
        </header>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="g2Link">G2 Reviews URL</Label>
              <Input
                id="g2Link"
                placeholder="Paste G2 reviews URL"
                value={g2Link}
                onChange={(e) => setG2Link(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
              Analyze Competitor
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CompetitorInput;
