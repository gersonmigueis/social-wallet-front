import axios from 'axios';

let url = 'http://10.0.2.2:3000';

export async function salvarTransacao(obj) {
  console.log(JSON.stringify(obj))
  try {
      
      const dataTransacao = await axios.post(`${url}/transactions/save`,
      {    
        value: obj.valor, 
        type: obj.operacao, 
        observation: obj.observacao,
        id_account: '666cf387-6d6b-4870-a4ad-3f080cefb558',
        id_category: '4b8b0c17-3dbd-48e8-801e-1acb1972c2c3',
      })
    
      return dataTransacao
  } catch (error) {
      // console.log(error.message)
      console.log(JSON.stringify(error))
      throw new Error(error.response.data.message)
  }
}