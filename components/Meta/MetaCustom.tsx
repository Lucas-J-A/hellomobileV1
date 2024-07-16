import Head from 'next/head';

const MetaCustom = ({title,description} : {title:any, description:any}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default MetaCustom;
