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
  gap: 16px;
`;

export const types = () => (
  <Container>
    <Text is="h1">h1: The quick brown fox jumps over the lazy dog</Text>
    <Text is="h2">h2: The quick brown fox jumps over the lazy dog</Text>
    <Text is="h3">h3: The quick brown fox jumps over the lazy dog</Text>
    <Text is="h4">h4: The quick brown fox jumps over the lazy dog</Text>
    <Text is="h5">h5: The quick brown fox jumps over the lazy dog</Text>
    <Text is="h6">h6: The quick brown fox jumps over the lazy dog</Text>
    <Text is="title1">title1: The quick brown fox jumps over the lazy dog</Text>
    <Text is="subtitle1">subtitle1: The quick brown fox jumps over the lazy dog</Text>
    <Text is="title2">title2: The quick brown fox jumps over the lazy dog</Text>
    <Text is="subtitle2">subtitle2: The quick brown fox jumps over the lazy dog</Text>
    <Text is="body1">
      body1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora voluptatum impedit corrupti? In, suscipit
      libero? Assumenda ea beatae veniam iste obcaecati, atque labore dolores facere ad, id repellendus quidem
      distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis explicabo vitae dignissimos
      commodi. Eos maxime reprehenderit consectetur voluptas corrupti ipsum magnam nam asperiores! Dolorem sit
      doloremque quaerat odit et! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus adipisci
      incidunt magni quasi deserunt vitae quae? Ipsum earum doloribus eius, cupiditate quae fugit voluptatibus rerum,
      fuga, ipsam repudiandae itaque est!
    </Text>
    <Text is="body2">
      body2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa dignissimos aut ducimus, dicta eaque
      mollitia quo voluptatibus suscipit illum tempora quos quas at impedit possimus cupiditate. Fuga, hic aliquam.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quo omnis, voluptatum debitis, quos a vitae delectus
      facere illo perferendis sunt reprehenderit minus quaerat adipisci ab possimus eaque non explicabo!
    </Text>
    <Text is="p">
      p: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste asperiores commodi, esse velit, totam quis sunt
      molestiae quisquam architecto tempora fugit dignissimos, minus at corporis suscipit placeat harum reiciendis
      incidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus officia porro voluptatum dolorum
      fugiat totam, et enim alias id ipsa praesentium ducimus dolor molestias. Itaque quisquam sint odit quis
      doloremque.
    </Text>
    <Text is="span">span: The quick brown fox jumps over the lazy dog</Text>
    <Text is="caption">caption: The quick brown fox jumps over the lazy dog</Text>
    <Text is="code">
      code: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur officiis minima in, laborum
      sapiente beatae dicta est quas numquam, nostrum quaerat libero quasi, voluptatem placeat commodi non. Asperiores,
      sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio minima non facere natus reprehenderit,
      in excepturi ad beatae facilis, at, recusandae consectetur eius a nisi magnam dicta similique quae quaerat!
    </Text>
    <Text is="hero">hero: The quick brown fox jumps over the lazy dog</Text>
    <Text>
      default Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt corrupti totam eaque, explicabo
      eos quae inventore id earum nobis non iste dicta, consequuntur neque nemo tenetur unde officiis. Temporibus? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quae quaerat ipsa qui quos fugiat corrupti
      consequatur cumque accusantium esse, impedit libero unde, illo numquam. Eos velit labore impedit consequatur.
    </Text>
  </Container>
);

export const colorVariants = () => (
  <Container>
    <Text clr="major">major: The quick brown fox jumps over the lazy dog</Text>
    <Text clr="minor">minor: The quick brown fox jumps over the lazy dog</Text>
    <Text clr="neutral">neutral: The quick brown fox jumps over the lazy dog</Text>
    <Text clr="info">info: The quick brown fox jumps over the lazy dog</Text>
    <Text clr="success">success: The quick brown fox jumps over the lazy dog</Text>
    <Text clr="warning">warning: The quick brown fox jumps over the lazy dog</Text>
    <Text clr="danger">danger: The quick brown fox jumps over the lazy dog</Text>
  </Container>
);

export const others = () => (
  <Container>
    <Text is="subtitle2" href="https://google.com">
      Linked: The quick brown fox jumps over the lazy dog
    </Text>
    <Text bld>bold: The quick brown fox jumps over the lazy dog</Text>
    <Text udl>underlined: The quick brown fox jumps over the lazy dog</Text>
    <Text itl>italicized: The quick brown fox jumps over the lazy dog</Text>
    <Text uc>uppercase: The quick brown fox jumps over the lazy dog</Text>
    <Text lc>lowercase: The quick brown fox jumps over the lazy dog</Text>
    <Text cc>capitalized: The quick brown fox jumps over the lazy dog</Text>
    <Text dsb>disabled: The quick brown fox jumps over the lazy dog</Text>
    <Text exd>stretched: The quick brown fox jumps over the lazy dog</Text>
    <Text ctr>centered: The quick brown fox jumps over the lazy dog</Text>
    <div style={{ width: 200 }}>
      <Text tnc>truncated: The quick brown fox jumps over the lazy dog</Text>
    </div>
  </Container>
);
