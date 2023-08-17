/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { color, hsla, Icon, orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Girth } from '../../types/src';
import { Avatar, AvatarBadge, AvatarGroup } from '../src';

describe('Avatar', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Avatar />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Avatar />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Girths', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Girth)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Avatar girth={Girth[v]} key={v} />
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Name', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Avatar name="Lorem Ipsum Dolor" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Name single word', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Avatar name="Lorem" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Icon', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Avatar icon={<Icon.RotatingCircle />} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Accent', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Avatar accent={hsla(color.green[600])} />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Badge', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Avatar src="https://bit.ly/sage-adebayo">
          <AvatarBadge tone={hsla(color.green[600])} />
        </Avatar>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Loaded state check', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Avatar src="https://bit.ly/sage-adebayo" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const img = screen.queryByRole('img', { hidden: true });
    expect(img).not.toBeNull();
    fireEvent.load(img!);
  });

  it('Dark mode loaded state check', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Avatar src="https://bit.ly/sage-adebayo" />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    const img = screen.queryByRole('img', { hidden: true });
    expect(img).not.toBeNull();
    fireEvent.load(img!);
  });

  it('Badge accent', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Avatar src="https://bit.ly/sage-adebayo">
          <AvatarBadge tone={hsla(color.green[600])} accent={hsla(color.green[600])} />
        </Avatar>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Group', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <AvatarGroup max={2}>
          <Avatar src="https://bit.ly/sage-adebayo">
            <AvatarBadge tone={hsla(color.green[600])} />
          </Avatar>
          <Avatar src="https://bit.ly/ryan-florence" />
          <Avatar />
        </AvatarGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Group with 0 max', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <AvatarGroup max={0}>
          <Avatar src="https://bit.ly/sage-adebayo">
            <AvatarBadge tone={hsla(color.green[600])} />
          </Avatar>
          <Avatar src="https://bit.ly/ryan-florence" />
        </AvatarGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Group with more than 10 and less than 100 Avatars', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <AvatarGroup max={3}>
          <Avatar src="https://bit.ly/sage-adebayo">
            <AvatarBadge tone={hsla(color.green[600])} />
          </Avatar>
          <Avatar src="https://bit.ly/ryan-florence" />
          {[...Array(11)].map((c, i) => (
            <Avatar key={i} />
          ))}
        </AvatarGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Group with more than 100 and less than 1000 Avatars', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <AvatarGroup max={3}>
          <Avatar src="https://bit.ly/sage-adebayo">
            <AvatarBadge tone={hsla(color.green[600])} />
          </Avatar>
          <Avatar src="https://bit.ly/ryan-florence" />
          {[...Array(101)].map((c, i) => (
            <Avatar key={i} />
          ))}
        </AvatarGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Group with more than 1000 and less than 1000 Avatars', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <AvatarGroup max={3}>
          <Avatar src="https://bit.ly/sage-adebayo">
            <AvatarBadge tone={hsla(color.green[600])} />
          </Avatar>
          <Avatar src="https://bit.ly/ryan-florence" />
          {[...Array(1001)].map((c, i) => (
            <Avatar key={i} />
          ))}
        </AvatarGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Group with more than 10000 Avatars', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <AvatarGroup max={3}>
          <Avatar src="https://bit.ly/sage-adebayo">
            <AvatarBadge tone={hsla(color.green[600])} />
          </Avatar>
          {[...Array(10008)].map((c, i) => (
            <Avatar key={i} />
          ))}
        </AvatarGroup>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
