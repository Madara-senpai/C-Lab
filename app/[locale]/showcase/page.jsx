"use client";

import { useState } from "react";
import Modal from "../../components/Modal"; // Create a Modal component
import Section from "../../components/Section";
import { useTranslations } from "next-intl";



const Showcase = () => {

  const t = useTranslations('showcase');
  const projects = t.raw('showtopic');


  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <Section crosses id="showcase" className="bg-n-7  text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{t('htwo')}</h2>
        <p className="mb-12 text-lg">{t('paragraf')}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card relative rounded-xl overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleProjectClick(project)}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for showing project details */}
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <div className="p-6">
            <h3 className="text-3xl font-semibold mb-4">{selectedProject.title}</h3>
            <p className="text-lg mb-4">{selectedProject.details}</p>
            <p className="text-sm text-gray-400">{t('modaltags')} {selectedProject.techUsed}</p>
            <div className="mt-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                {t('close')}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
};

export default Showcase;
