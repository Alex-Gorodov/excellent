interface ItemProps {
  image: string;
  text: string;
}

export function CompanyItem({image, text}: ItemProps) {
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
    </div>
  )
}
