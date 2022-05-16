import {createClient} from "next-sanity";

const sanityClient= createClient({ 
    projectId: "1q15ddoq",
    dataset: "production",
    apiVersion: "2022-05-11",
    useCdn: false
  });
  export default sanityClient;
