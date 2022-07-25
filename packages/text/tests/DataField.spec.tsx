import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidLight } from '@tidy-ui/theme';
import { CheckCircleIcon, EyeIcon, GearIcon } from '@tidy-ui/icons';
import { DataField } from '../src';

describe('Text', () => {
  test('Default render', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('major accent value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField label="major(default) accent" value="major accent value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('minor accent value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField accent="minor" label="minor accent" value="minor accent value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('success accent value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField accent="success" label="success accent" value="success accent value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('info accent value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField accent="info" label="info accent" value="info accent value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('warning accent value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField accent="warning" label="warning accent" value="warning accent value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('danger accent value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField accent="danger" label="danger accent" value="danger accent value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('neutral accent value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField accent="neutral" label="neutral accent" value="neutral accent value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('major color value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField color="major" accent="major" label="major(default) accent" value="major color value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('minor color value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField color="minor" accent="minor" label="minor accent" value="minor color value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('success color value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField color="success" accent="success" label="success accent" value="success color value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('info color value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField color="info" accent="info" label="info accent" value="info color value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('warning color value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField color="warning" accent="warning" label="warning accent" value="warning color value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('danger color value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField color="danger" accent="danger" label="danger accent" value="danger color value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('default(neutral) color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField label="neutral accent" accent="neutral" value="default(neutral) color" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('settings icon value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField icon={<GearIcon />} label="settings icon" value="settings icon value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('major accent value with icon', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField icon={<EyeIcon />} label="settings icon" accent="major" value="major accent value" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('success color accent and value with icon', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField
            icon={<CheckCircleIcon />}
            label="success icon"
            accent="success"
            color="success"
            value="success color value"
          />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('bold value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField b label="neutral accent" value="default(neutral) color" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('underlined value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField u label="neutral accent" value="default(neutral) color" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('italicized value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField i label="neutral accent" value="default(neutral) color" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disable value', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <DataField disable label="neutral accent" value="default(neutral) color" />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
