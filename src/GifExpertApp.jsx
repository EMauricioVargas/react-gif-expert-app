import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((currentCategories) => [...currentCategories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory}></AddCategory>

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category}></GifGrid>
        })}
      </ol>
    </>
  );
};
