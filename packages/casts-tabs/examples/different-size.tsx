// @ts-ignore example should import React
import React from 'react';
import { Space } from '@casts/space';
import { TabPane, Tabs } from '@casts/tabs';

export const TabsDifferentSizesDemo = () => {
  return (
    <Space direction="vertical" size={20} style={{ width: '100%' }}>
      <Tabs defaultValue={1} size="small">
        <TabPane value={1} label="Tab One">
          <p>Content One</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            cumque architecto, cum, illum recusandae corporis fugiat esse
            voluptatem rerum accusantium eos quia doloremque dolorem provident
            corrupti facilis excepturi odio ratione!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint,
            nostrum consequuntur cupiditate unde voluptatum? Asperiores deleniti
            ratione perspiciatis, odio architecto, maxime illo sit in non id,
            error iste illum!
          </p>
        </TabPane>
        <TabPane value={2} label="Tab Two">
          <p>Content Two</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            libero exercitationem quod ipsa consequatur corrupti ducimus?
            Doloremque architecto quidem amet nesciunt quia. Asperiores ipsam
            dolorum ut, nulla quam hic odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus repellat minima, tenetur et ducimus molestias iure
            tempora facilis quibusdam voluptatibus, voluptatum quisquam
            reprehenderit error soluta magni nobis. Ab, aliquam aspernatur!
          </p>
        </TabPane>
        <TabPane value={3} label="Tab Three">
          <p>Content Three</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            inventore? Quidem quo itaque soluta nulla, recusandae et doloribus
            illo accusamus, ratione modi voluptas impedit rerum voluptate in
            quaerat, ea quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ratione neque mollitia corrupti iste accusantium nostrum maxime
            error repellendus ipsum reprehenderit atque dignissimos, molestias
            vel esse iusto eveniet quaerat deserunt!
          </p>
        </TabPane>
        <TabPane value={4} label="Tab Four">
          <p>Content Four</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            veritatis aliquid harum ex blanditiis hic eos accusamus praesentium
            sapiente nobis. Et molestias quasi eaque expedita quis earum odio
            dolores libero!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            delectus numquam fugit incidunt sed quo ad recusandae eius
            repellendus dignissimos. Repudiandae laboriosam ea molestias porro!
            Omnis veniam soluta porro rem.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            quidem voluptates sed, ratione enim, est veritatis, iure inventore
            quibusdam qui porro fuga! Deleniti, quisquam eaque animi impedit quo
            a voluptas!
          </p>
        </TabPane>
      </Tabs>
      <Tabs defaultValue={1} size="medium">
        <TabPane value={1} label="Tab One">
          <p>Content One</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            cumque architecto, cum, illum recusandae corporis fugiat esse
            voluptatem rerum accusantium eos quia doloremque dolorem provident
            corrupti facilis excepturi odio ratione!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint,
            nostrum consequuntur cupiditate unde voluptatum? Asperiores deleniti
            ratione perspiciatis, odio architecto, maxime illo sit in non id,
            error iste illum!
          </p>
        </TabPane>
        <TabPane value={2} label="Tab Two">
          <p>Content Two</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            libero exercitationem quod ipsa consequatur corrupti ducimus?
            Doloremque architecto quidem amet nesciunt quia. Asperiores ipsam
            dolorum ut, nulla quam hic odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus repellat minima, tenetur et ducimus molestias iure
            tempora facilis quibusdam voluptatibus, voluptatum quisquam
            reprehenderit error soluta magni nobis. Ab, aliquam aspernatur!
          </p>
        </TabPane>
        <TabPane value={3} label="Tab Three">
          <p>Content Three</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            inventore? Quidem quo itaque soluta nulla, recusandae et doloribus
            illo accusamus, ratione modi voluptas impedit rerum voluptate in
            quaerat, ea quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ratione neque mollitia corrupti iste accusantium nostrum maxime
            error repellendus ipsum reprehenderit atque dignissimos, molestias
            vel esse iusto eveniet quaerat deserunt!
          </p>
        </TabPane>
      </Tabs>
      <Tabs defaultValue={6} size="large">
        <TabPane value={1} label="Tab One">
          <p>Content One</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            cumque architecto, cum, illum recusandae corporis fugiat esse
            voluptatem rerum accusantium eos quia doloremque dolorem provident
            corrupti facilis excepturi odio ratione!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint,
            nostrum consequuntur cupiditate unde voluptatum? Asperiores deleniti
            ratione perspiciatis, odio architecto, maxime illo sit in non id,
            error iste illum!
          </p>
        </TabPane>
        <TabPane value={2} label="Tab Two">
          <p>Content Two</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            libero exercitationem quod ipsa consequatur corrupti ducimus?
            Doloremque architecto quidem amet nesciunt quia. Asperiores ipsam
            dolorum ut, nulla quam hic odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus repellat minima, tenetur et ducimus molestias iure
            tempora facilis quibusdam voluptatibus, voluptatum quisquam
            reprehenderit error soluta magni nobis. Ab, aliquam aspernatur!
          </p>
        </TabPane>
        <TabPane value={3} label="Tab Three">
          <p>Content Three</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            inventore? Quidem quo itaque soluta nulla, recusandae et doloribus
            illo accusamus, ratione modi voluptas impedit rerum voluptate in
            quaerat, ea quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ratione neque mollitia corrupti iste accusantium nostrum maxime
            error repellendus ipsum reprehenderit atque dignissimos, molestias
            vel esse iusto eveniet quaerat deserunt!
          </p>
        </TabPane>
        <TabPane value={4} label="Tab Four">
          <p>Content Four</p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </TabPane>
        <TabPane value={5} label="Tab Five">
          <p>Content Five</p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nostrud officia pariatur ut officia. Sit
            irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
            officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
            officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
            sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
            consectetur et est culpa et culpa duis.
          </p>
        </TabPane>
        <TabPane value={6} label="Tab Six">
          <p>Content Six</p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate.
          </p>
          <p>
            Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
            ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
            est proident. Nostrud officia pariatur ut officia. Sit irure elit
            esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
            Lorem duis laboris cupidatat officia voluptate. Culpa proident
            adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt
            velit enim. Voluptate laboris sint cupidatat ullamco ut ea
            consectetur et est culpa et culpa duis.
          </p>
        </TabPane>
        <TabPane value={7} label="Tab Seven">
          <p>Content Seven</p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Culpa proident adipisicing id nulla nisi laboris ex in
            Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non
            excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
            ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nostrud officia pariatur ut officia. Sit
            irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
            officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
            officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
            sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
            consectetur et est culpa et culpa duis.
          </p>
        </TabPane>
      </Tabs>
    </Space>
  );
};

export default TabsDifferentSizesDemo;
