import { useEffect, useState } from "react"
import { ModalWindow } from "../modalWindwo/ModalWindow"
import styles from "./styles.module.css"
import { UserCard } from "../Card/Card"
import { useDispatch } from "react-redux"
import { getPostsStart, getPostsSuccess } from "../../Redux/posts/actions"
import { store } from "../../Redux/store"

const RESOURCE = "https://jsonplaceholder.typicode.com/posts"


export const MainSection = () => {
    const [users, setUsers] = useState<User[]>([])
    const [currentUser, setCurrentUser] = useState<User>()
    const [isOpen, setIsOpen] = useState(false)

    

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getUsers(store.getState())
    }, [store])

    

    const put = useDispatch()


    const getData = async () => {
        try {
            const r = await fetch(RESOURCE);
            if (!r.ok) {
                throw new Error("err response status: " + r.status)
            }
            else {
                const data: Post[] = await r.json()

                put(getPostsSuccess(data))
            }
        }
        catch {
            console.log(`error try/catch failed`)
        }
    }
    
    const getUsers = async (posts: Post[]) => {
        const userMap: User[]  = [];
        posts.forEach((post) => {
            if (!userMap[Number(post.userId)]) {
                userMap[Number(post.userId)] =
                {
                    userId: post.userId,
                    lastPost: post,
                    userPosts: [post],
                };
            }
            else {
                userMap[Number(post.userId)].userPosts.push(post);
            }
        });
        setUsers(userMap)
        setCurrentUser(users[users.length])
    }
            

    return (
        <div id="body">
            <div id="mainTable" className={styles.mainSection}>
                {users.map((user) => (
                    <UserCard user={user} setCurrentUser={setCurrentUser} setIsOpen={setIsOpen}/>
                ))}
            </div>
            {isOpen && currentUser && <ModalWindow currentUser={currentUser} isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
    )
}