interface NewsInfoProps {
  category?: string;
  title: string;
  content: string;
}

const NewsInfo: React.FC<NewsInfoProps> = ({ category, title, content }) => {
  return (
    <div className='flex flex-col bg-white'>
      {category && <span>{category}</span>}
      <h2 className=''>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NewsInfo;
