

const BASE_URL = "http://viacep.com.br/ws/";

export const buscaCep =  async (cep) => {
 const data =  await   fetch(BASE_URL + cep + "/json/")
.then((response)  => response.json()).then((response) =>  {
  return response

});
return data;
  };


   


