import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  //buscar itens salvos
  const getItem = async (key) => {
    try{
        const passwords = await AsyncStorage.getItem(key);
        return JSON.parse(passwords) || [];

    }catch(error){
        console.log("Erro ao buscar", erro)
        return [];
    }

  };

  //salvar um item no storage
  const saveItem = async (key, value) => {;
  try{
    let passwords = await getItem(key);

    passwords.push(value)

    await AsyncStorage.setItem(key, JSON.stringify(passwords) )

  }catch(error){
    console.log("Erro ao salvar", error)
  }
  }


  //Remover algo do storage
  const removeItem = async () => {
    try {
        let passwords = await getItem(key)

        let myPasswords = passwords.filter( (password) => {
            return (password !== item)
        })

        await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
        
        return myPasswords;
        
    } catch (error) {
        console.log("erro ao deletar", error)
    }

  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
