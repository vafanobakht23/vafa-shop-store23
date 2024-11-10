type RespnseType<T> = {
  data: T;
};

export const fetchData = async (url: string): Promise<any> => {
  const response = await fetch(url).then((res) => res.json());
  return response;
};
