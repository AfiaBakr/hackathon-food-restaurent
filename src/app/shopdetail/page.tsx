import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";


const Product = [
    { id: 1, img: "/shopping detail/11.png", title: "Fresh Lime ", rate: "$30.00", notrate:"$450.00"},
    { id: 2, img: "/shopping detail/22.png", title: "Chocolate Muffin", rate: "$28.00", notrate:""},
    { id: 3, img: "/shopping detail/33.png", title: "Burger", rate: "$21.00", notrate:""},
    { id: 4, img: "/shopping detail/11.png", title: "Fresh Lime ", rate: "$30.00", notrate:"$450.00"},
  ];








const ShopDetail = () => {
    return (
    <main className='bg-white'>
        <header className="bg-cover bg-center h-52 flex flex-col text-center" style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}>
            <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-wide mt-16">Shop Details</h1>
            <div className="flex items-center justify-center text-sm lg:text-2xl">
            <h1 className="text-white">Home</h1><MdKeyboardArrowRight className="text-white"/><h1 className="text-[#ff9f0d]"><u>Shop Details</u></h1>
            </div>      
        </header> 
        <div className='mt-20 ml-[200px]'>
        <section className='w-screen h-[] lg:w-[1320px] lg:h-[718px] '>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center'>
            {/*Pictures */}   
                <div className='col-span-1 flex'>
                <div >
                    <Image className='mr-6 mb-6' src={"/shopping detail/1.png"}
                    alt='1'
                    width={132}
                    height={129}/>
                    <Image className='mr-6 mb-6' src={"/shopping detail/2.png"}
                    alt='1'
                    width={132}
                    height={129}/>
                    <Image className='mr-6 mb-6' src={"/shopping detail/3.png"}
                    alt='1'
                    width={132}
                    height={129}/>
                    <Image className='mr-6 mb-6' src={"/shopping detail/4.png"}
                    alt='1'
                    width={132}
                    height={129}/>
                </div>
                <div>
                    <Image src={"/shopping detail/5.png"}
                    alt='1'
                    width={491}
                    height={496}/>
                </div>
                </div>
            {/*Left side description */}
                <div className='col-span-1 ml-14'>
                    <div className='flex items-center justify-between'>
                        <button className='w-[86px] h-[26px] bg-[#ff9f0d] text-[14px] text-white'>In Stock</button>
                        <Image src={"/shopping detail/left right.png"}
                        alt='1'
                        width={152}
                        height={26}/>
                    </div>
                    <div className=''>
                        <h1 className='text-[48px]'>Yummy Chicken Chup</h1>
                        <p className='text-[18px] text-justify mt-2 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        <hr/>
                        <h2 className='text-[32px] mt-6'>54.00$</h2>
                    </div>
                    <div className='flex my-4 '>
                        <Image className='w-[120px] h-[24px] border border-y-0 border-l-0 items-center' src={"/shopping detail/Star.png"}
                        alt='star'
                        width={116}
                        height={20}/>
                        <h3 className='w-[113px] h-[24px] border border-y-0 border-l-0 text-center'>5.0 Rating</h3>
                        <h3 className='w-[90px] h-[24px] text-center'>22 Review</h3>
                        </div>
                        <div>
                            <h3 className='text-[18px]'>Dictum/cursus/Risus</h3>
                        </div>
                        
                        <div className='flex py-4'> 
                            <h3 className='w-[60px] h-[50px] border border-black text-center text-[28px]'>-</h3>
                            <h3 className='w-[60px] h-[50px] border border-black border-x-0 text-center pt-2 text-[20px]'>1</h3>
                            <h3 className='w-[60px] h-[50px] border border-black text-center text-[28px]'>+</h3>
                            <Link href={"/shoppingcart"}>
                            <button className='flex w-[191px] h-[50px] rounded-md text-center text-white bg-[#ff9f0d] text-[18px] ml-4'>
                                <Image className='pt-4 ml-6' src={"/shopping detail/Bag.png"}
                                alt='bag'
                                width={20}
                                height={20}/>
                                <h3 className=' text-center pl-4 pt-3'>Add to cart</h3>
                            </button>
                            </Link>                                                                         
                        </div>
                        <hr className='my-4'/>
                        <div className='flex text-[18px] mt-4'>
                    <Image
                    src={"/shopping detail/Heart.png"}
                    alt='pic'
                    width={20}
                    height={20}/>
                    <h3 className='ml-2'>Add to Wishlist</h3>
                    <Image className='ml-2'
                    src={"/shopping detail/GitDiff.png"}
                    alt='pic'
                    width={20}
                    height={20}/>
                    <h3 className='ml-2'>Compare</h3>
                </div>
                <div className='text-[18px]'>
                    <div >
                    <h3 className='my-2'>Category: pizza</h3>
                    <h3>Tag: Our Shop</h3>
                    </div>
                    <div className='flex mt-3'>
                    <h3>Share:</h3>
                    <Image className='ml-2' src={"/shopping detail/Social content.png"}
                    alt='social'
                    width={184}
                    height={24}/>
                    </div>
                </div>
                <hr className='mt-4'/>
                    </div>             
                </div>
        </section>
        <section className='mt-8 w-[1320px] h-[458px]'>
            <div>
                <div className='flex mb-6'>
                    <button className='w-[191px] h-[50px] text-center rounded-md shadow-inner shadow-[#ff7a0d]  text-white bg-[#ff9f0d] text-[18px]'>Description</button>
                    <p className='ml-8 mt-2 text-black text-[18px]'>Revews: 24</p>
                </div>
                <div className='text-[14px]'>
                <p>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p><br/>
                <p>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
                <h3 className='text-[18px] my-6'>Key Benefits</h3>
                <p className='mb-2'>&bull; &nbsp; &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className='mb-2'>&bull; &nbsp; &nbsp;Maecenas ullamcorper est et massa mattis condimentum.</p>
                <p className='mb-2'>&bull; &nbsp; &nbsp;Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</p>
                <p className='mb-2'>&bull; &nbsp; &nbsp;Etiam nec massa et lectus faucibus ornare congue in nunc.</p>
                <p className='mb-2'>&bull; &nbsp; &nbsp;Mauris eget diam magna, in blandit turpis.</p>
                </div>
            </div>
        </section>
        <section className='mt-8 w-[1320px] h-[401px]'>
            <div className='flex  justify-between'>
                <h3 className='text-[32px]'>Similar Products</h3>
                <Image src={"/shopping detail/Arrow icon.png"}
                alt='pic'
                width={100}
                height={39}/>
            </div>
            
            <div className='w-[1320px] flex flex-wrap flex-col lg:flex-row items-center justify-center gap-6 my-8'>
            {Product.map((list)=>(
                <div key={list.id}>
                    <Image src={list.img}
                    alt={list.title}
                    width={312}
                    height={267}/>
                    <h3 className='text-[18px] text-left my-2'>{list.title}</h3>
                    <div className='text-[16px] flex '><h3 className='text-[#ff9f0d] mr-4 mb-20'>{list.rate}</h3><h3><del>{list.notrate}</del></h3></div>
                </div>
                ))}
            </div>
        </section>
        </div>
    </main>);
}


export default ShopDetail;