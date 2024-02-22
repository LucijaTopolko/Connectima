import React, {useEffect, useState} from 'react';
import '../styles/MyProfile.css';
import Header from "./Header";
import Footer from "./Footer";
import '../styles/AdminDashboard.css';
import {useNavigate} from "react-router-dom";

const AdminDashboard = () => {

    const navigate = useNavigate();
    const accessToken = sessionStorage.getItem('accessToken');

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async (e) => {
        fetch("http://localhost:8080/user/all", {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": accessToken},

        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/user/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": accessToken
                },
            });
            if (!response.ok) {
                throw new Error("Failed to delete user");
            }
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const openUser = (id) => {
        window.location.href = `/user/${id}`;
    }


    return (
        <div className="admindashboard">
            <Header/>
            <article className='table-widget'>
                <div className="caption">
                    <div className="caption-content">
                        <h2>Team Members</h2>
                        <button className="export-btn" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-export" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3" />
                            </svg>
                            Export
                        </button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email address</th>
                            <th>Type</th>
                            <th>Delete user</th>
                        </tr>
                    </thead>
                    <tbody id="team-member-rows">
                        {users?.length>0 ? (
                            <>
                                {users.map((user) => {
                                    return(
                                        <tr onClick={() => openUser(user.id)}>
                                            <td className="team-member-profile">
                                                <img src={user.profilePicture} alt=""/>
                                                <div className="profile-info">
                                                    <div className="profile-info__name">
                                                        {user.username}
                                                    </div>
                                                    <div className='profile-info__alias'>
                                                        {user.address}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {user.email}
                                            </td>
                                            <td>
                                                <div className="tags">
                                                    {user.typeOfUser === 'ADMIN' ? (
                                                        <div className="tag tag--admin">
                                                            Admin
                                                        </div>
                                                    ) : user.typeOfUser === 'ORGANISER' ? (
                                                        <div className="tag tag--organiser">
                                                            Organiser
                                                        </div>
                                                    ) : (
                                                        <div className="tag tag--visitor">
                                                            Visitor
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                {user.typeOfUser === 'ADMIN' ? (
                                                    <></>
                                                ) : (
                                                    <button className="tag tag--delete" onClick={() => handleDelete(user.id)}>X</button>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                    </tbody>
                </table>
            </article>
            <Footer />
        </div>
    );
};

export default AdminDashboard;