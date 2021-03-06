import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { orchidDark, orchidLight } from '@tidy-ui/theme';
import { Card, CardBody, CardFooter, CardHeader } from '../src';

describe('Card', () => {
  test('Default render', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Card>
            <CardHeader separated>Lorem ipsum dolor sit amet consectetur.</CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
              molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
              Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
              quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
              obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
              obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
              distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
              laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi
              laudantium tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
            </CardBody>
            <CardFooter separated>Lorem ipsum dolor sit amet.</CardFooter>
          </Card>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('not rounded', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Card rounded={false}>
            <CardHeader separated>Lorem ipsum dolor sit amet consectetur.</CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
              molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
              Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
              quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
              obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
              obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
              distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
              laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi
              laudantium tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
            </CardBody>
            <CardFooter separated>Lorem ipsum dolor sit amet.</CardFooter>
          </Card>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('card with link', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Card href="https://google.com">
            <CardHeader separated href="https://google.com">
              Lorem ipsum dolor sit amet consectetur.
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
              molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
              Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
              quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
              obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
              obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
              distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
              laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi
              laudantium tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
            </CardBody>
            <CardFooter separated>Lorem ipsum dolor sit amet.</CardFooter>
          </Card>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('card with accent', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidLight}>
          <Card href="https://google.com" accent="success">
            <CardHeader separated href="https://google.com">
              Lorem ipsum dolor sit amet consectetur.
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
              molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
              Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
              quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
              obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
              obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
              distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
              laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi
              laudantium tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
            </CardBody>
            <CardFooter separated>Lorem ipsum dolor sit amet.</CardFooter>
          </Card>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('dark mode card', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={orchidDark}>
          <Card href="https://google.com">
            <CardHeader href="https://google.com">Lorem ipsum dolor sit amet consectetur.</CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A in libero accusantium sunt dolore repellat
              molestiae animi quod, cum dicta, quis rem fugiat harum quasi hic tempora aliquid! Aperiam, consectetur.
              Quisquam fuga eveniet et molestias beatae excepturi eaque porro officia! Veritatis, necessitatibus quam
              quibusdam officiis quia tempora quidem voluptas, nihil ipsam reprehenderit, veniam accusantium. Rerum
              obcaecati dolorum doloremque quod illum. Doloremque optio debitis enim nam unde quod ducimus, nesciunt
              obcaecati aspernatur aliquam consectetur a provident aliquid quasi officia cupiditate rerum necessitatibus
              distinctio blanditiis incidunt amet hic cum dolorum assumenda? Recusandae! Ipsa et, esse enim quae
              laudantium placeat sequi nisi est consectetur omnis. Ducimus, vitae fuga? Dolorem dolor, qui nisi
              laudantium tenetur totam id quisquam voluptatem maxime molestiae libero provident commodi?
            </CardBody>
            <CardFooter>Lorem ipsum dolor sit amet.</CardFooter>
          </Card>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
