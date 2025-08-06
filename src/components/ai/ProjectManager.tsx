import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  FolderPlus, GitBranch, Users, Star, Clock, 
  Globe, Download, Share2, Settings, Trash2,
  Code2, Database, Zap, Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  framework: string;
  lastModified: string;
  isStarred: boolean;
  collaborators: number;
  status: 'active' | 'deployed' | 'archived';
  aiGenerated: boolean;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "AI Chat App",
    description: "Real-time chat application with AI assistance",
    language: "TypeScript",
    framework: "React",
    lastModified: "2 hours ago",
    isStarred: true,
    collaborators: 3,
    status: 'active',
    aiGenerated: true
  },
  {
    id: "2", 
    name: "E-commerce Dashboard",
    description: "Admin dashboard for online store management",
    language: "JavaScript",
    framework: "Vue.js",
    lastModified: "1 day ago",
    isStarred: false,
    collaborators: 5,
    status: 'deployed',
    aiGenerated: true
  },
  {
    id: "3",
    name: "Portfolio Website",
    description: "Personal portfolio with modern design",
    language: "HTML/CSS",
    framework: "Static",
    lastModified: "3 days ago",
    isStarred: true,
    collaborators: 1,
    status: 'deployed',
    aiGenerated: false
  },
  {
    id: "4",
    name: "Task Management API",
    description: "RESTful API for task management with AI features",
    language: "Python",
    framework: "FastAPI",
    lastModified: "5 days ago",
    isStarred: false,
    collaborators: 2,
    status: 'active',
    aiGenerated: true
  }
];

export const ProjectManager = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const { toast } = useToast();

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const toggleStar = (projectId: string) => {
    setProjects(prev => prev.map(project =>
      project.id === projectId 
        ? { ...project, isStarred: !project.isStarred }
        : project
    ));
  };

  const deleteProject = (projectId: string) => {
    setProjects(prev => prev.filter(project => project.id !== projectId));
    toast({
      title: "Project Deleted",
      description: "Project has been moved to trash",
    });
  };

  const createNewProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "New AI Project",
      description: "AI-generated project template",
      language: "TypeScript",
      framework: "React",
      lastModified: "just now",
      isStarred: false,
      collaborators: 1,
      status: 'active',
      aiGenerated: true
    };
    
    setProjects(prev => [newProject, ...prev]);
    toast({
      title: "Project Created",
      description: "New AI-powered project is ready to code!",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'deployed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'archived': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground">Manage your AI-powered development projects</p>
        </div>
        
        <Button onClick={createNewProject} className="bg-primary hover:bg-primary/90">
          <FolderPlus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-input/50 border-border/50"
            />
          </div>
          
          <Tabs value={filterStatus} onValueChange={setFilterStatus} className="w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="deployed">Deployed</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </Card>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Globe className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {projects.filter(p => p.status === 'deployed').length}
              </div>
              <div className="text-sm text-muted-foreground">Deployed</div>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {projects.filter(p => p.aiGenerated).length}
              </div>
              <div className="text-sm text-muted-foreground">AI Generated</div>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                {projects.reduce((sum, p) => sum + p.collaborators, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Collaborators</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="bg-gradient-card backdrop-blur-md border-border/50 p-6 hover:shadow-glow transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  {project.aiGenerated && (
                    <Badge variant="secondary" className="text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
              </div>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={() => toggleStar(project.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Star className={`w-4 h-4 ${project.isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
              </Button>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-xs">
                {project.language}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {project.framework}
              </Badge>
              <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                {project.status}
              </Badge>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {project.lastModified}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {project.collaborators}
              </div>
            </div>

            <Separator className="mb-4" />

            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                <Code2 className="w-3 h-3 mr-1" />
                Open
              </Button>
              
              <Button size="sm" variant="outline">
                <Share2 className="w-3 h-3" />
              </Button>
              
              <Button size="sm" variant="outline">
                <Download className="w-3 h-3" />
              </Button>
              
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => deleteProject(project.id)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <Card className="bg-gradient-card backdrop-blur-md border-border/50 p-12 text-center">
          <div className="p-4 bg-muted/20 rounded-full w-fit mx-auto mb-4">
            <FolderPlus className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-6">
            {searchTerm ? "No projects match your search criteria" : "Create your first AI-powered project"}
          </p>
          <Button onClick={createNewProject} className="bg-primary hover:bg-primary/90">
            <FolderPlus className="w-4 h-4 mr-2" />
            Create New Project
          </Button>
        </Card>
      )}
    </div>
  );
};