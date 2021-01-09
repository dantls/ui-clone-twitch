import React from 'react';
import CategoryItem from '../CategoryItem';
import data from './data';

import { List } from './styles';

const CategoryList: React.FC = () => {
  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item}/>
      ))}
    </List>
  );
};

export default CategoryList;
