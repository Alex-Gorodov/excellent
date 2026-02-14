import { ReactComponent as Message } from "../../assets/img/icons/mail.svg"

interface ItemProps {
  image: string;
  text: string;
  comment?: string;
}

export function CustomerItem({image, text, comment}: ItemProps) {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    }}>
      <img src={image} alt={text} width={40} height={40}/>
      <span style={{
        fontSize: '16px',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        overflowWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
          {text}
      </span>
      {
        comment
        &&
        <Message title={comment}/>
      }
    </div>
  )
}
