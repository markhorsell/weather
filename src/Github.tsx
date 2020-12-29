import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
 
 const queryClient = new QueryClient()

 
 
 export default function Github() {
   return (
     <QueryClientProvider client={queryClient}>
       <GithubDisplay/>
     </QueryClientProvider>
   )
 }
 
 function GithubDisplay() : any {
   const { isLoading, error, data } = useQuery('githubData', () =>
     fetch('https://api.github.com/users/markhorsell').then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...';
 
   if (error) {
     const e:any = error;
     return 'An error has occurred: ' + e.message;
   }
   console.log(data);
 
   return (
     <div  style={{padding:"0px", border:"1px solid grey"}}>
       <img src={data.avatar_url} width="100"></img>
       <h1>{data.name}</h1>
       <p>{data.blog}</p>
       <p><a href={data.twitter_username}>Twitter</a></p>
       <p><a href={data.repos_url}>{data.repos_url}</a></p>
   
       <ReactQueryDevtools initialIsOpen />
     </div>
   )
 }