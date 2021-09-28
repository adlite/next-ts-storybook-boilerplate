import {InferGetStaticPropsType, GetStaticProps} from 'next';
import Head from 'next/head';

type Props = {
  name: string;
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  return {
    props: {
      name: 'User Name',
    },
  };
};

export default function ${TM:COMPONENT_NAME}({name}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>${TM:COMPONENT_NAME}</title>
      </Head>
      <p>${TM:COMPONENT_NAME} page</p>
    </>
  );
}
