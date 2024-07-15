type Post ={
    userId: string
    id: string
    title: string
    body: string
}
  
type User = {
    userId: string
    lastPost: Post
    userPosts: Post[]
}

type iIcon = {
    height?: string;
    width?: string;
    color?: string;
}