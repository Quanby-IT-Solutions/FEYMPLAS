import React from 'react';
import StoriesCategoryCard from './stories-CategoryCard';

interface CategoryData {
  title: string;
  imageSrc: string;
  iconSrc: string;
}

const categories: CategoryData[] = [
  { title: "Design\nFocus", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/672db1499a454c12a784138d0d2de2b3bb567f53c0a90b2d5c878e0ceee3238f?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6600b485fe509e41fc22d0b2c3fb6b1596cfd15e7fa4abb845f4e1d14c122c67?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" },
  { title: "Behind the\nBrand", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d0e37dd5a9282ef9f55aa5dd73cba5e724c5ad7cb09be32f138134b092b0eb5?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a676bef07e6595378422e403428a2278dc79d4117da79d09dd7058c7affbbb00?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" },
  { title: "Artisan\nCorner", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff7d8e9127f1dc8e29f4206dff8cfe81df0c4032a3f5dc92deb9d2144896c106?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/08644553212e42b8205879dcefaf2e2472cf7b379b009e603ab04cdbf9d78861?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" },
  { title: "Material\nMatters", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a507545f1ff4328a16a7fd393d3da855f90bd389ef897681c2c966ba117ac26?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d51f7e5b12de8d340823fdde4e354bc4859fc7bbfeb99eeb6bae4b5e195d1359?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" },
  { title: "Industry\nNews", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4c6e246e29e096a9bc3314eede1726ed9cd7e4d94a8293a210937a629e0e4?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/176a666547a7e5d2e13b02c9829d03af76e53e5fd6937230ab95c0c2495d9c61?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" },
];

const StoriesCategoryGrid: React.FC = () => {
  return (
    <section className="flex flex-col mt-32 max-w-full w-[1107px] max-md:mt-10">
      <div className="flex flex-wrap gap-5 max-md:flex-col">
        {categories.map((category, index) => (
          <StoriesCategoryCard key={index} {...category} />
        ))}
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cef659caf971ab21229a0bbd06ca646b8f0e0ab7ebc654f2442eda9116e768ea?placeholderIfAbsent=true&apiKey=f35c25b17acb406083beeda46a28c843" alt="" className="object-contain grow w-full aspect-[1.34] max-md:mt-7" />
        </div>
      </div>
    </section>
  );
};

export default StoriesCategoryGrid;