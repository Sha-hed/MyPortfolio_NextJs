"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from 'next/link';
AOS.init();

const ProjectCard = ({ project}: any) => {
    const {_id, title, image, technology, liveLink, clientSide } = project

    // console.log(technology);
    const tc = technology.split(' ')
    console.log(tc);

    return (
        <div data-aos='zoom-in' data-aos-duration='200' className='text-black dark:text-white'>
            <div className="w-full hover:scale-105 duration-100 md:w-96 p-6 rounded-md shadow-md bg-gray-900 mx-auto">
                <Image width={500} height={500} src={image} alt="" className="my-1 object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <h1 className="font-bold text-xl underline">{title}</h1>
                
                <div className="flex flex-wrap items-center">
                <a className='text-white' href="">Technology Used: </a>
                    {
                        tc?.map((skill:any, id:any) => <a key={id}
                            className="ml-2 p-1 rounded-xl my-1 dark:bg-[#854ce615] text-white"
                        >
                            #{skill}
                        </a>)
                    }
                </div>
                
                {/* <p>{timeSpan}</p>
                <div className="h-[150px] md:h-[100px] items-center justify-center">
                    <p>{description.length > 200 ? <p>{description.slice(0, 150) + '........'}</p> : <p>{description}</p>}</p>
                </div> */}
                <div className="flex justify-around mt-1">
                    <Link href={`/project/projectDetails/${_id}`} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Details</Link>
                    <Link href={liveLink} target="_blank" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Live Site</Link>
                    <Link href={clientSide} target="_blank" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github Link</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;