import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Blog from './Components/Blog/Blog';
function App() {
  const [blog, setBlog] = useState([])
  const [arr, setArr] = useState()
  useEffect(() => {
    const run = async () => {
      const res = await axios.get('http://localhost:3000/blog')
      console.log(res);
      setBlog(res.data)
    }

    run()
  }, [])

  useEffect(() => {
    if (blog.length > 0) {
      setArr(blog.map(item =>
        <Blog blog={item} />
      ))
    }
  }, [blog])

  return (
    <>
        {arr}

    </>
  );
}

export default App;
