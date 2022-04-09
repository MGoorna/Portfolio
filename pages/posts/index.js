import { useState, useEffect } from 'react'
import instance from './../api/axios'
import styles from './Post.module.scss'
import axios from 'axios'
import Link from 'next/Link'
import Button from '../../components/layout/Button';

export const getStaticProps = async () => {

    const res = await instance.get('/posts')
    let data = await res.data; 
    const resUser = await instance.get('/users')
    let users = await resUser.data; 
    const resphotos = await instance.get('/photos',{
        params: {
          _limit: 100
         }
      })
    let photos = await resphotos.data;
    let mergedData = data.map(photosList => {
        let usersList = users.find(user => user.id === (photosList.id>10) ? 1: photosList.id)
        let imageList = photos.find(img => img.id === photosList.id)
        return { ...photosList, ...usersList, ...imageList }
    })
        
    return {
        props: { postsLists: mergedData }
    }
}

const Posts = ({ postsLists }) => {
    const POSTS_TO_DISPLAY = 12;   
    const [maxDisplayLimit, setMaxDisplayLimit] = useState(POSTS_TO_DISPLAY);
    const [posts, setPosts] = useState(postsLists);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)             
        if(searchValue != ''){
            const filteredData = posts.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(posts)
        }
    }

    const handleShowMorePosts = () => {        
        setMaxDisplayLimit(maxDisplayLimit += POSTS_TO_DISPLAY)
    }
    
    useEffect(() => {   
        setPosts(postsLists.slice(0, maxDisplayLimit))
    }, [maxDisplayLimit])

    

    /*useEffect(() => {
        const fetchPosts = async () => {
        
          const requestUsers = await instance.get('/users')
          await setUsers(requestUsers.data)
          //const requestPosts = await instance.get('/posts')
          //await setPosts(requestPosts.data)

          axios.all([
            instance.get('/users'),
            instance.get('/posts'),
            //instance.get('/photos')
          ])
          .then(responseArr => {
            //setPosts([...responseArr[0].data, ...responseArr[1].data])
            //let merged = {...obj1, ...obj2};
            //console.log('axios.all', [...responseArr[0].data, ...responseArr[1].data])
          });
    
      }
      fetchPosts()
      }, [])*/

    return ( 
        <>                 
        <main className={styles.container}>
            <h1 className={styles.title}>Search with Masonry layout</h1>      
            <label htmlFor="search" className={styles.search__label}>
                <input type="search" id="search" className={styles.search} 
                    placeholder="Search for..." 
                    autoComplete="off" 
                    pellcheck="false" 
                    value={searchInput}
                    onChange={(e) => searchItems(e.target.value)}/>
            </label>  
            <div className={styles.blog_posts} id='postWrapper'>
                {searchInput == '' ?
                (posts && posts.map((post, idx) => (
                <article className={styles.post} key={post.id+idx}>
                <Link href={`/posts/${post.id}`} ><a href="">
                    <div className={styles.meta}>
                        <div className={styles.post__tag__container}>
                            <div className={styles.post__tag}>
                                <span className={styles.post__tag__avatar}>M</span>
                                <span className={styles.post__tag__name}>world</span>
                            </div>
                            <div className={styles.post__tag}>
                                <span className={styles.post__tag__name}>technology</span>
                            </div>
                            <div className={styles.post__tag}>
                                <span className={styles.post__tag__name}>economy</span>
                            </div>                
                        </div>
                        <p className={styles.post__data}>07/15/2021</p>
                    </div>
                    <h2>{post.title}</h2>
                    <div className={styles.post__author}>
                        <img className={styles.post__img} src={post.url} alt={post.name} width="55" />
                        <div>
                        <p className={styles.post__author__name}>{post.name}</p>
                        <p className={styles.post__author__role}><small>{post.company.name}</small></p>
                        </div>
                    </div>
                    <div className={styles.post__body}>{post.body}</div>
                    <div className={styles.post__footer}></div>
                    </a>
                    </Link>
                </article>               
                ))
                ):(
                    filteredResults && filteredResults.map((post, idx) => (
                <article className={styles.post} key={post.id+idx}>
                <Link href={`/posts/${post.id}`} ><a href="">
                    <div className={styles.meta}>
                        <div className={styles.post__tag__container}>
                            <div className={styles.post__tag}>
                                <span className={styles.post__tag__avatar}>M</span>
                                <span className={styles.post__tag__name}>world</span>
                            </div>
                            <div className={styles.post__tag}>
                                <span className={styles.post__tag__name}>technology</span>
                            </div>
                            <div className={styles.post__tag}>
                                <span className={styles.post__tag__name}>economy</span>
                            </div>                
                        </div>
                        <p className={styles.post__data}>07/15/2021</p>
                    </div>
                    <h2>{post.title}</h2>

                    <div>
                        <img className={styles.post__img} src={post.url} alt={post.name} width="50px" />
                    </div>
                    <div className={styles.post__body}>{post.body}</div>
                    <div className={styles.post__footer}></div>
                    </a>
                    </Link>
                </article>               
                ))
                )}
            </div>
            <Button type="text" 
                onClick={handleShowMorePosts} 
                buttonStyle="btn__primary__solid"
                buttonSize="btn__medium"
                disabled={maxDisplayLimit>postsLists.length || maxDisplayLimit==postsLists.length? true : false}>
                Load more          
            </Button>
        </main>
    </> );
}
 
export default Posts;


