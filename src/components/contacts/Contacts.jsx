import AllContacts from "../contactsAll/AllContacts.jsx";

import "./Contacts.css";

const Contacts = ({ friends, setFriends, showChat }) => {
    const noContacts = (
        <div className="no-contacts flexCC">
            <img src="../assets/no-contacts.svg" />
            <p>
                You have not reached out to anyone yet! Use the map beside to
                find people.
            </p>
        </div>
    );

    return (
        <div className="contacts">
            <div className="box_header">
                <div className="logo_header flexCC">
                    <img src="../assets/user.svg" />
                    <p>CONTACTS</p>
                </div>
                <div className="dots" />
            </div>
            <div className="all_contacts">
                {!true ? (
                    noContacts
                ) : (
                    <AllContacts
                        friends={friends}
                        setFriends={setFriends}
                        showChat={showChat}
                    />
                )}
            </div>
        </div>
    );
};

export default Contacts;
