import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h3>What is a Semantic Tag?</h3>
            <p>Semantic tag aims to make our code more <b>meaningful</b> which makes our codes more <b>descriptive</b> and it is easier to optimize with SEO. Semantic Tags were introduced in HTML5. Examples of semantic tags are header, main, footer etc</p>
            <h3>What is Context API?</h3>
            <p>Context API enables sharing of data between components without passing down props manually which is time exhausting and frustrating for building large application but through Context API we can share strings, objects, functions to any components between father component and child component without prop drilling. </p>
        </div>
    );
};

export default Blogs;