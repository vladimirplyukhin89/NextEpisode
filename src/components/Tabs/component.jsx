import { restaurants } from "../../../materials/mock.js";

export const Tabs = ({ openTab, activeTab }) => {
    console.log('activeTab', activeTab)
    return (
        <div className='tabs'>
            {
                restaurants.map((restaurant, index) => (
                    <div key={restaurant.id}>
                        <button
                            className={index === activeTab ? 'active' : ''}
                            data-index={index}
                            onClick={openTab}
                        >{restaurant.name}</button>
                    </div>
                ))
            }
        </div>
    )
}
