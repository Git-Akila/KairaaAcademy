export const menuItems= [
    {
      id: 1,
      title: "HOME",
     url: "/"
    },
    
    {
      id:2,
      title: "ABOUT US",
     url: "/about-kairaa-blockchain-academy"
    },
    {
      id: 3,
      title: "COURSES",
      submenu: [
        {
          id: 1,
          title: "Self-Paced Courses",
          url: "/course/selfpaced-course"
        },
        {
          id: 2,
          title: "Our Top Courses",
          submenu: [
            {
              id: 1,
              title: "Blockchain Development ",
             url: "/course/blockchain"
            },
            {
              id: 2,
              title: "Other Courses",
             url: "/course/othercourse"
            }
          ]
        },
        {
          id: 3,
          title: "Internship Programs",
         url: "/course/internship-program"
        },
        {
          id: 4,
          title: "Certified Architect ",
         url: "/course/bockchaincertification"
        },

        {
          id: 5,
          title: "Bootcamp",
         url: "/course/bootcamp"
        },

      ]
    },
    {
      id: 4,
      title: "BLOGS",
     url: "/blogs"
    },
    {
      id: 5,
      title: "GALLERY",
     url: "/gallery"
    },
    {
      id: 6,
      title: "CONTACT US",
     url: "/contact"
    },

  ];