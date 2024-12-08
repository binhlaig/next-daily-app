
import './tobar.scss'
import Image from 'next/image'
import { fetchshops } from '@/lib/data'
import Link from 'next/link';

const ToBar = async () => {
    const shops = await fetchshops();
    return (
        <div className="topBox">
            <h1>Shop</h1>
            <div className="list">
                {shops.map((shop) => (
                    <div className="listItem" key={shop.id}>
                        <div className="user">

                            <Image
                                src={shop.profileImagePath || "/noavatar.png"}
                                alt=""
                                width={30}
                                height={30}
                            />

                            <div className="userTexts">
                                <Link href={`/profile/${shop.id}`} >
                                    <span className="username">{shop.shopname}</span>
                                </Link>
                            </div>
                            <span className="amount">{shop.date?.toString().slice(4, 16)}</span>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default ToBar