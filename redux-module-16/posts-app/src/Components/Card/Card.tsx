import { UserIcon } from "../Icons/UserIcon";
import styles from "./styles.module.css"


interface iCard{
    user: User,
    setCurrentUser: (user: User) => void,
    setIsOpen: (isOpen: boolean) => void
}

const NOOP = () =>{}

export const UserCard = ({ user, setCurrentUser = NOOP, setIsOpen }: iCard) => {
    
    const handleClick = () => {
        setCurrentUser(user);
        setIsOpen(true);
    }

    return (
        <div className={styles.cardContainer} onClick={handleClick}>
            <div className={styles.userPic}>
                <UserIcon width="70px" height="70px"/>
            </div>
            <div className={styles.userDetails}>
                <h3 className={styles.userId}>User ID: {user.userId}</h3>
                <span className={styles.lastPost}>LAST POST: { user.lastPost.title }</span>
            </div>
        </div>
    )
}