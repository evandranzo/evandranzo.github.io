import PropTypes from 'prop-types'

function List(props){

    const category = props.category
    const itemList = props.items;

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); // Reverse alphabetical order
    //fruits.sort((a,b) => a.calories - b.calories); // Numeric
    //fruits.sort((a,b) => b.calories - a.calories); // Reverse Numeric

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    //const highCalFruits = fruits.filter(fruit => fruit.calories > 100)


    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return( <>
                <h3 className="list-category">{category}</h3>
                <ol classname="list-items">{listItems}</ol>
            </>);
}
List.faultProps = {
    category : "Category",
    items: [],
}
export default List