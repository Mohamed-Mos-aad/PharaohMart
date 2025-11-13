// ** Assets
import xIcon from '../../assets/icons/dashboard/add product/xIcon.svg'
// ** Style
import style from '../../style/components/form/uploadPhotosElement.module.css'
// ** Hooks && Tools
import { useEffect, useState, type DragEvent } from 'react';
// ** Actions
import { deletePhotoAction, uploadPhotoAction } from '../../api/data/uploadPhotosAction';



// ** Interfaces
interface IUploadPhotos{
    title: string;
    description: string;
    quantity: number;
    onUpload?: (images: number[]) => void;
}
interface IUploadedFile {
    file?: File;
    url?: string;
    name: string;
    id?: number;
}


export default function UploadPhotos({quantity, title, description, onUpload}:IUploadPhotos) {
    // ** States
    const [files, setFiles] = useState<IUploadedFile[]>([]);
    const [quantityCompleted,setQuantityCompleted] = useState<boolean>(false);



    // ** Handlers
    const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        const validImages = droppedFiles.filter(file =>
            file.type === 'image/jpeg' || file.type === 'image/png'
        );
        if (validImages.length > 0) {
            for (const file of validImages) {
                if (files.length < quantity) {
                    const uploaded = await uploadPhotoAction(file);
                    setFiles(prev => [...prev, uploaded]);
                }
            }
        }
    };
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault(); 
    };
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if(quantityCompleted) return;

        const selectedFiles = e.target.files;

        if (selectedFiles) {
            const validImages = Array.from(selectedFiles).filter(file =>
            file.type === 'image/jpeg' || file.type === 'image/png'
            );

            for (const file of validImages) {
                if (files.length < quantity) {
                    const uploaded = await uploadPhotoAction(file);
                    setFiles(prev => [...prev, uploaded]);
                }
            }
        }
    };
    const removeUploadedPhotoHandler = async (fileId:number)=>{
        setFiles(prev => prev.filter(f => f.id !== fileId));
        await deletePhotoAction(fileId);
    }
    


    // ** Renders
    const renderUploadedIamgesRender = files.map((file,index) =>{
        return (
            <div className={style.product_photo} key={file.name + index}>
                <img src={file.url} alt="product photo"/>
                <span onClick={()=>{removeUploadedPhotoHandler(file.id!)}}>
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
    useEffect(() => {
        if (onUpload) {
            const uploadedIds = files.map(f => f.id).filter((id): id is number => id !== undefined);
            onUpload(uploadedIds);
        }
    }, [files]);



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
