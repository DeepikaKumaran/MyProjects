const BlogList = (props ) => {


const blogs=props.blogs;

const title=props.title;
const handleDelete=props.handleDelete;


    return (  
     <div className="blog-content">
        {blogs.map((blog) => (
        <div className="blog-name" key={blog.id}>
          <h2>{blog.title}</h2>
          <h1>{title}</h1>
          <p>{blog.body}</p>
          <button onClick ={ ()=>handleDelete(blogs.id)}>delete</button>

        </div>
      ))}
     </div>

    );
}
 
export default BlogList;