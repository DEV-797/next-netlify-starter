import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Nav_bar from '@components/Nav_bar'

export default function Home() {
    return (
        <div className="product_container">
            <Head>
                <title>Oke_Cuba</title>
                <link rel="icon" href="/favicon.ico" />
                <Nav_bar></Nav_bar>
            </Head>

            <main>
                <div className='product_grid'>
                    <h1>Productos</h1>
                    <table className='product_table'>
                        <th>
                            <td><div className='product_item'><img src="/products_imgs/1.jpg" ></img> <div className='product_desc'>Foto 1 </div></div></td>
                            <td><div className='product_item'><img src="/products_imgs/2.jpg" ></img><div className='product_desc'>Foto 2</div></div></td>
                            <td><div className='product_item'><img src="/products_imgs/3.jpg" ></img><div className='product_desc'>LOGO oke </div></div></td>
                            
                        </th>
                    </table>
                </div>
            </main>
        </div>

    )
}