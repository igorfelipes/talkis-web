import React from 'react';
import Dropzone from 'react-dropzone';

// import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { IoMdCloudUpload } from "react-icons/io";
import { RiFileForbidFill } from "react-icons/ri";

import { DropContainer, UploadMessage } from './styles';


interface UploadProps{
  // label: string;
  onUpload: any;
}

const Upload: React.FC<UploadProps> = ({ onUpload, ...rest }) => {

  const renderDragMessage = (isDragActive: boolean, isDragReject:boolean) => {
    if(!isDragActive){
      return (
        <>
          {/* <FaCloudUploadAlt size={90} /> */}
          <IoMdCloudUpload size={90}/>
          <h1>ARRASTE E SOLTE</h1>
          <UploadMessage>
            suas fotos ou vídeos, ou <strong><u>selecione</u></strong>
          </UploadMessage>
        </>
      )
    }
    if(isDragReject){
      return (
        <>
        {/* <FaCloudUploadAlt size={90} /> */}
        <RiFileForbidFill size={90}/>
        <UploadMessage>
          Arquivo não suportado
        </UploadMessage>
      </>
      )
    }

    return (
      <>
        {/* <FaCloudUploadAlt size={90} /> */}
        <FaArrowUp size={50}/>
        <UploadMessage>
          Solte os arquivos aqui
        </UploadMessage>
    </>
    )
  };
  
  return (
    <Dropzone accept="image/*, video/* " onDropAccepted={onUpload}>
      { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          { ...getRootProps({ className: 'dropzone' })}
          isDragActive={isDragActive}
          isDragReject={isDragReject}

        >
           <input {...getInputProps()}/>
           {renderDragMessage(isDragActive, isDragReject)}
         </DropContainer> 
      )}
    </Dropzone>
  );
}

export default Upload;