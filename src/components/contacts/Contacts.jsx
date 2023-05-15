import './Contacts.css'

const Contacts = (props) => {
    const count = 1;
    const noContacts = (
        <div className='no-contacts flexCC'><img src='../assets/no-contacts.svg'/>
            <p>You have not reached out to anyone yet!
                Use the map beside to find people.</p></div>)
    return (
        <div className='all_contacts'>
            {!count ? noContacts : <AllContacts friends={props.friends}/>}
        </div>
    )
}

const AllContacts = (props) => {
    const friends = props.friends
    return (
        <>
            <fieldset className='search_contacts'>
                <legend>Search contacts</legend>
                <input type="text" placeholder="SEARCH"/>
                <img src='../assets/search.svg'/>
            </fieldset>
            <div className='people'>
                {
                    friends.map((el) => {
                        return (
                            <div className='one_person ' key={el.id}>
                                <div className='flexCC'>
                                    <div className='avatar'>
                                        <img
                                            src={el.img}
                                        />
                                    </div>
                                    <p>{el.name}</p>
                                </div>
                                <div className='markers'>
                                    <img src='../assets/chat2.svg'/>
                                    <img src='../assets/star.svg'/>
                                    <img src='../assets/tresh.svg'/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Contacts;