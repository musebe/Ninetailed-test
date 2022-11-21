import * as contentful from "contentful";


const client = contentful.createClient({
    space: 'xs5fex194mql',
    accessToken: 'QcFRUb8OhganrATxrmjjhxqjJP8VO9zjGNprEr20htg'
  });
  
  const getEntries = () => client.getEntries().then((response) => response.items)
  

  export {getEntries}