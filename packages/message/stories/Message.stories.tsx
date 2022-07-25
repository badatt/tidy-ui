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
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01071em;
  line-height: 1.43;
`;

export const basic = () => (
  <Container>
    <Message>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nostrum voluptatibus distinctio at sapiente
      ratione blanditiis cum quam fugit commodi odit, hic eius itaque exercitationem vitae voluptates modi accusamus
      eaque!
    </Message>
    <Message header={<p>aliquam cumque quibusdam aspernatur</p>}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum nesciunt in pariatur veniam eos ipsa,
      minus eius totam velit. Voluptate non aliquam ut. Quasi, aperiam eum! Velit, magni esse.
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

export const outlined = () => (
  <Container>
    <Message color="major" outlined>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat commodi sapiente eveniet necessitatibus,
      quos facilis libero sed ducimus repellendus delectus. Reprehenderit sapiente iure ratione enim dolorum
      necessitatibus rem maxime.
    </Message>
    <Message color="minor" outlined>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore sapiente exercitationem explicabo nemo in qui
      delectus ex dolore autem quo, aliquam nam debitis blanditiis possimus quia beatae pariatur et! Quia.
    </Message>
    <Message color="neutral" outlined>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos esse, iste odit nisi perspiciatis, animi recusandae
      ipsum distinctio magnam ipsa corrupti. Nemo tempore assumenda sint fugiat? Aperiam sed sint qui?
    </Message>
    <Message color="info" outlined>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti asperiores, quibusdam libero temporibus
      ab facilis ullam? Iure aspernatur libero vitae accusantium ex a, corporis ad quidem quos beatae eius?
    </Message>
    <Message color="success" outlined>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus quis dolores obcaecati illo velit qui
      possimus magnam! Ullam voluptatum quam officia vitae soluta asperiores beatae aut odit dolorem voluptatibus!
    </Message>
    <Message color="warning" outlined>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati quia neque facilis reiciendis cumque
      voluptatibus dolorum odio ut, eaque fuga consequuntur in assumenda, vel ab. Deserunt assumenda nesciunt sequi!
    </Message>
    <Message color="danger" outlined>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores eos quod, nobis recusandae nemo beatae
      fugiat incidunt illo voluptatibus ex aliquam sint quidem quisquam sed reiciendis neque cumque? Esse.
    </Message>
  </Container>
);

export const closable = () => (
  <Container>
    <Message closable>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit deleniti quod accusantium eligendi repellendus
      distinctio quibusdam explicabo sit neque quaerat, corporis, nulla iste itaque, voluptate est numquam! Odit, dolor
      ipsa!
    </Message>
  </Container>
);
