import { useEffect, useState } from "react"
import { ModalWindow } from "../modalWindwo/ModalWindow"
import styles from "./styles.module.css"
import { UserCard } from "../Card/Card"

const RESOURCE = "https://jsonplaceholder.typicode.com/posts"


export const MainSection = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [users, setUsers] = useState<User[]>([])
    const [currentUser, setCurrentUser] = useState<User>()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        getData();
    }, [])
    
    useEffect(() => {
        console.log("users", users)
    },users)

    const getData = async () => {
        try {
            const r = await fetch(RESOURCE);
            if (!r.ok) {
                throw new Error("err response status: " + r.status)
            }
            else {
                const data = await r.json()
                console.log("data", data)
                setPosts(data)
            }
        }
        catch {
            const r = await fetch(RESOURCE);
            const json = r.json();
            const data = JSON.parse( await json);
            console.log(`error try/catch failed: ${r.status}`)
            console.log(data)
        }
        getUsers(posts)
    }

    // const getUsers = () => {
    //     posts.forEach(post => {
    //         users.forEach(user => {

    //         })
    //     })
    // }
    
    const getUsers = (posts: Post[]): User[] => {
        const userMap: User[]  = [];

        // Создаем объекты пользователей и мапу для быстрого доступа
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


        // Возвращаем массив объектов пользователей
        return Object.values(userMap);
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