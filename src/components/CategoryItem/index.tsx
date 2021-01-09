import React from 'react';
import data from '../CategoryList/data';

import { Container,
  CategoryImage,
  CategoryName,
  RedCircle,
  Info,
  CategoryStatus,
} from './styles';

export interface ItemProps {
  item: typeof data[0];
}

const CategoryItem: React.FC<ItemProps> = ({item}) => {
  return (
    <Container>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </Container>
  );
};

export default CategoryItem;
