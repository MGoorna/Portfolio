import instance from "../api/axios";

export const getStaticPaths = async () => {
    const res = await instance.get('/posts')
    const data = await res.data;

    const paths = data.map(post => {
        return {
            params: {id: post.id.toString() }
        }
    })
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    console.log('context',  context)
    const id = context.params.id;
    const res = await instance.get('/posts/'+id);
    const data = await res.data;

    return {
        props: { post: data }
    }
}

const postDetail = ({post}) => {

    return ( 
        <div>        
            <h1>{ post.title }</h1>
        </div>
     );
}
 
export default postDetail;