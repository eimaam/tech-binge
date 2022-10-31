import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

export const CreatePost = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
	const [data, setData] = useState({
		title: "",
		content: content,
		category: "",
		tag: ""
	})

	// const config = useMemo(
	// 	{
	// 		readonly: false, // all options from https://xdsoft.net/jodit/doc/,
	// 		placeholder: placeholder || 'Start typings...'
	// 	},
	// 	[placeholder]
	// );

	// config for Jodit Editor
	const config = {
					readonly: false, // all options from https://xdsoft.net/jodit/doc/,
					placeholder: placeholder || 'Blog content goes here...',
					minHeight: 400,
				}

	// handle form data change
	const handleChange = (e) => {
		// e.preventDefault()
		const {name, value} = e.target
		setData(prevData => ({
			...prevData,
			[name]: value
		}))
	}

	const postDetail = {
		title: data.title,
		category: data.category,
		content: content
	}

	const addPost = (e) => {
		e.preventDefault()
	}

	return (
		<div className='create--post'>
			<div className='container--item'>
				<form >
					<div>
						<label htmlFor="title"> Post Title:</label>
						<input 
						type="text" 
						name="title" 
						placeholder='Title of Blog Post'
						value={data.title}
						onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="image">Add Image: </label>
						<input 
						type="file" 
						onChange={handleChange}				
						/>
					</div>
					<div>
						<label htmlFor="image">Category:</label>
						<input 
						type="text"
						name='category'
						value={data.category} 
						placeholder="Technology | Business | Funding | Economy | .. "
						onChange={handleChange}				
						/>
					</div>
				</form>
				<div className='jodit--editor'>
					<label htmlFor="content">Post Content:</label>
					<JoditEditor
						ref={editor}
						value={content}
						config={config}
						tabIndex={1} // tabIndex of textarea
						onBlur={newContent => setContent(newContent)}
						onChange={newContent => {}}
					/>
				</div>
				<button>CREATE POST</button>
			</div>
		</div>
	);
};