import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useEffect } from 'react';
import { AdminNav } from './AdminNav';
import { toast } from 'react-toastify';

import dummy from "../../assets/dummy1.jpg"

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { auth, database, storage } from '../../firebaseConfig';
import { async } from '@firebase/util';
import { addDoc, collection, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';

export const CreatePost = ({ placeholder }) => {
	const {loading, setLoading} = useAuth()
	
	
	const editor = useRef(null);
	const [content, setContent] = useState('');
	const [data, setData] = useState({
		title: "",
		category: "",
		tag: ""
	})

	const [image, setImage] = useState("")
	const [imageURL, setImageURL] = useState("")

	const [uploadProgress, setUploadProgress] = useState("")
	
	// firebase data
	const storageRef = ref(storage, `/images/${image.name}`)
	const postRef = collection(database, "posts");

	//Jodit Editor Config
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

	// function to handle image selection 
	const handleImage = (e) => {
		let upload = e.target.files
		setImage(upload[0])
	}

	// handle POST DETAILS: Data from states
	const postDetail = {
		title: data.title,
		category: data.category,
		content: content,
		image: image.name
	}

	// DATE: creating date format Day/Month
    // get timestamp from Firebase
    const stamp = Timestamp.now().toDate()
    
    let day = stamp.getDate()
    let monthByIndex = stamp.getMonth();
    let fullYear = stamp.getFullYear();
    let month = monthByIndex+1;
    // add 0 to beginning of Month 1-9
    if(month <= 9){
        month = `0${month}`
    }
    // convert year to string to easily extract only last two figures eg. 2022 == 22
    const year = fullYear.toString().slice(2,4)

    // final date format
    const date = `${day}/${month}/${year}`

    // end of date formatting

	// function to upload Image to Firestore
	const uploadImage = async (e) => {
		if(!image){
			setImage(dummy)
		}
		const uploadTask = uploadBytesResumable(storageRef, image)
		uploadTask.on("state_changed", (snapshot) => {
			const percentage = Math.round(
				(snapshot.bytesTransferred/snapshot.totalBytes)*100
			);
			setUploadProgress(percentage)
		},
		(err) => toast.error(err),

		async () => {
			await getDownloadURL(uploadTask.snapshot.ref)
			.then(url => {
				return setImageURL(url)
			});
		}
		);
	}

	// CREATE Post function
	const addPost = async (e) => {
		e.preventDefault()
		uploadImage()
		setLoading(true)
		const post = await getDoc(doc(postRef))
		try{
			if(!post.exists()){
				await setDoc(doc(postRef, data.title), {
					imageURL: imageURL,
					title: data.title,
					category: data.category,
					content: content,
					author: auth.currentUser.email,
					publishDate: date,
				})
				// await addDoc(postRef, {
				// 	imageURL: imageURL,
				// 	title: data.title,
				// 	category: data.category,
				// 	content: content,
				// 	author: auth.currentUser.email,
				// 	publishDate: date,
				// })
				toast.success('New Blog Added')
				setLoading(false)
			}
			setLoading(false)
			return uploadImage();
		}
		catch(error){
			console.log(error)
		}
	}

console.log(imageURL)
	return (
		<>
        <AdminNav />
		<div className='create--post'>
			<div className='container--item'>
				<form>
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
						name='image'
						accept='.png, .jpeg, .jpg, .svg'
						onChange={(e) => handleImage(e)}				
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
				<button onClick={addPost}>CREATE POST</button>
				<div className='blog--image'>
					{image ? <img src={`${image}`} alt={image.name} /> : <i>Blog Post image appears here...</i>}
				</div>
			</div>
		</div>
		</>
	);
};