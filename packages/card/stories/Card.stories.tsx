import React from 'react';
import { FlexBox } from '../../flexbox/src';
import { Grid } from '../../grid/src';
import { Card } from '../src';
import { Tone } from '../../commons/src';

export default {
  component: Card,
  title: 'Presentation/Card',
};

const ContentHeader = () => <>Lorem ipsum dolor sit.</>;
const ContentBody = () => (
  <>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et totam eius ducimus unde voluptatibus asperiores fuga
    accusantium voluptates non nam sit beatae, modi quas animi autem aliquid. Exercitationem, veniam sapiente!
  </>
);
const ContentFooter = () => <>Lorem ipsum dolor sit amet consectetur.</>;

export const basic = () => (
  <FlexBox gap="1rem" nowrap>
    <Card>
      <ContentBody />
    </Card>
    <Card>
      <Card.Header>
        <ContentHeader />
      </Card.Header>
      <Card.Body>
        <ContentBody />
      </Card.Body>
      <Card.Footer>
        <ContentFooter />
      </Card.Footer>
    </Card>
  </FlexBox>
);

export const sharp = () => (
  <FlexBox gap="1rem" nowrap>
    <Card sharp>
      <ContentBody />
    </Card>
    <Card sharp>
      <Card.Header>
        <ContentHeader />
      </Card.Header>
      <Card.Body>
        <ContentBody />
      </Card.Body>
      <Card.Footer>
        <ContentFooter />
      </Card.Footer>
    </Card>
  </FlexBox>
);

export const accents = () => (
  <FlexBox gap="1rem" fld="column">
    <Grid gap={16}>
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Grid.Item key={i} xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card accent={Tone[v]}>
              <ContentBody />
            </Card>
          </Grid.Item>
        ))}
    </Grid>
    <Grid gap={16}>
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <Grid.Item key={i} xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card accent={Tone[v]} accentPosition="left">
              <Card.Header>
                <ContentHeader />
              </Card.Header>
              <Card.Body>
                <ContentBody />
              </Card.Body>
              <Card.Footer>
                <ContentFooter />
              </Card.Footer>
            </Card>
          </Grid.Item>
        ))}
    </Grid>
  </FlexBox>
);

export const linked = () => (
  <FlexBox gap="1rem" nowrap>
    <Card href="https://google.com">
      <ContentBody />
    </Card>
    <Card>
      <Card.Header href="https://google.com">
        <ContentHeader />
      </Card.Header>
      <Card.Body>
        <ContentBody />
      </Card.Body>
      <Card.Footer>
        <ContentFooter />
      </Card.Footer>
    </Card>
  </FlexBox>
);

export const divided = () => (
  <FlexBox gap="1rem" nowrap>
    <Card>
      <Card.Header divided>
        <ContentHeader />
      </Card.Header>
      <Card.Body>
        <ContentBody />
      </Card.Body>
      <Card.Footer divided>
        <ContentFooter />
      </Card.Footer>
    </Card>
    <Card sharp>
      <Card.Header divided>
        <ContentHeader />
      </Card.Header>
      <Card.Body>
        <ContentBody />
      </Card.Body>
      <Card.Footer divided>
        <ContentFooter />
      </Card.Footer>
    </Card>
  </FlexBox>
);

export const customElement = () => (
  <FlexBox gap="1rem" nowrap>
    <Card ele={<FlexBox nowrap gap="0.5rem" />}>
      <ContentBody />
      <ContentBody />
    </Card>
    <Card>
      <Card.Header>
        <ContentHeader />
      </Card.Header>
      <Card.Body ele={<FlexBox nowrap gap="0.5rem" />}>
        <ContentBody />
        <ContentBody />
      </Card.Body>
      <Card.Footer>
        <ContentFooter />
      </Card.Footer>
    </Card>
  </FlexBox>
);

export const customDimensions = () => (
  <FlexBox gap="1rem" nowrap>
    <Card height="9rem">
      <ContentBody />
    </Card>
    <Card height="15rem">
      <Card.Header>
        <ContentHeader />
      </Card.Header>
      <Card.Body>
        <ContentBody />
      </Card.Body>
      <Card.Footer>
        <ContentFooter />
      </Card.Footer>
    </Card>
  </FlexBox>
);
