import React from 'react';

import { Card, CardBody, CardFooter, CardHeader } from '../src';

export default {
  component: Card,
  title: 'Card',
};

export const basic = () => (
  <Card>
    <CardHeader separator>Lorem ipsum dolor sit, amet consectetur adipisicing.</CardHeader>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo cum, odio neque, possimus, asperiores minima quos
      eligendi vel aperiam beatae aliquid recusandae corporis reprehenderit! Aliquid, quo! Facere error ex sunt? Animi
      excepturi dolores eveniet quod vero rem sunt! Beatae velit harum iste veritatis eaque laborum qui dolorum ratione
      exercitationem placeat voluptatem, repellendus, et autem iusto vero deserunt rerum tempora ab! Neque aspernatur
      eos repudiandae eum debitis, corrupti sapiente labore ratione optio amet maxime nesciunt iusto quis cupiditate in?
      Dolorem hic rerum aut! Possimus doloribus cupiditate molestiae molestias voluptates. Obcaecati, aliquam.
    </CardBody>
    <CardFooter separator>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.</CardFooter>
  </Card>
);
