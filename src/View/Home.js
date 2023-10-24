import { React, useState, useEffect } from 'react';
import '../App.css';

import CustomField from '../components/CustomField'
import CustomTxtField from '../components/CustomTxtField'

function Home() {

    useEffect(() => {
        console.log("hommies")},[]
        );
    
    
    const [checked, setChecked] = useState(true);


    const handleCheck = () => {
        setChecked(!checked);
        console.log(checked);
    }

    return (
    <div className='container inner90'>
        <div className="titletxt">Hong Kong Car Rental</div>
        <div className="titletxt2">
            <label>Return car in same location:</label>  
            <input type='checkbox' value={checked} onClick={(e)=> handleCheck()} />
        </div>
        <div id="SearchForm">
            <div className="loc" style={{"minWidth":"400px"}}>
                <CustomTxtField txt="Pick-up location" val="default location" show_element="true"/>
                {checked? <CustomTxtField txt="Drop-off location" val="default location2" show_element="true"/> : null}
            </div>
            <div>
                <CustomField icon="date" txt="Pick-up date" val="a" />
                <CustomField icon="time" txt="Time" val="b"/>
            </div>
            <div>
                <CustomField icon="date" txt="Drop-off date" val="c" />
                <CustomField icon="time" txt="Time" val="d"/>
            </div>
            <div><button className='submitBtn' onClick={() => console.log("button")}>Search</button></div>
        </div>

        
    </div>
  )
}

export default Home