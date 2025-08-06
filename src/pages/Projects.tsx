import { Header } from "@/components/layout/Header";
import { ProjectManager } from "@/components/ai/ProjectManager";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <ProjectManager />
      </main>
    </div>
  );
};

export default Projects;