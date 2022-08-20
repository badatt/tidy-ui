/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/commons';
import { TColor } from '@tidy-ui/types';
import { Card, CardBody, CardFooter, CardHeader } from '../src';

const colors = ['major', 'minor', 'neutral', 'info', 'success', 'warning', 'danger'];

describe('Card', () => {
  it('Basic render', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Card>
          <CardHeader>Lorem ipsum dolor sit amet consectetur.</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
            molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
            Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
            quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
            obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
            obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
            distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
            laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi laudantium
            tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
          </CardBody>
          <CardFooter>Lorem ipsum dolor sit amet.</CardFooter>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Basic render in dark mode', () => {
    const tree = render(
      <ThemeProvider theme={orchidDark}>
        <Card>
          <CardHeader href="https://google.com">Lorem ipsum dolor sit amet consectetur.</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
            molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
            Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
            quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
            obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
            obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
            distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
            laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi laudantium
            tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
          </CardBody>
          <CardFooter>Lorem ipsum dolor sit amet.</CardFooter>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Card with sharp corners', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Card sharp>
          <CardHeader>Lorem ipsum dolor sit amet consectetur.</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
            molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
            Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
            quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
            obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
            obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
            distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
            laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi laudantium
            tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
          </CardBody>
          <CardFooter>Lorem ipsum dolor sit amet.</CardFooter>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('card with link', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        <Card href="https://google.com">
          <CardHeader>Lorem ipsum dolor sit amet consectetur.</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
            molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
            Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
            quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
            obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
            obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
            distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
            laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi laudantium
            tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
          </CardBody>
          <CardFooter>Lorem ipsum dolor sit amet.</CardFooter>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Card with accent variants', () => {
    const tree = render(
      <ThemeProvider theme={orchidLight}>
        {colors.map((c) => (
          <Card accent={c as TColor} key={c}>
            <CardHeader href="https://google.com">Lorem ipsum dolor sit amet.</CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis adipisci enim ipsam temporibus
              molestiae dolor veniam repellendus tempora. Sit consequuntur ratione quam. Dolor quo quis enim ipsum
              praesentium repudiandae.
            </CardBody>
            <CardFooter>Lorem ipsum dolor sit amet consectetur.</CardFooter>
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
          <CardHeader divided>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est,
            neque deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
          </CardBody>
          <CardFooter divided>Lorem ipsum dolor sit amet consectetur.</CardFooter>
        </Card>
        <Card sharp>
          <CardHeader divided>Lorem ipsum dolor sit.</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus dolorum! Quas, natus! Est,
            neque deserunt consequatur voluptatum dolores quae! Error explicabo omnis odio molestias.
          </CardBody>
          <CardFooter divided>Lorem ipsum dolor sit amet consectetur.</CardFooter>
        </Card>
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
