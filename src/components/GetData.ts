export const GetAllProject = async () => {
  const res = await fetch(
    "https://shahed-portfolio-navy.vercel.app/api/project"
  );
  const data = await res.json();
  return data.data;
};

export const GetAllBlog = async () => {
  const res = await fetch("https://shahed-portfolio-navy.vercel.app/api/blog");
  const data = await res.json();
  return data.data;
};

export const GetSingleProject = async (projectId: string) => {
  const res = await fetch(
    `https://shahed-portfolio-navy.vercel.app/api/project/${projectId}`
  );
  const data = await res.json();
  return data.data;
};

export const GetSingleBlog = async (blogId: string) => {
  const res = await fetch(
    `https://shahed-portfolio-navy.vercel.app/api/blog/${blogId}`
  );
  const data = await res.json();
  return data.data;
};

export const GetAllMessages = async () => {
  const res = await fetch(
    "https://shahed-portfolio-navy.vercel.app/api/message"
  );
  const data = await res.json();
  return data.data;
};

export const DeleteAProject = async (id: string) => {
  const res = await fetch(
    "https://shahed-portfolio-navy.vercel.app/api/message"
  );
  const data = await res.json();
  return data.data;
};
