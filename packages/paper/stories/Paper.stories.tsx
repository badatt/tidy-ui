import React from 'react';
import { FlexBox } from '../../flexbox/src';
import { Paper } from '../src';

export default {
  component: Paper,
  title: 'Presentation/Paper',
};

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni. Dignissimos harum assumenda, iusto
        sint vero tempora perspiciatis aliquam non possimus quod quisquam est doloribus explicabo quia voluptates
        facilis nobis! Dolorum, ratione! Error eos sint voluptates commodi ratione, nemo nobis doloremque in ut repellat
        enim voluptatibus impedit nulla quidem veniam pariatur sed debitis magnam necessitatibus sapiente, ab fugiat
        saepe! Veritatis. Atque incidunt facere sed dicta iure est asperiores quibusdam necessitatibus voluptatum ad
        delectus itaque laborum officia dolorem nostrum natus perferendis porro totam, id tempore ex tenetur molestiae
        modi? Omnis, necessitatibus. Accusamus nulla iure, doloremque obcaecati quis dolorem dicta reiciendis mollitia
        voluptatem, ex quasi modi autem? Sed, soluta eaque. Obcaecati, nisi exercitationem ex veniam hic deserunt est
        illum eum vero odit! Numquam magnam incidunt neque debitis beatae quidem, consequatur nemo quo officiis
        inventore magni, dolorem ad minima eveniet quas nulla nam tempore porro, quasi et? Facere unde quibusdam minus
        minima reprehenderit! Ipsa, explicabo aliquam. Molestias, quae saepe quia, sit eaque, quam odio delectus cumque
        expedita dolorum aspernatur nesciunt temporibus debitis nostrum distinctio repudiandae. Architecto accusamus
        eum, cum veritatis quibusdam velit ipsam! Ipsa neque adipisci optio quia cum modi asperiores, nisi fuga itaque
        distinctio aliquid veritatis ad aut alias aliquam magni in facilis consequatur laboriosam libero, harum
        voluptate nostrum quaerat. Pariatur, corrupti? Quia voluptate voluptatibus earum, voluptatem iste repellat,
        fugiat numquam dolorem accusamus alias repudiandae, accusantium nihil quam placeat dicta dolores suscipit
        aliquam harum sed amet enim tempore in quas! Dolorum, impedit! Voluptatum, accusantium ratione totam dolore,
        facilis nemo non quisquam at beatae soluta aperiam veritatis, modi doloremque explicabo nostrum eum aliquid
        culpa impedit rem est ea! Facilis magnam dolores minima distinctio. Ipsa optio, ullam at sequi magni commodi
        officiis accusantium recusandae, delectus ut natus deleniti voluptates possimus consequatur sunt sit libero sed
        adipisci, reprehenderit eos! Deserunt eum ex mollitia debitis assumenda.`;

export const basic = () => <Paper>{text}</Paper>;

export const sharp = () => <Paper sharp>{text}</Paper>;

export const customDimension = () => (
  <Paper h="20rem" w="20rem">
    {text}
  </Paper>
);

export const customElement = () => (
  <Paper ele={<FlexBox nowrap gap="0.5rem" />}>
    {text}
    {text}
    {text}
  </Paper>
);
