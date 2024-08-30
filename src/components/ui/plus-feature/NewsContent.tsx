import NewsInfo from './NewsInfo';

const newsCards = [
  {
    title: 'Wondrous Weaves',
    content: "Philippine brands' take on weaving indigenous materials",
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/558d33b690a715513f7c85d12466ac2e57859cf3b5d17922550a3ed3426c3e0b?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
  },
  {
    title:
      'Philippine Pavilion Wows At Maison&Objet 2024, Takes Home USD 1.6M In Sales',
    content: '',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/558d33b690a715513f7c85d12466ac2e57859cf3b5d17922550a3ed3426c3e0b?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
  },
  {
    title: 'Craft With Flair: Where Whimsy Meets The Art Of Craft',
    content: 'Infusing a touch of whimsical charms of...',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/558d33b690a715513f7c85d12466ac2e57859cf3b5d17922550a3ed3426c3e0b?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
  },
  {
    title: 'Craft With Flair: Where Whimsy Meets The Art Of Craft',
    content: 'Infusing a touch of whimsical charms of...',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/558d33b690a715513f7c85d12466ac2e57859cf3b5d17922550a3ed3426c3e0b?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
  },
];

const NewsContent = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <div className='flex border border-black flex-1'>
          <div className='w-1/3'>
            <img
              src={newsCards[0].image}
              alt='News image'
              className='object-cover  w-full aspect-[1.09] '
            />
          </div>
          <div className='w-2/3 p-4'>
            <NewsInfo
              title={newsCards[0].title}
              content={newsCards[0].content}
            />
          </div>
        </div>
        <div className='flex border border-black w-1/3'>
          <div className='w-1/3'>
            <img
              src={newsCards[0].image}
              alt='News image'
              className='object-cover w-full aspect-[1.09] '
            />
          </div>
          <div className='w-2/3 p-4'>
            <NewsInfo
              title={newsCards[1].title}
              content={newsCards[1].content}
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {newsCards.slice(1).map((card, index) => (
          <div key={index} className='flex border border-black'>
            <div className='w-1/3'>
              <img
                src={card.image}
                alt={`News image ${index + 2}`}
                className='object-cover w-full aspect-[1.09]'
              />
            </div>
            <div className='w-2/3 p-4'>
              <NewsInfo title={card.title} content={card.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsContent;
