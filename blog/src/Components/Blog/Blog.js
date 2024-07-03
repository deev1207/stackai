import './Blog.css'
export default function Blog({blog}){
    return(
        <div className="blog">
            <div className='blog-content'>
            {blog.title}

            </div>
            <div className='blog-content'>            
                {blog.author}
            </div>
            <div className='blog-content'>
            {blog.content}

            </div>
            <div className='blog-content'>
            {blog.dueDate} 

            </div>

        </div>
    )
}