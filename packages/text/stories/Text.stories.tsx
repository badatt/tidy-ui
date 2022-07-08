import React from 'react';
import { styled } from '@tidy-ui/theme';
import { Text } from '@tidy-ui/text';

export default {
  component: Text,
  title: 'Text',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
    <Text as="body1">body1: The quick brown fox jumps over the lazy dog</Text>
    <Text as="body2">body2: The quick brown fox jumps over the lazy dog</Text>
    <Text as="p">p: The quick brown fox jumps over the lazy dog</Text>
    <Text as="span">span: The quick brown fox jumps over the lazy dog</Text>
    <Text as="caption">caption: The quick brown fox jumps over the lazy dog</Text>
    <Text as="code">code: The quick brown fox jumps over the lazy dog</Text>
    <Text as="hero">hero: The quick brown fox jumps over the lazy dog</Text>
    <Text>default text</Text>
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
