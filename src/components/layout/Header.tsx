import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Plus, Search, Bell, Settings, User, LogOut, Sparkles, FolderOpen, Code2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-primary font-bold text-sm">R</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-primary">replit</span>
            <Badge variant="secondary" className="ml-2">clone</Badge>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Button 
              variant={isActive('/') ? 'secondary' : 'ghost'} 
              size="sm"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button 
              variant={isActive('/projects') ? 'secondary' : 'ghost'} 
              size="sm"
              onClick={() => navigate('/projects')}
            >
              <FolderOpen className="w-4 h-4 mr-1" />
              Projects
            </Button>
            <Button 
              variant={isActive('/editor') ? 'secondary' : 'ghost'} 
              size="sm"
              onClick={() => navigate('/editor')}
            >
              <Code2 className="w-4 h-4 mr-1" />
              Editor
            </Button>
            <Button variant="ghost" size="sm">Templates</Button>
            <Button variant="ghost" size="sm">Docs</Button>
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-6 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, templates..."
              className="w-full h-10 pl-10 pr-4 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate('/editor')}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create
          </Button>

          <Button size="sm" variant="outline">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Assistant
          </Button>

          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Avatar className="w-7 h-7">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    JD
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:inline">john.doe</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};