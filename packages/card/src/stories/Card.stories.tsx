import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '..';

export default {
  component: Card,
  title: 'Card',
};

export const basic = () => (
  <Card>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quas possimus nihil delectus ad placeat a
    laborum neque id beatae culpa ducimus corrupti, eos quam optio quis pariatur molestias amet. Labore, earum vitae
    eius nemo cum optio temporibus inventore quaerat eum id nam consequuntur non odio sequi blanditiis mollitia odit in
    laborum repellat dignissimos enim? Repudiandae tempore repellat maxime illum! Architecto voluptatum magnam tenetur!
    Quis fugit reiciendis incidunt quisquam, odit voluptatibus blanditiis cupiditate ea repellat praesentium maiores
    sapiente, hic voluptas at dignissimos deserunt repellendus ratione quidem aspernatur, facere saepe accusamus!
  </Card>
);

export const headerAndFooter = () => (
  <Card>
    <CardHeader separated>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda.</CardHeader>
    <CardBody>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quas possimus nihil delectus ad placeat a
      laborum neque id beatae culpa ducimus corrupti, eos quam optio quis pariatur molestias amet. Labore, earum vitae
      eius nemo cum optio temporibus inventore quaerat eum id nam consequuntur non odio sequi blanditiis mollitia odit
      in laborum repellat dignissimos enim? Repudiandae tempore repellat maxime illum! Architecto voluptatum magnam
      tenetur! Quis fugit reiciendis incidunt quisquam, odit voluptatibus blanditiis cupiditate ea repellat praesentium
      maiores sapiente, hic voluptas at dignissimos deserunt repellendus ratione quidem aspernatur, facere saepe
      accusamus!
    </CardBody>
    <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
  </Card>
);

export const accents = () => (
  <Card>
    <CardHeader separated>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda.</CardHeader>
    <CardBody>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quas possimus nihil delectus ad placeat a
      laborum neque id beatae culpa ducimus corrupti, eos quam optio quis pariatur molestias amet. Labore, earum vitae
      eius nemo cum optio temporibus inventore quaerat eum id nam consequuntur non odio sequi blanditiis mollitia odit
      in laborum repellat dignissimos enim? Repudiandae tempore repellat maxime illum! Architecto voluptatum magnam
      tenetur! Quis fugit reiciendis incidunt quisquam, odit voluptatibus blanditiis cupiditate ea repellat praesentium
      maiores sapiente, hic voluptas at dignissimos deserunt repellendus ratione quidem aspernatur, facere saepe
      accusamus!
    </CardBody>
    <CardFooter separated>Lorem ipsum dolor sit amet consectetur.</CardFooter>
  </Card>
);
