import React from 'react';
import { styled } from '@tidy-ui/commons';
import { Text } from '@tidy-ui/text';
import { Divider } from '../src';

export default {
  component: Divider,
  title: 'Layout/Divider/Divider',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const basic = () => (
  <Container>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
      veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
      veniam!
    </Text>
    <Divider />
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
      veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
      veniam!
    </Text>
    <Divider />
    <div style={{ display: 'flex' }}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi quam modi natus ipsum corrupti quis
        laudantium reiciendis error quas, voluptate eligendi possimus temporibus ipsam! Eveniet voluptates natus minima!
        Possimus.
      </Text>
      <Divider vertical />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium ab magni assumenda, iure corporis
        natus voluptas laborum error corrupti inventore hic aliquid, debitis adipisci necessitatibus repellendus dolores
        ratione architecto.
      </Text>
    </div>
  </Container>
);

export const align = () => (
  <Container>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
      veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
      veniam!
    </Text>
    <Divider align="start" length="2rem" />
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione, id vero quibusdam aperiam officia
      veritatis recusandae magni accusamus rem quo cupiditate architecto hic culpa eum totam reprehenderit, libero
      veniam!
    </Text>
    <Divider align="end" length="2rem" />
    <div style={{ display: 'flex' }}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi quam modi natus ipsum corrupti quis
        laudantium reiciendis error quas, voluptate eligendi possimus temporibus ipsam! Eveniet voluptates natus minima!
        Possimus.
      </Text>
      <Divider vertical align="start" length="2rem" />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium ab magni assumenda, iure corporis
        natus voluptas laborum error corrupti inventore hic aliquid, debitis adipisci necessitatibus repellendus dolores
        ratione architecto.
      </Text>
      <Divider vertical align="center" length="2rem" />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium ab magni assumenda, iure corporis
        natus voluptas laborum error corrupti inventore hic aliquid, debitis adipisci necessitatibus repellendus dolores
        ratione architecto.
      </Text>
      <Divider vertical align="end" length="2rem" />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium ab magni assumenda, iure corporis
        natus voluptas laborum error corrupti inventore hic aliquid, debitis adipisci necessitatibus repellendus dolores
        ratione architecto.
      </Text>
    </div>
    <Divider align="center" length="2rem" />
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium ab magni assumenda, iure corporis natus
      voluptas laborum error corrupti inventore hic aliquid, debitis adipisci necessitatibus repellendus dolores ratione
      architecto.
    </Text>
  </Container>
);

export const variants = () => (
  <Container>
    <Text v="subtitle2">major tone</Text>
    <Text>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur officiis excepturi ea distinctio praesentium
      commodi cumque totam, reiciendis eveniet magni quis asperiores rem quos maiores perferendis eligendi? Accusamus,
      deleniti doloremque. Neque magnam quis fuga nobis laboriosam debitis itaque minima praesentium voluptatibus vero.
      Eligendi illum aut laboriosam assumenda voluptatem nam veritatis repellendus id velit consectetur soluta
      voluptatum, repellat hic obcaecati quibusdam! Enim fugit doloribus dolore, laudantium ratione praesentium
      laboriosam vero nobis fuga rem culpa perspiciatis ea accusamus voluptas aut. Facilis obcaecati fugiat sapiente
      dolorem. Ab voluptas, eaque doloribus esse suscipit iste.
    </Text>
    <Divider tone="major" />
    <Text v="subtitle2">thick density</Text>
    <Text>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis totam maxime ullam impedit fuga incidunt!
      Dolore perspiciatis quidem expedita. Enim, quaerat mollitia numquam itaque vitae obcaecati porro sed laboriosam
      quam. In, autem est necessitatibus cum dolorum enim. Numquam iure rerum dolore perspiciatis harum impedit pariatur
      maiores placeat reprehenderit odio tenetur nulla nam, labore id blanditiis consequatur debitis veritatis quis
      expedita. Beatae nam fugiat quia est enim doloremque nostrum nisi nobis asperiores nulla, sit labore voluptas
      rerum laboriosam at provident explicabo dicta non eaque perspiciatis cupiditate qui possimus. Reprehenderit, illum
      quas?
    </Text>
    <Divider density="thick" />
    <Text v="subtitle2">800 shade</Text>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae corporis ratione et culpa, provident
      dolorem atque in consectetur officiis inventore dolore quos assumenda! Voluptates perferendis provident voluptate
      commodi id. Cum nisi perspiciatis maiores facere beatae temporibus sit omnis quod nesciunt quia consequuntur quis
      quam voluptate earum ducimus rem, aliquam necessitatibus explicabo eligendi ut distinctio dicta non. Modi, vero
      optio. Sunt ipsam mollitia totam, eum accusamus aut ut, suscipit repellendus quaerat error nihil quasi blanditiis
      architecto accusantium numquam alias maiores officia non. Tempora odio ducimus temporibus labore reiciendis animi
      eveniet!
    </Text>
    <Divider shade={800} />
    <Text v="subtitle2">dashed style</Text>
    <Text>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ut omnis nobis dolores deleniti voluptatum sapiente
      molestias ex minus. Aperiam itaque exercitationem voluptate nulla quas quo earum illum cupiditate sapiente.
      Ducimus asperiores iusto tenetur omnis quam esse, aperiam sunt odio laborum neque quaerat fuga, molestias nesciunt
      qui maiores hic veniam vero quod rem. Ipsam enim alias, eaque minima ipsum doloribus. Impedit velit deleniti
      expedita omnis voluptatibus consectetur repellendus doloremque aliquam, deserunt dolore repellat consequatur
      accusantium aut! Placeat fuga, ipsa molestiae dolorum, facere excepturi rerum quas consectetur nemo ab enim
      architecto?
    </Text>
    <Divider variant="dashed" />
  </Container>
);
