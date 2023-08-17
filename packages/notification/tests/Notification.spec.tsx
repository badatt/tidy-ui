/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Icon, orchidDark, orchidLight, TidyUiProvider } from '../../commons/src';
import { Notification } from '../src';
import { Text } from '../../text/src';
import { Tone } from '../../types/src';
import { FlexBox } from '../../flexbox/src';
import { useToaster } from '../../toaster/src';
import { act } from 'react-dom/test-utils';

const NotificationText = () => (
  <Text.body1>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed animi dicta, dolores, facilis eaque dolore maxime
    corrupti alias inventore minus dolorum ea accusamus nihil! Harum commodi officiis corporis veritatis autem. Lorem
    ipsum dolor sit, amet consectetur adipisicing elit. Commodi odit voluptate earum architecto soluta cupiditate
    necessitatibus laudantium sapiente expedita doloremque, veniam unde sit eligendi omnis similique natus quasi!
    Sapiente, ullam.
  </Text.body1>
);

export const ToasterWrapper = () => {
  const { toaster } = useToaster();
  const ele = (
    <Notification>
      <NotificationText />
    </Notification>
  );

  return (
    <>
      <button onClick={() => toaster.push(ele)}>Add</button>
      <button onClick={() => toaster.clear()}>Clear</button>
    </>
  );
};

describe('Notification', () => {
  it('Basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification>
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Dark mode basic render', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        <Notification tone="success">
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Sharp', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification isSharp>
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tones', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Notification key={v} tone={Tone[v]}>
              <NotificationText />
            </Notification>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Filled', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Notification key={v} tone={Tone[v]} isFilled>
              <NotificationText />
            </Notification>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Filled dark', () => {
    const tree = render(
      <TidyUiProvider theme={orchidDark}>
        {Object.keys(Tone)
          .filter((i) => !isNaN(Number(i)))
          .map((v, i) => (
            <Notification key={v} tone={Tone[v]} isFilled>
              <NotificationText />
            </Notification>
          ))}
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Non closable', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification closable={false}>
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Custom label', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification tone="success" label={<Text.h4>Hello there !</Text.h4>}>
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom Icon', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification icon={<Icon.Add />} tone="success">
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Without label', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification hasLabel={false}>
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Without label but tone', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification hasLabel={false} tone="success">
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom margin', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification margin="0 0 1rem 0">
          <NotificationText />
        </Notification>
        <Notification>
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Custom element', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification ele={<FlexBox nowrap />}>
          <NotificationText />
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Onclose action', () => {
    const mockedCallBack = jest.fn();
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification onClose={mockedCallBack}>
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    act(() => {
      const closeButton = screen.getByRole('button', { hidden: true });
      fireEvent.click(closeButton);
    });
    expect(mockedCallBack).toBeCalled();
  });
  it('Onclose empty action', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <Notification onClose={undefined}>
          <NotificationText />
        </Notification>
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
    act(() => {
      const closeButton = screen.getByRole('button', { hidden: true });
      fireEvent.click(closeButton);
    });
  });
  it('With toaster', () => {
    const tree = render(
      <TidyUiProvider theme={orchidLight}>
        <ToasterWrapper />
      </TidyUiProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
