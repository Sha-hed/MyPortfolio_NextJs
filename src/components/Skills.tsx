"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import html from '../assets/icons/Html.svg'
import css from '../assets/icons/CSS.svg'
import tailwind from '../assets/icons/Tailwind.svg'
import javascript from '../assets/icons/Javascript.svg'
import react from '../assets/icons/React.svg'
import nodejs from '../assets/icons/Nodejs.svg'
import expressJs from '../assets/icons/Express.svg'
import mongodb from '../assets/icons/MongoDb.svg'
import firebase from '../assets/icons/Firebase.svg'
import git from '../assets/icons/Git.svg';
import github from '../assets/icons/Github.svg'
import vscode from '../assets/icons/VScode.svg';
import netlify from '../assets/icons/netlify.svg';
import typescript from '../assets/icons/typescript.svg';
import nextJs from '../assets/icons/nextjs.svg';
import Image from 'next/image';

const Skills = () => {
    return (
        <div className="w-full md:max-w-6xl mx-auto mb-10 mt-28 text-white">
        {/* <Heading heading={heading} subHeading={subHeading}></Heading> */}
        <h1 className='text-center font-bold text-5xl text-black dark:text-white'>Skills</h1>
        <h1 className='text-center font-bold text-xl text-black dark:text-white'>Here are some of my skills on which I have been working on for the past 1 years</h1>
        <div className="flex flex-wrap justify-center items-center gap-10 my-10">
            <div data-aos="fade-up" data-aos-duration='300'>
                <div className="mx-3 border px-4 py-10 w-[90%] md:w-[450px] rounded-3xl bg-gray-900 transition hover:scale-105 duration-100">
                    <h1 className="text-center text-3xl text-white font-bold mb-8 underline">Frontend</h1>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-5">
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} alt="react" src={html} />
                            </div>
                            <p>HTML</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} alt="react" src={css}  />
                            </div>
                            <p>CSS</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} alt="react" src={tailwind}  />
                            </div>
                            <p>Tailwind</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} alt="react" src={react} />
                            </div>
                            <p>React</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} alt="react" src={nextJs} />
                            </div>
                            <p>NextJs</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} alt="react" src={javascript} />
                            </div>
                            <p>Javascript</p>
                        </div>

                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration='300'>
                <div className="mx-3 border px-4 py-10 w-[90%] md:w-[450px] rounded-3xl bg-gray-900 transition hover:scale-105 duration-100">
                    <h1 className="text-center text-3xl text-white font-bold underline mb-8">Backend</h1>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-5">
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} src={nodejs} alt="" />
                            </div>
                            <p>Node Js</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} src={expressJs} alt="" />
                            </div>
                            <p>Express Js</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} src={typescript} alt="" />
                            </div>
                            <p>Typescript</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} src={mongodb} alt="" />
                            </div>
                            <p>MongoDB</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} src={firebase} alt="" />
                            </div>
                            <p>Firebase</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration='300'>
                <div className="mx-3 border px-4 py-10 w-[90%] md:w-[450px] rounded-3xl bg-gray-900 transition hover:scale-105 duration-100">
                    <h1 className="text-center text-3xl text-white font-bold underline mb-8">Others</h1>
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-5">
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} src={git} alt="" />
                            </div>
                            <p>Git</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} src={github} alt="" />
                            </div>
                            <p>Github</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} src={netlify} alt="" />
                            </div>
                            <p>Netlify</p>
                        </div>
                        <div className="flex items-center justify-center gap-1 border p-2 rounded-lg">
                            <div className="w-8">
                                <Image width={500} height={500} src={vscode} alt="" />
                            </div>
                            <p>VS Code</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Skills;