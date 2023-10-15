import useFetch from "./useFetch";
import BlogList from "./blogList";


const Home = () => {
    const {data:blogs,isPending,err} = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }


    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {err && <div> {err} </div>}
           {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            </div>
     );
}
 
export default Home;