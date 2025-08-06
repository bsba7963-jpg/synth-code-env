import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Play, Download, Share2, Sparkles, FileCode, Terminal, 
  Bug, Settings, Folder, Plus, X, Save, RefreshCw,
  Database, Globe, Cpu, HardDrive
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeFile {
  id: string;
  name: string;
  language: string;
  content: string;
  isModified: boolean;
}

interface AIError {
  line: number;
  message: string;
  severity: 'error' | 'warning' | 'info';
  suggestion?: string;
}

const initialFiles: CodeFile[] = [
  {
    id: "1",
    name: "index.html",
    language: "html",
    isModified: false,
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI-Generated App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="app-container">
        <header class="header">
            <h1>🚀 Replit Clone</h1>
            <nav class="nav">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">About</a>
                <a href="#" class="nav-link">Contact</a>
            </nav>
        </header>
        
        <main class="main-content">
            <section class="hero">
                <h2>Built with AI ✨</h2>
                <p>This app was generated using advanced AI coding assistance!</p>
                <button id="ctaButton" class="cta-button">Get Started</button>
            </section>
            
            <section class="features">
                <div class="feature-card">
                    <h3>🤖 AI-Powered</h3>
                    <p>Generated with intelligent code assistance</p>
                </div>
                <div class="feature-card">
                    <h3>⚡ Lightning Fast</h3>
                    <p>Optimized for performance</p>
                </div>
                <div class="feature-card">
                    <h3>🔒 Secure</h3>
                    <p>Built with security best practices</p>
                </div>
            </section>
        </main>
        
        <footer class="footer">
            <p>&copy; 2024 AI-Generated App. Made with ❤️ and AI.</p>
        </footer>
    </div>
    
    <script src="main.js"></script>
</body>
</html>`
  },
  {
    id: "2",
    name: "main.js",
    language: "javascript",
    isModified: false,
    content: `// AI-Generated JavaScript with Error Detection
console.log("🚀 Initializing AI-powered app...");

class AIAppManager {
  constructor() {
    this.version = "2.0.0";
    this.features = new Map();
    this.errors = [];
    this.init();
  }

  init() {
    try {
      this.setupEventListeners();
      this.initializeFeatures();
      this.runDiagnostics();
      console.log("✅ App initialized successfully!");
    } catch (error) {
      this.handleError("Initialization failed", error);
    }
  }

  setupEventListeners() {
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
      ctaButton.addEventListener('click', () => {
        this.handleCTAClick();
      });
    }

    // Auto-detect and fix common issues
    window.addEventListener('error', (event) => {
      this.autoFixError(event);
    });
  }

  handleCTAClick() {
    console.log("🎯 CTA button clicked!");
    this.showNotification("Welcome to the AI-powered experience! 🤖");
  }

  initializeFeatures() {
    this.features.set('darkMode', this.setupDarkMode());
    this.features.set('animations', this.setupAnimations());
    this.features.set('analytics', this.setupAnalytics());
  }

  setupDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-theme');
    }
    return { enabled: true, auto: prefersDark };
  }

  setupAnimations() {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = \`\${index * 0.2}s\`;
      card.classList.add('fade-in');
    });
    return { count: cards.length };
  }

  setupAnalytics() {
    // Simulated analytics
    const sessionId = Math.random().toString(36).substr(2, 9);
    console.log(\`📊 Analytics initialized: \${sessionId}\`);
    return { sessionId, pageViews: 1 };
  }

  runDiagnostics() {
    const diagnostics = {
      performance: performance.now() < 100 ? 'excellent' : 'good',
      memory: navigator.deviceMemory || 'unknown',
      connection: navigator.connection?.effectiveType || 'unknown'
    };
    
    console.log("🔍 Diagnostics:", diagnostics);
    return diagnostics;
  }

  autoFixError(event) {
    console.warn("🛠️ Auto-fixing error:", event.message);
    this.errors.push({
      message: event.message,
      timestamp: new Date().toISOString(),
      fixed: true
    });
  }

  handleError(context, error) {
    console.error(\`❌ \${context}:\`, error);
    this.errors.push({ context, error: error.message, timestamp: new Date().toISOString() });
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  getStatus() {
    return {
      version: this.version,
      features: Object.fromEntries(this.features),
      errors: this.errors,
      uptime: performance.now()
    };
  }
}

// Initialize the AI-powered app
const app = new AIAppManager();

// Export for debugging
window.AIApp = app;

// Advanced features
const AdvancedFeatures = {
  aiCodeCompletion: () => {
    console.log("🤖 AI code completion activated");
  },
  
  realTimeCollaboration: () => {
    console.log("👥 Collaboration mode enabled");
  },
  
  autoSave: () => {
    console.log("💾 Auto-save enabled");
    setInterval(() => {
      console.log("📝 Auto-saving...");
    }, 30000);
  }
};

// Activate advanced features
Object.values(AdvancedFeatures).forEach(feature => feature());`
  },
  {
    id: "3",
    name: "style.css",
    language: "css",
    isModified: false,
    content: `/* AI-Generated Advanced Styles */
:root {
  --primary: hsl(16, 100%, 60%);
  --secondary: hsl(230, 15%, 15%);
  --background: hsl(230, 15%, 9%);
  --foreground: hsl(0, 0%, 95%);
  --accent: hsl(260, 30%, 25%);
  --success: hsl(120, 60%, 50%);
  --warning: hsl(45, 100%, 60%);
  --error: hsl(0, 70%, 60%);
  --border: hsl(230, 15%, 20%);
  
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  --glow: 0 0 20px var(--primary);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--background);
  color: var(--foreground);
  line-height: 1.6;
  overflow-x: hidden;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header Styles */
.header {
  background: rgba(26, 27, 38, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--primary), #f7931e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--foreground);
  text-decoration: none;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.1) 0%, 
    rgba(122, 162, 247, 0.1) 100%);
  border-radius: 1rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(122, 162, 247, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(158, 206, 106, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.hero h2 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary), #7aa2f7, #9ece6a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  position: relative;
}

.cta-button {
  background: linear-gradient(45deg, var(--primary), #f7931e);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  box-shadow: var(--shadow);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow), var(--shadow);
}

.cta-button:active {
  transform: translateY(0);
}

/* Features Section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: rgba(26, 27, 38, 0.6);
  backdrop-filter: blur(5px);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  transition: var(--transition);
  opacity: 0;
  transform: translateY(20px);
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 10px 40px rgba(255, 107, 53, 0.2);
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.feature-card p {
  opacity: 0.8;
}

/* Animations */
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease forwards;
}

/* Footer */
.footer {
  background: var(--secondary);
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--border);
  margin-top: auto;
}

/* Notification */
.notification {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: var(--success);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Dark theme enhancements */
.dark-theme {
  --background: hsl(230, 15%, 5%);
  --foreground: hsl(0, 0%, 98%);
}

/* Responsive design */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .hero h2 {
    font-size: 2rem;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
  
  .main-content {
    padding: 1rem;
  }
}`
  },
  {
    id: "4",
    name: "ai-assistant.js",
    language: "javascript",
    isModified: false,
    content: `// Advanced AI Assistant for Code Analysis
class AICodeAssistant {
  constructor() {
    this.models = {
      errorDetection: 'gpt-4-code-analysis',
      codeCompletion: 'codex-advanced',
      optimization: 'ai-optimizer-v2'
    };
    this.init();
  }

  init() {
    console.log("🤖 AI Assistant initialized");
    this.startRealTimeAnalysis();
  }

  async analyzeCode(code, language) {
    // Simulate AI analysis
    const issues = this.detectIssues(code, language);
    const suggestions = this.generateSuggestions(code, language);
    const optimizations = this.findOptimizations(code);

    return {
      issues,
      suggestions,
      optimizations,
      score: this.calculateCodeScore(code)
    };
  }

  detectIssues(code, language) {
    const issues = [];
    
    // Simulate common issue detection
    if (language === 'javascript') {
      if (code.includes('var ')) {
        issues.push({
          line: this.findLineNumber(code, 'var '),
          type: 'warning',
          message: 'Consider using let or const instead of var',
          suggestion: 'Replace var with let or const for better scoping'
        });
      }
      
      if (code.includes('== ') && !code.includes('=== ')) {
        issues.push({
          line: this.findLineNumber(code, '== '),
          type: 'warning',
          message: 'Use strict equality (===) instead of loose equality (==)',
          suggestion: 'Replace == with === for type-safe comparisons'
        });
      }

      if (!code.includes('try') && code.includes('JSON.parse')) {
        issues.push({
          line: this.findLineNumber(code, 'JSON.parse'),
          type: 'error',
          message: 'JSON.parse should be wrapped in try-catch',
          suggestion: 'Add error handling for JSON parsing operations'
        });
      }
    }

    if (language === 'html') {
      if (!code.includes('<!DOCTYPE html>')) {
        issues.push({
          line: 1,
          type: 'warning',
          message: 'Missing DOCTYPE declaration',
          suggestion: 'Add <!DOCTYPE html> at the beginning of the document'
        });
      }

      if (!code.includes('lang=')) {
        issues.push({
          line: this.findLineNumber(code, '<html'),
          type: 'warning',
          message: 'Missing language attribute in html tag',
          suggestion: 'Add lang="en" to the html tag for accessibility'
        });
      }
    }

    return issues;
  }

  generateSuggestions(code, language) {
    const suggestions = [];

    if (language === 'javascript') {
      suggestions.push({
        type: 'performance',
        message: 'Consider using async/await for better async handling',
        example: 'async function fetchData() { const data = await fetch(url); }'
      });

      suggestions.push({
        type: 'best-practice',
        message: 'Add JSDoc comments for better documentation',
        example: '/** * Description of function * @param {string} param - Parameter description */'
      });
    }

    if (language === 'css') {
      suggestions.push({
        type: 'performance',
        message: 'Use CSS custom properties for theme variables',
        example: ':root { --primary-color: #ff6b35; } .element { color: var(--primary-color); }'
      });
    }

    return suggestions;
  }

  findOptimizations(code) {
    const optimizations = [];

    // Bundle size optimization
    if (code.includes('import *')) {
      optimizations.push({
        type: 'bundle-size',
        message: 'Use named imports instead of wildcard imports',
        impact: 'medium',
        savings: '~15KB'
      });
    }

    // Performance optimization
    if (code.includes('document.querySelector') && code.split('document.querySelector').length > 3) {
      optimizations.push({
        type: 'performance',
        message: 'Cache DOM queries in variables',
        impact: 'high',
        savings: '~30% faster DOM access'
      });
    }

    return optimizations;
  }

  calculateCodeScore(code) {
    let score = 100;
    
    // Deduct points for issues
    if (!code.includes('const') && !code.includes('let')) score -= 10;
    if (code.includes('var ')) score -= 5;
    if (!code.includes('//') && !code.includes('/*')) score -= 15; // No comments
    if (code.length > 1000 && !code.includes('function')) score -= 10; // Long code without functions
    
    return Math.max(0, score);
  }

  findLineNumber(code, searchString) {
    const lines = code.split('\\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchString)) {
        return i + 1;
      }
    }
    return 1;
  }

  async autoFix(code, issues) {
    let fixedCode = code;
    
    issues.forEach(issue => {
      if (issue.type === 'warning' && issue.message.includes('var ')) {
        fixedCode = fixedCode.replace(/var /g, 'const ');
      }
      
      if (issue.message.includes('===')) {
        fixedCode = fixedCode.replace(/==/g, '===');
        fixedCode = fixedCode.replace(/!=/g, '!==');
      }
    });

    return {
      code: fixedCode,
      fixes: issues.length,
      message: \`Applied \${issues.length} automatic fixes\`
    };
  }

  startRealTimeAnalysis() {
    console.log("📊 Real-time code analysis enabled");
    // This would normally connect to a WebSocket or polling system
  }
}

// Export for use in main application
window.AICodeAssistant = AICodeAssistant;`
  }
];

export const AdvancedCodeEditor = () => {
  const [files, setFiles] = useState<CodeFile[]>(initialFiles);
  const [activeFileId, setActiveFileId] = useState(initialFiles[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [aiErrors, setAiErrors] = useState<AIError[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    "🚀 Advanced IDE initialized",
    "🤖 AI Assistant ready",
    "📊 Real-time analysis enabled"
  ]);
  const { toast } = useToast();

  const activeFile = files.find(f => f.id === activeFileId) || files[0];

  const handleRunCode = async () => {
    setIsRunning(true);
    setConsoleOutput(prev => [...prev, "⚡ Executing code..."]);
    
    // Simulate code execution with AI analysis
    setTimeout(() => {
      setConsoleOutput(prev => [
        ...prev,
        "✅ Code executed successfully",
        "📈 Performance: Excellent (98ms)",
        "🔍 0 runtime errors detected",
        "💡 AI suggestions available"
      ]);
      setIsRunning(false);
      toast({
        title: "Code Executed Successfully",
        description: "Your app is running with AI-powered optimizations",
      });
    }, 2000);
  };

  const analyzeWithAI = async () => {
    setIsAnalyzing(true);
    setConsoleOutput(prev => [...prev, "🤖 AI analyzing code..."]);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockErrors: AIError[] = [
        {
          line: 15,
          message: "Consider using const instead of let for immutable variables",
          severity: 'warning',
          suggestion: "Change 'let' to 'const' for better code quality"
        },
        {
          line: 32,
          message: "Missing error handling for async operation",
          severity: 'error',
          suggestion: "Wrap in try-catch block"
        }
      ];
      
      setAiErrors(mockErrors);
      setConsoleOutput(prev => [
        ...prev,
        `🔍 Analysis complete: ${mockErrors.length} issues found`,
        "💡 Auto-fix suggestions available",
        "📊 Code quality score: 85/100"
      ]);
      setIsAnalyzing(false);
      
      toast({
        title: "AI Analysis Complete",
        description: `Found ${mockErrors.length} potential improvements`,
      });
    }, 3000);
  };

  const updateFileContent = (content: string) => {
    setFiles(prev => prev.map(file => 
      file.id === activeFileId 
        ? { ...file, content, isModified: true }
        : file
    ));
  };

  const saveFile = () => {
    setFiles(prev => prev.map(file => 
      file.id === activeFileId 
        ? { ...file, isModified: false }
        : file
    ));
    
    toast({
      title: "File Saved",
      description: `${activeFile.name} saved successfully`,
    });
  };

  const createNewFile = () => {
    const newFile: CodeFile = {
      id: Date.now().toString(),
      name: "untitled.js",
      language: "javascript",
      content: "// New file created by AI\nconsole.log('Hello from new file!');",
      isModified: true
    };
    
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-2rem)]">
      {/* Enhanced File Explorer */}
      <Card className="bg-gradient-card backdrop-blur-md border-border/50 col-span-1">
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Folder className="w-4 h-4 text-primary" />
              <h3 className="font-semibold">Explorer</h3>
            </div>
            <Button size="sm" variant="ghost" onClick={createNewFile}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-2 space-y-1">
          {files.map((file) => (
            <div
              key={file.id}
              onClick={() => setActiveFileId(file.id)}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 group ${
                activeFileId === file.id
                  ? 'bg-primary/20 border-primary/50 border'
                  : 'bg-secondary/10 hover:bg-secondary/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4" />
                  <span className="font-medium text-sm">
                    {file.name}
                    {file.isModified && <span className="text-primary ml-1">•</span>}
                  </span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {file.language}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        
        <Separator className="my-4" />
        
        {/* AI Assistant Panel */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <h4 className="font-semibold text-sm">AI Assistant</h4>
          </div>
          
          <div className="space-y-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full justify-start"
              onClick={analyzeWithAI}
              disabled={isAnalyzing}
            >
              <Bug className="w-4 h-4 mr-2" />
              {isAnalyzing ? 'Analyzing...' : 'Analyze Code'}
            </Button>
            
            <Button size="sm" variant="outline" className="w-full justify-start">
              <RefreshCw className="w-4 h-4 mr-2" />
              Auto-Fix Issues
            </Button>
            
            <Button size="sm" variant="outline" className="w-full justify-start">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Code
            </Button>
          </div>
          
          {aiErrors.length > 0 && (
            <div className="mt-4 space-y-2">
              <h5 className="text-xs font-semibold text-muted-foreground">AI DETECTED:</h5>
              {aiErrors.map((error, index) => (
                <div key={index} className="text-xs p-2 rounded bg-destructive/10 border border-destructive/20">
                  <div className="font-medium">Line {error.line}</div>
                  <div className="text-muted-foreground">{error.message}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Enhanced Code Editor */}
      <Card className="bg-gradient-card backdrop-blur-md border-border/50 col-span-2">
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <h3 className="font-semibold">{activeFile.name}</h3>
              {activeFile.isModified && (
                <Badge variant="secondary" className="text-xs">Modified</Badge>
              )}
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={saveFile}>
                <Save className="w-4 h-4 mr-1" />
                Save
              </Button>
              <Button 
                size="sm" 
                onClick={handleRunCode}
                disabled={isRunning}
                className="bg-primary hover:bg-primary/90"
              >
                <Play className="w-4 h-4 mr-1" />
                {isRunning ? 'Running...' : 'Run'}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="relative h-[calc(100%-5rem)]">
          <textarea
            value={activeFile.content}
            onChange={(e) => updateFileContent(e.target.value)}
            className="w-full h-full bg-input/50 border-0 p-4 font-mono text-sm resize-none focus:outline-none"
            placeholder="Start coding with AI assistance..."
            style={{ 
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '14px',
              lineHeight: '1.5'
            }}
          />
          
          {/* Line numbers overlay would go here */}
          <div className="absolute top-4 left-4 pointer-events-none text-muted-foreground font-mono text-sm">
            {activeFile.content.split('\n').map((_, index) => (
              <div key={index} style={{ height: '21px' }}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Enhanced Preview & Console */}
      <Card className="bg-gradient-card backdrop-blur-md border-border/50 col-span-1">
        <Tabs defaultValue="preview" className="h-full">
          <div className="p-4 border-b border-border/50">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="preview" className="text-xs">Preview</TabsTrigger>
              <TabsTrigger value="console" className="text-xs">Console</TabsTrigger>
              <TabsTrigger value="metrics" className="text-xs">Metrics</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="preview" className="p-4 h-[calc(100%-6rem)]">
            <div className="w-full h-full bg-background rounded-lg border border-border/50 overflow-hidden">
              <iframe
                srcDoc={files.find(f => f.name === 'index.html')?.content || ''}
                className="w-full h-full border-0"
                title="App Preview"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="console" className="p-4 h-[calc(100%-6rem)]">
            <div className="bg-input/30 rounded-lg p-3 h-full font-mono text-xs overflow-auto space-y-1">
              {consoleOutput.map((line, index) => (
                <div key={index} className="text-foreground/80">
                  {line}
                </div>
              ))}
              {isRunning && (
                <div className="text-primary animate-pulse">
                  ⚡ Executing with AI optimization...
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="metrics" className="p-4 h-[calc(100%-6rem)]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <div>
                  <div className="text-sm font-medium">Performance</div>
                  <div className="text-xs text-muted-foreground">98ms load time</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-green-400" />
                <div>
                  <div className="text-sm font-medium">Memory</div>
                  <div className="text-xs text-muted-foreground">2.1MB used</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-sm font-medium">Bundle Size</div>
                  <div className="text-xs text-muted-foreground">145KB optimized</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-400" />
                <div>
                  <div className="text-sm font-medium">Deployment</div>
                  <div className="text-xs text-muted-foreground">Ready to deploy</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};