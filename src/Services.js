import {useState} from 'react'
import {data} from './data'
const Services = () => {
    const [inventory, setInventory] = useState(data);
    const [active, setActiveProduct] = useState('');
                    // display inventory
    const inventoryProduct =() =>{
                    return (
                    <>
                {inventory.map((product) => {
                    
                const{id,image,price,details} = product;
                return(
                <div key={id} className="displayRow">
                        <div className="card medium">
                            <div className="card-image">
                                <img src={image} alt="image" />
                            </div>
                            <div className="card-content">
                                <p> {details}</p> 
                            </div>
                            <div className="card-action btn-adjust">
                                <button className="waves-effect waves-light btn btn-small" >#{price}</button>
                            </div>
                        </div>
                </div>
                )
            })}
            </>
        )
    }

                // filter particular group

        function filterInventory(id){
            const filterGroup = setInventory( data.filter((group) => {
                if(id === 'raw-food'){
                    return group.type.includes('raw-food');
                }else if (id === 'meat'){
                   return group.type.includes('meat');
                }else if(id === 'food'){
                   return group.type.includes('raw-food');
                }else if(id === 'fruits'){
                   return group.type.includes('raw-food');
                }
                // return (
                //     group.type('raw-food')
                // )
            }) 
            )
            // return filterGroup
            setActiveProduct(filterGroup);
        }


                // rendering into servies page
            return ( 
                <div className="gridInv ">
                    <ul className="tabs tabs-fixed-width tab-demo z-depth-1" >
                        <li className="tab" onClick={() => filterInventory('food')}><a href="#food">FOOD</a></li>
                        <li className="tab" onClick={() => filterInventory('meat')}><a className='active' href="#meat">MEAT</a></li>
                        <li className="tab" onClick={() => filterInventory('raw-food')}><a href="#raw-food">RAW Food Stuffs</a></li>
                        <li className="tab" onClick={() => filterInventory('fruits')}><a href="#fruits">FRUITS</a></li>
                    </ul>
                    
                        {inventoryProduct() } 
                        {/* {  filterInventory()} */}          
                </div>
            );
            
}
 
export default Services;