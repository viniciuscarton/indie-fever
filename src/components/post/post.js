import React from 'react';
import axios from 'axios';
import './post.css';

export default function Post() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formElement = document.getElementById('myForm');
        const formData = new FormData(formElement);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        const image = formData.get('image');
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
            formObject.imageData = reader.result;
            submitForm(formObject);
        };
    };
    const submitForm = async (formObject) => {
        try {
            const response = await axios.post('http://localhost:3000/post', formObject);
            alert('Post sent');
        } catch (error) {
            console.error('Error', error);
        }
    }
    return (
        <div className="post">
            <form className='form' id='myForm'>
                <input type='text' placeholder='Title' name='title' />
                <input type='text' placeholder='Subtitle' name='subtitle' />
                <input type='text' placeholder='Author' name='author' />
                <input type='file' accept='image/*' name='image' />
                <textarea className='content' placeholder='Content' rows='10' name='content' />
                <input type='text' placeholder='Tags' name='tags' />
                <input type='date' placeholder='Date' name='date' />
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    );
}
