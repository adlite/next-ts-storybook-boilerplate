import type {Meta, ComponentStory} from '@storybook/react';
import ExampleLayout, {Props} from './ExampleLayout';

const Template = (args: Props) => (
  <ExampleLayout {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur deleniti, dolorem fugiat harum
      inventore magni minima nesciunt non officiis provident, sunt tenetur! Accusamus alias enim, eum fugiat nesciunt
      placeat.
    </p>
    <br />
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
      ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
      adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
      aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
      molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <br />
    <p>
      Nullam et lacus aliquet, laoreet velit vel, auctor urna. Duis ac purus mattis, porta nisl pharetra, dignissim
      augue. Sed accumsan dui at libero tincidunt, in sagittis ex tincidunt. Nunc vel ipsum in arcu tristique venenatis.
      Duis id diam consequat arcu iaculis auctor in quis ipsum. Aliquam eget dolor pellentesque ex tempus pellentesque.
      Etiam augue justo, luctus vel elit vel, sollicitudin facilisis tellus. Aliquam vitae mi augue. Morbi at arcu in
      eros vulputate lobortis. Quisque sed aliquet diam. Suspendisse viverra tortor sed euismod lobortis. Nunc egestas
      lectus sit amet velit egestas, eget consectetur felis molestie. Mauris blandit nisl sed velit commodo, eget
      iaculis purus pulvinar. Sed in ante vitae felis rhoncus euismod. Pellentesque luctus risus nec laoreet facilisis.
      Sed nec faucibus dui.
    </p>
    <br />
    <p>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
      distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
      placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
      officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
      recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
      consequatur aut perferendis doloribus asperiores repellat.
    </p>
    <br />
    <p>
      Pellentesque vitae dignissim odio. Pellentesque dignissim sapien at leo cursus, ac sollicitudin sapien euismod.
      Donec semper lorem sit amet ante malesuada, at venenatis tellus cursus. Integer scelerisque nunc eu magna
      imperdiet, eget sagittis dui tempor. Nulla ac elementum magna. Praesent nec nisl pharetra, pellentesque arcu
      ullamcorper, maximus justo. Vestibulum tincidunt, ipsum ut gravida gravida, massa tellus ultricies orci, vel
      convallis neque est id lorem. Curabitur tincidunt tortor sit amet lorem pellentesque pellentesque. Fusce id
      pulvinar libero, quis mattis lectus. Proin tincidunt felis a feugiat interdum.
    </p>
  </ExampleLayout>
);

export const Default: ComponentStory<typeof ExampleLayout> = Template.bind({});
Default.args = {};

const storyMeta: Meta<Props> = {
  title: 'Examples/ExampleLayout',
  component: ExampleLayout,
  argTypes: {},
};

export default storyMeta;
