import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Chain The Words! (Game)",
      description: "This is a fun game that tests your vocabulary, spelling and memory skills.",
      githubLink: "https://www.chain-the-words.com/"
    },
    {
      title: "Token Counter",
      description: "This is a token counter for LLMs that counts the number of tokens in a given text or file, and estimates the cost of the tokens per model.",
      githubLink: "https://token-counter-two.vercel.app/"
    },
    {
      title: "Personal Diary App",
      description: "This is a personal diary app that allows you to write and save your thoughts and feelings. It is built using Next.js, Tailwind CSS, and Firebase.",
      githubLink: "https://personal-diary-554d7.web.app/"
    },
    {
      title: "Text summarizer",
      description: "This is a tool that allows you to create data and summarize text from files.",
      githubLink: "https://prashant-lonikar.github.io/text-summarizer/"
    },
    {
      title: "Word counter",
      description: "This is a tool that allows you to count the number of words in a given text.",
      githubLink: "https://prashant-lonikar.github.io/word-counter/"
    }

  ];

  return (
    <div className="projects">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-4 rounded-lg shadow-md flex flex-col justify-between h-full hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
            </div>
            <span className="text-blue-600 hover:text-blue-800">View Project</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;