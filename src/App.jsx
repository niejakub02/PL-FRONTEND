import Map from "./components/map/Map.jsx";
import Sign from "./components/sign/Sign.jsx";

import './App.css';

// Sample database
const position = [
    {
        id: 0,
        lat: 51.7760881,
        lng: 19.4552,
        name: 'Cindy Baker',
        rating: 1,
        number_reviews: 100,
        img: 'https://images.pexels.com/photos/1391495/pexels-photo-1391495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et, in ipsa nisi possimus quae sequi tempore vitae voluptates! Aliquid autem consectetur consequuntur culpa, debitis ea iste iusto, maxime nesciunt nihil nulla, odio quasi quia reprehenderit tempore unde voluptates voluptatibus? Deserunt explicabo in ipsum iure molestiae perspiciatis qui repellat tenetur.',
        help_list: ['help1', 'help2']
    },
    {
        id: 1,
        lat: 51.7760881,
        lng: 19.453,
        name: 'Ania 🙀',
        rating: 2.5,
        number_reviews: 6,
        img: 'https://i.pinimg.com/originals/a3/28/e0/a328e0a4361c2b157f1253f2ef69d608.jpg',
        description: 'Hello im Ania and I’m Polish-Brittish. I was born in England, but both of my parents are Polish. At my 20 birthdays i moved to London and I’m live here for 7 years now. I’d like to meet some Polish people to help me level up my Polish a little in exchange i could help you with English. Also if anyone is moving to London and struggle with something, hit me up i might be able to help you :)',
        help_list: ['help1', 'help2', 'help3', 'help4']
    },
    {
        id: 2,
        lat: 51.777,
        lng: 19.4552,
        rating: 4.7,
        number_reviews: 23,
        name: 'Cindy Baker',
        img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et, in ipsa nisi possimus quae sequi tempore vitae voluptates! Deserunt explicabo in ipsum iure molestiae perspiciatis qui repellat tenetur.',
        help_list: ['help1', 'help2', 'help3', 'help4', 'help5']
    },
]

function App() {
    return (
        <div>
            <Map position={position}/>
            {/*<Sign/>*/}
        </div>
    )
}

export default App;
