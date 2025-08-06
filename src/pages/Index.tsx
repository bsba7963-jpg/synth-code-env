import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { AIPromptInterface } from "@/components/ai/AIPromptInterface";
import { CodeEditor } from "@/components/ide/CodeEditor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Sparkles, Users, Zap } from "lucide-react";
import heroImage from "@/assets/replit-hero.jpg";

import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div 
            className="absolute inset-0 rounded-3xl opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="relative bg-gradient-card backdrop-blur-md rounded-3xl p-12 border border-border/50 shadow-card">
            <AIPromptInterface />
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-6 cursor-pointer hover:shadow-glow transition-all duration-300" 
                onClick={() => navigate('/editor')}>
            <div className="flex items-center gap-3 mb-3">
              <Code2 className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Code Editor</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Start coding with our powerful IDE</p>
            <Badge variant="secondary">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Powered
            </Badge>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-6 cursor-pointer hover:shadow-glow transition-all duration-300"
                onClick={() => navigate('/projects')}>
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="font-semibold">Collaborate</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Work with your team in real-time</p>
            <Badge variant="secondary">Live Sync</Badge>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-6 cursor-pointer hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="font-semibold">Deploy</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Ship your apps instantly</p>
            <Badge variant="secondary">One Click</Badge>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-6 cursor-pointer hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">AI Assistant</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Get help from AI while coding</p>
            <Badge variant="secondary">Beta</Badge>
          </Card>
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Loved by developers worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40M+</div>
              <div className="text-muted-foreground">Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1B+</div>
              <div className="text-muted-foreground">Lines of Code</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Index;
