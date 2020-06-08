import React ,{ useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

interface Props {
    onFileUploaded: (file: File) => void
}

const MyDropzone: React.FC<Props> = ({ onFileUploaded }) => {
    const [selectedFile, setSelectedFile] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]

        const fileURL = URL.createObjectURL(file)

        setSelectedFile(fileURL)
        onFileUploaded(file)
    }, [onFileUploaded])
    const { getRootProps, getInputProps } = useDropzone({ 
        onDrop,
        accept: 'image/*'
    })

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
                {
                    selectedFile 
                    ? <img src={selectedFile} alt="Point thumbnail upload" />
                    : (
                        <p>
                            <FiUpload />
                            Imagem do estabelecimento
                        </p>
                    )
                }
        </div>
    )
}

export default MyDropzone