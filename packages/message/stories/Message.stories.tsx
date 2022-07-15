import React from 'react';
import { styled } from '@tidy-ui/theme';

import { Message } from '../src';

export default {
  component: Message,
  title: 'Message',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const basic = () => (
  <Container>
    <Message>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nostrum voluptatibus distinctio at sapiente
      ratione blanditiis cum quam fugit commodi odit, hic eius itaque exercitationem vitae voluptates modi accusamus
      eaque!
    </Message>
    <Message outlined>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nostrum voluptatibus distinctio at sapiente
      ratione blanditiis cum quam fugit commodi odit, hic eius itaque exercitationem vitae voluptates modi accusamus
      eaque!
    </Message>
    <Message sharp>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus unde dolor itaque vol
    </Message>
    <Message noLabel>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique sed numquam veritatis minus
      perferendis, aliquam cumque quibusdam aspernatur non at velit voluptatem! Fuga dolores inventore labore, optio
      voluptas praesentium.
    </Message>
  </Container>
);

export const colors = () => (
  <Container>
    <Message color="major">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat commodi sapiente eveniet necessitatibus,
      quos facilis libero sed ducimus repellendus delectus. Reprehenderit sapiente iure ratione enim dolorum
      necessitatibus rem maxime.
    </Message>
    <Message color="minor">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sapiente exercitationem explicabo nemo in qui
      delectus ex dolore autem quo, aliquam nam debitis blanditiis possimus quia beatae pariatur et! Quia.
    </Message>
    <Message color="neutral">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos esse, iste odit nisi perspiciatis, animi recusandae
      ipsum distinctio magnam ipsa corrupti. Nemo tempore assumenda sint fugiat? Aperiam sed sint qui?
    </Message>
    <Message color="info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti asperiores, quibusdam libero temporibus
      ab facilis ullam? Iure aspernatur libero vitae accusantium ex a, corporis ad quidem quos beatae eius?
    </Message>
    <Message color="success">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus quis dolores obcaecati illo velit qui
      possimus magnam! Ullam voluptatum quam officia vitae soluta asperiores beatae aut odit dolorem voluptatibus!
    </Message>
    <Message color="warning">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati quia neque facilis reiciendis cumque
      voluptatibus dolorum odio ut, eaque fuga consequuntur in assumenda, vel ab. Deserunt assumenda nesciunt sequi!
    </Message>
    <Message color="danger">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores eos quod, nobis recusandae nemo beatae
      fugiat incidunt illo voluptatibus ex aliquam sint quidem quisquam sed reiciendis neque cumque? Esse.
    </Message>
  </Container>
);
