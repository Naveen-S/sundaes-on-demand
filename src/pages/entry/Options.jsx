import axios from "axios"
import {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Options({optionType}) {
  const [items, setItems] = useState([]);

  // optionType is scoops or toppings.
  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`).then(response => {
      setItems(response.data);
    }).catch((error => {

    }));
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  
  const optionItems = items.map(item => {
    return <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath}/>
  })
  return <Row> {optionItems}</Row>
}