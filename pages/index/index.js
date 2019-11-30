// Vendor
import React from 'react';
// Internals
import Typography from 'components/Typography';
import style from './style.scss';

const Home = () => {
  return (
    <div className={style.root}>
      <Typography variant="heading1" hasMargin>
        Heading 1
      </Typography>
      <Typography variant="heading2" hasMargin>
        Heading 2
      </Typography>
      <Typography variant="heading3" hasMargin>
        Heading 3
      </Typography>
      <Typography variant="heading4" hasMargin>
        Heading 4
      </Typography>
      <Typography variant="heading5" hasMargin>
        Heading 5
      </Typography>
      <Typography variant="heading6" hasMargin>
        Heading 6
      </Typography>
      <Typography variant="heading6" hasMargin secondary>
        Secondary colored heading
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Contrary to&nbsp;popular belief, Lorem Ipsum is&nbsp;not simply random text. It&nbsp;has roots
        in&nbsp;a&nbsp;piece of&nbsp;classical Latin literature from 45&nbsp;BC, making it&nbsp;over 2000 years old.
        Richard McClintock, a&nbsp;Latin professor at&nbsp;Hampden-Sydney College in&nbsp;Virginia, looked up&nbsp;one
        of&nbsp;the more obscure Latin words, consectetur, from a&nbsp;Lorem Ipsum passage, and going through the cites
        of&nbsp;the word in&nbsp;classical literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of&nbsp;&laquo;de&nbsp;Finibus Bonorum et&nbsp;Malorum&raquo; (The Extremes
        of&nbsp;Good and Evil) by Cicero, written in&nbsp;45&nbsp;BC. This book is&nbsp;a&nbsp;treatise on&nbsp;the
        theory of&nbsp;ethics, very popular during the Renaissance. The first line of&nbsp;Lorem Ipsum, &laquo;Lorem
        ipsum dolor sit amet..&raquo;, comes from a&nbsp;line in&nbsp;section 1.10.32. The standard chunk of&nbsp;Lorem
        Ipsum used since the 1500s is&nbsp;reproduced below for those interested. Sections&nbsp;1.10.32 and 1.10.33 from
        &laquo;de&nbsp;Finibus Bonorum et&nbsp;Malorum&raquo; by&nbsp;Cicero are also reproduced in&nbsp;their exact
        original form, accompanied by&nbsp;English versions from the 1914 translation by&nbsp;H.&nbsp;Rackham.
      </Typography>
      <Typography variant="paragraph" zeroLineHeight>
        WARNING! LINE HEIGHT IS 1! Contrary to&nbsp;popular belief, Lorem Ipsum is&nbsp;not simply random text.
        It&nbsp;has roots in&nbsp;a&nbsp;piece of&nbsp;classical Latin literature from 45&nbsp;BC, making it&nbsp;over
        2000 years old. Richard McClintock, a&nbsp;Latin professor at&nbsp;Hampden-Sydney College in&nbsp;Virginia,
        looked up&nbsp;one of&nbsp;the more obscure Latin words, consectetur, from a&nbsp;Lorem Ipsum passage, and going
        through the cites of&nbsp;the word in&nbsp;classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of&nbsp;&laquo;de&nbsp;Finibus Bonorum et&nbsp;Malorum&raquo; (The
        Extremes of&nbsp;Good and Evil) by Cicero, written in&nbsp;45&nbsp;BC. This book is&nbsp;a&nbsp;treatise
        on&nbsp;the theory of&nbsp;ethics, very popular during the Renaissance. The first line of&nbsp;Lorem Ipsum,
        &laquo;Lorem ipsum dolor sit amet..&raquo;, comes from a&nbsp;line in&nbsp;section 1.10.32. The standard chunk
        of&nbsp;Lorem Ipsum used since the 1500s is&nbsp;reproduced below for those interested. Sections&nbsp;1.10.32
        and 1.10.33 from &laquo;de&nbsp;Finibus Bonorum et&nbsp;Malorum&raquo; by&nbsp;Cicero are also reproduced
        in&nbsp;their exact original form, accompanied by&nbsp;English versions from the 1914 translation
        by&nbsp;H.&nbsp;Rackham.
      </Typography>
    </div>
  );
};

export default Home;
