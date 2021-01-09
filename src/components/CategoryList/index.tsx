import React from 'react';
import CategoryItem, { ItemProps } from '../CategoryItem';
import data from './data';

import { List } from './styles';

const CategoryList: React.FC<ItemProps> = () => {
  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item}/>
      ))}
    </List>
  );
};

export default CategoryList;
