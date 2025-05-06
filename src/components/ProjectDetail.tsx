
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

type ProjectDetailProps = {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    video?: string;
  };
  onClose: () => void;
};

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button onClick={onClose} className="hover:text-gray-600">
            <X size={24} />
          </button>
        </CardHeader>
        <CardContent>
          {project.video ? (
            <div className="aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <video
                src={project.video}
                controls
                className="w-full h-full object-cover"
              />
            </div>
          ) : project.image ? (
            <div className="aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          ) : null}
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100  hover:shadow-zinc-600 rounded-full text-sm text-gray-700 transition-all duration-300 hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetail;
