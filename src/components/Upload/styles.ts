import styled, { css } from 'styled-components';

interface DropzoneProps {
  isDragActive: boolean;
  isDragReject: boolean;
  className?: string;
}

const dragActive = css `
  background: #B8ECF5;
`

const dragReject = css `
  background: #FBBCBC;
`

export const DropContainer = styled.div.attrs((props: DropzoneProps) =>({
  className: props.className,
  isDragActive: props.isDragActive,
  isDragReject: props.isDragReject,
}))<DropzoneProps> `
  width: 40%;
  margin: -4.5rem 2rem 9rem 4rem;
  border-radius: 1rem;
  background: #f0f2f8;
  cursor: pointer;

  transition: height 0.2s ease;

  ${ props => props.isDragActive && dragActive }
  ${ props => props.isDragReject && dragReject }

  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;

  h1 {
    margin-top:.6rem;
    font: 500 1.4rem Roboto;
    opacity:.4
  }

  svg {
    opacity:.4
  }
`;

export const UploadMessage = styled.p `
  text-align:center;
  line-height: 3rem;
  font-size:1.3rem;
  opacity:.4
`