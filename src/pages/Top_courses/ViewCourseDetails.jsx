import * as React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';




function ViewCourseDetails() {


    const [index1, setIndex] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    const Tab = ({ label, isActive, onClick }) => {
        return (
            <button
                className={`px-4 py-2 mx-2 text-sm font-semibold focus:outline-none ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                    }`}
                onClick={onClick}
            >
                {label}
            </button>
        );
    };

    const TabContent = ({ children }) => {
        return <div className="mt-4">{children}</div>;
    };

    const Tabs = ({ children }) => {

        return (
            <div>
                <div className="flex">
                    {children.map((child, index) => (
                        <Tab
                            key={index}
                            label={child.props.label}
                            isActive={index === activeTab}
                            onClick={() => setActiveTab(index)}
                        />
                    ))}
                </div>
                <div>
                    {children.map((child, index) =>
                        index === activeTab ? <TabContent key={index}>{child.props.children}</TabContent> : null
                    )}
                </div>
            </div>
        );
    };
    //**************************************************************************************************** */   


    const cTop = [
        {
            id: 1,
            title: '⓵ Hello World!',
            description: [
                'Introduction of C programming.',
                'Features and History.',
                'Write a First Program.',
                'Compile and Execute.',
                'C comments',
                'Tokens in C',
                'Keywords in C',

            ],

        },
        {
            id: 2,
            title: '⓶ Variables ',

            description: [
                'Introduction of Variables and Basic Data Types.',
                'How to Use and their Benifits.',
                'Constants in C',
                'Const Qualifier in C',
                'Scope Rules in C',
                'Differents way to Declare Variable in C ',
                'Global Variable in C',
                'Writing program to Using Variables',
                'Compile and Execute.',
            ],

        },
        {
            id: 3,
            title: '⓷ Data Types in C',
            description: [
                'Data Types and Literals',
                'Escape Sequence in C',
                'Boolian in C',
                'Integer Promotions in C',
                'Character Arithmatic in C',
                'Type Conversion in C',

            ],

        },
        {
            id: 4,
            title: '⓸ C Input/Output',
            description: [
                'Basic Input and Output in C',
                'Format Specifier in C',
                'Printf in C',
                'Scanf in C',
                'Scansets in C',
                'Formatted and informatted input and output Functions in C with Examples',


            ],
        },
        {
            id: 5,
            title: '⓹ C Operators',
            description: [
                'Arithmatic Operator',
                'Unary Operators in C',
                'Relational Operators in C',
                'Bitwise Operators in C',
                'C Logical Operators',
                'Assignment Operators',
                'Increment and Decrement Operator',
                'Conditional Operator',
                'sizeof Operators',
                'Operator Precedence and Associativity in C',
            ],

        },
        {
            id: 6,
            title: '⓺ C Control Statement and Decision Making',
            description: [
                'Decition making (if, if...else ,Nested if,if else if)',
                'if else if ladder',
                'Switch Statement',
                'Using range in Switch case',
                'C Loop',
                'C for Loop',
                'While Loop',
                'Do while loop',
                'for Versus While',
                'continue Statement',
                'Break Statement',
                'goto Statement',


            ],
        },
        {
            id: 7,
            title: '⓻ C Functions',
            description: [
                'User defined function',
                'Parameter Passing Technique',
                'Function Prototype',
                'Multiple values Returning in C',
                'main function',
                'Implicite Return Type int in C',

                'Callbacks function in C',
                'Nested Function in C',
                'Variadic Function in C',
                'Noreturn Function Specifier in C',
                'Predefined Identifier __func__in C',
                'c library Math.h function',

            ],

        },
        {
            id: 8,
            title: '⓼ Arrays and Strings',
            description: [
                'C Arrays',
                'Properties of Array in C',
                'Multidimentional Array in C',
                'Initializing of Multidimensional Arrays in C',
                'Pass Array to Function in Array',
                'How to Pass 2D Array',
                'How to Pass an Array by value',
                'Strings in C',
                'Pass of Array in C',
                'C string Function',

            ],

        },
        {
            id: 9,
            title: '⓽ C Pointer',
            description: [
                'Poniter Arithmatic in C with Example',
                'C pointer to Pointer',
                'How to Declare a Function to a Pointer',
                'Pointer to an Array | Array Pointer',
                'Pointer Vs Array in C',
                'Dangling,Void, Null and Wild pointer in C',
                'Near, For and Huge pointer in C',
                'restrict keyword in C',

            ],
        },
        {
            id: 10,
            title: '⓾ C User Defined Data Types',
            description: [
                'C Structure',
                'dot(.) Operator in C',
                'C Typedef',
                'Structure Member Alignment, Padding and data Packing',
                'Flexible Array members in C structure',
                'C Union',
                'Bit Fields in C',
                'Difference between Structure and Union in C',
                'Annonymous Union and Structure in C',
                'Enemeration in C',
            ],
        },
        {
            id: 11,
            title: '１１ C Storage Classes',
            description: [
                'Storage Classes',
                'Extern keyword',
                'Static Keyword',
                'Initialization of Static Variables in C',
                'Static Function in C',
                'Understanding "Volitile" Qualifier in C | set2 Examples'
            ],
        },
        {
            id: 12,
            title: '１２ C Memory Management',
            description: [
                'Memory Layout of C Program',
                'Dynamic Memory Allocation in C Using malloc(), calloc(),free and realloc()',
                'Memory Leak and How to be Solve',
                'How to Dynamically Allocate a 2D array in C',
                'Dynamically Growing Array in C',
            ],
        },
        {
            id: 13,
            title: '１３ C PreProcessor',
            description: [
                'C Preprocessor',
                'C preprocessor Directives',
                'How to Works Preprocessor in C?',
                'Header Files in C',
                'How to write your Own Header File?',
                'Interesting Facts about macros and preprocessors in C',
                '# and ## Operators in C',
                'How to Print a Variable name in C',
                'Multiline Macros in C',
                'Variable length arguments for macros',
                'Branch Prediction macros in GCC',
                'Typedef versus #define in C',
                'Differnce between #define and const in C',
            ],
        },
        {
            id: 14,
            title: '１４File Handling in C',
            description: [
                'Basics of File Handling in C',
                'C fopen() function with Examples',
                'EOF , getc() and feof() in C',
                'fgets() and gets() in C',
                'fseek() vs rewind in C',
                'Return type of getchar(),fgetc() and getc()',
                'Read and Write structure from to a File in C',
                'To print contents of file',
                'C program to Delete a File',
                'Difference between printf,sprintf and fprintf',
                'Difference between getc(), getchar(), getch() and getche()',
            ],
        },
        {
            id: 15,
            title: '１５Miscellaneous',
            description: [
                'time.h header file in C with Examples',
                'input output system calls in C',
                'Signals in C language',
                'Program error in C language',
                'Socket programming in C',
                'Generic keyword in C',
                'Multithreading in C',

            ],
        },
        {
            id: 16,
            title: '１６C interview Questions',
            description: [
                'C programming interview Questions for the Current Year',
                'Commonly asked interview Questions|set-1',
                'Commonly asked interview Questions |set-2',
                'Commonly asked interview Questions |set-3',


            ],
        },
        {
            id: 17,
            title: '１７Free online Quizzes',
            description: [
                'Quizz-1',
                'Quizz-2',
                'Quizz-3',
                'Quizz-4',
                'Quizz-5',
            ],
        },

    ]
    // *************************************************************************************//
    const project = [
        {
            id: 1,
            para: 'Project',
            title: 'Rock Paper Scissors',
            description: 'In This game two persons use their hands and chooses random objects between rock, paper, or scissor, and their choice decides the winner between them. What if a single person can play this game? With a computer, just by using a single C application, we can design the game Rock Paper Scissor application just using basic C knowledge like if-else statements, random value generation, and input-output of values.',
        },
        {
            id: 2,
            para: 'Project',
            title: 'Hangman Game',
            description: 'It is the game can be easily designed in C language with the basic knowledge of if-else statements, loops, and some other basic statements. The code of the game is easy, short, and user-friendly.Rules for this Game:There is given a word with omitted characters and you need to guess the characters to win the game.Only 3 chances are available and if you win the Man survives or Man gets hanged.',
        },
        {
            id: 3,
            para: 'Project',
            title: 'Bank Management System',
            description: 'The banking sector occupies a large part of the tertiary sector because which data maintained is too much by a single application. Using C language we can create an application that can manage the data of the Bank,  we use basic knowledge of C like string, array, structures, etc.'
        },
    ]


    function ViewOrNot(i) {

        if (index1 === i) {
            setIndex(null);
            setActiveTab(activeTab)
        } else {
            setIndex(i);
            setActiveTab(activeTab)
        }
    }




    return (
        <> <div className='mx-auto py-5 px-10 mt-4 justify-center bg-blue-300'>
            <div className='w-1/2 '>
                <h2 className='fontstyle2 py-3'>Learn C Programming</h2>
                <p className='text-lg py-3 font-bold '>Learn C — a versatile programming language that’s important for developing software, games, databases, and more.</p>
        
                <Link to="/CourseRegistration"><button className="bg-white text-center text-lg p-2 py-3 rounded-md">Register Now</button></Link>
            </div>
        </div>
            {/* ************************************************************************************************************* */}
            <div className='mx-auto container'>
                <Tabs>
                    <div label="About" className='mx-auto section flex md:flex-row flex-col gap-10'>

                        <div className='md:w-1/2'>
                            <h2 className='text-2xl font-bold py-3'>About this course</h2>
                            <p className='text-lg'>With its adaptability and fast rendering, you’ll find the C programming language used everywhere, from web browsers to game development and operating systems to
                                science and machine learning tools. This course will help you learn C basics and give
                                you hands-on experience to create your own projects and work with computer memory.</p>
                        </div>
                        <div className='md:w-1/2'>
                            <h2 className='text-2xl font-bold py-3'>Skills you'll gain</h2>
                            <p className='text-lg'>⍟ Build programming concepts</p>
                            <p className='text-lg'>⍟ Understand pointers and memory</p>
                            <p className='text-lg'>⍟ Build C projects</p>
                        </div>
                    </div>
                    {/* ****************************************************************************************************************/}
                    <div label="Syllabus" className='container mx-auto border-2 bordder-b-6 border-b-black border-gray-400'>
                        <div className=' px-3 py-3'>
                            <h1 className='text-3xl font-bold py-3'>Syllabus</h1>
                            <p className='text-lg font-medium'>15 lessons • 14 projects • 8 quizzes</p></div>

                       
                        <div className='container mx-auto border-2 border-gray-500'>
                            {cTop.map((ctop, i) => {
                                return (
                                    <>
                                        <div className='flex justify-between'><h1 className='text-xl font-bold py-3 ' key={ctop.id}>{ctop.title}</h1>
                                            <button className='mx-20 font-bold ' onClick={() => ViewOrNot(ctop.id)}>{index1 === ctop.id ? "⊝" : "⊕"}</button></div>

                                        {index1 === ctop.id && (<ul className=' list-disc px-20 leading-10 text-lg border-b-2 border-b-gray-300'>
                                            {ctop.description.map((e) => {
                                                return <li key={i + 100}>{e}</li>
                                            })}
                                        </ul>)}

                                    </>
                                )

                            })}
                        </div>
                    </div>
                    {/* ********************************************************************************************** */}
                    <div label="Project" className='bg-blue-50 mt-8 rounded-2xl py-10'>
                        <h2 className='text-2xl font-bold p-3 text-center'>Project In This Course</h2>
                        <div className='grid md:grid-cols-3 gap-5 grid-cols-1 container mx-auto '>
                            {project.map((project, i) => {
                                return <div key={i.id} className='flex bg-[#fff]  flex-col border-2 border-gray-300 p-5'>
                                    <p className='text-lg text-center'>{project.para}</p>
                                    <h2 className='font-bold text-center py-3 text-xl'>{project.title}</h2>
                                    <p className='text-lg'>{project.description}</p>
                                </div>
                            })}

                        </div>
                    </div>
                </Tabs></div>

        </>
    )
}

export default ViewCourseDetails