import styles from './GridLayouts.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import img from '../../public/david-marcu-78A265wPiO4-unsplash.jpg'
import img2 from '../../public/james-harrison-7dXVZVBm8Xc-unsplash.jpg'
import img3 from '../../public/dave-hoefler-DBGb9u1Yf6Q-unsplash.jpg'
import imgLuzern from '../../public/luzern.jpg'
import imgZermatt from '../../public/zermatt.jpg'
import imgSchwytz from '../../public/schwyz.jpg'
import imgZurich from '../../public/zurich.jpg'


const Flexlayout = () => {
  return ( 
  <div className={styles.container}>
    <div className={styles.personalSiteLayout}>
      <section className={styles.panel+' '+styles.welcome}>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div>     
          <h2>Moony</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. ut nulla tempore ab distinctio aut? Sapiente, minima!</p>
        </div>
        <footer><p>Copyright 2022</p></footer>
      </section>
      <section className={styles.panel}>
        <div className={styles.imgWrapper}>
          <Image
            alt='Photo by <a href="https://unsplash.com/@jstrippa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Harrison</a> on <a href="https://unsplash.com/s/photos/person?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
            src={img2}          
            placeholder="blur"
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={styles.text}>
          <h3>About me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quaerat optio. Tempora ipsa quaerat et enim alias doloribus consequatur recusandae!</p>
        </div>
      </section>
      <section className={styles.panel}>     
        <div className={styles.text}>
          <h3>Photograpfy</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quaerat optio. Tempora ipsa quaerat et enim alias doloribus consequatur recusandae!</p>
        </div>
        <div className={styles.imgWrapper}>      
          <Image
            alt='Photo by <a href="https://unsplash.com/@davidmarcu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Marcu</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
            src={img3}
            placeholder="blur"
            layout='fill'
            objectFit='cover'
          />
        </div>
      </section>
    </div>
    <div className={styles.masonryLayout}>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Articles</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <h2>
                    <p>Visit</p>
                    <p>Switzerland</p>
                  </h2>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/"><a>Guide</a></Link>
            </li>
            <li>
              <Link href="/"><a>Contact</a></Link>
            </li>
          </ul>
        </nav>
      </header>
      <article className={styles.masonryText}>
        <h3>Hd Blue Wallpapers - Zurich</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        </p>
        <Link href="/"><a>Read more</a></Link>
      </article>
      <article className={styles.masonryImg}>
        <div style={{width: '100%', height: '100%', position: 'relative'}}> 
          <Image
            alt='Photo by <a href="https://unsplash.com/@omidvisuals?utm_source=unsplash&utm_medium=referral&utm_
            content=creditCopyText">OMID VISUALS</a> on <a href="https://unsplash.com/s/photos/switzerland?utm_
            source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
            src={imgZurich}
            placeholder="blur"
            layout='fill'
            objectFit='cover'
          />
        </div>
      </article>
      <article className={styles.masonryText}>
        <h3>Grosser Mythen - Schwyz</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        </p>
        <Link href="/"><a>Read more</a></Link>
      </article>
      <article className={styles.masonryImg} style={{width: '100%', height: '100%', position: 'relative'}}>
        <Image
          alt='Photo by <a href="https://unsplash.com/@rgaleriacom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ricardo Gomez Angel</a> on <a href="https://unsplash.com/s/photos/switzerland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
          src={imgLuzern}
          placeholder="blur"
          layout='fill'
          objectFit='cover'
        />
      </article>
      <article className={styles.masonryImg} style={{width: '100%', height: '100%', position: 'relative'}}>
        <Image
          alt='Photo by <a href="https://unsplash.com/@mrcalvert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Seb Mooze</a> on <a href="https://unsplash.com/s/photos/switzerland?utm_source=unsplash&utm
            _medium=referral&utm_content=creditCopyText">Unsplash</a>'
          src={imgSchwytz}
          placeholder="blur"
          layout='fill'
          objectFit='cover'
        />
      </article>
      <article className={styles.masonryText}>
        <h3>A not about style</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        </p>
        <Link href="/"><a>Read more</a></Link>
      </article>
      <article className={styles.masonryImg} style={{width: '100%', height: '100%', position: 'relative'}}>
        <Image
          alt='Photo by <a href="https://unsplash.com/@morgi_corgi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Morgan Thompson</a> on <a href="https://unsplash.com/s/photos/switzerland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
          src={imgZermatt}
          placeholder="blur"
          layout='fill'
          objectFit='cover'
        />
      </article>
      <article className={styles.masonryText}>
        <h3>A not about style</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        </p>
        <Link href="/"><a>Read more</a></Link>
      </article>
      <article className={styles.masonryText}>
        <h3>A not about style</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!
        </p>
        <Link href="/"><a>Read more</a></Link>
      </article>
    </div>
    <div className={styles.pageLayout}>
      <header className={styles.header}>
        <h1>The wall</h1>
      </header>
      <nav className={styles.nav}>
        <ul>
          <p><strong>Categories:</strong></p>
          <li>Films &Cinema</li>
          <li>Nature</li>
          <li>Games</li>
          <li>Fiood & Drinks</li>
          <li>World News</li>
          <li>Outdoor Living</li>
        </ul>
      </nav>
      <article className={styles.article}>
       <h2>The best 5 World Nature Photos</h2>
       <Image
          alt='Photo by <a href="https://unsplash.com/@davidmarcu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Marcu</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
          src={img}
          placeholder="blur"
          layout="responsive"
          width={700}
          height={475}
        />
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, nostrum. Non doloribus praesentium rerum ullam repellendus dolor architecto nulla iusto, laboriosam saepe eaque illo? Delectus sunt, ut consequuntur ipsum corrupti rem perspiciatis quidem. Ex sequi mollitia aliquam! Cum fugit laudantium dolorum repellat minima, iusto velit dicta commodi. Hic, quos accusantium.</p>
      </article>
      <aside className={styles.aside}>
        <ul>
          <li>
            <p>
              <strong>Publish on:</strong>
            </p>
            <p>May 8th 2022</p>
          </li>
          <li>
            <p>
              <strong>In the category:</strong>
            </p>
            <p>Nature</p>
          </li>
          <li>
            <p>
              <strong>Written by:</strong>
            </p>
            <p>Gall A.</p>
          </li>
        </ul>
      </aside>
      <footer className={styles.footer}>
        <p>Copyright 2022</p>
      </footer>
    </div>
  </div>
 );
}
 
export default Flexlayout;