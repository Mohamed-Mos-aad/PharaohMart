// ** Assets
import xIcon from '../../assets/icons/dashboard/add product/xIcon.svg'
// ** Style
import style from '../../style/components/form/uploadPhotosElement.module.css'
// ** Hooks && Tools
import { useEffect, useState, type DragEvent } from 'react';



// ** Interfaces
interface IUploadPhotos{
    title: string;
    description: string;
    quantity: number;
}



export default function UploadPhotos({quantity,title,description}:IUploadPhotos) {
    // ** States
    const [files, setFiles] = useState<File[]>([]);
    const [quantityCompleted,setQuantityCompleted] = useState<boolean>(false);



    // ** Handlers
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        const validImages = droppedFiles.filter(file =>
            file.type === 'image/jpeg' || file.type === 'image/png'
        );
        if (validImages.length > 0) {
            if (files.length + validImages.length <= quantity) {
                setFiles((prevFiles) => [...prevFiles, ...validImages]);
            }
        }
    };
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault(); 
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(quantityCompleted) return;

        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const validImages = Array.from(selectedFiles).filter(file =>
            file.type === 'image/jpeg' || file.type === 'image/png'
            );
            if (validImages.length > 0 && files.length + validImages.length <= quantity) {
            setFiles(prevFiles => [...prevFiles, ...validImages]);
            }
        }
    };
    const removeUploadedPhotoHandler = (index:number)=>{
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);   
    }
    


    // ** Renders
    const renderUploadedIamgesRender = files.map((file,index) =>{
        const fileURL = URL.createObjectURL(file);
        return (
            <div className={style.product_photo} key={file.name + index}>
                <img src={fileURL} alt="product photo"/>
                <span onClick={()=>{removeUploadedPhotoHandler(index)}}>
                    <img src={xIcon} alt="delete Icon"/>
                </span>
            </div>
        )
    })



    // ** UseEffect
    useEffect(()=>{
        if(files.length === quantity )
        {
            setQuantityCompleted(true);
        }
        else if(files.length < (quantity + 1) )
        {
            setQuantityCompleted(false);
        }
    },[files,quantity])



    return (
        <>
            <div 
                className={style.upload_images} 
                onDrop={handleDrop} 
                onDragOver={handleDragOver}
                style={quantityCompleted ? {cursor: 'no-drop'} : {cursor: 'default'}}
            >
                {files.length < 1 ?
                    <>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </>
                    :
                    <div className={style.uploaded_images} style={{gridTemplateColumns: `repeat(${quantity},1fr)`}}>
                        {renderUploadedIamgesRender}
                    </div>
                }
                <label htmlFor="uploadPhoto" style={quantityCompleted ? {cursor: 'no-drop'} : {cursor: 'pointer'}}>Upload</label>
                <input type="file" name="" id="uploadPhoto" hidden multiple={quantity > 1 ? true : false} onChange={handleFileChange}/>
            </div>
        </>
    )
}
