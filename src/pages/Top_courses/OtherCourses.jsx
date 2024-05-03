import React from 'react';
import { Link} from 'react-router-dom';
import TopBlock from '../../assets/TopCourses.jpg'
import image1 from '../../assets/cforTop1.jpg';
import image2 from '../../assets/cppTop.jpg';
import image3 from '../../assets/webdevelopmentTop.png'
import image4 from '../../assets/advancedjavaforTop.jpeg';
import image5 from '../../assets/phpTop.jpg'
import image6 from '../../assets/flutterforTop.jpg';
import image7 from '../../assets/MysqlTop.jpg';



function OtherCourse() {
    const data2 = [
        {
            id: 1,
            image: image1,
            title: "C Programming Online Course",
            para: "Ratting: 4.6 ★ (7,508 reviews)|95%",
            paragraph1: "C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.Our C tutorials will guide you to learn C programming one step at a time.",
            paragraph2: "The C Programming courses we offer are designed to help prepare you for a career in software development, system programming, embedded systems, and technical problem-solving, providing a strong foundation in one of the most fundamental.",
        },
        {
            id: 2,
            image: image2,
            title: "CPP Online Course.",
            para: "Ratting: 4.4 ★ (7,508 reviews)|95%",
            paragraph1: "C++ is one of the most used and popular programming languages. C++ is used in making operating systems, embedded systems, and Graphical User Interfaces.",
            paragraph2: " It is an object-oriented programming language that implements all the OOPs concepts such as Abstraction, Encapsulation, and Inheritance, which gives a clear structure to programs and allows code to be reused, lowering development costs and providing security.It is portable and can be used to create applications that can be adapted to multiple platforms.",
        },
        {
            id: 3,
            image: image3,
            title: "Web Development Online Course",
            para: "Ratting: 4.8 ★ (7,508 reviews)|95%",
            paragraph1: "Web development encompasses a broad range of tasks from coding, to technical design, to performance of a website or application running on the internet.",
            paragraph2: "Web development is the act of building, creating and maintaining websites. The field encompasses a broad range of tasks including everything from coding, to technical design, to the performance of a website or application running on the internet. Web development consists of front-end and back-end components.",
        },
        {
            id: 4,
            image: image4,
            title: "Advanced Java Online Course",
            para: "Ratting: 4.5 ★ (7,508 reviews)|95%",
            paragraph1: " The core Java part covers the fundamentals (data types, functions, operators, loops, thread, exception handling, etc.) of the Java programming language. It is used to develop general purpose applications.",
            paragraph2: "Whereas Advanced Java covers the standard concepts such as database connectivity, networking, Servlet, web-services, etc.Java has built-in security features that make it a secure platform for developing applications, such as automatic memory management and type checking.",
        },
        {
            id: 5,
            image: image5,
            title: "PHP Online Course",
            para: "Ratting: 4.2 ★ (7,508 reviews)|95%",
            paragraph1: "PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP. ",
            paragraph2: " PHP is a popular server-side scripting language for creating dynamic websites and web applications. PHP is a server-side scripting language that is embedded in HTML. PHP is a cross-platform language, capable of running on all major operating system platforms and with most of the web server programs such as Apache, IIS, lighttpd and nginx.",
        },
        {
            id: 6,
            image: image6,
            title: "Flutter Online Course",
            para: "Ratting: 4.1 ★ (7,508 reviews)|95%",
            paragraph1: "Flutter is Google’s Mobile SDK to build native iOS and Android, Desktop (Windows, Linux, macOS), and Web apps from a single codebase.Hot Reloading refers to the injection of new versions of the files that you edited at runtime while keeping the app running.",
            paragraph2: "The Apps developed using Flutter are highly expressive and have flexible UI.Flutter lets developers build beautiful-looking apps with ease by using prebuild material widgets.",
        },
        {
            id: 7,
            image: image7,
            title: "MYSQL Database Management",
            para: "Ratting: 4.1 ★ (7,508 reviews)|95%",
            paragraph1: "MySQL is a widely used relational database management system (RDBMS). MySQL is free and open-source. MySQL is ideal for both small and large applications.MySQL is a very popular open-source relational database management system (RDBMS).",
            paragraph2: "MySQL is a Relational Database Management System or RDBMS which means that it stores and presents data in tabular form, organized in rows and columns.MySQL has a unique storage engine architecture which makes it faster, cheaper, and more reliable.",
        },


    ]

    

    return (
        <>
            <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-10 '>
                <div className='backg3 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='md:w-3/5'>
                            <h2 className='sm:text-4xl md:text-5xl text-3xl text-white font-bold mb-5 '>Courses Offered in Programming Languages.</h2>


                            </div>

                        <div className='md:w-1/4 w-1/2'>
                            <img className='rounded-2xl' src={TopBlock} alt="" />

                        </div>
                    </div>
                </div></div>

            {/* *************************************************************************** */}
            <div className='text-center py-5 '>
                <h2 className='text-4xl font-medium text-center'>Our Top Other Popular Courses </h2>
            </div>
            {data2.map((e) => (<div className='container mx-auto py-4 '>
                <div className='flex gap-5 flex-col md:flex-row border-b-2 border-gray-400'>
                    <div className='md:w-1/2'>
                        <img src={e.image} alt="" />
                        <div className='bg-blue-100 text-center'>
                            <p className='text-2xl font-medium'>{e.title} </p>

                           

                        </div>


                    </div>
                    <div className='md:w-1/2 py-3 text-lg'>
                        <p>{e.paragraph1}
                        </p>
                       
                        <div className='text-center py-3'>
                            <Link to="/ViewCourseDetails"><button className='bg-blue-300 mt-10 rounded p-2'>View Course Details</button></Link></div>
                    </div>
                </div>

            </div>))}

        </>
    )
}

export default OtherCourse;