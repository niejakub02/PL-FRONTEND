// Sample database
export const Marker = [
    {
        user_id: 0,
        latitude: 51.7760881,
        longitude: 19.4552,
        offers_help: true,
        city: "Lodz",
    },
    {
        user_id: 1,
        latitude: 51.7760881,
        longitude: 19.46,
        offers_help: true,
        city: "Lodz",
    },
    {
        user_id: 2,
        latitude: 51.7760881,
        longitude: 19.47,
        offers_help: false,
        city: "Lodz",
    },
    {
        user_id: 3,
        latitude: 51.7760881,
        longitude: 19.48,
        offers_help: true,
        city: "Lodz",
    },
    {
        user_id: 4,
        latitude: 51.7760881,
        longitude: 19.49,
        offers_help: false,
        city: "Lodz",
    },
    {
        user_id: 5,
        latitude: 51.7760881,
        longitude: 19.44,
        offers_help: true,
        city: "Lodz",
    },
    {
        user_id: 6,
        latitude: 51.7760881,
        longitude: 19.43,
        offers_help: true,
        city: "Lodz",
    },
];

export const countries = [
    { id: 0, title: "Poland" },
    { id: 1, title: "Italy" },
    { id: 2, title: "Germany" },
    { id: 3, title: "France" },
    { id: 4, title: "China" },
    { id: 5, title: "Austria" },
    { id: 6, title: "Mexico" },
];

export const languages = [
    { id: 0, title: "Polish" },
    { id: 1, title: "English" },
    { id: 2, title: "Spanish" },
    { id: 3, title: "French" },
    { id: 4, title: "Russian" },
    { id: 5, title: "Turkish" },
    { id: 6, title: "Japanese" },
];

export const Users = [
    {
        user_id: 0,
        name: "JOHN",
        surname: "NOWAK",
        age: "20",
        avatar: "https://fowlertec.ca/images/about-man-img.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et, in ipsa nisi possimus quae sequi tempore vitae voluptates! Deserunt explicabo in ipsum iure molestiae perspiciatis qui repellat tenetur.",
        favorite: false,
    },
    {
        user_id: 1,
        name: "OLIVER",
        surname: "Smith",
        age: "30",
        avatar: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
        favorite: false,
        description:
            "Creative individuals possess a unique ability to think outside the box and come up with innovative ideas. They have a vivid imagination, artistic flair, and a passion for self-expression.",
    },
    {
        user_id: 2,
        name: "AURORA",
        surname: "Johnson",
        age: "18",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        favorite: true,
        description:
            "Empathetic individuals have a deep sense of understanding and compassion for others. They can easily put themselves in someone else's shoes, offering support, kindness, and a listening ear.",
    },
    {
        user_id: 3,
        name: "JASPER",
        surname: "Williams",
        age: "25",
        avatar: "https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=",
        favorite: false,
        description:
            "Optimistic individuals have a positive outlook on life and approach challenges with a can-do attitude. They believe in their abilities and remain hopeful even in difficult times, inspiring others with their resilience.",
    },
    {
        user_id: 4,
        name: "LUNA",
        surname: "Jones",
        age: "26",
        avatar: "data:image/jpeg;base64,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",
        favorite: true,
        description:
            "People with an analytical mind possess strong problem-solving skills and a logical approach to decision-making. They enjoy gathering information, analyzing data, and finding effective solutions to complex issues.",
    },
    {
        user_id: 5,
        name: "HAZEL",
        surname: "Brown",
        age: "21",
        avatar: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2353184.jpg",
        favorite: false,
        description:
            "Adventurous individuals have a thirst for new experiences and embrace uncertainty with enthusiasm. They seek thrill and excitement, whether through travel, trying new activities, or exploring different perspectives.",
    },
    {
        user_id: 6,
        name: "NIKO",
        surname: "Davis",
        age: "20",
        avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
        favorite: false,
        description:
            "Ambitious individuals strive to achieve high goals and work tirelessly to attain success. They are full of energy, motivation, and determination.",
    },
];

export const Messages = [
    {
        message_id: 0,
        chat_id: 0,
        content: "Hi",
        from: 0,
        at: 1,
    },
    {
        message_id: 1,
        chat_id: 0,
        content: "Hi",
        from: 1,
        at: 0,
    },
    {
        message_id: 2,
        chat_id: 0,
        content: "How are you?",
        from: 0,
        at: 1,
    },
    {
        message_id: 3,
        chat_id: 1,
        content: "Hi!",
        from: 0,
        at: 2,
    },
    {
        message_id: 4,
        chat_id: 1,
        content: "Wow",
        from: 0,
        at: 2,
    },
    {
        message_id: 5,
        chat_id: 5,
        content: "Hello",
        from: 0,
        at: 6,
    },
];

export const Chat = [
    {
        chat_id: 0,
        inviting_user_id: 0,
        invited_user_id: 1,
    },
    {
        chat_id: 1,
        inviting_user_id: 0,
        invited_user_id: 2,
    },
    {
        chat_id: 2,
        inviting_user_id: 0,
        invited_user_id: 3,
    },
    {
        chat_id: 3,
        inviting_user_id: 0,
        invited_user_id: 4,
    },
    {
        chat_id: 4,
        inviting_user_id: 0,
        invited_user_id: 5,
    },
    {
        chat_id: 5,
        inviting_user_id: 0,
        invited_user_id: 6,
    },
];
