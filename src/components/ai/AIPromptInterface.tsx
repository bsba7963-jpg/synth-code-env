import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Send, Lightbulb, Code2, Zap, Wand2 } from "lucide-react";

const suggestions = [
  "Make me a todo app with dark theme",
  "Create a landing page for a SaaS product", 
  "Build a dashboard with charts",
  "Design a portfolio website",
  "Make a chat application",
  "Create an e-commerce product page"
];

export const AIPromptInterface = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setPrompt("");
    }, 3000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
  };

  return (
    <div className="space-y-6">
      {/* Main Prompt Interface */}
      <Card className="bg-gradient-card backdrop-blur-md border-border/50 shadow-card">
        <div className="p-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="p-3 bg-primary/20 rounded-full">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Turn your ideas into apps
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            What will you create? The possibilities are endless.
          </p>

          <div className="flex gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Make me a website for potential clients..."
                className="h-14 text-lg pl-6 pr-16 bg-input/80 border-border/50 focus:border-primary/50"
                onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="absolute right-2 top-2 h-10 px-4 bg-primary hover:bg-primary/90"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Generating...
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Generate
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="sm">
              <Lightbulb className="w-4 h-4 mr-2" />
              Get suggestions
            </Button>
            <Button variant="outline" size="sm">
              <Code2 className="w-4 h-4 mr-2" />
              Start from template
            </Button>
          </div>
        </div>
      </Card>

      {/* Quick Suggestions */}
      <Card className="bg-gradient-card backdrop-blur-md border-border/50">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Wand2 className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Quick Start Ideas</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 text-left justify-start hover:border-primary/50 hover:bg-primary/10"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div>
                  <div className="font-medium mb-1">{suggestion}</div>
                  <Badge variant="secondary" className="text-xs">
                    <Zap className="w-3 h-3 mr-1" />
                    AI Ready
                  </Badge>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-6 text-center">
          <div className="p-3 bg-primary/20 rounded-full w-fit mx-auto mb-4">
            <Code2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">AI Code Generation</h3>
          <p className="text-muted-foreground">Generate complete applications from natural language descriptions</p>
        </Card>

        <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-6 text-center">
          <div className="p-3 bg-accent/20 rounded-full w-fit mx-auto mb-4">
            <Zap className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Instant Deployment</h3>
          <p className="text-muted-foreground">Deploy your apps instantly with one click to the cloud</p>
        </Card>

        <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-6 text-center">
          <div className="p-3 bg-green-500/20 rounded-full w-fit mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Real-time Collaboration</h3>
          <p className="text-muted-foreground">Work together with your team in real-time on any project</p>
        </Card>
      </div>
    </div>
  );
};