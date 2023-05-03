const useFetchPage = async (key: string, data: () => Promise<any>) => {
  console.log('TEST', key)

  if (!data) {
    return null;
  }

  return await data();
};

export default useFetchPage;
