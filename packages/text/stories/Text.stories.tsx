import React from 'react';
import { styled } from '@tidy-ui/theme';
import { Text } from '../src';

export default {
  component: Text,
  title: 'Components/Text/Text',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01071em;
  line-height: 1.43;
`;

export const variants = () => (
  <Container>
    <Text as="h1">h1: The quick brown fox jumps over the lazy dog</Text>
    <Text as="h2">h2: The quick brown fox jumps over the lazy dog</Text>
    <Text as="h3">h3: The quick brown fox jumps over the lazy dog</Text>
    <Text as="h4">h4: The quick brown fox jumps over the lazy dog</Text>
    <Text as="h5">h5: The quick brown fox jumps over the lazy dog</Text>
    <Text as="h6">h6: The quick brown fox jumps over the lazy dog</Text>
    <Text as="title1">title1: The quick brown fox jumps over the lazy dog</Text>
    <Text as="subtitle1">subtitle1: The quick brown fox jumps over the lazy dog</Text>
    <Text as="title2">title2: The quick brown fox jumps over the lazy dog</Text>
    <Text as="subtitle2">subtitle2: The quick brown fox jumps over the lazy dog</Text>
    <Text as="body1">
      body1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora voluptatum impedit corrupti? In, suscipit
      libero? Assumenda ea beatae veniam iste obcaecati, atque labore dolores facere ad, id repellendus quidem
      distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis explicabo vitae dignissimos
      commodi. Eos maxime reprehenderit consectetur voluptas corrupti ipsum magnam nam asperiores! Dolorem sit
      doloremque quaerat odit et! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus adipisci
      incidunt magni quasi deserunt vitae quae? Ipsum earum doloribus eius, cupiditate quae fugit voluptatibus rerum,
      fuga, ipsam repudiandae itaque est!
    </Text>
    <Text as="body2">
      body2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa dignissimos aut ducimus, dicta eaque
      mollitia quo voluptatibus suscipit illum tempora quos quas at impedit possimus cupiditate. Fuga, hic aliquam.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quo omnis, voluptatum debitis, quos a vitae delectus
      facere illo perferendis sunt reprehenderit minus quaerat adipisci ab possimus eaque non explicabo!
    </Text>
    <Text as="p">
      p: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste asperiores commodi, esse velit, totam quis sunt
      molestiae quisquam architecto tempora fugit dignissimos, minus at corporis suscipit placeat harum reiciendis
      incidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus officia porro voluptatum dolorum
      fugiat totam, et enim alias id ipsa praesentium ducimus dolor molestias. Itaque quisquam sint odit quis
      doloremque.
    </Text>
    <Text as="span">span: The quick brown fox jumps over the lazy dog</Text>
    <Text as="caption">caption: The quick brown fox jumps over the lazy dog</Text>
    <Text as="code">
      code: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur officiis minima in, laborum
      sapiente beatae dicta est quas numquam, nostrum quaerat libero quasi, voluptatem placeat commodi non. Asperiores,
      sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio minima non facere natus reprehenderit,
      in excepturi ad beatae facilis, at, recusandae consectetur eius a nisi magnam dicta similique quae quaerat!
    </Text>
    <Text as="hero">hero: The quick brown fox jumps over the lazy dog</Text>
    <Text>
      default Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt corrupti totam eaque, explicabo
      eos quae inventore id earum nobis non iste dicta, consequuntur neque nemo tenetur unde officiis. Temporibus? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quae quaerat ipsa qui quos fugiat corrupti
      consequatur cumque accusantium esse, impedit libero unde, illo numquam. Eos velit labore impedit consequatur.
    </Text>
  </Container>
);

export const colors = () => (
  <Container>
    <Text as="subtitle2" color="major">
      major: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="body2" color="major">
      major: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="subtitle2" color="minor">
      minor: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="body2" color="minor">
      minor: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="subtitle2" color="info">
      info: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="body2" color="info">
      info: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="subtitle2" color="neutral">
      neutral: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="body2" color="neutral">
      neutral: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="subtitle2" color="success">
      success: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="body2" color="success">
      success: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="subtitle2" color="warning">
      warning: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="body2" color="warning">
      warning: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="subtitle2" color="danger">
      danger: The quick brown fox jumps over the lazy dog
    </Text>
    <Text as="body2" color="danger">
      danger: The quick brown fox jumps over the lazy dog
    </Text>
  </Container>
);

export const transforms = () => (
  <Container>
    <Text b>bold: The quick brown fox jumps over the lazy dog</Text>
    <Text u>underlined: The quick brown fox jumps over the lazy dog</Text>
    <Text i>italicized: The quick brown fox jumps over the lazy dog</Text>
    <Text uc>uppercase: The quick brown fox jumps over the lazy dog</Text>
    <Text lc>lowercase: The quick brown fox jumps over the lazy dog</Text>
    <Text cc>capitalized: The quick brown fox jumps over the lazy dog</Text>
    <Text disable>disabled: The quick brown fox jumps over the lazy dog</Text>
    <Text stretch>stretched: The quick brown fox jumps over the lazy dog</Text>
    <Text center>centered: The quick brown fox jumps over the lazy dog</Text>
    <div style={{ width: 200 }}>
      <Text truncate>truncated: The quick brown fox jumps over the lazy dog</Text>
    </div>
  </Container>
);
