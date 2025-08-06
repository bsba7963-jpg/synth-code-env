import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Share2, Sparkles, FileCode, Terminal } from "lucide-react";

interface CodeFile {
  id: string;
  name: string;
  language: string;
  content: string;
}

const defaultFiles: CodeFile[] = [
  {
    id: "1",
    name: "index.html",
    language: "html",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            color: white;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #ff6b35, #f7931e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .btn {
            background: linear-gradient(45deg, #ff6b35, #f7931e);
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s;
        }
        .btn:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Replit Clone</h1>
        <p>Start building amazing apps with AI-powered development!</p>
        <button class="btn" onclick="alert('Hello from your app!')">Click me!</button>
    </div>
</body>
</html>`
  },
  {
    id: "2",
    name: "main.js",
    language: "javascript",
    content: `// AI-Generated App Logic
console.log("🚀 App initialized!");

class AppManager {
  constructor() {
    this.initialized = false;
    this.features = [];
  }

  init() {
    console.log("Initializing app...");
    this.setupEventListeners();
    this.initialized = true;
  }

  setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      console.log("DOM loaded, app ready!");
      this.addFeature("DOM Ready");
    });
  }

  addFeature(name) {
    this.features.push({
      name,
      timestamp: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9)
    });
    console.log(\`✨ Feature added: \${name}\`);
  }

  getStats() {
    return {
      initialized: this.initialized,
      featureCount: this.features.length,
      lastUpdate: new Date().toISOString()
    };
  }
}

// Initialize the app
const app = new AppManager();
app.init();

// Export for use in other modules
window.AppManager = app;`
  },
  {
    id: "3",
    name: "style.css",
    language: "css",
    content: `/* AI-Generated Styles */
:root {
  --primary-color: #ff6b35;
  --secondary-color: #f7931e;
  --dark-bg: #1a1b26;
  --light-text: #a9b1d6;
  --accent: #7aa2f7;
  --success: #9ece6a;
  --warning: #e0af68;
  --error: #f7768e;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--dark-bg);
  color: var(--light-text);
  line-height: 1.6;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: rgba(26, 27, 38, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 107, 53, 0.2);
}

.main-content {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  padding: 1rem;
}

.sidebar {
  background: rgba(122, 162, 247, 0.1);
  border-radius: 12px;
  padding: 1rem;
  backdrop-filter: blur(5px);
}

.editor-area {
  background: rgba(26, 27, 38, 0.8);
  border-radius: 12px;
  padding: 1rem;
  font-family: 'JetBrains Mono', monospace;
  border: 1px solid rgba(255, 107, 53, 0.3);
}

.preview-panel {
  background: rgba(158, 206, 106, 0.1);
  border-radius: 12px;
  padding: 1rem;
  backdrop-filter: blur(5px);
}

.ai-assistant {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
  transition: transform 0.3s ease;
}

.ai-assistant:hover {
  transform: scale(1.1);
}`
  }
];

export const CodeEditor = () => {
  const [files, setFiles] = useState<CodeFile[]>(defaultFiles);
  const [activeFileId, setActiveFileId] = useState(defaultFiles[0].id);
  const [isRunning, setIsRunning] = useState(false);

  const activeFile = files.find(f => f.id === activeFileId) || files[0];

  const handleRunCode = () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false);
    }, 2000);
  };

  const updateFileContent = (content: string) => {
    setFiles(prev => prev.map(file => 
      file.id === activeFileId 
        ? { ...file, content }
        : file
    ));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-2rem)]">
      {/* File Explorer */}
      <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border-border/50">
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-primary" />
            <h3 className="font-semibold">Project Files</h3>
          </div>
        </div>
        <div className="p-4 space-y-2">
          {files.map((file) => (
            <div
              key={file.id}
              onClick={() => setActiveFileId(file.id)}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                activeFileId === file.id
                  ? 'bg-primary/20 border-primary/50 border'
                  : 'bg-secondary/10 hover:bg-secondary/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{file.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {file.language}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-border/50">
          <Button variant="outline" className="w-full">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Generate File
          </Button>
        </div>
      </Card>

      {/* Code Editor */}
      <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border-border/50">
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <h3 className="font-semibold">{activeFile.name}</h3>
            </div>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={handleRunCode}
                disabled={isRunning}
                className="bg-primary hover:bg-primary/90"
              >
                <Play className="w-4 h-4 mr-1" />
                {isRunning ? 'Running...' : 'Run'}
              </Button>
              <Button size="sm" variant="outline">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 h-[calc(100%-4rem)]">
          <textarea
            value={activeFile.content}
            onChange={(e) => updateFileContent(e.target.value)}
            className="w-full h-full bg-input border border-border/50 rounded-lg p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Start coding..."
          />
        </div>
      </Card>

      {/* Preview & Output */}
      <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border-border/50">
        <Tabs defaultValue="preview" className="h-full">
          <div className="p-4 border-b border-border/50">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="console">Console</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="preview" className="p-4 h-[calc(100%-5rem)]">
            <div className="w-full h-full bg-background rounded-lg border border-border/50 overflow-hidden">
              <iframe
                srcDoc={files.find(f => f.name === 'index.html')?.content || ''}
                className="w-full h-full border-0"
                title="App Preview"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="console" className="p-4 h-[calc(100%-5rem)]">
            <div className="bg-input rounded-lg p-4 h-full font-mono text-sm overflow-auto">
              <div className="text-green-400">🚀 App initialized!</div>
              <div className="text-blue-400">DOM loaded, app ready!</div>
              <div className="text-yellow-400">✨ Feature added: DOM Ready</div>
              {isRunning && (
                <div className="text-primary animate-pulse">
                  ⚡ Executing code...
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};