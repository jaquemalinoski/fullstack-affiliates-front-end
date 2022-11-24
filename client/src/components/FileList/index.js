import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar"
import { MdCheckCircle, MdError } from 'react-icons/md'

import txt from '../../assets/txt.png'

import { Container, FileInfo, Preview } from './style'

const FileList = ({ files }) => (
    <Container>
        {files?.map(file => (
            <li key={file.id}>
                <FileInfo>
                    <img src={txt} alt="txt icon"/>
                    <Preview src={txt}>
                        <div>
                            <strong>{file.name}</strong>
                            <span>{file.readbleSize}</span>
                        </div>
                    </Preview>
                </FileInfo>

                <div className='progress'>
                    {!file.uploaded && ! file.error && (
                        <CircularProgressbar 
                        styles={{root: {width: 24}, path: {stroke: 'var(--stroke-color)'}}}
                        strokeWidth={10} value={file.progress}
                        />
                    )}

                    {file.uploaded && 
                        <>
                            <span className='success'>Success!</span>
                            <MdCheckCircle size={24} color='var(--drag-active)'/>
                        </>}
                    {file.error && <>
                        <span className='fail'>to large file!</span>
                        <MdError size={24} color='var(--drag-reject)'/>
                    </>}
                        
                </div>
            </li>
        ))}
    </Container>
)

export default FileList