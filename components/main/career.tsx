import { ProjectCard } from "@/components/sub/project-card";
import { CAREER } from "@/constants";

export const Career = () => {
  return (
    <section
      id="career"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Career
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {CAREER.map((career) => (
          <ProjectCard
            key={career.title}
            src={career.image}
            title={career.title}
            description={career.description}
            link={career.link}
          />
        ))}
      </div>
    </section>
  );
};
