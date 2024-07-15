import ReactDOM from "react-dom"
import React, { useEffect } from "react"
import styles from './styles.module.css';
import { UserIcon } from "../Icons/UserIcon";
import { Post } from "../Post/Post";
import { CloseIcon } from "../Icons/CloseIcon";

interface IUser{
    currentUser: User
    isOpen: boolean
    setIsOpen: (isOpen: boolean) =>void
}

export const ModalWindow = ({currentUser, isOpen, setIsOpen}: IUser) => {
    const node = document.querySelector("#body")
    useEffect(() => { }, [currentUser])
    
    const handleClick = () => {
        setIsOpen(false)
    }

    if (node) {
        return ReactDOM.createPortal((
            <div className={styles.modalWindowContainer}>
                <button className={styles.closeButton} onClick={handleClick}>
                    <CloseIcon width="35px" height="35px"/>
                </button>
                <div className={styles.userInfo}>
                    <UserIcon width="70px" height="70px"/>
                    <div className={styles.userId}>User ID: { currentUser.userId}</div>
                </div>
                <div id="userPostsContainer" className={styles.postsContainer}>
                    {currentUser.userPosts.map((post) => (<Post key={post.id} post = {post}/>))}
                </div>
            </div>
        ), node)
    }
    else {
        return null
    }
}