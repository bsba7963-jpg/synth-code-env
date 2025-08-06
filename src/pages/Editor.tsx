import { Header } from "@/components/layout/Header";
import { AdvancedCodeEditor } from "@/components/ide/AdvancedCodeEditor";

const Editor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      <main className="p-6">
        <AdvancedCodeEditor />
      </main>
    </div>
  );
};

export default Editor;