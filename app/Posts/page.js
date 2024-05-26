import Link from "next/link"
import Todo from "../component/Todo"
async function page() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
      next : {
        revalidate : 120
      }
    })
     const posts = await response.json();
    const PostList = posts.map((post) =>{
      return(
        <Link href={`/Posts/${post.id}`}>
            <div style={{background : "#444" , padding : "20px" , margin : "20px" , borderRadius : "20px"}} >
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </Link>
      )
    })
  return (
    <div>
    <h1>Posts Page</h1>
    <Link href={"/"}>
      <button>
        Go To Home Page 
      </button>
    </Link>

    <div>
     {PostList}
    </div>
    {/* <Todo /> */}
  </div>
  )
}

export default page
