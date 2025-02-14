export const GetAllProject = async () => {
  const res = await fetch("http://localhost:3000/api/project");
  const data = await res.json();
  return data.data;
};


export const GetAllBlog = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  const data = await res.json();
  return data.data;
};


export const GetSingleProject = async (projectId:string) => {
  const res = await fetch(`http://localhost:3000/api/project/${projectId}`);
  const data = await res.json();
  return data.data;
};


export const GetSingleBlog = async (blogId:string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${blogId}`);
  const data = await res.json();
  return data.data;
};

export const GetAllMessages = async () => {
  const res = await fetch("http://localhost:3000/api/message");
  const data = await res.json();
  return data.data;
};

export const DeleteAProject = async (id:string) => {
  
  const res = await fetch("http://localhost:3000/api/message");
  const data = await res.json();
  return data.data;
};
