import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useEffect } from 'react';
import { AdminNav } from './AdminNav';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { auth, database, storage } from '../../firebaseConfig';
import { addDoc, collection, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { PuffLoader, BarLoader } from 'react-spinners';
import { useData } from '../../context/DataContext';

export const CreatePost = ({ placeholder }) => {
	const {loading, setLoading} = useAuth()
	const { userInfo } = useData()
	
	
	const editor = useRef(null);
	const [content, setContent] = useState('');
	const [data, setData] = useState({
		title: "",
		category: "",
		caption: "",
		imageURL: ""
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
		console.log(data)
	}

	// function to handle image selection 
	const handleImage = (e) => {
		let upload = e.target.files
		setImage(upload[0])
	}

	console.log(image)
console.log(imageURL)

	

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
	// creating date format with no / to create a link
	const datePlain = `${day}${month}${year}`
    // end of date formatting

	// function to upload Image to Firestore
	const uploadImage = async (e) => {
		e.preventDefault()
		if(!image){
			toast.error('Image is empty!')
			return setUploadProgress(100)
		}
		const uploadTask = uploadBytesResumable(storageRef, image)
		uploadTask.on("state_changed", (snapshot) => {
			const percentage = Math.round(
				(snapshot.bytesTransferred/snapshot.totalBytes)*100
			);
			setUploadProgress(percentage)
		},
		(error) => console.log(error),

		async () => {
			await getDownloadURL(uploadTask.snapshot.ref)
			.then((url) => {
				return setImageURL(url);
			});
		}
	);
	}

	

	// CREATE Post function
	const addPost = async (e) => {
		e.preventDefault()
		setLoading(true)
		const post = await getDoc(doc(postRef))
		try{
			if(!post.exists()){
				await setDoc(doc(postRef, data.title), {
					imageURL: imageURL != "" ? imageURL : data.imageURL,
					caption: data.caption,
					title: data.title,
					category: data.category,
					content: content,
					author: userInfo.displayName,
					publishDate: date,
					id: encodeURI(`${datePlain}${data.title.toLowerCase()}`)
				})
				toast.success('New Blog Added')
				setLoading(false)
			}
			
		}
		catch(error){
			console.log(error)
		}
		setLoading(false)
	}
// end of func


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
						<label htmlFor="">Add via URL:</label>
						<input 
						type="text"
						name='imageURL'
						value={data.imageURL}
						placeholder="...you can add image URL here"
						onChange={handleChange}				
						/>
						<i>Choose an option: Can only upload via one means one of form</i>
					</div>
					<div>
						<label htmlFor="caption">Caption:</label>
						<input 
						type="text"
						name='caption'
						value={data.caption} 
						placeholder="...give image a caption"
						onChange={handleChange}				
						/>
					</div>
					<div>
						<label htmlFor="category">Category:</label>
						<select name="category" defaultValue="Select Post Category" onChange={handleChange}>
							<option defaultValue="" disabled>Select Post Category</option>
							<option value="Cryptocurrency">Cryptocurrency</option>
							<option value="Education">Education</option>
							<option value="Events">Events </option>
							<option value="Featured">Featured</option>
							<option value="How-Tos">How-Tos</option>
							<option value="Lifestyle & Fashion">Lifestyle & Fashion</option>
							<option value="Technology">Technology</option>
							<option value="Startup">Startups</option>
							<option value="Watch">Watch - Videos</option>
							<option value="Backend">Web Dev: Backend</option>
							<option value="Frontend">Web Dev: Frontend</option>
						</select>
					</div>
				</form>
				<div className='jodit--editor'>
					<label htmlFor="content">Blog Post Content:</label>
					<JoditEditor
						ref={editor}
						value={content}
						config={config}
						tabIndex={1} // tabIndex of textarea
						onBlur={newContent => setContent(newContent)}
						onChange={newContent => {}}
					/>
				</div>
				<div className='flex-col'>
					{uploadProgress > 0 && uploadProgress < 100 
					&& <p>
							<BarLoader /> 
							<br /> Checking Post Contents.... {uploadProgress}%
						</p>
						}
						<br />
					{uploadProgress == 100 
					&& <p>Done! Click on Create Post! </p>}
					{uploadProgress !== 100 
					&& <button onClick={uploadImage}>Check Post</button>}
					{/* loading animation showing posting... */}
					<br />
					{loading 
					&& <p><PuffLoader /></p>
					}
					{uploadProgress == 100 
					&& <button onClick={addPost}>CREATE POST</button>}
				</div>
				<div className='blog--image'>
					{image 
					? <img src={`${imageURL != "" ? imageURL : data.imageURL}`} alt={image.name} /> 
					: <i>Blog Post image appears here...</i>
					}
				</div>
			</div>
		</div>
	</>
	);
};