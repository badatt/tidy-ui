/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { TTone } from '@tidy-ui/types';
import { Card } from '../src';

const colors = ['major', 'minor', 'neutral', 'info', 'success', 'warning', 'danger'];

describe('Card', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Card>
          <Card.Header>Lorem ipsum dolor sit amet consectetur.</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
            molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
            Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
            quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
            obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
            obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
            distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
            laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi laudantium
            tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
          </Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet.</Card.Footer>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark mode', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Card>
          <Card.Header href="https://google.com">Lorem ipsum dolor sit amet consectetur.</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
            molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
            Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
            quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
            obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
            obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
            distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
            laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi laudantium
            tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
          </Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet.</Card.Footer>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Card with sharp corners', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Card sharp>
          <Card.Header>Lorem ipsum dolor sit amet consectetur.</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
            molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
            Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
            quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
            obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
            obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
            distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
            laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi laudantium
            tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
          </Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet.</Card.Footer>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('card with link', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Card href="https://google.com">
          <Card.Header>Lorem ipsum dolor sit amet consectetur.</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
            molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
            Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
            quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
            obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
            obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
            distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
            laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi laudantium
            tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
          </Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet.</Card.Footer>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Card with accent variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {colors.map((c) => (
          <Card accent={c as TTone} key={c}>
            <Card.Header href="https://google.com">Lorem ipsum dolor sit amet.</Card.Header>
            <Card.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
              molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
              praesentium repudiandae.
            </Card.Body>
            <Card.Footer>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
          </Card>
        ))}
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Card divided', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Card>
          <Card.Header divided>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est,
            neque deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
          </Card.Body>
          <Card.Footer divided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
        <Card sharp>
          <Card.Header divided>Lorem ipsum dolor sit.</Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est,
            neque deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
          </Card.Body>
          <Card.Footer divided>Lorem ipsum dolor sit amet consectetur.</Card.Footer>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
