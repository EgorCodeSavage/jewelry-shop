const Bucket = () => {
    return ( 
        <div className="bucket_page">
            <div className="bucket_items">
                <div className="bucket_items_inner_title">
                    <div className="bucket_items_title">
                        <h2>Корзина</h2>
                        <p>Num.:4552233</p>
                    </div>
                    <button className="bucket_items_countinue">Продолжить покупки</button>
                    <button className="bucket_items_clear">Очистить корзину</button>
                </div>
            </div>
            <div className="bucket_items_content">
                    
            </div>
            <div className="bucket_order"></div>
        </div>
     );
}
 
export default Bucket;