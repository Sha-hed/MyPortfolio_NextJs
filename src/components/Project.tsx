import { GetAllProject } from "./GetData";


const Project = async() => {
    const projects =await GetAllProject();
    console.log("Projects are  :", projects);
    return (
        <div>
            
        </div>
    );
};

export default Project;