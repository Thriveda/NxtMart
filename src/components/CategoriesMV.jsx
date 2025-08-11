import { useState } from "react"
import './index.css'


const categoryArr = [
    {
        name:"All",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754748256/grocery-store_1_w1ot2y.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754818131/grocery-store_c2hl1r.png"
    },
    {
        name:"Fuits & Vegetables",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754748109/vegetable_2_mdtao8.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754818353/vegetable_htxouc.png"
    },
    {
        name:"Cold Drinks & Juices",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754748354/frappe_1_yg8hjd.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754818692/frappe_1_exb41l.png"
    },
    {
        name:"Beverages",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754748564/fast-food_1_livgql.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754818760/fast-food_rqwyix.png"
    },
    {
        name:"Foodgrains, Oil & Masala",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754748678/chana-masala_1_gjnga2.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754818936/chana-masala_1_vw0qru.png"
    },
    {
        name:"Bakery, Cakes & Dairy",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754748779/dairy-products_1_olds5m.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754819064/dairy-products_prnrz5.png"
    },
    {
        name:"Snacks & Branded Foods",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754748896/snack_1_zsz7ap.png",
        image:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754834650/snack_2_nbjifh.png"
    },
    {
        name:"Eggs, Meat & Fish",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754748955/proteins_1_lnpiph.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754819543/proteins_txmmcf.png"
    },
    {
        name:"Gourmet & World Food",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754749066/cereals_1_avjkf2.png",
        image:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754834566/cereals_2_dawsc3.png"
    },
    {
        name:"Baby Care",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754749125/care_1_lalbam.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754819762/care_qpec5m.png"
    },
    {
        name:"Cleaning & Household",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754749195/tools_1_z04ylj.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754819871/tools_m9nmr9.png"
    },
    {
        name:"Beauty & Hygiene",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754749450/skincare_1_hwrsu1.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754819922/cosmetic_wnjipz.png"
    },
    {
        name:"Kitchen, Garden & Pets",
        img:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754749562/pet-supplies_1_i0tlsv.png",
        image:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754834451/pet-supplies_2_vjxiu4.png"
    },
    {
        name:"Chocolates & Candies",
        img:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754749533/chocolate_upt4hk.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754820049/chocolate_y7ub8k.png"
    },
    {
        name:"Dry Fruits",
        img:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754749424/pistachio_aizdvk.png",
        image:"https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754834376/pistachio_1_zpp1qv.png"
    },
    {
        name:"Indian Mitai",
        img:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754748963/laddu_ifonok.png",
        image:"https://res.cloudinary.com/dybw1km5u/image/upload/v1754820267/laddu_w3iujq.png"
    }
]

function CategoriesMV(){
    const [click, setClick] = useState("All")

    function selectCategory(name){
        setClick(name)
    }
    return (
         <div className="">
            <h1 className="text-xl text-[#088C03] font-semibold ml-4 mt-4">Categories</h1>
            <ul className="flex flex-row justify-start items-start overflow-x-auto w-screen no-scrollbar">
                {categoryArr.map((each)=>{
                    return (
                        <li className="flex flex-col justify-center items-center m-4">
                            <a href={`#${each.name}`} onClick={()=>selectCategory(each.name)}>
                                <div className={`size-14 rounded-md flex flex-col justify-center items-center ${click===each.name?  'bg-[#088C03]' : 'bg-gray-100'}`}>
                                    <img src={click===each.name?  each.image :each.img } className="size-8" alt={each.name} />
                                </div>
                            </a>
                            
                            <p className="text-gray-500 line-clamp-2">{each.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div> 
    )
}

export default CategoriesMV

