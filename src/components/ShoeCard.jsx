const ShoeCard = ({shoeData, changeBigShoeImage, bigShoeImg}) => {
    
    const handleClick = () => {
        if (shoeData.bigShoe !== bigShoeImg){
            changeBigShoeImage(shoeData.bigShoe)
        }
    }

    return (
        <div className={`
                        border-2 rounded-xl
                        ${shoeData.bigShoe === bigShoeImg?'border-coral-red':'border-transparent'}
                        cursor-pointer
                        `}
                        
                onClick={handleClick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover h-20 w-20 sm:w-40 sm:h-40 rounded-xl max-sm:p-5">
                <img src={shoeData.thumbnail} alt="Shoe image" 
                    width={131} height={103}
                    className="object-contain"
                    />
            </div>
        </div>
    )
}

export default ShoeCard