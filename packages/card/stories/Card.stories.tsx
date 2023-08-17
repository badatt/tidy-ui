import React from 'react';
import { FlexBox } from '../../flexbox/src';
import { Grid, GridItem } from '../../grid/src';
import { Card, CardHeader, CardBody, CardFooter } from '../src';
import { Tone } from '../../types/src';

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
      <CardHeader>
        <ContentHeader />
      </CardHeader>
      <CardBody>
        <ContentBody />
      </CardBody>
      <CardFooter>
        <ContentFooter />
      </CardFooter>
    </Card>
  </FlexBox>
);

export const sharp = () => (
  <FlexBox gap="1rem" nowrap>
    <Card isSharp>
      <ContentBody />
    </Card>
    <Card isSharp>
      <CardHeader>
        <ContentHeader />
      </CardHeader>
      <CardBody>
        <ContentBody />
      </CardBody>
      <CardFooter>
        <ContentFooter />
      </CardFooter>
    </Card>
  </FlexBox>
);

export const accents = () => (
  <FlexBox gap="1rem" fld="column">
    <Grid gap={16}>
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <GridItem key={i} xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card accent={Tone[v]}>
              <ContentBody />
            </Card>
          </GridItem>
        ))}
    </Grid>
    <Grid gap={16}>
      {Object.values(Tone)
        .filter((i) => !isNaN(Number(i)))
        .map((v, i) => (
          <GridItem key={i} xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card accent={Tone[v]} accentPosition="left">
              <CardHeader>
                <ContentHeader />
              </CardHeader>
              <CardBody>
                <ContentBody />
              </CardBody>
              <CardFooter>
                <ContentFooter />
              </CardFooter>
            </Card>
          </GridItem>
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
      <CardHeader href="https://google.com">
        <ContentHeader />
      </CardHeader>
      <CardBody>
        <ContentBody />
      </CardBody>
      <CardFooter>
        <ContentFooter />
      </CardFooter>
    </Card>
  </FlexBox>
);

export const divided = () => (
  <FlexBox gap="1rem" nowrap>
    <Card>
      <CardHeader isDivided>
        <ContentHeader />
      </CardHeader>
      <CardBody>
        <ContentBody />
      </CardBody>
      <CardFooter isDivided>
        <ContentFooter />
      </CardFooter>
    </Card>
    <Card isSharp>
      <CardHeader isDivided>
        <ContentHeader />
      </CardHeader>
      <CardBody>
        <ContentBody />
      </CardBody>
      <CardFooter isDivided>
        <ContentFooter />
      </CardFooter>
    </Card>
  </FlexBox>
);

export const customElement = () => (
  <FlexBox gap="1rem" nowrap>
    <Card ele={<FlexBox nowrap gap="0.5rem" fld="column" />}>
      <div>
        <ContentBody />
      </div>
      <div>
        <ContentBody />
      </div>
    </Card>
    <Card>
      <CardHeader>
        <ContentHeader />
      </CardHeader>
      <CardBody ele={<FlexBox nowrap gap="0.5rem" fld="column" />}>
        <div>
          <ContentBody />
        </div>
        <div>
          <ContentBody />
        </div>
      </CardBody>
      <CardFooter>
        <ContentFooter />
      </CardFooter>
    </Card>
  </FlexBox>
);
